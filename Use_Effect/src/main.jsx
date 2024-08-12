import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import UserList from "./Components/UserList.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<UserList></UserList>
	</StrictMode>
);
