!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4)},function(e,t){!function(e){var t=e(window),n=t.width(),a=e(".navbar-toggler"),o=e(".site-header"),r=e(".navbar-nav"),i=e(".dropdown-btn"),s=e(".dropdown-menu");function l(){e(r).toggleClass("is-open"),e(a).toggleClass("is-active"),e(o).toggleClass("expanded")}e(a).click((function(e){e.preventDefault(),l()})),e(i).click((function(t){t.preventDefault();var n=e(this);n.hasClass("toggled")?n.removeClass("toggled"):(n.parent().parent().find(".dropdown-btn").removeClass("toggled"),n.toggleClass("toggled")),n.next().hasClass("show")?(n.next().removeClass("show"),n.next().slideUp(350),n.parent().parent().find(".dropdown-menu").removeClass("show"),n.parent().parent().find(".dropdown-menu").slideUp(350)):(n.parent().parent().find(".dropdown-menu").removeClass("show"),n.parent().parent().find(".dropdown-menu").slideUp(350),n.next().toggleClass("show"),n.next().slideToggle(350))})),t.resize((function(){var o=t.width();n!==o&&(e(r).hasClass("is-open")&&l(),e(s).hasClass("show")&&e(s).removeClass("show"),e(i).hasClass("toggled")&&e(i).removeClass("toggled"),e(s).attr("style"," "),e(r).attr("style"," "),e(a).removeClass("is-active"),e(r).removeAttr("style"))}))}(jQuery)},function(e,t){jQuery(document).ready((function(e){var t=e(".gallery").isotope({itemSelector:".gallery-item",layoutMode:"masonry",masonry:{gutter:".gallery-item-gutter"}});e(".btn-filter-group").on("click","button",(function(){var n=e(this).attr("data-filter");t.isotope({filter:n})})),e(".btn-group").each((function(t,n){var a=e(n);a.on("click","button",(function(){a.find(".selected").removeClass("selected"),e(this).addClass("selected")}))}))}))},function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementsByClassName("fade-in");if(e)for(var t=0;t<e.length;t++)new Waypoint({element:e[t],handler:function(){anime({targets:this.element,opacity:[0,1],delay:anime.stagger(100),duration:3e3,easing:"easeOutExpo"}),this.destroy()},offset:"80%"});var n=document.getElementsByClassName("slide-in-btt");if(n)for(t=0;t<n.length;t++)new Waypoint({element:n[t],handler:function(){anime({targets:this.element,opacity:[0,1],translateY:[200,0],delay:anime.stagger(100),duration:2e3,easing:"easeOutExpo"}),this.destroy()},offset:"80%"});var a=document.getElementsByClassName("slide-in-ttb");if(a)for(t=0;t<a.length;t++)new Waypoint({element:a[t],handler:function(){anime({targets:this.element,opacity:[0,1],translateY:[-200,0],delay:anime.stagger(100),duration:2e3,easing:"easeOutExpo"}),this.destroy()},offset:"80%"});var o=document.getElementsByClassName("slide-in-ltr");if(o)for(t=0;t<o.length;t++)new Waypoint({element:o[t],handler:function(){anime({targets:this.element,opacity:[0,1],translateX:[-200,0],delay:anime.stagger(100),duration:2e3,easing:"easeOutExpo"}),this.destroy()},offset:"80%"});var r=document.getElementsByClassName("slide-in-rtl");if(r)for(t=0;t<r.length;t++)new Waypoint({element:r[t],handler:function(){anime({targets:this.element,opacity:[0,1],translateX:[200,0],delay:anime.stagger(100),duration:2e3,easing:"easeOutExpo"}),this.destroy()},offset:"80%"});anime({targets:".site-header",translateY:[-200,0],opacity:[0,1],easing:"easeOutExpo"}),anime({targets:".four-zero-four:nth-of-type(2)",rotate:".1turn",translateY:"25",duration:2e3,easing:"spring(1, 80, 2, 0)",delay:1e3});var i=document.querySelector(".block-overlay"),s=document.querySelector(".title"),l=document.querySelector(".entry-title");i&&s&&l&&function(e,t,n){var a=t.clientHeight,o=t.offsetWidth;e.style.height=a+"px",anime.timeline({easing:"easeInOutQuad",duration:500}).add({targets:e,width:o,complete:function(n){e.style.right="0",t.style.opacity="1"}}).add({targets:e,width:"0"})}(i,s);var d=document.querySelector(".lead-block-overlay"),u=document.querySelector(".lead"),f=document.querySelector(".entry-lead");d&&u&&f&&function(e,t,n){var a=t.clientHeight,o=t.offsetWidth;e.style.height=a+"px",anime.timeline({easing:"easeInOutQuad",duration:500}).add({targets:e,width:o,complete:function(n){e.style.right="0",t.style.opacity="1"},delay:250}).add({targets:e,width:"0"})}(d,u);var c=document.getElementsByClassName("footer-brand");if(c)for(t=0;t<c.length;t++)new Waypoint({element:c[t],handler:function(){anime({targets:".footer-brand svg path",keyframes:[{strokeDashoffset:[anime.setDashoffset,0],duration:1e3,easing:"linear",delay:anime.stagger(400,{from:"center"})},{fill:"#fff",duration:3e3,easing:"easeOutExpo"}],direction:"normal",opacity:1}),this.destroy()},offset:"bottom-in-view"});var g,m;(document.addEventListener("input",(function(e){"textarea"===e.target.tagName.toLowerCase()&&function(e){e.style.height="inherit";var t=window.getComputedStyle(e),n=parseInt(t.getPropertyValue("border-top-width"),10)+parseInt(t.getPropertyValue("padding-top"),10)+e.scrollHeight+parseInt(t.getPropertyValue("padding-bottom"),10)+parseInt(t.getPropertyValue("border-bottom-width"),10);e.style.height=n-14+"px"}(e.target)}),!1),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))||document.querySelectorAll(".nav-link, .btn-filter, .site-footer a ").forEach((function(e){e.addEventListener("mouseenter",(function(t){anime({targets:e,scale:1.2,easing:"easeOutExpo",duration:600})})),e.addEventListener("mouseleave",(function(t){anime({targets:e,scale:1,easing:"easeOutExpo",duration:800})}))}));g=jQuery,m=g(".wpcf7-form p"),g(".wpcf7-form-control").focus((function(){g(this).parents(m).addClass("focused")})),g(".wpcf7-form-control").blur((function(){""==g(this).val()?(g(this).removeClass("filled"),g(this).parents(m).removeClass("focused")):g(this).addClass("filled")}))}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaXNvdG9wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYW5pbWF0aW9uLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiJCIsIiR3aW5kb3ciLCJ3aW5kb3ciLCJsYXN0V2luZG93V2lkdGgiLCJ3aWR0aCIsInRvZ2dsZSIsImhlYWRlciIsIm5hdmlnYXRpb24iLCJkcm9wZG93bkJ0biIsImRyb3Bkb3duIiwidG9nZ2xlTWVudSIsInRvZ2dsZUNsYXNzIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGhpcyIsInRoaXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwicGFyZW50IiwiZmluZCIsIm5leHQiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJyZXNpemUiLCJ3aW5kb3dXaWR0aCIsImF0dHIiLCJyZW1vdmVBdHRyIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiRncmlkIiwiaXNvdG9wZSIsIml0ZW1TZWxlY3RvciIsImxheW91dE1vZGUiLCJtYXNvbnJ5IiwiZ3V0dGVyIiwib24iLCJmaWx0ZXJWYWx1ZSIsImZpbHRlciIsImVhY2giLCJidXR0b25Hcm91cCIsIiRidXR0b25Hcm91cCIsImFkZENsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZhZGVJbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJXYXlwb2ludCIsImVsZW1lbnQiLCJoYW5kbGVyIiwiYW5pbWUiLCJ0YXJnZXRzIiwib3BhY2l0eSIsImRlbGF5Iiwic3RhZ2dlciIsImR1cmF0aW9uIiwiZWFzaW5nIiwiZGVzdHJveSIsIm9mZnNldCIsInNsaWRlSW5Ub3AiLCJ0cmFuc2xhdGVZIiwic2xpZGVJbkJvdHRvbSIsInNsaWRlSW5SaWdodCIsInRyYW5zbGF0ZVgiLCJzbGlkZUluTGVmdCIsInJvdGF0ZSIsImJsb2NrIiwicXVlcnlTZWxlY3RvciIsInRpdGxlIiwidGl0bGVDb250YWluZXIiLCJibG9ja0hlaWdodCIsImNsaWVudEhlaWdodCIsImJsb2NrV2lkdGgiLCJvZmZzZXRXaWR0aCIsInN0eWxlIiwiaGVpZ2h0IiwidGltZWxpbmUiLCJhZGQiLCJjb21wbGV0ZSIsInRsIiwicmlnaHQiLCJ0aXRsZVJldmVhbCIsImxlYWRCbG9jayIsImxlYWQiLCJsZWFkQ29udGFpbmVyIiwibGVhZEJsb2NrSGVpZ2h0IiwibGVhZEJsb2NrV2lkdGgiLCJsZWFkUmV2ZWFsIiwiZHJhd3N2ZyIsImtleWZyYW1lcyIsInN0cm9rZURhc2hvZmZzZXQiLCJzZXREYXNob2Zmc2V0IiwiZnJvbSIsImZpbGwiLCJkaXJlY3Rpb24iLCJmb3JtR3JvdXAiLCJldmVudCIsInRhcmdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImZpZWxkIiwiY29tcHV0ZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFyc2VJbnQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic2Nyb2xsSGVpZ2h0IiwiYXV0b0V4cGFuZCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFj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bEIsRUFBRWdCLE1BQU1vRyxRQUFRcEIsR0FBVzlFLFlBQVksWUFFdkNsQixFQUFFZ0IsTUFBTTJCLFNBQVMiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL25hdmlnYXRpb24nXHJcbmltcG9ydCAnLi9pc290b3BlJ1xyXG5pbXBvcnQgJy4vYW5pbWF0aW9uJ1xyXG4iLCIoZnVuY3Rpb24oJCkge1xyXG5cclxuICAgIGxldCAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG4gICAgbGV0IGxhc3RXaW5kb3dXaWR0aCA9ICR3aW5kb3cud2lkdGgoKTtcclxuICAgIGxldCB0b2dnbGUgPSAkKCAnLm5hdmJhci10b2dnbGVyJyApO1xyXG4gICAgbGV0IGhlYWRlciA9ICQoICcuc2l0ZS1oZWFkZXInICk7XHJcbiAgICBsZXQgbmF2aWdhdGlvbiA9ICQoICcubmF2YmFyLW5hdicgKTtcclxuICAgIGxldCBkcm9wZG93bkJ0biA9ICQoICcuZHJvcGRvd24tYnRuJyApO1xyXG4gICAgbGV0IGRyb3Bkb3duID0gJCggJy5kcm9wZG93bi1tZW51JyApO1xyXG5cclxuICAgIC8vIEZ1bmN0aW9uc1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICAgICAgICAvLyBUb2dnbGUgLm9wZW4gdG8gLm5hdmJhci1uYXZcclxuICAgICAgICAkKG5hdmlnYXRpb24pLnRvZ2dsZUNsYXNzKCAnaXMtb3BlbicgKTtcclxuICAgICAgICAvLyBUb2dnbGUgLmlzLWFjdGl2ZSB0byB0aGUgaGFtYnVyZ2VyIGljb25cclxuICAgICAgICAkKHRvZ2dsZSkudG9nZ2xlQ2xhc3MoICdpcy1hY3RpdmUnICk7XHJcbiAgICAgICAgLy8gVG9nZ2xlIC5pcy1hY3RpdmUgb24gc2l0ZS1oZWFkZXJcclxuICAgICAgICAkKGhlYWRlcikudG9nZ2xlQ2xhc3MoICdleHBhbmRlZCcgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUFsbERyb3Bkb3ducygpIHtcclxuICAgICAgICBpZiAoJChkcm9wZG93bikuaGFzQ2xhc3MoICdzaG93JyApKSB7XHJcbiAgICAgICAgICAgICQoZHJvcGRvd24pLnJlbW92ZUNsYXNzKCAnc2hvdycgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQoZHJvcGRvd25CdG4pLmhhc0NsYXNzKCAndG9nZ2xlZCcgKSkge1xyXG4gICAgICAgICAgICAkKGRyb3Bkb3duQnRuKS5yZW1vdmVDbGFzcyggJ3RvZ2dsZWQnICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoZHJvcGRvd24pLmF0dHIoIFwic3R5bGVcIiwgXCIgXCIgKTtcclxuICAgICAgICAkKG5hdmlnYXRpb24pLmF0dHIoIFwic3R5bGVcIiwgXCIgXCIgKTtcclxuICAgICAgICAkKHRvZ2dsZSkucmVtb3ZlQ2xhc3MoICdpcy1hY3RpdmUnICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3BlbiBtb2JpbGUgbWVudVxyXG4gICAgJCh0b2dnbGUpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG5cclxuICAgICAgICB0b2dnbGVNZW51KCk7XHJcbiAgXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPcGVuIGRyb3Bkb3duIG1lbnVzXHJcbiAgICAkKGRyb3Bkb3duQnRuKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIC8gcmVtb3ZlIC50b2dnbGVkIGZyb20gZHJvcGRvd24gYnV0dG9uXHJcblx0XHRpZiAoJHRoaXMuaGFzQ2xhc3MoICd0b2dnbGVkJyApKSB7XHJcblx0XHRcdCR0aGlzLnJlbW92ZUNsYXNzKCAndG9nZ2xlZCcgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCR0aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICcuZHJvcGRvd24tYnRuJyApLnJlbW92ZUNsYXNzKCAndG9nZ2xlZCcgKTtcclxuXHRcdFx0JHRoaXMudG9nZ2xlQ2xhc3MoICd0b2dnbGVkJyApO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICAvLyBBZGQgLyByZW1vdmUgLnNob3cgZnJvbSBkcm9wZG93bi1tZW51XHJcbiAgICAgICAgaWYgKCR0aGlzLm5leHQoKS5oYXNDbGFzcyggJ3Nob3cnICkpIHtcclxuICAgICAgICAgICAgJHRoaXMubmV4dCgpLnJlbW92ZUNsYXNzKCAnc2hvdycgKTtcclxuICAgICAgICAgICAgJHRoaXMubmV4dCgpLnNsaWRlVXAoIDM1MCApO1xyXG4gICAgICAgICAgICAkdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnLmRyb3Bkb3duLW1lbnUnICkucmVtb3ZlQ2xhc3MoICdzaG93JyApO1xyXG4gICAgICAgICAgICAkdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCAnLmRyb3Bkb3duLW1lbnUnICkuc2xpZGVVcCggMzUwICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICR0aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICcuZHJvcGRvd24tbWVudScgKS5yZW1vdmVDbGFzcyggJ3Nob3cnICk7XHJcblx0XHRcdCR0aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICcuZHJvcGRvd24tbWVudScgKS5zbGlkZVVwKCAzNTAgKTtcclxuXHRcdFx0JHRoaXMubmV4dCgpLnRvZ2dsZUNsYXNzKCAnc2hvdycgKTtcclxuICAgICAgICAgICAgJHRoaXMubmV4dCgpLnNsaWRlVG9nZ2xlKCAzNTAgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbG9zZSBhbmQgcmVzZXQgb24gd2luZG93IHdpZHRoIGNoYW5nZVxyXG4gICAgJHdpbmRvdy5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgd2luZG93V2lkdGggPSAkd2luZG93LndpZHRoKCk7XHJcblxyXG4gICAgICAgIGlmIChsYXN0V2luZG93V2lkdGggIT09IHdpbmRvd1dpZHRoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQobmF2aWdhdGlvbikuaGFzQ2xhc3MoICdpcy1vcGVuJyApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWVudSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjbG9zZUFsbERyb3Bkb3ducygpO1xyXG4gICAgICAgICAgICAgICAgJChuYXZpZ2F0aW9uKS5yZW1vdmVBdHRyKCAnc3R5bGUnICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAgIFxyXG59KSggalF1ZXJ5ICk7XHJcbiIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICB2YXIgJGdyaWQgPSAkKCcuZ2FsbGVyeScpLmlzb3RvcGUoe1xyXG4gICAgICBpdGVtU2VsZWN0b3I6ICcuZ2FsbGVyeS1pdGVtJyxcclxuICAgICAgbGF5b3V0TW9kZTogJ21hc29ucnknLFxyXG4gICAgICBtYXNvbnJ5IDoge1xyXG4gICAgICAgIGd1dHRlcjogJy5nYWxsZXJ5LWl0ZW0tZ3V0dGVyJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGJpbmQgZmlsdGVyIGJ1dHRvbiBjbGlja1xyXG4gICAgJCgnLmJ0bi1maWx0ZXItZ3JvdXAnKS5vbiggJ2NsaWNrJywgJ2J1dHRvbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgZmlsdGVyVmFsdWUgPSAkKCB0aGlzICkuYXR0cignZGF0YS1maWx0ZXInKTtcclxuICAgICAgLy8gdXNlIGZpbHRlckZuIGlmIG1hdGNoZXMgdmFsdWVcclxuICAgICAgJGdyaWQuaXNvdG9wZSh7IGZpbHRlcjogZmlsdGVyVmFsdWUgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGNoYW5nZSBzZWxlY3RlZCBjbGFzcyBvbiBidXR0b25zXHJcbiAgICAkKCcuYnRuLWdyb3VwJykuZWFjaCggZnVuY3Rpb24oIGksIGJ1dHRvbkdyb3VwICkge1xyXG4gICAgICB2YXIgJGJ1dHRvbkdyb3VwID0gJCggYnV0dG9uR3JvdXAgKTtcclxuICAgICAgJGJ1dHRvbkdyb3VwLm9uKCAnY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJGJ1dHRvbkdyb3VwLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICQoIHRoaXMgKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblxyXG4gIGxldCBmYWRlSW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYWRlLWluJyk7XHJcblxyXG4gIGlmIChmYWRlSW4pIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmFkZUluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG5ldyBXYXlwb2ludCh7XHJcbiAgICAgICAgZWxlbWVudDogZmFkZUluW2ldLFxyXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDEwMCksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RXhwbydcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXQ6ICc4MCUnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTbGlkZSBpbiBjb250ZW50IGJvdHRvbSB0byB0b3BcclxuICAvLyBFeGVjdXRlOiBvbiBzY3JvbGxcclxuICBsZXQgc2xpZGVJblRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlLWluLWJ0dCcpO1xyXG5cclxuICBpZiAoc2xpZGVJblRvcCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZUluVG9wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG5ldyBXYXlwb2ludCh7XHJcbiAgICAgICAgZWxlbWVudDogc2xpZGVJblRvcFtpXSxcclxuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWxlbWVudCxcclxuICAgICAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVZOiBbMjAwLCAwXSxcclxuICAgICAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMTAwKSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldDogJzgwJSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNsaWRlIGluIGNvbnRlbnQgdG9wIHRvIGJvdHRvbVxyXG4gIC8vIEV4ZWN1dGU6IG9uIHNjcm9sbFxyXG4gIGxldCBzbGlkZUluQm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGUtaW4tdHRiJyk7XHJcblxyXG4gIGlmIChzbGlkZUluQm90dG9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlSW5Cb3R0b20ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICBlbGVtZW50OiBzbGlkZUluQm90dG9tW2ldLFxyXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFstMjAwLCAwXSxcclxuICAgICAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMTAwKSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldDogJzgwJSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNsaWRlIGluIGNvbnRlbnQgbGVmdCB0byByaWdodFxyXG4gIC8vIEV4ZWN1dGU6IG9uIHNjcm9sbFxyXG4gIGxldCBzbGlkZUluUmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZS1pbi1sdHInKTtcclxuXHJcbiAgaWYgKHNsaWRlSW5SaWdodCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZUluUmlnaHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICBlbGVtZW50OiBzbGlkZUluUmlnaHRbaV0sXHJcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmVsZW1lbnQsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWDogWy0yMDAsIDBdLFxyXG4gICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigxMDApLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2Zmc2V0OiAnODAlJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2xpZGUgaW4gY29udGVudCByaWdodCB0byBsZWZ0XHJcbiAgLy8gRXhlY3V0ZTogb24gc2Nyb2xsXHJcbiAgbGV0IHNsaWRlSW5MZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGUtaW4tcnRsJyk7XHJcblxyXG4gIGlmIChzbGlkZUluTGVmdCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZUluTGVmdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgIGVsZW1lbnQ6IHNsaWRlSW5MZWZ0W2ldLFxyXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IFsyMDAsIDBdLFxyXG4gICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigxMDApLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2Zmc2V0OiAnODAlJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2xpZGUgZG93biBzaXRlIGhlYWRlclxyXG4gIC8vIEV4ZWN1dGU6IG9uIGxvYWRcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiAnLnNpdGUtaGVhZGVyJyxcclxuICAgIHRyYW5zbGF0ZVk6IFstMjAwLCAwXSxcclxuICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcclxuICB9KVxyXG5cclxuICAvLyBEcm9wIHRoZSB6ZXJvIGluIDQwNFxyXG4gIC8vIEV4ZWN1dGU6IG9uIGxvYWRcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiAnLmZvdXItemVyby1mb3VyOm50aC1vZi10eXBlKDIpJyxcclxuICAgIHJvdGF0ZTogJy4xdHVybicsXHJcbiAgICB0cmFuc2xhdGVZOiAnMjUnLFxyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICBlYXNpbmc6ICdzcHJpbmcoMSwgODAsIDIsIDApJyxcclxuICAgIGRlbGF5OiAxMDAwXHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgcmV2ZWFsIGZvciAuZW50cnktdGl0ZWxcclxuICAvLyBFeGVjdXRlOiBvbiBsb2FkXHJcbiAgbGV0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLW92ZXJsYXknKTtcclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcclxuICBsZXQgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnktdGl0bGUnKTtcclxuXHJcbiAgdmFyIHRpdGxlUmV2ZWFsID0gZnVuY3Rpb24gKGJsb2NrLCB0aXRsZSwgdGl0bGVDb250YWluZXIpIHtcclxuXHJcbiAgICB2YXIgYmxvY2tIZWlnaHQgPSB0aXRsZS5jbGllbnRIZWlnaHQ7XHJcbiAgICB2YXIgYmxvY2tXaWR0aCA9IHRpdGxlLm9mZnNldFdpZHRoO1xyXG5cclxuICAgIGJsb2NrLnN0eWxlLmhlaWdodCA9IGJsb2NrSGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICB0aXRsZUFuaW1hdGlvbigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRpdGxlQW5pbWF0aW9uKCkge1xyXG4gICAgICB2YXIgdGwgPSBhbmltZS50aW1lbGluZSh7XHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXHJcbiAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIHRsLmFkZCh7XHJcbiAgICAgICAgICB0YXJnZXRzOiBibG9jayxcclxuICAgICAgICAgIHdpZHRoOiBibG9ja1dpZHRoLFxyXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICh0bCkge1xyXG4gICAgICAgICAgICBibG9jay5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgICAgICAgICAgdGl0bGUuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hZGQoe1xyXG4gICAgICAgICAgdGFyZ2V0czogYmxvY2ssXHJcbiAgICAgICAgICB3aWR0aDogJzAnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGJsb2NrICYmIHRpdGxlICYmIHRpdGxlQ29udGFpbmVyKSB7XHJcbiAgICB0aXRsZVJldmVhbChibG9jaywgdGl0bGUsIHRpdGxlQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8vIEJsb2NrIHJldmVhbCBmb3IgLmVudHJ5LWxlYWRcclxuICAvLyBFeGVjdXRlOiBvbiBsb2FkXHJcbiAgbGV0IGxlYWRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWFkLWJsb2NrLW92ZXJsYXknKTtcclxuICBsZXQgbGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWFkJyk7XHJcbiAgbGV0IGxlYWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnktbGVhZCcpO1xyXG5cclxuICB2YXIgbGVhZFJldmVhbCA9IGZ1bmN0aW9uIChsZWFkQmxvY2ssIGxlYWQsIGxlYWRDb250YWluZXIpIHtcclxuXHJcbiAgICB2YXIgbGVhZEJsb2NrSGVpZ2h0ID0gbGVhZC5jbGllbnRIZWlnaHQ7XHJcbiAgICB2YXIgbGVhZEJsb2NrV2lkdGggPSBsZWFkLm9mZnNldFdpZHRoO1xyXG5cclxuICAgIGxlYWRCbG9jay5zdHlsZS5oZWlnaHQgPSBsZWFkQmxvY2tIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgIGxlYWRBbmltYXRpb24oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsZWFkQW5pbWF0aW9uKCkge1xyXG4gICAgICB2YXIgdGwgPSBhbmltZS50aW1lbGluZSh7XHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXHJcbiAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIHRsLmFkZCh7XHJcbiAgICAgICAgICB0YXJnZXRzOiBsZWFkQmxvY2ssXHJcbiAgICAgICAgICB3aWR0aDogbGVhZEJsb2NrV2lkdGgsXHJcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHRsKSB7XHJcbiAgICAgICAgICAgIGxlYWRCbG9jay5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgICAgICAgICAgbGVhZC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRlbGF5OiAyNTBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hZGQoe1xyXG4gICAgICAgICAgdGFyZ2V0czogbGVhZEJsb2NrLFxyXG4gICAgICAgICAgd2lkdGg6ICcwJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChsZWFkQmxvY2sgJiYgbGVhZCAmJiBsZWFkQ29udGFpbmVyKSB7XHJcbiAgICBsZWFkUmV2ZWFsKGxlYWRCbG9jaywgbGVhZCwgbGVhZENvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvLyBEcmF3IGZvb3RlciBsb2dvXHJcbiAgLy8gRXhlY3V0ZTogb24gc2Nyb2xsXHJcbiAgbGV0IGRyYXdzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb290ZXItYnJhbmQnKTtcclxuXHJcbiAgaWYgKGRyYXdzdmcpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHJhd3N2Zy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgIGVsZW1lbnQ6IGRyYXdzdmdbaV0sXHJcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiAnLmZvb3Rlci1icmFuZCBzdmcgcGF0aCcsXHJcbiAgICAgICAgICAgIGtleWZyYW1lczogW3tcclxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IFthbmltZS5zZXREYXNob2Zmc2V0LCAwXSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDQwMCwge1xyXG4gICAgICAgICAgICAgICAgICBmcm9tOiAnY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpbGw6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXQ6ICdib3R0b20taW4tdmlldydcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEV4cGFuZCB0ZXh0YXJlYSB3aGVuIHR5cGluZ1xyXG4gIC8vIEV4ZWN1cnRlOiBvbiBsaW5lYnJlYWtcclxuICB2YXIgYXV0b0V4cGFuZCA9IGZ1bmN0aW9uIChmaWVsZCkge1xyXG5cclxuICAgIGZpZWxkLnN0eWxlLmhlaWdodCA9ICdpbmhlcml0JztcclxuXHJcbiAgICB2YXIgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmaWVsZCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXRvcC13aWR0aCcpLCAxMCkgK1xyXG4gICAgICBwYXJzZUludChjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpLCAxMCkgK1xyXG4gICAgICBmaWVsZC5zY3JvbGxIZWlnaHQgK1xyXG4gICAgICBwYXJzZUludChjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpLCAxMCkgK1xyXG4gICAgICBwYXJzZUludChjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItYm90dG9tLXdpZHRoJyksIDEwKTtcclxuXHJcbiAgICBmaWVsZC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgLSAxNCArICdweCc7XHJcblxyXG4gIH07XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3RleHRhcmVhJykgcmV0dXJuO1xyXG4gICAgYXV0b0V4cGFuZChldmVudC50YXJnZXQpO1xyXG4gIH0sIGZhbHNlKTtcclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vPT09PT09PSBOb3Qgb24gbW9iaWxlID09PT09PT1cclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG4gICAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICB9XHJcblxyXG4gIGlmICghaXNNb2JpbGUoKSkge1xyXG4gICAgLy8gU2NhbGUgLm5hdi1pdGVtIHVwIGFuZCBkb3duXHJcbiAgICAvLyBFeGVjdXRlOiBvbiBob3ZlclxyXG4gICAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rLCAuYnRuLWZpbHRlciwgLnNpdGUtZm9vdGVyIGEgJyk7XHJcblxyXG4gICAgbmF2SXRlbXMuZm9yRWFjaCgobmF2SXRlbSkgPT4ge1xyXG4gICAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICB0YXJnZXRzOiBuYXZJdGVtLFxyXG4gICAgICAgICAgc2NhbGU6IDEuMixcclxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiA2MDBcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICB0YXJnZXRzOiBuYXZJdGVtLFxyXG4gICAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RXhwbycsXHJcbiAgICAgICAgICBkdXJhdGlvbjogODAwXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLz09PT09PT09PSBKUVVFUlkgPT09PT09PT09PT09XHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICAvLyBBbmltYXRlIGZvcm0gbGFiZWxzXHJcbiAgICAvLyBFeGVjdXJlIG9uIGlucHV0IGZvY3VzXHJcbiAgICBsZXQgZm9ybUdyb3VwID0gJCgnLndwY2Y3LWZvcm0gcCcpO1xyXG5cclxuICAgICQoJy53cGNmNy1mb3JtLWNvbnRyb2wnKS5mb2N1cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykucGFyZW50cyhmb3JtR3JvdXApLmFkZENsYXNzKCdmb2N1c2VkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcud3BjZjctZm9ybS1jb250cm9sJykuYmx1cihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgaWYgKGlucHV0VmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2ZpbGxlZCcpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cyhmb3JtR3JvdXApLnJlbW92ZUNsYXNzKCdmb2N1c2VkJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZmlsbGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH0pKGpRdWVyeSk7XHJcblxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=