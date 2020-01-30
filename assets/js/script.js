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
  } // Open mobile menu


  $(toggle).click(function (e) {
    e.preventDefault();
    toggleMenu();
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
      }

      closeAllDropdowns();
      $(navigation).removeAttr('style');
    }
  }); // Change header color on scroll

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $(".site-header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".site-header").removeClass("active");
    }
  });
})(jQuery);

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\dev\wp-content\themes\rasande\src\js\script.js */"./src/js/script.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiJHdpbmRvdyIsIndpbmRvdyIsImxhc3RXaW5kb3dXaWR0aCIsIndpZHRoIiwidG9nZ2xlIiwibmF2aWdhdGlvbiIsImRyb3Bkb3duIiwiZHJvcGRvd25CdG4iLCJ0b2dnbGVNZW51IiwidG9nZ2xlQ2xhc3MiLCJjbG9zZUFsbERyb3Bkb3ducyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGhpcyIsInBhcmVudCIsImZpbmQiLCJuZXh0Iiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwicmVzaXplIiwid2luZG93V2lkdGgiLCJyZW1vdmVBdHRyIiwib24iLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBRVQ7QUFDQSxNQUFJQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0UsTUFBRCxDQUFmO0FBQ0EsTUFBSUMsZUFBZSxHQUFHRixPQUFPLENBQUNHLEtBQVIsRUFBdEI7QUFDQSxNQUFJQyxNQUFNLEdBQUdMLENBQUMsQ0FBRSxhQUFGLENBQWQ7QUFDQSxNQUFJTSxVQUFVLEdBQUdOLENBQUMsQ0FBRSxhQUFGLENBQWxCO0FBQ0EsTUFBSU8sUUFBUSxHQUFHUCxDQUFDLENBQUUsZ0JBQUYsQ0FBaEI7QUFDQSxNQUFJUSxXQUFXLEdBQUdSLENBQUMsQ0FBRSxlQUFGLENBQW5CLENBUlMsQ0FVVDs7QUFDQSxXQUFTUyxVQUFULEdBQXNCO0FBQ2xCVCxLQUFDLENBQUNNLFVBQUQsQ0FBRCxDQUFjSSxXQUFkLENBQTJCLE1BQTNCO0FBQ0FWLEtBQUMsQ0FBQ0ssTUFBRCxDQUFELENBQVVLLFdBQVYsQ0FBdUIsV0FBdkI7QUFDSDs7QUFFRCxXQUFTQyxpQkFBVCxHQUE2QjtBQUN6QixRQUFJWCxDQUFDLENBQUNPLFFBQUQsQ0FBRCxDQUFZSyxRQUFaLENBQXNCLE1BQXRCLENBQUosRUFBb0M7QUFDaENaLE9BQUMsQ0FBQ08sUUFBRCxDQUFELENBQVlNLFdBQVosQ0FBeUIsTUFBekI7QUFDSDs7QUFDRCxRQUFJYixDQUFDLENBQUNRLFdBQUQsQ0FBRCxDQUFlSSxRQUFmLENBQXlCLFNBQXpCLENBQUosRUFBMEM7QUFDdENaLE9BQUMsQ0FBQ1EsV0FBRCxDQUFELENBQWVLLFdBQWYsQ0FBNEIsU0FBNUI7QUFDSDs7QUFDRGIsS0FBQyxDQUFDTyxRQUFELENBQUQsQ0FBWU8sSUFBWixDQUFrQixPQUFsQixFQUEyQixHQUEzQjtBQUNBZCxLQUFDLENBQUNNLFVBQUQsQ0FBRCxDQUFjUSxJQUFkLENBQW9CLE9BQXBCLEVBQTZCLEdBQTdCO0FBQ0FkLEtBQUMsQ0FBQ0ssTUFBRCxDQUFELENBQVVRLFdBQVYsQ0FBdUIsV0FBdkI7QUFDSCxHQTFCUSxDQTRCVDs7O0FBQ0FiLEdBQUMsQ0FBQ0ssTUFBRCxDQUFELENBQVVVLEtBQVYsQ0FBZ0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7QUFFQVIsY0FBVTtBQUViLEdBTEQsRUE3QlMsQ0FvQ1Q7O0FBQ0FULEdBQUMsQ0FBQ1EsV0FBRCxDQUFELENBQWVPLEtBQWYsQ0FBcUIsVUFBU0MsQ0FBVCxFQUFZO0FBQzdCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFJQyxLQUFLLEdBQUdsQixDQUFDLENBQUMsSUFBRCxDQUFiLENBSDZCLENBSzdCOztBQUNOLFFBQUlrQixLQUFLLENBQUNOLFFBQU4sQ0FBZ0IsU0FBaEIsQ0FBSixFQUFpQztBQUNoQ00sV0FBSyxDQUFDTCxXQUFOLENBQW1CLFNBQW5CO0FBQ0EsS0FGRCxNQUVPO0FBQ05LLFdBQUssQ0FBQ0MsTUFBTixHQUFlQSxNQUFmLEdBQXdCQyxJQUF4QixDQUE4QixlQUE5QixFQUFnRFAsV0FBaEQsQ0FBNkQsU0FBN0Q7QUFDQUssV0FBSyxDQUFDUixXQUFOLENBQW1CLFNBQW5CO0FBQ0EsS0FYa0MsQ0FhN0I7OztBQUNBLFFBQUlRLEtBQUssQ0FBQ0csSUFBTixHQUFhVCxRQUFiLENBQXVCLE1BQXZCLENBQUosRUFBcUM7QUFDakNNLFdBQUssQ0FBQ0csSUFBTixHQUFhUixXQUFiLENBQTBCLE1BQTFCO0FBQ0FLLFdBQUssQ0FBQ0csSUFBTixHQUFhQyxPQUFiLENBQXNCLEdBQXRCO0FBQ0FKLFdBQUssQ0FBQ0MsTUFBTixHQUFlQSxNQUFmLEdBQXdCQyxJQUF4QixDQUE4QixnQkFBOUIsRUFBaURQLFdBQWpELENBQThELE1BQTlEO0FBQ0FLLFdBQUssQ0FBQ0MsTUFBTixHQUFlQSxNQUFmLEdBQXdCQyxJQUF4QixDQUE4QixnQkFBOUIsRUFBaURFLE9BQWpELENBQTBELEdBQTFEO0FBRUgsS0FORCxNQU1PO0FBQ0hKLFdBQUssQ0FBQ0MsTUFBTixHQUFlQSxNQUFmLEdBQXdCQyxJQUF4QixDQUE4QixnQkFBOUIsRUFBaURQLFdBQWpELENBQThELE1BQTlEO0FBQ1RLLFdBQUssQ0FBQ0MsTUFBTixHQUFlQSxNQUFmLEdBQXdCQyxJQUF4QixDQUE4QixnQkFBOUIsRUFBaURFLE9BQWpELENBQTBELEdBQTFEO0FBQ0FKLFdBQUssQ0FBQ0csSUFBTixHQUFhWCxXQUFiLENBQTBCLE1BQTFCO0FBQ1NRLFdBQUssQ0FBQ0csSUFBTixHQUFhRSxXQUFiLENBQTBCLEdBQTFCO0FBQ0g7QUFDSixHQTFCRCxFQXJDUyxDQWlFVDs7QUFDQXRCLFNBQU8sQ0FBQ3VCLE1BQVIsQ0FBZSxZQUFZO0FBRXZCLFFBQUlDLFdBQVcsR0FBR3hCLE9BQU8sQ0FBQ0csS0FBUixFQUFsQjs7QUFFQSxRQUFJRCxlQUFlLEtBQUtzQixXQUF4QixFQUFxQztBQUU3QixVQUFJekIsQ0FBQyxDQUFDTSxVQUFELENBQUQsQ0FBY00sUUFBZCxDQUF3QixNQUF4QixDQUFKLEVBQXNDO0FBQ2xDSCxrQkFBVTtBQUNiOztBQUVERSx1QkFBaUI7QUFDakJYLE9BQUMsQ0FBQ00sVUFBRCxDQUFELENBQWNvQixVQUFkLENBQTBCLE9BQTFCO0FBQ1A7QUFDSixHQWJELEVBbEVTLENBaUZUOztBQUNBMUIsR0FBQyxDQUFDRSxNQUFELENBQUQsQ0FBVXlCLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFlBQVc7QUFDOUIsUUFBRzNCLENBQUMsQ0FBQ0UsTUFBRCxDQUFELENBQVUwQixTQUFWLEtBQXdCLEVBQTNCLEVBQStCO0FBQzNCNUIsT0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjZCLFFBQWxCLENBQTJCLFFBQTNCO0FBQ0gsS0FGRCxNQUVPO0FBQ0g7QUFDRDdCLE9BQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JhLFdBQWxCLENBQThCLFFBQTlCO0FBQ0Y7QUFDSixHQVBEO0FBU0gsQ0EzRkQsRUEyRklpQixNQTNGSixFIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIihmdW5jdGlvbigkKSB7XG5cbiAgICAvLyBWYXJpYWJsZXNcbiAgICBsZXQgJHdpbmRvdyA9ICQod2luZG93KTtcbiAgICBsZXQgbGFzdFdpbmRvd1dpZHRoID0gJHdpbmRvdy53aWR0aCgpO1xuICAgIGxldCB0b2dnbGUgPSAkKCAnLm5hdi10b2dnbGUnICk7XG4gICAgbGV0IG5hdmlnYXRpb24gPSAkKCAnLm5hdmlnYXRpb24nICk7XG4gICAgbGV0IGRyb3Bkb3duID0gJCggJy5kcm9wZG93bi1tZW51JyApO1xuICAgIGxldCBkcm9wZG93bkJ0biA9ICQoICcuZHJvcGRvd24tYnRuJyApO1xuXG4gICAgLy8gRnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgJChuYXZpZ2F0aW9uKS50b2dnbGVDbGFzcyggJ29wZW4nICk7XG4gICAgICAgICQodG9nZ2xlKS50b2dnbGVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUFsbERyb3Bkb3ducygpIHtcbiAgICAgICAgaWYgKCQoZHJvcGRvd24pLmhhc0NsYXNzKCAnc2hvdycgKSkge1xuICAgICAgICAgICAgJChkcm9wZG93bikucmVtb3ZlQ2xhc3MoICdzaG93JyApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkKGRyb3Bkb3duQnRuKS5oYXNDbGFzcyggJ3RvZ2dsZWQnICkpIHtcbiAgICAgICAgICAgICQoZHJvcGRvd25CdG4pLnJlbW92ZUNsYXNzKCAndG9nZ2xlZCcgKTtcbiAgICAgICAgfVxuICAgICAgICAkKGRyb3Bkb3duKS5hdHRyKCBcInN0eWxlXCIsIFwiIFwiICk7XG4gICAgICAgICQobmF2aWdhdGlvbikuYXR0ciggXCJzdHlsZVwiLCBcIiBcIiApO1xuICAgICAgICAkKHRvZ2dsZSkucmVtb3ZlQ2xhc3MoICdpcy1hY3RpdmUnICk7XG4gICAgfVxuXG4gICAgLy8gT3BlbiBtb2JpbGUgbWVudVxuICAgICQodG9nZ2xlKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG5cbiAgICAgICAgdG9nZ2xlTWVudSgpO1xuXG4gICAgfSk7XG5cbiAgICAvLyBPcGVuIGRyb3Bkb3duIG1lbnVzXG4gICAgJChkcm9wZG93bkJ0bikuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxuXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICAgLy8gQWRkIC8gcmVtb3ZlIC50b2dnbGVkIGZyb20gZHJvcGRvd24gYnV0dG9uXG5cdFx0aWYgKCR0aGlzLmhhc0NsYXNzKCAndG9nZ2xlZCcgKSkge1xuXHRcdFx0JHRoaXMucmVtb3ZlQ2xhc3MoICd0b2dnbGVkJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnLmRyb3Bkb3duLWJ0bicgKS5yZW1vdmVDbGFzcyggJ3RvZ2dsZWQnICk7XG5cdFx0XHQkdGhpcy50b2dnbGVDbGFzcyggJ3RvZ2dsZWQnICk7XG5cdFx0fVxuXG4gICAgICAgIC8vIEFkZCAvIHJlbW92ZSAuc2hvdyBmcm9tIGRyb3Bkb3duLW1lbnVcbiAgICAgICAgaWYgKCR0aGlzLm5leHQoKS5oYXNDbGFzcyggJ3Nob3cnICkpIHtcbiAgICAgICAgICAgICR0aGlzLm5leHQoKS5yZW1vdmVDbGFzcyggJ3Nob3cnICk7XG4gICAgICAgICAgICAkdGhpcy5uZXh0KCkuc2xpZGVVcCggMzUwICk7XG4gICAgICAgICAgICAkdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnLmRyb3Bkb3duLW1lbnUnICkucmVtb3ZlQ2xhc3MoICdzaG93JyApO1xuICAgICAgICAgICAgJHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy5kcm9wZG93bi1tZW51JyApLnNsaWRlVXAoIDM1MCApO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnLmRyb3Bkb3duLW1lbnUnICkucmVtb3ZlQ2xhc3MoICdzaG93JyApO1xuXHRcdFx0JHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy5kcm9wZG93bi1tZW51JyApLnNsaWRlVXAoIDM1MCApO1xuXHRcdFx0JHRoaXMubmV4dCgpLnRvZ2dsZUNsYXNzKCAnc2hvdycgKTtcbiAgICAgICAgICAgICR0aGlzLm5leHQoKS5zbGlkZVRvZ2dsZSggMzUwICk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENsb3NlIGFuZCByZXNldCBvbiB3aW5kb3cgd2lkdGggY2hhbmdlXG4gICAgJHdpbmRvdy5yZXNpemUoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9ICR3aW5kb3cud2lkdGgoKTtcblxuICAgICAgICBpZiAobGFzdFdpbmRvd1dpZHRoICE9PSB3aW5kb3dXaWR0aCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCQobmF2aWdhdGlvbikuaGFzQ2xhc3MoICdvcGVuJyApKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2xvc2VBbGxEcm9wZG93bnMoKTtcbiAgICAgICAgICAgICAgICAkKG5hdmlnYXRpb24pLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2hhbmdlIGhlYWRlciBjb2xvciBvbiBzY3JvbGxcbiAgICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDYwKSB7XG4gICAgICAgICAgICAkKFwiLnNpdGUtaGVhZGVyXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9yZW1vdmUgdGhlIGJhY2tncm91bmQgcHJvcGVydHkgc28gaXQgY29tZXMgdHJhbnNwYXJlbnQgYWdhaW4gKGRlZmluZWQgaW4geW91ciBjc3MpXG4gICAgICAgICAgICQoXCIuc2l0ZS1oZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoIGpRdWVyeSApOyJdLCJzb3VyY2VSb290IjoiIn0=