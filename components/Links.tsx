import React from 'react'
import { AiFillFacebook,AiOutlineInstagram,AiFillLinkedin,AiFillGithub } from 'react-icons/ai';

function Links() {
    return (
            <div className = "w-full h-full flex justify-center">
                <div className = "flow-root grid grid-flow-col w-64 place-items-center mt-8 h-20">
                    <div className = "ml-1 sm:ml-3 w-[4rem] h-[4rem] bg-[#0f172a] flex justify-center items-center hover:bg-[#72E2AE] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                        <AiFillGithub className = "text-3xl text-slate-200 cursor-pointer hover:text-slate-600"/>
                    </div>
                    <div className = "ml-1 sm:ml-3 w-[4rem] h-[4rem] bg-[#0f172a] flex justify-center items-center hover:bg-[#72E2AE] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                        <AiFillFacebook className = "text-3xl text-slate-200 cursor-pointer hover:text-slate-600"/>
                    </div>
                    <div className = "ml-1 sm:ml-3 w-[4rem] h-[4rem] bg-[#0f172a] flex justify-center items-center hover:bg-[#72E2AE] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                        <AiOutlineInstagram className = "text-3xl text-slate-200 cursor-pointer hover:text-slate-600"/>
                    </div>
                    <div className = "ml-1 sm:ml-3 w-[4rem] h-[4rem] bg-[#0f172a] flex justify-center items-center hover:bg-[#72E2AE] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                        <AiFillLinkedin className = "text-3xl text-slate-200 cursor-pointer hover:text-slate-600"/>
                    </div>
                </div>
            </div>
            )
}

export default Links