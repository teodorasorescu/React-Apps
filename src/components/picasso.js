import React from 'react';
import '../styling/ps.module.scss';
import ArtPiece from './artPiece';
import art1 from '../picasso/art1.jpg';
import art2 from '../picasso/art2.jpg';
import art3 from '../picasso/art3.jpg';
import art4 from '../picasso/art4.jpg';
import art5 from '../picasso/art5.jpg';
import art6 from '../picasso/art6.jpg';
import art7 from '../picasso/art7.jpg';
import art8 from '../picasso/art8.jpg';
import art9 from '../picasso/art9.jpg';
import art10 from '../picasso/art10.jpg';


class Monet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        galery: [
          { name: `The Old Guitarist (1903)`, location: `Chicago Art Institute`, src: art1 },
          { name: `Les Demoiselles d'Avignon (1907)`, location: 'Museum of Modern Art, New York', src: art2 },
          { name: '1910, Girl with a Mandolin (Fanny Tellier), oil on canvas', location: 'Museum of Modern Art, New York', src: art3 },
          { name: '1913, Bouteille, clarinet, violon, journal, verre,', location: 'This painting from the collection of Wilhelm Uhde was confiscated by the French state and sold at the Hôtel Drouot in 1921', src: art4 },
          { name: `1913–14, L'Homme aux cartes (Card Player)`, location: 'Museum of Modern Art, New York', src: art5 },
          { name: `Portrait d'Olga dans un fauteuil (Olga in an Armchair), 1918`, location: 'Musée Picasso, Paris, France', src: art7 },
          { name: '1914–15, Nature morte au compotier (Still Life with Compote and Glass)', location: 'Columbus Museum of Art, Ohio', src: art6 },
          { name: 'Pablo Picasso, 1918, Pierrot', location: 'Metropolitan Museum of Art, New York', src: art8},
          { name: '1901, Old Woman (Woman with Gloves)', location: 'Philadelphia Museum of Art', src: art9},
          { name: '1905, Garçon à la pipe,', location: 'private collection, Rose Period', src: art10},
        ]
      };
    }
    render() {
        const { galery } = this.state;
        return (
          <div className='container'>
            <h1>Pablo Picasso</h1>
            <h2>"Art washes away from the soul the dust of everyday life."</h2>
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