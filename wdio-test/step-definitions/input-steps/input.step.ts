import { Given, When, Then } from '@wdio/cucumber-framework';
import InputFullNamePage from '../../page-objects/input-pages/input.page.js';

//1. Input Full Name Scenario
When(/^I input first name (.*) and last name (.*) in the text field$/, async (firstName,lastName) => {
	await InputFullNamePage.inputFullName(firstName,lastName);
});

Then(/^The first input field text should be equal to the combination of (.*) and (.*)$/, async (firstName,lastName) => {
	await InputFullNamePage.verifyFullName(firstName,lastName);
});

//2. Append Text Scenario
When(/^I append the text: `(.*)` inside the input field and press tab$/, async(append) => {
	await InputFullNamePage.appendNewText(append);
});

Then(/^The second input field text should include the appended text: `(.*)`$/, async (append) => {
	await InputFullNamePage.verifyNewText(append);
});

//3. Get Value Scenario
Then(/^The third input field text should include the text: `(.*)`$/, async (text) => {
	await InputFullNamePage.verifyInputText(text);
});