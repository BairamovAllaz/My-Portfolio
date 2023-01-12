import ContactBox from "./ContactBox";
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
function ContactInfo()
{
    return(
        <div>
            <div>
                <h1 className="text-slate-200 text-2xl font-bold">Contact Information</h1>
                <p className="text-[#808291] pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, iusto harum possimus non praesentium qui facere.</p>
            </div>
            <div>
                <ContactBox title="Contact On Phone" info="+79516720209" icon={BsTelephone}/>
                <ContactBox title="Email" info="ellezbayramov2004@gmail.com" icon={AiOutlineMail}/>
                <ContactBox title="Address" info="Russia Sain Peterburg" icon={HiLocationMarker}/>
            </div>
        </div>
    )
}
export default ContactInfo;