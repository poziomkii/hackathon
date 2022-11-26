import React from "react";
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

class NameForm extends React.Component {
    render() {
        return(
            <div>
            <div><Input placeholder='First name' onChange={(event) => this.props.handleFirstName(event)}/></div>
            <div><Input placeholder='Last name' onChange={(event) => this.props.handleLastName(event)}/></div>   
            <div><Button onClick={() =>this.props.handleNameForm()}>Next</Button></div>   
            </div>
        );
    }
}

export default NameForm;