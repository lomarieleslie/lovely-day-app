import { useState, useEffect } from "react";
import axios from "axios";


// Creating variable to hold Inspirational Image
const InspirationalPhoto = () => {
const [photo, setPhoto] = useState([]);

// API call to unsplash to get random inspirational image
  useEffect(() => {
    axios({
      url: "https://api.unsplash.com/photos/random",
      method: "GET",
      dataResponse: 'json',
      params: {
        query: 'motivational-quotes',
        collections: '9497819',
        per_page: 50,
        client_id: "W57PpYfHVnQtbqOYYceME-F10pLEm_rvyHvhyhwC1a8"
      } 
    }).then((response) => {
     setPhoto(response.data.urls.small);

    }).catch((error) => {
      console.log(error);
    })


  },[]);

  // Render image 

  return (
      <div className="inspirational-image">

         <img src={photo} alt='you are amazing' />

      </div>
  )


}




export default InspirationalPhoto;