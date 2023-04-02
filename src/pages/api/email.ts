// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {Data, FeedbackFormDto, transport, transportOptions} from "../../config/nodemailer";
import EmailTemplate from "../../../emails/waitlist-confirm-email.html";

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

    const subjectTitle = requestData.name
        ? `Hello! We've accepted a request to join the waitlist from ${requestData.name}`
        : "Hello! We've accepted a request to join the waitlist"

    try {
      await transport.sendMail({
        ...transportOptions,
        replyTo: requestData.email,
        subject: `Request to join the waiting list from ${requestData.name ?? requestData.email}`,
        html: `
          <h1>
             ${subjectTitle}
          </h1>
          <p>
            Contact email is: ${requestData.email}        
          </p>
        `
      })

      await transport.sendMail({
        ...transportOptions,
        to: requestData.email,
        subject: "You've subscribed to the Collect waiting list",
        html: EmailTemplate
      })

      res.status(200).json({ success: true });
    }
    catch (error) {
      return res.status(500).json({ success: false, message: error as unknown as string })
    }
  }
}
