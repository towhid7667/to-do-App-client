import React, { useState } from 'react';
import SinglePost from './SinglePost';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import AddTodo from './AddTodo';
import ModalComponent from './ModalComponent';


const DiffTodoList = ({type}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
    return (
        <div style={{backgroundColor : '#F2F4F7', width  : '25%', borderRadius : '5px',padding :'10px 10px'}}>
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
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>
            </div>
            <div style={{width : '20%'}}><ModalComponent style={{width : '20%'}}isOpen={isModalOpen} onClose={closeModal} /></div>
        </div>
    );
};

export default DiffTodoList;