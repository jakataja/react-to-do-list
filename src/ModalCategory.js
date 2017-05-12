import React, {Component} from 'react';
import './Modal.css';

class ModalCategory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalInput: this.props.text
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange (e) {
        this.setState({ modalInput: e.target.value });
    }


    handleSubmit () {
        this.props.actionSubmit(this.state.modalInput);
    }

    render () {


        return (
            <div className="Modal">
                <div className="Modal-title">Category name</div>
                <div className="Modal-content">
                    <input type="text" className="Modal-input"
                           value={this.state.modalInput}
                           onChange={this.handleInputChange}
                    />
                </div>
                <div className="Modal-footer">
                    <button type="button" onClick={this.props.actionCancel}>Cancel</button>
                    <button type="button"
                            onClick={this.handleSubmit}
                    >Ok</button>
                </div>
            </div>
        );
    }
}

export default ModalCategory;