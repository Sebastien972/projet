console.log('kjhkjhkl')
let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.1193089, lng: 6.1757156},
    zoom: 8
  });



  // const request = fetch('https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=cf3d9479836a619cc61d548d13493467d16ee607')
  let xhr = new XMLHttpRequest
  xhr.open('GET', 'https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=cf3d9479836a619cc61d548d13493467d16ee607', true)
  xhr.send()
  console.log(xhr)