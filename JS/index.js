// jshint esversion:6

/* Get from Hossam:
  - website domain.
  - map location.
  - their pictures / link to facebook page.
  - content in different the required languages.

  To-Do:
  - multiple languages (change in logo too).
*/

// LOAD PAGE -------------------------------------
function showLoading(milliseconds) {

  if ($('#loader').css('display') == 'none') {
    $('#loader').css('display', 'block');
    $('#rootDiv').css('display', 'none');
  }

  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("rootDiv").style.display = "block";
  }, milliseconds);
}

// SET-UP LANGUAGE -------------------------------------
var browserLang = (navigator.language || navigator.userLanguage).split('-')[0];

// check if browser language is either ar, en, or de. If not default to en.
var language = (browserLang.toString() == "ar") || (browserLang.toString() == "en") || (browserLang.toString() == "de") ? languages[browserLang.toString()] : languages["en"];

// EXECUTE ON FIRST LOAD ONLY
showLoading(2000);
translateContent(browserLang, true);

// NAVBAR -------------------------------------------
/* SHOW/HIDE hamburger menu */
function hamburgerToggle() {
  const x = $('.navlinks_container');

  // checking z-index to apply below for mobile screens only
  if (x.css('z-index') == '1') {
    if (x.css('display') == 'flex') {
      x.css('display', 'none');
    } else {
      x.css('display', 'flex');
    }
  }
  console.log(x.css('display'));

}

// SHOW/HIDE language menu
function langToggle() {

  const menu = $('.language_menu');

  if (menu.css('display') == 'none') {
    menu.css('display', 'block');
  } else {
    menu.css('display', 'none');
  }

}

// TRANSLATE content
function translateContent(lang, firsLoad) {
  // setting language variable equal to chosen language json
  switch (lang) {
    case 'ar':
      language = languages.ar;
      $('html').addClass("arabic");
      break;
    case 'en':
      language = languages.en;
      $('html').removeClass("arabic");
      break;
    case 'de':
      language = languages.de;
      $('html').removeClass("arabic");
      break;
    default:
      break;
  }

  // grab all elements with attribute: "lang" (with any value)
  var translatingElements = $("[lang]").get();

  // grab element's name-attribute value to match with JSON translation, then insert this translation into HTML element.
  // change each element's lang attribute to selected language to be able to change css left/right margining for arabic.
  for (let element of translatingElements) {
    let attributeName = $(element).attr("name");
    $(element).html(language[attributeName]);
    $(element).attr('lang', lang);
  }

  // RE-CREATING service cards with translations
  $(".services_cards").html(`${language.services.map(serviceTemplate).join("")}`);
  makeCardCollapsible();

  // change current flag image.
  $('.current_language').css('background-image', `url(${language.flagURL})`);

  // if a new language is chosen, show loading & close lang menu.
  if (!firsLoad) {
    showLoading(1000);
    langToggle();
    hamburgerToggle();
  }
}


// OUR SERVICES SECTION -------------------------------------
function serviceTemplate(service) {
  let p = "";

  service.details.forEach((detail) => {
    // p += `<p lang="translate" name="details">${detail}</p>`;
    p += `${detail}`;

  });

  return `<div class="service_card_container collapsible">
    <div class="service_name_icon_row">
    <img lang="${language.language}" class="service_icon" src="${service.icon}" alt="">
    <h3 lang="translate" name="service">${service.service}</h3>
    </div>
    <div lang="${language.language}" class="service_details">
      ${p}
      </div>
    </div>`;
}

// loading Services Cards
$(".services_cards").html(`${language.services.map(serviceTemplate).join("")}`);

// $(".services_cards").load(location.href + " .services_cards");

makeCardCollapsible();


// making Service Cards collapsible
function makeCardCollapsible() {

  var coll = document.getElementsByClassName("collapsible");
  var collArray = Array.prototype.slice.call(coll);


  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(collArray) {
      this.classList.toggle("active_card");

      let content = this.querySelector('.service_details');

      // OPEN/CLOSE the card
      if (content.style.display === "block") {
        content.style.display = "none";
        content.style.maxHeight = "0";
      } else {
        content.style.display = "block";
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}
