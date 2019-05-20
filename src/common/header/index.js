import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
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
								in={this.props.focused}
								timeout={200}
								classNames="slide"
							>
								<NavSearch className={this.props.focused ? 'focused' : ''} placeholder="搜索"
									onFocus={this.props.hanldeInputFocus} onBlur={this.props.handleInputBlur}>
								</NavSearch>
							</CSSTransition>
							<i className={this.props.focused ? 'iconfont focused' : 'iconfont'}>&#xe6cf;</i>
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

const mapStateToProps = (state) => {
	return {
		focused: state.headerReducer.focused
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		hanldeInputFocus() {
			const action = {
				type: 'search_focus'
			}
			dispatch(action)
		},
		handleInputBlur() {
			const action = {
				type: 'search_blur'
			}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)