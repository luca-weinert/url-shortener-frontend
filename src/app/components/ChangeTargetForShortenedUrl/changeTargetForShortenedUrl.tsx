import React, {useState} from "react";
import {Card, CardBody, CardHeader, Input, Spinner} from "@nextui-org/react";
import {ArrowRightIcon} from "@nextui-org/shared-icons";
import {UpdateUrlRequest} from "@/app/Dtos/Dtos";
import {ApiService} from "@/app/services/ApiService";
import ActionButton from "@/app/components/Buttons/ActionButton";

export default function ChangeTargetForShortenedUrl() {
    const [shortenedUrl, setShortenedUrl] = useState<string>("");
    const [newTargetUrl, setNewTargetUrl] = useState<string>("");
    const apiService = new ApiService()
    const [loading, setLoading] = useState<boolean>(false);
    
    async function ChangeTargetForShortenedUrl() {
        setLoading(true);
        const request = new UpdateUrlRequest()
        request.ShortenedUrl = shortenedUrl;
        request.NewTargetUrl = newTargetUrl;
        apiService.ChangeTargetForShortenedUrl(request);
    }
    
    return (
        <>
            <Card className="mt-3.5 mb-3.5">
                <CardHeader>
                    <h1>Change target for existing URL:</h1>
                </CardHeader>
                <CardBody>
                    <Input 
                        className="w-full"
                        type="url"
                        isClearable
                        value={shortenedUrl}
                        onValueChange={setShortenedUrl}
                        label="Please enter URL do you want to change: "
                        placeholder="https://short.de/5wgsY"
                    />
                    <Input
                        className="w-full mt-1.5"
                        type="url"
                        isClearable
                        value={newTargetUrl}
                        onValueChange={setNewTargetUrl}
                        label="Please enter the new target URL: "
                        placeholder="https://short.de/5wgsY"
                    />
                    <ActionButton
                        className="w-full mt-1.5"
                        label="change target" 
                        color="secondary"
                        icon={loading ? <Spinner size="sm" color="danger"/> : <ArrowRightIcon />}
                        action={ChangeTargetForShortenedUrl} 
                    />
                </CardBody>
            </Card>
        </>
    );
}
