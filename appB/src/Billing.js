import React from 'react';

const Billing = props => {
    const { content } = props;
    console.log('content', content);
    return (
        <div>
            {content ?
                <h1>从{content}引入了应用B的费用中心模块</h1>
                : <h1 style={{color: 'blue'}}>应用B自己引入费用中心模块</h1>
            }
        </div>
    );
};

export default Billing;
