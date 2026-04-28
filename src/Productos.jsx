import { useState } from 'react'
import Header from './components/Header.jsx';
import './Productos.css'
import CircularGallery from './components/CircularGallery.jsx'
import galloPinto from './assets/productos/gallo-pinto.jpg'
import chifrijo from './assets/productos/chifrijo.webp'
import sandwich from './assets/productos/sandwich.jpg'
import pieLimon from './assets/productos/pie-limon.jpg'
import jugoSandia from './assets/productos/jugo-sandia.jpg'
import bancas1 from './assets/servicios/bancas.jpg'
import bancas2 from './assets/servicios/bancas_atras.jpg'
import yard from './assets/servicios/yard.jpg'
import parking from './assets/servicios/parking.jpg'


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

      <br /><br /><br />

      <section className="servicios_1">
          <h2 className='info_h2'>¡Por otra parte, Armonía cuenta con otros servicios!</h2>
          <p className="info_servicios_1">
            Durante el año 2022, debido a un tornado que pasó por Belén, 
            se produjo una serie de devastaciones en toda la zona. Sin 
            embargo, Armonía logró enfrentar esta situación de manera 
            excelente; es por eso que inició la construcción de diversas 
            infraestructuras para que las personas pudieran acceder a 
            ellas. Con el paso del tiempo, este proyecto evolucionó hasta 
            convertirse en lo que hoy en día se conoce como “Soda Armonía”.
          </p>
      </section>

      <br />

      <section className='servicios_2'>
        <div className='servicios_2gen'>
          <div className='servicios2espe'>
            <h3>Zona de Descanso Principal</h3>
            <p>Disfrutá de un espacio cómodo y tranquilo al aire libre, 
              ideal para relajarte, compartir con otras personas y disfrutar tus comidas en un ambiente natural y agradable.</p>
              <div className='grupoFotos'>
                <img className='fotos' src={bancas1} alt="Bancas" />
              </div>
          </div>
          <div className='servicios2espe'>
            <h3>Zona de Descanso junto a la Cancha</h3>
            <p>Contás con áreas ubicadas cerca de la cancha donde podés 
              sentarte a descansar, conversar o simplemente disfrutar del entorno mientras observás los partidos.</p>
              <div className='grupoFotos'>
                <img className='fotos'src={bancas2}  alt="Bancas por la cancha" />
              </div>
          </div>
          <div className='servicios2espe'>
            <h3>Ian es muy gay</h3>
            <p>Aprovechá un espacio amplio y adecuado para jugar distintos 
              partidos, ejercitarte y compartir momentos divertidos con tus amigos en un ambiente seguro.</p>
              <div className='grupoFotos'>
                <img className='fotos' src={yard}  alt="Cancha" />
              </div>
          </div>
          <div className='servicios2espe'>
            <h3>Parqueo Exclusivo</h3>
            <p>Parqueo exclusivo diseñado para brindarte mayor comodidad, fácil acceso y seguridad para tu vehículo 
              durante toda tu visita, permitiéndote disfrutar del lugar con total 
              tranquilidad.</p>
              <div className='grupoFotos'>
                <img className='fotos' src={parking}  alt="Parqueo" />
              </div> 
          </div>
        </div>
      </section>
    </>
  )
}

export default App