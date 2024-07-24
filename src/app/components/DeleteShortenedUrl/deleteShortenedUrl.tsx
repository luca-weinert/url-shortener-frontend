"use client"

import React, {useState} from "react";
import {Card, CardBody, CardHeader, Input} from "@nextui-org/react";
import {ApiService} from "@/app/services/ApiService";
import {DeleteIcon} from "@nextui-org/shared-icons";
import ActionButton from "@/app/components/Buttons/ActionButton";

export default function DeleteShortenedUrl() {
    const [urlToBeDeleted, setUrlToBeDeleted] = useState<string>("");
    const apiService = new ApiService()

    async function DeleteUrl() {
        console.log("Deleting...", urlToBeDeleted);
        apiService.DeleteShortenedUrl(urlToBeDeleted);
    }

    return (
        <>
            <Card className="mt-3.5 mb-3.5">
                <CardHeader>
                    <h1>Delete shortened URL:</h1>
                </CardHeader>
                <CardBody>
                    <Input
                        isClearable
                        className="w-full"
                        value={urlToBeDeleted}
                        type="url"
                        onValueChange={setUrlToBeDeleted}
                        placeholder="https://short.de/5wgsY" 
                    />
                    <ActionButton 
                        className="w-full mt-1.5"
                        label="Delete" 
                        action={DeleteUrl} 
                        icon={<DeleteIcon />} 
                        color="danger" />
                </CardBody>
            </Card>
        </>
    );
}
