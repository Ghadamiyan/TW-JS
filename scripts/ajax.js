// Ajax  PUNCTAJ: 1.10

var btn = document.querySelector("button");
btn.addEventListener("click", function()
{
  //vreau ca la click pe butonul meu sa imi adauge un paragraf, apoi sa setez un text si sa il adaug in pagina
  for(var i = 0; i < raspuns.length; i++)
  { 
     var paragraf = document.createElement("p");
     paragraf.innerHTML = raspuns[i].title;
     document.body.appendChild(paragraf);
}});

var xhr = new XMLHttpRequest();

xhr.onload = function () {

    if (xhr.status >= 200 && xhr.status < 300) {
        // Daca request-ul a fost facut cu succes
        console.log('success!', xhr);
        console.log("raspunsul pe care il primim este sub forma de string",xhr.response);
        console.log("De cele mai multe ori vrem sa convertim raspunsul la obiect JSON ca sa putem utiliza datele",raspuns=JSON.parse(xhr.response))
    } else {
        console.log('The request failed!');
    }

};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();

btn.setAttribute("id","buton");
btn.style.left = "7px";
btn.style.top = "100px";
btn.style.position = "absolute";
btn.style.backgroundColor = "#ffdd99";
btn.style.color = "#4d0017";
btn.style.borderRadius = "0.7rem";
btn.style.font = "Comic Sans MS"
