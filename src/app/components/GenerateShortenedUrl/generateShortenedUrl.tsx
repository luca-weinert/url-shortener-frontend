import React, {useState} from "react";
import {Card, CardBody, CardHeader, Input, Spinner} from "@nextui-org/react";
import ActionButton from "@/app/components/Buttons/ActionButton";
import {ArrowRightIcon} from "@nextui-org/shared-icons";
import CopyButton from "@/app/components/Buttons/CopyButton";
import {CardFooter} from "@nextui-org/card";
import {ShortenerService} from "@/app/services/shortenerService";

export default function GenerateShortenedUrl() {
    const [targetUrl, setTargetUrl] = useState<string>("");
    const [shortenedUrl, setShortenedUrl] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const shortenerService = new ShortenerService()
    
    async function GetShortenedUrl() {
        const test = shortenerService.generateShortenedUrl("https://wwww.test.de");
        console.log(test);
        console.log(test);
        setShortenedUrl(test);
        window.location.replace('...');
    }

    return (
        <Card className="mt-3.5 mb-3.5">
            <button onClick={GetShortenedUrl}>test</button>
            <CardHeader>
                <h2>Generate new shortened URL:</h2>
            </CardHeader>
            <CardBody>
                <Input
                    className="w-full"
                    type="text"
                    isClearable
                    value={targetUrl}
                    onValueChange={setTargetUrl}
                    label="Please enter URL: "
                    placeholder="https://www.example.com"
                />
                <Input
                    className="w-full mt-1.5"
                    label="Shortened URL:"
                    isReadOnly
                    type="url"
                    value={shortenedUrl}
                    endContent={
                        <CopyButton color="success" valueToCopy={shortenedUrl}/>
                    }
                />
                <ActionButton
                    className="w-full mt-1.5"
                    label="generate"
                    color="primary"
                    icon={loading ? <Spinner size="sm" color="danger"/> : <ArrowRightIcon/>}
                    action={GetShortenedUrl}
                />
            </CardBody>
            <CardFooter>
                {error ? <p>ERROR!</p> : null}
            </CardFooter>
        </Card>
    );
}
