import React from "react";
import { Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

class EducationForm extends React.Component {
    render() {
        return(
            <div>
                <div>
                <Select name='university' placeholder='University' onChange={(event) => this.props.handleChange(event)}>
                    <option value='University of Warsaw'>University of Warsaw</option>
                    <option value='Warsaw University of Technology'>Warsaw University of Technology</option>
                </Select>
                </div>
                <div>
                <Select name='field' placeholder='Field of studies' onChange={(event) => this.props.handleChange(event)}>
                    <option value='Computer Science'>Computer Science</option>
                    <option value='Mathematics'>Mathematics</option>
                    <option value='Engineering'>Engineering</option>
                    <option value='Engineering'>Other</option>
                </Select>
                </div>
                <div>
                <Select name='degree' placeholder='Degree' onChange={(event) => this.props.handleChange(event)}>
                    <option value='Bachelors'>Bachelors</option>
                    <option value='Masters'>Masters</option>
                </Select>
                </div>
                <div>Graduation date</div>
                <Stack shouldWrapChildren direction='row'>
                    <NumberInput min={1} max={12} onChange={(event) => this.props.handleNumber('grad_month', event)} >
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <NumberInput min={2022} onChange={(event) => this.props.handleNumber('grad_year', event)}>
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Stack>
                <div>
                <div>Do you plan further education?</div>
                <RadioGroup onChange={(event) => this.props.handleNumber('further_education', event)}>
                    <Stack spacing={5} direction='row'>
                        <Radio colorScheme='green' value='Yes'>
                        Yes
                        </Radio>
                        <Radio colorScheme='red' value='No'>
                        No
                        </Radio>
                    </Stack>
                </RadioGroup>
            </div>
            <div><Button
                onClick={() =>this.props.validateEducationForm()}>
                Next
            </Button></div>   
            </div>
        );
    }
}

export default EducationForm;