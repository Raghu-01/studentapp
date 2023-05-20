import React from 'react'
import axios from 'axios'
export default class StudentList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            students:[]
        }
    }
    deleteStudent(id)
    {
        axios.delete("http://localhost:3000/students/"+id)
    }
    showItems()
    {
        axios.get("http://localhost:3000/students")
        .then(res=>
        {
          this.setState({students:res.data})
         })
    }
    componentDidMount()
    {
      this.showItems()
    }
    render()
    {
        return(
            <table className='table table-bordered'>
               <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ACTIONS</th>
                    <th>EDIT</th>
                    <th>INFO</th>

                </tr>
                </thead> 
                <tbody>
                    {this.state.students.map((student)=>
                     <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td><button className='btn bg-danger' onClick={()=>this.deleteStudent(student.id)}>DELETE</button></td>
                    <td><button className='btn bg-success' >EDIT</button></td>
                    <td><button className='btn bg-info' >INFO</button></td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
        )
    }
    }
