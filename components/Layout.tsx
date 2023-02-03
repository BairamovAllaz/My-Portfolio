import Bar from './Bar'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import Navigation from "./Navigation";
import MobileNavbar from "./MobileNavbar";
import MobilNavigation from "./MobilNavigation";
// @ts-ignore
export default function Layout({ children }) {
    const isNavigationOpen = useSelector((state: RootState) => state.state.isNavigationOpen);
    const isMobileNavigationOpen = useSelector((state: RootState) => state.state.isMobilNavigationMenuOpen);
    return (
            <>
            <div className = "flex">
                <div className = "w-[5%]">
                    <Bar/>
                </div>
                <div className = "w-[100%] sm:w-[95%]">
                    <main>
                        {
                            isNavigationOpen ? (
                                <div className="w-full h-full bg-[#0B1223]">
                                    <MobileNavbar/>
                                    {
                                        isMobileNavigationOpen && (
                                            <MobilNavigation/>
                                        )
                                    }
                                    {children}
                                </div>
                            ) : (
                                <div className="h-screen">
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