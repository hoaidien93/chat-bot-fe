import { ApiInstance } from "."

export const ask = (message: string, signal?: AbortSignal) => {
    return ApiInstance.getInstance().post("/chatbot", { message }, {
        signal
    });
}