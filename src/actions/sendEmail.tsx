"use server";

import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.NEXT_GOOGLE_CLIENT_ID,
  process.env.NEXT_GOOGLE_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.NEXT_GOOGLE_REFRESH_TOKEN,
});

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("text") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Campos incompletos" };
  }

  const accessToken = await oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.NEXT_EMAIL_USER,
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.NEXT_GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken.token!,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.NEXT_EMAIL_USER}>`,
      to: process.env.NEXT_EMAIL_TO,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Error enviando el correo" };
  }
}
