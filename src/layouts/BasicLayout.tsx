import { connect } from "dva";
import { Redirect, Switch } from "dva/router";
import { groupBy } from "lodash";
import React from "react";
import Footer from "../components/Footer/index";
import styles from "./BasicLayout.less";

interface IProps {
  location?: any;
  history?: any;
  dispatch?: any;
}

interface IState {}

@connect(state => ({}))
export default class Index extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { location } = this.props;

    return (
      <div className={styles.main}>
        <Switch>
          <Redirect from="/" to="/home" exact={true} />
        </Switch>

        <Footer location={location} />
      </div>
    );
  }
}
