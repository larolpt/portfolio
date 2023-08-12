import React from 'react';
import logoLPT from '../assets/logo.png'

const Home = () => {
  return (
    <section id='home' className=''>
      <div className='pl-52'>
        <div className=''>
          <img src={logoLPT} alt="Descripción de la imagen" className='pr-5 pb-5'/>
        </div>

        <div className=''>
          <div className=''>
            <h1>Hola soy, Laro Pozuelo de la Torriente</h1>
            <h3>Desarrollador junior full Stack</h3>
          </div>

          <div className=''>
            <p>          
              Soy un chico que ha empezado a introducirse en el mundo del desarrollo 
              hace relativamente poco.  
              durante mis estudios, he descubierto mi gran pasión hacia el mundo del desarrollo. Ademas la capacidad de adaptación gracias a que he trabajado con diferentes 
              tecnologías.
              Mis objetivos son seguir formándome en este campo y tener la oportunidad de 
              introducirme en el mercado laboral de la mano de una empresa que me haga crecer como desarrollador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;