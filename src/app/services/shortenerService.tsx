import {PrismaClient} from "@prisma/client"

export class ShortenerService {
    private readonly host: string | undefined = undefined;
    private prisma: PrismaClient;
    
    constructor() {
    this.host = process.env.NEXT_PUBLIC_HOST || undefined;
    this.prisma = new PrismaClient();
    }

    public generateShortenedUrl(targetUrl: string) {
        const shortCode = this.generateShortCode(); 
        return this.host + "/" + shortCode;
    }
    
    public async getTargetUrl(alias: string): Promise<string> {
        const targetUrl = await this.prisma.shortenedUrl.findFirst({where: {alias}});
        return targetUrl ? targetUrl.url : "";
    }
    
    private generateShortCode(): string {
        let result = '';
        let chars = process.env.CHARS
        
        for (let i = 5; i > 0; --i)
        {
            result += chars![Math.round(Math.random() * (chars!.length - 1))];
        }
        return result;
    }
}