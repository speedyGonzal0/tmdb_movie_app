import React from 'react'

const LanguageButton = () => {
  return (
    <button className='text-white font-rbt bg-[#362F33] w-[131px] h-[34px] flex items-center justify-evenly transition-all hover:bg-[#413a3e]'>
        <i className="symbol"> language </i>
        English
        <i className="symbol"> expand_more </i>
    </button>
  )
}

export default LanguageButton