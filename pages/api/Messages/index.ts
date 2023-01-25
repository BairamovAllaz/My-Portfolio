import {NextApiRequest, NextApiResponse} from "next";
import messageCollection from "../../../src/Models/Messages";
import mongoDb from "../../../src/helper/mongoDb";
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
            console.log("Email : " + email);
        }catch(err)
        {
            console.log(err);
            return res.status(500).json({error: err});
        }
    }
}
export default mongoDb(handler);