/* eslint-disable import/no-extraneous-dependencies */
import type { Browser, Page } from 'playwright';
import { chromium } from 'playwright';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

export const sleep = (ms: number) => new Promise((resolve) => { setTimeout(resolve, ms); });
const videosPath = (name: string) => (process.env.E2E_VIDEO === 'true' ? `e2e/video/${name}` : undefined);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.setImmediate = globalThis.setTimeout;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis['jest-playwright'] = {};

let browser: Browser = null!;
let page: Page = null!;

const exampleURL = 'http://localhost:5173/';

beforeAll(async () => {
  browser = await chromium.launch({ headless: true });
});

afterAll(async () => {
  await browser.close();
});

async function clickAndScreenshot(selector: string) {
  await page.click(selector);
  expect(await page.screenshot()).toMatchImageSnapshot();
}

async function test(name: string) {
  page = await browser.newPage({
    viewport: { width: 1200, height: 1600 },
    videosPath: videosPath(name),
  });
  await page.goto(`${exampleURL}${name}.html`);

  await sleep(500);
  const buttons = await page.locator('#buttons button');

  const count = await buttons.count();
  for (let i = 0; i < count; i += 1) {
    const button = buttons.nth(i);
    console.log(await button.innerText());
    await button.click();
    await sleep(100);
    expect(await page.screenshot()).toMatchImageSnapshot();
  }

}

describe.skip('default', () => {
  afterAll(async () => {
    await page.close();
  });

  it('screenshot', async () => test('default'));
});

describe('bulma', () => {
  afterAll(async () => {
    await page.close();
  });

  it('screenshot', async () => test('bulma'));
});
