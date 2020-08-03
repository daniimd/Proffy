import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem () {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/36265891?s=460&u=eca8a07b085c572e93ca9acf4d3ba48a306cb71f&v=4" alt=""/>
            <div>
                <strong>Daniela</strong>
                <span>Matemática</span>
            </div>
        </header>

        <p>
        What is Lorem Ipsum?
        <br/> <br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ 100,00</strong>
            </p>
            <button type='button'>
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;