import "./base.css";
import ReactDOM from "react-dom";
import React from "react";
import ReactGA from "react-ga";
import HomeContainer from "./component/home.jsx";
import $ from "jquery";


const trackingId = "#"; // Saved in secret file
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname);

function isMobile() {
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    return isMobile.matches ? true : false
}

function fadeInOnScroll($elem) {
  $(window).on('scroll', function() {
    const $window = $(window),
      docViewTop = $window.scrollTop(),
      docViewBottom = docViewTop + $window.height(),
      elemTop = $elem.offset().top,
      elemBottom = elemTop + $elem.height();

    if (elemBottom < docViewBottom) {
      $elem.removeClass('hidden');
      $elem.addClass('fade-in');
    }
  });
}

$(function() {
  var mobile = isMobile();

  $('.parallax_content .content').each(function(index) {
    const id_name = "content_" + index;
    $( this ).attr("id", id_name)
    if (!mobile) {
      fadeInOnScroll($("#" + id_name))
    } else {
      $('#' + id_name).removeClass('hidden');
      $('#' + id_name).addClass('fade-in');
    }
  });

  if ($('#content_0').is(':visible')) {
    $('#content_0').removeClass('hidden');
    $('#content_0').addClass('fade-in');
  }
});

export { isMobile };

const wrapper = document.getElementById("profile_container");
wrapper ? ReactDOM.render(<HomeContainer />, wrapper) : false;
