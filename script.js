const button = document.getElementById('btnsearch');
const subject = document.getElementById('subject');
const indicate = document.getElementById('result');

button.addEventListener('click', resultSearch);

function resultSearch() {

  let http = new XMLHttpRequest();
  let my_subject = subject.value;

  http.open('GET', `https://api.tenor.com/v1/search?q=${my_subject}&key=3VJJS9QFG26C`, true);
  http.onload = function () {
    if (http.status === 200) {

      let response = JSON.parse(http.responseText);
      let responseApi = response.results;

      indicate.innerHTML = '';
      responseApi.forEach((image) => {

        indicate.innerHTML += `<img src=${image.media[0].gif.url} >`;

      });

    } else if (http.status === 404) {
      console.log('subject not found');
    }
  };
  http.send();
}

