const androidConfig = {
    capabilities: {
        platformName: 'Android',
        deviceName: 'Android Emulator',
        app: '/path/to/your/app.apk',
        automationName: 'UiAutomator2'
    },
    hostname: '127.0.0.1',
    port: 4723
};

export default androidConfig;
