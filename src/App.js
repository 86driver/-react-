import React from 'react';
import { GlobalStyled } from './style.js'; // 使用styled-components 管理CSS样式(避免局部污染)
import Header from './common/header/index'

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Header></Header>
    </div>
  );
}

export default App;
