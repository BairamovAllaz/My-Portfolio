import { TypeAnimation } from 'react-type-animation';

function AutoText()
{ 
    return(
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
    )
}

export default AutoText;