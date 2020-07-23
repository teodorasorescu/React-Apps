import React from 'react';
import '../styling/ps.module.scss';
import ArtPiece from './artPiece';
import art1 from '../daVinci/art1.jpg';
import art2 from '../daVinci/art2.jpg';
import art3 from '../daVinci/art3.jpg';
import art4 from '../daVinci/art4.jpg';
import art5 from '../daVinci/art5.jpg';
import art6 from '../daVinci/art6.jpg';
import art7 from '../daVinci/art7.jpg';
import art8 from '../daVinci/art8.jpg';
import art9 from '../daVinci/art9.jpg';

class Monet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        galery: [
          { name: `Benois Madonna, c. 1478–1481`, location: ``, src: art8},
          { name: 'The Portinari Altarpiece (c. 1475)', location: 'Hugo van der Goes', src: art2 },
          { name: 'Lady with an Ermine, c. 1489–1491', location: 'Czartoryski Museum, Kraków, Poland', src: art3 },
          { name: 'Mona Lisa or La Gioconda c. 1503–1516', location: 'Louvre, Paris.', src: art4 },
          { name: 'Francis I of France receiving the last breath of Leonardo da Vinci, by Ingres', location: '1818', src: art5 },
          { name: 'Saint John the Baptist c. 1507–1516', location: 'Louvre, Paris', src: art7 },
          { name: 'Unfinished painting of Saint Jerome in the Wilderness c. 1480–1490', location: 'Vatican', src: art6 },
          { name: `Leonardo's Virgin of the Rocks, c. 1483–1493`, location: 'Louvre version', src: art1},
          { name: 'The Baptism of Christ (1472–1475) by Verrocchio and Leonardo', location: 'Uffizi Gallery', src: art9},
        ]
      };
    }
    render() {
        const { galery } = this.state;
        return (
          <div className='container'>
            <h1>Leonardo da Vinci</h1>
            <h2>"Why does the eye see a thing more clearly in dreams than the imagination when awake?"</h2>
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