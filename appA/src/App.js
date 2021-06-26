import React, { Suspense } from 'react';
import User from "./User";
// 异步加载组件
const AppBBilling = React.lazy(() => import('appB/Billing'));

const App = () => {
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
        <h1>App1</h1>
      </div>
      <Suspense fallback={'loading...'}>
        <AppBBilling content="应用A" />
      </Suspense>
        <User />
    </div>
  );
};

export default App;
