jQuery(document).ready(function ($) {
  "use strict";

  //Contact
  $('form.contactForm').submit(function () {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;
    else var str = $(this).serialize();

    // SEND THE MAIL TO ME
    Email.send({
      SecureToken: "736c8653-5eef-4bc2-b325-77e6acba759a",
      To: "kennycentservices@gmail.com",
      From: $('#email-email').val(),
      Subject: $('#email-name').val() + " Sent You A Message From Your Website. 🥳",
      Body: "Name 🧑 : " + $('#email-name').val() + "<br/>" + "Subject 📚 : " + $('#email-subject').val() + "<br/>" + "Message 📧 : " + $('#email-message').val()
    }).then(
      message => {
        if (message == 'OK') {

          const name = $('#email-name').val();
          // SEND AN AUTOMATED EMAIL BACK TO THE SENDER
          Email.send({
            SecureToken: "736c8653-5eef-4bc2-b325-77e6acba759a",
            To: $('#email-email').val(),
            From: "kennycentservices@gmail.com",
            Subject: "Message Recieved 🏠",
            Body: `<h2>Hello ${name} 😃</h2> <p>We are glad you reached out to us about our services. <br/> This email is to let you know we have received your message and will be in touch with you soon. <br/> Be rest assured we are here for attend to you diligently. Thank you.<br/><br/> kennycent Services.</p>`
          });

          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.contactForm').find("input, textarea").val("");
        } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html(message);
        }
      }
    );

    return false;
  });

});
