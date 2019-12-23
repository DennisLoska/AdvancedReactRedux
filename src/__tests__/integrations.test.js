import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let wrapped;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Comment 1' }, { name: 'Comment 2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it('can fetch a list of comments and display them', done => {
  //Attempt to render the entire app
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //find the button to fetch the comments
  wrapped.find('.fetch-comments').simulate('click');
  //Add delay to wait for moxios to kick in
  moxios.wait(() => {
    wrapped.update();
    //Expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(2);
    done();
  }, 100);
});
