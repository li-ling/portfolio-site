import React, {Component} from 'react'; 
import { withRouter } from "react-router-dom";
import ScrollIntoView from '../../hoc/ScrollIntoView/ScrollIntoView';
import styles from './About.css';

import geekhead from '../../assets/images/geek_chic.png';
import afrohead from '../../assets/images/headshot_orange.png';

class About extends Component {

    render() {        
        return (      
        <ScrollIntoView id={this.props.location.hash ? this.props.location.hash : '#about'}>                            
            <div className={styles.About} id='about'>
                  <div className={styles.Heading}>
                      <h1>About Me</h1>
                      <h2>
                          <img src={geekhead} alt=""/>
                          Techical and Creative
                          <img src={afrohead} alt=""/>
                        </h2>
                  </div>
                  <h3>Developer</h3>
                  <p>I have a Software Engineering degree and have always enjoyed learning new technologies.
                  I love an environment with constant innovation and filled with new ideas.</p>
                  <h3>Designer</h3>
                  <p>Having been involved in arts throughout my life. I started longing for a way to express my creativity as part of my career about 5 years ago. 
                      I decided to enroll in a Graphic Design program and immediately fell in love with it. I began applying design principles to web development 
                      and enjoy creating designs which resonate with users.
                  </p>
                  <h3>User Experience Design</h3>
                  <p>After years of development where I rarely interacted with end users, I began to look for roles that would allow me to interact with users more. 
                      I took Scott Klemmer's Interaction Design Specialization course from University of California San Diego and again, fell in love with it.
                      I find that User-Centered-Design approach helps to create better solutions.
                  </p>
                  <p>During downtimes, I like biking, hiking, photography, cooking, playing piano, listening to Jazz, and spending time with family.</p>
            </div>
            </ScrollIntoView>            
        )
    }
};

export default withRouter(About);