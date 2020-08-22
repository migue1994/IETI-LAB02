import React, {useState} from 'react';
import './Login.css'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function Login() {

    const [user, setUser] = useState(null);

    function handleChange(event) {
        setUser({...user, [event.target.name]: event.target.value});
    }

    function submit() {
        const userStorage = JSON.parse(localStorage.getItem('user'));
        if (userStorage.email === user.email && userStorage.password === user.password) {
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
        } else {
            alert('The username and/or password are invalid, please try again!');
        }
    }

    return (
        <div>
            {JSON.parse(localStorage.getItem('isLoggedIn')) ?
                (
                    <h1>Welcome to Todo App!</h1>
                ) :
                (
                    <div className="card">
                        <div className="avatar">
                            <img src={"img/user.png"} alt="UserImage"/>
                        </div>
                        <h1>Sign In</h1>
                        <form onSubmit={submit}>
                            <TextField
                                label="Email Address"
                                type={'email'}
                                name={'email'}
                                className="textField"
                                required
                                onChange={handleChange}
                            />
                            <TextField
                                label="password"
                                name={'password'}
                                type={'password'}
                                className="textField"
                                required
                                onChange={handleChange}
                            />
                            <Button
                                type={'submit'}
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="button"
                            >
                                Sign in
                            </Button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}
