import clientPromise from "./mongoDb";
import {MongoClient} from "mongodb";

let client;
let db : Db;
let messages;

async function init()
{
    if(db) return;
    try {
        client = await clientPromise;
        db = client.db();

        //FIND CLIENT TYPE
        messages = await db.collection();

    }catch(err)
    {
        console.log(err);
    }
}