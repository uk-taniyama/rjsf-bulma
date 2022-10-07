import type { Browser, Page } from "playwright";
import { chromium } from "playwright";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { sampleNames } from "../../example/src/stories/sample";

expect.extend({ toMatchImageSnapshot });

export const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
const videosPath = (name: string) =>
  process.env.E2E_VIDEO === "true" ? `e2e/video/${name}` : undefined;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.setImmediate = globalThis.setTimeout;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis["jest-playwright"] = {};

let browser: Browser = null!;
let page: Page = null!;

const exampleURL = "http://localhost:5173/";

beforeAll(async () => {
  browser = await chromium.launch({ headless: true });
});

afterAll(async () => {
  await browser.close();
});

async function gotoPage(name: string, title?: string) {
  page = await browser.newPage({
    viewport: { width: 1200, height: 1600 },
    videosPath: videosPath(title || name),
  });
  await page.goto(`${exampleURL}${name}.html`);

  await sleep(500);
}

async function buttonClick(selector: string) {
  await page.locator(selector).click();
  await sleep(100);
}

async function testScreenshotAfterClick(selector: string) {
  await buttonClick(selector);
  expect(await page.locator(".rjsf").screenshot()).toMatchImageSnapshot();
}

async function testScreenshot(name: string, nth: number) {
  await testScreenshotAfterClick("#buttons button >> nth=" + nth);
}

describe.skip("default", () => {
  beforeAll(async () => {
    await gotoPage("default");
  });
  afterAll(() => page.close());

  it.each(sampleNames.map((name, index) => [index, name]))(
    "%i-%s",
    (index, name) => testScreenshot(name, index)
  );
});

describe("bulma", () => {
  beforeAll(async () => {
    await gotoPage("bulma");
  });
  afterAll(() => page.close());

  it.each(sampleNames.map((name, index) => [index, name]))(
    "%i-%s",
    (index, name) => testScreenshot(name, index)
  );
});

describe("bulma:isSmall", () => {
  beforeAll(async () => {
    await gotoPage("bulma", "bulma-isSmall");
    await buttonClick("#isSmall");
  });
  afterAll(() => page.close());

  it.each(sampleNames.map((name, index) => [index, name]))(
    "%i-%s",
    (index, name) => testScreenshot(name, index)
  );

  it("customFilesInfo", async () => {
    await buttonClick("#customFilesInfo");
    await testScreenshotAfterClick("#buttons >> text=Files");
  });
});
