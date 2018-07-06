import React, { Component, Fragment } from 'react'; 
import { withRouter } from "react-router-dom";
import styles from './Portfolio.css';
import Tile from '../../components/Tile/Tile';
import ScrollIntoView from '../../hoc/ScrollIntoView/ScrollIntoView';
import Gallery from '../../components/Gallery/Gallery';

// import bookCover from '../../assets/images/Book_cover_thumb_300.jpg';
import howTo from '../../assets/images/how_to_thumb_300.jpg';
import fashion from '../../assets/images/Fashion_Info_thumb_300.jpg';
import selfPortrait from '../../assets/images/self_portrait_thumb_300.jpg';
import magzine from '../../assets/images/magzine_thumb_300.jpg';
import itEvolution from '../../assets/images/IT_Evolution_thumb_300.png';


const WORKTYPE_UX = 'UX';
const WORKTYPE_GRAPHICS = 'Graphics';
const images = require.context('../../assets/images', true);
const bookCover = images('./Book_cover_thumb_300.jpg');
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
              thumbUrl: magzine,
              galleryPics: [
                  "../../assets/images/gallery/dest_1.jpg",
                  "../../assets/images/gallery/dest_2.jpg",
                  "../../assets/images/gallery/dest_3.jpg"
              ]
            },
            { title: 'Self Portrait', 
              subTitle: 'A self portrait illustration from course work',
              thumbUrl: selfPortrait
            }
        ],
        workTypes: [{ type: WORKTYPE_UX, isSelected: true},
                    { type:WORKTYPE_GRAPHICS, isSelected: false}
                ],
        showGallery: false,
        selectedWork: null
    }

    onWorkTypeChange = (event, selected) => {
        const updatedWorkTypes =  [{ type: WORKTYPE_UX, isSelected: selected.type === WORKTYPE_UX},
                             { type:WORKTYPE_GRAPHICS, isSelected: selected.type === WORKTYPE_GRAPHICS}
                            ];
        this.setState({workTypes: updatedWorkTypes});
    }

    onCloseWindowHandler = () => {
        this.setState({showGallery: false})
    }
    
    onTileClick = (tile) => {
        this.setState({showGallery: true, selectedWork: tile})
    }

    render() {
        const selectedWorkType = this.state.workTypes.filter(w => w.isSelected);
        const Tiles = selectedWorkType[0].type === WORKTYPE_UX ? this.state.UXWorks : this.state.GraphicsWorks;                

        return (
         <Fragment>
            <Gallery show={this.state.showGallery} 
                    close={this.onCloseWindowHandler} 
                    images={ this.state.selectedWork ? this.state.selectedWork.galleryPics : [] }/>
 
         <ScrollIntoView id={this.props.location ? this.props.location.hash : null}>       
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
                            clicked = {()=>this.onTileClick(t)}
                        />                             
                        ) }
                </div>
            </section>
            </ScrollIntoView>
            </Fragment>
        );
    }

}

export default withRouter(Portfolio);