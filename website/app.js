/* Global Variables */
const BASE_URL =
  "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";

// Personal API Key for OpenWeatherMap API
const API_KEY = "27295fbda349fc7611b10b1617a5fc48";

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", performAction);

// Create a new date instance dynamically with JS
function getDate() {
  const d = new Date();
  const newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
  return newDate;
}

/* Function called by event listener */
function performAction(e) {
  const zip = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  getAPIData(BASE_URL, API_KEY, zip, feelings)
    // Post to data
    .then((data) => {
      console.log(`performAction: data=`);
      console.log(data);
      postData("/addData", data);
    })
    // Retrieve data and update DOM elements with content
    .then(() => {
      updateUI();
    });
}

/* Function to GET Web API Data*/

const getAPIData = async (BASE_URL, key, zip, feelings) => {
  // Assume USA zip code.
  // Wait for API call to return.
  const res = await fetch(`${BASE_URL}${zip},us&appid=${key}`);
  try {
    const data = await res.json();
    console.log(data);
    console.log({
      temperature: data.main.temp,
      date: getDate(),
      userResponse: feelings,
    });
    return {
      temperature: data.main.temp,
      date: getDate(),
      userResponse: feelings,
    };
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to POST data */

const postData = async (url = "", data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await res.json();
    console.log("postData newData:");
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to GET Project Data */

const getData = async (url = "") => {
  const res = await fetch(url);
  try {
    const data = await res.json();
    console.log("getData");
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const updateUI = async () => {
  const data = await getData("/data");
  try {
    console.log("updateUI");
    console.log(data);
    // Update text of UI elements:
    document.getElementById("date").innerText = `Date: ${data.date}`;
    document.getElementById(
      "temp"
    ).innerText = `Temperature: ${data.temperature} C`;
    document.getElementById(
      "content"
    ).innerText = `Feelings: ${data.userResponse}`;
  } catch (error) {
    console.log("error", error);
  }
};
