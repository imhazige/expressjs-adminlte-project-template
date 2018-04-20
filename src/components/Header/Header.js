/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
          {/* <!-- Logo --> */}
          <a to="/login" className="logo">
              {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
              <span className="logo-mini"><b>A</b>LT</span>
              {/* <!-- logo for regular state and mobile devices --> */}
              <span className="logo-lg"><b>Admin</b>LTE</span>
          </a>
          {this.props.children}
      </header>
    );
  }
}

export default withStyles(s)(Header);
