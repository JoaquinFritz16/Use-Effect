import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import UserList from "./Components/UserList.jsx";
import Excuser from "./Components/Excuser.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<UserList></UserList>
		<Excuser></Excuser>
	</StrictMode>
);
