# Assignment

## Duplicate character remover

### Task instructions

Develop an app in reactjs, with two screens.

#### Screen 1:

- Provide an input field and a button with text 'Submit'.
- User should be able to put in any value in the input field. Clicking on the button should redirect user to screen 2.
- If the input field is empty or has only space characters, the user should be shown an alert asking them to provide a non-empty value. In this scenario, we should not redirect the user to screen 2.

#### Screen 2:

- Let's iterate over each character of the string and render them as a card on the UI. Each card should have the character, and a delete icon on top. Clicking on the delete icon should delete all duplicate instances of the chosen character in the string. We should make sure that only the clicked instance of the character remains on the screen.
- Cards for the same characters should have the same background color.
- If there are no more characters with greater than 1 appearance in the string, we shall render a success header.
- We should also show the original string and the new resultant string.
- We should provide a back button to go back to screen 1.
- If the user goes back to screen 1, the input field should be cleared/empty.

### Task Expectations

- The user shouldn't be allowed to go to screen 2 without providing a non-empty value in the input field on screen 1.
- On Screen 2, clicking on a card delete icon should delete all other appearance of the character in the string.
- The cards shown on the screen should also be updated.
  - Let's say if the original string is `aabcaccda`. Clicking on the first `a` should leave the string as `abcccd`.
  - Let's say the original string is `baebdeb`. Clicking on the character `b` at index 3 (0 index), should result in `aebde`.
- Once all the duplicate appearances in the string are removed, the user should see a success header with the original string & the resultant string.

# Duplicate character remover

# Description

This app, can identify all duplicate characters from a string given by user, including spaces if the string have two words.
Then the app gives the user a chance to remove some characters, the user clicks on one of the duplicate characters, and only that character kept in the string, the characters that were similar to the one the user clicked on are removed.

# Installation

To install and run this project, please follow these steps:

1. Clone this repository to your local machine usign this command:

```bash
git clone https://github.com/JuanObandoDev/Octernship-technical-test.git
```

2. Install the required dependecies by running the following command in your terminal:

```bash
npm install
```

3. Start the development server by running the following command:

```bash
npm start
```

4. Open your web browser and navigate to http://localhost:3000 to view the project

# Usage

The use of the app is simple, first a screen is shown where you will find a text field and a "submit" button, above this text field there will be buttons with which you can navigate between the first screen and the second, in the text field it is validated that values ​​other than empty or only blank spaces are entered, if so, the second screen is rendered where it is allowed to eliminate certain duplicate characters, except for the one that has been clicked, once all the duplicate characters have been eliminated a header will be delivered with the success message.
