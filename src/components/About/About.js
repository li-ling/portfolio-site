import React, {Component} from 'react'; 
import styles from './About.css';

import { withRouter } from "react-router-dom";
import ScrollIntoView from '../../hoc/ScrollIntoView/ScrollIntoView';
class About extends Component {

    componentDidMount(){
        console.log('[ComponentDidMount]');
        console.log(this.props);
    }

    componentDidUpdate(){
        console.log('[componentDidUpdate]');
        console.log(this.props);        
    }

    render() {
        
        return (      
        <ScrollIntoView id={this.props.location.hash ? this.props.location.hash : '#about'}>                            
            <div className={styles.About} id='about'>
                  <div className={styles.Heading}>
                      <h1>My Story</h1>
                      <p>Techical and Creative</p>
                  </div>
                  <h3>Developer</h3>
                  <p>I have a Software Engineering degree and have always been interested in learning new things and playing with the latest technologies.</p>
                  <p>I get bored when I work on the same things for a long period of time.</p>
                  <h3>Designer</h3>
                  <p>Having been somewhat of an artistic person in my youth, I started longing for an avenue to express my creativity somehwere along the way. 
                      I decided to enroll in Graphic Design program and immediately fell in love with it. I began applying design principles into web design and moving
                      towards front-end development.
                  </p>
                  <h3>User Experience Design</h3>
                  <p>After going through a few projects and seeing the products of my labor did not make it to the end users, I decided to transition into UX Design.
                      I want to avoid the traditional mistakes of building something that we 'believe' is what the users want without doing proper research and validation. 
                      I love seeing the world through users lenses. The psychology behind user behaviours is absolutely fascinating!
                  </p>
                  <p>I believe this is a very exciting time for UX designers. Technologies are interwoven so deeply into our lives now - from wearable devices, to household 
                      appliances, to robots, to AR and VR! There are so many opportunities for creating new experiences. I'd love nothing more than be right in the
                      center of it all.
                  </p>
            </div>
            </ScrollIntoView>            
        )
    }
};

export default withRouter(About);