
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

    unAuthorizedAdminIsSignedIn: false,
    carouselRule: {
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
    },
    carouselRuleProperty: {
      loop: true,
      margin: 0,
      nav: true,
      navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1,
        }
      }
    }
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
            localStorage.setItem('thisIsAuthor', true);
          } else {
            alert('🚫 Unuathorized Admin. Please continue viewing our website as guest Instead. Thank you.');
            projectData.unAuthorizedAdminIsSignedIn = true;
            $(this).css({ 'pointer-events': 'auto' });
          }
        })
          .catch(err => {
            console.log(err + ' LOGIN CATCH BLOCK');
            $(this).css({ 'pointer-events': 'auto' });
          })
      }
    });
  });

  // LOGOUT CODE
  $('.btn-logout').click(() => {
    auth.signOut()
      .then(alert('Signed out.'))
      .then(() => {
        localStorage.removeItem('thisIsAuthor');
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

  // UPLOAD LOGIC
  const returnUploadType = () => {
    if ($('#upload').val() !== 'cars') {
      return firestore.collection('properties')
    } else {
      return firestore.collection($('#upload').val())
    }

  };

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
      data.filter(([key, value]) => value)
    );

    // RECORD TIME OF UPLOAD TOO
    const { serverTimestamp } = firebase.firestore.FieldValue;

    // once filteredData is gotten... Upload it first....
    returnUploadType().add({ ...filteredData, createdAt: serverTimestamp() })

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
          currentImageRef.put(file)
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
  });


  //******** DISPLAY BACKEND DATA IN WEBPAGE *******//

  // Reusable Display Functions
  const retrieveData = (querySnapshot, page, parent, category) => {
    $('.loader').fadeOut(700);
    $(parent).html('');

    // LOOP THROUGH ALL THE DATA GOTTEN FROM FIRESTORE
    querySnapshot.forEach(doc => {
      // GET IMAGE REFRENCE
      const imageFolder = firebase.storage().ref(`gs:/kennycent-services.appspot.com/${doc.id}`);

      // RETRIEVE IMAGES FROM IMAGE REFERENCE
      imageFolder.listAll()
        .then(imageFile => {

          // ONLY SELECT FIRST IMAGE
          imageFile.items.forEach((imageRef, idx) => {
            idx === 0 && imageRef.getDownloadURL().then(url => {

              // ADD ALL NECESSARY TO HTML (IMAGE AND DATA)
              let cumulatedData = `
                ${page === 'homepage' ?
                  `<div class="carousel-item-b single-ad ${category.id}" id="${doc.id}">
                <div class="card-box-a card-shadow">`
                  :
                  `<div class="col-md-4 single-ad ${category.id}" id="${doc.id}">
                  <div class="card-box-a card-shadow">`}
                  ${localStorage.thisIsAuthor === 'true' ?
                  `<div class="delete-ad" data-id="${doc.id}" data-category="${category.id}">
                    <i class="fa fa-ban" aria-hidden="true"></i>
                  </div>`
                  : ''}
                    <div class="img-box-a">
                      <img src="${url}" 
                      alt="${doc.data().Name ? doc.data().Name : ''} ${doc.data().Brand ? doc.data().Brand : ''} ${doc.data().Model ? doc.data().Model : ''}" 
                      class="img-a">
                    </div>
                      <div class="card-overlay">
                        <div class="card-overlay-a-content">
                          <div class="card-header-a">
                            <h2 class="card-title-a"> 

                              ${doc.data().Name ?
                  `<a href="property-single.html">${doc.data().Name}</a>`
                  :
                  `<a href="property-single.html">${doc.data().Brand ? doc.data().Brand : ''}
                                <br /> ${doc.data().Model ? doc.data().Model : ''}</a>`
                }
                            </h2>
                          </div>
                          <div class="card-body-a">
                            <a href="property-single.html" class="link-a">Click here to view
                              <span class="ion-ios-arrow-forward"></span>
                            </a>
                          </div>
                          <div class="card-footer-a">
                          ${doc.data().Brand ?
                  `<ul class="card-info d-flex justify-content-around">
                            <li>
                                <h4 class="card-info-title">Condition</h4>
                                <span>${doc.data().Condition ? doc.data().Condition : ''}</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Year</h4>
                                <span>${doc.data().Year ? doc.data().Year : ''}</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Transmission</h4>
                                <span>${doc.data().Transmission ? doc.data().Transmission : ''}</span>
                              </li>
                            </ul>`
                  :
                  `<ul class="card-info d-flex justify-content-around">
                            <li>
                                <h4 class="card-info-title">Area</h4>
                                ${doc.data().Area ?
                    `<span>${doc.data().Area}
                                  <sup>2</sup>
                                  </span>` :
                    ''}
                              </li>
                              <li>
                                <h4 class="card-info-title">Location</h4>
                                <span>${doc.data().Location ? doc.data().Location : ''}</span>
                              </li>
                              <li>
                                <h4 class="card-info-title">Garages</h4>
                                <span>${doc.data().Garage ? doc.data().Garage : ''}</span>
                              </li>
                            </ul>`
                }
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>`;

              // DIsplay the data
              $(parent).append(cumulatedData);

              // refresh The Carousel
              if (page === 'homepage') {
                let $owl = $(parent);
                $owl.trigger('destroy.owl.carousel');
                $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
                $owl.owlCarousel(projectData.carouselRule);
              }

            })

          })
        })
    });
  };

  const displayData = (page, category, parent, onStream, unSubscribeRef) => {

    const dataLengthCheck = () => {
      return page === 'homepage' ?
        category.orderBy("createdAt", "desc").limit(5) :
        category.orderBy("createdAt", "desc")
    };

    if (onStream) {
      unSubscribeRef = dataLengthCheck().onSnapshot(querySnapshot => {
        retrieveData(querySnapshot, page, parent, category)
      });

    } else {
      dataLengthCheck().get().then(querySnapshot => {
        retrieveData(querySnapshot, page, parent, category)
      })
        .catch(err => console.log(err));
    }

  };


  // FOR HOMEPAGE
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    auth.onAuthStateChanged(user => {

      let carRef = firestore.collection('cars'),
        propertyRef = firestore.collection('properties'),
        unSubscribeCarRef,
        unSubscribePropertyRef;

      if (user && projectData.unAuthorizedAdminIsSignedIn === false) {

        displayData('homepage', propertyRef, '#property-carousel', true, unSubscribePropertyRef);
        displayData('homepage', carRef, '#new-carousel', true, unSubscribeCarRef);

      } else {

        displayData('homepage', propertyRef, '#property-carousel');
        displayData('homepage', carRef, '#new-carousel');

        unSubscribeCarRef && unSubscribeCarRef();
        unSubscribePropertyRef && unSubscribePropertyRef();
      }
    });
  }

  // CARS PAGE
  if (window.location.pathname === '/car-grid.html') {
    auth.onAuthStateChanged(user => {

      let carRef = firestore.collection('cars'),
        unSubscribeCarRef;

      if (user && projectData.unAuthorizedAdminIsSignedIn === false) {
        displayData('', carRef, '#car-grid', true, unSubscribeCarRef);

      } else {
        displayData('', carRef, '#car-grid');
        unSubscribeCarRef && unSubscribeCarRef();
      }
    });
  };

  // PROPERTIES PAGE
  if (window.location.pathname === '/property-grid.html') {
    auth.onAuthStateChanged(user => {

      let propertyRef = firestore.collection('properties'),
        unSubscribePropertyRef;

      if (user && projectData.unAuthorizedAdminIsSignedIn === false) {
        displayData('', propertyRef, '#property-grid', true, unSubscribePropertyRef);

      } else {
        displayData('', propertyRef, '#property-grid');
        unSubscribePropertyRef && unSubscribePropertyRef();
      }
    });
  };

  // SINGLE PROPERTY
  $(document).on('click', '.single-ad', function (event) {
    let docId = $(this).attr('id');
    let category = $(this).attr('class').split(' ').pop();

    // SAVE TO ABOVE INFOS TO SESSION STORAGE TO USE IN SINGLE AD PAGE
    if (event.target.tagName === 'A') {
      sessionStorage.removeItem('adData');
      sessionStorage.setItem('adData', JSON.stringify({ docId: docId, category: category }));
    }
  });

  if (window.location.pathname === '/property-single.html') {
    const displaySingleAd = () => {
      const storageData = JSON.parse(sessionStorage.getItem('adData'));

      firestore.collection(storageData.category).doc(storageData.docId).get().then(doc => {

        const data = doc.data();
        const imageFolder = firebase.storage().ref(`gs:/kennycent-services.appspot.com/${doc.id}`);
        const imagesLists = [];
        let imagesListsLength;

        // RETRIEVE IMAGES FROM IMAGE REFERENCE
        imageFolder.listAll()
          .then(images => {
            imagesListsLength = images.items.length;
            images.items.forEach((image, idx) => {

              image.getDownloadURL().then(url => {
                imagesLists.push(
                  `
                  <div class="carousel-item-b">
                  <img src="${url}" alt="${data.Name ? data.Name : ''} ${data.Brand ? data.Brand : ''} ${data.Model ? data.Model : ''}-image-${idx}">
                  </div>
                  `
                )
              })
            })

          })

        const insertImages = () => {
          let interval = setInterval(() => {
            if (imagesLists.length === imagesListsLength) {
              $('.owl-carousel').owlCarousel();
              $('.owl-carousel').html(imagesLists.join(''));

              let $owl = $('.owl-carousel');
              $owl.trigger('destroy.owl.carousel');
              $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
              $owl.owlCarousel(projectData.carouselRuleProperty);
              clearInterval(interval);
            }
          }, 1000);
        };

        const insertSummaryLists = () => {
          const arr = [];
          Object.entries(data).forEach(([key, value]) => {
            switch (key) {
              case 'Name':
              case 'Brand':
              case 'Model':
              case 'Description':
              case 'Price':
              case 'Amenities':
              case 'createdAt':
                break;

              case 'Mileage':
                arr.push(`
                  <li class="d-flex justify-content-between">
                  <strong>${key}:</strong>
                  <span>${value}km</span>
                </li>
                  `);
                break;

              case 'Area':
                arr.push(`
                  <li class="d-flex justify-content-between">
                  <strong>Area:</strong>
                  <span>${value}m
                    <sup>2</sup>
                  </span>
                </li>
                  `);
                break;

              default:
                arr.push(`
                  <li class="d-flex justify-content-between">
                  <strong>${key}:</strong>
                  <span>${value}</span>
                </li>
                  `);
                break;
            };
          });

          return arr.length ? arr.join('') : '';
        };

        const insertAmenities = () => {
          if (data.Amenities && data.Amenities.length) {
            return data.Amenities.map(value => `<li>${value}</li>`).join('')
          }
        };

        const dynamicHtml = `
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                ${data.Name ?
            `<h1 class="title-single ad-name">${data.Name ? data.Name : ''}</h1>` :
            `<h1 class="title-single ad-name">${data.Brand ? data.Brand : ''} ${data.Model ? data.Model : ''}</h1>`
          }
                <span class="color-text-a ad-location">${data.Location ? data.Location : ''}</span>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="property-grid.html">ADs</a>
                  </li>
                  <li class="breadcrumb-item active ad-name" aria-current="page">
                  ${data.Name ? data.Name : ''}
                  ${data.Brand ? data.Brand : ''} ${data.Model ? data.Model : ''}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section class="property-single nav-arrow-b">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
          <div id="property-single-carousel" class="owl-carousel owl-arrow gallery-property">
          
          </div>
            <div class="row justify-content-between">
              <div class="col-md-5 col-lg-4">
              ${data.Price ?
            `<div class="property-price d-flex justify-content-center foo">
                  <div class="card-header-c d-flex">
                    <div class="card-box-ico">
                      <span class="ion-money">₦</span>
                    </div>
                    <div class="card-title-c align-self-center">
                      <h5 class="title-c ad-price">${data.Price}</h5>
                    </div>
                  </div>
                </div>` : ''}
                
                <div class="property-summary">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="title-box-d section-t4">
                        <h3 class="title-d">Quick Summary</h3>
                      </div>
                    </div>
                  </div>
                  <div class="summary-list">
                    <ul class="list">
                      ${insertSummaryLists()}
                    </ul>
                  </div>
                </div>
              </div>
              
                <div class="col-md-7 col-lg-7 section-md-t3">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d">Description</h3>
                    </div>
                  </div>
                </div>
                <div class="property-description">
                  <p class="description color-text-a no-margin">
                    ${data.Description ? data.Description : 'No Description.'}
                  </p>
                </div>
              
                  ${data.Amenities && data.Amenities.length ?
            `<div class="row section-t3">
                   <div class="col-sm-12">
                     <div class="title-box-d">
                       <h3 class="title-d">Amenities</h3>
                     </div>
                   </div>
                 </div>
                 <div class="amenities-list color-text-a">
                   <ul class="list-a no-margin ad-amenities">
                     ${insertAmenities()}
                   </ul>
                 </div>` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      `;

        $('.dynamic').html(dynamicHtml);

        // INSERT IMAGES THEN RELOED OWL CAROUSEL
        let interval = setInterval(() => {
          if ($('.owl-carousel')) {
            $('.owl-carousel').owlCarousel();
            insertImages();
            clearInterval(interval);
          }
        }, 1000);
      })

    };
    displaySingleAd();
  };


  // DELETING AN AD
  $(document).on('click', '.delete-ad', function () {

    let confirmed = confirm('Are you sure you want to delete this AD? You cannot recover once deleted!');

    if (confirmed) {
      firestore.collection(this.dataset.category).doc(this.dataset.id).delete()
      .then(()=>{
        firebase.storage().ref(`gs:/kennycent-services.appspot.com/${this.dataset.id}`).listAll()
          .then(images => {
            images.items.forEach(image => {image.delete()})
          }).catch(err => console.log(err))
      })
      .catch(err => console.log(err))

    }

  });


})(jQuery);


