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
    const requestData: FeedbackFormDto = req.body

    if (!requestData.name || !requestData.email || (requestData.email && !baseEmail.test(requestData.email))) {
      return res.status(400).json({ success: false })
    }

    try {
      await transport.sendMail({
        ...transportOptions,
        replyTo: requestData.email,
        subject: `Request to join the waiting list from ${requestData.name ?? requestData.email}`,
        html: ReactDOMServer.renderToString(WaitListSelf({
          email: requestData.email,
          name: requestData.name
        }))
      })

      await transport.sendMail({
        ...transportOptions,
        to: requestData.email,
        subject: "Thank You for Joining the Collect Waitlist!",
        html: ReactDOMServer.renderToString(WaitListClient({
          name: requestData.name
        }))
      })

      res.status(200).json({ success: true });
    }
    catch (error) {
      return res.status(500).json({ success: false, message: error as unknown as string })
    }
  }
}
