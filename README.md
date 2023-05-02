

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

## Usage

To use the web page, simply open the `index.html` file in your web browser. The page will load with the first option in each dropdown menu pre-selected.

To change your selection, simply click on the desired option in each dropdown menu. The selected options will be displayed on the screen.

## Code

The web page is built using HTML, CSS, and JavaScript. The JavaScript code makes use of the `fetch` API to retrieve data from an external API and populate the dropdown menus.

The code is organized into three functions:

### `getToken()`

This function retrieves an access token from an external API, which is required for all subsequent API requests.

### `getData(endpoint)`

This function retrieves data from an external API, using the access token retrieved by `getToken()`. The `endpoint` parameter specifies the API endpoint to retrieve data from (e.g. `countries`, `states/India`, `cities/Karnataka`).

### `showData()`

This function populates the dropdown menus with data retrieved from the external API, and displays the selected options on the screen. It also sets up event listeners to handle changes to the selected options.

## Dependencies

This web page relies on two external dependencies:

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API): used to retrieve data from the external API.
- [Universal Tutorial API](https://www.universal-tutorial.com/rest-apis/): provides the data for the dropdown menus.

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
