import React, {Fragment, Component } from 'react'; 

class Layout extends Component {
render() {
   return (
       <Fragment>
            <div>Toolbar, Logo, SideDrawer, Backdrop</div>
            <main>
                {this.props.children}
            </main>
        </Fragment>
   );
}

}

export default Layout;