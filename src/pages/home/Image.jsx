// Importar base do React
import React from 'react';

// Bloco de imagem
export default class Image extends React.Component {

    render() {
        return (

            <li className="result__image image" data-src="" tabIndex="-1">

                {/* Créditos */}
                <p className="image__text">Postado por:</p>
                <a href="https://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex="-1">
                    <p className="image__user" title=""></p>
                </a>
            </li>
        );
    }
}