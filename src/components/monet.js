import React from 'react';
import '../styling/ps.module.scss';
import ArtPiece from './artPiece';
import art1 from '../monet/art1.jpg';
import art2 from '../monet/art2.jpg';
import art3 from '../monet/art3.jpg';
import art4 from '../monet/art4.jpg';
import art5 from '../monet/art5.jpg';
import art6 from '../monet/art6.JPG';
import art7 from '../monet/art7.jpg';
import art8 from '../monet/art8.jpg';
import art9 from '../monet/art9.jpg';
import art10 from '../monet/art10.jpg';


class Monet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        galery: [
          { name: `Le déjeuner sur l'herbe (right section), 1865–1866`, location: `Musée d'Orsay, Paris`, src: art1 },
          { name: ' Madame Monet in a Japanese kimono, 1876', location: 'Museum of Fine Arts, Boston', src: art2 },
          { name: 'Impression, Sunrise (Impression, soleil levant), 1872', location: ' Musée Marmottan Monet, Paris', src: art3 },
          { name: 'Woman in the Garden, 1867, Hermitage, St. Petersburg', location: '', src: art4 },
          { name: 'Flowers on the riverbank at Argenteuil, 1877', location: 'Pola Museum of Art, Japan', src: art5 },
          { name: 'Water Lilies and the Japanese bridge, 1897–1899', location: 'Princeton University Art Museum', src: art7 },
          { name: 'Flowering Arches, Giverny, 1913', location: 'Phoenix Art Museum', src: art6 },
          { name: 'Houses on the Achterzaan, 1871', location: 'Metropolitan Museum of Art, New York', src: art8},
          { name: 'Water Lilies, 1906', location: 'Art Institute of Chicago', src: art9},
          { name: 'Le port de Trouville (Breakwater at Trouville, Low Tide), 1870', location: 'Museum of Fine Arts, Budapest.', src: art10},
        ]
      };
    }
    render() {
        const { galery } = this.state;
        return (
          <div className='container'>
            <h1>Claude Monet</h1>
            <h2>"Everyone discusses my art and pretends to understand, 
              as if it were necessary to understand, when it is simply necessary to love."</h2>
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