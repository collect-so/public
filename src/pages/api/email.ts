// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {Data, FeedbackFormDto, transport, transportOptions} from "../../config/nodemailer";
import {WaitListSelf} from "../../components/email/wait-list-self";
import ReactDOMServer from 'react-dom/server';
import {WaitListClient} from "../../components/email/wait-list-client";

const baseEmail = /^\S.*@\S+$/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    const { name, email }: FeedbackFormDto = req.body

    if (!email || (email && !baseEmail.test(email))) {
      return res.status(400).json({ success: false })
    }

    try {
      await transport.sendMail({
        ...transportOptions,
        replyTo: email,
        subject: `Request to join the waiting list from ${name ?? email}`,
        html: ReactDOMServer.renderToString(WaitListSelf({
          email,
          name
        }))
      })

      await transport.sendMail({
        ...transportOptions,
        to: email,
        subject: "Thank You for Joining the Collect Waitlist!",
        html: ReactDOMServer.renderToString(WaitListClient({
          name
        }))
      })

      res.status(200).json({ success: true });
    }
    catch (error) {
      return res.status(500).json({ success: false, message: error as unknown as string })
    }
  }
}
