/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import LteSimple from './LteSimple';

const title = 'Lte admin';

function action() {
  return {
    chunks: ['lte-test'],
    title,
    component: (
      <AdminLayout>
        <LteSimple />
      </AdminLayout>
    ),
  };
}

export default action;
