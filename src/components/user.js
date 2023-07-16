import { getList } from "../api";
import { markupByUserId, createListAlbum } from "../markup";
import { tBodyUser, listAlbum } from "../refs";
import { createMarkup } from "../helpers";


const paramsString = location.search;
const searchParams = new URLSearchParams(paramsString);
const userId = searchParams.get("userID");
console.log(userId);

document.addEventListener("DOMContentLoaded", wrapper);
document.addEventListener("DOMContentLoaded", wrapper2);

function wrapper(){
getList(`users?id=${userId}`)
.then(([date]) => {
    const list = markupByUserId(date);
      createMarkup(tBodyUser, list);
})
    .catch((err) => console.log(err.message));
}

function wrapper2() { 
    getList(`albums?userId=${userId}`)
        .then((date) => { 
            const listAl = createListAlbum(date);
            createMarkup(listAlbum, listAl)
        })
        .catch((err) => console.log(err.message));

}