import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Root from 'pages/routes';

const App = () => {
  return (
    <Provider store={store}> 
		<div>  
			<Root />
		</div>
    </Provider>
  );
};

export default App;
