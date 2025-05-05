import React from 'react'

const CustomHeading = ({ titleOne, titleTwo, customClass }) => {
    return (
        <h2 className={`text-4xl xl:text-5xl font-bold text-zinc-700 mb-6 ${customClass}`}>
            {titleOne} <span className="text-slate-600">{titleTwo}</span>
        </h2>
    )
}

export default CustomHeading
