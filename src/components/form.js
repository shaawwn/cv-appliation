import React from 'react';
import SectionForm from './section-form.js';
import EducationSection from './education_section.js';
import uniqid from "uniqid";
class Form extends React.Component {
    // Props are an object
    constructor(props) {
        super(props)

        // this.state = {
        //     // Should be the sections with relevant data 
        //     "personal": {"Name": "Name", "Phone": "Phone", "Email": "Email", "Address": ""},
        //     "education": {
        //         "Institutions": [ // Can add additional institutions
        //           {"Institution": ["Name of Institution", "Field of Study", "Dates Attended"]},
        //         ]
        //     },
        //     "experience": {
        //       "Companies": [
        //         {"Company": {"Job Title": "", "Job Description":"", "Dates Employed": ""}},
        //       ]
        //     },
        //   }
    }

    addSchool() {
        // Add additional schools
    }

    addExperience() {
        // add additional work experience
    }
    render() {
        const sectionTitles = Object.keys(this.props.sections);
        const { sections } = this.props
        return (
            <div className="form" id={uniqid()}>
                {sectionTitles.map(
                    function sectionIterator(section, i) {
                        return(
                            <SectionForm sectionTitle={section} fields={sections[section]} />
                            // <button className="btn" onClick={() => console.log("Button in form")}>Submit</button>
                        )
                    }
                )}
            </div>
        )
    }
}



export default Form;