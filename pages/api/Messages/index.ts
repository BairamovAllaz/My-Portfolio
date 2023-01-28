import {NextApiRequest, NextApiResponse} from "next";
import messageCollection from "../../../src/Models/Messages";
import mongoDb from "../../../src/helper/mongoDb";
import nodemailer from "nodemailer";
const handler = async(req : NextApiRequest,res : NextApiResponse) => {
    if(req.method === 'GET')
    {
        try {
            messageCollection.find({}).lean().exec((err,messages) => {
                if(err) throw new Error("Something went wrong");
                return res.status(200).json({messages});
            });
        }catch(err)
        {
            console.log(err);
            return res.status(500).json({error: err});
        }
    }else if(req.method === "POST")
    {
        try{
            const {name,email,subject,message} = req.body;
            const query = {name,email,subject,message},
                update = { expire: new Date() },
                options = { upsert: true, new: true, setDefaultsOnInsert: true };

            messageCollection.findOneAndUpdate(query,update,options,function(err,result){
                if(err) res.status(404).send(err.message);
                console.log("Inserted Done");
            });

            const transPorter = nodemailer.createTransport({
                host: process.env.HOST,
                port: 587,
                secure: false,
                auth: {
                    user: process.env.MY_EMAIL,
                    pass: process.env.PASSWORD,
                },
            });

            let info = await transPorter.sendMail({
                from: email, // sender address
                to: process.env.MY_EMAIL, // list of receivers
                subject: subject, // Subject line
                text: message, // plain text body
                html: "<b></b>", // html body
            });
            return res.status(200).send({email, name, subject, message});
        }catch(err)
        {
            console.log(err);
            return res.status(500).json({error: err});
        }
    }
}
export default mongoDb(handler);