import ReactModal from 'react-modal';
import AddTodo from './AddTodo';

ReactModal.setAppElement('#root'); // Set the root element for accessibility

function ModalComponent({ isOpen, onClose }) {

    const modalStyle = {
        content: {
          width: '20%', // Set the width of the modal content
          margin: 'auto',
          height : '40%', // Center the modal horizontally
        },
      };
  return (
    <ReactModal style={modalStyle} isOpen={isOpen} onRequestClose={onClose}>
      <AddTodo close={onClose} />
      
    </ReactModal>
  );
}

export default ModalComponent;