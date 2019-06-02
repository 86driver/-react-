import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 30px
  .banner-img{
    width: 625px;
    height: 270px;
    border-radius: 5px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
/**
 *  Topic组件样式表
 */

export const TopicWrapper = styled.div`
  padding: 20px 0 10px; 0;
`

/**
 *  Recommend组件样式表
 */

export const RecommendWrapper = styled.div`
  margin: 25px 0 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  margin: 5px 0;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

/**
 *  Writer组件样式表
 */

export const WriterWrapper = styled.div`
  .recommend-writer{
    font-size: 14px;
    color: #969696;
  }
 `

export const WriterItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  .img-url{
    img{
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid #ddd;
    }
  }
  .author{
    margin-left: 10px;
    .author-name{
      font-size: 14px;
      color: #333;
    }
    .author-des{
      margin-top: 5px;
      font-size: 12px;
      color: #969696;
    }
  }
 `

/**
 * List（Article） 组件样式表
 */

export const ArticleWrapper = styled.div`
 
 `

export const ArticleItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  .left{
    margin-right: 20px;
    border-bottom: 1px solid #f0f0f0;
    .title{
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
    }
    .content{
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
    .tips{
      margin-bottom: 10px;
      span{
        color: #b4b4b4;
        font-size: 12px;
        padding-left: 10px;
      }
    }
  }
  .right{
    img{
      width: 150px;
      height: 100px;
      border-radius: 5px;
    }
  }
 `