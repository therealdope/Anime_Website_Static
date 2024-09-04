// mode change
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("moon");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  icon.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  icon.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

//snowflake flag
const snowflakeFlag = document.getElementById("snowflake-flag");
const snowflakesContainer = document.querySelector(".snowflakes");

snowflakeFlag.addEventListener("click", () => {
  snowflakesContainer.classList.toggle("hidden");
});

//upward
const upward = document.getElementById("upward");

upward.addEventListener("click",(e)=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

//search bar
document.getElementById('searchInput').addEventListener('input', function() {
  let filter = this.value.toLowerCase();
  let names = document.querySelectorAll('.box');

  names.forEach(function(box) {
      let title = box.querySelector('p').textContent.toLowerCase();
      if (title.includes(filter)) {
          box.style.display = '';
      } else {
          box.style.display = 'none';
      }
  });
});

//watchlist
