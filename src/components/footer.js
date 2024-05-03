import React from 'react';
import Sesi from '../assets/SESI.png'

function Footer() {
  return (
    
    <footer>

        <div className='footer'>
            
        <p>2024 Todos os direitos reservados ao povo do 3º/Informática para Internet</p>
        <p>Contato: osmelhores@sesisenai.com</p>

        <div className='Sesi'>
            <img src={Sesi} alt="Descrição da imagem" width={100}/>
        </div>

        </div>
        
        

    </footer>

  );
}

export default Footer;