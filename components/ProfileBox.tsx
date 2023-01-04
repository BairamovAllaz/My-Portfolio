import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { AiFillFacebook,AiOutlineInstagram,AiFillLinkedin,AiFillGithub } from 'react-icons/ai';
import Icon from './Icon';

function ProfileBox() {
  return (
          <div className = "border-slate-100 flex flex-col justify-center place-items-center h-screen font-bold">
        <div>
            <Icon size={150}/>
        </div>
        <div className = "">
            <div className = "flex flex-row text-slate-200 text-[40px] mt-5 justify-center">
                    <p className = "text-center">Hi, I am</p>
                    <TypeAnimation
                        className = "pl-4 text-[#72E2AE]"
                        sequence={[
                            'Allaz Bairamov',
                            1000,
                            'Software Enginner',
                            2000,
                            'Javascript Developer',
                            4000,
                            '.NET Developer',
                            6000,
                            'Backend Developer',
                            8000,
                            'Student'
                        ]}
                        wrapper="p"
                        cursor={true}
                        repeat={Infinity}
                    />
            </div>
            <p className = "text-slate-100 text-center mt-4 text-gray-400 flex justify-center ">
                I am a frontend web developer. I can provide clean code and pixel perfect design. 
                I also make website more & more interactive with web animations.
            </p>
            <div className = "w-full flex justify-center">
                <div className = "flow-root grid grid-flow-col w-64 place-items-center mt-8 h-20">
                    <div className = "ml-3 w-[4rem] h-[4rem] bg-[#0f172a] flex justify-center items-center">
                        <AiFillGithub className = "text-3xl text-slate-200 cursor-pointer"/>
                    </div>
                    <div className = "ml-3 w-[4rem] h-[4rem] bg-[#0f172a] flex justify-center items-center">
                        <AiFillFacebook className = "text-3xl text-slate-200 cursor-pointer"/>
                    </div>
                    <div className = "ml-3 w-[4rem] h-[4rem] bg-[#0f172a] flex justify-center items-center">
                        <AiOutlineInstagram className = "text-3xl text-slate-200 cursor-pointer"/>
                    </div>
                    <div className = "ml-3 w-[4rem] h-[4rem] bg-[#0f172a] flex justify-center items-center">
                        <AiFillLinkedin className = "text-3xl text-slate-200 cursor-pointer"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileBox