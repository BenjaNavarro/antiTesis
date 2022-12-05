import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
// import { ContextProvider } from "./SocketContext";
import App from "./App";
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	// <React.StrictMode>
		<BrowserRouter>
      		<App />
			{/* <ContextProvider>				
			</ContextProvider> */}
		</BrowserRouter>
	// </React.StrictMode>
);

// ReactDOM.render(<App />,document.getElementById('root'));