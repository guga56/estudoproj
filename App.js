import React, { Comment, Component } from 'react'
import './App.css';
import Img from './Imges/aprendizado.png'

class App extends Component {
  render(){
    return (
      <div className="App">
         
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link show" data-toggle="tab" href="#profile">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#">Dropdown</a>
            <div className="dropdown-menu" x-placement="bottom-start">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>
         
         <h2>Desenvolvimento da Profissão</h2>
  
         <p>Crescimento na profissão depende do nosso empenho e dedicação, sempre perseverar
            e querer aprender melhor e com muita dedicação, para evoluir ainada mais na sociedade.
            Aprimorando melhor na dedicação do cresicmento mevolutivo, para entender e aperfeiçoar.
         </p>
         <p>O  objetivo semrpe pe se manter atualizado ese dedicando no maximo que pode e poder 
            evoluir no aprendizado de um entendimento sempre na pratica,
            Aevolução sempre nos faz conhecer cada projeto e cada funcionalidades e entender melhor
            sobre a mesma
         </p>
         <div className="image"> 
           <img src={Img} alt="aprendizado" className="dimensao"/>
           <p>
           Desenvolver na carreira e aprofundando ainda mais poara um conheicmento evolutivo, para
           um crescimento aprofundado no aprendizado, sempre no processo de um cresicmento, para 
           um estudo aprofundfado e  para conhecer novas tecnologias, tanto frontend e empenhar 
           no backend no caso da carreira de TI. No cresicmento, sempre é importnate obter aidna mais 
           a pratica da regra de negocios para evoluir melhor.
         </p>
         <p>
           A Evolução aprofundada no conhecimento, para crescer no aprednizado sempre é importante 
           pois podemos conhecer e construir algo que nem imqaginavamos que existia, podendo fazer 
           o melhor caminho,para o seu crescimento.
         </p> 
         <p>
           Evoluir mais com cnheicmento, para aprimorar no conheicmento aprofundado num conheicmento 
           e aprender sempre que é muito importante para um cresicmento profissional
         </p>
         </div>
      </div>
    );
  }
   
}

export default App;
