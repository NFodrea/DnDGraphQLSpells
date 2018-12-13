import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { Mutation } from 'react-apollo';
import {gql} from 'apollo-boost';
import { RegisterMutation, RegisterMutationVariables } from 'src/schemaTypes';
import {RouteComponentProps} from "react-router-dom";

const registerMutation = gql `
mutation RegisterMutation($email: String!, $password: String!){
  register(email: $email, password: $password) 
}
`
export default class RegisterView extends React.Component<RouteComponentProps<{}>> {
    state = {
        email: "",
        password: ""
    };

    handleChangePassword = (e: any) =>
        this.setState({ password: e.target.value });
    handleChangeEmail = (e: any) => this.setState({ email: e.target.value });

    render() {
        const { email, password } = this.state;
        return (
            <Mutation <RegisterMutation, RegisterMutationVariables>
                mutation={registerMutation}
            >
             {mutate => (   
            <div style={{
                    display: "flex", 
                    flexDirection: "column", alignItems: "center", justifyContent: "center"
                }}>
                <div>
                    <TextField
                        id="standard-email"
                        label="Email"
                        value={email}
                        onChange={this.handleChangeEmail}
                        placeholder="email"
                        type="email"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-password"
                        label="Password"
                        value={password}
                        onChange={this.handleChangePassword}
                        placeholder="password"
                        type="password"
                    />
                </div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={async () => {
                            // const response = await mutate({variables: {email, password}})
                            const response = await mutate({
                                variables: this.state
                            });
                            console.log(response);
                            this.props.history.push('/login');
                        }}
                    >
                        Register
                    </Button>
                </div>
            </div>
             )}
            </Mutation>
        );
    }
}
