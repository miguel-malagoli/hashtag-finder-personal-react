// Import base do React
import React from 'react';
// Importar componentes
import Header from '../common/Header';
import Image from './Image';
import Tweet from './Tweet';
// Importar imagens
import searchIcon from './icon-search.svg';
// Importar CSS
import './index.css';

// Página principal
export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hashtag: '',
            feedback: '',
            isSearching: false
        }

        this.handleHashtag = this.handleHashtag.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        let viewImage = function() {return undefined};
        let changeTab = function() {return undefined};
    }


    // Função que atualiza o input de busca conforme o usuário digita
    handleHashtag(e) {
        this.setState({hashtag: e.target.value});
    }

    // Função que inicia a requisição ao Twitter
    handleSearch(e) {
        // Se a tecla pressionada for Enter
        if (e.keyCode == 13) {
            // Prevenir qualquer outro comportamento associado à tecla
            e.preventDefault();
            // Remover símbolos não aceitos em hashtags
            this.setState({hashtag: this.state.hashtag.replace(/[^a-zA-Z0-9_]/g, '')});
            // Se uma busca está sendo realizada, instruir o usuário a aguardar
            if (this.state.isSearching) {
                this.setState({feedback: 'Aguarde a finalização da busca anterior'});
                return;
            // Se o campo estiver vazio, apenas informar o usuário quais caracteres são permitidos
            } else if (this.state.feedback === '') {
                this.setState({feedback: 'Digite algo no campo de busca (apenas letras, números e underlines)'});
            // Se não, pedir o aguardo e realizar a busca
            } else {
                this.setState({
                    feedback: 'Aguarde um momento...',
                    isSearching: true
                });
            }
        }
    }

    /*
    // Função que busca tweets com a hashtag fornecida
    search(hashtag) {
        // Se uma busca está sendo realizada, instruir o usuário a aguardar
        if (isSearching) {
            searchFeedback.textContent = "Aguarde a finalização da busca anterior";
            return;
        }
        // Marcar através da variável global que uma nova busca está em progresso
        isSearching = true;

        // Função que será atribuída à propriedade "onstatechange" das requisições ao Twitter
        function displayResults() {
            // Verificar se ambas as buscas estão completas
            if (twitterRequest.readyState == 4 && twitterRequest.status == 200 &&
                imageRequest.readyState == 4 && imageRequest.status == 200) {

                // Transformar os resultados de ambas em JSON
                let results = JSON.parse(twitterRequest.responseText);
                let imageResults = JSON.parse(imageRequest.responseText);
                // Variável que será usada para iterar os resultados
                let tweet;

                // Se não houver nenhum resultado
                if (results.statuses.length <= 0 &&
                    imageResults.statuses.length <= 0) {

                    // Esconder o bloco dos resultados e notificar o usuário
                    resultBlock.style.display = "";
                    searchFeedback.textContent = "Não foi encontrado nenhum resultado :(";
                    // Encerrar a busca
                    isSearching = false;
                    return;
                }

                // Para cada um dos 10 elementos de tweet/imagem no DOM
                for (let i=0; i<10; i++) {
                    // Resetar a visibilidade dos elementos em que ela está presente
                    tweetBlocks[i].classList.remove('tweet_visible');
                    images[i].classList.remove('image_visible');
                    // Se houver um resultado para colocar no bloco de tweet "i"
                    if (i < results.statuses.length) {
                        // Marcar o tweet com a classe "content"
                        tweet = results.statuses[i];
                        tweetBlocks[i].classList.add('tweet_content');
                        // Atribuir aos elementos as propriedades do resultado
                        tweetImages[i].src = tweet.user.profile_image_url_https;
                        tweetNames[i].textContent = tweet.user.name;
                        tweetNames[i].setAttribute(
                            'title',
                            tweetNames[i].textContent
                        );
                        tweetHandles[i].textContent = "@" + tweet.user.screen_name;
                        tweetTexts[i].textContent = tweet.full_text;
                        tweetLinks[i].parentElement.setAttribute(
                            'href',
                            "https://twitter.com/" + tweet.user.screen_name
                        );
                        tweetLinks[i].parentElement.tabIndex = "0";
                    // Se NÃO houver um resultado para colocar no bloco de tweet "i"
                    } else {
                        // Remover o marcador de "content" caso ele exista por causa de uma pesquisa anterior
                        tweetBlocks[i].classList.remove('tweet_content');
                        tweetLinks[i].parentElement.tabIndex = "-1";
                    }

                    // Se houver um resultado para colocar no bloco de imagem "i"
                    if (i < imageResults.statuses.length) {
                        // Marcar a imagem com a classe "content"
                        images[i].classList.add('image_content');
                        // Atribuir aos elementos as propriedades do resultado
                        images[i].tabIndex = "0"
                        images[i].setAttribute(
                            'data-src',
                            imageResults.statuses[i].entities.media[0].media_url_https
                        );
                        images[i].style.background =
                            "linear-gradient(180deg, #00000000 0%, #000000c4 100%) no-repeat, url(" +
                            imageResults.statuses[i].entities.media[0].media_url_https + ") no-repeat";
                        images[i].style.backgroundSize = "100% 40%, cover";
                        images[i].style.backgroundPosition = "0% 100%, center";
                        imageUsers[i].textContent = "@" + imageResults.statuses[i].user.screen_name;
                        imageUsers[i].setAttribute(
                            'title',
                            imageUsers[i].textContent
                        );
                        imageUsers[i].parentElement.setAttribute(
                            'href',
                            "https://twitter.com/" + imageResults.statuses[i].user.screen_name
                        );
                        imageUsers[i].parentElement.tabIndex = "0";
                    // Se NÃO houver um resultado para colocar no bloco de imagem "i"
                    } else {
                        // Remover o marcador de "content" caso ele exista por causa de uma pesquisa anterior
                        images[i].classList.remove('image_content');
                        images[i].tabIndex = "-1"
                        imageUsers[i].parentElement.tabIndex = "-1";
                    }
                }
                // Tornar o bloco de resultado visível sobrepondo o CSS
                resultBlock.style.display = "block";
                // Mover o scroll para o topo do bloco
                resultBlock.scrollIntoView({behavior: "smooth", block: "start"});
                // Atualizar o texto e encerrar a busca
                searchFeedback.textContent = "";
                searchText.textContent = hashtag;
                isSearching = false;
            }
        }

        // Criar as duas requisições que serão feitas
        let twitterRequest = new XMLHttpRequest();
        let imageRequest = new XMLHttpRequest();
        // Atribuir a ambas a função displayResults() para quando as duas estiverem prontas
        twitterRequest.onreadystatechange = function() {
            displayResults();
        }
        imageRequest.onreadystatechange = function() {
            displayResults();
        }

        // A primeira requisição busca todos os tweets com a hashtag fornecida
        twitterRequest.open(
            "GET",
            // Parametros adicionais:
            // - Excluir retweets
            // - Excluir conteúdo potencialmente sensível
            // - Ordenas por mais recente
            // - Extender os tweets (impedir que acabem em "..." se forem longos)
            // - Apenas 10 resultados
            "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=%23" + 
                hashtag + "%20-filter%3Aretweets%20filter%3Asafe&result_type=recent&tweet_mode=extended&count=10"
        );
        // Header HTTP de autorização
        twitterRequest.setRequestHeader(
            "Authorization",
            "Bearer AAAAAAAAAAAAAAAAAAAAAH14HQEAAAAAlyRPi0Q1A7u87pMOdF2PPCKY7ME%3D7kmJegvv6xkK8aZH9ZFyr3KX4OVM3mPiyeFqpwDoarFuyMiJre"
        );

        // A segunda requisição busca apenas tweets com imagens contendo a hashtag fornecida
        imageRequest.open(
            "GET",
            // Parametros adicionais:
            // - Excluir retweets
            // - Excluir conteúdo potencialmente sensível
            // - Incluir apenas resultados contendo imagens
            // - Ordenas por mais recente
            // - Extender os tweets (impedir que acabem em "..." se forem longos)
            // - Apenas 10 resultados
            "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=%23" + 
                hashtag + "%20-filter%3Aretweets%20filter%3Asafe%20filter%3Aimages&result_type=recent&tweet_mode=extended&count=10"
        );
        // Header HTTP de autorização
        imageRequest.setRequestHeader(
            "Authorization",
            "Bearer AAAAAAAAAAAAAAAAAAAAAH14HQEAAAAAlyRPi0Q1A7u87pMOdF2PPCKY7ME%3D7kmJegvv6xkK8aZH9ZFyr3KX4OVM3mPiyeFqpwDoarFuyMiJre"
        );

        // Enviar as requisições e aguardar que displayResults() seja chamada
        twitterRequest.send();
        imageRequest.send();
    }*/


    componentDidMount() {
        /*
        // Elementos das abas de resultado
        const tabs = document.querySelectorAll('.tab');
        const imageList = document.querySelector('.result__imageList');
        const tweetList = document.querySelector('.result__tweetList');
        // Elemento da barra de busca
        const searchInput = document.querySelector('.search__input');
        const searchFeedback = document.querySelector('.search__feedback');
        const searchText = document.querySelector('#hashtag');
        // Elementos preenchidos pelos tweets buscados
        const resultBlock = document.querySelector('.result');
        const tweetBlocks = document.querySelectorAll('.tweet');
        const tweetImages = document.querySelectorAll('.tweet__image');
        const tweetNames = document.querySelectorAll('.tweet__user');
        const tweetHandles = document.querySelectorAll('.tweet__at');
        const tweetTexts = document.querySelectorAll('.tweet__text');
        const tweetLinks = document.querySelectorAll('.tweet__link');
        // Elementos preenchidos pelas imagens buscadas
        const images = document.querySelectorAll('.image');
        const imageUsers = document.querySelectorAll('.image__user');
        // Visualização ampliada da imagem
        const imageView = document.querySelector('.view');
        const imageLarge = document.querySelector('.view__image');
        // Elementos do header usados no controle de foco
        const logo = document.querySelector('.header__logo').parentElement;
        const nav = document.querySelectorAll('.header__button');
        // Variável para checar se uma busca está sendo realizada
        let isSearching = false;
        // Referência ao body
        const bodyElement = document.querySelector('body');


        // Função que será rodada sempre que o usuário mexer no scroll da página
        function animateScroll() {
            // Ignorar o processo se o bloco de resultados estiver invisível
            if (resultBlock.style.display != 'block') {
                return;
            }
            // Variável que irá conter a posição de cada elemento
            let rect;
            // Para cada imagem/tweet:
            for (let i=0; i<10; i++) {
                
                // Tweet:
                rect = tweetBlocks[i].getBoundingClientRect();
                // Se o elemento estiver visível dentro da janela e tiver conteúdo
                if (tweetBlocks[i].classList.contains('tweet_content') &&
                    (rect.top <= document.documentElement.clientHeight - rect.height ||
                        // Ou se o scroll estiver no fim da página
                        bodyElement.getBoundingClientRect().bottom - window.innerHeight <= 0)) {
                    // Adicionar a classe que mudará suas propriedades CSS
                    tweetBlocks[i].classList.add('tweet_visible');
                }

                // Imagem:
                rect = images[i].getBoundingClientRect();
                // Se o elemento estiver visível dentro da janela e tiver conteúdo
                if (images[i].classList.contains('image_content') &&
                    (rect.top <= document.documentElement.clientHeight - (rect.height * 0.5) ||
                        // Ou se o scroll estiver no fim da página
                        bodyElement.getBoundingClientRect().bottom - window.innerHeight <= 0)) {
                    // Adicionar a classe que mudará suas propriedades CSS
                    images[i].classList.add('image_visible');
                    // Adicionar funções para expandir a imagem por mouse e teclado
                    images[i].onclick = () => {viewImage(i)};
                    images[i].onkeypress = (e) => {
                        let code = e.charCode || e.keyCode;
                        // Reagir às teclas Enter e Space
                        if(code === 32 || code === 13) {
                            // No caso do Space, prevenir o scroll padrão
                            e.preventDefault();
                            viewImage(i);
                        }
                    };
                }
            }
        }
        // Chamar a função ao carregar a página, e depois sempre que o usuário mexer no scroll
        animateScroll();
        bodyElement.onscroll = animateScroll;


        // Função que busca tweets com a hashtag fornecida
        function search(hashtag) {
            // Se uma busca está sendo realizada, instruir o usuário a aguardar
            if (isSearching) {
                searchFeedback.textContent = "Aguarde a finalização da busca anterior";
                return;
            }
            // Marcar através da variável global que uma nova busca está em progresso
            isSearching = true;

            // Função que será atribuída à propriedade "onstatechange" das requisições ao Twitter
            function displayResults() {
                // Verificar se ambas as buscas estão completas
                if (twitterRequest.readyState == 4 && twitterRequest.status == 200 &&
                    imageRequest.readyState == 4 && imageRequest.status == 200) {

                    // Transformar os resultados de ambas em JSON
                    let results = JSON.parse(twitterRequest.responseText);
                    let imageResults = JSON.parse(imageRequest.responseText);
                    // Variável que será usada para iterar os resultados
                    let tweet;

                    // Se não houver nenhum resultado
                    if (results.statuses.length <= 0 &&
                        imageResults.statuses.length <= 0) {

                        // Esconder o bloco dos resultados e notificar o usuário
                        resultBlock.style.display = "";
                        searchFeedback.textContent = "Não foi encontrado nenhum resultado :(";
                        // Encerrar a busca
                        isSearching = false;
                        return;
                    }

                    // Para cada um dos 10 elementos de tweet/imagem no DOM
                    for (let i=0; i<10; i++) {
                        // Resetar a visibilidade dos elementos em que ela está presente
                        tweetBlocks[i].classList.remove('tweet_visible');
                        images[i].classList.remove('image_visible');
                        // Se houver um resultado para colocar no bloco de tweet "i"
                        if (i < results.statuses.length) {
                            // Marcar o tweet com a classe "content"
                            tweet = results.statuses[i];
                            tweetBlocks[i].classList.add('tweet_content');
                            // Atribuir aos elementos as propriedades do resultado
                            tweetImages[i].src = tweet.user.profile_image_url_https;
                            tweetNames[i].textContent = tweet.user.name;
                            tweetNames[i].setAttribute(
                                'title',
                                tweetNames[i].textContent
                            );
                            tweetHandles[i].textContent = "@" + tweet.user.screen_name;
                            tweetTexts[i].textContent = tweet.full_text;
                            tweetLinks[i].parentElement.setAttribute(
                                'href',
                                "https://twitter.com/" + tweet.user.screen_name
                            );
                            tweetLinks[i].parentElement.tabIndex = "0";
                        // Se NÃO houver um resultado para colocar no bloco de tweet "i"
                        } else {
                            // Remover o marcador de "content" caso ele exista por causa de uma pesquisa anterior
                            tweetBlocks[i].classList.remove('tweet_content');
                            tweetLinks[i].parentElement.tabIndex = "-1";
                        }

                        // Se houver um resultado para colocar no bloco de imagem "i"
                        if (i < imageResults.statuses.length) {
                            // Marcar a imagem com a classe "content"
                            images[i].classList.add('image_content');
                            // Atribuir aos elementos as propriedades do resultado
                            images[i].tabIndex = "0"
                            images[i].setAttribute(
                                'data-src',
                                imageResults.statuses[i].entities.media[0].media_url_https
                            );
                            images[i].style.background =
                                "linear-gradient(180deg, #00000000 0%, #000000c4 100%) no-repeat, url(" +
                                imageResults.statuses[i].entities.media[0].media_url_https + ") no-repeat";
                            images[i].style.backgroundSize = "100% 40%, cover";
                            images[i].style.backgroundPosition = "0% 100%, center";
                            imageUsers[i].textContent = "@" + imageResults.statuses[i].user.screen_name;
                            imageUsers[i].setAttribute(
                                'title',
                                imageUsers[i].textContent
                            );
                            imageUsers[i].parentElement.setAttribute(
                                'href',
                                "https://twitter.com/" + imageResults.statuses[i].user.screen_name
                            );
                            imageUsers[i].parentElement.tabIndex = "0";
                        // Se NÃO houver um resultado para colocar no bloco de imagem "i"
                        } else {
                            // Remover o marcador de "content" caso ele exista por causa de uma pesquisa anterior
                            images[i].classList.remove('image_content');
                            images[i].tabIndex = "-1"
                            imageUsers[i].parentElement.tabIndex = "-1";
                        }
                    }
                    // Tornar o bloco de resultado visível sobrepondo o CSS
                    resultBlock.style.display = "block";
                    // Mover o scroll para o topo do bloco
                    resultBlock.scrollIntoView({behavior: "smooth", block: "start"});
                    // Atualizar o texto e encerrar a busca
                    searchFeedback.textContent = "";
                    searchText.textContent = hashtag;
                    isSearching = false;
                }
            }

            // Criar as duas requisições que serão feitas
            let twitterRequest = new XMLHttpRequest();
            let imageRequest = new XMLHttpRequest();
            // Atribuir a ambas a função displayResults() para quando as duas estiverem prontas
            twitterRequest.onreadystatechange = function() {
                displayResults();
            }
            imageRequest.onreadystatechange = function() {
                displayResults();
            }

            // A primeira requisição busca todos os tweets com a hashtag fornecida
            twitterRequest.open(
                "GET",
                // Parametros adicionais:
                // - Excluir retweets
                // - Excluir conteúdo potencialmente sensível
                // - Ordenas por mais recente
                // - Extender os tweets (impedir que acabem em "..." se forem longos)
                // - Apenas 10 resultados
                "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=%23" + 
                    hashtag + "%20-filter%3Aretweets%20filter%3Asafe&result_type=recent&tweet_mode=extended&count=10"
            );
            // Header HTTP de autorização
            twitterRequest.setRequestHeader(
                "Authorization",
                "Bearer AAAAAAAAAAAAAAAAAAAAAH14HQEAAAAAlyRPi0Q1A7u87pMOdF2PPCKY7ME%3D7kmJegvv6xkK8aZH9ZFyr3KX4OVM3mPiyeFqpwDoarFuyMiJre"
            );

            // A segunda requisição busca apenas tweets com imagens contendo a hashtag fornecida
            imageRequest.open(
                "GET",
                // Parametros adicionais:
                // - Excluir retweets
                // - Excluir conteúdo potencialmente sensível
                // - Incluir apenas resultados contendo imagens
                // - Ordenas por mais recente
                // - Extender os tweets (impedir que acabem em "..." se forem longos)
                // - Apenas 10 resultados
                "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=%23" + 
                    hashtag + "%20-filter%3Aretweets%20filter%3Asafe%20filter%3Aimages&result_type=recent&tweet_mode=extended&count=10"
            );
            // Header HTTP de autorização
            imageRequest.setRequestHeader(
                "Authorization",
                "Bearer AAAAAAAAAAAAAAAAAAAAAH14HQEAAAAAlyRPi0Q1A7u87pMOdF2PPCKY7ME%3D7kmJegvv6xkK8aZH9ZFyr3KX4OVM3mPiyeFqpwDoarFuyMiJre"
            );

            // Enviar as requisições e aguardar que displayResults() seja chamada
            twitterRequest.send();
            imageRequest.send();
        }


        // Atribuir a função de pesquisa à tecla Enter quando usada no input de busca
        searchInput.addEventListener(
            'keyup',
            function(event) {
                // Se a tecla pressionada for Enter
                if (event.keyCode == 13) {
                    // Prevenir qualquer outro comportamento associado à tecla
                    event.preventDefault();
                    // Remover símbolos não aceitos em hashtags
                    searchInput.value = searchInput.value.replace(/[^a-zA-Z0-9_]/g, '');
                    // Se o campo estiver vazio, apenas informar o usuário quais caracteres são permitidos
                    if (searchInput.value === '') {
                        searchFeedback.textContent = 'Digite algo no campo de busca (apenas letras, números e underlines)';
                    // Se não, pedir o aguardo e realizar a busca
                    } else {
                        searchFeedback.textContent = 'Aguarde um momento...';
                        search(searchInput.value);
                    }
                }
            }
        );


        // Função que muda a aba de resultados na versão mobile
        function changeTab(tab) {
            if (tab == 0) {
                tabs[0].classList.add('tab_selected');
                tabs[1].classList.remove('tab_selected');
                imageList.classList.remove('result__imageList_hidden');
                tweetList.classList.add('result__tweetList_hidden');
            } else {
                tabs[0].classList.remove('tab_selected');
                tabs[1].classList.add('tab_selected');
                imageList.classList.add('result__imageList_hidden');
                tweetList.classList.remove('result__tweetList_hidden');
            }
            // Resetar a visibilidade dos elementos para que a transição se repita ao mudar de aba
            for (let i=0; i<10; i++) {
                tweetBlocks[i].classList.remove('tweet_visible');
                images[i].classList.remove('image_visible');
            }
            animateScroll();
        }


        // Função que é chamada ao clicar uma imagem, exibindo-a em tela inteira
        function viewImage(imageIndex) {
            // Usar o valor falso como função de fechar a exibição
            if (imageIndex === false) {
                // Remover as propriedades
                imageView.style.display = "";
                imageLarge.src = "";
                // Reabilitar o foco de outros elementos que precisam
                focusControl(true);
            // Se for passado um valor numérico
            } else {
                // Mudar o display e o atributo da imagem
                imageView.style.display = "flex";
                imageLarge.src = images[imageIndex].getAttribute('data-src');
                // Desabilitar o foco de todos os outros elementos
                focusControl(false);
            }
        }


        // Função que habilita ou desabilita o foco dos elementos interativos abaixo do bloco view
        function focusControl(enable) {
            // Novo tabIndex que será atribuído a todo esse grupo de elementos
            let newIndex = enable ? 0 : -1;
            // Checar todos os 10 elementos de tweet e imagem
            for (let i=0; i<10; i++) {
                // Se o foco for desabilitado, checar se a imagem tem conteúdo 
                if (enable == false ||
                    images[i].classList.contains("image_content")) {
                    // Alterar o tabIndex
                    images[i].tabIndex = newIndex;
                    imageUsers[i].parentElement.tabIndex = newIndex;
                }
                // Se o foco for desabilitado, checar se o tweet tem conteúdo 
                if (enable == false ||
                    tweetBlocks[i].classList.contains("tweet_content")) {
                    // Alterar o tabIndex
                    tweetLinks[i].parentElement.tabIndex = newIndex;
                }
            }
            // Outros elementos com foco:
            // Logo
            logo.tabIndex = newIndex;
            // Botões do header
            nav[0].tabIndex = newIndex;
            nav[1].tabIndex = newIndex;
            // Campo de busca
            searchInput.tabIndex = newIndex;
            // Abas de resultado
            tabs[0].tabIndex = newIndex;
            tabs[1].tabIndex = newIndex;
        }
        this.viewImage = viewImage;
        this.changeTab = changeTab;
        */
    }

    render() {
        return(

            <div className="root">

                {/* Menu e navegação */}
                <Header />

                {/* Bloco de busca */}
                <main className="search">

                    {/* Título e texto */}
                    <h1 className="search__title">Encontre hashtags de maneira fácil.</h1>
                    <p className="search__text">
                        Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo
                    </p>

                    {/* Barra de busca */}
                    <div className="search__bar">
                        {/* Ícone de busca */}
                        <img
                            className="search__icon"
                            src={searchIcon}
                            alt="Ícone de busca"
                        />
                        {/* Input de texto */}
                        <input
                            className="search__input"
                            type="text"
                            name="search"
                            placeholder="Buscar..."
                            spellCheck="false"
                            maxLength="140"
                            tabIndex="0"
                            onKeyDown={this.handleSearch}
                            onChange={this.handleHashtag}
                            value={this.state.hashtag}
                        />
                    </div>
                    {/* Texto que informa o usuário do estado atual da busca */}
                    <p className="search__feedback">{this.state.feedback}</p>
                </main>

                {/* Bloco dos resultados - visível somente após realizada uma busca */}
                <div className="result">

                    {/* Tabs para selecionar qual tipo de resultado é mostrado - visível e necessário somente em mobile */}
                    <div className="result__type">
                        {/* Tab de Imagens */}
                        <button className="result__tab tab"
                            onClick={() => {this.changeTab(0)}}
                            tabIndex="0">
                            Imagens
                        </button>
                        {/* Tab de Tweets */}
                        <button className="result__tab tab tab_selected"
                            onClick={() => {this.changeTab(1)}}
                            tabIndex="0">
                            Tweets
                        </button>
                    </div>

                    {/* Texto de feedback da busca */}
                    <p className="result__text">
                        Exibindo os 10 resultados mais recentes para #<span id="hashtag">natureza</span>
                    </p>

                    {/* Resultados da busca */}
                    <div className="result__box">
                        {/* Lista de imagens */}
                        <ul className="result__imageList result__imageList_hidden">
                            {/* Imagens 1-10 */}
                            <Image />
                            <Image />
                            <Image />
                            <Image />
                            <Image />
                            <Image />
                            <Image />
                            <Image />
                            <Image />
                            <Image />
                        </ul>

                        {/* Lista de tweets */}
                        <ul className="result__tweetList">
                            {/* Tweets 1-10 */}
                            <Tweet />
                            <Tweet />
                            <Tweet />
                            <Tweet />
                            <Tweet />
                            <Tweet />
                            <Tweet />
                            <Tweet />
                            <Tweet />
                            <Tweet />
                        </ul>
                    </div>
                </div>

                {/* Rodapé da página */}
                <footer className="footer">
                    {/* Texto do rodapé */}
                    <p className="footer__text">© Cocreare 2020. Todos os direitos reservados</p>
                </footer>

                {/* Visualização de imagem, só é visível quando uma imagem é clicada */}
                <div className="view">
                    {/* Botão que esconde a visualização */}
                    <button className="view__close button button_theme_light" onClick={() => this.viewImage(false)}>
                        X
                    </button>
                    {/* Imagem do resultado, ampliada */}
                    <img className="view__image"
                        src=""
                        alt=""
                    />
                </div>

            </div>
        );
    }
}