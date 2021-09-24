import React from "react"
import Image from "./Img/DefaultIMG.JPG"
import LibraryDisplay from "./Library"


// Album information Component 
function AlbumDisplay({albumInfo}) {  
   const imageUrl= Object.values(albumInfo.image[5])

// Add album to the library    
   function addToLibrary() {
    // See whats in the local storage 
    let albumLibrary = JSON.parse(localStorage.getItem("albumNameKey")) || []
    
    // If library is empty just add the album
    if (albumLibrary.length < 1) {
        albumLibrary.push([albumInfo.name, albumInfo.artist, albumInfo.mbid, albumInfo.url, imageUrl[1] || Image])
        alert(`${albumInfo.name} added to your library`)
        localStorage.setItem("albumNameKey", JSON.stringify(albumLibrary))
        window.location.reload()
        return
    }
     
    let doesntExistYet = 0

    console.log (albumLibrary.length)
    for (let i = 0; i < albumLibrary.length; i++)  {
        if (albumLibrary[i][2] === albumInfo.mbid) {
            alert(`${albumInfo.name} already saved to your libray.`)
            window.location.reload()
            doesntExistYet = 0
            break
        } else (
            doesntExistYet += 1
        )
    }

    if (doesntExistYet < albumLibrary.length) {
        return  
    } else {
        albumLibrary.push([albumInfo.name, albumInfo.artist, albumInfo.mbid, albumInfo.url, imageUrl[1] || Image])
        doesntExistYet = false 
        alert(`${albumInfo.name} added to your library`)
        window.location.reload()
    }

    // Set added album to local storage 
    localStorage.setItem("albumNameKey", JSON.stringify(albumLibrary))
   } 

   
   <LibraryDisplay/>

   //Display searched album information
       return (
           <div className="albumInfo">
               <img className="displayImg" src={imageUrl[1] || Image} alt="Album Cover"/>
               <h1 className="albumName">{albumInfo.name} by {albumInfo.artist}</h1>
               <a href={`${albumInfo.url}`} className="albumLink">Listen Now</a>
               <button className="btn" onClick={addToLibrary}>Add to Library</button>
           </div>   
       )  
}

export default AlbumDisplay