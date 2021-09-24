import React from "react"
import Image from "./Img/DefaultIMG.JPG"
import LibraryDisplay from "./Library"

// Album information Component 
function AlbumDisplay({albumInfo}) {  
    const imageUrl= Object.values(albumInfo.image[5])

   function addToLibrary() {
    // localStorage.clear()

    // Add to library and save to local storage 
    let albumLibrary = JSON.parse(localStorage.getItem("albumNameKey")) || []
    
  

    if (albumLibrary.length < 1) {
        console.log("Yes it is empty")
        albumLibrary.push([albumInfo.name, albumInfo.artist, albumInfo.mbid, albumInfo.url, imageUrl[1] || Image])
        alert("Added to your library")
        localStorage.setItem("albumNameKey", JSON.stringify(albumLibrary))
        window.location.reload()
        return
    }
     
    let doesntExistYet = 0

    console.log (albumLibrary.length)
    for (let i = 0; i < albumLibrary.length; i++)  {
        if (albumLibrary[i][2] === albumInfo.mbid) {
            console.log("ewww")
            alert("No stop")
            window.location.reload()
            doesntExistYet = 0
            break
        } else (
            doesntExistYet += 1
        )
        console.log(doesntExistYet)
    }

    if (doesntExistYet < albumLibrary.length) {
        console.log("Not ye")
        
    } else {
        albumLibrary.push([albumInfo.name, albumInfo.artist, albumInfo.mbid, albumInfo.url, imageUrl[1] || Image])
        doesntExistYet = false 
        alert("Added to your library")
        window.location.reload()
    }


    

    // albumLibrary.push([albumInfo.name, albumInfo.artist, albumInfo.mbid, albumInfo.url, imageUrl[1] || Image])
    

    // albumLibrary.map(album => {
    //     if (album[2] === albumInfo.mbid ) {
    //         alert("Album already exists in library.")
    //         window.location.reload()
    //     } else {
    //         albumLibrary.push([albumInfo.name, albumInfo.artist, albumInfo.mbid, albumInfo.url, imageUrl[1] || Image])
    //     } 
    //     return 
    // })


//         albumLibrary.push([albumInfo.name, albumInfo.artist, albumInfo.mbid, albumInfo.url, imageUrl[1] || Image])
    localStorage.setItem("albumNameKey", JSON.stringify(albumLibrary))
    // alert(`${albumInfo.name} by ${albumInfo.artist} has been added to your library.`)

    console.log(albumLibrary)

    
    
   } 

   

   <LibraryDisplay/>

       return (
           <div className="albumInfo">
               <img src={imageUrl[1] || Image} alt="Album Cover"/>
               <h1 className="albumName">{albumInfo.name} by {albumInfo.artist}</h1>
               <a href={`${albumInfo.url}`} className="albumLink">Listen Now</a>
               <button className="btn" onClick={addToLibrary}>Add to Library</button>
           </div>   
       )  
}

export default AlbumDisplay