const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const ul = document.querySelector("#list");

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove(); // remove the <li>, not just the button
  }
});

button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    ul.append(li);
  }
  input.value = "";
  input.focus();
});
