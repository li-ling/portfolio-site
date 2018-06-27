import React, {Fragment, Component } from 'react'; 
import Toolbar from '../../components/Navigation/ToolBar/ToolBar';
import Contact from '../../components/Contact/Contact';
import Gallery from '../../components/Gallery/Gallery';
class Layout extends Component {
    state = {
        showGallery: true
    }

    onCloseWindowHandler = () => {
        this.setState({showGallery: false})
    }

render() {
   return (
       <Fragment>
           <Toolbar />
           <Gallery show={this.state.showGallery} close={this.onCloseWindowHandler}/>
            <main>
                {this.props.children}
            </main>
            <Contact />
        </Fragment>
   );
}

}

export default Layout;