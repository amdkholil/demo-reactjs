import { Breadcrumb, Table } from "antd";
import React, { Component } from "react";

class Coin extends Component {

  state={
    loading:true,
    data:null,

  }

  componentDidMount(){
    this.fetch()
  }

  fetch = ()=>{
    fetch('https://api.coinpaprika.com/v1/coins/')
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      this.setState({
        loading:false,
        data:data
      })
    })
  }

  render() {
    const dataSource = this.state.data

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
      },
      {
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Active',
        dataIndex: 'is_active',
        key: 'is_active',
      },
    ];

    return (
      <div>
        <Breadcrumb style={{ marginLeft: '4em', marginTop: '1.5em' }}>
          <Breadcrumb.Item>
            Coin list
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="layout">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    )
  }
}

export default Coin;