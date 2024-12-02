import React from 'react'
import { useRouter } from 'next/router'
import { AiFillFacebook,AiOutlineInstagram,AiFillLinkedin,AiFillGithub } from 'react-icons/ai';
import { RedirectStatusCode } from 'next/dist/client/components/redirect-status-code';

function Links() {
    const router = useRouter();
    function redirect(path: string): void {
        router.push(path);
    }
    return (
            <div className = "w-full h-full flex justify-center">
                <div className = "flow-root grid grid-flow-col w-64 place-items-center mt-8 h-20">
                <div className = "ml-1 sm:ml-3 w-[4rem] h-[4rem] bg-[#0f172a] flex justify-center items-center hover:bg-[#72E2AE] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                    onClick={() => redirect("https://github.com/BairamovAllaz")}
                >
                        <AiFillGithub className = "text-3xl text-slate-200 cursor-pointer hover:text-slate-600"/>
                </div>
                <div className = "ml-1 sm:ml-3 w-[4rem] h-[4rem] bg-[#0f172a] flex justify-center items-center hover:bg-[#72E2AE] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                    onClick={() => redirect("https://www.facebook.com/profile.php?id=100091208222443")}
                >
                        <AiFillFacebook className = "text-3xl text-slate-200 cursor-pointer hover:text-slate-600"/>
                </div>
                <div className = "ml-1 sm:ml-3 w-[4rem] h-[4rem] bg-[#0f172a] flex justify-center items-center hover:bg-[#72E2AE] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                    onClick={() => redirect("https://www.instagram.com/Bairamov_Allaz/?fbclid=IwZXh0bgNhZW0CMTAAAR1c1Ojcnf71s1QK0KTtnUhf4farWKoJ1yacmYFvEEeoS9DyxfZJDMKSW64_aem_Q4pZ8gnqxcPA0YAJDIsnGg#")}
                >
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