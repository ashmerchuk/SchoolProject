import { addComment, getComments } from '../index.js';

var comments;
const commentsChild = document.querySelector('#commentsChild');
const commentsContainer = document.querySelector('#commentsContainer');

fillComments();

const commentButton = document.querySelector('.submit-comment-button');
var name = document.getElementById('nameId');
var comment = document.getElementById('comment');

commentButton.addEventListener('click', () => {
  if (name.value < 3 || name.value >= 20) {
    alert('Geben Sie Ihren Namen ein (mindestens 3 Zeichen)');
    return;
  } else if (comment.value < 5 || comment.value >= 140) {
    alert('Schreiben Sie Ihren Kommentar (zwischen 5 und 140 Zeichen)');
    return;
  }
  addComment(name.value, comment.value);
  fillComments();
  (name.value = ''), (comment.value = '');
});

function fillComments() {
  getComments().then((res) => {
    let htmlToInsert = '';
    comments = res;
    comments.forEach((comment) => {
      let date = new Date(comment.date.seconds * 1000)
      htmlToInsert += `
                <div class="comment-card">
                  <div class="date-label">${date.getDate()}.${date.getUTCMonth()}.${date.getUTCFullYear()}</div>
                  <p class="comment-content">${comment.content}</p>
                  <h4 class="author-label">${comment.name}</h4>
                </div>
                `;
    });
    while (commentsContainer.childElementCount > 1) {
      commentsContainer.removeChild(commentsContainer.lastChild);
    }
    commentsChild.insertAdjacentHTML('afterend', htmlToInsert);
  });
}
