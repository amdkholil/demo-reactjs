import { Menu } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';

class Navbar extends Component {

  state = {
    current: 'home'
  }

  hClick = (e) => {
    this.setState({ current: e.key })
  }

  render() {
    let current = this.state.current
    return (
      <div>
        <Menu onClick={this.hClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key='home'>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key='coin'>
            <Link to="/coin">Coin</Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Navbar