# Weather Journal

Weather Journal is a web app that takes a user journal input and dynamically updates the page to display the entry.

## Usage

Simply enter your zip code, and description of your feelings in the provided text boxes and click the Generate button.

## Project Details

The server is built with Node.js providing a couple HTTP routes for the client side Javascript app to GET and POST data.
The client side app also makes an API call to OpenWeatherMap to retrieve zip code temperature readings. 
When the Generate button is clicked, the app makes a series of asynchronous JavaScript function calls to:

- GET data from OpenWeatherMap
- POST results to back end server
- GET latest entry from server
- Dynamically updates UI page via DOM selectors 

### Back End

- Node.js, express, body-parser, cors

### Front End

- HTML, CSS, JavaScript

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

