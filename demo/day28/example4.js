export function apiGet(url) {
  let result = null;
  $.ajax({
    url: url,
    type: 'GET',
    async: false,
    success: function(response) {
      result = response;
    },
  });
  return result;
}
  