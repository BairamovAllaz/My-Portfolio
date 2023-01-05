import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Icon from './Icon';
import Links from './Links'

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
                            2000,
                            '.NET Developer',
                            2000,
                            'Backend Developer',
                            2000,
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
            <Links/>
        </div>
    </div>
  )
}

export default ProfileBox