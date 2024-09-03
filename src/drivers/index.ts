import { createAndroidDriver } from './androidDriver';
import { createIOSDriver } from './iosDriver';
import { createBrowserDriver } from './browserDriver';

export async function buildDriver(env: string) {
    switch (env) {
        case 'android':
            return createAndroidDriver();
        case 'ios':
            return createIOSDriver();
        case 'chrome':
            return createBrowserDriver();
        default:
            throw new Error(`Unknown environment: ${env}`);
    }
}
