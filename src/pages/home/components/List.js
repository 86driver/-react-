import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ArticleWrapper, ArticleItem} from '../style'
class List extends Component {
  render() {
    const {articleList} = this.props
    return (
      <ArticleWrapper>
        {
          articleList.map((item) => {
            return (
              <ArticleItem key={item.get('id')}>
                <div className="left">
                  <div className="title">{item.get('title')}</div>
                  <div className="content">{item.get('content')}</div>
                  <div className="tips">
                    <span className="author">{item.get('author')}</span>
                    <span className="reply">{item.get('reply')}</span>
                    <span className="like">{item.get('like')}</span>
                  </div>
                </div>
                <div className="right">
                  <img src={item.get('imgUrl')} alt=""/>
                </div>
              </ArticleItem>
            )
          })
        }
      </ArticleWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    articleList: state.getIn(['homeReducer', 'articleList'])
  }
}

export default connect(mapState, null)(List)