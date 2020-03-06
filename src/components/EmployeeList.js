import React, { useState } from 'react'
import Employee from './Employee'



export default ({employees, deleteAction}) => (
    employees.map(employee => (
        <Employee key={employee.id} employee={employee} deleteAction={deleteAction} />
    ))
)