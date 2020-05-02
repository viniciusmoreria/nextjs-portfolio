const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, design, pages, message } = req.body;

  const content = {
    to: email,
    cc: 'viniciusmoreeira@icloud.com',
    from: 'viniciusmoreeira@icloud.com',
    templateId: 'd-858b7a1f1efb4d2f88ca9a2bff4ed0b7',
    dynamic_template_data: {
      subject: `${name}, recebi seu email com sucesso.`,
      name: `${name}`,
      design: `${design}`,
      pages: `${pages}`,
      message: `${message}`,
    },
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
