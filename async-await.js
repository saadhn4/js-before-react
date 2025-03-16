import axios from "axios";
import c from "config";
/*
Write an async function checkWeather that fetches data from the following free API:

📌 URL: https://jsonplaceholder.typicode.com/posts/1
*/

async function apiCall() {
  let apiUrl = "https://jsonplaceholder.typicode.com/posts";
  let response = await axios.get(apiUrl);
  response.data.forEach((x) => {
    console.log(`ID: ${x.id} Title: ${x.title}`);
  });
}

apiCall();
