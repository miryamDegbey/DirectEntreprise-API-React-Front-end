import React from 'react'
import './Input.css'
export default function Input({
    value, 
    onChange, 
    placeHolder, 
    type,
    label,
    reference
}) {
    return (
        <div className='input'>
            <label htmlFor={reference}>{label}</label>
            <input
                type={type}
                placeholder={placeHolder}
                value={value} 
                onChange={onChange}
                id={reference}
            />
        </div>
    )
}
