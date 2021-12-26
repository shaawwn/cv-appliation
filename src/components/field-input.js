// component for a field input for a form section

import React from 'react';
// import '../styles/style.css'
class FieldInput extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            // return field title and input field
            <div className='field-input'>
                <h3>{this.props.fieldTitle}</h3>
                <input />
            </div>
        )
    }
}

export default FieldInput