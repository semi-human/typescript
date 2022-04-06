import React from 'react';
import './singleUser.css';
import Modal from '../modal/modal';
import { Link } from 'react-router-dom';
function SingleUser({user,onDelete}) {
  const [showModal,setShowModal] =React.useState(false);
  const openModal = () =>{
    
    setShowModal(true);
    console.log(showModal);
  }
  const hideModal = () =>{
    setShowModal(false);
  }

  const handleDelete = (id) =>{
      onDelete(id);
  }
  return (
    <>
    <div className='card-container'>
        <img src={`https://robohash.org/${user.id}?set=set5&size=180x180`} alt="monsters"/>
        <h2>{user.name}</h2>
        <h5>{user.email}</h5>
        <button 
          type="button"
          className="btn"
          onClick={openModal}>
            View Details
        </button>
        <button 
          type="button"
          className="btn"
          onClick={() => handleDelete(user.id)}>
            Delete User
        </button>
        <Link to={`/users/update/${user.id}`}>
          <button 
            type="button"
            className="btn"
            >
              Update User
          </button>
        </Link>
        
    </div>
    <Modal
        show={showModal}
        data ={user}
        onHide ={hideModal}
    />
    
    </>
  )
}

export default SingleUser;