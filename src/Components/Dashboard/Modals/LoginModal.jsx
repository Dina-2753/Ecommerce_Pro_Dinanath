import React from 'react'
import './Auth.css'
import PropTypes from "prop-types";


const LoginModal = ({ showModal, closeModal, message }) => {
    if (!showModal) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Login Failed</h3>
                <p>{message}</p>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

LoginModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
};
export default LoginModal