


function GetTodaysDate() {

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December']
    
    let todaysDate = new Date()
    let date = todaysDate.getDate();
    let month = months[todaysDate.getMonth()];
    let year = todaysDate.getFullYear();


    return ` Today's Date : ${month} ${date}, ${year}`
}






export default GetTodaysDate;