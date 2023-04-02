// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {Data, FeedbackFormDto, transport, transportOptions} from "../../config/nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    const requestData: FeedbackFormDto = req.body

    if (!requestData.name || !requestData.email) {
      return res.status(400).json({ success: false })
    }

    try {
      await transport.sendMail({
        ...transportOptions,
        subject: `Request to join the waiting list from ${requestData.name}`,
        html: `
          <h1>
             Hello! We've accepted a request to join the waitlist from ${requestData.name}
          </h1>
          <p>
            Contact email is: ${requestData.email}        
          </p>
        `
      })

      res.status(200).json({ success: true });
    }
    catch (error) {
      return res.status(500).json({ success: false, message: error as unknown as string })
    }
  }

}
