import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Details from './components/Details';
import Edit from './components/Edit';
import Home from './components/Home';
import Login from './components/Login';
import Navbaar from './components/Navbaar';
import Register from './components/Register';

test('Front-end Login render test', () => {
  render(<MemoryRouter><Login /></MemoryRouter>);
  const linkElement = screen.getByTestId("loginid");
  expect(linkElement).toBeInTheDocument();
});

test('Front-end Home render test', () => {
  render(<MemoryRouter><Home /></MemoryRouter>);
  const linkElement = screen.getByTestId("homeid");
  expect(linkElement).toBeInTheDocument();
});

test('Front-end Home render test', () => {
  render(<MemoryRouter><Home /></MemoryRouter>);
  const linkElement = screen.getByTestId("tableid");
  expect(linkElement).toBeInTheDocument();
});


test('Front-end Details render test', () => {
  render(<MemoryRouter><Details /></MemoryRouter>);
  const linkElement = screen.getByTestId("detailid");
  expect(linkElement).toBeInTheDocument();
});


test('Front-end Details render content test', () => {
  render(<MemoryRouter><Details /></MemoryRouter>);
  const linkElement = screen.getByTestId("contentid");
  expect(linkElement).toBeInTheDocument();
});

test('Front-end Edit render test', () => {
  render(<MemoryRouter><Edit /></MemoryRouter>);
  const linkElement = screen.getByTestId("editid");
  expect(linkElement).toBeInTheDocument();
});

test('Front-end Details render form test', () => {
  render(<MemoryRouter><Edit /></MemoryRouter>);
  const linkElement = screen.getByTestId("formid");
  expect(linkElement).toBeInTheDocument();
});

test('Front-end Navbar render test', () => {
  render(<MemoryRouter><Navbaar /></MemoryRouter>);
  const linkElement = screen.getByTestId("navbaarid");
  expect(linkElement).toBeInTheDocument();
});

test('Front-end Navbar render container test', () => {
  render(<MemoryRouter><Navbaar /></MemoryRouter>);
  const linkElement = screen.getByTestId("navbaarcontainerid");
  expect(linkElement).toBeInTheDocument();
});

test('Front-end Reister render container test', () => {
  render(<MemoryRouter><Register /></MemoryRouter>);
  const linkElement = screen.getByTestId("createcontainerid");
  expect(linkElement).toBeInTheDocument();
});

test('Front-end Navbar render container test', () => {
  render(<MemoryRouter><Register /></MemoryRouter>);
  const linkElement = screen.getByTestId("contentid");
  expect(linkElement).toBeInTheDocument();
});
