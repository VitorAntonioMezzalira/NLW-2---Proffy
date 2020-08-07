import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'
function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/62727984?s=460&u=32cff39b61409fb1dd7743ea1bce03de2583c473&v=4" alt="Vitor Mezzalira"/>
                        <div>
                            <p>
                                <strong>Vitor Mezzalira</strong>
                                <span>PixelArt</span>
                            </p>
                        </div>
                    </header>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non est expedita facilis at nam quisquam quo accusantium sed quia, eaque eos officiis! Corporis deserunt sed similique exercitationem eaque vero?
                    </p>
                    <footer>
                        <p>
                            Preço/hora 
                            <strong>R$ 35 reais</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>entrar em contato
                        </button>        
                    </footer>
                </article>
    );
}

export default TeacherItem;

