import { connect } from "dva";
import { Redirect, Switch } from "dva/router";
import React from "react";
import Footer from "../components/Footer/index";
import styles from "./BasicLayout.less";

interface Props {
  location?: any;
  history?: any;
  dispatch?: any;
}

interface IState {}

@connect(state => ({}))
export default class Index extends React.Component<Props, IState> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { location } = this.props;

    return (
      <div className={styles.main}>
        <Switch>
          <Redirect from="/" to="/home" exact />
        </Switch>

        <Footer location={location} />
      </div>
    );
  }
}
