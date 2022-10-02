import apiGet from './base-api';

export function getUserData(userId, callback) {
  const response = apiGet(`https://api.io/user/${userId}`);
  callback(response);
}

export function getPost(postId, callback) {
    const response = apiGet(`https://api.io/post/${postId}`);
    callback(response);
}
