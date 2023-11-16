var swiper = new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:4,
    spaceBetween: 30,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints : {
        0:{
            slidesPerView:1
        },
        520: {
            slidesPerView:2
        },
        950:{
            slidesPerView: 3
        }
    }
});

document.addEventListener('DOMContentLoaded', function (){
    const apiUrl = 'https://sheetdb.io/api/v1/ak6uepz2rbaqz';
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        displayData(data);
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
      });
  
    function displayData(data) {
      const container = document.getElementById('api-container');
    
      data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.Proveedores}`;
        container.appendChild(itemDiv);
      });
    }
  });
 








