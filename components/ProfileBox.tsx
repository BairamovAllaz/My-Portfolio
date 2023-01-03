import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
function ProfileBox() {
  return (
    <div className = "w-120 border-slate-100 flex flex-col justify-center place-items-center h-screen font-bold">
        <div>
            <Image src = "/me.png" width = {200} height = {200} className = "rounded-[50%]"/>
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
            <div className = "flow-root grid grid-flow-col grid-flow-col w-64 place-items-center">
                <div className = "w-30">1</div>
                <div className = "w-30">2</div>
                <div className = "w-30">3</div>
                <div className = "w-30">4</div>
                <div className = "w-30">5</div>
            </div>
        </div>
    </div>
  )
}

export default ProfileBox