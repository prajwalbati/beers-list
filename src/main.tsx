import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import reduxStore from './redux/redux.store';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
)