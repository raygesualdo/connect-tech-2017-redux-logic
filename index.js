import React from 'react'
import { render } from 'react-dom'

import Presentation from './presentation'

render(<Presentation />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./presentation', () => {
    render(<Presentation />, document.getElementById('root'))
  });
}
