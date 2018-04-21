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

// import ss3 from 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css';
// import ss4 from 'https://cdn.bootcss.com/admin-lte/2.4.3/css/AdminLTE.min.css';
// import ss5 from 'https://cdn.bootcss.com/admin-lte/2.4.3/css/skins/skin-blue.min.css';

import s from './AdminLayout.css';

// import { $, jQuery } from 'jquery';
// import jquery from 'jquery';
// export for others scripts to use

// require('imports-loader?$=jquery,jQuery=jquery!bootstrap');
// require('imports-loader?$=jquery,jQuery=jquery!admin-lte');

// import boostrap from 'bootstrap';
// import ltejs from 'admin-lte';

// import ss6 from '../fonts/fonts.css';

import Header from '../Header';
import Navigation from '../Navigation';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

function appendScript(src, onload) {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.onload = onload;
  s.src = onload;
}

class AdminLayout extends React.Component {
  static propTypes = {
    // children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    // refer to https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    document.body.classList.add('hold-transition', 'skin-blue', 'sidebar-mini');
    // document.getElementById('app').classList.add(s['app-apend']);
    // appendScript('https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js');
    // appendScript('https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js');
    // appendScript('https://cdn.bootcss.com/admin-lte/2.4.3/js/adminlte.min.js');
  }

  render() {
    return (
      <div className={s.layout}>
        <link
          href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.bootcss.com/admin-lte/2.4.3/css/AdminLTE.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.bootcss.com/admin-lte/2.4.3/css/skins/skin-red.css"
          rel="stylesheet"
        />
        <Header>
          <Navigation />
        </Header>
        <Sidebar />
        {this.props.children}
        <Footer />
        <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js" />
        <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js" />
        <script src="https://cdn.bootcss.com/admin-lte/2.4.3/js/adminlte.min.js" />
      </div>
    );
  }
}

export default withStyles(normalizeCss, ss1, ss2, ss3, ss4, ss5, s)(
  AdminLayout,
);
// export default withStyles(normalizeCss)(Layout);
