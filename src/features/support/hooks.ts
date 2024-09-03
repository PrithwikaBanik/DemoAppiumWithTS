import { BeforeAll, AfterAll } from 'cucumber';
import { buildDriver } from '../../drivers';

BeforeAll(async function () {
    const env = process.env.NODE_ENV || 'chrome';
    this.driver = await buildDriver(env);
});

AfterAll(async function () {
    if (this.driver) {
        await this.driver.quit();
    }
});
