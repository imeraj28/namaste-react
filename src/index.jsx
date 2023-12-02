import { StrictMode } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import './index.css';

const root = document.getElementById('root')
const reactRootElement = ReactDOM.createRoot(root)

reactRootElement.render(
    <StrictMode>
        <App />
    </StrictMode>
)