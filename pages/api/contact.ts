import { NextApiRequest, NextApiResponse } from "next";
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.json("ERROR: required method post");
    return;
  }
  const { body } = req;

  const message = `
  	<h1>Vous avez reçu un nouveau mail depuis votre portfolio:</h1><br/>
  	<h2>En provenance de <strong>${body.name}</strong>, (${body.email})</h2><br/>
  	<h4>${body.message}</h4>
  `;

  const data = {
    to: "abdoulaye.fal5@gmail.com",
    from: "contact@abdoulayefall.com",
    subject: body.subject,
    html: message,
  };

  try {
    await mail.send(data);
    res.json("Success");
    return;
  } catch (error) {
    res.json(error);
    return;
  }
}
