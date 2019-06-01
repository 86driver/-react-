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
		const { mouseIn, focused, list, page, handleMouseEnter, handleMouseLeave, handleChangePage, totalPage } = this.props
		const pageList = []
		const newList = list.toJS()
		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}
		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={() => { handleMouseEnter() }}
					onMouseLeave={() => { handleMouseLeave() }}
				>
					<SearchInfoTitle>
						热门搜索
					<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
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
		const { focused, list, hanldeInputFocus, handleInputBlur } = this.props
		return (
			<HeaderWrapper>
				<Logo href="/"></Logo>
				<Nav>
					<NavItemGroup>
						<NavItem className="home">首页</NavItem>
						<NavItem>下载App</NavItem>
						<SearchWrapper>
							<CSSTransition
								in={focused}
								timeout={200}
								classNames="slide"
							>
								<NavSearch className={focused ? 'focused' : ''} placeholder="搜索"
									onFocus={() => hanldeInputFocus(list)} onBlur={handleInputBlur}>
								</NavSearch>
							</CSSTransition>
							<i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe6cf;</i>
							{this.getListArea(focused)}
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
		page: state.getIn(['headerReducer', 'page']),
		mouseIn: state.getIn(['headerReducer', 'mouseIn']),
		totalPage: state.getIn(['headerReducer', 'totalPage'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		hanldeInputFocus(list) {
			if (list.size === 0) {
				dispatch(actionCreators.getList())
			}
			dispatch(actionCreators.search_focus())
		},
		handleInputBlur() {
			dispatch(actionCreators.search_blur())
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page, totalPage) {
			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1))
			} else {
				dispatch(actionCreators.changePage(1))
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)