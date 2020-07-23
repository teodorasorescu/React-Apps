import React from 'react';
import '../styling/ps.module.scss';
import ArtPiece from './artPiece';
import art1 from '../donatello/art1.jpg';
import art2 from '../donatello/art2.jpg';
import art3 from '../donatello/art3.jpg';
import art4 from '../donatello/art4.jpg';
import art5 from '../donatello/art5.jpeg';
import art6 from '../donatello/art6.JPG';
import art7 from '../donatello/art7.jpg';
import art8 from '../donatello/art8.jpg';

class Monet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        galery: [
          { name: `Statue of St. John the Baptist in the Duomo di Siena`, location: '', src: art5 },
          { name: '1409–1411, the colossal seated figure of Saint John the Evangelist.', location: '', src: art2 },
          { name: 'David head and shoulders front right', location: '', src: art3 },
          { name: 'David', location: 'Bargello, Florence', src: art4 },
          { name: 'Bust of Niccolo da Uzzano', location: 'Museo Nazionale del Bargello, Florence, Italy.', src: art1},
          { name: `Donatello's equestrian statue of Gattamelata`, location: 'Padua', src: art7 },
          { name: 'Magdalene Penitent (c. 1455) ', location: `Museo dell'Opera del Duomo, Florence.`, src: art6 },
          { name: 'Statue of St. George', location: 'Orsanmichele, Florence', src: art8},
        ]
      };
    }
    render() {
        const { galery } = this.state;
        return (
          <div className='container'>
            <h1>“Donato di Niccolò di Betto Bardi ”</h1>
            <div className='galery'>
              {galery.length > 0 &&
                galery.map((artPiece, index) => (
                  <ArtPiece key={index} name={artPiece.name} location = { artPiece.location} image={artPiece.src} />
                ))}
            </div>
          </div>
        );
      }
};

export default Monet;