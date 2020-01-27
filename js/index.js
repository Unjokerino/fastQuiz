let page = 1;
let pages = document.querySelectorAll(".page");
let pages_length = pages.length;

let next_btn = document.querySelector("#next");

next_btn.addEventListener("click", () => next());

next = () => {
  incPage();
};

incPage = () => {
  if (page < pages_length) {
    pages.forEach((element, index) => {
      pages[index].style.display = "none";
    });
    pages[page].style.display = "block";
    page++;
  } else {
    page = 0;
    let repeat_btn = document.createElement("button");
    repeat_btn.innerHTML = "Повторить";
    repeat_btn.id = "repeat";
    repeat_btn.addEventListener("click", () => {
      location.reload();
    });
    loader = document.createElement("div");
    loader.classList.add("loader");
    
    loader.innerHTML = `<img id='animation' src='./media/animation.gif'>`;
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").append(loader);

    setTimeout(() => {
      document.querySelector("#animation").remove();
      showSnackBar(
        "К сожалению рядом с вами никого не найдено, попробуйте позже!"
      );
      loader.append(repeat_btn);
    }, 5000);
  }
};

function showSnackBar(message) {
  var x = document.getElementById("snackbar");
  x.querySelector('span').innerHTML = message;
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}
