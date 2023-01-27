const nodemailer = require("nodemailer");
import SMTPTransport from "nodemailer/lib/smtp-transport";

export interface IinfoMailer{
    senderEmail : string,
    subject : string,
    text : string
}

class EmailSender
{
    transporter : any;

    constructor() {
        this.transporter = this.config();
    }

    config() : any
    {
        return nodemailer.createTransport({
            host: process.env.HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASSWORD,
            },
        });
    }

    async sendEmail(infoMailer : IinfoMailer) : Promise<boolean> {
        let info = await this.transporter.sendMail({
            from: process.env.HOST, // sender address
            to: infoMailer.senderEmail, // list of receivers
            subject: infoMailer.subject, // Subject line
            text: infoMailer.text, // plain text body
            html: "<b></b>", // html body
        });
        if(!info)
        {
            return false;
        }
        return true;
    }
}

export default EmailSender;