const divs = document.getElementsByTagName("div");

for (let i = 0; i < divs.length; i++) {
  divs[i].style.backgroundColor = "yellow";
}

const nodeA = document.querySelector("#a a");
nodeA.setAttribute("href", "https://www.google.com");

const lists = document.getElementsByTagName("li");
for (let i = 0; i < lists.length; i++) {
  lists[i].style.backgroundColor = "grey";
}
