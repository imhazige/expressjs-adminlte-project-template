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
import s from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 2.4.0
        </div>
        <strong>
          Copyright &copy; 2014-2016{' '}
          <a href="https://adminlte.io">Almsaeed Studio</a>.
        </strong>{' '}
        All rights reserved.
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
