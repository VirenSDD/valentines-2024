import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './Timeline'; // Adjust the path based on your project structure
import './index.css'; // Add your own global styles if needed

const events = [
  { date: '29 Abril 2023', title: 'Primera conversación', description: 'Viren estuvo 1 hora pensando qué responder a una historia de Carla. Menos mal que después subió otra de La La Land...' },
  { date: '18 Mayo 2023', title: 'Números de teléfono', description: 'Viren le pidió el número de teléfono a Carla. Seguro que enumerar las ventajas de usar WhatsApp frente a Instagram la convenció para dárselo.' },
  { date: '5 Junio 2023', title: 'Primera cita', description: 'Carla le pidió a Viren una cita. Comieron en un restaurante indio, dieron un paseo por el centro y el Turia, fue increíble. Por desgracia, Viren fue tonto y no acabó muy bien...' },
  { date: '7 Junio 2023', title: 'Primer beso', description: 'A pesar de todo, Carla y Viren volvieron a quedar a solas después de hablar. Carla se compró algo para merendar y Viren una Coca-Cola Zero y se sentaron en un banco. Ya se pueden imaginar lo que pasó después...' },
  { date: '13 Septiembre 2023', title: 'Tenerife', description: 'Primer viaje de Carla a Tenerife. Este viaje fue increíblemente especial y pasaron muchísimas cosas, empezando por tomar un café en Santa Cruz. Las fiestas en La Laguna (el parque de la Constitución), el norte (Orotava, Puerto, Garachico), el guachinche, el sur (Candelaria, Caletillas, El Médano, acantilado de Las Américas), el Teide, Anaga, La Punta, El Sauzal, el Gato Goloso, Como en Casa...' },
  { date: '21 Septiembre 2023', title: 'Empezaron a salir', description: 'Viren la había liado (de nuevo) y estaba perdidamente enamorado de Carla. Necesitaba pedirle salir de una manera especial, por lo que encargó un ramo de flores y le hizo una página web a Carla, que consistía en un cuestionario. La última pregunta era "¿Quieres salir conmigo?".' },
  { date: '5 Octubre 2023', title: 'Patraix', description: 'Viren se iba a la India durante un mes, y no podía irse sin antes ver a Carla. Alquilaron un Airbnb en Patraix e hicieron muchos planes especiales, aunque Viren tuviera que trabajar los dos primeros días. Viren conoció a las hermanas de Carla en persona (Belén y Candela). También hubo cena con los compañeros de uni de Carla, paseo por el centro, exposición de Pixar en el Museo de las Ciencias, horchata y fartón en Orxata Daniel, Port Saplaya, William...' },
  { date: '16 Octubre 2023', title: 'Te quiero...', description: 'Viren comienza su viaje a Dubai y la India, pero tiene que quedarse una noche en Madrid. Carla y Viren hablan por videollamada, y al despedirse a Viren le sale de manera natural un "te quiero" y Carla responde instintivamente "yo también". Es la primera vez que se lo dicen.' },
  { date: '29 Noviembre 2023', title: 'Madrid', description: 'Carla y Viren quedan en Madrid para estar juntos en el comienzo de las Navidades. Hicieron planes más sencillos, pero igualmente especiales para ambos: ver una película juntos en casa (o intentarlo, porque Carla se dormía siempre), ir al cine, pasear por el centro de Madrid, ir a un espectáculo de luces, museos (Casa de Sorolla, El Prado), cocinar juntos...' },
  { date: '5 Enero 2024', title: 'Reyes', description: 'Reyes Carla visitó Tenerife otra vez. Hicieron planes más familiares y Carla tuvo la suerte (o desgracia) de conocer a la familia y amigos de Viren. Además, Carla siguió explorando la maravillosa isla de Tenerife, con planes como un brunch con vistas al Teide, el Socorro, ver las estrellas, playa en Güímar...' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Línea temporal Carla y Viren</h1>
      <Timeline events={events} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
