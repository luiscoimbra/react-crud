import React, { useState } from 'react'
import Input from './Input'
import EmployeeList from './EmployeeList'
import Warning from './Warning'
import {getEmployees, deleteEmployee, addEmployee} from '../api'
import Loading from './Loading'

const MIN_NAME_LENGTH = 3  

export default class Employees extends React.Component {

    constructor(props) {
        super(props)

        // Init state
        this.state = {
            employees: [],
            inputText: "",
            showWarning: false,
            warningMessage: "",
            isLoading: false
        }
    }

    componentDidMount() {
        this.updateEmployees()
    }

    updateEmployees() {

        this.setState({isLoading: true})

        getEmployees()
            .then(employees => this.setState({
                employees: employees,
                isLoading: false 
            }))
            .catch(err => this.setState({
                isLoading: false,
                warningMessage: "Something went wrong on server",
                showWarning: true
            }))
    }

    validateInput() {
        return (this.state.inputText.length > MIN_NAME_LENGTH)
    }

    add = () => {

        if (this.state.isLoading) return;

        if (!this.validateInput()) {
            this.setState(state => ({
                showWarning: true,
                warningMessage: `Name must have more than ${MIN_NAME_LENGTH} characters`
            }))
            return
        };

        let employee = {name: this.state.inputText}

        addEmployee(employee).then(() => {
            this.updateEmployees()
        })

        this.setState({showWarning: false})
        
    }

    delete = employeeId => {

        if (this.state.isLoading) return;

        deleteEmployee(employeeId).then(r => this.updateEmployees())
    }

    handleInputChange = ({target}) => {
        this.setState(state => ({inputText: target.value}))
    }
    
    render () {

        const showWarning = this.state.showWarning
        const isLoading = this.state.isLoading
        let warning, loading;

        if (showWarning) {
            warning = <Warning message={this.state.warningMessage}></Warning>
        } 

        if (isLoading) {
            loading = <Loading></Loading>
        }        

        return (
            <>
                <div className="Employees">
                    <Input sendaction={this.add} onchange={this.handleInputChange} value={this.state.inputText}></Input>
                    <EmployeeList employees={this.state.employees} deleteAction={this.delete}></EmployeeList>
                    {loading}
                </div>
                {warning}
            </>
        )
    }
        

}
    