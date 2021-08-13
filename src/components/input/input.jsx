import React from 'react'

export const Input = React.forwardRef(({value,onChange,children}) => {
    return (
        <>
            <label>
                <span>{children}</span>
                <input value={value} onChange={onChange}/>
            </label>

        </>
    )
})
