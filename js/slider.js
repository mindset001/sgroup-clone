const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('prev');
})

next.addEventListener('click', () => {
  nextImage('next');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}



const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');
const images2 = document.querySelector('.carousell').children;
const totalImages2 = images2.length;
let indexx = 0;

prev2.addEventListener('click', () => {
  nextImage2('prev2');
})

next2.addEventListener('click', () => {
  nextImage2('next2');
})

function nextImage2(direction) {
  if(direction == 'next2') {
    indexx++;
    if(indexx == totalImages2) {
      indexx = 0;
    }
  } else {
    if(indexx == 0) {
      indexx = totalImages2 - 1;
    } else {
      indexx--;
    }
  }

  for(let i = 0; i < images2.length; i++) {
    images2[i].classList.remove('main');
  }
  images2[indexx].classList.add('main');
}

const prev3 = document.querySelector('.prev3');
const next3 = document.querySelector('.next3');
const images3 = document.querySelector('.carouselll').children;
const totalImages3 = images3.length;
let indexxx = 0;

prev3.addEventListener('click', () => {
  nextImage3('prev3');
})

next3.addEventListener('click', () => {
  nextImage3('next3');
})

function nextImage3(direction) {
  if(direction == 'next3') {
    indexxx++;
    if(indexxx == totalImages3) {
      indexxx = 0;
    }
  } else {
    if(indexxx == 0) {
      indexxx = totalImages3 - 1;
    } else {
      indexxx--;
    }
  }

  for(let i = 0; i < images3.length; i++) {
    images3[i].classList.remove('main');
  }
  images3[indexxx].classList.add('main');
}

const prev4 = document.querySelector('.prev4');
const next4 = document.querySelector('.next4');
const images4 = document.querySelector('.carouseelll').children;
const totalImages4 = images4.length;
let indexxxx = 0;

prev4.addEventListener('click', () => {
  nextImage4('prev4');
})

next4.addEventListener('click', () => {
  nextImage4('next4');
})

function nextImage4(direction) {
  if(direction == 'next4') {
    indexxxx++;
    if(indexxxx == totalImages4) {
      indexxxx = 0;
    }
  } else {
    if(indexxxx == 0) {
      indexxxx = totalImages4 - 1;
    } else {
      indexxxx--;
    }
  }

  for(let i = 0; i < images4.length; i++) {
    images4[i].classList.remove('main');
  }
  images4[indexxxx].classList.add('main');
}


// real estate 

const ePrev = document.querySelector('.Eprev');
const eNext = document.querySelector('.Enext');
const image = document.querySelector('.Ecarousel').children;
const totalImage = image.length;
let indeex = 0;

ePrev.addEventListener('click', () => {
  nextEmage('ePrev');
})

eNext.addEventListener('click', () => {
  nextEmage('eNext');
})

function nextEmage(direction) {
  if(direction == 'eNext') {
    indeex++;
    if(indeex == totalImage) {
      indeex = 0;
    }
  } else {
    if(indeex == 0) {
      index = totalImage - 1;
    } else {
      indeex--;
    }
  }

  for(let i = 0; i < image.length; i++) {
    image[i].classList.remove('main');
  }
  image[indeex].classList.add('main');
}

// career 

const prevn = document.querySelector('.prevn');
const nextn = document.querySelector('.nextn');
const imaage = document.querySelector('.caarouseelll').children;
const tootalImage = imaage.length;
let iindeex = 0;

prevn.addEventListener('click', () => {
  nextEmagge('prevn');
})

nextn.addEventListener('click', () => {
  nextEmagge('nextn');
})

function nextEmagge(direction) {
  if(direction == 'nextn') {
    iindeex++;
    if(iindeex == tootalImage) {
      iindeex = 0;
    }
  } else {
    if(iindeex == 0) {
      iindeex = tootalImage - 1;
    } else {
      iindeex--;
    }
  }

  for(let i = 0; i < imaage.length; i++) {
    imaage[i].classList.remove('main');
  }
  imaage[iindeex].classList.add('main');
}