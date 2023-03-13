import { Given, When, Then } from '@wdio/cucumber-framework';
import ButtonPage from '../../page-objects/button-pages/button.page.js';

//1. Click Home Button
When(/^I click home button inside button page$/, async () => {
	await ButtonPage.clickHomeButton();
});

When(/^I go back to the previous page using driver navigation$/, async () => {
	await browser.back();
});

Then(/^I should be inside the button page$/, async () => {
	await ButtonPage.verifyButtonPage();
});

//2. Get Coordinates of Button
Then(/^I should be able to get the coordinates of the second button$/, async () => {
	await ButtonPage.getButtonCoordinates();
});

//3. Get Color of Button
Then(/^I should be able to get the color of the third button$/, async () => {
	await ButtonPage.getButtonColor();
});


