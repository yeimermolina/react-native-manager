import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Phone"
            placeholder="555-555-555"
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day})}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Satuday" value="Satuday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button 
            buttonText="Create"
          />
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
