import React, { Component, Fragment } from 'react'; 
import { withRouter } from "react-router-dom";
import styles from './Portfolio.css';
import Tile from '../../components/Tile/Tile';
import ScrollIntoView from '../../hoc/ScrollIntoView/ScrollIntoView';
import Gallery from '../../components/Gallery/Gallery';

const WORKTYPE_UX = 'UX';
const WORKTYPE_GRAPHICS = 'Graphics';
const images = require.context('../../assets/images/thumbs', true);

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
              thumbUrl: images('./Book_cover_thumb_300.jpg'),
              galleryName: 'bookCover'
            },
            { title: 'How To Get Kids to Eat Their Vegetables and Fruit ', 
              subTitle: 'Poster-sized visual instruction illustrations from course work',
              thumbUrl: images('./how_to_thumb_300.jpg'),
              galleryName: 'howTo'
            },
            { title: 'Evolution of IT', 
              subTitle: 'Visual Storytelling design',
              thumbUrl: images('./IT_Evolution_thumb_300.png'),
              galleryName: 'itEvolution'
            },
            { title: 'Fashionable Me', 
              subTitle: 'Personal fashion style and fashion infographic design from course work',
              thumbUrl: images('./Fashion_Info_thumb_300.jpg'),
              galleryName: 'fashion'
            },            
            { title: 'Destinations Magazine', 
              subTitle: '10-page magazine covers and layout design from course work',
              thumbUrl: images('./magazine_thumb_300.jpg'),
              galleryName: "magazine"
            },
            { title: 'Self Portrait', 
              subTitle: 'A self portrait illustration from course work',
              thumbUrl: images('./self_portrait_thumb_300.jpg'),
              galleryName: 'selfPortrait'
            }
        ],
        workTypes: [{ type: WORKTYPE_UX, isSelected: false},
                    { type:WORKTYPE_GRAPHICS, isSelected: true}
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
        this.setState({showGallery: false});        

        document.body.style.overflow = 'auto';
        document.body.scroll = "yes";                
    }
    
    onTileClick = (tile) => {
        this.setState({showGallery: true, selectedWork: tile});

        document.body.style.overflow = 'hidden';
        document.body.scroll = "no";        
    }

    render() {
        const selectedWorkType = this.state.workTypes.filter(w => w.isSelected);
        const Tiles = selectedWorkType[0].type === WORKTYPE_UX ? this.state.UXWorks : this.state.GraphicsWorks;                
        
        // const galleryModal = this.state.showGallery ? (
        //     <Gallery 
        //             close={this.onCloseWindowHandler} 
        //             galleryName={ this.state.selectedWork ? this.state.selectedWork.galleryName : null }/>
        // )  : null;

        return (
         <Fragment>
             {/* {galleryModal} */}
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
                            galleryName = {t.galleryName}
                            // clicked = {()=>this.onTileClick(t)}
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