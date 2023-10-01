"use server";

import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "chaudharyluv33@gmail.com",
      subject: "Message from contact form",
    });
  } catch (error: unknown) {
    return {
    //   error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};