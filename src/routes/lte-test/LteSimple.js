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
import s from './LteSimple.css';

class LteSimple extends React.Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  // };

  render() {
    return (
      <div className="content-wrapper content-custom">
        {/* <!-- Content Header (Page header) --> */}
        <section className="content-header">
          <h1>
            Blank page
            <small>it all starts here</small>
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="#">Examples</a>
            </li>
            <li className="active">Blank page</li>
          </ol>
        </section>

        {/* <!-- Main content --> */}
        <section className="content">
          {/* <!-- Default box --> */}
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Title</h3>

              <div className="box-tools pull-right">
                <button
                  type="button"
                  className="btn btn-box-tool"
                  data-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fa fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-box-tool"
                  data-widget="remove"
                  data-toggle="tooltip"
                  title="Remove"
                >
                  <i className="fa fa-times" />
                </button>
              </div>
            </div>
            <div className="box-body">
              Start creating your amazing application!
            </div>
            {/* <!-- /.box-body --> */}
            <div className="box-footer">Footer</div>
            {/* <!-- /.box-footer--> */}
          </div>
          {/* <!-- /.box --> */}
        </section>
        {/* <!-- /.content --> */}
      </div>
    );
  }
}

export default withStyles(s)(LteSimple);
