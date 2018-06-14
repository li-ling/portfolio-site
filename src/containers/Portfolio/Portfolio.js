import React, { Component } from 'react'; 
import styles from './Portfolio.css';
import Tile from '../../components/Tile/Tile';

const WORKTYPE_UX = 'UX';
const WORKTYPE_GRAPHICS = 'Graphics';
const workTypes = [WORKTYPE_UX,WORKTYPE_GRAPHICS];
class Portfolio extends Component {
    state = {
        UXWorks: [
            { title: 'Title 1', 
              subTitle: 'Product Design Concept from Coursera Course work',
              thumbUrl: "http://via.placeholder.com/300x300"
            },
            { title: 'Title 2', 
              subTitle: 'Information Architectur Design Personal Concept',
              thumbUrl: "http://via.placeholder.com/300x300"
            },
            { title: 'Title 3', 
              subTitle: 'Product Design Concept from Coursera Course work',
              thumbUrl: "http://via.placeholder.com/300x300"
            }
        ],
        GraphicsWorks: [
            { title: 'Creative Confidence', 
              subTitle: 'Book cover design from course work',
              thumbUrl: "http://via.placeholder.com/300x300"
            },
            { title: 'How To Get Kids to Eat Their Vegetables and Fruit ', 
              subTitle: 'Poster sized visual instruction design from course work',
              thumbUrl: "http://via.placeholder.com/300x300"
            },
            { title: 'Fashionable Me', 
              subTitle: 'Fashion infographic design from course work',
              thumbUrl: "http://via.placeholder.com/300x300"
            },
            { title: 'Evolution of IT', 
              subTitle: 'Visual Storytelling design',
              thumbUrl: "http://via.placeholder.com/300x300"
            },
            { title: 'Destinations Magzine', 
              subTitle: '10-page Layout design from course work',
              thumbUrl: "http://via.placeholder.com/300x300"
            },
            { title: 'Self Portrait', 
              subTitle: 'A self portrait illustration from course work',
              thumbUrl: "http://via.placeholder.com/300x300"
            }
        ],
        selectedFilter: WORKTYPE_UX
    }

    render() {
        const Tiles = this.state.selectedFilter === WORKTYPE_UX ? this.state.UXWorks : this.state.GraphicsWorks;
        
   return (        
    <section className={styles.Portfolio}>
        <h1>Portfolio</h1>
        <ul>
            { workTypes.map((f, i)=> 
                <li key={i}>{f}</li> 
            ) }
        </ul>
        <div className={styles.Tiles}>
            {Tiles.map((w,i) => 
                <Tile key={i} 
                    title = {w.title}
                    subTitle = {w.subTitle}
                    thumbUrl = {w.thumbUrl}
                />                             
                ) }
        </div>
    </section>
   );
}

}

export default Portfolio;