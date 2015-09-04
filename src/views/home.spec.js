import React from 'react/addons';
import HomeView from './home';
import { Provider } from 'react-redux';
import store from 'stores';

describe('(View) Home', function () {

  it('Should have a test that works with Chai expectations.', function () {
    
    var TestUtils = React.addons.TestUtils;
    
    var homeView = TestUtils.renderIntoDocument(
      <Provider store={store}>
        {() => <HomeView />}
      </Provider>
    );

    var Toggler = TestUtils.findRenderedDOMComponentWithClass(homeView, 'Toggler');

    expect(Toggler.toBeDefined());
  });
});