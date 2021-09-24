import React, {useState} from "react"
import AlbumDisplay from "./AlbumDisplay"


function FindAlbum () {
    const [albumN, setAlbumN] = useState("")
    const [artistN, setArtistN] = useState("")
    const [albumInfo, setAlbumInfor] = useState("")


    // Api call to fetch Album Data
    const searchMusic = async (e) => {
        e.preventDefault()

        const url = ` https://ws.audioscrobbler.com/2.0?method=album.getinfo&api_key=a03decaea0227972bf104eea6a6ebdb8&artist=${artistN}&album=${albumN}&format=json`

        try {
            const res = await fetch (url, {headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                 "Access-Control-Allow-Credentials" : "true",
                "Access-Control-Allow-Methods": "GET, POST, PUT",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
              }})
            const data = await res.json()
            setAlbumInfor(data)
        }catch(err) {
            alert("Album not found. Please make surke you are entering the correct album information.")
            window.location.reload()
        }

        // Reset vlaue of forms 
        setAlbumN("")
        setArtistN("") 
    }
    
    // Turned the returned api data object into an array
    const albumInfoArray = Object.values(albumInfo)

    return (
        <div className="container">
            <form className="albumForm" onSubmit={searchMusic}> 
                <label className="inputLabel">Album:</label>
                <input 
                    type="text" 
                    name="albumN"
                    placeholder="Album Name"
                    value={albumN}
                    onChange= {(e) => setAlbumN(e.target.value)}
                /> 

                <br/>

                <label className="inputLabel">Artist:</label>
                <input 
                    type="text" 
                    name="artistN"
                    placeholder="Artist Name"
                    value={artistN}
                    onChange= {(e) => setArtistN(e.target.value)}
                />  

                <br/>
                
                <button className="btn" type="submit">Search</button>
            </form>

            {/* Display album info */}
            <div className="albumInfoContainer">
                {albumInfoArray.map(albumInfo => (
                    <AlbumDisplay albumInfo={albumInfo} key={albumInfo.mbid}/>
                ))}
            </div>
        </div>
    )
}

export default FindAlbum