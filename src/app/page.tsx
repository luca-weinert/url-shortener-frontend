"use client";

import GenerateShortenedUrl from "@/app/components/GenerateShortenedUrl/generateShortenedUrl";

export default function Home() {
    return (
        <>
            <div className="container mx-auto mt-8 bg">
                <div className="text-center mb-3.5">
                    <h1 className="text-center font-extrabold text-3xl">TinyRoute</h1>
                    <p>a very basic URL shortener</p>
                </div>
                <div className="bg-gray-700 p-5 border-1 rounded-3xl shadow-md border-gray-200">
                    <GenerateShortenedUrl/>
                </div>
            </div>
        </>
    );
}