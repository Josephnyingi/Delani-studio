//    what we do section
$("#submit").click(function (event) {
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();
  if (name === '' || email === '' || message === '') {
      alert('Please fill in the required data');
  } else {
      alert(" Hello " + name + " We have received your message.Thank you for reaching out to us")
      event.preventDefault();
  };
  //    reset my form button
  $("button").on('click', function () {
    $('form').each(function () {
      this.reset();
    });
  });
  //portifolio section 
  $(".card").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
  });
