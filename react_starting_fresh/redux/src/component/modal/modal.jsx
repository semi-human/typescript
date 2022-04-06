import React from 'react'
import './modal.css';
import { Link  } from 'react-router-dom';
function Modal({show,data,onHide}) {
   
  return (
    <>
        {
            show && (
                <div className='modal-data'>
                    <h1>User Details</h1>
                  <div className="user-info">
                        <div className="user-data">
                            <b>Full Name:</b>&nbsp;&nbsp;&nbsp;&nbsp;<span>{data.name}</span><br/>
                            <b>User Name:</b>&nbsp;&nbsp;&nbsp;&nbsp;<span>{data.username}</span><br/>
                            <b>User Email:</b>&nbsp;&nbsp;&nbsp;&nbsp;<span>{data.email}</span><br/>
                            <b>City:</b>&nbsp;&nbsp;&nbsp;&nbsp;<span>{data.address.city}</span><br/>
                            <b>Company Name:</b>&nbsp;&nbsp;&nbsp;&nbsp;<span>{data.company.name}</span><br/>
                        </div>
                        <div className="img-data">
                            <img 
                            src={`https://robohash.org/${data.id}?set=set5&size=180x180`} 
                            alt="monsters"/>
                        </div>
                  </div>
                  <button type="button" onClick={onHide} className="modal-btn show">
                       <Link 
                       to={`/users/${data.id}`}
                       className="modal-link">
                           Show more 
                       </Link>
                    </button>
                    <button type="button" onClick={onHide} className="modal-btn">
                        Close
                    </button>
                </div>
            )
        }
    </>
  )
}

export default Modal