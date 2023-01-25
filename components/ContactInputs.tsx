import React from 'react'
function ContactInputs()
{

    const submitForm = (event : any) => {

        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;

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
        fetch(process.env.SITE_URI + "/api/Messages", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("Succesfull saved to database");
            })
            .catch(error => console.log("error", error));
    }

    return(
        <div className = "bg-[#162033] w-full h-full">
            <div>
                <form className = "block w-full space-y-4"
                      method="POST"
                      onSubmit={submitForm}
                >
                    <div>
                        <input placeholder="Enter your name"
                               className = "w-full h-[50px] mt-6 bg-[#161F32] p-6 text-slate-200"
                               name = "name"
                        />
                    </div>
                    <div className = "">
                        <input placeholder="Enter your email"
                               className="w-full h-[50px] mt-4 bg-[#161F32] border-[#72E2AE] p-6 text-slate-200"
                               name = "email"
                        />
                    </div>
                    <div>
                        <input placeholder="Enter Subject"
                               className="w-full h-[50px] mt-4 bg-[#161F32] p-6 text-slate-200"
                               name = "subject"
                        />
                    </div>
                    <div className="w-full">
                        <textarea placeholder="Enter your message"
                               className="mt-4 bg-[#161F32]"
                                  rows={4} cols={50}
                                  name = "message"
                        />
                    </div>
                    <div>
                        <button type = "submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactInputs;