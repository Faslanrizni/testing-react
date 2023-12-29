import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import {RoomProvider} from './context'
ReactDOM.createRoot(document.getElementById('root')).render(
    <RoomProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </RoomProvider>
    // document.getElementById('root')

);