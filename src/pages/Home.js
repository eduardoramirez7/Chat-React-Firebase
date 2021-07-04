import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Te damos la bienvenida a ChatLine</h1>
                <p>
                    Descubre y conoce personas donde quiera que estes, es facil, entra ahora y disfruta de ChatLine
                </p>
                <div>
                    <Link to="/signup">
                        Crea una cuenta nueva
                    </Link>
                    <Link to="/login">
                        Entra a tu cuenta
                    </Link>
                </div>
            </div>
        );
    }
}
