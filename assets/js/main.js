// ========================================
// DOM READY
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  // ========================================
  // SIDE MENU
  // ========================================

  const menuBtn  = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sideMenu = document.getElementById("sideMenu");

  if(menuBtn && closeBtn && sideMenu){

    menuBtn.addEventListener("click", () => {
      sideMenu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      sideMenu.classList.remove("active");
    });

  }

  // ========================================
  // FEATURED SLIDER
  // ========================================

  const featuredSlides = document.querySelectorAll(".featured-slide");

  let featuredCurrent = 0;

  if(featuredSlides.length > 0){

    function showFeaturedSlide(index){

      featuredSlides.forEach(slide => {
        slide.classList.remove("active");
      });

      featuredSlides[index].classList.add("active");

    }

    function nextFeaturedSlide(){

      featuredCurrent++;

      if(featuredCurrent >= featuredSlides.length){
        featuredCurrent = 0;
      }

      showFeaturedSlide(featuredCurrent);

    }

    setInterval(nextFeaturedSlide, 3000);

  }

  // ========================================
  // FLEET FILTER
  // ========================================

  const fleetTabs = document.querySelectorAll(".fleet-tab");

  const sportSection  = document.getElementById("sport");
  const luxurySection = document.getElementById("luxury");
  const familySection = document.getElementById("family");

  fleetTabs.forEach(tab => {

    tab.addEventListener("click", () => {

      const filter = tab.getAttribute("data-filter");

      // REMOVE ACTIVE
      fleetTabs.forEach(t => {
        t.classList.remove("active");
      });

      // ADD ACTIVE
      tab.classList.add("active");

      // SHOW ALL
      if(filter === "all"){

        sportSection.style.display  = "block";
        luxurySection.style.display = "block";
        familySection.style.display = "block";

      }

      // SPORT
      else if(filter === "sport"){

        sportSection.style.display  = "block";
        luxurySection.style.display = "none";
        familySection.style.display = "none";

      }

      // LUXURY
      else if(filter === "luxury"){

        sportSection.style.display  = "none";
        luxurySection.style.display = "block";
        familySection.style.display = "none";

      }

      // FAMILY
      else if(filter === "family"){

        sportSection.style.display  = "none";
        luxurySection.style.display = "none";
        familySection.style.display = "block";

      }

    });

  });

  // ========================================
  // ABOUT SLIDER
  // ========================================

  const aboutSlides = document.querySelectorAll(".about-slider .slide");

  const title    = document.getElementById("aboutTitle");
  const desc     = document.getElementById("aboutDesc");
  const small    = document.getElementById("aboutSmall");

  const feature1 = document.getElementById("feature1");
  const feature2 = document.getElementById("feature2");
  const feature3 = document.getElementById("feature3");

  const aboutContent = [

    {
      small:"DISCOVER YACHTLUX",

      title:"Luxury Beyond The Ocean",

      desc:"YachtLux delivers an elite ocean lifestyle where modern superyachts, breathtaking sea horizons, and personalized VIP experiences create unforgettable luxury journeys.",

      f1:"Premium Super Yachts",
      f2:"Private Ocean Experience",
      f3:"World-Class VIP Service"
    },

    {
      small:"WORLD CLASS EXPERIENCE",

      title:"Designed For Elegance",

      desc:"Every YachtLux vessel is crafted with sophisticated interiors, panoramic ocean views, premium comfort, and world-class hospitality.",

      f1:"Luxury Interior Design",
      f2:"Panoramic Ocean Views",
      f3:"Exclusive VIP Comfort"
    },

    {

small:"PRIVATE OCEAN JOURNEYS",

      title:"Exclusive Yacht Adventures",

      desc:"From private island retreats to sunset cruises, YachtLux transforms every voyage into a cinematic luxury experience.",

      f1:"Private Island Tours",
      f2:"Sunset Luxury Cruises",
      f3:"Elite Relaxation Experience"
    },

    {
      small:"HIGH PERFORMANCE YACHTS",

      title:"Power Meets Prestige",

      desc:"Experience the balance between performance engineering and refined luxury design.",

      f1:"High-Speed Performance",
      f2:"Modern Yacht Technology",
      f3:"Elegant Ocean Power"
    }

  ];

  let aboutCurrent = 0;

  if(aboutSlides.length > 0){

    function showAboutSlide(index){

      // REMOVE ACTIVE
      aboutSlides.forEach(slide => {
        slide.classList.remove("active");
      });

      // ADD ACTIVE
      aboutSlides[index].classList.add("active");

      // RESET
      title.style.opacity = "0";
      desc.style.opacity  = "0";
      small.style.opacity = "0";

      feature1.style.opacity = "0";
      feature2.style.opacity = "0";
      feature3.style.opacity = "0";

      setTimeout(() => {

        small.innerHTML = aboutContent[index].small;
        title.innerHTML = aboutContent[index].title;
        desc.innerHTML  = aboutContent[index].desc;

        feature1.innerHTML = aboutContent[index].f1;
        feature2.innerHTML = aboutContent[index].f2;
        feature3.innerHTML = aboutContent[index].f3;

        small.style.opacity = "1";
        title.style.opacity = "1";
        desc.style.opacity  = "1";

        feature1.style.opacity = "1";
        feature2.style.opacity = "1";
        feature3.style.opacity = "1";

      }, 300);

    }

    function nextAboutSlide(){

      aboutCurrent++;

      if(aboutCurrent >= aboutSlides.length){
        aboutCurrent = 0;
      }

      showAboutSlide(aboutCurrent);

    }

    setInterval(nextAboutSlide, 4000);

  }

  // ========================================
  // COUNTER
  // ========================================

  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    const suffix = counter.getAttribute("data-suffix") || "+";

    counter.innerText = "0" + suffix;

    function updateCounter(){

      const current = parseInt(counter.innerText);

      const increment = target / 100;

      if(current < target){

        counter.innerText =
          Math.ceil(current + increment) + suffix;

        setTimeout(updateCounter, 20);

      }

      else{

        counter.innerText = target + suffix;

      }

    }

    updateCounter();

  });

  // ========================================
  // ACTIVE SECTION TRACK
  // ========================================

  const sections = document.querySelectorAll("section[id]");

  function setActive(id){

    fleetTabs.forEach(tab => {

      tab.classList.remove("active");

      if(tab.getAttribute("data-filter") === id){

        tab.classList.add("active");

      }

    });

  }

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        setActive(entry.target.id);

      }

    });

  }, {
    threshold:0.6
  });

  sections.forEach(section => {
    observer.observe(section);
  });

 // ========================================
// SWIPER FUNCTION
// ========================================

function initSwiper(swiperClass, paginationClass){

  new Swiper(swiperClass, {

    slidesPerView:3,

    spaceBetween:20,

    loop:true,

    autoplay:{
      delay:2500,
      disableOnInteraction:false,
      pauseOnMouseEnter:true,
    },

    pagination:{
      el:paginationClass,
      clickable:true,
    },

    breakpoints:{
      0:{ slidesPerView:1 },
      768:{ slidesPerView:2 },
      1024:{ slidesPerView:3 }
    }

  });

}

// ========================================
// INIT SWIPERS
// ========================================

initSwiper(
  ".mySwiperSport",
  ".sport-pagination"
);

initSwiper(
  ".mySwiperLuxury",
  ".luxury-pagination"
);

initSwiper(
  ".mySwiperFamily",
  ".family-pagination"
);

});
