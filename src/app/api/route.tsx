import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {headers} from "next/headers";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const shortCode = searchParams.get("shortCode");
    console.log("shortCode", shortCode);
    const shortenedUrls = await prisma.shortenedUrl.findMany();
    // return new Response('Hello, Next.js!', {
    //     status: 200,
    //     headers: { 'Set-Cookie': `token=124565` },
    // })
    // return NextResponse.json(shortenedUrls);
    return NextResponse.redirect("https://www.youtube.de", {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
}

export async function POST() {
    
}

