import React from 'react';

const User = props => {
    const { content } = props;
    console.log('content', content);
    return (
        <div
        >
            {content ?
                <h1>从{content}引入了应用A的用户管理模块</h1>
                :<h1 style={{color: 'green'}}>应用A自己引入用户管理模块</h1>
            }
        </div>
    );
};

export default User;
