import React from 'react'; 
import styles from './About.css';

const about = (props) => {
  return (
      <div className={styles.About}>
        <div>
            <div className={styles.Heading}>
                <h2>My Story</h2>
                <h3>Techical and Creative</h3>
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
                appliances, to robots, to AR and VR! There are so many opportunities for creating new experiences. And I'd love nothing more than be right in the
                center of it all.
            </p>
          </div>
      </div>
  )
};

export default about;