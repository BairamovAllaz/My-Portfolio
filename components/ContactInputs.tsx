import React from 'react'
function ContactInputs()
{
    return(
        <div className = "bg-[#162033] w-full h-full">
            <div>
                <form className = "block w-full space-y-4">
                    <div>
                        <input placeholder="Enter your name"
                               className = "w-full h-[50px] mt-6 bg-[#161F32] p-6 text-slate-200"/>
                    </div>
                    <div className = "">
                        <input placeholder="Enter your email"
                               className="w-full h-[50px] mt-4 bg-[#161F32] border-[#72E2AE] p-6 text-slate-200"/>
                    </div>
                    <div>
                        <input placeholder="Enter Subject"
                               className="w-full h-[50px] mt-4 bg-[#161F32] p-6 text-slate-200"/>
                    </div>
                    <div className="w-full">
                        <textarea placeholder="Enter your message"
                               className="mt-4 bg-[#161F32]"
                                  rows={4} cols={50}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactInputs;