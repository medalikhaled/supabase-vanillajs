// Initializing the Supabase Client
const { createClient } = supabase;

const supabaseUrl = "https://eudmulxbfqijgvqaaetg.supabase.co";

const supabaseKey =
  process.env.SUPABASE_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1ZG11bHhiZnFpamd2cWFhZXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI3NzY4OTIsImV4cCI6MTk4ODM1Mjg5Mn0.3H-hxmetz1a02eaacIL2GZr5cgbZdYX6_9MvK2u940E";

const supaClient = createClient(supabaseUrl, supabaseKey);

///HTML elements
const loginButton = document.getElementById("signInBtn");

const logoutButton = document.getElementById("signOutBtn");

// Event Listners

loginButton.addEventListener("click", () => {
  console.log(supaClient.auth.signInWithOAuth());
});
