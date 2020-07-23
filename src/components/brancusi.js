import React from 'react';
import '../styling/ps.module.scss';
import ArtPiece from './artPiece';
import art1 from '../brancusi/art1.jpeg';
import art2 from '../brancusi/art2.jpg';
import art3 from '../brancusi/art3.jpg';
import art4 from '../brancusi/art4.jpg';
import art5 from '../brancusi/art5.jpg';
import art6 from '../brancusi/art6.jpeg';
import art7 from '../brancusi/art7.png';
import art8 from '../brancusi/art8.jpg';



class Monet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        galery: [
          { name: `Brâncuși's Paris studio, 1920, photograph by Edward Steichen`, location: ``, src: art1 },
          { name: '1907-08, The Kiss.', location: 'Exhibited in 1913 at the Armory Show and published in the Chicago Tribune, 25 March 1913', src: art2 },
          { name: 'Portrait of Mademoiselle Pogany [1], 1912', location: ' Philadelphia Museum of Art, Philadelphia.', src: art3 },
          { name: 'Bird in Space, 1928', location: '', src: art4 },
          { name: '', location: '', src: art6},
          { name: 'Sleeping muse, 1910', location: '', src: art7 },
          { name: '', location: `Constantin Brancusi's Atelier in Paris`, src: art5 },
          { name: 'Infinity Column', location: 'Targu Jiu, Romania', src: art8},
        ]
      };
    }
    render() {
        const { galery } = this.state;
        return (
          <div className='container'>
            <h1>“Constantin Brâncuși”</h1>
            <h2>“I want just the flash of its spirit.”</h2>
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