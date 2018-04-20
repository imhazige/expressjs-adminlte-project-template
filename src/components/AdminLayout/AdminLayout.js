/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';

import ss1 from 'font-awesome/css/font-awesome.css';
import ss2 from 'ionicons/dist/css/ionicons.css';
import ss3 from 'bootstrap/dist/css/bootstrap.css';
import ss4 from 'admin-lte/dist/css/AdminLTE.css';
import ss5 from 'admin-lte/dist/css/skins/skin-blue.min.css';

import s from './AdminLayout.css';

// import ss6 from '../fonts/fonts.css';

// import reactjsAdminlte from 'adminlte-reactjs';

class AdminLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withStyles(normalizeCss, s, ss1, ss2, ss3, ss4, ss5)(
  AdminLayout,
);
// export default withStyles(normalizeCss)(Layout);
