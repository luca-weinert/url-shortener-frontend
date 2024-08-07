"use server";

import {PrismaClient} from "@prisma/client";
import {user} from "@nextui-org/react";

export async function generateShortenedUrl(targetUrl: string) {
    const alias = generateRandomAlias();
    const prisma = new PrismaClient();
    const host = process.env.NEXT_PUBLIC_HOST;
    const fullShortenedUrl = host + "/" + alias;
    await prisma.shortenedUrl.create({
        data: {
            alias: alias,
            targetUrl: targetUrl,
            clicks: 0
        }
    });
    return fullShortenedUrl;
}

export async function getTargetUrl(alias: string): Promise<string> {
    const prisma = new PrismaClient();
    const targetUrl = await prisma.shortenedUrl.findFirst({where: {alias}});
    return targetUrl ? targetUrl.targetUrl : "";
}

export async function increaseClickCount(alias: string) {
    const prisma = new PrismaClient();
    
    const shortenedUrl = await prisma.shortenedUrl.findFirst({where: {alias}});
    
    if (!shortenedUrl) {
        return;
    }
    
    await prisma.shortenedUrl.update({
        where: {
            alias: alias 
        },
        data: {
            clicks: shortenedUrl.clicks +1
        }
    })
}

function generateRandomAlias(): string {
    let result = '';
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 5; i > 0; --i) {
        result += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return result;
}