import { Component } from "react";

class ScrollIntoView extends Component {

    componentDidMount() {
      this.scroll()
    }
  
    componentDidUpdate(prevProps, prevState) {
    console.log('[ScrollIntoView] componentDidUpdate: this.props= ');
    console.log(this.props);
    
    console.log('[ScrollIntoView] componentDidUpdate: prevProps= ');
    console.log(prevProps);

      this.scroll()
    }
  
    scroll() {
      const { id } = this.props
      if (!id) {
        return
      }
      const element = document.querySelector(id)
      if (element) {
        element.scrollIntoView()
      }
    }
  
    render() {
      return this.props.children
    }
  }

export default ScrollIntoView;