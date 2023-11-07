
timerInterval = setInterval(function() {

    const response = fetch('/');
    console.log(response.re);
    if (response == 1){
        document.location.replace("/vote");
    }
    console.log("nyg")
  }, 10000);