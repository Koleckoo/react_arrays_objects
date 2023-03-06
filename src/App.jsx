import { useState } from 'react'
import books from './books.json'
import './App.css'
import { Book } from './components/Book/Book'
import { Checkbox } from './components/Checkbox/Checkbox'

function App() {
  


  return (
    <div className="App">
      <h1>Books we have: </h1>
      <ul>
      {books.map((book) => <div><Book key={book.id} {...book}/> <Checkbox/></div>)}
      </ul>
    </div>
  )
}

export default App
