!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,y=Math.max,p=Math.min,m=function(){return s.Date.now()};function g(e,t,n){var o,r,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=o,i=r;return o=r=void 0,l=t,f=e.apply(i,n)}function T(e){return l=e,a=setTimeout(w,t),d?g(e):f}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function w(){var e=m();if(j(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function O(e){return a=void 0,v&&o?g(e):(o=r=void 0,f)}function x(){var e=m(),n=j(e);if(o=arguments,r=this,c=e,n){if(void 0===a)return T(c);if(s)return a=setTimeout(w,t),g(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=h(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?y(h(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},x.flush=function(){return void 0===a?f:O(m())},x}function b(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=f.test(e);return i||a.test(e)?c(e.slice(2),i?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};var T=document.querySelector("#vimeo-player"),j=new Vimeo.Player(T);j.on("play",(function(e){console.log("played the video!",e.seconds),localStorage.setItem("videoplayer-current-time",e.seconds)})),j.getVideoTitle().then((function(e){console.log("title:",e)}));var w=localStorage.getItem("videoplayer-current-time");j.setCurrentTime(w).then((function(e){console.log(e)})).catch((function(e){e.name})),n(j.setCurrentTime,1e3)}();
//# sourceMappingURL=02-video.2382170c.js.map
