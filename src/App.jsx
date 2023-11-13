import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated ? (
        <div>
          <Profile />
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}

      <h1>Auth0 Demo</h1>
      <p>It is logging in and also out</p>

      {user?.email === "hellomikefoster@gmail.com" && (
        <a href="https://google.com">You are logged in so go here now</a>
      )}
    </>
  );
}

export default App;
