import React, {Fragment, Component } from 'react'; 
import Toolbar from '../../components/Navigation/ToolBar/ToolBar';

class Layout extends Component {
render() {
   return (
       <Fragment>
           <Toolbar />
            <main>
                {this.props.children}
            </main>
        </Fragment>
   );
}

}

export default Layout;