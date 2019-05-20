import React from 'react';
import { GlobalStyled } from './style.js'; // 使用styled-components 管理CSS样式(避免局部污染)
import { IconfontStyle } from './statics/iconfont/iconfont'; // 使用styled-components 管理CSS样式(避免局部污染)
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <IconfontStyle />
      <Provider store = {store}>
        <Header></Header>
      </Provider>
    </div>
  );
}

export default App;
