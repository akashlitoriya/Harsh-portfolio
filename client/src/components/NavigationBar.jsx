import React from 'react'
import { useAnimate, stagger } from 'framer-motion'

const NavigationBar = ({section}) => {
    const navItems = [
        {
            id:0,
            num: 1,
            heading: "Home"
        },
        {
            id:1,
            num:2,
            heading: "Work"
        },
        {
            id:2,
            num: 3,
            heading: "About"
        },
        {
            id:3,
            num:4,
            heading:"Contact"
        },
        // {
        //     id:4,
        //     num: 5,
        //     heading: "Review"
        // }

    ]
    return (
    <div className='h-4/6 relative w-full'>
        <div className='w-2 h-full bg-text_secondary rounded-full absolute top-0 left-0 translate-x-[6.3rem] z-0 flex flex-col justify-evenly'>
            {
                navItems.length > 0 && navItems.map((item) => (
                    <div key={item.id} className={`w-2 h-2 ${item.id === section? "bg-blue_primary": "bg-white"}`}></div>
                ))
            }
        </div>
        <ul className='w-full flex flex-col justify-evenly h-full p-2 font-Montserrat text-xl'>
            {
                navItems.length > 0 && navItems.map((item)=>(
                    <li key={item.id} className={`w-full flex ${item.id === section? "flex-row" : "flex-row-reverse"} justify-around items-center gap-4`}>
                        <p className={`w-1/2 ${item.id === section? "text-white text-right pr-3": "text-left"}`}>0{item.num}</p>
                        <p className={`w-1/2 ${item.id !== section? "block":"hidden"}`}></p>
                        <p className={`w-1/2 ${item.id !== section? "hidden": "block text-white"}`}>{item.heading}</p>
                        
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavigationBar
