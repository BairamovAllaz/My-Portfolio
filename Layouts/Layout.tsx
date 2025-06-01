import Bar from '../components/Bar'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import Navigation from "../components/Navigation";
import MobileNavbar from "../components/MobileNavbar";
import MobilNavigation from "../components/MobilNavigation";
// @ts-ignore
export default function Layout({ children }) {
    const isNavigationOpen = useSelector((state: RootState) => state.state.isNavigationOpen);
    const isMobileNavigationOpen = useSelector((state: RootState) => state.state.isMobilNavigationMenuOpen);
    return (
            <>
            <div className="flex h-screen bg-[#0B1223]">
                <div className="w-[5%] sm:block hidden">
                    <Bar/>
                </div>
                <div className = "w-[100%] sm:w-[95%]">
                    <main>
                        {
                            isNavigationOpen ? (
                                <div className="w-full bg-[#0B1223]">
                                    <MobileNavbar/>
                                    {
                                        isMobileNavigationOpen ? (
                                            <MobilNavigation/>
                                        ) : (
                                            <div>
                                                {children}
                                            </div>
                                        )
                                    }
                                </div>
                            ) : (
                                <div className="h-screen bg-[#0B1223]">
                                    <Navigation/>
                                </div>
                            )
                        }
                    </main>
                </div>
            </div>
            </>
            )
}