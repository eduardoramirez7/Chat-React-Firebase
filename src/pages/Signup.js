import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';
import { signInWithGoogle, signInWithGitHub, signInWithFacebook } from "../helpers/auth";
import '../styles/Signup.css';
import { Jumbotron, Button, Form, Col } from 'react-bootstrap';
import logo from '../images/cht.png'
import NavBar from '../components/NavBar';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
        this.githubSignIn = this.githubSignIn.bind(this);
        this.facebookSignIn = this.facebookSignIn.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        try {
            await signup(this.state.email, this.state.password);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async googleSignIn() {
        try {
            await signInWithGoogle();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async githubSignIn() {
        try {
            await signInWithGitHub();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async facebookSignIn() {
        try {
            await signInWithFacebook();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }


    render() {
        return (
            <div>
                <NavBar />
                <div class="jumbotron" className="container center">
                    <Jumbotron>
                        <Form onSubmit={this.handleSubmit}>
                            <div className="form-input">
                                <Form.Group>
                                    <h1>Registrate en<Link to="/"> ChatLine <img src={logo} width="100" /></Link>
                                    </h1>
                                    <p>Ingresa tus datos para crear tu cuenta.</p>
                                </Form.Group>

                                <Form.Group>
                                    <Col sm={7}>
                                        <Form.Control id="form-input" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email} required />
                                    </Col>
                                </Form.Group>

                                <Form.Group>
                                    <Col sm={7}>
                                        <Form.Control id="form-input" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password" required/>
                                    </Col>

                                </Form.Group>
                            </div>

                            <div class="buttons">
                                <row>
                                    {this.state.error ? <p>{this.state.error}</p> : null}
                                    <Button type="submit">Registrate</Button>
                                    <hr></hr>
                                    <p>o</p>
                                </row>
                                <row>
                                    <Button className="mr-3" variant="light" onClick={this.googleSignIn} type="button">
                                        Registrate con Google
                                    </Button>
                                    <Button variant="light" onClick={this.githubSignIn}>
                                        Registrate con GitHub
                                    </Button>
                                </row>
                            </div>
                            <br />
                            <p>Tienes una cuenta? <Link to={"/login"}>Ingresa tu cuenta</Link></p>
                        </Form>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}
