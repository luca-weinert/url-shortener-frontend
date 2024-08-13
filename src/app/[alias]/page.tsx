import {getTargetUrl, increaseClickCount} from "@/app/services/shortenerService";
import {notFound, permanentRedirect} from "next/navigation";

interface AliasPageProps {
    params: {
        alias: string;
    }
}

export default async function AliasPage({ params } : AliasPageProps) {
    const {alias} = params;
    const targetUrl = await getTargetUrl(alias);
    
    if (!targetUrl) {
        notFound();
    }
    
    await increaseClickCount(alias);
    return permanentRedirect(targetUrl)
}