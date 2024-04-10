import React from "react";

export type IWaitListData = {
  email: string;
  name?: string;
};

export const WaitListSelf = ({ email, name }: IWaitListData) => {
  const subjectTitle = name
    ? `Hello! We've accepted a request to join the waitlist from ${name}`
    : "Hello! We've accepted a request to join the waitlist";
  return (
    <div>
      <h1>{subjectTitle}</h1>
      <p>Contact email is: {email}</p>
    </div>
  );
};
