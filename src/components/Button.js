import React from 'react'

export default ({text, onclick}) => {
    
    console.log()

    return (
        <button onClick={onclick}>
            {text}
        </button>
    )
    
}
    
