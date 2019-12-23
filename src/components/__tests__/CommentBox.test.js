import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    //enter some text into the textarea
    wrapped
      .find('textarea')
      //simulate change event
      .simulate('change', { target: { value: 'new comment' } })
      //simulate state update
      .update();
  });

  it('has a textarea you can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('submits a comment and clears the textarea', () => {
    //fire the submit event and assert the expected value
    wrapped
      .find('form')
      .simulate('submit')
      .update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
