import React, { Component } from 'react';
import { Button, Spin, Card } from 'antd';
import { connect } from 'bbx';
import { error } from './states/error';
import styles from './style.less';

@connect(error)
export default class TriggerException extends Component {

  triggerError = code => {
    error.query({
      code,
    });
  };

  render() {
    const { queryLoading : loading } = error.state;
    return (
      <Card>
        <Spin spinning={!!loading} wrapperClassName={styles.trigger}>
          <Button type="danger" onClick={() => this.triggerError(401)}>
            触发401
          </Button>
          <Button type="danger" onClick={() => this.triggerError(403)}>
            触发403
          </Button>
          <Button type="danger" onClick={() => this.triggerError(500)}>
            触发500
          </Button>
          <Button type="danger" onClick={() => this.triggerError(404)}>
            触发404
          </Button>
        </Spin>
      </Card>
    );
  }
}
