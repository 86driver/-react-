import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavItemGroup,
	NavSearch,
	Addition,
	Button,
	SearchWrapper
} from './style'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			focused: false
		}
		this.hanldeInputFocus = this.hanldeInputFocus.bind(this)
		this.handleInputBlur = this.handleInputBlur.bind(this)
	}

	hanldeInputFocus() {
		this.setState({
			focused: true
		})
	}

	handleInputBlur() {
		this.setState({
			focused: false
		})
	}

	render() {
		return (
			<HeaderWrapper>
				<Logo href="/"></Logo>
				<Nav>
					<NavItemGroup>
						<NavItem className="home">首页</NavItem>
						<NavItem>下载App</NavItem>
						<SearchWrapper>
							<CSSTransition
								in={this.state.focused}
								timeout={200}
								classNames="slide"
							>
								<NavSearch className={this.state.focused ? 'focused' : ''} placeholder="搜索" onFocus={this.hanldeInputFocus} onBlur={this.handleInputBlur}></NavSearch>
							</CSSTransition>
							<i className={this.state.focused ? 'iconfont focused' : 'iconfont'}>&#xe6cf;</i>
						</SearchWrapper>
					</NavItemGroup>
					<NavItemGroup>
						<NavItem className="Aa"><i className="iconfont">&#xe636;</i></NavItem>
						<NavItem className="login-in">登录</NavItem>
					</NavItemGroup>
				</Nav>
				<Addition>
					<Button className="register">注册</Button>
					<Button className="writing"><i className="iconfont">&#xe615;</i>写文章</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

export default Header