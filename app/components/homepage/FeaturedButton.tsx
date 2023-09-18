import React from 'react'


type buttonProps = {
    title: string,
    icon: string,
    color: string
}

const FeaturedButton = (props : buttonProps) => {
  return (
    <button className={`flex items-center justify-evenly bg-[${props.color}] h-[50px] px-4 rounded-full text-white font-mont font-semibold hover:brightness-125 transition-all`}>
        <p className='uppercase text-lg'>{props.title}</p>
        <i className="symbol !text-2xl"> {props.icon} </i>
    </button>
  )
}

export default FeaturedButton