//title

//personal
const card1 = document.getElementById('card-1'); 
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const name1 = document.getElementById('name-1');
const name2 = document.getElementById('name-2');
const name3 = document.getElementById('name-3');
const text1 = document.getElementById('1');
const text2 = document.getElementById('2');
const text3 = document.getElementById('3');
const content1 = document.getElementById('co-1');
const content2 = document.getElementById('co-2');
const content3 = document.getElementById('co-3');
var cardOpen = 0;
var holdCard = false;
function open(card, num) {
  name1.style.opacity = '1';
  name2.style.opacity = '1';
  name3.style.opacity = '1';
  text1.style.opacity = '1';
  text2.style.opacity = '1';
  text3.style.opacity = '1';
  card.style.width = "60vw";
  switch(num) {
    case 1:
      card2.style.width = "15vw";
      card3.style.width = "15vw";
      name2.style.opacity = '0';
      name3.style.opacity = '0';
      text2.style.opacity = '0';
      text3.style.opacity = '0';
      content1.style.transform = "translate(-2px, -75px)";
      break;
    case 2:
      card1.style.width = "15vw";
      card3.style.width = "15vw";
      name1.style.opacity = '0';
      name3.style.opacity = '0';
      text1.style.opacity = '0';
      text3.style.opacity = '0';
      content2.style.transform = "translate(-2px, -75px)";
      break;
    case 3:
      card1.style.width = "15vw";
      card2.style.width = "15vw";
      name1.style.opacity = '0';
      name2.style.opacity = '0';
      text1.style.opacity = '0';
      text2.style.opacity = '0';
      content3.style.transform = "translate(-2px, -75px)";
      break;
  }
};
function close() {
  if(holdCard === false) {
  card1.style.width = "30vw";
  card2.style.width = "30vw";
  card3.style.width = "30vw";
  name1.style.opacity = '1';
  name2.style.opacity = '1';
  name3.style.opacity = '1';
  text1.style.opacity = '1';
  text2.style.opacity = '1';
  text3.style.opacity = '1';
  content1.style.transform = "translate(-130%, -25px)";
  content2.style.transform = "translate(-130%, -25px)";
  content3.style.transform = "translate(-130%, -25px)";
  }
};
//card1
card1.addEventListener("mouseover", () => {
  open(card1, 1);
  if(cardOpen !== 1) {
  holdCard = false;
  }
  cardOpen = 1;
})
card1.addEventListener("click", () => {
  holdCard = true;
})
card1.addEventListener("mouseleave", () => {
  close();
})

//card2
card2.addEventListener("mouseover", () => {
  open(card2, 2);
  if(cardOpen !== 2) {
  holdCard = false;
  }
  cardOpen = 2;
})
card2.addEventListener("click", () => {
  holdCard = true;
})
card2.addEventListener("mouseleave", () => {
  close();
})
//card3
card3.addEventListener("mouseover", () => {
  open(card3, 3);
  if(cardOpen !== 3) {
  holdCard = false;
  }
  cardOpen = 3;
})
card3.addEventListener("click", () => {
  holdCard = true;
})
card3.addEventListener("mouseleave", () => {
  close();
})




//projects

//conatct

//footer