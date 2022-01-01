import React from 'react';
import FieldInput from './field-input.js';
import DateField from './date_field.js';
import PhoneInput from './phone_input.js';
import EmailInput from './email_input.js';
import AddressInput from './address_input.js';
import uniqid from 'uniqid';

class SectionForm extends React.Component {
    constructor(props) {
        super(props)
        this.addSchool = this.addSchool.bind(this);
        this.addDateField = this.addDateField.bind(this);
    }

    addSchool(field) {
        console.log("ADDING SCHOOL")
        const currentDiv = document.querySelector(`.${field}-section`)
        console.log(currentDiv, field)
        const newSchool = [
            <div className="field-input">
            <h1>{this.props.sectionTitle.charAt(0).toUpperCase() + this.props.sectionTitle.slice(1)}</h1>
            {this.props.fields.map(
              function fieldIterator(field, i) {
                  if(field === 'Phone') {
                      return <PhoneInput fieldTitle={field} id={uniqid()} />
                  } else if(field === 'Email') {
                      return <EmailInput fieldTitle={field} />
                  } else if(field === 'Address') {
                      return <AddressInput fieldTitle={field} />
                  } else if(field === 'Dates Attended' || field === 'Dates Employed') {
                      return(
                          [<DateField fieldTitle={field} />,
                              <div className="field-input">
                                  {/* <button className="btn" onClick={this.addSchool}>Add</button> */}
                                  </div>]
                      )
                  }
                return (
                  <FieldInput fieldTitle={field} id={uniqid()}/>
                  
                )
              }
            )}
          </div>
        ]
        currentDiv.append(newSchool)
    }

    // Add helper function to add datefield
    addDateField(field) {
        return(
            [<DateField fieldTitle={field} />,
                <div className="field-input">
                    <button className="btn">Add</button>
                </div>
            ]
        )
    }
    
    getData() {
        // Get the data from the fields when you enter 'submit'
        let section = document.querySelector(`.${this.props.sectionTitle}-section`);
 
        [...section.children].forEach(child => {
            try {
                // console.log("CHILD", child.children[1].value)
                if(child.children.length > 0) {
                    // console.log(c hild.children)
                    const children = Array.prototype.slice.call(child.children).slice(1)
                    // console.log(children)
                    if(children.length > 1) {
                        children.forEach(child => {
                            console.log(child.value)
                        })
                    } else {
                        console.log(child.value)
                    }
                }
                // console.log(child, child.children)
            } catch {
                console.log("No input")
            }
            
        });
    }

    render() {
        const _this = this;
        // console.log("PROPS", this.props)
        return (
            // testFunction()
            <div className={this.props.sectionTitle + "-section"} id={uniqid()}>
              <h1>{this.props.sectionTitle.charAt(0).toUpperCase() + this.props.sectionTitle.slice(1)}</h1>
              {this.props.fields.map(
                function fieldIterator(field, i) {
                    if(field === 'Phone') {
                        return <PhoneInput fieldTitle={field} id={uniqid()}/>
                    } else if(field === 'Email') {
                        return <EmailInput fieldTitle={field} id={uniqid()}/>
                    } else if(field === 'Address') {
                        return <AddressInput fieldTitle={field} id={uniqid()}/>
                    } else if(field === 'Dates Attended' || field === 'Dates Employed') {
                        return(
                            [<DateField fieldTitle={field} id={uniqid()}/>,
                                <div className="field-input">
                                    {/* <button className="btn" onClick={() => _this.addSchool(_this.props.sectionTitle)}>Add</button> */}
                                    <button className="btn">Add</button>
                                    {/* <button className="btn" onClick = {() => console.log("Something")}>Add</button>  */}
                                    </div>]
                        )
                    }
                  return (
                    <FieldInput fieldTitle={field} id={uniqid()} />
                    
                  )
                }
              )}
              <button className="btn" onClick={() => _this.getData()}>Submit</button>
            </div>
          )
    }
}

export default SectionForm