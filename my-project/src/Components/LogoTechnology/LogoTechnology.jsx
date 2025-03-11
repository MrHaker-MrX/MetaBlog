import React from 'react'

function LogoTechnology({bgColor, textColor,darkBgColor, darkTextColor}) {
  return (
    <div className={`w-[97px] h-[28px] flex items-center justify-center rounded-[6px] p-[5px] ${darkBgColor} ${darkTextColor}   ${textColor} ${bgColor}`}>Technology</div>

  )
}

export default LogoTechnology
