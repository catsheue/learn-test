import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserBar from "./UserBar";
import Switcher from "./Switcher";

test('renders username', () => {
  const { getByText } = render(<UserBar userName="treeBirdBird" />);
  const nameSection = getByText(/treeBirdBird/);
  expect(nameSection).toBeTruthy();
});

test('username correct', async () => {
  const data = await fetch('https://api.github.com/users/catsheue');
  const result = await data.json();
  const name = result.name;


  expect(name).toEqual('Luna Goodnight');
  const { getByText } = render(<UserBar userName={name} />);
  const nameSection = getByText(/Luna Goodnight/);
  expect(nameSection).toBeTruthy();
})

it('should switch class', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(<Switcher onCall={onClick}  />)
  fireEvent.click(getByTestId('switcher-luna'));
  expect(onClick).toHaveBeenCalled();
});

test('map calls its argument with a non-null argument', () => {
  const mock = jest.fn();
  [1].map(x => mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});


// describe('async get username', () => {
//   it('should load user data', () => {
//     return github.getUser('catsheue').then(
//       data => {
//         expect(data).toBeValid();
//         expect(data.entity.name).toEqual('Luna Goodnight');
//       }
//     )
//   })
// })
