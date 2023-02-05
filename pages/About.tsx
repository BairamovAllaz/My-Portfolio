import React from 'react'
import {MdDeveloperMode} from 'react-icons/md'
import {SiFrontendmentor,SiDotnet} from 'react-icons/si'
import Head from 'next/head'
import AboutImage from "../components/AboutImage";
import AboutInfo from "../components/AboutInfo";
import ServiceBox from "../components/ServiceBox";


function About()
{
    return(
        <>
         <Head>
                <title>About</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className = "w-full flex justify-center">
            <div className = "md:w-[50%] w-screen md:h-[30%] h-screen mt-12 sm:mt-36">
                <div className="text-center text-slate-100 font-bold text-4xl">
                    <h1>ABOUT ME</h1>
                </div>
                <div className = "md:flex mt-12 block">
                    <div className="md:w-[50%] w-[90%] md:h-[30%] h-[40%] flex justify-center ml-auto mr-auto">
                        <AboutImage/>
                    </div>
                    <div className = "md:w-[50%] w-full md:h-[30%] h-full">
                        <AboutInfo/>
                    </div>
                </div>
                <div className="mt-0 sm:mt-20 bg-[#0B1223]">
                    <div className="flex justify-center text-center text-slate-100 font-bold text-4xl">
                        <h1>
                            MY SERVICES
                        </h1>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start sm:space-x-4 mt-12 sm:mb-12">
                        <ServiceBox icon={MdDeveloperMode} title="Backend Development" about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam etiam venenatis mi tristique amet cras diam etiam."/>
                        <ServiceBox icon={SiFrontendmentor} title="FrontEnd Development" about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam etiam venenatis mi tristique amet cras diam etiam."/>
                        <ServiceBox icon={SiDotnet} title=".NET Development" about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue diam etiam venenatis mi tristique amet cras diam etiam."/>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default About;