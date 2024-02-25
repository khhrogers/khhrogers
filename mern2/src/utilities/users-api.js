// users-api.js
//does communication with the backend 
// This is the base path of the Express route we'll define
const BASE_URL = '/api/users'; // this is the prefeix of our url, thats how we access our data from the backend(api)
// anything captiliaze like the bas is indicator it will be a constant 
export async function signUp(userData) {
    console.log('we are using something',userData)
    // this userdata came from our component that got passed down 
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData)
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    return res.json();
  } else {
    throw new Error('Invalid Sign Up');
  }
}