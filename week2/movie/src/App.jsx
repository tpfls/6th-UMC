import React from 'react'
import ItemMovie from './components/listitem/item-movie'
import ListMovie from './components/list/list-movie'
import { MovieData } from './util/movie'

function App() {
  console.log(MovieData);
  

  return (
    <>
      <ListMovie movie2 = {MovieData}/>
    </>
  )
}

export default App
