import React, {useState} from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                {count}
            </div>
            <div>
                <button>minus</button>
                <button>plus</button>
            </div>

        </>
    )
}
