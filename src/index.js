import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import './index.css';
import App from './App';
import {Provider} from './context/context';


ReactDOM.render(

  <React.StrictMode>
    <SpeechProvider appId='41764d06-5a25-4134-939b-fc29d08b20a5' language="en-US">
    <Provider>
    <App />
    </Provider>
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

