import './modal.css';
const Modal = ({ show, name, onHide }) => {
  return (
    <div>
      {show && (
        <div className="modal-data">
          <h1>{name}</h1>
          <button type="button" onClick={onHide} className="modal-btn">
            Close Modal
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
