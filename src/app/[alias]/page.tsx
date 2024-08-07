import {ShortenerService} from "@/app/services/shortenerService";
import {permanentRedirect} from "next/navigation";

interface AliasPageProps {
    params: {
        alias: string;
    }
}

export default async function AliasPage({ params } : AliasPageProps) {
    const {alias} = params;
    const shortenerService = new ShortenerService();
    const targetUrl = await shortenerService.getTargetUrl(alias)
    return permanentRedirect(targetUrl)
    
    
    return (
        <>
            <h1>{alias}</h1>
        </>
    )
}