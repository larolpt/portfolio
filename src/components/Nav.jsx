
import {useState} from 'react';
import logoLPT from '../assets/logoLPT.png';
import {Link} from 'react-scroll';
import '../index.css'

const Nav = () => {
    let Links = [
        {name:"Sobre mi", section:"home"},
        {name:"Experiencia", section:"experiencia"},
        {name:"Estudios", section:"estudios"},
        {name:"Proyectos", section:"proyectos"}
    ]
    let [open,setOpen]=useState(false);
    return (
    
    <nav className="shadow-md w-full fixed top-0 left-0">
        <div className='items-center justify-between bg-gray-800 py-1 md:flex md:px-10 px-7'>
            <div className='text-2xl cursor-pointer flex items-center'>
                <img src={logoLPT} alt="Logo LPT" className=" w-[4rem] h-auto md:w-[6rem] "/>
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`md:flex bg-gray-800 md:items-center md:pb-0 pb-4 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-8 ':'top-[-490px]'}`}>
                {
                    Links.map((a)=>(
                        <li className='bg-gray-800 md:ml-8 md:text-xl md:my-0 my-7'>
                            <Link 
                                to={a.section}
                                activeClass='bg-gray-700 px-4 text-sx rounded p-2 md:text-lg'
                                smooth={true}
                                spy={true}
                                className='cursor-pointer text-white text-base hover:bg-gray-700 hover:text-lg px-4 rounded p-2'
                                >{a.name}
                            </Link>
                        </li>
                    ))
                }
                <Link 
                    to="contacto"
                    smooth={true}
                    spy={true}
                    className='bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
                    duration-500'
                    >Contacto
                </Link>
            </ul>   
        </div>            
    </nav>
  );
};

export default Nav;