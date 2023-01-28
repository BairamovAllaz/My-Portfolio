import React from 'react'
import {bool} from "prop-types";
function ContactInputs()
{
    const submitForm = async(event : any) => {
        saveMessageToDatabase(event);
        clearInputs(event);
    }

    function saveMessageToDatabase(event : any)
    {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        if(isEmpty(name,email,subject,message))
        {
            return;
        }
        const raw = JSON.stringify({
            name,
            email,
            subject,
            message,
        });
        const myHeaders = new Headers();

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        myHeaders.append("Content-Type", "application/json");
        // @ts-ignore
        fetch("/api/Messages", requestOptions)
            .then(t => t.json())
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log("error", error));
    }


    function isEmpty(name : string,email : string,subject : string,message : string) : boolean {
        if(name === "" || email === "" || subject === "" || message === "")
        {
            alert("Please fill all the field");
            return true;
        }
        return false;
    }

    function clearInputs(event : any)
    {
        event.target.name.value = "";
        event.target.email.value = "";
        event.target.subject.value = "";
        event.target.message.value = "";
    }

    return(
        <div className = "bg-[#162033] w-full h-full p-6">
            <div>
                <form className = "block w-full space-y-4"
                      method="POST"
                      onSubmit={submitForm}
                >
                    <div className="p-2">
                        <label htmlFor={"name"} className="text-slate-200 font-bold">Name</label>
                        <input placeholder="Enter your name"
                               className = "border-2 border-gray-800 w-full h-[50px] mt-6 bg-[#161F32] focus:border-[#72E2AE] text-slate-200"
                               name = "name"
                        />
                    </div>
                    <div className = "p-2">
                        <label htmlFor={"email"} className="text-slate-200 font-bold">Email</label>
                        <input placeholder="Enter your email"
                               className="border-2 border-gray-800 w-full h-[50px] mt-4 bg-[#161F32] focus:border-[#72E2AE] text-slate-200"
                               name = "email"
                        />
                    </div>
                    <div className="p-2">
                        <label htmlFor={"subject"} className="text-slate-200 font-bold">Subject</label>
                        <input placeholder="Enter Subject"
                               className="border-2 border-gray-800 w-full h-[50px] mt-4 focus:border-[#72E2AE] bg-[#161F32] text-slate-200"
                               name = "subject"
                        />
                    </div>
                    <div className="w-full p-2">
                        <textarea placeholder="Enter your message"
                               className="border-2 border-gray-800 bg-[#161F32] text-slate-200"
                                  rows={4} cols={60}
                                  name = "message"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type = "submit" className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactInputs;