import { connect } from "dva";
import * as React from "react";
import styles from "./index.less";

interface IProps {
  dispatch?: any;
  location: any;
}

@connect()
export default class Index extends React.PureComponent<IProps, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    return <div className={styles.main}>home3</div>;
  }
}
