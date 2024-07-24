import axios from "axios";
import {UpdateUrlRequest} from "@/app/Dtos/Dtos";

export class ApiService {
    async GetShortenedUrlFor(originalUrl: string): Promise<string> {
        try {
            const {data} = await axios.get("http://localhost:5120/short",
                {
                    params: {
                        targetUrl: originalUrl,
                    }
                }
            );
            return Promise.resolve(JSON.parse(data.data.fullShortenUrl));
        } catch (err) {
            console.warn('Error shortening URL:', err);
            return Promise.reject(); // Return an empty string or handle the error as needed
        }
    }

    async ChangeTargetForShortenedUrl(request: UpdateUrlRequest) {
        try {
            const response = await axios.patch("http://localhost:5120/change", request);
            console.log('Target URL changed successfully:', response.data);
        } catch (err) {
            console.warn('Error changing target URL:', err);
        }
    }

    async DeleteShortenedUrl(urlToBeDeleted: string) {
        try {
            const response = await axios.delete("http://localhost:5120/delete", {
                data: urlToBeDeleted,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Target URL deleted successfully:', response.data);
        } catch (err) {
            console.warn('Error deleting target URL:', err);
        }
    }
}
