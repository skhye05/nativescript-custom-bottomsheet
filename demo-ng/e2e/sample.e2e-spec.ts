import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { assert } from "chai";

describe("sample scenario", () => {
    const defaultWaitTime = 5000;
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
    });

    after(async () => {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    it("should Make a call", async () => {
        await showBottomsheet(driver);

        await selectItem(driver, 'Make a call');

        await hasPassed(driver, 'Make a call');
    });

    it("should Send a text message", async () => {
        await showBottomsheet(driver);

        await selectItem(driver, 'Send a text message');

        await hasPassed(driver, 'Send a text message');
    });

    it("should Send an email", async () => {
        await showBottomsheet(driver);

        await selectItem(driver, 'Send an email');

        await hasPassed(driver, 'Send an email');
    });

    it("should Leave a comment", async () => {
        await showBottomsheet(driver);

        await selectItem(driver, 'Leave a comment');

        await hasPassed(driver, 'Leave a comment');
    });

    it("should Delete contact", async () => {
        await showBottomsheet(driver);

        await selectItem(driver, 'Delete contact');

        await hasPassed(driver, 'Delete contact');
    });

});

const showBottomsheet = async (driver) => {
    const btnTap = await driver.findElementByAutomationText("show");
    await btnTap.click();
};

const closeAlert = async (driver) => {
    const ok = await driver.findElementByAutomationText("ok");
    await ok.click();
};

const selectItem = async (driver, text) => {
    const call = await driver.findElementByText(text);
    await call.click();
};

const hasPassed = async (driver, text) => {
    const message = `Action Selected => "${text}"`;
    const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
    assert.equal(await lblMessage.text(), message);
    await closeAlert(driver);
};