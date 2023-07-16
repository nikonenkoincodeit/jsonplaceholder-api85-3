import { getList } from "../api";
import { markupUsers } from "../markup";
import { tBodyEL } from "../refs";
import { createMarkup } from "../helpers";

document.addEventListener("DOMContentLoaded", wrapper);
tBodyEL.addEventListener("click", handlerClickElement);

function wrapper() {
  getList("users")
    .then((date) => {
      const list = markupUsers(date);
      createMarkup(tBodyEL, list);
    })
    .catch((err) => console.log(err.message));
}

function handlerClickElement(e) {
  const currentEL = e.target.closest(".js-tr");
  const userID = currentEL.dataset.userid;
  location.href = "user.html?userID=" + userID;
}
