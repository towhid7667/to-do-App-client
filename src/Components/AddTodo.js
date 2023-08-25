import React, { useState } from 'react';

const AddTodo = () => {

    const [task, setTask] = useState({
        name : '',
        description : '',
        toDOType : '',
        date : ''
    })

    const handleInputs = e => {
        setTask(prev => ({
            ...prev, [e.target.name] : e.target.value,
        }))

    }
    return (
        <div>
            <p style={{textAlign : 'center', fontSize : '20px'}}>Add Task</p>
            <div style={{display : 'flex', flexDirection : 'column', width : '50%', justifyContent : 'center', margin : '0 auto'}}>
            <input value={task.name} onChange={(e) => handleInputs(e)} name='name' style={{padding : '10px', margin : '1% 0px', borderRadius : '5px', outline : 'none', border : '1px solid #808080'}} type="text" />
            <input value={task.description} onChange={(e) => handleInputs(e)} name='description' style={{padding : '10px', margin : '1% 0px',  borderRadius : '5px',outline : 'none', border : '1px solid #808080'}} type="text" />
            <select value={task.toDOType} onChange={(e) => handleInputs(e)} name='toDOType' style={{padding : '10px', margin : '1% 0px',  borderRadius : '5px',outline : 'none', border : '1px solid #808080'}}>
                <option value="Incomplete">Incomplete</option>
                <option value="To Do">To Do</option>
                <option value="Doing">Doing</option>
                <option value="Under Review">Under Review</option>
                <option value="Complete">Complete</option>
                <option value="OverDue">OverDue</option>
                
            </select>
            <input value={task.date} onChange={(e) => handleInputs(e)} name='date' style={{padding : '10px', margin : '1% 0px',  borderRadius : '5px',outline : 'none', border : '1px solid #808080'}} type="date" />
            </div>
            <div style={{display : 'flex', justifyContent : 'center'}}>

            <button style={{padding : '10px 30px', color : 'white', backgroundColor : '#0071BE', border : 'none', borderRadius : '5px', cursor : 'pointer'}}>Add Task</button>

            </div>
            
        </div>
    );
};

export default AddTodo;