import React, { Component } from 'react'; 
import styles from './Portfolio.css';
import Tile from '../../components/Tile/Tile';

const WORKTYPE_UX = 'UX';
const WORKTYPE_GRAPHICS = 'Graphics';

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
            <section className={styles.Portfolio} id="Portfolio">
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