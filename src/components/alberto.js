import React from 'react';
import '../styling/ps.module.scss';
import ArtPiece from './artPiece';
import art1 from '../alberto/art1.jpg';
import art2 from '../alberto/art2.jpg';
import art3 from '../alberto/art3.jpg';
import art4 from '../alberto/art4.jpg';
import art5 from '../alberto/art5.jpg';
import art6 from '../alberto/art6.jpg';

class Monet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        galery: [
          { name: `Cat, 1954`, location: `Metropolitan Museum of Art`, src: art1 },
          { name: `L'Homme au doigt, 1947`, location: 'Museum of Fine Arts, Boston', src: art2 },
          { name: 'Standing Women', location: '1956,  Mart, Museo di arte moderna e contemporanea di Trento e Rovereto', src: art3 },
          { name: 'Gazing Head, 1928-1929', location: ' Österreichische Galerie Belvedere, Vienna', src: art4 },
          { name: 'The Palace at 4 A.M., 1932', location: 'The Museum of Modern Art', src: art5 },
          { name: 'Der Blinde (The Blind Man) 1896', location: 'Leopold Museum', src: art6 },
          
        ]
      };
    }
    render() {
        const { galery } = this.state;
        return (
          <div className='container'>
            <h1>“Alberto Giacometti”</h1>
            <h2>When you look at art made by other people, you see what you need to see in it.</h2>
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