# i18n Library for Multi-language Support

## Introduction

This library provides a simple and effective solution for integrating internationalization (i18n) support into your React applications. It allows you to easily manage and display content in different languages, enhancing the user experience for a global audience.

## Getting Started

### Installation

npm install my-i18n-library

## Usage

1.  **Initialize the i18n Library:**

    Import the library and create an instance of the `I18n` class.

    ```javascript
    import { i18n } from 'my-i18n-library';

    // Initialize the library
    i18n.setLanguage('en'); // Set the default language
    ```

## Translate Your Content:

Use the t method to translate keys in your application.

```javascript
const welcomeMessage = i18n.t('homepage.welcome');
console.log(welcomeMessage); // Outputs the translated welcome message
```

## Change Language Dynamically:

Update the language dynamically with the setLanguage method.

```javascript
i18n.setLanguage('es'); // Switch to Spanish
```

## Available Scripts

In the project directory, you can run the following npm scripts:

- npm start: Runs the app in development mode.
- npm test: Launches the test runner in interactive watch mode.
- npm run build: Builds the app for production.

## Contribution

Feel free to contribute to the development of this library by submitting issues or pull requests on the GitHub repository.

Thank you for choosing our i18n library for your internationalization needs!

## Author Information

- **Author:** Francisco Harris
- **Email:** fharrisb@gmail.com
