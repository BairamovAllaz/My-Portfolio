import React from 'react'
import Image from 'next/image'


interface props {
    size : number
}

function Icon({size}: props) {
    return (
        <div>
            <Image src="/me.png" width={size} height={size} className="rounded-[50%]"/>
        </div>
    )
}

export default Icon