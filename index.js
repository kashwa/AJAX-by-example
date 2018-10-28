// TODO: type your JS code here.

let btn = document.getElementById('users');

btn.addEventListener('click', function(){
    let req = new XMLHttpRequest();
    req.onreadystatechange = function ()
    {
        if (req.readyState == req.DONE)
        {
            let results = JSON.parse(req.response);

            for (let i = 0, j =results.results.length; i<j; i++)
            {
                console.log("User no: " + (i+2));
                console.log("Name : " + results.results[i].name.first + ' ' + results.results[i].name.last);
            }
        }
    }
    req.onerror = function()
    {
        console.log(new Error("Some errors happened here buddy!"));
    }
    req.open('GET', 'https://randomuser.me/api?results=1');
    req.send();
}, false);