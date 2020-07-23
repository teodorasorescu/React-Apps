import React from 'react';
import '../styling/ps.module.scss';
import ArtPiece from './artPiece';
import art1 from '../rodin/art1.jpg';
import art2 from '../rodin/art2.jpg';
import art3 from '../rodin/art3.jpg';
import art4 from '../rodin/art4.jpg';
import art5 from '../rodin/art5.jpg';
import art6 from '../rodin/art6.jpg';
import art8 from '../rodin/art8.jpg';
import art9 from '../rodin/art9.jpg';
import art10 from '../rodin/art10.jpg';


class Monet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        galery: [
          { name: `The Gates of Hell (unfinished)`, location: `Kunsthaus Zürich`, src: art1 },
          { name: 'The Age of Bronze (1877).', location: '', src: art2 },
          { name: 'St. John the Baptist Preaching (1878).', location: '', src: art3 },
          { name: `Rodin's The Thinker (1879–1889) is among the most recognized works in all of sculpture.`, location: '', src: art4 },
          { name: 'The Burghers of Calais (1884–ca. 1889)', location: 'Victoria Tower Gardens, London, England.', src: art5 },
          { name: 'Cast of Balzac (1891–1898)', location: 'Jardin du Musée Rodin', src: art6 },
          { name: 'The Shade, (1880–81)', location: 'High Museum of Art, Atlanta', src: art8},
          { name: 'The Kiss, 1889', location: '', src: art9},
          { name: `Rodin's gravesite at the Musée Rodin de Meudon`, location: '', src: art10},
        ]
      };
    }
    render() {
        const { galery } = this.state;
        return (
          <div className='container'>
            <h1>Auguste Rodin</h1>
            <h2>“Art is contemplation. It is the pleasure of the mind which searches
                 into nature and which there divines the spirit of which nature herself is animated.”</h2>
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