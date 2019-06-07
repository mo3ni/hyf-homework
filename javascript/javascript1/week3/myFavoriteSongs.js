// My favorite songs
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];
// songs for pushing to song database
const pushedSong =[
{
    
        songId: 7,
        title: 'When is enough too little?',
        artist: 'The spies girls',
}
];
// function to push song
 function addSongToDatabase(pushedSong){
     for ( let i= 0; i<songDatabase.length; i++){
         for(let j=0; j<pushedSong.length; j++){
         if (songDatabase[i].title === pushedSong[j].title){
            
            return ("Already exist!!");
            
         } else{
            songDatabase.push(pushedSong);
         }
        }
     }
 }
 addSongToDatabase(pushedSong);
 console.log(songDatabase);
 
 //search for song by title 
 let songSearch ="";
  function getSongByTitle (title){
      for (let i=0; i<songDatabase.length; i++){
          if(songDatabase[i].title.includes(title)){
              return "your song by title: " + songDatabase[i];
          }
      }
      return "Your recommended song is not exist in database !!";
  }
songSearch = getSongByTitle(" Blacker than black");
console.log();


  // create our own playlist 
function addSongToMyPlaylist(title) {
    let addToPlaylist;
    addToPlaylist = getSongByTitle(title)
    if (addToPlaylist === ("You don't have this song in your database")) {
        console.log("This song is not available")
    }else{
        let temp= ((addToPlaylist.songId)-1)
        myPlaylist.push(songDatabase[temp]);
        console.log(title);
    }
    console.log()
}
addSongToMyPlaylist('3 nails in wood');


/////////////////////////////////////////
// function pushToArray ( arr, obj ) {


//     var existingIds = arr.map((obj) => obj.id);
  
//       if (! existingIds.includes(obj.id)) {
//         arr.push(obj);
//       } else {
//         arr.forEach((element, index) => {
//           if (element.id === obj.id) {
//             arr[index] = obj;
//           };
//         });
//       };
//   };
  
//   pushToArray ( myArray, objToPush );
  
//   console.log(myArray);
*/