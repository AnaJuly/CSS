import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mystyle.module.css'; 

class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "5px",
      fontFamily: "Arial",
      
    };
    const style2 = {
      color: 'gray',
      padding: "5px",
      fontFamily: "Arial"
    };

    const style3 ={
     border: "solid",
     color:"black",
     padding: "5px",
     width: "300px",
     border: "3px solid gray"
    }
    const style4 ={
       borderBottom: "3px solid gray",
    }



    return (
      <div>
      <h1 style={style4}> Curso de frontend   </h1>
      <h6 style={mystyle}>Aprenda os fundamentos do design, desenvolvimento front-end e os segredos da experiência do usuário</h6>
      <h5>Trilha > HTML/CSS</h5>
      <h3 style={style2}> Módulo iniciante com html e css </h3>
      <h6 style={mystyle}>HTML e CSS são linguagens que você poderá usar para construir e estilizar websites. Ness curso você irá aprender o básico sobre HTML e CSS para construir seu primeiro website</h6>
      <h5 style={style3}> <h3>Etapa 1</h3><h5>Front-end fundamentos</h5><h6>Aprenda como fazer um website com HTML e CSS</h6></h5> <h5 style={style3}> <h3>Etapa 2</h3><h5>Front-end fundamentos</h5><h6>Aprenda as diferentes versões entre HTML e CSS</h6></h5>
      <h3 style={style2}> Módulo intermediário com html e css </h3>
      <h6 style={mystyle}>CSS simples pode dar uma ótima aparência em seu site. Você precisa explorar os npveis mais complexos do CSS para obter um site profissional</h6>
      <h5 style={style3}> <h3>Etapa 1</h3><h5>CSS Cross Browser</h5><h6>AAprendendo a usar a programação para funcionar nos diversos Browsers</h6></h5>
      <h5 style={style3}> <h3>Etapa 2</h3><h5>Pensando em Mobile</h5><h6>Aprender mobile-first, adaptação e web design responsivo</h6></h5>
      <h5 style={style3}> <h3>Etapa 3</h3><h5>Aventuras com animação web</h5><h6>Viaje através do maravilhoso mundo das animações web</h6></h5>
      </div>

     

     
    );
  }
}


export default MyHeader;