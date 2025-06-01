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
        <div className="block p-2 sm:hidden w-full flex justify-end items-center fixed top-0 left-0 right-0 z-50  pr-4 bg-[#0B1223] overflow-hidden">
            <div className="text-2xl text-slate-200"
                onClick = {handleMobilToggle}>
                <AiOutlineMenu/>
            </div>
        </div>
    )
}
export default MobileNavbar;