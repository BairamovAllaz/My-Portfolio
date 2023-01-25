import mongoose from 'mongoose';
const uri : string | undefined = process.env.MONGODB_URI;
if(!uri)
{
    console.log("Please create your connection string inside .env");
}
const connectDB = (handler : any) => async (req : any, res : any) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    // Use new db connection
    // @ts-ignore
    await mongoose.connect(uri);
    return handler(req, res);
};
export default connectDB;