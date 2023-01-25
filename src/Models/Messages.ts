import mongoose from 'mongoose';
import * as trace_events from "trace_events";
var Schema = mongoose.Schema;

var messages = new Schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required : true
    },
    subject : {
        type: String,
        required : true
    },
    message: {
        type : String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
// @ts-ignore
mongoose.models = {};

var messageCollection = mongoose.model('Messages', messages);
export default messageCollection;