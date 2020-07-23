import React from 'react';
import '../styling/ps.module.scss';
import ArtPiece from './artPiece';
import art1 from '../michelangelo/art1.jpg';
import art2 from '../michelangelo/art2.JPG';
import art3 from '../michelangelo/art3.jpg';
import art4 from '../michelangelo/art4.jpg';
import art5 from '../michelangelo/art5.jpg';
import art6 from '../michelangelo/art6.jpg';

class Monet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        galery: [
          { name: `Pietà, St Peter's Basilica (1498–99)`, location: ``, src: art1 },
          { name: 'Angel by Michelangelo, early work (1494–95)', location: '', src: art2 },
          { name: 'Bacchus by Michelangelo, early work (1496–1497)', location: '', src: art3 },
          { name: 'The Creation of Adam (1510)', location: '', src: art4 },
          { name: 'Self-portrait of the artist as Nicodemus', location: '', src: art5 },
          { name: 'David, 1501-1504 ', location: '', src: art6 },
        ]
      };
    }
    render() {
        const { galery } = this.state;
        return (
          <div className='container'>
            <h1>Michelangelo Buonarroti</h1>
            <h2>“I saw the angel in the marble and carved until I set him free.”</h2>
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