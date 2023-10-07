import nodemailer from "nodemailer";

const emailUser = process.env.EMAIL_USER;
const emailUserPw = process.env.EMAIL_USER_PASSWORD;
const emailUserAlias = process.env.EMAIL_USER_ALIAS;

export const transport = nodemailer.saveTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailUserPw,
  },
});

export const transportOptions = {
  from: `Collect <${emailUserAlias}>`,
  to: emailUser,
  replyTo: emailUser,
};

export type FeedbackFormDto = {
  email: string;
  name?: string;
};

export type Data = {
  success: boolean;
  message?: string;
};
