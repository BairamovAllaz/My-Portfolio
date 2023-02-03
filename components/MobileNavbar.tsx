import {AiOutlineMenu} from 'react-icons/ai'
import {useDispatch} from "react-redux";
import {toogleisMobilNavigationMenuOpen} from "../slices/stateSlice";
function MobileNavbar()
{
    const dispatch = useDispatch();

    function handleMobilToggle()
    {
        dispatch(toogleisMobilNavigationMenuOpen());
    }

    return(
        <div className="block sm:hidden w-full h-[50px] flex justify-end items-center pr-4">
            <div className="text-2xl text-slate-200"
                onClick = {handleMobilToggle}>
                <AiOutlineMenu/>
            </div>
        </div>
    )
}
export default MobileNavbar;