// component for a field input for a form section

import React from 'react';

// import '../styles/style.css'
class FieldInput extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            formInput: this.props.fieldTitle
        }
    }
    render() {
        return (
            // return field title and input field
            <div className='field-input' id={this.props.id}>
                <h3>{this.props.fieldTitle}</h3>
                <input placeholder={this.state.formInput}/>
            </div>
        )
    }
}

export default FieldInput