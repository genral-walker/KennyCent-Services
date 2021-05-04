
(function ($) {
  "use strict";

  let firebaseConfig = {
    apiKey: "AIzaSyBvXqlg1d4aBBNK4oRT8JS9aQYb6rZMLLM",
    authDomain: "kennycent-services.firebaseapp.com",
    projectId: "kennycent-services",
    storageBucket: "kennycent-services.appspot.com",
    messagingSenderId: "849694025919",
    appId: "1:849694025919:web:553caab7d7e3c611cb7e0a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firestore and Auth andStorage
  const firestore = firebase.firestore(), auth = firebase.auth(), storage = firebase.storage().ref();

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  var nav = $('nav');
  var navHeight = nav.outerHeight();

  /*--/ ScrollReveal /Easy scroll animations for web and mobile browsers /--*/
  window.sr = ScrollReveal();
  sr.reveal('.foo', { duration: 1000, delay: 15 });

  /*--/ Carousel owl /--*/
  $('#carousel').owlCarousel({
    loop: true,
    margin: -1,
    items: 1,
    nav: true,
    navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true
  });

  /*--/ Animate Carousel /--*/
  $('.intro-carousel').on('translate.owl.carousel', function () {
    $('.intro-content .intro-title').removeClass('zoomIn animated').hide();
    $('.intro-content .intro-price').removeClass('fadeInUp animated').hide();
    $('.intro-content .intro-title-top, .intro-content .spacial').removeClass('fadeIn animated').hide();
  });

  $('.intro-carousel').on('translated.owl.carousel', function () {
    $('.intro-content .intro-title').addClass('zoomIn animated').show();
    $('.intro-content .intro-price').addClass('fadeInUp animated').show();
    $('.intro-content .intro-title-top, .intro-content .spacial').addClass('fadeIn animated').show();
  });

  /*--/ Navbar Collapse /--*/
  $('.navbar-toggle-box-collapse').on('click', function () {
    $('body').removeClass('box-collapse-closed').addClass('box-collapse-open');
  });
  $('.close-box-collapse, .click-closed').on('click', function () {
    $('body').removeClass('box-collapse-open').addClass('box-collapse-closed');
    $('.menu-list ul').slideUp(700);
  });

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger('scroll');
  $(window).bind('scroll', function () {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $('.navbar-default').addClass('navbar-reduce');
      $('.navbar-default').removeClass('navbar-trans');
    } else {
      $('.navbar-default').addClass('navbar-trans');
      $('.navbar-default').removeClass('navbar-reduce');
    }
    if ($(window).scrollTop() > top) {
      $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
      $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Property owl /--*/
  $('#property-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });

  /*--/ Property owl owl /--*/
  $('#property-single-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1,
      }
    }
  });

  /*--/ News owl /--*/
  $('#new-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });

  /*--/ Testimonials owl /--*/
  $('#testimonial-carousel').owlCarousel({
    margin: 0,
    autoplay: true,
    nav: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeInUp',
    navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      }
    }
  });

  /*--/ Year Footer /--*/
  const date = new Date;
  $('.currentYear').text(
    date.getFullYear()
  );



  ///////////////////////
  /*--/ Project Logic /--*/
  //////////////////////

  const projectData = {
    uploadCategories: {
      carForm: ` <div class="row">
      <div class="col-md-8 mb-2">
        <div class="form-group">
          <label for="file">Add Photo</label>
          <input type="file" id="file" accept="image/*" multiple="multiple"
            class="form-control form-control-lg form-control-a">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="location">Location</label>
          <input type="text" class="form-control form-control-lg form-control-a" id="location">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="brand">Car Brand</label>
          <input type="text" class="form-control form-control-lg form-control-a" id="brand"
            placeholder="Eg Toyota, Lexus etc">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="car-model">Car Model</label>
          <input type="text" class="form-control form-control-lg form-control-a" id="car-model"
            placeholder="eg Venza, Sienna, Corolla Etc">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="year">Year</label>
          <input type="number" class="form-control form-control-lg form-control-a" id="year">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="condition">Condition</label>
          <select class="form-control form-control-lg form-control-a" id="condition">
            <option>Brand New</option>
            <option>Nigerian Used</option>
            <option>Foreign Used</option>
          </select>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="transmission">Transmission</label>
          <select class="form-control form-control-lg form-control-a" id="transmission">
            <option>Automatic</option>
            <option>Manual</option>
          </select>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="registered">Registered?</label>
          <select class="form-control form-control-lg form-control-a" id="registered">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="mileage">Mileage</label>
          <input type="number" class="form-control form-control-lg form-control-a" id="mileage"
            placeholder="Mileage (km)">

          <div class="form-group mt-3">
            <label for="price">Price</label>
            <input type="number" class="form-control form-control-lg form-control-a" id="price">
          </div>
        </div>
      </div>
      <div class="col-md-8 mb-2">
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control form-control-lg form-control-a"
            placeholder="Add more description to your Ad" id="description" cols="30" rows="30"
            style="height: 10rem;"></textarea>
        </div>
      </div>
      <div class="col-md-12">
        <button type="submit" class="btn btn-b">Upload</button>
      </div>
    </div>`,
      houseForm: `<div class="row">
      <div class="col-md-8 mb-2">
        <div class="form-group">
          <label for="file">Add Photo</label>
          <input type="file" id="file" accept="image/*" multiple="multiple"
            class="form-control form-control-lg form-control-a">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="location">Location</label>
          <input type="text" class="form-control form-control-lg form-control-a" id="location">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control form-control-lg form-control-a" id="title"
            placeholder="Title or name of the Property">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="area">Property Size (sqm)</label>
          <input type="number" class="form-control form-control-lg form-control-a" id="area">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="bedrooms">Bedrooms</label>
          <input type="number" class="form-control form-control-lg form-control-a" id="bedrooms">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="bathrooms">Bathrooms</label>
          <input type="number" class="form-control form-control-lg form-control-a" id="bathrooms">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="sale-status">For Sale Or rent?</label>
          <select class="form-control form-control-lg form-control-a" id="sale-status">
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="row">

          <div class="col-6">
            <div class="form-group">
              <label for="garage">Garage</label>
              <input type="number" class="form-control form-control-lg form-control-a" id="garage">
            </div>
          </div>

          <div class="col-6">
            <div class="form-group">
              <label for="price">Price</label>
              <input type="number" class="form-control form-control-lg form-control-a" id="price">
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="amenities">Other Amenities</label>
          <select class="form-control form-control-lg form-control-a" id="amenities" multiple style="height: 10rem;">
            <option>Parking Space</option>
            <option>24 Hours Electricity</option>
            <option>Internet</option>
            <option>Air Conditioning</option>
            <option>Security</option>
            <option>Balcony</option>
            <option>Tile Floor</option>
            <option>Dish Washer</option>
            <option>Dining Area</option>
            <option>Kitchen Cabinet</option>
            <option>Kitchen Shelf</option>
            <option>Wardrobe</option>
            <option>WIFI</option>
            <option>POP Ceiling</option>
            <option>Prepaid Meter</option>
            <option>Concrete Flooring</option>
          </select>
        </div>
      </div>
      <div class="col-md-8 mb-2">
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control form-control-lg form-control-a" placeholder="Add more description to your Ad"
            id="description" cols="30" rows="30" style="height: 10rem;"></textarea>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <button type="submit" class="btn btn-b">Upload</button>
                  </div>`,
      landForm: `<div class="row">
      <div class="col-md-8 mb-2">
        <div class="form-group">
          <label for="file">Add Photo</label>
          <input type="file" id="file" accept="image/*" multiple="multiple"
            class="form-control form-control-lg form-control-a">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="location">Location</label>
          <input type="text" class="form-control form-control-lg form-control-a" id="location">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control form-control-lg form-control-a" id="title"
            placeholder="Title or name of the Land.">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="area">Property Size (sqm)</label>
          <input type="number" class="form-control form-control-lg form-control-a" id="area">
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="land-type">Type Of Land</label>
          <select class="form-control form-control-lg form-control-a" id="land-type" placeholder="What Type of Land is This?">
            <option>Commercial Land</option>
            <option>Farmland</option>
            <option>Industrial Land</option>
            <option>Mixed-use LAnd</option>
            <option>Quarry</option>
            <option>Residential Land</option>
          </select>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="sale-status">For Sale Or Lease?</label>
              <select class="form-control form-control-lg form-control-a" id="sale-status">
                <option>For Sale</option>
                <option>For Lease</option>
              </select>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="price">Price</label>
              <input type="number" class="form-control form-control-lg form-control-a" id="price">
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="amenities">Other Amenities</label>
          <select class="form-control form-control-lg form-control-a" id="amenities" multiple style="height: 10rem;">
            <option>Parking Space</option>
            <option>Electric Supply</option>
            <option>Domestic Sewage</option>
            <option>Gas Supply</option>
            <option>Rain Water Drainage</option>
            <option>Water Supply</option>
          </select>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control form-control-lg form-control-a" placeholder="Add more description to your Ad"
            id="description" cols="30" rows="30" style="height: 10rem;"></textarea>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <button type="submit" class="btn btn-b">Upload</button>
                 </div>`
    },

    fromInputs: {
      Name: '#title',
      Brand: '#brand',
      Model: '#car-model',
      Location: '#location',
      Description: '#description',
      Status: '#sale-status',
      Price: '#price',
      Bedrooms: '#bedrooms',
      Bathrooms: '#bathrooms',
      Garage: '#garage',
      Area: '#area',
      Amenities: '#amenities',
      'Type Of Land': '#land-type',
      Year: '#year',
      Condition: '#condition',
      Transmission: '#transmission',
      Registered: '#registered',
      Mileage: '#mileage',
    },

    signedIn: false
  };

  // LOGIN CODE
  const provider = new firebase.auth.GoogleAuthProvider();
  $('.admin').click(function (event) {
    event.preventDefault();
    $(this).css({ 'pointer-events': 'none' });

    auth.onAuthStateChanged(user => {

      if (user && (user.uid === 'fBk79kiWvUNPBb00egMZyVlO7762' || user.uid === 'flvMwThkjjUHSCOKaB7QmuCE4Wo1')) {
        window.location.href = 'admin.html';

      } else if (!user) {

        auth.signInWithPopup(provider).then(userSnapshot => {
          if (userSnapshot.user.uid === 'fBk79kiWvUNPBb00egMZyVlO7762' || userSnapshot.user.uid === 'flvMwThkjjUHSCOKaB7QmuCE4Wo1') {
            window.location.href = 'admin.html';
          } else {
            alert('🚫 Unuathorized Admin. Please continue viewing our website as guest Instead. Thank you.');
          }
        })
          .catch(err => {
            alert(err + ' Please try again.');
            $(this).css({ 'pointer-events': 'auto' });
          });
      }



    });



  });

  // LOGOUT CODE
  $('.btn-logout').click(() => {
    auth.signOut()
      .then(alert('Signed out.'))
      .then(() => {
        window.location.href = 'index.html';
      })
      .catch(err => console.log(err))
  });

  // Check what type of data user wants to upload and display from related to that
  $('#upload').change(e => {

    switch (e.target.value) {
      case 'houses':
        $('.upload-type').text('Uploading A House');
        $('.form-upload').html(projectData.uploadCategories.houseForm);
        break;

      case 'land':
        $('.upload-type').text('Uploading A Land');
        $('.form-upload').html(projectData.uploadCategories.landForm);
        break;

      default:
        $('.upload-type').text('Uploading A Car');
        $('.form-upload').html(projectData.uploadCategories.carForm);
        break;
    }
  });

  // GET ALL UPLOAD FORM DATA INPUTED
  $('.form-upload').submit(function (event) {
    event.preventDefault();

    // UI CHANGES TO SHOW UPLOAIND
    $(this).css({ 'pointer-events': 'none' });
    $('.form-upload button').text('Uploading...');

    // GET ALL THE DATA FOR A FORM SESSION UPLOADED
    const data = Object.entries(projectData.fromInputs).map(([key, value]) => [key, $(value).val()]);

    // FILTER THE DATA TO RETURN ONLY THOSE WITH VALUES 
    const filteredData = Object.fromEntries(
      data.filter(([key, value]) => value
      ));


    // once filteredData is gotten... Upload it first....
    firestore.collection($('#upload').val()).add(filteredData)
      // ...Then Upload the Image
      .then(dataSnapshot => {
        // GET ONLY THE IMAGE TAG'S DATA
        const imageUploads = document.querySelector('#file').files;

        // Create a reference to folder to contain all this particular upload's images
        const currentCategoryRef = storage.child(dataSnapshot.id);

        for (let i = 0; i < imageUploads.length; i++) {
          let file = imageUploads[i];

          // Create a reference to the file under the currentCategoryRef
          const currentImageRef = storage.child(`${currentCategoryRef}/${file.name}`);

          // Upload the single image 
          currentImageRef.put(file);
        }
      })
      .then(() => {
        // UI CHANGES TO SHOW UPLOADED
        $(this).css({ 'pointer-events': 'auto' });
        alert('Data Uploaded');
        document.querySelector('.form-upload').reset();
        $('.form-upload button').text('Upload');
      })
      .catch(error => alert(error));
    ;
  });


  // DISPLAY BACKEND DATA IN WEBPAGE

  // HOMEPAGE

  // CARS PAGE

  // PROPERTIES PAGE

  // SINGLE PROPERTY


  /*
  firestore.collection('cars').get().then(querySnapshot => {
      querySnapshot.forEach((doc) => {
        console.log( doc.id, doc.data());
      });
    });
  */

})(jQuery);

/**
 * Make all the image folder become one
 * Delete unnecessary images
 * Prevent the user from accesing the admin page if it isn't me or kenny.
 * work on authenticating only me and Mr Kenny
 * Uploading files should have an admin page which authenticates me and Kenny.
 * We Two should be the only ones capable of uoloading and deleting from the SITE.
 * Work on uploading files on the page and reflecting on db
 * Mileage, Price and area should have their sign when being uploaded to the ui
 ***** When uploading and user leaves without finishing upload, they shuolf be preomted first of they wish to discard the whole work.

 * Work on deletiing AD on page and reflecting on DB. This should bring a Pop-UP to confirm deletion (confrim is enough)
 * Close off test mode in firestore and storage
 * Add a sign out button
 *
 * check to see if user is still logged in, if still logged in use snapshot to continue fecthing data
 * user shouln't be able to upload if they arent't regocnised.
 * */

