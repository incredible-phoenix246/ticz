"use server"
import prisma from "prisma";

export async function sign_in(email: string, full_name: string) {
    let user = await prisma.user.findUnique({
        where: { email }
    });
    if (!user) {
        user = await prisma.user.create({
            data: {
                email,
                full_name,
            }
        });
    }
    return user;
}