//*Introduction to fetch*//

fetch('data.json', {
    method: 'GET',
})
  .then(
    function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            data.forEach(element => {
                const p = document.createElement("p");
                p.innerText = element.firstName + " " + element.age + " " + element.human;
                document.querySelector("body").appendChild(p);
            });
        });
    }
)
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
});