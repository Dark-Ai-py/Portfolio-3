//title

//personal
const cards = document.querySelectorAll(".card");
const names = document.querySelectorAll(".name");
const text = document.querySelectorAll(".short-des");
const content = document.querySelectorAll(".content");
var cardOpen = 0;
var holdCard = false;
function open(card, num) {
  names.forEach((item) => {
    item.style.opacity = "1";
  });
  text.forEach((item) => {
    item.style.opacity = "1";
  });
  card.style.width = "60vw";
  switch (num) {
    case 1:
      cards.forEach((items) => {
        if (items == cards[1] || items == cards[2]) {
          items.style.width = "15vw";
        }
      });
      names.forEach((items) => {
        if (items == names[1] || items == names[2]) {
          items.style.opacity = "0";
        }
      });
      text.forEach((items) => {
        if (items == text[1] || items == text[2]) {
          items.style.opacity = "0";
        }
      });
      content[0].style.transform = "translate(-2px, -90px)";
      break;
    case 2:
      cards.forEach((items) => {
        if (items == cards[0] || items == cards[2]) {
          items.style.width = "15vw";
        }
      });
      names.forEach((items) => {
        if (items == names[0] || items == names[2]) {
          items.style.opacity = "0";
        }
      });
      text.forEach((items) => {
        if (items == text[0] || items == text[2]) {
          items.style.opacity = "0";
        }
      });
      content[1].style.transform = "translate(-2px, -90px)";
      break;
    case 3:
      cards.forEach((items) => {
        if (items == cards[0] || items == cards[1]) {
          items.style.width = "15vw";
        }
      });
      names.forEach((items) => {
        if (items == names[0] || items == names[1]) {
          items.style.opacity = "0";
        }
      });
      text.forEach((items) => {
        if (items == text[0] || items == text[1]) {
          items.style.opacity = "0";
        }
      });
      content[2].style.transform = "translate(-2px, -90px)";
      break;
  }
}
function close(now) {
  if (holdCard === false || now === 1) {
    cards.forEach((item) => {
      item.style.width = "30vw";
    });
    names.forEach((item) => {
      item.style.opacity = "1";
    });
    text.forEach((item) => {
      item.style.opacity = "1";
    });
    content.forEach((item) => {
      item.style.transform = "translate(-130%, -90px)";
    });
  }
}
//card1
cards[0].addEventListener("mouseover", () => {
  if (cardOpen !== 1) {
    holdCard = false;
    close(1);
  }
  open(cards[0], 1);
  cardOpen = 1;
});
cards[0].addEventListener("click", () => {
  holdCard = true;
});
cards[0].addEventListener("mouseleave", () => {
  close(0);
});

//card2
cards[1].addEventListener("mouseover", () => {
  if (cardOpen !== 2) {
    holdCard = false;
    close(1);
  }
  open(cards[1], 2);
  cardOpen = 2;
});
cards[1].addEventListener("click", () => {
  holdCard = true;
});
cards[1].addEventListener("mouseleave", () => {
  close(0);
});
//card3
cards[2].addEventListener("mouseover", () => {
  if (cardOpen !== 3) {
    holdCard = false;
    close(1);
  }
  open(cards[2], 3);
  cardOpen = 3;
});
cards[2].addEventListener("click", () => {
  holdCard = true;
});
cards[2].addEventListener("mouseleave", () => {
  close(0);
});

//projects

//conatct

//footer