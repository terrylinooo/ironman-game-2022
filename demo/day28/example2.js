export function getUserData(userId, callback) {
  axios.get(`https://api.io/user/${userId}`).then(function (response) {
    callback(response);
  })
}

export function getPost(postId, callback) {
  axios.get(`https://api.io/post/${postId}`).then(function (response) {
    callback(response);
  })
}
