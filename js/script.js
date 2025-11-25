"use-strict";

document.addEventListener("DOMContentLoaded", function () {
  const inputGroups = document.querySelectorAll(".input-group");
  inputGroups.forEach((group) => {
    const input = group.querySelector("input");

    if (input.value) {
      group.classList.add("has-content");
    }
    input.addEventListener("focus", function () {
      group.classList.add("focused");
    });
    input.addEventListener("blur", function () {
      group.classList.remove("focused");
      if (input === "") {
        group.classList.remove("has-content");
      }
    });
    input.addEventListener("input", function () {
      if (input.value === "") {
        group.classList.remove("has-content");
      } else {
        group.classList.add("has-content");
      }
    });
  });
});
