import React, { useState } from 'react'
import SearchInput from './components/SearchInput'


function App() {
  /* TODO: With the help of "useState", you should connect the "SearchInput" field */
  const [value, setValue] = useState('')
  return (
    <grid>
      <h1>Juliette's movies</h1>
      <SearchInput
        value={value}
        onChange={ event => setValue(event.target.value)}
      />
      <p>{value}</p>
    </grid>
  )
};

export default App;
