import React from 'react'


type buttonProps = {
    title: string,
    icon: string,
    color: string
}

const ActionButton = (props : buttonProps) => {
  return (
    <button className={`flex items-center justify-evenly h-[50px] px-4 rounded-full text-white font-mont font-semibold hover:brightness-125 transition-all`} style={{backgroundColor: `${props.color}`}}>
        <p className='uppercase text-lg'>{props.title}</p>
        <i className="symbol !text-2xl"> {props.icon} </i>
    </button>
  )
}

export default ActionButton