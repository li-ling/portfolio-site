import React, {Fragment, Component } from 'react'; 
import Toolbar from '../../components/Navigation/ToolBar/ToolBar';
import Contact from '../../components/Contact/Contact';
class Layout extends Component {

  render() {
   return (
       <Fragment>
           <Toolbar />
            <main>
                {this.props.children}
            </main>
            <Contact />
        </Fragment>
   );
}

}

export default Layout;