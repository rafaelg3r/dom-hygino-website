 document.addEventListener("DOMContentLoaded", function () {
        new Splide("#my-carousel", {
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 7000,
          arrows: false,
          pagination: true  ,
        }).mount()
      })