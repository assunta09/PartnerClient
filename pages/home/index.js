/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';


class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Layout className={s.content}>
    
      </Layout>
    );
  }

}

export default HomePage;
