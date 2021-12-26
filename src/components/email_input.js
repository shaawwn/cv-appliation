import React from 'react';

class EmailInput extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <div className='field-input'>
            <h3>{this.props.fieldTitle}</h3>
            <input type="email" pattern=".+@.\.com" placeholder="example@example.com"/>
        </div>
        )
    }
}

export default EmailInput;