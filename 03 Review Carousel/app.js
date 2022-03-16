// local reviews data
const reviews = [
  {
    id: 1,
    name: "George Clooney",
    job: "Film Actor",
    img:
      "george.jpg",
    text:
      "You have only a short period of time in your life to make your mark, and I’m there now.",
  },
  {
    id: 2,
    name: "Jon Kortajarena",
    job: "Model and Actor",
    img:
      "jon.jpg",
    text:
      "My mother says that lovers are like buses. You just have to wait a little while and another one comes along.",   
  },
  {
    id: 3,
    name: "Brad Pitt",
    job: "Film Actor",
    img:
      "brad.jpg",
    text:
      "Happiness is overrated. There has to be conflict in life.",
  },
  {
    id: 4,
    name: "Leonardo DiCaprio",
    job: "Film Actor",
    img:
      "leodic.jpg",
    text:
      "If you can do what you do best and be happy, you're further along in life than most people.",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
