import { getList } from "../api";
import { markupByUserId } from "../markup";
import { tBodyUser } from "../refs";
import { createMarkup } from "../helpers";


const paramsString = location.search;
const searchParams = new URLSearchParams(paramsString);
const userId = searchParams.get("userID");
console.log(userId);

document.addEventListener("DOMContentLoaded", wrapper);

function wrapper(){
getList(`users?id=${userId}`)
.then(([date]) => {
    const list = markupByUserId(date);
      createMarkup(tBodyUser, list);
})
    .catch((err) => console.log(err.message));
    
}