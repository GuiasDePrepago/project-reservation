import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css'
import {RoomProvider} from './context'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <RoomProvider>
     <App />
  </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
