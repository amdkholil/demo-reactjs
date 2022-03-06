import { Breadcrumb } from "antd";
import React, {Component} from "react";
import { useParams } from "react-router";
import CoinDetail from "./coin_detail";
import CoinList from "./coin_list";

function Coin() {

  let { id } = useParams();

  return (
    <div>
      <Subtitle title={(typeof id === 'undefined')?'Coin List':'Coin Detail'} />
      {(typeof id === 'undefined') ? <CoinList /> : <CoinDetail id={id} />}
    </div>
  );
}

class Subtitle extends Component {
  render(h) {
    let title = this.props.title
    return (
      <Breadcrumb style={{ marginLeft: '4em', marginTop: '1.5em' }}>
        <Breadcrumb.Item style={{ color: '#aaaaaa' }}>
          {title}
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default Coin;