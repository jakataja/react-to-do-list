import React, {Component} from 'react';
import './Modal.css';

class ModalCategory extends Component {

    render () {


        return (
            <div className="Modal">
                <div className="Modal-title">Category name</div>
                <div className="Modal-content">
                    <input type="text" className="Modal-input"
                           value={this.props.text}
                           ref={input => this.modalInput = input}
                           onChange={this.props.actionChange}
                    />
                </div>
                <div className="Modal-footer">
                    <button type="button" onClick={this.props.actionCancel}>Cancel</button>
                    <button type="button" onClick={this.props.actionSubmit}>Ok</button>
                </div>
            </div>
        );
    }
}

export default ModalCategory;