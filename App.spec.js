import React from 'react';
import { View, Button } from 'react-native';
import renderer from 'react-test-renderer';

import App from './App';

describe('App component', () => {
  it('renders View', () => {
    const component = renderer.create(<App />);
    const instance = component.root;
    expect(instance.findByType(View)).toBeTruthy();
  });

  it('within View', () => {
    const component = renderer.create(<App />);
    const instance = component.root;
    expect(instance.findByType(Button).props.title).toBe('Ajouter un article');
  });
});
