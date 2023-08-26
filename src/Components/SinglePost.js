import React, { useRef, useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClipboardList, faComments, faLayerGroup, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import axios from 'axios';
import toast from 'react-hot-toast';

const SinglePost = ({item, getTasks}) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);


    
    const handleUpload = (itemId) => {
        console.log("sdfsdsdsd")
        if (selectedFile) {
            console.log("sdfsdsdsd")
            
            const formData = new FormData();
            formData.append('file', selectedFile);
        
           
            const apiUrl = `https://to-do-app-backend-towhid7667.vercel.app/tasks/${itemId}/updateFileCount`; 
            axios.patch(apiUrl, formData)
              .then((response) => {
                console.log('File  updated:', response.data);
                toast.success('File updated successfully');
                getTasks()
              })
              .catch((error) => {
                console.error('Error updating file :', error);
                toast.error('Error updating file');
              });
          }
      };
  const handleFileChange = (event) => {
    const file = fileInputRef.current.files[0];
    setSelectedFile(file);
    if (file) {
        handleUpload(item._id);;
    }
  };
    return (
        <div  style={{backgroundColor : 'white', padding : '10px 10px', borderRadius : '5px', marginBottom : '2%'}}>
        <div style={{display : 'flex', justifyContent : 'space-between', width : '100%'}}>
        <div style={{display : 'flex', alignItems : 'center', gap : '1%', width : '100%'}}>
            <div style={{width : '35px', height : '35px', borderRadius : '50%', overflow : 'hidden', backgroundColor : '#f0f0f0'}}>
                <img style={{width : '100%', height : '100%', objectFit : 'cover'}} src="https://images.pexels.com/photos/2853507/pexels-photo-2853507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profilePic" />
            </div>
            <p>{item.name}</p>
        </div>
        <div style={{display : 'flex', alignItems : 'center', gap : '1%', width : '100%', justifyContent : 'flex-end'}}>
            <div style={{width : '35px', height : '35px', borderRadius : '50%', overflow : 'hidden', backgroundColor : '#f0f0f0'}}>
                <img style={{width : '100%', height : '100%', objectFit : 'cover'}} src="https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profilePic" />
            </div>
            <p>Sadik Istiak</p>
        </div>
        </div>
        <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', padding : '10px 10px'}}>
            <div style={{display : 'flex', gap : '2%', width : '100%'}}>
            <FontAwesomeIcon style={{color : '#738295'}} icon={faLayerGroup} /> 
            <span>{item.description.slice(0,20)}...</span>
            </div>
            <div>
            <span style={{padding : '10px 20px',borderRadius : '5px', backgroundColor : '#E8EEF3', height : '10px', width : '30px', display : 'flex',alignItems : 'center', gap : '20%'}}><FontAwesomeIcon style={{color : '#666666'}} icon={faClipboardList} /><span>1/2</span></span>
            </div>
        </div>

        <div style={{display : 'flex', justifyContent : 'space-evenly', alignItems : 'center', marginTop : '2%'}}>
        <div style={{width : '35px', height : '35px', borderRadius : '50%', overflow : 'hidden', backgroundColor : '#f0f0f0'}}>
                <img style={{width : '100%', height : '100%', objectFit : 'cover'}} src="https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profilePic" />
            </div>
            <div style={{width : '35px', height : '35px', borderRadius : '50%', overflow : 'hidden', backgroundColor : '#f0f0f0'}}>
                <img style={{width : '100%', height : '100%', objectFit : 'cover'}} src="https://images.pexels.com/photos/295564/pexels-photo-295564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profilePic" />
            </div>
            <span style={{padding : '15px 15px',borderRadius : '50%', backgroundColor : '#E8EEF3', height : '10px', width : '10px', display : 'flex',  alignItems : 'center', justifyContent : 'center'}}>12+</span>
            <div>
            <FontAwesomeIcon icon={faComments} />
            <span> 15</span>
            </div>
            <div>
            <input
                    type="file"
                    id={`fileInput-${item._id}`}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={() => handleFileChange(item._id)}
                />
                 <label htmlFor={`fileInput-${item._id}`}>
            <FontAwesomeIcon icon={faPaperclip}/></label>
            <span> {item.fileCount}</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faCalendarDays} />
            <span> {moment(item.date).format('YYYY-MM-DD')}</span>
            </div>
        </div>
    </div>
    );
};

export default SinglePost;