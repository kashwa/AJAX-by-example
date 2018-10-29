// TODO: type your JS code here.

let btn = document.getElementById('users');

btn.addEventListener('click', function(){
    let req = new XMLHttpRequest();
    req.onreadystatechange = function ()
    {
        if (req.readyState == req.DONE)
        {
            let usersContainer = document.querySelector("div.users");
            let usersHTML = '';
            let results = JSON.parse(req.response);

            for (let i = 0, j =results.results.length; i<j; i++)
            {
                // console.log("User no: " + (i+2));
                // console.log("Name : " + results.results[i].name.first + ' ' + results.results[i].name.last);
                // console.log(results.results[i]);

                usersHTML += '<div class="user">\n' +
                    '\n' +
                             '<h3>User number ' +(i+1)+ '</h3>' +
                             '<p>Name <span>' +results.results[i].name.first+ ' '+results.results[i].name.last+ '</span></p>' +
                             '<p>Gender: <strong>'+ results.results[i].gender +'</strong> </p>' +
                             '<p>Address: <span>'+ results.results[i].location.street +'</span></p>'
                             +'</div>'
            }
            usersContainer.innerHTML = usersHTML;
        }
    }
    req.onerror = function()
    {
        console.log(new Error("Some errors happened here buddy!"));
    }
    req.open('GET', 'https://randomuser.me/api?results=7');
    req.send();
}, false);