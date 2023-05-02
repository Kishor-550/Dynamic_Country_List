

# Country List Web Application

This is a simple web application that allows users to select a country, state, and district from a list of options. The application uses the Universal Tutorial API to fetch data about countries, states, and districts. The user's selection is displayed in real-time on the web page.

## Features

- The user can select a country from a drop-down list.
- Upon selecting a country, the state list is populated with options for the selected country.
- Upon selecting a state, the district list is populated with options for the selected state.
- The user's selection is displayed on the web page in real-time.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation and Usage

To run the application, simply open the `index.html` file in your web browser.

## API Key

The application uses the Universal Tutorial API to fetch data about countries, states, and districts. To use the API, you need to obtain an API key by registering at the [Universal Tutorial website](https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city).

Once you have obtained your API key, replace the dummy key in the `main.js` file with your own key:

```
headers: {
    Authorization: "Bearer YOUR_API_KEY_HERE",
    Accept: "application/json",
},
```

## Credits

The application was developed by [Kishor](https://github.com/Kishor-550). The application uses data from the [Universal Tutorial API](https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city).
