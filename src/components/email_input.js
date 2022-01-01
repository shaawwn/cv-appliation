import React from 'react';

class EmailInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            formInput: this.props.fieldTitle
        }
    }

    render() {
        return(
        <div className='field-input' id={this.props.id}>
            <h3>{this.props.fieldTitle}</h3>
            <input type="email" pattern=".+@.\.com" placeholder={this.state.formInput}/>
        </div>
        )
    }
}

export default EmailInput;