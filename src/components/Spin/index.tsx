import { ActivityIndicator } from "antd-mobile";
import React, { PureComponent } from "react";

interface IProps {
  loading?: any;
}

export const Spin = (toast?, text?) => WrappedComponent =>
  class extends PureComponent<IProps, any> {
    public render() {
      let flag = true;
      const { loading } = this.props;
      // Waiting for all requests
      Object.keys(loading).forEach(key => {
        flag = flag && !loading[key];
      });
      return (
        <div>
          <ActivityIndicator
            toast={toast || true}
            text={text || "loading..."}
            animating={!flag}
          />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  } as typeof WrappedComponent;
