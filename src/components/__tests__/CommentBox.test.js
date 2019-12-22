import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea you can type in', () => {
  wrapped
    .find('textarea')
    //simulate change event
    .simulate('change', { target: { value: 'new comment' } })
    //simulate state update
    .update();
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('submits a comment and clears the textarea', () => {
  //enter some text into the textarea
  wrapped
    .find('textarea')
    .simulate('change', { target: { value: 'new comment' } })
    .update();
  //fire the submit event and assert the expected value
  wrapped
    .find('form')
    .simulate('submit')
    .update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
