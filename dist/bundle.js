!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(w[e]&&g[e]){for(var r in g[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(_[r]=n[r]);0==--v&&0===h&&j()}}(e,r),n&&n(e,r)};var r,t=!0,o="43181403bcbf6de40ead",i=1e4,a={},s=[],c=[];function l(e){var n=E[e];if(!n)return O;var t=function(t){return n.hot.active?(E[t]?-1===E[t].parents.indexOf(e)&&E[t].parents.push(e):(s=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),O(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return O[e]},set:function(n){O[e]=n}}};for(var i in O)Object.prototype.hasOwnProperty.call(O,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,o(i));return t.e=function(e){return"ready"===u&&p("prepare"),h++,O.e(e).then(n,function(e){throw n(),e});function n(){h--,"prepare"===u&&(y[e]||x(e),0===h&&0===v&&j())}},t.t=function(e,n){return 1&n&&(e=t(e)),O.t(e,-2&n)},t}var d=[],u="idle";function p(e){u=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var f,_,m,v=0,h=0,y={},g={},w={};function b(e){return+e+""===e?+e:e}function k(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return t=e,p("check"),function(e){return e=e||1e4,new Promise(function(n,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,i=O.p+""+o+".hot-update.json";t.open("GET",i,!0),t.timeout=e,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+i+" timed out."));else if(404===t.status)n();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void r(e)}n(e)}}})}(i).then(function(e){if(!e)return p("idle"),null;g={},y={},w=e.c,m=e.h,p("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});return _={},x(0),"prepare"===u&&0===h&&0===v&&j(),n})}function x(e){w[e]?(g[e]=!0,v++,function(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=O.p+""+e+"."+o+".hot-update.js",n.appendChild(r)}(e)):y[e]=!0}function j(){p("ready");var e=f;if(f=null,e)if(t)Promise.resolve().then(function(){return C(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&n.push(b(r));e.resolve(n)}}function C(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var r,t,i,c,l;function d(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,a=o.chain;if((c=E[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<c.parents.length;s++){var l=c.parents[s],d=E[l];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(d.hot._acceptedDependencies[i]?(r[l]||(r[l]=[]),f(r[l],[i])):(delete r[l],n.push(l),t.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function f(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var v={},h=[],y={},g=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var k in _)if(Object.prototype.hasOwnProperty.call(_,k)){var x;l=b(k);var j=!1,C=!1,T=!1,D="";switch((x=_[k]?d(l):{type:"disposed",moduleId:k}).chain&&(D="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+x.moduleId+D));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+D));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(j=new Error("Aborted because "+l+" is not accepted"+D));break;case"accepted":n.onAccepted&&n.onAccepted(x),C=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),T=!0;break;default:throw new Error("Unexception type "+x.type)}if(j)return p("abort"),Promise.reject(j);if(C)for(l in y[l]=_[l],f(h,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,l)&&(v[l]||(v[l]=[]),f(v[l],x.outdatedDependencies[l]));T&&(f(h,[x.moduleId]),y[l]=g)}var M,I=[];for(t=0;t<h.length;t++)l=h[t],E[l]&&E[l].hot._selfAccepted&&I.push({module:l,errorHandler:E[l].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var H,P,S=h.slice();S.length>0;)if(l=S.pop(),c=E[l]){var q={},L=c.hot._disposeHandlers;for(i=0;i<L.length;i++)(r=L[i])(q);for(a[l]=q,c.hot.active=!1,delete E[l],delete v[l],i=0;i<c.children.length;i++){var N=E[c.children[i]];N&&(M=N.parents.indexOf(l))>=0&&N.parents.splice(M,1)}}for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(c=E[l]))for(P=v[l],i=0;i<P.length;i++)H=P[i],(M=c.children.indexOf(H))>=0&&c.children.splice(M,1);for(l in p("apply"),o=m,y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var A=null;for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(c=E[l])){P=v[l];var U=[];for(t=0;t<P.length;t++)if(H=P[t],r=c.hot._acceptedDependencies[H]){if(-1!==U.indexOf(r))continue;U.push(r)}for(t=0;t<U.length;t++){r=U[t];try{r(P)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:P[t],error:e}),n.ignoreErrored||A||(A=e)}}}for(t=0;t<I.length;t++){var R=I[t];l=R.module,s=[l];try{O(l)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:r,originalError:e}),n.ignoreErrored||A||(A=r),A||(A=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||A||(A=e)}}return A?(p("fail"),Promise.reject(A)):(p("idle"),new Promise(function(e){e(h)}))}var E={};function O(n){if(E[n])return E[n].exports;var t=E[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:k,apply:C,status:function(e){if(!e)return u;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:a[e]};return r=void 0,n}(n),parents:(c=s,s=[],c),children:[]};return e[n].call(t.exports,t,t.exports,l(n)),t.l=!0,t.exports}O.m=e,O.c=E,O.d=function(e,n,r){O.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},O.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},O.t=function(e,n){if(1&n&&(e=O(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(O.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)O.d(r,t,function(n){return e[n]}.bind(null,t));return r},O.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return O.d(n,"a",n),n},O.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},O.p="",O.h=function(){return o},l(4)(O.s=4)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n/* Карусель */\n\nvar fontColor = "#232323",\n    mainColor = "#4EC2F8"; // Цвета для индикаторов\n\nvar screenClass = "works__screens-active",\n    descriptionClass = "works__description-active",\n    indicatorClass = "works__indicators_dot-active"; // Классы, для анимации карусели (активные элементы)\n\nvar _ref = [document.getElementsByClassName("works__screens"), document.getElementsByClassName("works__description"), document.getElementsByClassName("works__indicators_dot")],\n    worksScreens = _ref[0],\n    worksDescription = _ref[1],\n    indicators = _ref[2]; // Массив элементов, которые необходимо анимировать каруселью\n\nvar carouselTick = 10000; // Время на одну итерацию карусели\n\n/* Задаём начальный state */\nfor (var i = 0; i < worksScreens.length; i++) {\n    worksScreens[i].style.opacity = "0";\n    worksScreens[i].style.animation = "none";\n    worksScreens[i].style.left = "-50rem";\n\n    worksDescription[i].style.opacity = "0";\n    worksDescription[i].style.animation = "none";\n}\n\n/* Вешаем обработчики событий на индикаторы */\nfor (var _i = 0; _i < indicators.length; _i++) {\n    indicators[_i].addEventListener("click", function () {\n        var id = this.getAttribute("data-id");\n\n        /* Снимаем предыдущие интерфалы */\n        clearInterval(screenCarousel);\n        clearInterval(descriptionCarousel);\n        clearInterval(indicatorsCarousel);\n\n        /* Анимируем необходимый элемент */\n        initializeCarousel(worksScreens, id, screenClass)();\n        initializeCarousel(worksDescription, id, descriptionClass)();\n        initializeCarousel(indicators, id, indicatorClass)();\n\n        /* Снова запускаем интервалы */\n        screenCarousel = setInterval(initializeCarousel(worksScreens, +id + 1, screenClass), carouselTick);\n\n        descriptionCarousel = setInterval(initializeCarousel(worksDescription, +id + 1, descriptionClass), carouselTick);\n\n        indicatorsCarousel = setInterval(initializeCarousel(indicators, +id + 1, indicatorClass), carouselTick);\n    });\n}\n\n/**\r\n * Функция для старта карасели\r\n * @param {Array<HTMLElement>} elements Массив элементов, которые нужно использовать в кареселе\r\n * @param {number} current Индекс элемента, с которого нужно начать\r\n * @param {string} className Название класса, анимарующий карусель\r\n */\nfunction initializeCarousel(elements) {\n    var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n    var className = arguments[2];\n\n    var elems = elements;\n\n    var next = current;\n    next = next >= elems.length ? 0 : next;\n\n    return function () {\n        for (var _i2 = 0; _i2 < elems.length; _i2++) {\n            elems[_i2].classList.remove(className);\n        }\n\n        elems[next].classList.add(className);\n\n        next++;\n\n        next = next >= elems.length ? 0 : next;\n    };\n}\n\n/* Запускаем карусель */\nvar screenCarousel = setInterval(initializeCarousel(worksScreens, 1, screenClass), carouselTick);\n\nvar descriptionCarousel = setInterval(initializeCarousel(worksDescription, 1, descriptionClass), carouselTick);\n\nvar indicatorsCarousel = setInterval(initializeCarousel(indicators, 1, indicatorClass), carouselTick);\n\n//# sourceURL=webpack:///./js/parts/carousel.js?')},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = typingText;\n/**\r\n * Функция, создающаяя анимацию печати сообщения\r\n * @param {string} message Сообщение, которое необходимо напечатать\r\n * @param {string} whereToWrite Строка, в которую необходимо напечатать сообщение\r\n * @param {number} tick Время в ms, за которое будет происходить печать одного символа\r\n * @param {number} delay Задержка перед началом печати сообщения\r\n */\nfunction typingText(message, whereToWrite) {\n    var tick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;\n    var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n    var fullMessage = message; // Текст, который нужно записывать\n    var writeTo = whereToWrite,\n        // элемент куда записывать\n    del = delay,\n        // Задержка перед написанием\n    time = tick; // Время на написание одного символа в ms\n\n    var currentMessage = \"\"; // Переменная для поочерёдной записи сообщения\n\n    (function () {\n        var _loop = function _loop(j) {\n            setTimeout(function () {\n                currentMessage += fullMessage[j];\n                writeTo.innerHTML = currentMessage;\n                writeTo.innerHTML += j != fullMessage.length - 1 ? '|' : '';\n            }, time * j + del);\n        };\n\n        for (var j = 0; j < fullMessage.length; j++) {\n            _loop(j);\n        }\n    })();\n}\n\n//# sourceURL=webpack:///./js/functions/typingFunction.js?")},function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _typingFunction = __webpack_require__(1);\n\nvar _typingFunction2 = _interopRequireDefault(_typingFunction);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* Анимация печати стартового текста */\n\nvar tick = 30; // Время на печать одного символа\n\nvar _ref = [document.querySelector(".header__text-main"), document.getElementsByClassName("header__text-sub") /* Массив */\n],\n    mainText = _ref[0],\n    subText = _ref[1]; /* Деструктивное присваивание */\n\nvar elements = [{\n    node: mainText,\n    message: mainText.innerHTML\n}, {\n    node: subText[0],\n    message: subText[0].innerHTML\n}, {\n    node: subText[1],\n    message: subText[1].innerHTML\n}];\n\nvar delay = 0;\n\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var item = _step.value;\n\n        item.node.innerHTML = ""; // Очищаем все элементы\n        (0, _typingFunction2.default)(item.message, item.node, tick, delay); // Запускаем асинхронное печатание\n        delay += item.message.length * tick;\n    }\n} catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n        }\n    } finally {\n        if (_didIteratorError) {\n            throw _iteratorError;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./js/parts/typing.js?')},function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./sass/main.scss?")},function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(3);\n\n__webpack_require__(2);\n\n__webpack_require__(0);\n\n//# sourceURL=webpack:///./js/index.js?")}]);