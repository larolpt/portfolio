
import React from 'react';
import logoLPT from '../assets/logoLPT.png';
import {Link} from 'react-scroll';

const Nav = () => {
    
    return (
    <nav className="bg-gray-800 md:h-screen md:w-40 px-4 py-8 flex flex-col justify-between fixed top-0 left-0">
        <div className="flex items-center justify-center">
            <img src={logoLPT} alt="Logo LPT" className="w-22 h-22" />
        </div>
        <div className="flex flex-col space-y-2">
            <Link 
                to='home'
                activeClass='bg-gray-700 text-lg px-4 rounded'
                smooth={true}
                spy={true}
                className='cursor-pointer text-white hover:bg-gray-700 hover:text-lg px-4 rounded'
                >Home
            </Link>
            <Link 
                to='experiencia'
                activeClass='bg-gray-700 text-lg px-4 rounded'
                smooth={true}
                spy={true}
                className='cursor-pointer text-white hover:bg-gray-700 hover:text-lg px-4 rounded'
                >Experiencia
            </Link>
            <Link 
                to='estudios'
                activeClass='bg-gray-700 text-lg px-4 rounded'
                smooth={true}
                spy={true}
                className='cursor-pointer text-white hover:bg-gray-700 hover:text-lg px-4 rounded'
                >Estudios
            </Link>
            <Link 
                to='proyectos'
                activeClass='bg-gray-700 text-lg px-4 rounded'
                smooth={true}
                spy={true}
                className='cursor-pointer text-white hover:bg-gray-700 hover:text-lg px-4 rounded'
                >Proyectos
            </Link>
            <Link 
                to='contacto'
                activeClass='bg-gray-700 text-lg px-4 rounded'
                smooth={true}
                spy={true}
                className='cursor-pointer text-white hover:bg-gray-700 hover:text-lg px-4 rounded'
                >Contacto
            </Link>
        </div>
        <div className="text-white text-sm mt-8">© {new Date().getFullYear()} Mi SPA. Todos los derechos reservados.</div>
    </nav>
  );
};

export default Nav;