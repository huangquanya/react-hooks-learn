import React from 'react';
import ReactDOM from 'react-dom';
import Post from './post.md'
import Head from './head.vue'
// import xx from 'xxx.jpg';
// import App from './App';
function App() {
  return (
      <div>
          <Head/>
          <h2>h2</h2>
            <Post />
      </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
