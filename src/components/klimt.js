import React from 'react';
import '../styling/ps.module.scss';
import ArtPiece from './artPiece';
import art1 from '../klimt/art1.jpg';
import art2 from '../klimt/art2.jpg';
import art3 from '../klimt/art3.jpg';
import art4 from '../klimt/art4.jpg';
import art5 from '../klimt/art5.jpg';
import art6 from '../klimt/art6.jpg';
import art7 from '../klimt/art7.jpg';
import art8 from '../klimt/art8.jpeg';
import art9 from '../klimt/art9.jpg';
import art10 from '../klimt/art10.jpg';


class Monet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        galery: [
          { name: `Farm Garden with Sunflowers, 1907`, location: `Österreichische Galerie Belvedere`, src: art1 },
          { name: ' Madame Monet in a Japanese kimono, 1876', location: 'Museum of Fine Arts, Boston', src: art2 },
          { name: 'IA section of the Beethoven Frieze', location: 'Secession Building, Vienna (1902)', src: art3 },
          { name: 'The Kiss 1907–08', location: ' Österreichische Galerie Belvedere, Vienna', src: art4 },
          { name: 'Adele Bloch-Bauer I (1907), which sold for a record $135 million in 2006', location: 'Neue Galerie, New York', src: art5 },
          { name: 'Water Lilies and the Japanese bridge, 1897–1899', location: 'Destroyed 1945', src: art7 },
          { name: 'Der Blinde (The Blind Man) 1896', location: 'Leopold Museum', src: art6 },
          { name: '\Sonja Knips', location: '', src: art8},
          { name: 'Jurisprudence 1899–1907', location: 'Destroyed 1945', src: art9},
          { name: 'Le port de Trouville (Breakwater at Trouville, Low Tide), 1870', location: 'Museum of Fine Arts, Budapest.', src: art10},
        ]
      };
    }
    render() {
        const { galery } = this.state;
        return (
          <div className='container'>
            <h1>Gustav Klimt</h1>
            <h2>“All art is erotic.”</h2>
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