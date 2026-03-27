"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("text") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Campos incompletos" };
  }

  const html = `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Nuevo mensaje de contacto</title></head>
<body style="margin:0;padding:0;background-color:#FAF8F5;font-family:Georgia,serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#FAF8F5;padding:48px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 2px 24px rgba(160,149,135,0.10);">

          <!-- ACCENT BAR -->
          <tr>
            <td style="background-color:#B5AA96;height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td style="background-color:#FFFFFF;padding:40px 48px 32px;border-bottom:1px solid #EDE9E3;">
              <p style="margin:0;font-family:Georgia,serif;font-size:20px;font-weight:700;color:#A09587;letter-spacing:5px;text-transform:uppercase;">GRUPO NRV</p>
              <p style="margin:8px 0 0;font-family:'Courier New',monospace;font-size:10px;color:#C8C0B2;letter-spacing:3px;text-transform:uppercase;">Nuevo mensaje de contacto</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background-color:#FFFFFF;padding:40px 48px;">

              <!-- Nombre -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:20px 0;border-bottom:1px solid #EDE9E3;">
                    <p style="margin:0 0 6px;font-family:'Courier New',monospace;font-size:9px;color:#C8C0B2;letter-spacing:3px;text-transform:uppercase;">Nombre</p>
                    <p style="margin:0;font-family:Georgia,serif;font-size:17px;color:#A09587;font-weight:700;">${name}</p>
                  </td>
                </tr>
              </table>

              <!-- Email -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:20px 0;border-bottom:1px solid #EDE9E3;">
                    <p style="margin:0 0 6px;font-family:'Courier New',monospace;font-size:9px;color:#C8C0B2;letter-spacing:3px;text-transform:uppercase;">Correo electrónico</p>
                    <p style="margin:0;font-family:Georgia,serif;font-size:15px;color:#A09587;">${email}</p>
                  </td>
                </tr>
              </table>

              <!-- Mensaje -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:28px;">
                <tr>
                  <td style="background-color:#FAF8F5;border-radius:8px;border-left:3px solid #B5AA96;padding:24px;">
                    <p style="margin:0 0 10px;font-family:'Courier New',monospace;font-size:9px;color:#C8C0B2;letter-spacing:3px;text-transform:uppercase;">Mensaje</p>
                    <p style="margin:0;font-family:Georgia,serif;font-size:15px;color:#A09587;line-height:1.9;">${message}</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#EDE9E3;padding:20px 48px;">
              <p style="margin:0;font-family:'Courier New',monospace;font-size:9px;color:#C8C0B2;letter-spacing:1px;">Mensaje enviado desde el formulario de contacto de <span style="color:#B5AA96;">gruponrv.com</span></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: `Formulario de contacto <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO!.split(","),
    subject: `Nuevo mensaje de ${name}`,
    html,
  });

  if (error) {
    console.error(error);
    return { success: false, error: "Error enviando el correo" };
  }

  return { success: true };
}
