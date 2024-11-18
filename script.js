// This is your Google OAuth Client ID that you generated in the Google Console
const CLIENT_ID = '587236801612-gjlikb8519jiavu0rak7f4vhouohkrfi.apps.googleusercontent.com';  // Replace with your actual Client ID

// Initialize the Google Sign-In API
function initGoogleSignIn() {
  google.accounts.id.initialize({
    client_id: CLIENT_ID,
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("google-signin-button"),
    { theme: "outline", size: "large" }  // Customize the appearance if needed
  );
}

// Handle the response after successful login
function handleCredentialResponse(response) {
  // The response will contain the Google ID token
  const id_token = response.credential;
  
  // You can now use the id_token to make API requests or process the user's data
  console.log('ID Token:', id_token);
  
  // Display a welcome message with the user's Google info
  // For example, use Google People API to fetch user data (name, email, etc.)
  fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + id_token)
    .then(response => response.json())
    .then(data => {
      console.log(data);  // This will contain user info like name, email, etc.
      alert('Logged in as: ' + data.name);
    })
    .catch(error => {
      console.error('Error fetching user info:', error);
    });
}

// Call the initialization function when the page loads
window.onload = function () {
  initGoogleSignIn();
};
