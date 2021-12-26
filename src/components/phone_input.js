import React from 'react';

class PhoneInput extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <div className='field-input'>
            <h3>{this.props.fieldTitle}</h3>
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890"/>
        </div>
        )
    }
}

export default PhoneInput;