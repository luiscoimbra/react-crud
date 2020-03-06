import React from 'react'
import Button from './Button'

export default ({sendaction, value, onchange}) => (
    <>
        <input className="InputText" type="text" onChange={onchange} value={value} />
        <Button text="Add" onclick={sendaction}></Button>
    </>
)