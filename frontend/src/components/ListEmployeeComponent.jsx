import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() =>{
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch((error) => {
            console.error('Error retrieving employees', error)
        })
    }, [])
    
  return (
    <div className='container'>
        <br />
        <h2 className='text-center'>List of Employees</h2><br />
        <table className='table table-striped table-bordered'>
            <thead className='table-dark'>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent