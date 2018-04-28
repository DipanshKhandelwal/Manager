import React , {Component} from 'react';
import { Card, Button, CardSection, Input } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        placeholder="something@gmail.com"
                        label="Email"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        onChangeText={this.onPasswordChange.bind(this)}
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.props.password}
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

const mapStatetoProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password,
    };
};

export default connect(mapStatetoProps, { emailChanged, passwordChanged } )(LoginForm);
