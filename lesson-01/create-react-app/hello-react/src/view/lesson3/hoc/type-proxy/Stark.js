/*
 * @Author: Tang Youchao  
 * @Date: 2019-06-20 14:36:21 
 * @Last Modified by: Tang Youchao 
 * @Last Modified time: 2019-06-20 15:55:25
 */

import React, {Component} from 'react';
import IronMan from './IronMan';

class Stark extends Component {
  render () {
    return (
      <div>
        是的，我就是 Tony Stark{' '}
      </div>
    );
  }
}
Stark = IronMan (Stark);
export default Stark;
