import ReactDOM from 'react-dom';

// COMPONENETS
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";

ReactDOM.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>,
  document.getElementById('root')
);