// Import base do React
import React from 'react';
// Import de imagens
import logo from './logo.svg';
import homeIcon from './icon-home.svg';
import aboutIcon from './icon-info-circle.svg';
import loginIcon from './icon-user-alt.svg';

// Topo da página - Bloco Header
export default class Header extends React.Component {

    render() {
        return (

            <header className="header">

                {/* Logo */}
                <a href="index.html" tabIndex="0">
                    <img
                    className="header__logo"
                    src={logo}
                    alt="HashtagFinder"
                    />
                </a>

                {/* Botões de navegação */}
                <nav className="header__navigation">
                    {/* Atalho para a página do projeto */}
                    {/* TabIndex negativo para evitar a navegação redundante entre o <a> e o <button> do link */}
                    <a href="Sobre.html" tabIndex="-1">
                        <button className="header__button button button_theme_light" tabIndex="0">
                            <img
                                className="button__icon"
                                src={aboutIcon}
                                alt=""
                            />
                            SOBRE
                        </button>
                    </a>
                    {/* Atalho para a página de Login */}
                    {/* TabIndex negativo para evitar a navegação redundante entre o <a> e o <button> do link */}
                    <a href="Login.html" tabIndex="-1">
                        <button className="header__button button button_theme_dark" tabIndex="0">
                            <img
                                className="button__icon"
                                src={loginIcon}
                                alt=""
                            />
                            LOGIN
                        </button>
                    </a>
                </nav>

            </header>
        );
    }
}