import { Space, Spin } from 'antd';
import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

export function withRouter(Child) {
  return (props) => {
    const params = useParams();
    // const navigate = useNavigate();
    console.log(props);
    return <Child {...props} params={params} />;
  }
}

class CoinDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      loading: true,
      data: null
    }
  }


  componentDidMount() {
    let id = this.props.id
    this.getData(id)
    this.setState({
      id: id
    })
  }

  getData = (id) => {
    fetch('https://api.coinpaprika.com/v1/coins/' + id)
      .then(res => res.json())
      .then(data => {
        this.setState({
          loading: false,
          data: data
        })
        console.log(data);
      })
  }

  render() {
    const { id, data } = this.state
    return (
      <div>
        <div className="layout">
          <h4 style={header}>Coin Detail</h4>
          {data == null ? <Space size={'middle'} style={{ display: 'block', textAlign: 'center', marginTop: '6em' }} >
            <Spin size="large" />
          </Space> :
            <table>
              <tr style={trStyle}>
                <td style={tdName}>ID</td>
                <td style={tdVal}>{id}</td>
              </tr>
              <tr style={trStyle}>
                <td style={tdName}>Name</td>
                <td style={tdVal}>{data.name}</td>
              </tr>
              <tr style={trStyle}>
                <td style={tdName}>Symbol</td>
                <td style={tdVal}>{data.symbol}</td>
              </tr>
              <tr style={trStyle}>
                <td style={tdName}>Type</td>
                <td style={tdVal}>{data.type}</td>
              </tr>
              <tr style={trStyle}>
                <td style={tdName}>Active</td>
                <td style={tdVal}>{data.is_active ? 'Active' : 'Nonactive'}</td>
              </tr>
              <tr style={trStyle}>
                <td style={tdName}>Is New ?</td>
                <td style={tdVal}>{data.is_new ? 'True' : 'False'}</td>
              </tr>
            </table>
          }
        </div>
      </div>
    )
  }
}


const tdName = {
  width: '100px',
  color: '#555555',
  paddingTop: '0.5em',
  paddingBottom: '0.5em',
}

const tdVal = {
  fontWeight: 'bold',
  paddingTop: '0.5em',
  paddingBottom: '0.5em',
  color: '#555555'
}

const trStyle = {
  paddingTop: '1em'
}

const header = {
  color: '#1890ff',
  marginBottom: '1.5em'
}

export default CoinDetail;