import React from 'react';
import AddTodo from '../Components/AddTodo';
import DiffTodoList from '../Components/DiffTodoList';

const TODOHome = () => {

    return (
        <div style={{backgroundColor : 'white'}}>
           
         <div style={{display : 'flex', width : '120%', overflow : 'auto'}}> { ['Incomplete','To Do','Doing','Under Review','Completed','OverDue']
           .map((item, index) => <DiffTodoList type={item}></DiffTodoList>
           )}
           </div>
           
        </div>
    );
};

export default TODOHome;

