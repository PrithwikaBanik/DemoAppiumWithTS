import { execSync } from 'child_process';
import { buildDriver } from '../drivers';

async function runTests() {
    const env = process.env.NODE_ENV || 'chrome';
    console.log(`Running tests for ${env} environment...`);

    try {
        const driver = await buildDriver(env);
        execSync(`npx cucumber-js --require-module ts-node/register --require src/features/**/*.ts`, { stdio: 'inherit' });
        await driver.quit();
    } catch (error) {
        console.error('Test execution failed:', error);
        process.exit(1);
    }
}

runTests();
