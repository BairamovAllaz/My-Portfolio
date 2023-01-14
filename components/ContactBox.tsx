import React from "react";
import { IconType } from "react-icons";

interface props{
    icon : IconType;
    title:string;
    info: string;
}

function ContactBox(props:props)
{
    return(
        <div className="w-full h-32 bg-[#162033] mt-4 rounded-lg">
            <div className="flex mb-5">
                <div className = "w-16 h-16 bg-slate-800 flex justify-center items-center m-6 rounded-full">
                    <props.icon className="text-3xl text-[#72e2ae] font-bold"/>
                </div>
                <div className="mt-6 space-y-2">
                    <h1 className="text-slate-200 text-2xl font-bold">{props.title}</h1>
                    <div className="text-[#9899A8]">
                        <p>{props.info}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ContactBox;