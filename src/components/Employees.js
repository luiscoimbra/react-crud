import React, { useState } from 'react'
import Input from './Input'
import EmployeeList from './EmployeeList'

const employeesMock = [
    {id: 1, name: "John"},
    {id: 2, name: "Cass"}
  ]

export default class Employees extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: employeesMock,
            inputText: ""
        }
    }

    validateInput(string) {
        
    }

    add = () => {

        let newEmployees = this.state.employees
        newEmployees.push(this.state.inputText)
        
        this.setState(state => {
            return {
                employees: newEmployees,
                inputText: ""
            }
        })

        console.log(this.state)
    }

    handleInputChange = ({target}) => {
        this.setState(state => ({inputText: target.value}))
    }
    
    render () {
        return (
            <React.Fragment>
                <Input sendaction={this.add} onchange={this.handleInputChange} value={this.state.inputText}></Input>
                <EmployeeList state={this.state}></EmployeeList>
            </React.Fragment>
        )
    }
        

}
    