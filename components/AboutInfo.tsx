import React from "react";
function AboutInfo()
{
    return(
        <div className="p-8">
            <div className= "text-slate-200 text-2xl font-bold">
                <h1>Hi, I am <span className="text-[#72E2AE]">Allaz Bairamov</span></h1>
            </div>
            <div className="text-slate-200 p-5">
                <ul className="list-disc">
                    <li>First Name: Allaz</li>
                    <li>Last Name: Bairamov</li>
                    <li>Age: 21 years</li>
                    <li>Nationality: Georgian</li>
                    <li>Languages: Azerbaijani, Georgia,English,Russian</li>
                    <li>Address: Georgia Tbilisi</li>
                    <li>Work: Available</li>
                </ul>
            </div>
            <div className="p-2">
                <form method="get" action="/MyResume.pdf">
                    <button className="bg-[#72E2AE] p-3 rounded-lg">DOWNLOAD RESUME</button>
                </form>
            </div>
        </div>
    )
}
export default AboutInfo;