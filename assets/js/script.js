window.onload = function() {
    var title = document.getElementById("title");
    var text = "Entrepreneurship";
    var i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.innerHTML = text.substring(0, i+1) + "-Cell";
            i++;
            setTimeout(typeWriter, 150); // writing speed
        } else {
            // Reset after completion
            setTimeout(() => {
                title.innerHTML = "E-Cell";
                i = 0;
                setTimeout(typeWriter, 1000); // Adjust delay before repeating 
            }, 2000); // Adjust delay before collapsing 
        }
    }

    title.innerHTML = "E-Cell";
    typeWriter();
};

$(document).ready(function() {
    $(document).scroll(function() {
        $('section').each(function() {
            if ($(this).position().top <= $(document).scrollTop()) {
                $('.navbar a').removeClass('active');
                $('.navbar a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
});

// Contact Us form
//for mail
function sendMail() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var topic = document.getElementById("topic").value;
    var message = document.getElementById("message").value;
  
    // Simple validation for the email field
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      document.getElementById("emailError").innerText = "Please enter a valid email address.";
      document.getElementById("emailError").style.display = "block";
    } else {
      document.getElementById("emailError").style.display = "none";
    }
  
    // Check if other fields are empty
    if (name == "") {
      document.getElementById("nameError").innerText = "Please enter your name.";
      document.getElementById("nameError").style.display = "block";
    } else {
      document.getElementById("nameError").style.display = "none";
    }
  
    if (topic == "") {
      document.getElementById("topicError").innerText = "Please enter a subject.";
      document.getElementById("topicError").style.display = "block";
    } else {
      document.getElementById("topicError").style.display = "none";
    }
  
    if (message == "") {
      document.getElementById("messageError").innerText = "Please enter a message.";
      document.getElementById("messageError").style.display = "block";
    } else {
      document.getElementById("messageError").style.display = "none";
    }
  
    // If all fields are valid, send the email
    if (email.match(emailPattern) && name != "" && topic != "" && message != "") {
      // Your existing sendMail code...
      if (!(document.getElementById("topic").value == "")) {
        if (!(document.getElementById("name").value == "")) {
          if (!(document.getElementById("message").value == "")) {
            if (!(document.getElementById("email").value == "")) {
              emailjs.init("PyCeqjfNSfZobc5wp");
              var mails = {
                subject: document.getElementById("topic").value,
                from_name: document.getElementById("name").value,
                message: document.getElementById("message").value,
                from_email: document.getElementById("email").value,
              };
    
              emailjs.send("service_5eyujrj", "template_7cma99q", mails)
                .then(function (re) {
                  document.getElementById('alert').style.display = 'block';
                  confetti();
                  document.getElementById("alert").style.visibility = "visible";
                  document.getElementById("topic").value = "";
                  document.getElementById("name").value = "";
                  document.getElementById("message").value = "";
                  document.getElementById("email").value = "";
                });
            }
          }
        }
      }
    }
}

function closeAlert() {
    // used to check if the function is called or not because it is not working
    // console.log('closeAlert function called'); 
    document.getElementById('alert').style.display = 'none';
  }
