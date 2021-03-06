import { connect } from "dva";
import * as React from "react";
import styles from "./index.less";

interface Props {
  dispatch?: any;
  location: any;
}

@connect()
export default class Index extends React.PureComponent<Props, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.main}>
        <h3>dva-typescript-antd-mobile-starter-kit</h3>
        <div className={styles.welcome} />
      </div>
    );
  }
}
