
const GIPHY_KEY = 'F6AYdXE32OvQ2OoLxShIz2QOQEf12Jud';
(function () {
    function giphySearch(keyword) {
      return fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${GIPHY_KEY}&limit=30`)
        .then(response => response.json());
    }
    function appendImage(img) {
      let $div = $('<div class="img-wrapper"></div>');
      $('<div class="inner"></div>').append(img).appendTo($div);
      $('#thumbs').append($div)
    }
  
    function showLoader() {
      $('.loader-wrapper').addClass('shown');
    }
  
    function hideLoader() {
      $('.loader-wrapper').removeClass('shown');
    }
  
    function onImgLoad(img) {
      return new Promise((resolve, reject) => {
        img.onload = resolve;
      });
    }
  
    (function listenOnFormSubmit() {
      $('#searchForm').submit(async (ev) => {
        ev.preventDefault();
  
        let $input = $('#searchInput');
  
        main($input.val());
      });
    })();
  
    async function main(keyword) {
      const result = await giphySearch(keyword);
      $('#thumbs').html('');
      showLoader();
      // let loadedImageCount = 0;
      let promises = [];
      result.data.forEach(gif => {
        let img = new Image();
        img.src = gif.images.original.url;
        promises.push(onImgLoad(img));
        // img.onload = () => {
        //   loadedImageCount++;
        //   if (loadedImageCount === result.data.length){
        //     hideLoader()
        //   }
        // };
        appendImage(img);
      });
  
      await Promise.all(promises);
      hideLoader();
    }
  })();

// const apiKey ="F6AYdXE32OvQ2OoLxShIz2QOQEf12Jud"
// function createNode(element){
// return document.createElement(element);
// }
// function append(parent,el){
//     return parent.appendChild(el);
// }
// const ul = document.getElementById("gify");
// const url= "http://api.giphy.com/v1/gifs/search";
// fetch(url)
// .then((Response)=>Response.json())
// .then(function(data){
//     let giphy= data.results;
//     return giphy.map(function(giphy){
//         let li = createNode('li'),
//         img = createNode('img'),
//         span = createNode('span');

//         img.src = giphy.picture.medium;
//         //span.innerHTML =`${giphy}`;
//         append(li,img);
//         append(li,span);
//         append(ul,li);
//     })
// })
// .catch(function(error){
//     console.log(JSON.stringify(error));
//     });