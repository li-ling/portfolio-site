import React, { Component } from 'react'; 
import styles from './Portfolio.css';
import Tile from '../../components/Tile/Tile';

import bookCover from '../../assets/images/Book_cover_thumb_300.jpg';
import howTo from '../../assets/images/how_to_thumb_300.jpg';
import fashion from '../../assets/images/Fashion_Info_thumb_300.jpg';
import selfPortrait from '../../assets/images/self_portrait_thumb_300.jpg';
import magzine from '../../assets/images/magzine_thumb_300.jpg';
import itEvolution from '../../assets/images/IT_Evolution_thumb_300.png';

const WORKTYPE_UX = 'UX';
const WORKTYPE_GRAPHICS = 'Graphics';

class Portfolio extends Component {
    state = {
        UXWorks: [
            { title: 'Title 1', 
              subTitle: 'Product Design Concept from course work',
              thumbUrl: "http://via.placeholder.com/300x300"
            },
            { title: 'Title 2', 
              subTitle: 'Information Architecture Design Personal Concept',
              thumbUrl: "http://via.placeholder.com/300x300"
            },
            { title: 'Title 3', 
              subTitle: 'Product Design Concept from course work',
              thumbUrl: "http://via.placeholder.com/300x300"
            }
        ],
        GraphicsWorks: [
            { title: 'Creative Confidence', 
              subTitle: 'Book covers design from course work',
              thumbUrl: bookCover
            },
            { title: 'How To Get Kids to Eat Their Vegetables and Fruit ', 
              subTitle: 'Poster-sized visual instruction illustrations from course work',
              thumbUrl: howTo
            },
            { title: 'Evolution of IT', 
              subTitle: 'Visual Storytelling design',
              thumbUrl: itEvolution
            },
            { title: 'Fashionable Me', 
              subTitle: 'Personal fashion style and fashion infographic design from course work',
              thumbUrl: fashion
            },            
            { title: 'Destinations Magzine', 
              subTitle: '10-page magzine covers and layout design from course work',
              thumbUrl: magzine
            },
            { title: 'Self Portrait', 
              subTitle: 'A self portrait illustration from course work',
              thumbUrl: selfPortrait
            }
        ],
        workTypes: [{ type: WORKTYPE_UX, isSelected: true},
                    { type:WORKTYPE_GRAPHICS, isSelected: false}
                ]
    }

    onWorkTypeChange = (event, selected) => {
        const updatedWorkTypes =  [{ type: WORKTYPE_UX, isSelected: selected.type === WORKTYPE_UX},
                             { type:WORKTYPE_GRAPHICS, isSelected: selected.type === WORKTYPE_GRAPHICS}
                            ];
        this.setState({workTypes: updatedWorkTypes});
    }

    render() {
        const selectedWorkType = this.state.workTypes.filter(w => w.isSelected);
        const Tiles = selectedWorkType[0].type === WORKTYPE_UX ? this.state.UXWorks : this.state.GraphicsWorks;                

        return (        
            <section className={styles.Portfolio} id="portfolio">
                <h1>Portfolio</h1>
                <ul>
                    { this.state.workTypes.map((w, i)=> 
                        <li key={w.type}
                            onClick={(e) => this.onWorkTypeChange(e, w)}
                            className={ w.isSelected ? styles.SelectedWorkType : null  }                          
                        >{w.type}</li> 
                    ) }
                </ul>
                <div className={styles.Tiles}>
                    {Tiles.map((t,i) => 
                        <Tile key={i} 
                            title = {t.title}
                            subTitle = {t.subTitle}
                            thumbUrl = {t.thumbUrl}
                        />                             
                        ) }
                </div>
            </section>
        );
    }

}

export default Portfolio;