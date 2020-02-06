/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  // Variables
  var $window = $(window);
  var lastWindowWidth = $window.width();
  var toggle = $('.nav-toggle');
  var navigation = $('.navigation');
  var dropdown = $('.dropdown-menu');
  var dropdownBtn = $('.dropdown-btn'); // Functions

  function toggleMenu() {
    $(navigation).toggleClass('open');
    $(toggle).toggleClass('is-active');
  }

  function closeAllDropdowns() {
    if ($(dropdown).hasClass('show')) {
      $(dropdown).removeClass('show');
    }

    if ($(dropdownBtn).hasClass('toggled')) {
      $(dropdownBtn).removeClass('toggled');
    }

    $(dropdown).attr("style", " ");
    $(navigation).attr("style", " ");
    $(toggle).removeClass('is-active');
  }

  function navMargin() {
    var headerHeight = $('.site-header').outerHeight();
    $(navigation).css('margin-top', headerHeight);
  } // Open mobile menu


  $(toggle).click(function (e) {
    e.preventDefault();
    toggleMenu();
    navMargin();
  }); // Open dropdown menus

  $(dropdownBtn).click(function (e) {
    e.preventDefault();
    var $this = $(this); // Add / remove .toggled from dropdown button

    if ($this.hasClass('toggled')) {
      $this.removeClass('toggled');
    } else {
      $this.parent().parent().find('.dropdown-btn').removeClass('toggled');
      $this.toggleClass('toggled');
    } // Add / remove .show from dropdown-menu


    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
      $this.parent().parent().find('.dropdown-menu').removeClass('show');
      $this.parent().parent().find('.dropdown-menu').slideUp(350);
    } else {
      $this.parent().parent().find('.dropdown-menu').removeClass('show');
      $this.parent().parent().find('.dropdown-menu').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
    }
  }); // Close and reset on window width change

  $window.resize(function () {
    var windowWidth = $window.width();

    if (lastWindowWidth !== windowWidth) {
      if ($(navigation).hasClass('open')) {
        toggleMenu();
        navMargin();
      }

      closeAllDropdowns();
      $(navigation).removeAttr('style');
    }
  }); // Change header color on scroll

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 60) {
      $(".site-header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".site-header").removeClass("active");
    }
  }); // Dropdown out of window fallback

  $(".dropdown").on('mouseenter focus mouseleave', function (e) {
    if ($('ul', this).length) {
      var elm = $('ul:first', this);
      var off = elm.offset();
      var l = off.left;
      var w = elm.width();
      var docW = $("body").width();
      var isEntirelyVisible = l + w <= docW;

      if (!isEntirelyVisible) {
        $(this).addClass('flipped');
      } else {
        $(this).removeClass('flipped');
      }
    }
  }); // Portfolio

  $(window).load(function () {
    // Tell Isotope to watch the .portfolio container
    var $container = $('.portfolio');
    $container.isotope({
      filter: '*',
      layoutMode: 'Masonry',
      resizable: false
    }); // When the portfolio category is clicked, filter.

    $('.portfolio-filter li').click(function () {
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector
      });
      $('.portfolio-filter li').removeClass('active');
      $(this).addClass('active');
      return false;
    });
  });
})(jQuery);

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\dev\rasande\wp-content\themes\rasande\src\js\script.js */"./src/js/script.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiJHdpbmRvdyIsIndpbmRvdyIsImxhc3RXaW5kb3dXaWR0aCIsIndpZHRoIiwidG9nZ2xlIiwibmF2aWdhdGlvbiIsImRyb3Bkb3duIiwiZHJvcGRvd25CdG4iLCJ0b2dnbGVNZW51IiwidG9nZ2xlQ2xhc3MiLCJjbG9zZUFsbERyb3Bkb3ducyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwibmF2TWFyZ2luIiwiaGVhZGVySGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjc3MiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0aGlzIiwicGFyZW50IiwiZmluZCIsIm5leHQiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJyZXNpemUiLCJ3aW5kb3dXaWR0aCIsInJlbW92ZUF0dHIiLCJvbiIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwibGVuZ3RoIiwiZWxtIiwib2ZmIiwib2Zmc2V0IiwibCIsImxlZnQiLCJ3IiwiZG9jVyIsImlzRW50aXJlbHlWaXNpYmxlIiwibG9hZCIsIiRjb250YWluZXIiLCJpc290b3BlIiwiZmlsdGVyIiwibGF5b3V0TW9kZSIsInJlc2l6YWJsZSIsInNlbGVjdG9yIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QWIsR0FBQyxDQUFDRSxNQUFELENBQUQsQ0FBVXlDLElBQVYsQ0FBZSxZQUFXO0FBQ3RCO0FBQ0EsUUFBSUMsVUFBVSxHQUFHNUMsQ0FBQyxDQUFDLFlBQUQsQ0FBbEI7QUFDQTRDLGNBQVUsQ0FBQ0MsT0FBWCxDQUFtQjtBQUNoQkMsWUFBTSxFQUFFLEdBRFE7QUFFaEJDLGdCQUFVLEVBQUUsU0FGSTtBQUdoQkMsZUFBUyxFQUFFO0FBSEssS0FBbkIsRUFIc0IsQ0FRdEI7O0FBQ0FoRCxLQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQm1CLEtBQTFCLENBQWdDLFlBQVc7QUFDeEMsVUFBSThCLFFBQVEsR0FBR2pELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFhLGFBQWIsQ0FBZjtBQUNBOEIsZ0JBQVUsQ0FBQ0MsT0FBWCxDQUFtQjtBQUNoQkMsY0FBTSxFQUFFRztBQURRLE9BQW5CO0FBR0FqRCxPQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQmEsV0FBMUIsQ0FBc0MsUUFBdEM7QUFDQWIsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUMsUUFBUixDQUFpQixRQUFqQjtBQUNBLGFBQU8sS0FBUDtBQUNGLEtBUkQ7QUFTRixHQWxCRjtBQXFCSCxDQS9JRCxFQStJSWlCLE1BL0lKLEUiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiKGZ1bmN0aW9uKCQpIHtcclxuXHJcbiAgICAvLyBWYXJpYWJsZXNcclxuICAgIGxldCAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG4gICAgbGV0IGxhc3RXaW5kb3dXaWR0aCA9ICR3aW5kb3cud2lkdGgoKTtcclxuICAgIGxldCB0b2dnbGUgPSAkKCAnLm5hdi10b2dnbGUnICk7XHJcbiAgICBsZXQgbmF2aWdhdGlvbiA9ICQoICcubmF2aWdhdGlvbicgKTtcclxuICAgIGxldCBkcm9wZG93biA9ICQoICcuZHJvcGRvd24tbWVudScgKTtcclxuICAgIGxldCBkcm9wZG93bkJ0biA9ICQoICcuZHJvcGRvd24tYnRuJyApO1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uc1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICAgICAgICAkKG5hdmlnYXRpb24pLnRvZ2dsZUNsYXNzKCAnb3BlbicgKTtcclxuICAgICAgICAkKHRvZ2dsZSkudG9nZ2xlQ2xhc3MoICdpcy1hY3RpdmUnICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxEcm9wZG93bnMoKSB7XHJcbiAgICAgICAgaWYgKCQoZHJvcGRvd24pLmhhc0NsYXNzKCAnc2hvdycgKSkge1xyXG4gICAgICAgICAgICAkKGRyb3Bkb3duKS5yZW1vdmVDbGFzcyggJ3Nob3cnICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkKGRyb3Bkb3duQnRuKS5oYXNDbGFzcyggJ3RvZ2dsZWQnICkpIHtcclxuICAgICAgICAgICAgJChkcm9wZG93bkJ0bikucmVtb3ZlQ2xhc3MoICd0b2dnbGVkJyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKGRyb3Bkb3duKS5hdHRyKCBcInN0eWxlXCIsIFwiIFwiICk7XHJcbiAgICAgICAgJChuYXZpZ2F0aW9uKS5hdHRyKCBcInN0eWxlXCIsIFwiIFwiICk7XHJcbiAgICAgICAgJCh0b2dnbGUpLnJlbW92ZUNsYXNzKCAnaXMtYWN0aXZlJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5hdk1hcmdpbigpIHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlckhlaWdodCA9ICQoICcuc2l0ZS1oZWFkZXInICkub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgJChuYXZpZ2F0aW9uKS5jc3MoICdtYXJnaW4tdG9wJywgaGVhZGVySGVpZ2h0ICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wZW4gbW9iaWxlIG1lbnVcclxuICAgICQodG9nZ2xlKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuXHJcbiAgICAgICAgdG9nZ2xlTWVudSgpO1xyXG4gICAgICAgIG5hdk1hcmdpbigpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW4gZHJvcGRvd24gbWVudXNcclxuICAgICQoZHJvcGRvd25CdG4pLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBBZGQgLyByZW1vdmUgLnRvZ2dsZWQgZnJvbSBkcm9wZG93biBidXR0b25cclxuXHRcdGlmICgkdGhpcy5oYXNDbGFzcyggJ3RvZ2dsZWQnICkpIHtcclxuXHRcdFx0JHRoaXMucmVtb3ZlQ2xhc3MoICd0b2dnbGVkJyApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy5kcm9wZG93bi1idG4nICkucmVtb3ZlQ2xhc3MoICd0b2dnbGVkJyApO1xyXG5cdFx0XHQkdGhpcy50b2dnbGVDbGFzcyggJ3RvZ2dsZWQnICk7XHJcblx0XHR9XHJcblxyXG4gICAgICAgIC8vIEFkZCAvIHJlbW92ZSAuc2hvdyBmcm9tIGRyb3Bkb3duLW1lbnVcclxuICAgICAgICBpZiAoJHRoaXMubmV4dCgpLmhhc0NsYXNzKCAnc2hvdycgKSkge1xyXG4gICAgICAgICAgICAkdGhpcy5uZXh0KCkucmVtb3ZlQ2xhc3MoICdzaG93JyApO1xyXG4gICAgICAgICAgICAkdGhpcy5uZXh0KCkuc2xpZGVVcCggMzUwICk7XHJcbiAgICAgICAgICAgICR0aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICcuZHJvcGRvd24tbWVudScgKS5yZW1vdmVDbGFzcyggJ3Nob3cnICk7XHJcbiAgICAgICAgICAgICR0aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICcuZHJvcGRvd24tbWVudScgKS5zbGlkZVVwKCAzNTAgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy5kcm9wZG93bi1tZW51JyApLnJlbW92ZUNsYXNzKCAnc2hvdycgKTtcclxuXHRcdFx0JHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy5kcm9wZG93bi1tZW51JyApLnNsaWRlVXAoIDM1MCApO1xyXG5cdFx0XHQkdGhpcy5uZXh0KCkudG9nZ2xlQ2xhc3MoICdzaG93JyApO1xyXG4gICAgICAgICAgICAkdGhpcy5uZXh0KCkuc2xpZGVUb2dnbGUoIDM1MCApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsb3NlIGFuZCByZXNldCBvbiB3aW5kb3cgd2lkdGggY2hhbmdlXHJcbiAgICAkd2luZG93LnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9ICR3aW5kb3cud2lkdGgoKTtcclxuXHJcbiAgICAgICAgaWYgKGxhc3RXaW5kb3dXaWR0aCAhPT0gd2luZG93V2lkdGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJChuYXZpZ2F0aW9uKS5oYXNDbGFzcyggJ29wZW4nICkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNZW51KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2TWFyZ2luKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNsb3NlQWxsRHJvcGRvd25zKCk7XHJcbiAgICAgICAgICAgICAgICAkKG5hdmlnYXRpb24pLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGFuZ2UgaGVhZGVyIGNvbG9yIG9uIHNjcm9sbFxyXG4gICAgJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSA2MCkge1xyXG4gICAgICAgICAgICAkKFwiLnNpdGUtaGVhZGVyXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vcmVtb3ZlIHRoZSBiYWNrZ3JvdW5kIHByb3BlcnR5IHNvIGl0IGNvbWVzIHRyYW5zcGFyZW50IGFnYWluIChkZWZpbmVkIGluIHlvdXIgY3NzKVxyXG4gICAgICAgICAgICQoXCIuc2l0ZS1oZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRHJvcGRvd24gb3V0IG9mIHdpbmRvdyBmYWxsYmFja1xyXG4gICAgJChcIi5kcm9wZG93blwiKS5vbignbW91c2VlbnRlciBmb2N1cyBtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoJCgndWwnLCB0aGlzKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGVsbSA9ICQoJ3VsOmZpcnN0JywgdGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBvZmYgPSBlbG0ub2Zmc2V0KCk7XHJcbiAgICAgICAgICAgIHZhciBsID0gb2ZmLmxlZnQ7XHJcbiAgICAgICAgICAgIHZhciB3ID0gZWxtLndpZHRoKCk7XHJcbiAgICAgICAgICAgIHZhciBkb2NXID0gJChcImJvZHlcIikud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpc0VudGlyZWx5VmlzaWJsZSA9IChsICsgdyA8PSBkb2NXKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNFbnRpcmVseVZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2ZsaXBwZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2ZsaXBwZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBQb3J0Zm9saW9cclxuICAgICQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFRlbGwgSXNvdG9wZSB0byB3YXRjaCB0aGUgLnBvcnRmb2xpbyBjb250YWluZXJcclxuICAgICAgICB2YXIgJGNvbnRhaW5lciA9ICQoJy5wb3J0Zm9saW8nKTtcclxuICAgICAgICAkY29udGFpbmVyLmlzb3RvcGUoe1xyXG4gICAgICAgICAgIGZpbHRlcjogJyonLFxyXG4gICAgICAgICAgIGxheW91dE1vZGU6ICdNYXNvbnJ5JyxcclxuICAgICAgICAgICByZXNpemFibGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFdoZW4gdGhlIHBvcnRmb2xpbyBjYXRlZ29yeSBpcyBjbGlja2VkLCBmaWx0ZXIuXHJcbiAgICAgICAgJCgnLnBvcnRmb2xpby1maWx0ZXIgbGknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyJyk7XHJcbiAgICAgICAgICAgJGNvbnRhaW5lci5pc290b3BlKHtcclxuICAgICAgICAgICAgICBmaWx0ZXI6IHNlbGVjdG9yLFxyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICQoJy5wb3J0Zm9saW8tZmlsdGVyIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICB9KTtcclxuICBcclxuXHJcbn0pKCBqUXVlcnkgKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==