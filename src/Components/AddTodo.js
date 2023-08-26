import React, { useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { toast } from 'react-hot-toast';


const AddTodo = ({close}) => {

    const [task, setTask] = useState({
        name : '',
        description : '',
        toDOType : 'Incomplete',
        date: '',
        fileCount: 0,
    })

    const handleInputs = e => {
        setTask(prev => ({
            ...prev, [e.target.name] : e.target.value,
        }))

    }

    const saveTask = () => {
        
        const apiUrl = 'https://to-do-app-backend-towhid7667.vercel.app/tasks';
    
        axios.post(apiUrl, task)
          .then((response) => {
            console.log('Task saved successfully:', response.data);
            toast.success('Task saved successfully');
            setTask({
                name : '',
                description : '',
                toDOType : 'Incomplete',
                date: '',
                fileCount: 0,
            })
          })
          .catch((error) => {
            console.error('Error saving task:', error);
            toast.error('Error saving task');
          });
      };
    
    return (
        <div>
            <div style={{display : 'flex', justifyContent : 'flex-end'}}><FontAwesomeIcon onClick={close} style={{ padding : '10px 10px', height : '20px', width : '20px', color : '#0071BE'}} icon={faCircleXmark} /></div>
            <p style={{textAlign : 'center', fontSize : '20px'}}>Add Task</p>
            <div style={{display : 'flex', flexDirection : 'column', width : '90%', justifyContent : 'center', margin : '0 auto'}}>
            <input placeholder='client name' value={task.name} onChange={(e) => handleInputs(e)} name='name' style={{padding : '10px', margin : '1% 0px', borderRadius : '5px', outline : 'none', border : '1px solid #808080'}} type="text" />
            <input placeholder='post text' value={task.description} onChange={(e) => handleInputs(e)} name='description' style={{padding : '10px', margin : '1% 0px',  borderRadius : '5px',outline : 'none', border : '1px solid #808080'}} type="text" />
            <select value={task.toDOType} onChange={(e) => handleInputs(e)} name='toDOType' style={{padding : '10px', margin : '1% 0px',  borderRadius : '5px',outline : 'none', border : '1px solid #808080'}}>
            {['Incomplete','To Do','Doing','Under Review','Completed','OverDue'].map(item => <option value={item}>{item}</option>) }
                
                
            </select>
            <input value={task.date} onChange={(e) => handleInputs(e)} name='date' style={{padding : '10px', margin : '1% 0px',  borderRadius : '5px',outline : 'none', border : '1px solid #808080'}} type="date" />
            </div>
            <div style={{display : 'flex', justifyContent : 'center'}}>

            <button onClick={() => saveTask()} style={{padding : '10px 30px', color : 'white', backgroundColor : '#0071BE', border : 'none', borderRadius : '5px', cursor : 'pointer'}}>Add Task</button>

            </div>
            
        </div>
    );
};

export default AddTodo;