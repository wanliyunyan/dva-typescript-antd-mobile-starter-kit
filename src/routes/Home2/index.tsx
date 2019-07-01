import { Button, Card, WhiteSpace, WingBlank } from "antd-mobile";
import { connect } from "dva";
import * as React from "react";
import { Spin } from "src/components/Spin/index";
import styles from "./index.less";

interface Props {
  dispatch?: any;
  location?: any;
  loading?: any;
  list: any;
}

@connect(state => ({
  ...state.list,
  loading: state.loading.effects
}))
@Spin()
export default class Index extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { list, dispatch } = this.props;
    return (
      <div className={styles.main}>
        <Button
          type="primary"
          onClick={() => {
            dispatch({
              type: "list/create",
              payload: {
                title: "This is new item"
              }
            });
          }}
        >
          add
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "list/query" });
          }}
        >
          refresh
        </Button>
        {list.map(obj => (
          <WingBlank size="lg" key={obj.id}>
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                title={`${obj.title}${obj.id}`}
                extra={<span>this is extra</span>}
              />
              <Card.Body>
                <div>{obj.desc}</div>
              </Card.Body>
              <Card.Footer
                content="footer content"
                extra={<div>extra footer content</div>}
              />
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
        ))}
      </div>
    );
  }
}
