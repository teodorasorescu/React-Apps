import React from 'react';
import '../styling/ps.module.scss';
import sunflowers from '../vanGogh/sunflowers.jpg';
import ArtPiece from './artPiece';
import art1 from '../vanGogh/art1.jpg';
import autoportret from '../vanGogh/autoportret.jpg';
import art2 from '../vanGogh/art2.jpg';
import art3 from '../vanGogh/art3.jpg';
import art4 from '../vanGogh/art4.jpg';
import art5 from '../vanGogh/art5.jpg';
import art6 from '../vanGogh/art6.JPG';
import art7 from '../vanGogh/art7.jpg';
import art8 from '../vanGogh/art8.jpg';
import art9 from '../vanGogh/art9.jpeg';
import art10 from '../vanGogh/art10.jpg';


class vanGogh extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        galery: [
          { name: 'Sunflowers (F.458), August 1889', location: 'Van Gogh Museum, Amsterdam', src: sunflowers },
          { name: 'Wheatfield with Crows, 1890', location: 'Van Gogh Museum, Amsterdam', src: art1 },
          { name: 'Self-Portrait, oil on board, 1887', location: 'Cultural Institute', src: autoportret },
          { name: 'The Potato Eaters, 1885.', location: 'Van Gogh Museum, Amsterdam', src: art2 },
          { name: 'Skull of a Skeleton with Burning Cigarette, 1885–86', location: 'Van Gogh Museum, Amsterdam', src: art3 },
          { name: 'Still Life with Bible, 1885', location: 'Van Gogh Museum, Amsterdam', src: art4 },
          { name: 'Courtesan (after Eisen), 1887', location: 'Van Gogh Museum, Amsterdam', src: art5 },
          { name: 'The Sower with Setting Sun, 1888', location: 'Van Gogh Museum, Amsterdam', src: art7 },
          { name: 'Portrait of Père Tanguy, 1887', location: 'Musée Rodin, Paris', src: art6 },
          { name: 'Bedroom in Arles, 1888', location: 'Van Gogh Museum, Amsterdam', src: art8},
          { name: 'The Night Café, 1888', location: 'Yale University Art Gallery, New Haven, Connecticut', src: art9},
          { name: 'The Starry Night, June 1889', location: 'Museum of Modern Art, New York', src: art10},
        ]
      };
    }
    render() {
        const { galery } = this.state;
        return (
          <div className='container'>
            <h1>Vincent van Gogh</h1>
            <h2>"I feel that there is nothing more truly artistic than to love people."</h2>
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

export default vanGogh;