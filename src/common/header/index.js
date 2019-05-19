import React, { Component } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavItemGroup,
  NavSearch,
  Addition,
  Button
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/"></Logo>
        <Nav>
          <NavItemGroup>
            <NavItem className="home">首页</NavItem>
            <NavItem>下载App</NavItem>
            <NavSearch placeholder="搜索"></NavSearch>
          </NavItemGroup>
          <NavItemGroup>
            <NavItem className="Aa">Aa</NavItem>
            <NavItem className="login-in">登录</NavItem>
          </NavItemGroup>
        </Nav>
        <Addition>
          <Button className="register">注册</Button>
          <Button className="writing">写文章</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header