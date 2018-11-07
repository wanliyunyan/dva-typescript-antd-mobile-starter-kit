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
      // 等待所有请求完成
      Object.keys(loading).forEach(key => {
        flag = flag && !loading[key];
      });
      return (
        <div>
          <ActivityIndicator
            toast={toast || true}
            text={text || "加载中..."}
            animating={!flag}
          />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  } as typeof WrappedComponent;
