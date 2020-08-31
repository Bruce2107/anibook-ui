# Anibook UI

> UI Components using React

## [Demo](https://anibook-ui.vercel.app)

## Using as lib

### Install

Fist you need to install it using NPM or Yarn.

#### Yarn

```sh
yarn add anibook-ui
```

### Most basic example

```js
import React from 'react';
import ReactDOM from 'react-dom';

import { Card } from 'anibook-ui';

function App() {
  return (
    <Card
      backgroundColor="#333"
      image={
        <img alt="High Score Girl" src="https://i.ibb.co/jR4rRqK/oono.png" />
      }
      text={<p>High Score Girl</p>}
      downColorLayer="#00d2d3"
      upColorLayer="#2e86de"
    />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
