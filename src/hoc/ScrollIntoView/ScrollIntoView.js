import { Component } from "react";

class ScrollIntoView extends Component {

    componentDidMount() {
      this.scroll()
    }
  
    componentDidUpdate(prevProps, prevState) {
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