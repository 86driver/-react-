import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavItemGroup,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
} from './style'


class Header extends Component {
	constructor(props) {
		super(props)
		this.getListArea = this.getListArea.bind(this)
	}
	getListArea() {
		const { focused, list, page } = this.props
		const pageList = []
		const newList = list.toJS()
		for (let i = (page - 1) * 10; i < page * 10; i++) {
			pageList.push(
				<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
			)
		}
		if (focused) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
					<SearchInfoSwitch>换一批</SearchInfoSwitch>
						<div>
							{pageList}
						</div>
					</SearchInfoTitle>
				</SearchInfo>
			)
		} else {
			return null
		}
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
								in={this.props.focused}
								timeout={200}
								classNames="slide"
							>
								<NavSearch className={this.props.focused ? 'focused' : ''} placeholder="搜索"
									onFocus={this.props.hanldeInputFocus} onBlur={this.props.handleInputBlur}>
								</NavSearch>
							</CSSTransition>
							<i className={this.props.focused ? 'iconfont focused' : 'iconfont'}>&#xe6cf;</i>
							{this.getListArea(this.props.focused)}
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
		focused: state.getIn(['headerReducer', 'focused']),
		list: state.getIn(['headerReducer', 'list']),
		page: state.getIn(['headerReducer', 'page'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		hanldeInputFocus() {
			dispatch(actionCreators.getList())
			dispatch(actionCreators.search_focus())
		},
		handleInputBlur() {
			dispatch(actionCreators.search_blur())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)