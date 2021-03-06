import React from "react"

function LibraryDisplay () {
   const albumLibrary = localStorage.getItem("albumNameKey")
   const albumLibArray = JSON.parse(albumLibrary) || []

   // When button is cliked remove item from local stroage 
   function handleClick(e) {
       let albumId = e.target.parentNode.id
       albumLibArray.map(album => {
           if (albumId === album[2]) {
               let albumIndex = albumLibArray.indexOf(album)
               albumLibArray.splice(albumIndex, 1)
               localStorage.setItem("albumNameKey", JSON.stringify(albumLibArray))
               alert(`${album[0]} removed from your library.`)
               window.location.reload()
           }
           return (
              <h1>{null}</h1>
           )
       })
   }

    

    //Display all of the albums inside the library
    if (albumLibArray.length === 0) {

        return (
            <div>
               <h1 className="lib-title">Library</h1>
                <h1 className="empty">Nothing in your library.</h1>
            </div>
        )
    }else {
        return (
           <div>
               <h1 className="lib-title">Library</h1>
                <div className="library">
                    {albumLibArray.map(album => (
                        <div className="album" id={album[2]} key={album[2]}>
                            <img className="libraryImg" src={album[4]} alt="Album cover"/>
                            <h2>{album[0]} by {album[1]}</h2>  
                            <a href={album[3]} className="albumLink">Listen Now</a>
                            <button className="btn remove" onClick={handleClick}>Remove from Library</button>
                    </div>

                    ))}
                    
                </div>
           </div>
        )
    }    
}


export default LibraryDisplay