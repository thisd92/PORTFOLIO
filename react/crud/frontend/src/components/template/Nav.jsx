import React from "react";
import './Nav.css'

export default props =>
    <aside className="menu-area">
        {/* Refatorar depois, transformar os links em navitems.jsx igual header */}
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>