import { fromJS } from 'immutable'

const defaultState = fromJS({
  articleList: [
    {
      id: 1,
      imgUrl: 'http://upload-images.jianshu.io/upload_images/4230858-d84af63f069db1c6.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      title: '一键下载谷歌市场所有应用，无需梯子，秒杀Apkpure',
      content: '很多人还再为登陆不到Google Play应用商店而发愁，有些用户为了体验到优质的应用资源还富强上网，有些还得放血才能体验到。 今天推荐的这款A...',
      author: 'myair',
      reply: '1',
      like: '9'
    },
    {
      id: 2,
      imgUrl: 'http://upload-images.jianshu.io/upload_images/7643104-f80e44d6de3d79f4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      title: '为什么和对象在一块，更喜欢接吻而不是做爱',
      content: '首先申明我不是性冷淡，只是更喜欢接吻，接吻可以让我感受到爱意。现在记忆犹新的是竟然可以从接吻中体会到对方的思念，而做爱之前的接吻可以算作是...',
      author: '酸掉吖的柠檬',
      reply: '18',
      like: '66'
    },
    {
      id: 3,
      title: '林徽因：每个人心中都有一道暗伤，不见阳光，不经雨露',
      imgUrl: 'http://upload-images.jianshu.io/upload_images/16219839-200e3d8b8b7133ad.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
      content: '终于明白，有些路，只能一个人走。那些邀约好同行的人，一起相伴雨季，走过年华，但有一天终究会在某个渡口离散。山和水可以两两相忘，日与月可以毫无瓜葛...',
      author: '狸米蜜',
      reply: '9',
      like: '44'
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
      id: 2,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 3,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 4,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ],
  writerList: [
    {
      id: 1,
      imgUrl: 'http://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      author: '茶点故事',
      des: '写了311.8k字 · 10k喜欢',
    },
    {
      id: 2,
      imgUrl: '//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      author: '行距版君',
      des: '写了500.2k字 · 53.9k喜欢',
    },
    {
      id: 3,
      imgUrl: 'http://upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      author: '老沈1',
      des: '写了84.6k字 · 509喜欢',
    },
    {
      id: 4,
      imgUrl: 'http://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      author: '遛遛心情的溜妈',
      des: '写了650.6k字 · 28.8k喜欢',
    },
    {
      id: 5,
      imgUrl: 'http://upload.jianshu.io/users/upload_avatars/8972166/2a0fb78d-6417-47cb-a57c-2ce4a7b92609.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      author: '冰千里',
      des: '写了497.9k字 · 8.7k喜欢',
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}