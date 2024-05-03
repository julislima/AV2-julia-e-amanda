import React from 'react';
import Foto1 from '../assets/FOTO3.jpg'
import Foto2 from '../assets/FOTO6.jpg'
import Foto3 from '../assets/FOTO7.jpg'
import Foto4 from '../assets/FOTO5.jpg'
import Foto5 from '../assets/FOTO4.jpg'
import Foto6 from '../assets/HOME.jpg'

function Home() {
  return (
    
    <section className='body'>

        <h1>Bem-vindo à página inicial da nossa AV2</h1>
        <h4>Conheça os melhores cosplays do SESI/SENAI.</h4>

        <div className='fotos'>

            <div>
                <img src={Foto1}  alt="Descrição da imagem" />
                <p>Povo da Turma da Mônica</p>
            </div>

            <div>
                <img src={Foto2} alt="Descrição da imagem" />
                <p>Foveiras e o Teacher TOP!!!!</p>
            </div>

            <div>
                <img src={Foto3} alt="Descrição da imagem" />
                <p>As Operadoras TIM e Claro + Flanelinha</p>
            </div>

            <div>
                <img src={Foto4} alt="Descrição da imagem" />
                <p>Tigrinho Man</p>
            </div>

            <div>
                <img src={Foto5} alt="Descrição da imagem" />
                <p>Dollynho e não sei as outras duas</p>
            </div>

            <div>
                <img src={Foto6} alt="Descrição da imagem" />
                <p>A turma mais F$#% do SESI/SENAI</p>
            </div>

        </div>

    </section>
    

  );
}

export default Home;
