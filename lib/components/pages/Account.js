import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
export default class Account extends React.Component {

  static propTypes = {
    children: PropTypes.any
  }

  render () {
  
    return <div>{this.props.children}</div>
  }
}
