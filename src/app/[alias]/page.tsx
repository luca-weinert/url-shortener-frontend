import {getTargetUrl, increaseClickCount} from "@/app/services/shortenerService";
import {permanentRedirect} from "next/navigation";

interface AliasPageProps {
    params: {
        alias: string;
    }
}

export default async function AliasPage({ params } : AliasPageProps) {
    const {alias} = params;
    const targetUrl = await getTargetUrl(alias);
    await increaseClickCount(alias);
    return permanentRedirect(targetUrl)
    
    return (
        <>
        </>
    )
}