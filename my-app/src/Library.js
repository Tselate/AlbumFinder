import React from "react"

function LibraryDisplay () {
   const albumLibrary = localStorage.getItem("albumNameKey")
   const albumLibArray = JSON.parse(albumLibrary)

   function handleClick(e) {
       let albumId = e.target.parentNode.id
       albumLibArray.map(album => {
           if (albumId === album[2]) {
               console.log(album)
               let albumIndex = albumLibArray.indexOf(album)
               albumLibArray.splice(albumIndex, 1)
               console.log(albumLibArray)
               localStorage.setItem("albumNameKey", JSON.stringify(albumLibArray))
               alert("Removed from Library")
               console.log(albumLibArray)
               window.location.reload()
           }
           return (
              <h1>{null}</h1>
           )
       })
   }

 
    if (albumLibArray.length === 0) {
        return <h1>Nothing in your library.</h1>
    }else {
        return (
            <div id="Yeslo" className="library">
              
                 {albumLibArray.map(album => (
                    <div id={album[2]} key={album[2]}>
                        <img src={album[4]} alt="Album cover"/>
                        <h2>{album[0]} by {album[1]}</h2>  
                        <a href={album[3]} className="albumLink">Listen Now</a>
                        <button onClick={handleClick}>Remove from Library</button>
                   </div>
    
                 ))}
                
            </div>
        )

    }

    
}


export default LibraryDisplay
