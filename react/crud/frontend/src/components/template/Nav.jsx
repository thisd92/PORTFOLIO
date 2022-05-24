import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

export default props =>
    <aside className="menu-area">
        {/* Refatorar depois, transformar os links em navitems.jsx igual header */}
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>