import { TypeAnimation } from 'react-type-animation';

function AutoText()
{ 
    return(
        <div className = "block flex-row sm:flex text-slate-200 text-[30px] sm:text-[40px] mt-5 justify-center text-center">
                    <p className = "text-center">Hi, I am</p>
                    <TypeAnimation
                        className = "pl-4 text-[#72E2AE]"
                        sequence={[
                            'Allaz Bairamov',
                            2000,
                            'Software Enginner',
                            2000,
                            'Javascript Developer',
                            2000,
                            '.NET Developer',
                            2000,
                            'Backend Developer',
                            3000,
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