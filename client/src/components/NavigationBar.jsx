import React, {useEffect, useRef} from 'react'
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
    const container = useRef(null);
    console.log(container.current?.offsetWidth)
    return (
    <div ref={container} className='h-4/6 relative w-full ml-3 rounded-xl bg-white bg-opacity-5 backdrop-blur-md grid grid-flow-col grid-cols-12'>
        <ul className='flex flex-col justify-evenly h-full p-2 font-Montserrat text-xl col-span-5'>
            {
                navItems.length > 0 && navItems.map((item)=>(
                    <li key={item.id} className={`w-full`}>
                        <p className={` ${item.id === section? "text-white font-semibold text-right": "hidden"}`}>0{item.num}</p>
                        <p className={` ${item.id !== section? "block h-[1.75rem]":"hidden"}`}></p>
                    </li>
                ))
            }
        </ul>

        <div>
            <div className={`w-2 m-auto h-full bg-text_secondary rounded-full z-0 flex flex-col justify-evenly`}>
                {
                    navItems.length > 0 && navItems.map((item) => (
                        <div key={item.id} className={`w-2 h-2 ${item.id === section? "bg-blue_primary": "bg-white"}`}></div>
                    ))
                }
            </div>
        </div>
        <ul className='w-full flex flex-col justify-evenly h-full p-2 font-Montserrat text-xl col-span-5'>
            {
                navItems.length > 0 && navItems.map((item)=>(
                    <li key={item.id} className={`w-full`}>
                        <p className={`w-1/2 ${item.id !== section? "block":"hidden"}`}>0{item.num}</p>
                        <p className={`w-1/2 ${item.id !== section? "hidden": "block text-white font-semibold"}`}>{item.heading}</p>
                        
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavigationBar
