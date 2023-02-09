import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API)
.then((response) => response.json())
.then((data) => {
  const { users } = data;
  fillUsersSelect(users);
  return [users]; 
  });

usersSelect.addEventListener('change', () => {
  clearPageData();
  const select = usersSelect.options[usersSelect.selectedIndex].value;
  const POSTS_USER = `https://dummyjson.com/posts/user/${select}`;
  fetch(POSTS_USER).then((response) => response.json())
  .then((data) => {
    const { posts } = data;
    fillPosts(posts);
    const [postId] = posts;
    console.log(postId.id)
    fetch(`https://dummyjson.com/posts/${postId.id}/comments`)
    .then(res => res.json())
    .then(({ comments }) => {
      fillFeaturedPostComments(comments);
  }).catch (error => {
    fillErrorMessage(error.message);
  })
  }).catch (error => {
    fillErrorMessage(error.message);
  })
});
