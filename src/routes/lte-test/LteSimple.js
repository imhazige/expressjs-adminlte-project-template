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
      <div className={s.root}>
        ssss
      </div>
    );
  }
}

export default withStyles(s)(LteSimple);
