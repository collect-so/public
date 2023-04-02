import nodemailer from "nodemailer"

const emailUser = process.env.EMAIL_USER;
const emailUserPw = process.env.EMAIL_USER_PASSWORD

export const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: emailUser,
        pass: emailUserPw
    },
}, {
    from: emailUser,
    replyTo: emailUser
})

export const transportOptions = {
    to: emailUser
}

export interface FeedbackFormDto {
    email: string;
    name: string;
}

export type Data = {
    success: boolean;
    message?: string;
};