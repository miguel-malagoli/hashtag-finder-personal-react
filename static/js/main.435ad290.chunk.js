(this["webpackJsonphashtag-finder-personal-react"]=this["webpackJsonphashtag-finder-personal-react"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.dbc8b266.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-info-circle.9a629592.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-user-alt.04feb91a.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-search.54e49eef.svg"},function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){e.exports=a.p+"static/media/icon-home.73f20eae.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),l=a.n(s),c=a(1),o=a(2),i=a(4),m=a(3),u=a(7),d=a.n(u),_=(a(16),a(8)),b=a.n(_),h=a(9),p=a.n(h),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("a",{href:"index.html",tabIndex:"0"},r.a.createElement("img",{className:"header__logo",src:d.a,alt:"HashtagFinder"})),r.a.createElement("nav",{className:"header__navigation"},r.a.createElement("a",{href:"Sobre.html",tabIndex:"-1"},r.a.createElement("button",{className:"header__button button button_theme_light",tabIndex:"0"},r.a.createElement("img",{className:"button__icon",src:b.a,alt:""}),"SOBRE")),r.a.createElement("a",{href:"Login.html",tabIndex:"-1"},r.a.createElement("button",{className:"header__button button button_theme_dark",tabIndex:"0"},r.a.createElement("img",{className:"button__icon",src:p.a,alt:""}),"LOGIN"))))}}]),a}(r.a.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("li",{className:"result__image image","data-src":"",tabIndex:"-1"},r.a.createElement("p",{className:"image__text"},"Postado por:"),r.a.createElement("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noopener noreferrer",tabIndex:"-1"},r.a.createElement("p",{className:"image__user",title:""})))}}]),a}(r.a.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("li",{className:"result__tweet tweet"},r.a.createElement("img",{className:"tweet__image",src:"",alt:"Foto de perfil"}),r.a.createElement("div",{className:"tweet__main"},r.a.createElement("div",{className:"tweet__author"},r.a.createElement("h2",{className:"tweet__user",title:""}),r.a.createElement("p",{className:"tweet__at"})),r.a.createElement("p",{className:"tweet__text"}),r.a.createElement("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noopener noreferrer",tabIndex:"-1"},r.a.createElement("p",{className:"tweet__link"},"Ver mais no Twitter"))))}}]),a}(r.a.Component),A=a(10),v=a.n(A),w=(a(17),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){Object(c.a)(this,a);return t.call(this,e)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".tab"),t=document.querySelector(".result__imageList"),a=document.querySelector(".result__tweetList"),n=document.querySelector(".search__input"),r=document.querySelector(".search__feedback"),s=document.querySelector("#hashtag"),l=document.querySelector(".result"),c=document.querySelectorAll(".tweet"),o=document.querySelectorAll(".tweet__image"),i=document.querySelectorAll(".tweet__user"),m=document.querySelectorAll(".tweet__at"),u=document.querySelectorAll(".tweet__text"),d=document.querySelectorAll(".tweet__link"),_=document.querySelectorAll(".image"),b=document.querySelectorAll(".image__user"),h=document.querySelector(".view"),p=document.querySelector(".view__image"),g=document.querySelector(".header__logo").parentElement,E=document.querySelectorAll(".header__button"),f=!1,A=document.querySelector("body");function v(){if("block"==l.style.display)for(var e,t=function(t){e=c[t].getBoundingClientRect(),c[t].classList.contains("tweet_content")&&(e.top<=document.documentElement.clientHeight-e.height||A.getBoundingClientRect().bottom-window.innerHeight<=0)&&c[t].classList.add("tweet_visible"),e=_[t].getBoundingClientRect(),_[t].classList.contains("image_content")&&(e.top<=document.documentElement.clientHeight-.5*e.height||A.getBoundingClientRect().bottom-window.innerHeight<=0)&&(_[t].classList.add("image_visible"),_[t].onclick=function(){w(t)},_[t].onkeypress=function(e){var a=e.charCode||e.keyCode;32!==a&&13!==a||(e.preventDefault(),w(t))})},a=0;a<10;a++)t(a)}function w(e){!1===e?(h.style.display="",p.src="",y(!0)):(h.style.display="flex",p.src=_[e].getAttribute("data-src"),y(!1))}function y(t){for(var a=t?0:-1,r=0;r<10;r++)(0==t||_[r].classList.contains("image_content"))&&(_[r].tabIndex=a,b[r].parentElement.tabIndex=a),(0==t||c[r].classList.contains("tweet_content"))&&(d[r].parentElement.tabIndex=a);g.tabIndex=a,E[0].tabIndex=a,E[1].tabIndex=a,n.tabIndex=a,e[0].tabIndex=a,e[1].tabIndex=a}v(),A.onscroll=v,n.addEventListener("keyup",(function(e){13==e.keyCode&&(e.preventDefault(),n.value=n.value.replace(/[^a-zA-Z0-9_]/g,""),""===n.value?r.textContent="Digite algo no campo de busca (apenas letras, n\xfameros e underlines)":(r.textContent="Aguarde um momento...",function(e){if(f)r.textContent="Aguarde a finaliza\xe7\xe3o da busca anterior";else{f=!0;var t=new XMLHttpRequest,a=new XMLHttpRequest;t.onreadystatechange=function(){n()},a.onreadystatechange=function(){n()},t.open("GET","https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=%23"+e+"%20-filter%3Aretweets%20filter%3Asafe&result_type=recent&tweet_mode=extended&count=10"),t.setRequestHeader("Authorization","Bearer AAAAAAAAAAAAAAAAAAAAAH14HQEAAAAAlyRPi0Q1A7u87pMOdF2PPCKY7ME%3D7kmJegvv6xkK8aZH9ZFyr3KX4OVM3mPiyeFqpwDoarFuyMiJre"),a.open("GET","https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=%23"+e+"%20-filter%3Aretweets%20filter%3Asafe%20filter%3Aimages&result_type=recent&tweet_mode=extended&count=10"),a.setRequestHeader("Authorization","Bearer AAAAAAAAAAAAAAAAAAAAAH14HQEAAAAAlyRPi0Q1A7u87pMOdF2PPCKY7ME%3D7kmJegvv6xkK8aZH9ZFyr3KX4OVM3mPiyeFqpwDoarFuyMiJre"),t.send(),a.send()}function n(){if(4==t.readyState&&200==t.status&&4==a.readyState&&200==a.status){var n,h=JSON.parse(t.responseText),p=JSON.parse(a.responseText);if(h.statuses.length<=0&&p.statuses.length<=0)return l.style.display="",r.textContent="N\xe3o foi encontrado nenhum resultado :(",void(f=!1);for(var g=0;g<10;g++)c[g].classList.remove("tweet_visible"),_[g].classList.remove("image_visible"),g<h.statuses.length?(n=h.statuses[g],c[g].classList.add("tweet_content"),o[g].src=n.user.profile_image_url_https,i[g].textContent=n.user.name,i[g].setAttribute("title",i[g].textContent),m[g].textContent="@"+n.user.screen_name,u[g].textContent=n.full_text,d[g].parentElement.setAttribute("href","https://twitter.com/"+n.user.screen_name),d[g].parentElement.tabIndex="0"):(c[g].classList.remove("tweet_content"),d[g].parentElement.tabIndex="-1"),g<p.statuses.length?(_[g].classList.add("image_content"),_[g].tabIndex="0",_[g].setAttribute("data-src",p.statuses[g].entities.media[0].media_url_https),_[g].style.background="linear-gradient(180deg, #00000000 0%, #000000c4 100%) no-repeat, url("+p.statuses[g].entities.media[0].media_url_https+") no-repeat",_[g].style.backgroundSize="100% 40%, cover",_[g].style.backgroundPosition="0% 100%, center",b[g].textContent="@"+p.statuses[g].user.screen_name,b[g].setAttribute("title",b[g].textContent),b[g].parentElement.setAttribute("href","https://twitter.com/"+p.statuses[g].user.screen_name),b[g].parentElement.tabIndex="0"):(_[g].classList.remove("image_content"),_[g].tabIndex="-1",b[g].parentElement.tabIndex="-1");l.style.display="block",l.scrollIntoView({behavior:"smooth",block:"start"}),r.textContent="",s.textContent=e,f=!1}}}(n.value)))})),this.viewImage=w,this.changeTab=function(n){0==n?(e[0].classList.add("tab_selected"),e[1].classList.remove("tab_selected"),t.classList.remove("result__imageList_hidden"),a.classList.add("result__tweetList_hidden")):(e[0].classList.remove("tab_selected"),e[1].classList.add("tab_selected"),t.classList.add("result__imageList_hidden"),a.classList.remove("result__tweetList_hidden"));for(var r=0;r<10;r++)c[r].classList.remove("tweet_visible"),_[r].classList.remove("image_visible");v()}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"root"},r.a.createElement(g,null),r.a.createElement("main",{className:"search"},r.a.createElement("h1",{className:"search__title"},"Encontre hashtags de maneira f\xe1cil."),r.a.createElement("p",{className:"search__text"},"Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo"),r.a.createElement("div",{className:"search__bar"},r.a.createElement("img",{className:"search__icon",src:v.a,alt:"\xcdcone de busca"}),r.a.createElement("input",{className:"search__input",type:"text",name:"search",placeholder:"Buscar...",spellCheck:"false",maxLength:"140",tabIndex:"0"})),r.a.createElement("p",{className:"search__feedback"})),r.a.createElement("div",{className:"result"},r.a.createElement("div",{className:"result__type"},r.a.createElement("button",{className:"result__tab tab",onClick:function(){e.changeTab(0)},tabIndex:"0"},"Imagens"),r.a.createElement("button",{className:"result__tab tab tab_selected",onClick:function(){e.changeTab(1)},tabIndex:"0"},"Tweets")),r.a.createElement("p",{className:"result__text"},"Exibindo os 10 resultados mais recentes para #",r.a.createElement("span",{id:"hashtag"},"natureza")),r.a.createElement("div",{className:"result__box"},r.a.createElement("ul",{className:"result__imageList result__imageList_hidden"},r.a.createElement(E,null),r.a.createElement(E,null),r.a.createElement(E,null),r.a.createElement(E,null),r.a.createElement(E,null),r.a.createElement(E,null),r.a.createElement(E,null),r.a.createElement(E,null),r.a.createElement(E,null),r.a.createElement(E,null)),r.a.createElement("ul",{className:"result__tweetList"},r.a.createElement(f,null),r.a.createElement(f,null),r.a.createElement(f,null),r.a.createElement(f,null),r.a.createElement(f,null),r.a.createElement(f,null),r.a.createElement(f,null),r.a.createElement(f,null),r.a.createElement(f,null),r.a.createElement(f,null)))),r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__text"},"\xa9 Cocreare 2020. Todos os direitos reservados")),r.a.createElement("div",{className:"view"},r.a.createElement("button",{className:"view__close button button_theme_light",onClick:function(){return e.viewImage(!1)}},"X"),r.a.createElement("img",{className:"view__image",src:"",alt:""})))}}]),a}(r.a.Component));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.435ad290.chunk.js.map