import Bar from './Bar'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import Navigation from "./Navigation";

export default function Layout({ children }) {
    const isNavigationOpen = useSelector((state: RootState) => state.state.isNavigationOpen);
    return (
            <>
            <div className = "flex">
                <div className = "w-[5%]">
                    <Bar/>
                </div>
                <div className = "w-[95%]">
                    <main>
                        {
                            isNavigationOpen ? (
                                <div>{children}</div>
                            ) : (
                                <Navigation/>
                            )
                        }
                    </main>
                </div>
            </div>
            </>
            )
}