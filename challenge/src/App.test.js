import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './components/Display'
import Dashboard from './components/Dashboard'
import { render, fireEvent } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'

describe('<App />', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });



})


describe('<Display />', () => {

  it('renders without crashing', () => {
    render(<Display />)
  })




})

describe('<Dashboard />', () => {
  
  it('renders without crashing', () => {
    render(<Dashboard />)
  })

  it('Should throw a pitch', () => {
    const functionBoss = () => {
      console.log(1)
    }
    const { getByText } = render(<Dashboard functionBoss={functionBoss} />)

    const button = getByText(/throw/i)
    fireEvent.click(button)


  })

})