"use client";

import GenerateShortenedUrl from "@/app/components/GenerateShortenedUrl/generateShortenedUrl";
import {useUser} from '@auth0/nextjs-auth0/client';

export default function Home() {
    const {user, error, isLoading} = useUser();

    return (
        <>
            <a href="/api/auth/login">Login</a><br/>
            <a href="/api/auth/logout">Logout</a>

            {user ?
                <>
                    <h1>User: </h1>
                    <img src={user?.picture!} alt={user?.name!}/>
                    <p>{user.picture}</p>
                    <p>{user?.name}</p>
                    <p>{user.nickname}</p>
                    <p>{user.email}</p>
                    <p>{user.sub}</p>
                    <p>{user.org_id ? 'org_id = yes' : 'org_id = no'}</p>
                    <p>{user.updated_at}</p>
                    <p>{user.email_verified ? 'yes' : 'no'}</p>
                    <p></p>
                </> : null}

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