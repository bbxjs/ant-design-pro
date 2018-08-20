import React, { Component } from 'react';
import { connect } from 'bbx';
import { setting } from '@/states/setting';
import styles from './GridContent.less';

@connect(setting)
class GridContent extends Component {
  render() {
    const { children } = this.props;
    const { grid } = setting.state;

    let className = `${styles.main}`;
    if (grid === 'Wide') {
      className = `${styles.main} ${styles.wide}`;
    }
    return <div className={className}>{children}</div>;
  }
}

export default GridContent;
