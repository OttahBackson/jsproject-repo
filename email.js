
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyhorCeVUHPOaMb2z-Wel0mWuM4Ri6WZNRBa1hys1dAEQLmZhxNfX3P5Si_3RvFKicW/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You for Subscribing to my Channel";
        setTimeout( () =>{
            msg.innerHTML = "";
        }, 6000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
