(function(){"use strict";function e(){var e=document.querySelectorAll(".contactFormItem input, .contactFormItem textarea"),o=document.querySelectorAll(".contactFormItem span"),s=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r={name:e[0].value,email:e[1].value,message:e[2].value,name_error:o[0],email_error:o[1]},l={name_status:!0,email_status:!0};t(r,l),""===r.name&&(r.name_error.classList.add("contactFormError--active"),l.name_status=!1),s.test(r.email)||(r.email_error.classList.add("contactFormError--active"),l.email_status=!1),l.name_status&&l.email_status&&a(r)}function a(e){var a=new XMLHttpRequest,t="name="+e.name+"&email="+e.email+"&message="+e.message;a.open("POST","http://locastic.com/api/v1/fe-dev",!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.onload=function(){4==this.readyState&&200==this.status?console.log("Your message has been successfully sent!"):console.log("Your message could not be sent!")},a.onerror=function(){console.log("Your message could not be sent!")},a.send(t)}function t(e,a){e.name_error.classList.remove("contactFormError--active"),e.email_error.classList.remove("contactFormError--active");for(var t in a)a.hasOwnProperty(t)&&(t=!0)}document.querySelector('[data-btn="submit_form"]').addEventListener("click",e)})(),$(document).ready(function(){(function(){$("#slider").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,fade:!0,draggable:!1,dots:!0,dotsClass:"slick-dots sliderDots",arrows:!1,cssEase:"linear",adaptiveHeight:!0})})(),$(".headerHamburger, .headerMobileTrackClose").on("click",function(e){var a=this.getAttribute("data-nav");if(""!==a&&null!==a){var t=$(".headerMobile"),o=$("body");switch(a){case"open":t.addClass("headerMobile--active"),o.addClass("headerMobileOverflow--disable");break;case"close":t.removeClass("headerMobile--active"),o.removeClass("headerMobileOverflow--disable")}}})});
//# sourceMappingURL=app.js.map
