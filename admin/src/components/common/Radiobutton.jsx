import React from 'react'

const Radiobutton = ({isSelected, setSelected}) => {
  return (
    <div className='border-2 border-cyan_primary rounded-full h-6 w-12 flex items-center' onClick={()=>setSelected()}>
      <div className={`h-4 w-4 bg-cyan_primary rounded-full transition-all duration-300 transform ${isSelected? "translate-x-6": "translate-x-1"}`}>

      </div>
    </div>
  )
}

export default Radiobutton
