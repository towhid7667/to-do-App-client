import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import AddTodo from './AddTodo';
import ModalComponent from './ModalComponent';
import axios from 'axios';


const DiffTodoList = ({type}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [underReviewTasks, setUnderReviewTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [overdueTasks, setOverdueTasks] = useState([]);

  useEffect(() => {
    getTasks()
    
  }, []);

  const getTasks =()=>{
    const apiUrl = 'https://to-do-app-backend-towhid7667.vercel.app/tasks';

    axios.get(apiUrl)
      .then((response) => {
        const allTasks = response.data;
        setTasks(allTasks);
        console.log(allTasks)
        // Separate tasks based on 'toDoType'
        const incomplete = allTasks.filter((task) => task.toDOType === 'Incomplete');
        const todo = allTasks.filter((task) => task.toDOType === 'To Do');
        const doing = allTasks.filter((task) => task.toDOType === 'Doing');
        const underReview = allTasks.filter((task) => task.toDOType === 'Under Review');
        const completed = allTasks.filter((task) => task.toDOType === 'Completed');
        const overdue = allTasks.filter((task) => task.toDOType === 'OverDue');
        console.log(incomplete)
        setIncompleteTasks(incomplete);
        setTodoTasks(todo);
        setDoingTasks(doing);
        setUnderReviewTasks(underReview);
        setCompletedTasks(completed);
        setOverdueTasks(overdue);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }

    const openModal = () => setIsModalOpen(true);
  const closeModal = () => {setIsModalOpen(false); getTasks()};
    return (
        <div style={{width  : '25%', borderRadius : '5px',padding :'5px 5px'}}>
            <div style={{backgroundColor : '#F2F4F7', padding : '4% 4%'}}>
            <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', width : '100%'}}>
                <div style={{display : 'flex', gap : '3%', alignItems : 'center'}}>
                    {type==='Incomplete' || type=== 'To Do' || type=== 'Doing'?<span style={{padding : '10px 10px',height : '5px',width : '10px', borderTopLeftRadius : '20px', borderBottomLeftRadius : '20px', backgroundColor : `${type==='Incomplete'?'#D21010' :type==='To Do'? '#00B5FF' : '#FFE700'}` }}></span> : null}
                <p style={{width : '100%'}}>{type}</p>
                </div>
                <div style={{display : 'flex', gap : '5%'}}>
                <span  onClick={openModal} style={{padding : '10px 10px', backgroundColor : '#E8EEF3', height : '10px', width : '10px', display : 'flex',  alignItems : 'center', justifyContent : 'center'}}><FontAwesomeIcon icon={faPlus} /></span>
                <span style={{padding : '10px 10px', backgroundColor : '#E8EEF3', height : '10px', width : '10px', display : 'flex',  alignItems : 'center', justifyContent : 'center'}}>0</span>
                
                </div>
            </div>
            <div style={{height : '800px', overflow : 'auto'}}>
            {(type==='Incomplete'? incompleteTasks :  type=== 'To Do'? todoTasks : type=== 'Doing'? doingTasks : type=== 'Under Review'?underReviewTasks : 
            type=== 'Completed'?completedTasks : overdueTasks).map(item => <SinglePost item={item} getTasks={getTasks}></SinglePost>)}
            
            </div>
            <div style={{width : '20%'}}><ModalComponent style={{width : '20%'}}isOpen={isModalOpen} onClose={closeModal} /></div>
            </div>
        </div>
    );
};

export default DiffTodoList;