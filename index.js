const allStories = [
    {
      id: 0,
      author: "Raça - Galo Indio",
      imageUrl: "img/9-galoIndio.webp",
    },
  
    {
      id: 1,
      author: "Bergische Schlotterkämme",
      imageUrl: "img/galo branco e preto.jpg",
    },
  
    {
      id: 2,
      author: "Ovos Caipira",
      imageUrl: "img/ovos.jpeg",
    },
  
    {
      id: 3,
      author: "Gigante Negra de Jersey",
      imageUrl: "img/10-Gigante Negra de Jersey.png",
    },
  
    {
      id: 4,
      author: "Galinha Faverolles",
      imageUrl: "img/4-Galinha Faverolles.jpg",
    },
  
    {
      id: 5,
      author: "Galobre",
      imageUrl: "img/galoabre.jpg",
    },
  
    {
      id: 6,
      author: "Galinha Vorwek",
      imageUrl: "img/7-Galinha Vorwek.jpg",
    },
  
    {
      id: 7,
      author: "Galinha D'Angola",
      imageUrl: "img/3-Galinha D'Angola.jpg",
    },
  
    {
      id: 8,
      author: "Wyandotte",
      imageUrl: "img/8-Galinha Wyandotte.webp",
    },
  
    {
      id: 9,
      author: "Pinta Asturiana",
      imageUrl: "img/11-pinta asturiana.webp",
    },
  
    {
      id: 9,
      author: "Galinha Rhode Island",
      imageUrl: "img/6-Galinha Rhode Island.webp",
    },
  
    {
      id: 9,
      author: "Canela Preta",
      imageUrl: "img/2-Galinha Canela-Preta.jpg",
    },
  
    {
      id: 9,
      author: "Felix",
      imageUrl: "img/galinha.jpg",
    },
  ];
  
  const stories = document.querySelector(".stories");
  const storiesFullView = document.querySelector(".stories-full-view");
  const closeBtn = document.querySelector(".close-btn");
  const storyImageFull = document.querySelector(".stories-full-view .story img");
  const storyAuthorFull = document.querySelector(
    ".stories-full-view .story .author"
  );
  const nextBtn = document.querySelector(".stories-container .next-btn");
  const previousBtn = document.querySelector(".stories-container .previous-btn");
  const storiesContent = document.querySelector(".stories-container .content");
  const nextBtnFull = document.querySelector(".stories-full-view .next-btn");
  const previousBtnFull = document.querySelector(
    ".stories-full-view .previous-btn"
  );
  
  let currentActive = 0;
  
  const createStories = () => {
    allStories.forEach((s, i) => {
      const story = document.createElement("div");
      story.classList.add("story");
      const img = document.createElement("img");
      img.src = s.imageUrl;
      const author = document.createElement("div");
      author.classList.add("author");
      author.innerHTML = s.author;
  
      story.appendChild(img);
      story.appendChild(author);
  
      stories.appendChild(story);
  
      story.addEventListener("click", () => {
        showFullView(i);
      });
    });
  };
  
  createStories();
  
  const showFullView = (index) => {
    currentActive = index;
    updateFullView();
    storiesFullView.classList.add("active");
  };
  
  closeBtn.addEventListener("click", () => {
    storiesFullView.classList.remove("active");
  });
  
  const updateFullView = () => {
    storyImageFull.src = allStories[currentActive].imageUrl;
    storyAuthorFull.innerHTML = allStories[currentActive].author;
  };
  
  nextBtn.addEventListener("click", () => {
    storiesContent.scrollLeft += 300;
  });
  
  previousBtn.addEventListener("click", () => {
    storiesContent.scrollLeft -= 300;
  });
  
  storiesContent.addEventListener("scroll", () => {
    if (storiesContent.scrollLeft <= 24) {
      previousBtn.classList.remove("active");
    } else {
      previousBtn.classList.add("active");
    }
  
    let maxScrollValue =
      storiesContent.scrollWidth - storiesContent.clientWidth - 24;
  
    if (storiesContent.scrollLeft >= maxScrollValue) {
      nextBtn.classList.remove("active");
    } else {
      nextBtn.classList.add("active");
    }
  });
  
  nextBtnFull.addEventListener("click", () => {
    if (currentActive >= allStories.length - 1) {
      return;
    }
    currentActive++;
    updateFullView();
  });
  
  previousBtnFull.addEventListener("click", () => {
    if (currentActive <= 0) {
      return;
    }
    currentActive--;
    updateFullView();
  });
  
  // menu rolagem
  $('.nav a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 500);
  });