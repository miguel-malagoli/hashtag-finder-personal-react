// Importar base do React
import React from 'react';

// Bloco de imagem
export default class Image extends React.Component {
    // Construtor
    constructor(props) {
        super(props);
        // Referência ao elemento do tweet, necessário para encontrar sua posição na tela
        this.imageBlock = React.createRef();
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
        let rect = this.imageBlock.current.getBoundingClientRect();
        // Se o tweet estiver dentro do espaço vertical da janela
        if(rect.top <= document.documentElement.clientHeight - (rect.height * 0.5) ||
            // Ou se o scroll já tiver alcançado o fim do documento
            document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {

            // Adicionar a classe CSS que causará a transição
            this.imageBlock.current.classList.add('image_visible');
            // Remover o callback prematuramente
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    render() {
        return (

            <li className="result__image image"
                ref={this.imageBlock}
                tabIndex="0"
                style={{
                    background: "linear-gradient(180deg, #00000000 0%, #000000c4 100%) no-repeat, url(" +
                        this.props.post.entities.media[0].media_url_https +
                        ") no-repeat",
                    backgroundSize: "100% 40%, cover",
                    backgroundPosition: "0% 100%, center"
                }}>

                {/* Créditos */}
                <p className="image__text">Postado por:</p>
                <a href={"https://www.twitter.com/" + this.props.post.user.screen_name}
                    target="_blank"
                    rel="noopener noreferrer">
                    <p className="image__user" title={"@" + this.props.post.user.screen_name}>
                        {"@" + this.props.post.user.screen_name}
                    </p>
                </a>
            </li>
        );
    }
}