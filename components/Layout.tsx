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
            <div className = "flex">
                <div className = "w-[5%]">
                    <Bar handleIsNavigationOpen = {handleIsNavigationOpen} IsNavigationOpen = {isNavigationOpen}/>
                </div>
                <div className = "w-[95%]">
                    <main>
                        {React.Children.map(children, (child) =>
                            React.cloneElement(child, { IsNavigationOpen : isNavigationOpen })
                        )}
                    </main>
                </div>
            </div>
            </>
            )
}