import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    const shortenedUrls = await prisma.shortenedUrl.findMany();
    return NextResponse.json(shortenedUrls);
}

