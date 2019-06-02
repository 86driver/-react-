import React, { PureComponent } from 'react'
import { WriterWrapper, WriterItem } from '../style'
import { connect } from 'react-redux'

class Writer extends PureComponent {
  render() {
    const { writerList } = this.props
    return (
      <WriterWrapper>
        <div className="recommend-writer">推荐作者</div>
        {
          writerList.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <div className='img-url'>
                  <img src={item.get('imgUrl')} alt="" />
                </div>
                <div className='author'>
                  <div className='author-name'>{item.get('author')}</div>
                  <div className='author-des'>{item.get('des')}</div>
                </div>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    )
  }
}

const matState = (state) => {
  return {
    writerList: state.getIn(['homeReducer', 'writerList'])
  }
}

export default connect(matState, null)(Writer)