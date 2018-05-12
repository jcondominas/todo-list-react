import React from 'react';
import ReactDOM from 'react-dom';
import {create} from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import {createGenerateClassName, jssPreset} from "material-ui/styles";
import registerServiceWorker from './registerServiceWorker';
import App from "./App";


const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

ReactDOM.render(
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <App/>
    </JssProvider>, document.getElementById('root'));
registerServiceWorker();

