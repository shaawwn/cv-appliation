import React from 'react';
import SectionForm from './section-form.js';
import EducationSection from './education_section.js';
class Form extends React.Component {
    // Props are an object
    constructor(props) {
        super(props)
    }

    render() {
        const sectionTitles = Object.keys(this.props.sections);
        const { sections } = this.props
        return (
            <div className="form">
                {sectionTitles.map(
                    function sectionIterator(section, i) {
                        return(
                            <SectionForm sectionTitle={section} fields={sections[section]} />
                        )
                    }
                )}
            </div>
        )
    }
}

export default Form;