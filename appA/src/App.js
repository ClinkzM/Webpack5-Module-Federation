import React, { Suspense } from 'react';
import User from "./User";
// 异步加载组件
const AppBBilling = React.lazy(() => import('appB/Billing'));

const App = () => {
    console.log('window.appBUrl', window.appBUrl)
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow'
        }}
      >
        <h1>App A</h1>
      </div>
      <Suspense fallback={'loading...'}>
        <AppBBilling content="应用A" />
      </Suspense>
        <User />
        <p />
        <p />
        <p />
        <p />
        <a href={window.appBUrl}>前往应用B</a>
    </div>
  );
};

export default App;
