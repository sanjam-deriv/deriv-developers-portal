import React from 'react';

export const sandboxes = {
    ticks: 'https://codesandbox.io/embed/github/binary-com/deriv-developers-portal/tree/master/examples/ticks?autoresize=1&codemirror=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.js&theme=dark',
    ticks_history: 'https://codesandbox.io/embed/github/binary-com/deriv-developers-portal/tree/master/examples/ticks_history?autoresize=1&codemirror=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.js&theme=dark',
    website_status: 'https://codesandbox.io/embed/github/binary-com/deriv-developers-portal/tree/master/examples/website_status?autoresize=1&codemirror=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.js&theme=dark',
    sell_expired_contracts: '',
    balance: '',
    buy_contract: '',
    contracts_for_symbol: 'https://codesandbox.io/embed/github/binary-com/deriv-developers-portal/tree/master/examples/contracts_for_symbol?autoresize=1&codemirror=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.js&theme=dark',
    portfolio: '',
    profit_table: 'https://codesandbox.io/embed/github/binary-com/deriv-developers-portal/tree/master/examples/profit_table?autoresize=1&codemirror=1&expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Findex.js&theme=dark',
    proposal: '',
}

export const SandboxIframe = ({ sandbox }) => {
    return (
        <div className="sandbox-wrapper">
            <iframe
                className="sandbox-iframe"
                src={sandbox}
                style={{ width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow: "hidden" }}
                title="static"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
        </div>
    )
}
