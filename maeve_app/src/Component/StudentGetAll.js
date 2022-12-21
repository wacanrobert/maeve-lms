import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './CSS/black.css';

function StudentGetAll(){
    const [students, setStudent] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8080/student/displayAllStudents')
            .then(res => {
                console.log(res)
                setStudent(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return(
        
        <div className="black">
            {/*<input type = "text" value={id} onChange={e => setId(e.target.value)}></input>
            <div>{post.title}</div>*/}
            <ul>
                {students.map(student => (
                    <li key={student.studentId}>{student.studentName}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default StudentGetAll