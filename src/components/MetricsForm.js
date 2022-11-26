import React from "react";
import { Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

class MetricsForm extends React.Component {
    render() {
        return(
            <div>
                Note that answering these questions is voluntary, but helps us mesure diversity in our company.
                <div>
                <Select name='gender' placeholder='Gender' onChange={(event) => this.props.handleChange(event)}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Non-binary'>Non-binary</option>
                    <option value='Prefer not to say'>Prefer not to say</option>
                </Select>
                </div>
                <div>
                <Select name='ethnicity' placeholder='Ethnicity' onChange={(event) => this.props.handleChange(event)}>
                    <option value='White'>White</option>
                    <option value='Black or African American'>Black or African American</option>
                    <option value='American Indian or Alaska Native'>American Indian or Alaska Native</option>
                    <option value='Asian'>Asian</option>
                    <option value='Native Hawaiian or Other Pacific Islander'>Native Hawaiian or Other Pacific Islander</option>
                    <option value='Prefer not to say'>Prefer not to say</option>
                </Select>
                </div>
                <div><Button
                    onClick={() =>this.props.validateMetricsForm()}>
                    Next
                </Button></div>   
            </div>
        );
    }
}

export default MetricsForm;