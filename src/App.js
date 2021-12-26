import React from 'react';
import './App.css';
import FieldInput from './components/field-input.js';
import SectionForm from './components/section-form.js';
import Form from './components/form.js';
import './styles/style.css';

class App extends React.Component{
  // const personalInfoFields = ['Name', 'Phone', 'Email', 'Address']
  constructor() {
    super();
    this.state = {
      // Should be the sections with relevant data 
      personal: {"Name": "", "Phone": "", "Email": "", "Address": ""},
      education: {
          "Institutions": [ // Can add additional institutions
            {"Institution": {"Field of Study": "", "Dates Attended": ""}},
          ]
      },
      experience: {
        "Companies": [
          {"Company": {"Job Title": "", "Job Description":"", "Dates Employed": ""}},
        ]
      },
    }
  }

  render() {
    const sections = {
      'personal': ['Name', 'Phone', 'Email', 'Address'],
      'education': ['Institution', 'Field of Study', 'Dates Attended'],
      'experience': ['Name of Company', 'Job Title', 'Job Description', 'Dates Employed']
    }
    return (
      <div>
        <Form sections={sections} />
      </div>
    )
  }
}

export default App;


