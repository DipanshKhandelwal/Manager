import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Button, Input} from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
    onButtonPress () {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Dipansh'
                        value={this.props.name}
                        onChangeText={ text => this.props.employeeUpdate({prop: 'name', value: text}) }
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'
                        value={this.props.phone}
                        onChangeText={ text => this.props.employeeUpdate({prop: 'phone', value: text}) }
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={ styles.pickerTextStyle }>
                        Shift
                    </Text>
                    <Picker
                        mode='dropdown'
                        style={{ width: "100%" }}
                        selectedValue={this.props.shift}
                        onVlaueChange={ day => this.props.employeeUpdate({prop: 'shift', value: day}) }
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                        text='Create'
                    />
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStatetoProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStatetoProps, { employeeUpdate, employeeCreate } )(EmployeeCreate);
