import { TabBar } from "antd-mobile";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import React from "react";

import { getRouteData } from "../../utils/utils";
import styles from "./index.less";

interface IProps {
  location?: any;
  history?: any;
  dispatch?: any;
  menu?: any;
}

@connect()
export default class Index extends React.PureComponent<IProps, any> {
  public render() {
    const menu = getRouteData("BasicLayout");
    const { dispatch, location } = this.props;

    return (
      <div className={styles.normal}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
        >
          {menu.map((obj, index) => {
            return (
              <TabBar.Item
                title={obj.name}
                key={index}
                icon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px"
                    }}
                  >
                    <img src={obj.icon} alt="" width="100%" height="100%" />
                  </div>
                }
                selectedIcon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px"
                    }}
                  >
                    <img src={obj.selectedIcon} alt="" width="100%" height="100%" />
                  </div>
                }
                selected={location.pathname === obj.path}
                onPress={() => dispatch(routerRedux.push(obj.path))}
              >
                <obj.component location={location} />
              </TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    );
  }
}
