import React from "react";
import {IWaitListData} from "./wait-list-self";

type IWaitListClientData = Pick<IWaitListData, 'name'>

export const WaitListClient = ({ name }: IWaitListClientData) => {
    return (
        <div>
            <h1>Thank You for Joining the Collect Waitlist!</h1>
            <p>Dear {name || "user"},</p>
            <p>Thank you for your interest in Collect! We're thrilled to have you on board and excited to get to know you better. You are now officially on our waitlist and will be one of the first to know when we launch.</p>
            <p>In the meantime, feel free to check out our website for more information about our product and the latest updates. We'll be in touch soon with more details on how you can get access to Collect.</p>
            <p>Thank you again for joining the Collect community. If you have any questions or concerns, don't hesitate to reach out to us. You can also follow us on <a href="https://www.linkedin.com/company/collect-so/">LinkedIn</a> and <a href="https://twitter.com/CollectAPI">Twitter</a> for more updates.</p>
            <p>Best regards, <br/>Collect Team</p>
        </div>
    );
}
