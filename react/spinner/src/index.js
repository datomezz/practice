import ReactDOM from 'react-dom';

// CONTEXT
import {Provider} from "./components/app-context";

// COMPONENETS
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";

// SERVICES
import SpinnerService from "./services/SpinnerService";

const spinnerService = new SpinnerService();

ReactDOM.render(
  <ErrorBoundry>
    <Provider value={spinnerService} >
      <App />
    </Provider>
  </ErrorBoundry>,
  document.getElementById('root')
);