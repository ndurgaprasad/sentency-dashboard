import React, {useState} from "react";
import {observer} from "mobx-react";
import {Button, Form, Grid, GridColumn, Segment} from "semantic-ui-react";
import {useStores} from "../../data/context/UseStore";
import {Redirect} from "react-router-dom";

export const LoginScreen: React.FC<any> = observer(() => {

    const {userStore} = useStores()
    const [user, setUser] = useState({username: "", password: ""})

    const onLoginClicked = async () => {
        await userStore.login(user.username, user.password)
    }

    const onValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <>
            {!userStore.loggedUser ?
                <Grid verticalAlign='middle' centered columns={4}>
                    <GridColumn>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <label>Username</label>
                                    <input placeholder='Username' name="username" onChange={onValueChanged}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input placeholder='Password' type={"password"} name="password"
                                           onChange={onValueChanged}/>
                                </Form.Field>
                                <Button primary fluid onClick={onLoginClicked}>Login</Button>
                            </Form>
                        </Segment>
                    </GridColumn>
                </Grid>
                :
                <Redirect to="/"/>
            }
        </>
    )
})