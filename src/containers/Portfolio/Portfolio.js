import React, { Component } from 'react'; 
import styles from './Portfolio.css';

class Portfolio extends Component {
    state = {
        works: [],
        filters: ['UX','Graphics']
    }

    render() {
   return (
    <section className={styles.Portfolio}>
        <h1>Portfolio</h1>
        <ul>
            { this.state.filters.map((f, i)=> 
                <li key={i}>{f}</li> 
            ) }
        </ul>
        <div>
            List of works
        </div>
    </section>
   );
}

}

export default Portfolio;