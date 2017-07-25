import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB-P6kXZgfKpijCcL0evKCQAs-8Mc5f4Vw'

// Creating a new component that will produce HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take the components generated HTML and render it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
