!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4)},function(e,t){!function(e){var t=e(window),n=t.width(),a=e(".navbar-toggler"),o=e(".site-header"),r=e(".navbar-nav"),s=e(".dropdown-btn"),i=e(".dropdown-menu");function l(){e(r).toggleClass("is-open"),e(a).toggleClass("is-active"),e(o).toggleClass("expanded")}e(a).click((function(e){e.preventDefault(),l()})),e(s).click((function(t){t.preventDefault();var n=e(this);n.hasClass("toggled")?n.removeClass("toggled"):(n.parent().parent().find(".dropdown-btn").removeClass("toggled"),n.toggleClass("toggled")),n.next().hasClass("show")?(n.next().removeClass("show"),n.next().slideUp(350),n.parent().parent().find(".dropdown-menu").removeClass("show"),n.parent().parent().find(".dropdown-menu").slideUp(350)):(n.parent().parent().find(".dropdown-menu").removeClass("show"),n.parent().parent().find(".dropdown-menu").slideUp(350),n.next().toggleClass("show"),n.next().slideToggle(350))})),t.resize((function(){var o=t.width();n!==o&&(e(r).hasClass("is-open")&&l(),e(i).hasClass("show")&&e(i).removeClass("show"),e(s).hasClass("toggled")&&e(s).removeClass("toggled"),e(i).attr("style"," "),e(r).attr("style"," "),e(a).removeClass("is-active"),e(r).removeAttr("style"))}))}(jQuery)},function(e,t){jQuery(document).ready((function(e){var t=e(".gallery").isotope({itemSelector:".gallery-item",layoutMode:"masonry",masonry:{gutter:".gallery-item-gutter"}});e(".btn-filter-group").on("click","button",(function(){var n=e(this).attr("data-filter");t.isotope({filter:n})})),e(".btn-group").each((function(t,n){var a=e(n);a.on("click","button",(function(){a.find(".selected").removeClass("selected"),e(this).addClass("selected")}))}))}))},function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementsByClassName("fade-in");if(e)for(var t=0;t<e.length;t++)new Waypoint({element:e[t],handler:function(){anime({targets:this.element,opacity:[0,1],delay:anime.stagger(100),duration:3e3,easing:"easeOutExpo"}),this.destroy()},offset:"80%"});var n=document.getElementsByClassName("slide-in-btt");if(n)for(t=0;t<n.length;t++)new Waypoint({element:n[t],handler:function(){anime({targets:this.element,opacity:[0,1],translateY:[200,0],delay:anime.stagger(100),duration:2e3,easing:"easeOutExpo"}),this.destroy()},offset:"80%"});var a=document.getElementsByClassName("slide-in-ttb");if(a)for(t=0;t<a.length;t++)new Waypoint({element:a[t],handler:function(){anime({targets:this.element,opacity:[0,1],translateY:[-200,0],delay:anime.stagger(100),duration:2e3,easing:"easeOutExpo"}),this.destroy()},offset:"80%"});var o=document.getElementsByClassName("slide-in-ltr");if(o)for(t=0;t<o.length;t++)new Waypoint({element:o[t],handler:function(){anime({targets:this.element,opacity:[0,1],translateX:[-200,0],delay:anime.stagger(100),duration:2e3,easing:"easeOutExpo"}),this.destroy()},offset:"80%"});var r=document.getElementsByClassName("slide-in-rtl");if(r)for(t=0;t<r.length;t++)new Waypoint({element:r[t],handler:function(){anime({targets:this.element,opacity:[0,1],translateX:[200,0],delay:anime.stagger(100),duration:2e3,easing:"easeOutExpo"}),this.destroy()},offset:"80%"});anime({targets:".site-header",translateY:[-200,0],opacity:[0,1],easing:"easeOutExpo"}),anime({targets:".four-zero-four:nth-of-type(2)",rotate:".1turn",translateY:"25",duration:2e3,easing:"spring(1, 80, 2, 0)",delay:1e3});var s=document.querySelector(".block-overlay"),i=document.querySelector(".title"),l=document.querySelector(".entry-title");s&&i&&l&&function(e,t,n){var a=t.clientHeight,o=t.offsetWidth;e.style.height=a+"px",anime.timeline({easing:"easeInOutQuad",duration:500}).add({targets:e,width:o,complete:function(n){e.style.right="0",t.style.opacity="1"}}).add({targets:e,width:"0"})}(s,i);var d=document.querySelector(".lead-block-overlay"),u=document.querySelector(".lead"),f=document.querySelector(".entry-lead");d&&u&&f&&function(e,t,n){var a=t.clientHeight,o=t.offsetWidth;e.style.height=a+"px",anime.timeline({easing:"easeInOutQuad",duration:500}).add({targets:e,width:o,complete:function(n){e.style.right="0",t.style.opacity="1"},delay:250}).add({targets:e,width:"0"})}(d,u),document.querySelectorAll(".nav-link, .btn-filter, .site-footer a ").forEach((function(e){e.addEventListener("mouseenter",(function(t){anime({targets:e,scale:1.1,easing:"easeOutExpo",duration:600})})),e.addEventListener("mouseleave",(function(t){anime({targets:e,scale:1,easing:"easeOutExpo",duration:800})}))}));var c=document.getElementsByClassName("footer-brand");if(c)for(t=0;t<c.length;t++)new Waypoint({element:c[t],handler:function(){anime({targets:".footer-brand svg path",keyframes:[{strokeDashoffset:[anime.setDashoffset,0],duration:1e3,easing:"linear",delay:anime.stagger(400,{from:"center"})},{fill:"#fff",duration:3e3,easing:"easeOutExpo"}],direction:"normal",opacity:1}),this.destroy()},offset:"bottom-in-view"});var g,m;document.addEventListener("input",(function(e){"textarea"===e.target.tagName.toLowerCase()&&function(e){e.style.height="inherit";var t=window.getComputedStyle(e),n=parseInt(t.getPropertyValue("border-top-width"),10)+parseInt(t.getPropertyValue("padding-top"),10)+e.scrollHeight+parseInt(t.getPropertyValue("padding-bottom"),10)+parseInt(t.getPropertyValue("border-bottom-width"),10);e.style.height=n-14+"px"}(e.target)}),!1),g=jQuery,m=g(".wpcf7-form p"),g(".wpcf7-form-control").focus((function(){g(this).parents(m).addClass("focused")})),g(".wpcf7-form-control").blur((function(){""==g(this).val()?(g(this).removeClass("filled"),g(this).parents(m).removeClass("focused")):g(this).addClass("filled")}))}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaXNvdG9wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYW5pbWF0aW9uLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiJCIsIiR3aW5kb3ciLCJ3aW5kb3ciLCJsYXN0V2luZG93V2lkdGgiLCJ3aWR0aCIsInRvZ2dsZSIsImhlYWRlciIsIm5hdmlnYXRpb24iLCJkcm9wZG93bkJ0biIsImRyb3Bkb3duIiwidG9nZ2xlTWVudSIsInRvZ2dsZUNsYXNzIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGhpcyIsInRoaXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwicGFyZW50IiwiZmluZCIsIm5leHQiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJyZXNpemUiLCJ3aW5kb3dXaWR0aCIsImF0dHIiLCJyZW1vdmVBdHRyIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiRncmlkIiwiaXNvdG9wZSIsIml0ZW1TZWxlY3RvciIsImxheW91dE1vZGUiLCJtYXNvbnJ5IiwiZ3V0dGVyIiwib24iLCJmaWx0ZXJWYWx1ZSIsImZpbHRlciIsImVhY2giLCJidXR0b25Hcm91cCIsIiRidXR0b25Hcm91cCIsImFkZENsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZhZGVJbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJXYXlwb2ludCIsImVsZW1lbnQiLCJoYW5kbGVyIiwiYW5pbWUiLCJ0YXJnZXRzIiwib3BhY2l0eSIsImRlbGF5Iiwic3RhZ2dlciIsImR1cmF0aW9uIiwiZWFzaW5nIiwiZGVzdHJveSIsIm9mZnNldCIsInNsaWRlSW5Ub3AiLCJ0cmFuc2xhdGVZIiwic2xpZGVJbkJvdHRvbSIsInNsaWRlSW5SaWdodCIsInRyYW5zbGF0ZVgiLCJzbGlkZUluTGVmdCIsInJvdGF0ZSIsImJsb2NrIiwicXVlcnlTZWxlY3RvciIsInRpdGxlIiwidGl0bGVDb250YWluZXIiLCJibG9ja0hlaWdodCIsImNsaWVudEhlaWdodCIsImJsb2NrV2lkdGgiLCJvZmZzZXRXaWR0aCIsInN0eWxlIiwiaGVpZ2h0IiwidGltZWxpbmUiLCJhZGQiLCJjb21wbGV0ZSIsInRsIiwicmlnaHQiLCJ0aXRsZVJldmVhbCIsImxlYWRCbG9jayIsImxlYWQiLCJsZWFkQ29udGFpbmVyIiwibGVhZEJsb2NrSGVpZ2h0IiwibGVhZEJsb2NrV2lkdGgiLCJsZWFkUmV2ZWFsIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJuYXZJdGVtIiwiZXZlbnQiLCJzY2FsZSIsImRyYXdzdmciLCJrZXlmcmFtZXMiLCJzdHJva2VEYXNob2Zmc2V0Iiwic2V0RGFzaG9mZnNldCIsImZyb20iLCJmaWxsIiwiZGlyZWN0aW9uIiwiZm9ybUdyb3VwIiwidGFyZ2V0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiZmllbGQiLCJjb21wdXRlZCIsImdldENvbXB1dGVkU3R5bGUiLCJwYXJzZUludCIsImdldFByb3BlcnR5VmFsdWUiLCJzY3JvbGxIZWlnaHQiLCJhdXRvRXhwYW5kIiwiZm9jdXMiLCJw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U0FBUyIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vbmF2aWdhdGlvbidcclxuaW1wb3J0ICcuL2lzb3RvcGUnXHJcbmltcG9ydCAnLi9hbmltYXRpb24nXHJcbiIsIihmdW5jdGlvbigkKSB7XHJcblxyXG4gICAgbGV0ICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcbiAgICBsZXQgbGFzdFdpbmRvd1dpZHRoID0gJHdpbmRvdy53aWR0aCgpO1xyXG4gICAgbGV0IHRvZ2dsZSA9ICQoICcubmF2YmFyLXRvZ2dsZXInICk7XHJcbiAgICBsZXQgaGVhZGVyID0gJCggJy5zaXRlLWhlYWRlcicgKTtcclxuICAgIGxldCBuYXZpZ2F0aW9uID0gJCggJy5uYXZiYXItbmF2JyApO1xyXG4gICAgbGV0IGRyb3Bkb3duQnRuID0gJCggJy5kcm9wZG93bi1idG4nICk7XHJcbiAgICBsZXQgZHJvcGRvd24gPSAkKCAnLmRyb3Bkb3duLW1lbnUnICk7XHJcblxyXG4gICAgLy8gRnVuY3Rpb25zXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG4gICAgICAgIC8vIFRvZ2dsZSAub3BlbiB0byAubmF2YmFyLW5hdlxyXG4gICAgICAgICQobmF2aWdhdGlvbikudG9nZ2xlQ2xhc3MoICdpcy1vcGVuJyApO1xyXG4gICAgICAgIC8vIFRvZ2dsZSAuaXMtYWN0aXZlIHRvIHRoZSBoYW1idXJnZXIgaWNvblxyXG4gICAgICAgICQodG9nZ2xlKS50b2dnbGVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcclxuICAgICAgICAvLyBUb2dnbGUgLmlzLWFjdGl2ZSBvbiBzaXRlLWhlYWRlclxyXG4gICAgICAgICQoaGVhZGVyKS50b2dnbGVDbGFzcyggJ2V4cGFuZGVkJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsRHJvcGRvd25zKCkge1xyXG4gICAgICAgIGlmICgkKGRyb3Bkb3duKS5oYXNDbGFzcyggJ3Nob3cnICkpIHtcclxuICAgICAgICAgICAgJChkcm9wZG93bikucmVtb3ZlQ2xhc3MoICdzaG93JyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJChkcm9wZG93bkJ0bikuaGFzQ2xhc3MoICd0b2dnbGVkJyApKSB7XHJcbiAgICAgICAgICAgICQoZHJvcGRvd25CdG4pLnJlbW92ZUNsYXNzKCAndG9nZ2xlZCcgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChkcm9wZG93bikuYXR0ciggXCJzdHlsZVwiLCBcIiBcIiApO1xyXG4gICAgICAgICQobmF2aWdhdGlvbikuYXR0ciggXCJzdHlsZVwiLCBcIiBcIiApO1xyXG4gICAgICAgICQodG9nZ2xlKS5yZW1vdmVDbGFzcyggJ2lzLWFjdGl2ZScgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPcGVuIG1vYmlsZSBtZW51XHJcbiAgICAkKHRvZ2dsZSkuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcblxyXG4gICAgICAgIHRvZ2dsZU1lbnUoKTtcclxuICBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW4gZHJvcGRvd24gbWVudXNcclxuICAgICQoZHJvcGRvd25CdG4pLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBBZGQgLyByZW1vdmUgLnRvZ2dsZWQgZnJvbSBkcm9wZG93biBidXR0b25cclxuXHRcdGlmICgkdGhpcy5oYXNDbGFzcyggJ3RvZ2dsZWQnICkpIHtcclxuXHRcdFx0JHRoaXMucmVtb3ZlQ2xhc3MoICd0b2dnbGVkJyApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy5kcm9wZG93bi1idG4nICkucmVtb3ZlQ2xhc3MoICd0b2dnbGVkJyApO1xyXG5cdFx0XHQkdGhpcy50b2dnbGVDbGFzcyggJ3RvZ2dsZWQnICk7XHJcblx0XHR9XHJcblxyXG4gICAgICAgIC8vIEFkZCAvIHJlbW92ZSAuc2hvdyBmcm9tIGRyb3Bkb3duLW1lbnVcclxuICAgICAgICBpZiAoJHRoaXMubmV4dCgpLmhhc0NsYXNzKCAnc2hvdycgKSkge1xyXG4gICAgICAgICAgICAkdGhpcy5uZXh0KCkucmVtb3ZlQ2xhc3MoICdzaG93JyApO1xyXG4gICAgICAgICAgICAkdGhpcy5uZXh0KCkuc2xpZGVVcCggMzUwICk7XHJcbiAgICAgICAgICAgICR0aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICcuZHJvcGRvd24tbWVudScgKS5yZW1vdmVDbGFzcyggJ3Nob3cnICk7XHJcbiAgICAgICAgICAgICR0aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoICcuZHJvcGRvd24tbWVudScgKS5zbGlkZVVwKCAzNTAgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy5kcm9wZG93bi1tZW51JyApLnJlbW92ZUNsYXNzKCAnc2hvdycgKTtcclxuXHRcdFx0JHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCggJy5kcm9wZG93bi1tZW51JyApLnNsaWRlVXAoIDM1MCApO1xyXG5cdFx0XHQkdGhpcy5uZXh0KCkudG9nZ2xlQ2xhc3MoICdzaG93JyApO1xyXG4gICAgICAgICAgICAkdGhpcy5uZXh0KCkuc2xpZGVUb2dnbGUoIDM1MCApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsb3NlIGFuZCByZXNldCBvbiB3aW5kb3cgd2lkdGggY2hhbmdlXHJcbiAgICAkd2luZG93LnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9ICR3aW5kb3cud2lkdGgoKTtcclxuXHJcbiAgICAgICAgaWYgKGxhc3RXaW5kb3dXaWR0aCAhPT0gd2luZG93V2lkdGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJChuYXZpZ2F0aW9uKS5oYXNDbGFzcyggJ2lzLW9wZW4nICkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNZW51KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNsb3NlQWxsRHJvcGRvd25zKCk7XHJcbiAgICAgICAgICAgICAgICAkKG5hdmlnYXRpb24pLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICAgXHJcbn0pKCBqUXVlcnkgKTtcclxuIiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciAkZ3JpZCA9ICQoJy5nYWxsZXJ5JykuaXNvdG9wZSh7XHJcbiAgICAgIGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5LWl0ZW0nLFxyXG4gICAgICBsYXlvdXRNb2RlOiAnbWFzb25yeScsXHJcbiAgICAgIG1hc29ucnkgOiB7XHJcbiAgICAgICAgZ3V0dGVyOiAnLmdhbGxlcnktaXRlbS1ndXR0ZXInLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYmluZCBmaWx0ZXIgYnV0dG9uIGNsaWNrXHJcbiAgICAkKCcuYnRuLWZpbHRlci1ncm91cCcpLm9uKCAnY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBmaWx0ZXJWYWx1ZSA9ICQoIHRoaXMgKS5hdHRyKCdkYXRhLWZpbHRlcicpO1xyXG4gICAgICAvLyB1c2UgZmlsdGVyRm4gaWYgbWF0Y2hlcyB2YWx1ZVxyXG4gICAgICAkZ3JpZC5pc290b3BlKHsgZmlsdGVyOiBmaWx0ZXJWYWx1ZSB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gY2hhbmdlIHNlbGVjdGVkIGNsYXNzIG9uIGJ1dHRvbnNcclxuICAgICQoJy5idG4tZ3JvdXAnKS5lYWNoKCBmdW5jdGlvbiggaSwgYnV0dG9uR3JvdXAgKSB7XHJcbiAgICAgIHZhciAkYnV0dG9uR3JvdXAgPSAkKCBidXR0b25Hcm91cCApO1xyXG4gICAgICAkYnV0dG9uR3JvdXAub24oICdjbGljaycsICdidXR0b24nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkYnV0dG9uR3JvdXAuZmluZCgnLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgJCggdGhpcyApLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgbGV0IGZhZGVJbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZhZGUtaW4nKTtcclxuXHJcbiAgaWYgKGZhZGVJbikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmYWRlSW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICBlbGVtZW50OiBmYWRlSW5baV0sXHJcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmVsZW1lbnQsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMTAwKSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldDogJzgwJSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNsaWRlIGluIGNvbnRlbnQgYm90dG9tIHRvIHRvcFxyXG4gIC8vIEV4ZWN1dGU6IG9uIHNjcm9sbFxyXG4gIGxldCBzbGlkZUluVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGUtaW4tYnR0Jyk7XHJcblxyXG4gIGlmIChzbGlkZUluVG9wKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlSW5Ub3AubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICBlbGVtZW50OiBzbGlkZUluVG9wW2ldLFxyXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsyMDAsIDBdLFxyXG4gICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigxMDApLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2Zmc2V0OiAnODAlJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2xpZGUgaW4gY29udGVudCB0b3AgdG8gYm90dG9tXHJcbiAgLy8gRXhlY3V0ZTogb24gc2Nyb2xsXHJcbiAgbGV0IHNsaWRlSW5Cb3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZS1pbi10dGInKTtcclxuXHJcbiAgaWYgKHNsaWRlSW5Cb3R0b20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVJbkJvdHRvbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgIGVsZW1lbnQ6IHNsaWRlSW5Cb3R0b21baV0sXHJcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmVsZW1lbnQsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWTogWy0yMDAsIDBdLFxyXG4gICAgICAgICAgICBkZWxheTogYW5pbWUuc3RhZ2dlcigxMDApLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2Zmc2V0OiAnODAlJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2xpZGUgaW4gY29udGVudCBsZWZ0IHRvIHJpZ2h0XHJcbiAgLy8gRXhlY3V0ZTogb24gc2Nyb2xsXHJcbiAgbGV0IHNsaWRlSW5SaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlLWluLWx0cicpO1xyXG5cclxuICBpZiAoc2xpZGVJblJpZ2h0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlSW5SaWdodC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgIGVsZW1lbnQ6IHNsaWRlSW5SaWdodFtpXSxcclxuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWxlbWVudCxcclxuICAgICAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiBbLTIwMCwgMF0sXHJcbiAgICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDEwMCksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RXhwbydcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXQ6ICc4MCUnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTbGlkZSBpbiBjb250ZW50IHJpZ2h0IHRvIGxlZnRcclxuICAvLyBFeGVjdXRlOiBvbiBzY3JvbGxcclxuICBsZXQgc2xpZGVJbkxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZS1pbi1ydGwnKTtcclxuXHJcbiAgaWYgKHNsaWRlSW5MZWZ0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlSW5MZWZ0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG5ldyBXYXlwb2ludCh7XHJcbiAgICAgICAgZWxlbWVudDogc2xpZGVJbkxlZnRbaV0sXHJcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgYW5pbWUoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmVsZW1lbnQsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWDogWzIwMCwgMF0sXHJcbiAgICAgICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDEwMCksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RXhwbydcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXQ6ICc4MCUnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgLy8gU2xpZGUgZG93biBzaXRlIGhlYWRlclxyXG4gIC8vIEV4ZWN1dGU6IG9uIGxvYWRcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiAnLnNpdGUtaGVhZGVyJyxcclxuICAgIHRyYW5zbGF0ZVk6IFstMjAwLCAwXSxcclxuICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcclxuICB9KVxyXG5cclxuICAvLyBEcm9wIHRoZSB6ZXJvIGluIDQwNFxyXG4gIC8vIEV4ZWN1dGU6IG9uIGxvYWRcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiAnLmZvdXItemVyby1mb3VyOm50aC1vZi10eXBlKDIpJyxcclxuICAgIHJvdGF0ZTogJy4xdHVybicsXHJcbiAgICB0cmFuc2xhdGVZOiAnMjUnLFxyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICBlYXNpbmc6ICdzcHJpbmcoMSwgODAsIDIsIDApJyxcclxuICAgIGRlbGF5OiAxMDAwXHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgcmV2ZWFsIGZvciAuZW50cnktdGl0ZWxcclxuICAvLyBFeGVjdXRlOiBvbiBsb2FkXHJcbiAgbGV0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLW92ZXJsYXknKTtcclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcclxuICBsZXQgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnktdGl0bGUnKTtcclxuXHJcbiAgdmFyIHRpdGxlUmV2ZWFsID0gZnVuY3Rpb24gKGJsb2NrLCB0aXRsZSwgdGl0bGVDb250YWluZXIpIHtcclxuXHJcbiAgICB2YXIgYmxvY2tIZWlnaHQgPSB0aXRsZS5jbGllbnRIZWlnaHQ7XHJcbiAgICB2YXIgYmxvY2tXaWR0aCA9IHRpdGxlLm9mZnNldFdpZHRoO1xyXG5cclxuICAgIGJsb2NrLnN0eWxlLmhlaWdodCA9IGJsb2NrSGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICB0aXRsZUFuaW1hdGlvbigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRpdGxlQW5pbWF0aW9uKCkge1xyXG4gICAgICB2YXIgdGwgPSBhbmltZS50aW1lbGluZSh7XHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXHJcbiAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIHRsLmFkZCh7XHJcbiAgICAgICAgICB0YXJnZXRzOiBibG9jayxcclxuICAgICAgICAgIHdpZHRoOiBibG9ja1dpZHRoLFxyXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICh0bCkge1xyXG4gICAgICAgICAgICBibG9jay5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgICAgICAgICAgdGl0bGUuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hZGQoe1xyXG4gICAgICAgICAgdGFyZ2V0czogYmxvY2ssXHJcbiAgICAgICAgICB3aWR0aDogJzAnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGJsb2NrICYmIHRpdGxlICYmIHRpdGxlQ29udGFpbmVyKSB7XHJcbiAgICB0aXRsZVJldmVhbChibG9jaywgdGl0bGUsIHRpdGxlQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8vIEJsb2NrIHJldmVhbCBmb3IgLmVudHJ5LWxlYWRcclxuICAvLyBFeGVjdXRlOiBvbiBsb2FkXHJcbiAgbGV0IGxlYWRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWFkLWJsb2NrLW92ZXJsYXknKTtcclxuICBsZXQgbGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWFkJyk7XHJcbiAgbGV0IGxlYWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnktbGVhZCcpO1xyXG5cclxuICB2YXIgbGVhZFJldmVhbCA9IGZ1bmN0aW9uIChsZWFkQmxvY2ssIGxlYWQsIGxlYWRDb250YWluZXIpIHtcclxuXHJcbiAgICB2YXIgbGVhZEJsb2NrSGVpZ2h0ID0gbGVhZC5jbGllbnRIZWlnaHQ7XHJcbiAgICB2YXIgbGVhZEJsb2NrV2lkdGggPSBsZWFkLm9mZnNldFdpZHRoO1xyXG5cclxuICAgIGxlYWRCbG9jay5zdHlsZS5oZWlnaHQgPSBsZWFkQmxvY2tIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgIGxlYWRBbmltYXRpb24oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsZWFkQW5pbWF0aW9uKCkge1xyXG4gICAgICB2YXIgdGwgPSBhbmltZS50aW1lbGluZSh7XHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsXHJcbiAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIHRsLmFkZCh7XHJcbiAgICAgICAgICB0YXJnZXRzOiBsZWFkQmxvY2ssXHJcbiAgICAgICAgICB3aWR0aDogbGVhZEJsb2NrV2lkdGgsXHJcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHRsKSB7XHJcbiAgICAgICAgICAgIGxlYWRCbG9jay5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgICAgICAgICAgbGVhZC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRlbGF5OiAyNTBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hZGQoe1xyXG4gICAgICAgICAgdGFyZ2V0czogbGVhZEJsb2NrLFxyXG4gICAgICAgICAgd2lkdGg6ICcwJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChsZWFkQmxvY2sgJiYgbGVhZCAmJiBsZWFkQ29udGFpbmVyKSB7XHJcbiAgICBsZWFkUmV2ZWFsKGxlYWRCbG9jaywgbGVhZCwgbGVhZENvbnRhaW5lcik7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE1vdmUgLm5hdi1pdGVtIHVwIGFuZCBkb3duXHJcbiAgLy8gRXhlY3V0ZTogb24gaG92ZXJcclxuICBsZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmssIC5idG4tZmlsdGVyLCAuc2l0ZS1mb290ZXIgYSAnKTtcclxuXHJcbiAgbmF2SXRlbXMuZm9yRWFjaCgobmF2SXRlbSkgPT4ge1xyXG4gICAgbmF2SXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGFuaW1lKHtcclxuICAgICAgICB0YXJnZXRzOiBuYXZJdGVtLFxyXG4gICAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxyXG4gICAgICAgIGR1cmF0aW9uOiA2MDBcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgYW5pbWUoe1xyXG4gICAgICAgIHRhcmdldHM6IG5hdkl0ZW0sXHJcbiAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxyXG4gICAgICAgIGR1cmF0aW9uOiA4MDBcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSk7XHJcblxyXG4vLyBEcmF3IGZvb3RlciBsb2dvXHJcbi8vIEV4ZWN1dGU6IG9uIHNjcm9sbFxyXG5sZXQgZHJhd3N2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvb3Rlci1icmFuZCcpO1xyXG5cclxuaWYgKGRyYXdzdmcpIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRyYXdzdmcubGVuZ3RoOyBpKyspIHtcclxuICAgIG5ldyBXYXlwb2ludCh7XHJcbiAgICAgIGVsZW1lbnQ6IGRyYXdzdmdbaV0sXHJcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICB0YXJnZXRzOiAnLmZvb3Rlci1icmFuZCBzdmcgcGF0aCcsXHJcbiAgICAgICAgICBrZXlmcmFtZXM6IFtcclxuICAgICAgICAgICAgeyBzdHJva2VEYXNob2Zmc2V0OiBbYW5pbWUuc2V0RGFzaG9mZnNldCwgMF0sIGR1cmF0aW9uOiAxMDAwLCBlYXNpbmc6ICdsaW5lYXInLCBkZWxheTogYW5pbWUuc3RhZ2dlcig0MDAsIHtmcm9tOiAnY2VudGVyJ30pfSxcclxuICAgICAgICAgICAgeyBmaWxsOiAnI2ZmZicsIGR1cmF0aW9uOiAzMDAwLCBlYXNpbmc6ICdlYXNlT3V0RXhwbyd9XHJcbiAgICAgICAgICBdLFxyXG4gICAgIFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiAnbm9ybWFsJyxcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9mZnNldDogJ2JvdHRvbS1pbi12aWV3J1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbi8vIEV4cGFuZCB0ZXh0YXJlYSB3aGVuIHR5cGluZ1xyXG4vLyBFeGVjdXJ0ZTogb24gbGluZWJyZWFrXHJcbnZhciBhdXRvRXhwYW5kID0gZnVuY3Rpb24gKGZpZWxkKSB7XHJcblxyXG4gIGZpZWxkLnN0eWxlLmhlaWdodCA9ICdpbmhlcml0JztcclxuXHJcbiAgdmFyIGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZmllbGQpO1xyXG4gIHZhciBoZWlnaHQgPSBwYXJzZUludChjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItdG9wLXdpZHRoJyksIDEwKSArXHJcbiAgICBwYXJzZUludChjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpLCAxMCkgK1xyXG4gICAgZmllbGQuc2Nyb2xsSGVpZ2h0ICtcclxuICAgIHBhcnNlSW50KGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctYm90dG9tJyksIDEwKSArXHJcbiAgICBwYXJzZUludChjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItYm90dG9tLXdpZHRoJyksIDEwKTtcclxuXHJcbiAgZmllbGQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0IC0gMTQgKyAncHgnO1xyXG5cclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0ZXh0YXJlYScpIHJldHVybjtcclxuICBhdXRvRXhwYW5kKGV2ZW50LnRhcmdldCk7XHJcbn0sIGZhbHNlKTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy89PT09PT09PT0gSlFVRVJZID09PT09PT09PT09PVxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgLy8gQW5pbWF0ZSBmb3JtIGxhYmVsc1xyXG4gIC8vIEV4ZWN1cmUgb24gaW5wdXQgZm9jdXNcclxuICBsZXQgZm9ybUdyb3VwID0gJCgnLndwY2Y3LWZvcm0gcCcpO1xyXG5cclxuICAkKCcud3BjZjctZm9ybS1jb250cm9sJykuZm9jdXMoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnRzKGZvcm1Hcm91cCkuYWRkQ2xhc3MoJ2ZvY3VzZWQnKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLndwY2Y3LWZvcm0tY29udHJvbCcpLmJsdXIoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGlucHV0VmFsdWUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgaWYgKGlucHV0VmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdmaWxsZWQnKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKGZvcm1Hcm91cCkucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2ZpbGxlZCcpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG59KShqUXVlcnkpO1xyXG5cclxufSkiXSwic291cmNlUm9vdCI6IiJ9