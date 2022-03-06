import { Space, Spin, Table } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class CoinList extends Component {

  state = {
    loading: true,
    data: null,

  }

  componentDidMount() {
    this.fetch()
  }

  fetch = (e) => {
    fetch('https://api.coinpaprika.com/v1/coins/')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({
          loading: false,
          data: data
        })
      })
  }

  render() {
    const dataSource = this.state.data
    const isLoading = this.state.loading

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: text => <Link to={'/coin/' + text}>{text}</Link>
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
        render: text => text ? 'Aktif' : 'Tidak aktif'
      },
    ];

    return (
      <div>
        <div className="layout">
          <h4 style={header}>Coin List</h4>
          {isLoading ?
            <Space size={'middle'} style={{ display: 'block', textAlign: 'center', marginTop: '6em' }} >
              <Spin size="large" />
            </Space> :
            <Table dataSource={dataSource} columns={columns} />
          }

        </div>
      </div>
    )
  }
}

const header = {
  color: '#1890ff',
  marginBottom: '1.5em'
}

export default CoinList;