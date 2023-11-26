const PACK_SIZE = 5;

const list = document.querySelector('.social__comments');
const loaderButton = document.querySelector('.social__comments-loader');
const photoElement = document.querySelector('.big-picture');
const totalCount = photoElement.querySelector('.social__comment-total-count');
const shownCount = photoElement.querySelector('.social__comment-shown-count');

let allComments = [];

const createComment = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.className = 'social__comment';

  const avatarElement = document.createElement('img');
  avatarElement.className = 'social__picture';
  avatarElement.src = comment.avatar;
  avatarElement.alt = comment.name;
  avatarElement.width = 35;
  avatarElement.height = 35;

  const textElement = document.createElement('p');
  textElement.className = 'social__text';
  textElement.textContent = comment.message;

  commentElement.appendChild(avatarElement);
  commentElement.appendChild(textElement);

  return commentElement;
};

const loadNextComments = () => {
  const currentShowedAmount = list.childElementCount;
  let nextShowedAmount = currentShowedAmount + PACK_SIZE;
  const isAllWillBeShown = nextShowedAmount >= allComments.length;
  nextShowedAmount = isAllWillBeShown ? allComments.length : nextShowedAmount;
  const commentToRender = allComments.slice(
    currentShowedAmount,
    nextShowedAmount
  );

  commentToRender.forEach((comment) => {
    const newCommentElement = createComment(comment);
    list.appendChild(newCommentElement);
  });

  shownCount.textContent = nextShowedAmount.toString();

  loaderButton.classList.toggle(
    'hidden',
    nextShowedAmount >= allComments.length
  );
};

const renderComments = (comments) => {
  allComments = comments;
  totalCount.textContent = comments.length.toString();
  list.innerHTML = '';
  loadNextComments();
};

loaderButton.addEventListener('click', loadNextComments);

export { renderComments };
