import { useState } from 'react'
import Header from './components/Header.jsx';
import './Productos.css'
import CircularGallery from './components/CircularGallery.jsx'
import galloPinto from './assets/productos/gallo-pinto.jpg'
import chifrijo from './assets/productos/chifrijo.webp'
import sandwich from './assets/productos/sandwich.jpg'
import pieLimon from './assets/productos/pie-limon.jpg'
import jugoSandia from './assets/productos/jugo-sandia.jpg'


function App() {
  const misProductos = [
  { image: galloPinto, text: 'Desayunos' },
  { image: chifrijo, text: 'Almuerzos' },
  { image: sandwich, text: 'Sandwiches' },
  { image: pieLimon, text: 'Postres' },
  { image: jugoSandia, text: 'Jugos naturales' },
];

  return (
    <>
      <section className='info-productos'>
        <h1>Productos - Soda Armonía</h1>
          <p>
            En la Soda Armonía, ofrecemos diversas opciones de comida, y cada una de nuestras categorías ha sido pensada para ofrecerte un equilibrio perfecto entre tradición y salud:
          </p>
          
          <ul>
            <li><strong>Sandwiches:</strong> Preparados con pan artesanal y rellenos de ingredientes frescos, son la opción ideal para un almuerzo ligero, nutritivo y lleno de sabor.</li>
            <li><strong>Postres:</strong> El toque dulce que tu día merece. Elaborados con dedicación, nuestros postres combinan texturas suaves y sabores naturales que te harán sentir como en casa.</li>
            <li><strong>Jugos Naturales:</strong> El frescor directo de la tierra. Nuestros jugos son procesados al momento, utilizando frutas de temporada para garantizarte la máxima pureza y energía en cada vaso.</li>
            <li><strong>Desayunos:</strong> Empezar bien el día es fundamental. Nuestros desayunos típicos y balanceados están diseñados para darte el impulso necesario con el auténtico sazón de nuestra comunidad.</li>
            <li><strong>Almuerzos:</strong> Platos completos y nutritivos, inspirados en la cocina local, donde los vegetales frescos y la calidad de los ingredientes son siempre los protagonistas.</li>
          </ul>
      </section>
      
      <section className='productos'>
      {/* Contenedor para la galería */}
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery 
          items={misProductos} 
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.07}
          scrollSpeed={2}
        />
      </div>
      </section>
    
      <section className='direccion'>

      <div className='sobre-nosotros'>
        <h2>Sobre nosotros</h2>
        <p>En el departamento de Soda Armonía, nos enorgullece ofrecer alimentos saludables y de calidad que nutren y cuidan a nuestra comunidad. Nuestro enfoque se centra en productos que no solo son deliciosos, sino que también contribuyen a un estilo de vida equilibrado y consciente.
        Creemos firmemente que la salud comienza con la alimentación; por eso, seleccionamos los mejores ingredientes, priorizando siempre los productos frescos y locales.
        🌱🍽️ ¡Te invitamos a descubrir nuestras opciones deliciosas y saludables! En Soda Armonía, cada plato es creado con amor y dedicación, porque estamos convencidos de que una buena comida puede transformar el día de las personas. 🌿✨</p>
        <h2>Contacto</h2>
        <p>Teléfono:</p>
        <p>Facebook: https://www.facebook.com/ArmoniaAgriculturaOrganica/mentions/</p>
        <p>Horario: <strong> Lunes a Sábado 6:30 a.m. - 3:30 p.m. </strong></p>
      </div>

        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.59192674147494!2d-84.17472599201209!3d9.977910742171629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb006d4fa4a5%3A0xbe651073ad3f1863!2sSoda%20Armon%C3%ADa!5e0!3m2!1ses-419!2scr!4v1773407779072!5m2!1ses-419!2scr"
          width="100%"   
          height="500" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  )
}

export default App
