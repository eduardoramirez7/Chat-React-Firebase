import React, { Component } from "react";
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/Home.css';
import logo from '../images/cht.png'


export default class Home extends Component {
    render() {
        return (

            <div class="container">
                <div class="jumbotron" className="container center">

                    <Jumbotron>
                        <img src={logo} width="100"/>
                        <h1 className='display-4'>Bienvenido a ChatLine</h1>
                        <p>
                            Descubre y conoce personas donde quiera que estes, es facil<br />
                            entra ahora y disfruta de ChatLine
                        </p>
                        <hr className='my-2' />
                        <p>
                            <Link to="/Signup">Registrate</Link><br />
                            <Link to="/login">Inicia Sesión</Link>
                        </p>
                    </Jumbotron>
                </div>
            </div >


        );
    }
}
