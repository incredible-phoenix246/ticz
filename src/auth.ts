import NextAuth from 'next-auth'
import type { DefaultSession } from 'next-auth'
import { User } from '@prisma/client';
import authConfig from './config/auth.config';


export const {
    handlers: { GET, POST },
    auth,
    unstable_update,
} = NextAuth({
    ...authConfig,
    secret: process.env.AUTH_SECRET,
});


declare module 'next-auth' {
    interface Session {
        user: User & Omit<DefaultSession['user'], 'id'>;
    }
}