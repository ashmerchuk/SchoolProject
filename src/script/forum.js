import { addComment, getComments } from "../index.js";

getComments()

const commentsContainer = document.querySelector('#commentsContainer')
commentsContainer.insertAdjacentHTML('afterend', `<div>haha</div>`)

const commentButton = document.querySelector('.submit-comment-button');
var name = document.getElementById('nameId');
var comment = document.getElementById('comment');

commentButton.addEventListener('click', () => {
    if ( name.value <= 3 || name.value >= 20 ) {
        alert('Geben Sie Ihren Namen ein (mindestens 3 Zeichen)')
        return
    } else if ( comment.value <= 5 || comment.value >= 140) {
        alert('Schreiben Sie Ihren Kommentar (zwischen 5 und 140 Zeichen)')
        return
    }
    addComment(name.value, comment.value)
});