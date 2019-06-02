import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      </DetailWrapper>
    )
  }
}

const matState = (state) => {
  return {
    title: state.getIn(['detailReducer', 'title']),
    content: state.getIn(['detailReducer', 'content']),
  }
}

export default connect(matState, null)(Detail)