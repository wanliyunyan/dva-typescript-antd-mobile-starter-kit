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
    return <div className={styles.main}>home4</div>;
  }
}
