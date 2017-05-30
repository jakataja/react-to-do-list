import React from 'react';
import './Modal.css';

const ModalCategory = ({ id, name, isActive, type, onSubmitEditCategory, onSubmitAddSubcategory, onHideModal }) => {

    let inputName;

    const handleSubmit = () => {
        if(type === 'add') {
            onSubmitAddSubcategory(inputName.value, id);
        } else if(type === 'edit') {
            onSubmitEditCategory(id, inputName.value);
        }
    };

    const handleCancel = () => {
        onHideModal();
    };

    return (
        <div className="Modal" style={{
            display: isActive ? 'block' : 'none'
        }}>
            <div className="Modal-title">Category name</div>
            <div className="Modal-content">
                <input type="text" className="Modal-input"
                       defaultValue={name}
                       ref={ node => inputName = node }
                />
            </div>
            <div className="Modal-footer">
                <button type="button" onClick={ handleCancel }>Cancel</button>
                <button type="button"
                        onClick={ handleSubmit }
                >Ok
                </button>
            </div>
        </div>


    );

};

export default ModalCategory;