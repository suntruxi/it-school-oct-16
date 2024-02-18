// fetchJoke();

// async function fetchJoke() {
//   const response = await fetch("https://api.chucknorris.io/jokes/random");
//   console.log(response);
// }

async function fetchChuckNorrisRandomJoke() {
  const apiUrl = "https://api.chucknorris.io/jokes/random";

  try {
    const response = await fetch(apiUrl);

    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Access specific properties from the data
    const jokeValue = data.value;
    const jokeIconUrl = data.icon_url;

    // You can use the jokeValue and jokeIconUrl in your application
    console.log("Chuck Norris Joke:", jokeValue);
    console.log("Chuck Norris Icon URL:", jokeIconUrl);
  } catch (error) {
    // Handle errors in the fetch or JSON parsing process
    console.error("Fetch error:", error);
  }
}

// Call the function to fetch a random Chuck Norris joke
fetchChuckNorrisRandomJoke();
