import React, { Component } from "react";
import { Col, Form, FormControl, Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";
import '../styles/Login.css';
import logo from '../images/cht.png'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div>
        <div class="jumbotron" className="container center">
          <Jumbotron>
            <Form autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="form-group-login">

                <Form.Group>
                  <row>
                    <h1>Inicio de Sesión en<Link to="/"> ChatLine <img src={logo} width="100" /></Link>
                    </h1>
                    <p>Ingresa los datos de tu cuenta registrada.</p>
                  </row>

                </Form.Group>

                <Form.Group>
                  <Col sm={7}>
                    <Form.Control id="form-input" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email} />
                  </Col>
                </Form.Group>

                <Form.Group>
                  <Col sm={7}>
                    <Form.Control id="form-input" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password" />
                  </Col>
                </Form.Group>

              </div>
              <div>
                {this.state.error ? (
                  <p>{this.state.error}</p>
                ) : null}
                <Button type="submit">Iniciar Sesión</Button>
              </div>
              <hr />
              <p>No tienes una cuenta? <Link to="/signup">Registrate</Link></p>
            </Form>
          </Jumbotron>
        </div>

      </div>
    );
  }
}