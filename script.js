// This function handles the credential response from Google Sign-In
function handleCredentialResponse(response) {
  // Google will return the user data here
  console.log("Google Sign-In Response: ", response);
  // You can process the response (e.g., send it to your server or display user details)
}

// Initialize the Google Sign-In
window.onload = function () {
  google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID",  // Replace with your actual client ID
      callback: handleCredentialResponse
  });

  // Show the Google Sign-In prompt
  google.accounts.id.prompt();
};
