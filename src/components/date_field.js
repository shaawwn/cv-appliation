import React from 'react';

// Allow users to select Month/Date fields
// ex March 2017 - May 2018
class DateField extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="field-input">
                <h3>{this.props.fieldTitle}</h3>
                <div className="date">
                    <input type="month" /> to <input type="month" />
                </div>
            
            </div>
        )
    }
}

export default DateField