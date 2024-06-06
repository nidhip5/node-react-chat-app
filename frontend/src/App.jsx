import { useState } from "react";
import AuthPage from "./AuthPage";
import ChatPage from "./ChatPage";
import "./App.css";

function App() {
  const [user, setUser] = useState();
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatPage user={user} />;
  }
}

export default App;
