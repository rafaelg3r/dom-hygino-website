 document.addEventListener("DOMContentLoaded", function () {
        new Splide("#my-carousel", {
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 3000,
          arrows: false,
          pagination: true  ,
        }).mount()
      })