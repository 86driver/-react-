import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '对你动了情的女人，“亲吻”都会很特别',
  content: '<p>离职本是一件很伤感的事情，熟悉了公司的环境，马上要和昔日的同事离别了，但凡事都有例外，在程序员论坛，一名程序员即将离职，没想到却被老板冷嘲热讽，心中怨气油然而生，故而选择发帖批判其领导。</p><p>喜欢和爱，都是心底最真实的情感，而且是无法抑制的一种情感。喜欢和爱，都能改变一个人，把人变成另一副模样。</p><img src="http://upload-images.jianshu.io/upload_images/10374073-744331142317689b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/523/format/webp" alt=""/> <p>此事不管换做谁心里或多或少都不好受，以至于劝说职场一族不要去小厂上班，在贴文的下方，楼主还补充和领导谈话的具体细节：本来一个人不可能在一家公司干一辈子，而且还是小公司。想着以后互相联系，帮助。看他那样子，真的不想再联系了。</p> <p>还有网友劝说摆正心态，没必要将此事放在心上：没必要纠结这个，总是有人不欣赏你，想想看好你的人就行了。另外2年20K比我强，我两年的时候比你少。</p>'
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}