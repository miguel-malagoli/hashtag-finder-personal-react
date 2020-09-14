// Importar base do React
import React from 'react';

// Bloco de tweet
export default class Tweet extends React.Component {

    render() {
        return (

            <li className="result__tweet tweet">
                {/* Imagem de perfil */}
                <img
                    className="tweet__image"
                    src=""
                    alt="Foto de perfil"
                />
                {/* Autor e texto */}
                <div className="tweet__main">
                    {/* Nome e @ do usuário */}
                    <div className="tweet__author">
                        <h2 className="tweet__user" title=""></h2>
                        <p className="tweet__at"></p>
                    </div>
                    {/* Corpo do tweet */}
                    <p className="tweet__text"></p>
                    {/* Link para o Twitter */}
                    <a href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex="-1">
                        <p className="tweet__link">Ver mais no Twitter</p>
                    </a>
                </div>
            </li>
        );
    }
}