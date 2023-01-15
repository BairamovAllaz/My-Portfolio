import React from 'react'
import Image from 'next/image'

interface props {
    size : number
}
function Icon({size}: props) {
    return (
        <div>
            <Image src="/me.png" width={size} height={size} className="animate-all rounded-[50%] animate-border inline-block bg-[#72E2AE] from-sky-800 via-red-500 to-purple-700 bg-[length:400%_400%] p-1 bg-gradient-to-r"/>
        </div>
    )
}
export default Icon