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
            const query = {name,email,subject,message},
                update = { expire: new Date() },
                options = { upsert: true, new: true, setDefaultsOnInsert: true };

            messageCollection.findOneAndUpdate(query,update,options,function(err,result){
                if(err) res.status(404).send(err.message);
                console.log("Inserted Done");
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