import React , {Component} from 'react';
import { Card, Button, CardSection, Input } from './common';
import { connect } from 'react-redux';

class LoginForm extends Component {

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="something@gmail.com"
                        label="Email"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                    />
                </CardSection>

                <CardSection>
                    <Button
                        text='Login'
                    />
                </CardSection>
            </Card>
        );
    }
};

export default LoginForm;
