import React, { Suspense } from 'react';
import Billing from "./Billing";
// 异步加载组件
const AppAUser = React.lazy(() => import('appA/User'));

const App = props => {
  const { content } = props;
  console.log('content', content);
    console.log('window.appAUrl', window.appAUrl)
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
              <h1>App B</h1>
          </div>
          <Suspense fallback={'loading...'}>
              <AppAUser content="应用B" />
          </Suspense>

          <Billing />
          <p />
          <p />
          <p />
          <p />

          <a href={window.appAUrl}>前往应用A</a>
      </div>

  );
};

export default App;
