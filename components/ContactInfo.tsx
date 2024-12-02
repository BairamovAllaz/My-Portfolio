import ContactBox from "./ContactBox";
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
function ContactInfo()
{
    return(
        <div>
            <div className="text-center md:text-justify">
                <h1 className="text-slate-200 text-2xl font-bold">Contact Information</h1>
                <p className="text-[#808291] pt-3">You can contact me anytime</p>
            </div>
            <div className="w-96">
                <ContactBox title="Contact On Phone" info="557584496" icon={BsTelephone}/>
                <ContactBox title="Email" info="socialbairamovi2004@gmail.com" icon={AiOutlineMail}/>
                <ContactBox title="Address" info="Tbilisi" icon={HiLocationMarker}/>
            </div>
        </div>
    )
}
export default ContactInfo;