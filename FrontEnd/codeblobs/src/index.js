import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Monda:400,700', 'Montserrat:400,300']
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
