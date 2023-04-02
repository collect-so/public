import {Data, FeedbackFormDto} from "../config/nodemailer";

const request = async <T>(url: string, config: RequestInit): Promise<T> => {
    const response = await fetch(url, config);
    return await response.json()
}

export const sendForm = async (data: FeedbackFormDto) => {
    return await request<Data>("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json", Accept: "application/json"},
    })
}