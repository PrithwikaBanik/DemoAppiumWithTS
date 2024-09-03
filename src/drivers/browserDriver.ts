/*const { remote } = require('webdriverio');
const browserConfig = require('../config/browserConfig');

async function browserDriver() {
    const driver = await remote({
        capabilities: browserConfig
    });
    return driver;
}

module.exports = browserDriver;*/

import wd from 'wd';
import browserConfig from '../config/browserConfig';

export async function createBrowserDriver() {
    const driver = wd.promiseChainRemote(browserConfig);
    await driver.init();
    return driver;
}

