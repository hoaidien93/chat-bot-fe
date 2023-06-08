import { ask } from "../api/ask"

export const useAskApi = () => {
    return {
        askApi: async (content: string, signal?: AbortSignal): Promise<string> => {
            try {
                const response = await ask(content, signal);
                return response.data;
            }catch(e: any){
                // By passing cancel signal to the request, we can catch the error and handle it
                if(e.code === "ERR_CANCELED") throw e;
                console.error(e)
                return 'Something went wrong';
            }
        }
    }
}