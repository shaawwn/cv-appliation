import React from 'react';
import FieldInput from './field-input.js';
import DateField from './date_field.js';
import PhoneInput from './phone_input.js';
import EmailInput from './email_input.js';
import AddressInput from './address_input.js';

class SectionForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="section">
              <h1>{this.props.sectionTitle.charAt(0).toUpperCase() + this.props.sectionTitle.slice(1)}</h1>
              {this.props.fields.map(
                function fieldIterator(field, i) {
                    if(field === 'Phone') {
                        return <PhoneInput fieldTitle={field} />
                    } else if(field === 'Email') {
                        return <EmailInput fieldTitle={field} />
                    } else if(field === 'Address') {
                        return <AddressInput fieldTitle={field} />
                    } else if(field === 'Dates Attended' || field === 'Dates Employed') {
                        return(
                            [<DateField fieldTitle={field} />,
                                <div className="field-input">
                                    <button className="btn">Add</button>
                                    </div>]
                        )
                    }
                  return (
                    <FieldInput fieldTitle={field} />
                    
                  )
                }
              )}
              <button className="btn">Submit</button>
            </div>
          )
    }
}

export default SectionForm