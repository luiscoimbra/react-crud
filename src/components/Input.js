import React from 'react'
import Button from './Button'

export default ({sendaction, value, onchange}) => (
    <div>
        <input type="text" onChange={onchange} value={value} />
        <Button text="Add" onclick={sendaction}></Button>
    </div>
)