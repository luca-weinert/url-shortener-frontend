export class ShortenerService {
    private readonly host: string | undefined = undefined;

    constructor() {
    this.host = process.env.NEXT_PUBLIC_HOST || undefined;
    }

    public generateShortenedUrl(targetUrl: string) {
        const shortCode = this.generateShortCode(); 
        return this.host + "/" + shortCode;
    }
    
    private generateShortCode(): string {
        let result = '';
        let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        
        for (let i = 5; i > 0; --i)
        {
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        return result;
    }
}
