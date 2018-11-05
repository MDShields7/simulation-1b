import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './HostNav.css'

export default class HostNav extends Component {
  render() {
    return (
      <div className='HostNav'>

            <div className="NavItem">Logo</div>
            <div className="NavGroup">
              <div className="NavItem">
                  <Link to='/'>Content</Link>
              </div>
              <div className="NavItem">
                  <Link to='/setup'>Setup</Link>
              </div>
              <div className="NavItem">
                  <Link to='/lobby'>Lobby</Link>
              </div>
            </div>
      </div>
    )
  }
}
