import React from 'react'
import Head from "next/head";
import ContactInfo from "../components/ContactInfo";
import ContactInputs from "../components/ContactInputs";

function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="w-full flex justify-center">
                <div className = "w-screen md:h-[30%] h-screen mt-36">
                    <div className="text-center text-slate-100 font-bold text-4xl">
                        <h1>Contact US</h1>
                    </div>
                    <div className="block sm:flex justify-center mt-16 space-x-4">
                        <div className="w-[40%] h-96">
                            <ContactInfo/>
                        </div>
                        <div className="w-[40%] bg-slate-600 h-max">
                            <ContactInputs/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact;