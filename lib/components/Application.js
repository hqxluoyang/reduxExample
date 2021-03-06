import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Menu from './Menu'
import Footer from './Footer'
import ReactCSSTransitionGroup from 'react-addons-transition-group'

export default class Application extends React.Component {

  static propTypes = {
    children: PropTypes.any
  }

  constructor (props, context) {
    super(props, context)

    this.handleMenuClick = this.handleMenuClick.bind(this)

    this.state = {
      isMenuActive: false
    }
  }

  handleMenuClick (evt) {
    evt.preventDefault()
    this.setState({ isMenuActive: !this.state.isMenuActive })
  }

  render () {
    const { isMenuActive } = this.state
    const activeClass = isMenuActive ? 'active' : ''

    return (
      <div id="layout" className={activeClass}>
        <a href="#menu" id="menuLink"
          className={classnames('menu-link', activeClass)}
          onClick={this.handleMenuClick}>
          <span></span>
        </a>

        <Menu activeClass={activeClass} />
        <ReactCSSTransitionGroup transitionName="msgAnim">
          <div id="main">
            {/* this will render the child routes */}
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
        <Footer />
      </div>
    )
  }
}
