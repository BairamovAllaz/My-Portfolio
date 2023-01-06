import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Icon from './Icon';
import Links from './Links'
import AutoText from './AutoText';

function ProfileBox() {
  return (
          <div className = "border-slate-100 flex flex-col justify-center place-items-center h-screen font-bold">
        <div>
            <Icon size={150}/>
        </div>
        <div>
            <AutoText/>
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