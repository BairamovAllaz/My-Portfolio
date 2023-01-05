import Bar from './Bar'
import React from 'react'
export default function Layout({ children }) {
    const [isNavigationOpen,setIsNavigationOpen] = React.useState(false);

    function handleIsNavigationOpen(event)
    {
        setIsNavigationOpen(event);
    }

    return (
            <>
                <Bar handleIsNavigationOpen = {handleIsNavigationOpen} IsNavigationOpen = {isNavigationOpen}/>
                <main>
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child, { IsNavigationOpen : isNavigationOpen })
                    )}
                </main>
            {
                //FIX SCREEN ISSUE
            }
            </>
            )
}