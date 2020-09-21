import React, { Suspense } from 'react';
import ReqDemo from './ReqDemo'
import './App.css';

function App() {
  return (
    <div>
      <Suspense fallback={<h2>正在加载中。。。</h2>}>
        <ReqDemo />
      </Suspense>
    </div>
  );
}

export default App;
