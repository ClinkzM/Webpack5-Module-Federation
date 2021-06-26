import React, { Suspense } from 'react';
import Billing from "./Billing";
// 异步加载组件
const AppAUser = React.lazy(() => import('appA/User'));

const App = props => {
  const { content } = props;
  console.log('content', content);
  return (
      <div>
          <div
              style={{
                  margin: '10px',
                  padding: '10px',
                  textAlign: 'center',
                  backgroundColor: 'cyan'
              }}
          >
              <h1>App 2</h1>
          </div>
          <Suspense fallback={'loading...'}>
              <AppAUser content="应用B" />
          </Suspense>

          <Billing />
      </div>

  );
};

export default App;
