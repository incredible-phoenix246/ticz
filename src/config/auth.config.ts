import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import { inDevEnvironment } from "@/utils";
import { sign_in } from "@/actions/auth";
import { User } from "@prisma/client";

const DEFAULT_EMAIL_VERIFIED = null;
interface ExtendedUser extends User {
    emailVerified: Date | null;
}

const authConfig: NextAuthConfig = {
    providers: [
        Google({
            checks: ["none"],
        }),
    ],
    basePath: "/api/auth",
    session: {
        strategy: "jwt",
    },
    debug: inDevEnvironment,
    trustHost: true,
    callbacks: {
        async signIn({ account, profile, user }) {
            if (account?.provider === "google" && profile?.email) {
                return true;
            }
            return !!user;
        },
        async jwt({ token, account, profile, session, trigger, user }) {
            if (trigger === "update") {
                token = { ...token, ...session };
                return token;
            }
            if (account && account.provider === "google") {
                if (!profile?.email) {
                    return null;
                }
                const res = await sign_in(profile.email, profile.name as string);
                user = {
                    ...user,
                    ...res,
                    emailVerified: DEFAULT_EMAIL_VERIFIED,
                };

                return { ...token, ...user };
            }
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token as unknown as ExtendedUser;
            return session;
        },
    },
} satisfies NextAuthConfig;

export default authConfig;
