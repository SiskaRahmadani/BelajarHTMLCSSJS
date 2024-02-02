const toggles = document.querySelectorAll(".accordion .text");

console.log(toggles);

for (let i=0; i < toggles.length; i++){
  const toggle = toggles[i];
  toggle.addEventListener("click",toggleText);
}

//toggle = object element

function toggleText() {
  const accordion = this.closest(".accordion");
  const content = accordion.querySelector(".content");
  const icon = accordion.querySelector(".icon");
  // console.log(content)
    if (content.style.display == "none") {
      content.style.display = "block";
      // accordion.querySelector(".text").style.color = "#edb046";
      this.style.color = "#edb046";
      icon.innerHTML = "-";
    } else {
      content.style.display = "none";
      this.style.color = "#000"
      icon.innerHTML = "+";
    }
  }

