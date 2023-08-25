import React from 'react';
import SinglePost from './SinglePost';


const DiffTodoList = ({type}) => {
    return (
        <div style={{backgroundColor : '#F2F4F7', width  : '25%', borderRadius : '5px',padding :'10px 10px'}}>
            <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', width : '100%'}}>
                <div style={{display : 'flex', gap : '3%', alignItems : 'center'}}>
                    {type==='Incomplete' || type=== 'To Do' || type=== 'Doing'?<span style={{padding : '10px 10px',height : '5px',width : '10px', borderTopLeftRadius : '20px', borderBottomLeftRadius : '20px', backgroundColor : `${type==='Incomplete'?'#D21010' :type==='To Do'? '#00B5FF' : '#FFE700'}` }}></span> : null}
                <p style={{width : '100%'}}>{type}</p>
                </div>
                <span style={{padding : '10px 10px', backgroundColor : '#E8EEF3', height : '10px', width : '10px', display : 'flex',  alignItems : 'center', justifyContent : 'center'}}>0</span>
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
           
        </div>
    );
};

export default DiffTodoList;