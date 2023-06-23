/**
 * @jest-environment node
 */

import puppeteer from "puppeteer";
import childProcess from "child_process";

jest.setTimeout(15000);

describe("the popover should toggle when the button is clicked", () => {
  let browser = null;
  let page = null;
  let server = null;

  beforeAll(async () => {
    server = childProcess.fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", () => {
        reject();
      });
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });
    browser = await puppeteer.launch({
     // headless: false,
     // devtools: false,
     // slowMo: 100,
    });
    page = await browser.newPage();
  });

  test("popover toggle", async () => {
    await page.goto("http://localhost:8080");
    const button = await page.$(".button");
    await button.click();
    const popover = await page.waitForSelector(".popover");

    const popoverActive = await popover.evaluate((el) =>
      el.getAttribute("class")
    );
    expect(popoverActive.includes("active")).toBe(true);

    await button.click();
    const popoverNotActive = await popover.evaluate((el) =>
      el.getAttribute("class")
    );

    expect(popoverNotActive.includes("active")).toBe(false);
  });

  test("popover close when not button click", async () => {
    await page.goto("http://localhost:8080");
    const button = await page.$(".button");
    await button.click();
    const popover = await page.waitForSelector(".popover");

    const popoverActive = await popover.evaluate((el) =>
      el.getAttribute("class")
    );

    page.on("click", async (e) => {
      let popoverNotActive;
      if (e.target !== button && popoverActive.includes("active")) {
        popoverNotActive = await popover.evaluate((el) =>
          el.getAttribute("class")
        );
      }
      expect(popoverNotActive.includes("active")).toBe(false);
    });
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
});
