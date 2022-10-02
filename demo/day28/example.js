export function getUserData(userId, callback) {
  $.ajax({
    url: `https://api.io/user/${userId}`,
    type: 'GET',
    success: function(response) {
      callback(response);
    }
  });
}

export function getPost(postId, callback) {
  $.ajax({
    url: `https://api.io/post/${postId}`,
    type: 'GET',
    success: function(response) {
      callback(response);
    }
  });
}
