// Importar base do React
import React from 'react';

// Bloco de tweet
export default class Tweet extends React.Component {
    // Construtor
    constructor(props) {
        super(props);
        // Referência ao elemento do tweet, necessário para encontrar sua posição na tela
        this.tweetBlock = React.createRef();
        // Callback que será usada conforme o usuário move o scroll da tela
        this.handleScroll = this.handleScroll.bind(this);
    }

    // Ao montar o componente, registrar a callback
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    // Ao desmontar o componente, remover a callback
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    // Callback que será chamada sempre que o scroll da janela for alterado
    handleScroll() {
        // Isolar a posição e dimensões do componente
        let rect = this.tweetBlock.current.getBoundingClientRect();
        // Se o tweet estiver dentro do espaço vertical da janela
        if(rect.top <= document.documentElement.clientHeight - rect.height ||
            // Ou se o scroll já tiver alcançado o fim do documento
            document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {

            // Adicionar a classe CSS que causará a transição
            this.tweetBlock.current.classList.add('tweet_visible');
            // Remover o callback prematuramente
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    render() {
        return (

            <li className="result__tweet tweet" ref={this.tweetBlock}>
                {/* Imagem de perfil */}
                <img
                    className="tweet__image"
                    src={this.props.post.user.profile_image_url_https}
                    alt="Foto de perfil"
                />
                {/* Autor e texto */}
                <div className="tweet__main">
                    {/* Nome e @ do usuário */}
                    <div className="tweet__author">
                        <h2 className="tweet__user" title={this.props.post.user.name}>
                            {this.props.post.user.name}
                        </h2>
                        <p className="tweet__at">{"@" + this.props.post.user.screen_name}</p>
                    </div>
                    {/* Corpo do tweet */}
                     <p className="tweet__text">{this.props.post.full_text}</p>
                    {/* Link para o Twitter */}
                    <a href={"https://www.twitter.com/" + this.props.post.user.screen_name}
                        target="_blank"
                        rel="noopener noreferrer">
                        <p className="tweet__link">Ver mais no Twitter</p>
                    </a>
                </div>
            </li>
        );
    }
}