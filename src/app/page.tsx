"use client"

import GenerateShortenedUrl from "@/app/components/GenerateShortenedUrl/generateShortenedUrl";

export default function Home() {
    return (
        <>
            <div className="container mx-auto mt-8 bg">
                <h1 className="text-center font-extrabold text-3xl mb-3.5">Basic URL Shortener</h1>
                <div className="bg-gray-700 p-5 border-1 rounded-3xl shadow-md border-gray-200">
                    <GenerateShortenedUrl/>
                    {/*<ChangeTargetForShortenedUrl/>*/}
                    {/*<DeleteShortenedUrl/>*/}
                </div>
            </div>
        </>
    );
}