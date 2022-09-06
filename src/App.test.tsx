import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SamuraiJSApp from "./App";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SamuraiJSApp />, div);
});