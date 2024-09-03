const browserConfig = {
    capabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
            // Add Firefox-specific options if needed
        }
    },
    hostname: '127.0.0.1',
    port: 4723
};

export default browserConfig;
