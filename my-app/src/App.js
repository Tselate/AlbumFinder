import React from "react"
import "./App.css"
import FindAlbum from "./FindAlbum"
import Header from "./Header"
import LibraryDisplay from "./Library"

function App() {
  return (
    <div>
      <Header/>
      <FindAlbum/>
      <LibraryDisplay/>
    </div>
  )
}

export default App;
