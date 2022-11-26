import React from "react";
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

class NameForm extends React.Component {
    render() {
        return(
            <div>
                <div><Input
                    name='first_name'
                    placeholder='First name'
                    onChange={(event) => this.props.handleChange(event)}    
                    />
                </div>
                <div><Input
                    name='last_name'
                    placeholder='Last name'
                    onChange={(event) => this.props.handleChange(event)}
                    />
                </div>   
                <div><Button 
                    onClick={() =>this.props.validateNameForm()}>
                    Next
                    </Button>
                </div>   
            </div>
        );
    }
}

export default NameForm;