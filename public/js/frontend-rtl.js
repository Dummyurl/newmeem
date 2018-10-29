/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;window.Modernizr = function (a, b, c) {
    function C(a) {
        j.cssText = a;
    }function D(a, b) {
        return C(n.join(a + ";") + (b || ""));
    }function E(a, b) {
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) === b;
    }function F(a, b) {
        return !!~("" + a).indexOf(b);
    }function G(a, b) {
        for (var d in a) {
            var e = a[d];if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
        }return !1;
    }function H(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];if (f !== c) return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f;
        }return !1;
    }function I(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + p.join(d + " ") + d).split(" ");return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c));
    }function J() {
        e.input = function (c) {
            for (var d = 0, e = c.length; d < e; d++) {
                u[c[d]] = c[d] in k;
            }return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u;
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++) {
                k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e;
            }return t;
        }("search tel url email datetime date month week time datetime-local number range color".split(" "));
    }var d = "2.7.1",
        e = {},
        f = !0,
        g = b.documentElement,
        h = "modernizr",
        i = b.createElement(h),
        j = i.style,
        k = b.createElement("input"),
        l = ":)",
        m = {}.toString,
        n = " -webkit- -moz- -o- -ms- ".split(" "),
        o = "Webkit Moz O ms",
        p = o.split(" "),
        q = o.toLowerCase().split(" "),
        r = { svg: "http://www.w3.org/2000/svg" },
        s = {},
        t = {},
        u = {},
        v = [],
        w = v.slice,
        x,
        y = function y(a, c, d, e) {
        var f,
            i,
            j,
            k,
            l = b.createElement("div"),
            m = b.body,
            n = m || b.createElement("body");if (parseInt(d, 10)) while (d--) {
            j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        }return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i;
    },
        z = function () {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"), d = "on" + d;var f = d in e;return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f;
        }var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };return d;
    }(),
        A = {}.hasOwnProperty,
        B;!E(A, "undefined") && !E(A.call, "undefined") ? B = function B(a, b) {
        return A.call(a, b);
    } : B = function B(a, b) {
        return b in a && E(a.constructor.prototype[b], "undefined");
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;if (typeof c != "function") throw new TypeError();var d = w.call(arguments, 1),
            e = function e() {
            if (this instanceof e) {
                var a = function a() {};a.prototype = c.prototype;var f = new a(),
                    g = c.apply(f, d.concat(w.call(arguments)));return Object(g) === g ? g : f;
            }return c.apply(b, d.concat(w.call(arguments)));
        };return e;
    }), s.flexbox = function () {
        return I("flexWrap");
    }, s.flexboxlegacy = function () {
        return I("boxDirection");
    }, s.canvas = function () {
        var a = b.createElement("canvas");return !!a.getContext && !!a.getContext("2d");
    }, s.canvastext = function () {
        return !!e.canvas && !!E(b.createElement("canvas").getContext("2d").fillText, "function");
    }, s.webgl = function () {
        return !!a.WebGLRenderingContext;
    }, s.touch = function () {
        var c;return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
            c = a.offsetTop === 9;
        }), c;
    }, s.geolocation = function () {
        return "geolocation" in navigator;
    }, s.postmessage = function () {
        return !!a.postMessage;
    }, s.websqldatabase = function () {
        return !!a.openDatabase;
    }, s.indexedDB = function () {
        return !!I("indexedDB", a);
    }, s.hashchange = function () {
        return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
    }, s.history = function () {
        return !!a.history && !!history.pushState;
    }, s.draganddrop = function () {
        var a = b.createElement("div");return "draggable" in a || "ondragstart" in a && "ondrop" in a;
    }, s.websockets = function () {
        return "WebSocket" in a || "MozWebSocket" in a;
    }, s.rgba = function () {
        return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba");
    }, s.hsla = function () {
        return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla");
    }, s.multiplebgs = function () {
        return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background);
    }, s.backgroundsize = function () {
        return I("backgroundSize");
    }, s.borderimage = function () {
        return I("borderImage");
    }, s.borderradius = function () {
        return I("borderRadius");
    }, s.boxshadow = function () {
        return I("boxShadow");
    }, s.textshadow = function () {
        return b.createElement("div").style.textShadow === "";
    }, s.opacity = function () {
        return D("opacity:.55"), /^0.55$/.test(j.opacity);
    }, s.cssanimations = function () {
        return I("animationName");
    }, s.csscolumns = function () {
        return I("columnCount");
    }, s.cssgradients = function () {
        var a = "background-image:",
            b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            c = "linear-gradient(left top,#9f9, white);";return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), F(j.backgroundImage, "gradient");
    }, s.cssreflections = function () {
        return I("boxReflect");
    }, s.csstransforms = function () {
        return !!I("transform");
    }, s.csstransforms3d = function () {
        var a = !!I("perspective");return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3;
        }), a;
    }, s.csstransitions = function () {
        return I("transition");
    }, s.fontface = function () {
        var a;return y('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
            var e = b.getElementById("smodernizr"),
                f = e.sheet || e.styleSheet,
                g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
        }), a;
    }, s.generatedcontent = function () {
        var a;return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
            a = b.offsetHeight >= 3;
        }), a;
    }, s.video = function () {
        var a = b.createElement("video"),
            c = !1;try {
            if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "");
        } catch (d) {}return c;
    }, s.audio = function () {
        var a = b.createElement("audio"),
            c = !1;try {
            if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "");
        } catch (d) {}return c;
    }, s.localstorage = function () {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
        } catch (a) {
            return !1;
        }
    }, s.sessionstorage = function () {
        try {
            return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
        } catch (a) {
            return !1;
        }
    }, s.webworkers = function () {
        return !!a.Worker;
    }, s.applicationcache = function () {
        return !!a.applicationCache;
    }, s.svg = function () {
        return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect;
    }, s.inlinesvg = function () {
        var a = b.createElement("div");return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg;
    }, s.smil = function () {
        return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")));
    }, s.svgclippaths = function () {
        return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")));
    };for (var K in s) {
        B(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x));
    }return e.input || J(), e.addTest = function (a, b) {
        if ((typeof a === "undefined" ? "undefined" : _typeof(a)) == "object") for (var d in a) {
            B(a, d) && e.addTest(d, a[d]);
        } else {
            a = a.toLowerCase();if (e[a] !== c) return e;b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b;
        }return e;
    }, C(""), i = k = null, e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function (a) {
        return G([a]);
    }, e.testAllProps = I, e.testStyles = y, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e;
}(this, this.document), function (a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a);
    }function e(a) {
        return "string" == typeof a;
    }function f() {}function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }function h() {
        var a = p.shift();q = 1, a ? a.t ? m(function () {
            ("c" == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
        }, 0) : (a(), h()) : q = 0;
    }function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function () {
                    t.removeChild(l);
                }, 50);for (var d in y[c]) {
                    y[c].hasOwnProperty(d) && y[c][d].onload();
                }
            }
        }var j = j || _B.errorTimeout,
            l = b.createElement(a),
            o = 0,
            r = 0,
            u = { t: d, s: c, e: f, a: i, x: j };1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
            k.call(this, r);
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
    }function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
    }function k() {
        var a = _B;return a.loader = { load: j, i: 0 }, a;
    }var l = b.documentElement,
        m = a.setTimeout,
        n = b.getElementsByTagName("script")[0],
        o = {}.toString,
        p = [],
        q = 0,
        r = "MozAppearance" in l.style,
        s = r && !!b.createRange().compareNode,
        t = s ? l : n.parentNode,
        l = a.opera && "[object Opera]" == o.call(a.opera),
        l = !!b.attachEvent && !l,
        u = r ? "object" : l ? "script" : "img",
        v = l ? "script" : u,
        w = Array.isArray || function (a) {
        return "[object Array]" == o.call(a);
    },
        x = [],
        y = {},
        z = { timeout: function timeout(a, b) {
            return b.length && (a.timeout = b[0]), a;
        } },
        _A,
        _B;_B = function B(a) {
        function b(a) {
            var a = a.split("!"),
                b = x.length,
                c = a.pop(),
                d = a.length,
                c = { url: c, origUrl: c, prefixes: a },
                e,
                f,
                g;for (f = 0; f < d; f++) {
                g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            }for (f = 0; f < b; f++) {
                c = x[f](c);
            }return c;
        }function g(a, e, f, g, h) {
            var i = b(a),
                j = i.autoCallback;i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
            })));
        }function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function j() {
                        var a = [].slice.call(arguments);k.apply(this, a), l();
                    }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
                        var b = 0,
                            c;for (c in a) {
                            a.hasOwnProperty(c) && b++;
                        }return b;
                    }(), a) {
                        a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
                            var a = [].slice.call(arguments);k.apply(this, a), l();
                        } : j[n] = function (a) {
                            return function () {
                                var b = [].slice.call(arguments);a && a.apply(this, b), l();
                            };
                        }(k[n])), g(a[n], j, b, n, h));
                    }
                } else !c && l();
            }var h = !!a.test,
                i = a.load || a.both,
                j = a.callback || f,
                k = j,
                l = a.complete || f,
                m,
                n;c(h ? a.yep : a.nope, !!i), i && c(i);
        }var i,
            j,
            l = this.yepnope.loader;if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
            j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
        } else Object(a) === a && h(a, l);
    }, _B.addPrefix = function (a, b) {
        z[a] = b;
    }, _B.addFilter = function (a) {
        x.push(a);
    }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", _A = function A() {
        b.removeEventListener("DOMContentLoaded", _A, 0), b.readyState = "complete";
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
            l,
            o,
            e = e || _B.errorTimeout;k.src = a;for (o in d) {
            k.setAttribute(o, d[o]);
        }c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
        }, m(function () {
            l || (l = 1, c(1));
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
            j,
            c = i ? h : c || f;e.href = a, e.rel = "stylesheet", e.type = "text/css";for (j in d) {
            e.setAttribute(j, d[j]);
        }g || (n.parentNode.insertBefore(e, n), m(c, 0));
    };
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
};
/**
* @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function (a, b) {
    function c(a, b) {
        var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
    }function d() {
        var a = t.elements;return "string" == typeof a ? a.split(" ") : a;
    }function e(a, b) {
        var c = t.elements;"string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), t.elements = c + " " + a, j(b);
    }function f(a) {
        var b = s[a[q]];return b || (b = {}, r++, a[q] = r, s[r] = b), b;
    }function g(a, c, d) {
        if (c || (c = b), l) return c.createElement(a);d || (d = f(c));var e;return e = d.cache[a] ? d.cache[a].cloneNode() : p.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e);
    }function h(a, c) {
        if (a || (a = b), l) return a.createDocumentFragment();c = c || f(a);for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) {
            e.createElement(h[g]);
        }return e;
    }function i(a, b) {
        b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
            return t.shivMethods ? g(c, a, b) : b.createElem(c);
        }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function (a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
        }) + ");return n}")(t, b.frag);
    }function j(a) {
        a || (a = b);var d = f(a);return !t.shivCSS || k || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || i(a, d), a;
    }var k,
        l,
        m = "3.7.2",
        n = a.html5 || {},
        o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        q = "_html5shiv",
        r = 0,
        s = {};!function () {
        try {
            var a = b.createElement("a");a.innerHTML = "<xyz></xyz>", k = "hidden" in a, l = 1 == a.childNodes.length || function () {
                b.createElement("a");var a = b.createDocumentFragment();return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement;
            }();
        } catch (c) {
            k = !0, l = !0;
        }
    }();var t = { elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: m, shivCSS: n.shivCSS !== !1, supportsUnknownElements: l, shivMethods: n.shivMethods !== !1, type: "default", shivDocument: j, createElement: g, createDocumentFragment: h, addElements: e };a.html5 = t, j(b);
}(this, document);
/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */

!function (a) {
    "use strict";
    a.matchMedia = a.matchMedia || function (a) {
        var b,
            c = a.documentElement,
            d = c.firstElementChild || c.firstChild,
            e = a.createElement("body"),
            f = a.createElement("div");return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f), function (a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), { matches: b, media: a };
        };
    }(a.document);
}(this), function (a) {
    "use strict";
    function b() {
        u(!0);
    }var c = {};a.respond = c, c.update = function () {};var d = [],
        e = function () {
        var b = !1;try {
            b = new a.XMLHttpRequest();
        } catch (c) {
            b = new a.ActiveXObject("Microsoft.XMLHTTP");
        }return function () {
            return b;
        };
    }(),
        f = function f(a, b) {
        var c = e();c && (c.open("GET", a, !0), c.onreadystatechange = function () {
            4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText);
        }, 4 !== c.readyState && c.send(null));
    };if (c.ajax = f, c.queue = d, c.regex = { media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi, keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi, urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, findStyles: /@media *([^\{]+)\{([\S\s]+?)$/, only: /(only\s+)?([a-zA-Z]+)\s?/, minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/, maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/ }, c.mediaQueriesSupported = a.matchMedia && null !== a.matchMedia("only all") && a.matchMedia("only all").matches, !c.mediaQueriesSupported) {
        var g,
            h,
            i,
            j = a.document,
            k = j.documentElement,
            l = [],
            m = [],
            n = [],
            o = {},
            p = 30,
            q = j.getElementsByTagName("head")[0] || k,
            r = j.getElementsByTagName("base")[0],
            s = q.getElementsByTagName("link"),
            t = function t() {
            var a,
                b = j.createElement("div"),
                c = j.body,
                d = k.style.fontSize,
                e = c && c.style.fontSize,
                f = !1;return b.style.cssText = "position:absolute;font-size:1em;width:1em", c || (c = f = j.createElement("body"), c.style.background = "none"), k.style.fontSize = "100%", c.style.fontSize = "100%", c.appendChild(b), f && k.insertBefore(c, k.firstChild), a = b.offsetWidth, f ? k.removeChild(c) : c.removeChild(b), k.style.fontSize = d, e && (c.style.fontSize = e), a = i = parseFloat(a);
        },
            u = function u(b) {
            var c = "clientWidth",
                d = k[c],
                e = "CSS1Compat" === j.compatMode && d || j.body[c] || d,
                f = {},
                o = s[s.length - 1],
                r = new Date().getTime();if (b && g && p > r - g) return a.clearTimeout(h), h = a.setTimeout(u, p), void 0;g = r;for (var v in l) {
                if (l.hasOwnProperty(v)) {
                    var w = l[v],
                        x = w.minw,
                        y = w.maxw,
                        z = null === x,
                        A = null === y,
                        B = "em";x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? i || t() : 1)), y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? i || t() : 1)), w.hasquery && (z && A || !(z || e >= x) || !(A || y >= e)) || (f[w.media] || (f[w.media] = []), f[w.media].push(m[w.rules]));
                }
            }for (var C in n) {
                n.hasOwnProperty(C) && n[C] && n[C].parentNode === q && q.removeChild(n[C]);
            }n.length = 0;for (var D in f) {
                if (f.hasOwnProperty(D)) {
                    var E = j.createElement("style"),
                        F = f[D].join("\n");E.type = "text/css", E.media = D, q.insertBefore(E, o.nextSibling), E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(j.createTextNode(F)), n.push(E);
                }
            }
        },
            v = function v(a, b, d) {
            var e = a.replace(c.regex.keyframes, "").match(c.regex.media),
                f = e && e.length || 0;b = b.substring(0, b.lastIndexOf("/"));var g = function g(a) {
                return a.replace(c.regex.urls, "$1" + b + "$2$3");
            },
                h = !f && d;b.length && (b += "/"), h && (f = 1);for (var i = 0; f > i; i++) {
                var j, k, n, o;h ? (j = d, m.push(g(a))) : (j = e[i].match(c.regex.findStyles) && RegExp.$1, m.push(RegExp.$2 && g(RegExp.$2))), n = j.split(","), o = n.length;for (var p = 0; o > p; p++) {
                    k = n[p], l.push({ media: k.split("(")[0].match(c.regex.only) && RegExp.$2 || "all", rules: m.length - 1, hasquery: k.indexOf("(") > -1, minw: k.match(c.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""), maxw: k.match(c.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "") });
                }
            }u();
        },
            w = function w() {
            if (d.length) {
                var b = d.shift();f(b.href, function (c) {
                    v(c, b.href, b.media), o[b.href] = !0, a.setTimeout(function () {
                        w();
                    }, 0);
                });
            }
        },
            x = function x() {
            for (var b = 0; b < s.length; b++) {
                var c = s[b],
                    e = c.href,
                    f = c.media,
                    g = c.rel && "stylesheet" === c.rel.toLowerCase();e && g && !o[e] && (c.styleSheet && c.styleSheet.rawCssText ? (v(c.styleSheet.rawCssText, e, f), o[e] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(e) && !r || e.replace(RegExp.$1, "").split("/")[0] === a.location.host) && ("//" === e.substring(0, 2) && (e = a.location.protocol + e), d.push({ href: e, media: f })));
            }w();
        };x(), c.update = x, c.getEmValue = t, a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b);
    }
}(this);
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function m(a, b) {
        return new m.fn.init(a, b);
    },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function q(a, b) {
        return b.toUpperCase();
    };m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function toArray() {
            return d.call(this);
        }, get: function get(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        }, pushStack: function pushStack(a) {
            var b = m.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
        }, each: function each(a, b) {
            return m.each(this, a, b);
        }, map: function map(a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        }, slice: function slice() {
            return this.pushStack(d.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor(null);
        }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (e = arguments[h])) for (d in e) {
                a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            }
        }return g;
    }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
            throw new Error(a);
        }, noop: function noop() {}, isFunction: function isFunction(a) {
            return "function" === m.type(a);
        }, isArray: Array.isArray || function (a) {
            return "array" === m.type(a);
        }, isWindow: function isWindow(a) {
            return null != a && a == a.window;
        }, isNumeric: function isNumeric(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0;
        }, isEmptyObject: function isEmptyObject(a) {
            var b;for (b in a) {
                return !1;
            }return !0;
        }, isPlainObject: function isPlainObject(a) {
            var b;if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (c) {
                return !1;
            }if (k.ownLast) for (b in a) {
                return j.call(a, b);
            }for (b in a) {}return void 0 === b || j.call(a, b);
        }, type: function type(a) {
            return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
        }, globalEval: function globalEval(b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b);
            })(b);
        }, camelCase: function camelCase(a) {
            return a.replace(o, "ms-").replace(p, q);
        }, nodeName: function nodeName(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        }, each: function each(a, b, c) {
            var d,
                e = 0,
                f = a.length,
                g = r(a);if (c) {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.apply(a[e], c), d === !1) break;
                    }
                } else for (e in a) {
                    if (d = b.apply(a[e], c), d === !1) break;
                }
            } else if (g) {
                for (; f > e; e++) {
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
                }
            } else for (e in a) {
                if (d = b.call(a[e], e, a[e]), d === !1) break;
            }return a;
        }, trim: function trim(a) {
            return null == a ? "" : (a + "").replace(n, "");
        }, makeArray: function makeArray(a, b) {
            var c = b || [];return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
        }, inArray: function inArray(a, b, c) {
            var d;if (b) {
                if (g) return g.call(b, a, c);for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
                    if (c in b && b[c] === a) return c;
                }
            }return -1;
        }, merge: function merge(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;while (c > d) {
                a[e++] = b[d++];
            }if (c !== c) while (void 0 !== b[d]) {
                a[e++] = b[d++];
            }return a.length = e, a;
        }, grep: function grep(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f]);
            }return e;
        }, map: function map(a, b, c) {
            var d,
                f = 0,
                g = a.length,
                h = r(a),
                i = [];if (h) for (; g > f; f++) {
                d = b(a[f], f, c), null != d && i.push(d);
            } else for (f in a) {
                d = b(a[f], f, c), null != d && i.push(d);
            }return e.apply([], i);
        }, guid: 1, proxy: function proxy(a, b) {
            var c, e, f;return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function e() {
                return a.apply(b || this, c.concat(d.call(arguments)));
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
        }, now: function now() {
            return +new Date();
        }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });function r(a) {
        var b = a.length,
            c = m.type(a);return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }var s = function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + -new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function B(a, b) {
            return a === b && (l = !0), 0;
        },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++) {
                if (this[b] === a) return b;
            }return -1;
        },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = { ID: new RegExp("^#(" + N + ")"), CLASS: new RegExp("^\\.(" + N + ")"), TAG: new RegExp("^(" + N.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + Q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function db(a, b, c) {
            var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        };try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
        } catch (eb) {
            I = { apply: F.length ? function (a, b) {
                    H.apply(a, J.call(b));
                } : function (a, b) {
                    var c = a.length,
                        d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
                } };
        }function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;if (1 !== (k = b.nodeType) && 9 !== k) return [];if (p && !e) {
                if (f = _.exec(a)) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
                } else {
                    if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d;
                }if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) {
                            o[l] = s + qb(o[l]);
                        }w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",");
                    }if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }return i(a.replace(R, "$1"), b, d, e);
        }function gb() {
            var a = [];function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }return b;
        }function hb(a) {
            return a[u] = !0, a;
        }function ib(a) {
            var b = n.createElement("div");try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }function jb(a, b) {
            var c = a.split("|"),
                e = a.length;while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);if (d) return d;if (c) while (c = c.nextSibling) {
                if (c === b) return -1;
            }return a ? 1 : -1;
        }function lb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
            };
        }function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
            };
        }function nb(a) {
            return hb(function (b) {
                return b = +b, hb(function (c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                    }
                });
            });
        }function ob(a) {
            return a && _typeof(a.getElementsByTagName) !== C && a;
        }c = fb.support = {}, f = fb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
        }, m = fb.setDocument = function (a) {
            var b,
                e = a ? a.ownerDocument || a : v,
                g = e.defaultView;return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                m();
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                m();
            })), c.attributes = ib(function (a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ib(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length;
            }), c.getById = ib(function (a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if (_typeof(b.getElementById) !== C && p) {
                    var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);return function (a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);return function (a) {
                    var c = _typeof(a.getAttributeNode) !== C && a.getAttributeNode("id");return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return _typeof(b.getElementsByTagName) !== C ? b.getElementsByTagName(a) : void 0;
            } : function (a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c);
                    }return d;
                }return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return _typeof(b.getElementsByClassName) !== C && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked");
            }), ib(function (a) {
                var b = e.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b) while (b = b.parentNode) {
                    if (b === a) return !0;
                }return !1;
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b) return l = !0, 0;var c,
                    d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;if (f === g) return kb(a, b);c = a;while (c = c.parentNode) {
                    h.unshift(c);
                }c = b;while (c = c.parentNode) {
                    i.unshift(c);
                }while (h[d] === i[d]) {
                    d++;
                }return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, e) : n;
        }, fb.matches = function (a, b) {
            return fb(a, null, null, b);
        }, fb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}return fb(b, n, null, [a]).length > 0;
        }, fb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, fb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, fb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, fb.uniqueSort = function (a) {
            var b,
                d = [],
                e = 0,
                f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f));
                }while (e--) {
                    a.splice(d[e], 1);
                }
            }return k = null, a;
        }, e = fb.getText = function (a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) {
                c += e(b);
            }return c;
        }, d = fb.selectors = { cacheLength: 50, createPseudo: hb, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                }, CHILD: function CHILD(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a;
                }, PSEUDO: function PSEUDO(a) {
                    var b,
                        c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                } }, filter: { TAG: function TAG(a) {
                    var b = a.replace(cb, db).toLowerCase();return "*" === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                }, CLASS: function CLASS(a) {
                    var b = y[a + " "];return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || _typeof(a.getAttribute) !== C && a.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(a, b, c) {
                    return function (d) {
                        var e = fb.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                }, CHILD: function CHILD(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;if (q) {
                            if (f) {
                                while (p) {
                                    l = b;while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    }o = p = "only" === a && !o && "nextSibling";
                                }return !0;
                            }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];break;
                                    }
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            }return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;while (g--) {
                            d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
                        }
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                } }, pseudos: { not: hb(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));return d[u] ? hb(function (a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f));
                        }
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }), has: hb(function (a) {
                    return function (b) {
                        return fb(a, b).length > 0;
                    };
                }), contains: hb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }), lang: hb(function (a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
                    };
                }), target: function target(b) {
                    var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
                }, root: function root(a) {
                    return a === o;
                }, focus: function focus(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                }, enabled: function enabled(a) {
                    return a.disabled === !1;
                }, disabled: function disabled(a) {
                    return a.disabled === !0;
                }, checked: function checked(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
                }, selected: function selected(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                }, empty: function empty(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(a) {
                    return !d.pseudos.empty(a);
                }, header: function header(a) {
                    return Z.test(a.nodeName);
                }, input: function input(a) {
                    return Y.test(a.nodeName);
                }, button: function button(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
                }, text: function text(a) {
                    var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                }, first: nb(function () {
                    return [0];
                }), last: nb(function (a, b) {
                    return [b - 1];
                }), eq: nb(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }), even: nb(function (a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), odd: nb(function (a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), lt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d);
                    }return a;
                }), gt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d);
                    }return a;
                }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            d.pseudos[b] = lb(b);
        }for (b in { submit: !0, reset: !0 }) {
            d.pseudos[b] = mb(b);
        }function pb() {}pb.prototype = d.filters = d.pseudos, d.setFilters = new pb(), g = fb.tokenize = function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) {
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                }if (!c) break;
            }return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
        };function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value;
            }return d;
        }function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;return b.first ? function (b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) return a(b, c, f);
                }
            } : function (b, c, g) {
                var h,
                    i,
                    j = [w, f];if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                    }
                } else while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
                    }
                }
            };
        }function sb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;while (e--) {
                    if (!a[e](b, c, d)) return !1;
                }return !0;
            } : a[0];
        }function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                fb(a, b[d], c);
            }return c;
        }function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            }return g;
        }function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                }if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;while (k--) {
                                (l = r[k]) && j.push(q[k] = l);
                            }e(null, r = [], j, i);
                        }k = r.length;while (k--) {
                            (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                        }
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
            });
        }function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
                return a === b;
            }, h, !0), l = rb(function (a) {
                return K.call(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
            }]; f > i; i++) {
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) break;
                        }return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
                    }m.push(c);
                }
            }return sb(m);
        }function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function f(_f, g, h, i, k) {
                var l,
                    m,
                    o,
                    p = 0,
                    q = "0",
                    r = _f && [],
                    s = [],
                    t = j,
                    u = _f || e && d.find.TAG("*", k),
                    v = w += null == t ? 1 : Math.random() || .1,
                    x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;while (o = a[m++]) {
                            if (o(l, g, h)) {
                                i.push(l);break;
                            }
                        }k && (w = v);
                    }c && ((l = !o && l) && p--, _f && r.push(l));
                }if (p += q, c && q !== p) {
                    m = 0;while (o = b[m++]) {
                        o(r, s, g, h);
                    }if (_f) {
                        if (p > 0) while (q--) {
                            r[q] || s[q] || (s[q] = G.call(i));
                        }s = ub(s);
                    }I.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
                }return k && (w = v, j = t), r;
            };return c ? hb(f) : f;
        }return h = fb.compile = function (a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];if (!f) {
                b || (b = g(a)), c = b.length;while (c--) {
                    f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                }f = A(a, xb(e, d)), f.selector = a;
            }return f;
        }, i = fb.select = function (a, b, e, f) {
            var i,
                j,
                k,
                l,
                m,
                n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;break;
                    }
                }
            }return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ib(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || jb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ib(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || jb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ib(function (a) {
            return null == a.getAttribute("disabled");
        }) || jb(L, function (a, b, c) {
            var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), fb;
    }(a);m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
        });if (b.nodeType) return m.grep(a, function (a) {
            return a === b !== c;
        });if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);b = m.filter(b, a);
        }return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c;
        });
    }m.filter = function (a, b, c) {
        var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, m.fn.extend({ find: function find(a) {
            var b,
                c = [],
                d = this,
                e = d.length;if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++) {
                    if (m.contains(d[b], this)) return !0;
                }
            }));for (b = 0; e > b; b++) {
                m.find(a, d[b], c);
            }return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
        }, filter: function filter(a) {
            return this.pushStack(w(this, a || [], !1));
        }, not: function not(a) {
            return this.pushStack(w(this, a || [], !0));
        }, is: function is(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
        } });var x,
        y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function (a, b) {
        var c, d;if (!a) return this;if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) {
                    m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                }return this;
            }if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) return x.find(a);this.length = 1, this[0] = d;
            }return this.context = y, this.selector = a, this;
        }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this));
    };A.prototype = m.fn, x = m(y);var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };m.extend({ dir: function dir(a, b, c) {
            var d = [],
                e = a[b];while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
                1 === e.nodeType && d.push(e), e = e[b];
            }return d;
        }, sibling: function sibling(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a);
            }return c;
        } }), m.fn.extend({ has: function has(a) {
            var b,
                c = m(a, this),
                d = c.length;return this.filter(function () {
                for (b = 0; d > b; b++) {
                    if (m.contains(this, c[b])) return !0;
                }
            });
        }, closest: function closest(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);break;
                    }
                }
            }return this.pushStack(f.length > 1 ? m.unique(f) : f);
        }, index: function index(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
        }, addBack: function addBack(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        } });function D(a, b) {
        do {
            a = a[b];
        } while (a && 1 !== a.nodeType);return a;
    }m.each({ parent: function parent(a) {
            var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
        }, parents: function parents(a) {
            return m.dir(a, "parentNode");
        }, parentsUntil: function parentsUntil(a, b, c) {
            return m.dir(a, "parentNode", c);
        }, next: function next(a) {
            return D(a, "nextSibling");
        }, prev: function prev(a) {
            return D(a, "previousSibling");
        }, nextAll: function nextAll(a) {
            return m.dir(a, "nextSibling");
        }, prevAll: function prevAll(a) {
            return m.dir(a, "previousSibling");
        }, nextUntil: function nextUntil(a, b, c) {
            return m.dir(a, "nextSibling", c);
        }, prevUntil: function prevUntil(a, b, c) {
            return m.dir(a, "previousSibling", c);
        }, siblings: function siblings(a) {
            return m.sibling((a.parentNode || {}).firstChild, a);
        }, children: function children(a) {
            return m.sibling(a.firstChild);
        }, contents: function contents(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
        } }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e);
        };
    });var E = /\S+/g,
        F = {};function G(a) {
        var b = F[a] = {};return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);var b,
            c,
            d,
            e,
            f,
            g,
            h = [],
            i = !a.once && [],
            j = function j(l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;break;
                }
            }b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
        },
            k = { add: function add() {
                if (h) {
                    var d = h.length;!function f(b) {
                        m.each(b, function (b, c) {
                            var d = m.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), b ? e = h.length : c && (g = d, j(c));
                }return this;
            }, remove: function remove() {
                return h && m.each(arguments, function (a, c) {
                    var d;while ((d = m.inArray(c, h, d)) > -1) {
                        h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
                    }
                }), this;
            }, has: function has(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
            }, empty: function empty() {
                return h = [], e = 0, this;
            }, disable: function disable() {
                return h = i = c = void 0, this;
            }, disabled: function disabled() {
                return !h;
            }, lock: function lock() {
                return i = void 0, c || k.disable(), this;
            }, locked: function locked() {
                return !i;
            }, fireWith: function fireWith(a, c) {
                return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this;
            }, fire: function fire() {
                return k.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!d;
            } };return k;
    }, m.extend({ Deferred: function Deferred(a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]],
                c = "pending",
                d = { state: function state() {
                    return c;
                }, always: function always() {
                    return e.done(arguments).fail(arguments), this;
                }, then: function then() {
                    var a = arguments;return m.Deferred(function (c) {
                        m.each(b, function (b, f) {
                            var g = m.isFunction(a[b]) && a[b];e[f[1]](function () {
                                var a = g && g.apply(this, arguments);a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                            });
                        }), a = null;
                    }).promise();
                }, promise: function promise(a) {
                    return null != a ? m.extend(a, d) : d;
                } },
                e = {};return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];d[f[1]] = g.add, h && g.add(function () {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        }, when: function when(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function h(a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            },
                i,
                j,
                k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            }return f || g.resolveWith(k, c), g.promise();
        } });var H;m.fn.ready = function (a) {
        return m.ready.promise().done(a), this;
    }, m.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
            a ? m.readyWait++ : m.ready(!0);
        }, ready: function ready(a) {
            if (a === !0 ? ! --m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")));
            }
        } });function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
    }function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready());
    }m.ready.promise = function (b) {
        if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);var c = !1;try {
                c = null == a.frameElement && y.documentElement;
            } catch (d) {}c && c.doScroll && !function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left");
                    } catch (a) {
                        return setTimeout(e, 50);
                    }I(), m.ready();
                }
            }();
        }return H.promise(b);
    };var K = "undefined",
        L;for (L in m(k)) {
        break;
    }k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
        var a, b, c, d;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), _typeof(b.style.zoom) !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
    }), function () {
        var a = y.createElement("div");if (null == k.deleteExpando) {
            k.deleteExpando = !0;try {
                delete a.test;
            } catch (b) {
                k.deleteExpando = !1;
            }
        }a = null;
    }(), m.acceptData = function (a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()],
            c = +a.nodeType || 1;return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
    };var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
                } catch (e) {}m.data(a, b, c);
            } else c = void 0;
        }return c;
    }function P(a) {
        var b;for (b in a) {
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        }return !0;
    }function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f,
                g,
                h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f;
        }
    }function R(a, b, c) {
        if (m.acceptData(a)) {
            var d,
                e,
                f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;while (e--) {
                        delete d[b[e]];
                    }if (c ? !P(d) : !m.isEmptyObject(d)) return;
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
            }
        }
    }m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
        }, data: function data(a, b, c) {
            return Q(a, b, c);
        }, removeData: function removeData(a, b) {
            return R(a, b);
        }, _data: function _data(a, b, c) {
            return Q(a, b, c, !0);
        }, _removeData: function _removeData(a, b) {
            return R(a, b, !0);
        } }), m.fn.extend({ data: function data(a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    }m._data(f, "parsedAttrs", !0);
                }return e;
            }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
                m.data(this, a);
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b);
            }) : f ? O(f, a, m.data(f, a)) : void 0;
        }, removeData: function removeData(a) {
            return this.each(function () {
                m.removeData(this, a);
            });
        } }), m.extend({ queue: function queue(a, b, c) {
            var d;return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0;
        }, dequeue: function dequeue(a, b) {
            b = b || "fx";var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function g() {
                m.dequeue(a, b);
            };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        }, _queueHooks: function _queueHooks(a, b) {
            var c = b + "queueHooks";return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () {
                    m._removeData(a, b + "queue"), m._removeData(a, c);
                }) });
        } }), m.fn.extend({ queue: function queue(a, b) {
            var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
            });
        }, dequeue: function dequeue(a) {
            return this.each(function () {
                m.dequeue(this, a);
            });
        }, clearQueue: function clearQueue(a) {
            return this.queue(a || "fx", []);
        }, promise: function promise(a, b) {
            var c,
                d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function h() {
                --d || e.resolveWith(f, [f]);
            };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
                c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            }return h(), e.promise(b);
        } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function U(a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
    },
        V = m.access = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;if ("object" === m.type(c)) {
            e = !0;for (h in c) {
                m.access(a, b, h, c[h], !0, f, g);
            }
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
            return j.call(m(a), c);
        })), b)) for (; i > h; h++) {
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
        W = /^(?:checkbox|radio)$/i;!function () {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
            k.noCloneEvent = !1;
        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;try {
                delete b.test;
            } catch (d) {
                k.deleteExpando = !1;
            }
        }
    }(), function () {
        var b,
            c,
            d = y.createElement("div");for (b in { submit: !0, change: !0, focusin: !0 }) {
            c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        }d = null;
    }();var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;function ab() {
        return !0;
    }function bb() {
        return !1;
    }function cb() {
        try {
            return y.activeElement;
        } catch (a) {}
    }m.event = { global: {}, add: function add(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                n,
                o,
                p,
                q,
                r = m._data(a);if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return (typeof m === "undefined" ? "undefined" : _typeof(m)) === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;while (h--) {
                    f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                }a = null;
            }
        }, remove: function remove(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                n,
                o,
                p,
                q,
                r = m.hasData(a) && m._data(a);if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;while (j--) {
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;while (f--) {
                            g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        }i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
                    } else for (o in k) {
                        m.event.remove(a, o + b[j], c, d, !0);
                    }
                }m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
            }
        }, trigger: function trigger(b, c, d, e) {
            var f,
                g,
                h,
                i,
                k,
                l,
                n,
                o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), l = h;
                    }l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
                }n = 0;while ((h = o[n++]) && !b.isPropagationStopped()) {
                    b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                }if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;try {
                        d[p]();
                    } catch (r) {}m.event.triggered = void 0, l && (d[g] = l);
                }return b.result;
            }
        }, dispatch: function dispatch(a) {
            a = m.event.fix(a);var b,
                c,
                e,
                f,
                g,
                h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                    }
                }return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        }, handlers: function handlers(a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) {
                if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (e = [], f = 0; h > f; f++) {
                        d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                    }e.length && g.push({ elem: i, handlers: e });
                }
            }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        }, fix: function fix(a) {
            if (a[m.expando]) return a;var b,
                c,
                d,
                e = a.type,
                f = a,
                g = this.fixHooks[e];g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;while (b--) {
                c = d[b], a[c] = f[c];
            }return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
            } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
                var c,
                    d,
                    e,
                    f = b.button,
                    g = b.fromElement;return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    if (this !== cb() && this.focus) try {
                        return this.focus(), !1;
                    } catch (a) {}
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
                }, _default: function _default(a) {
                    return m.nodeName(a.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                } } }, simulate: function simulate(a, b, c, d) {
            var e = m.extend(new m.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        } }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function (a, b, c) {
        var d = "on" + b;a.detachEvent && (_typeof(a[d]) === K && (a[d] = null), a.detachEvent(d, c));
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
    }, m.Event.prototype = { isDefaultPrevented: bb, isPropagationStopped: bb, isImmediatePropagationStopped: bb, preventDefault: function preventDefault() {
            var a = this.originalEvent;this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        }, stopPropagation: function stopPropagation() {
            var a = this.originalEvent;this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var a = this.originalEvent;this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
        } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
        m.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            } };
    }), k.submitBubbles || (m.event.special.submit = { setup: function setup() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0;
                }), m._data(c, "submitBubbles", !0));
            });
        }, postDispatch: function postDispatch(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
        }, teardown: function teardown() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
        } }), k.changeBubbles || (m.event.special.change = { setup: function setup() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
            })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
                }), m._data(b, "changeBubbles", !0));
            });
        }, handle: function handle(a) {
            var b = a.target;return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
        }, teardown: function teardown() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName);
        } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function c(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0);
        };m.event.special[b] = { setup: function setup() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
            }, teardown: function teardown() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
            } };
    }), m.fn.extend({ on: function on(a, b, c, d, e) {
            var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                "string" != typeof b && (c = c || b, b = void 0);for (f in a) {
                    this.on(f, b, c, a[f], e);
                }return this;
            }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;else if (!d) return this;return 1 === e && (g = d, d = function d(a) {
                return m().off(a), g.apply(this, arguments);
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b);
            });
        }, one: function one(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        }, off: function off(a, b, c) {
            var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                for (e in a) {
                    this.off(e, b, a[e]);
                }return this;
            }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
                m.event.remove(this, a, c, b);
            });
        }, trigger: function trigger(a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this);
            });
        }, triggerHandler: function triggerHandler(a, b) {
            var c = this[0];return c ? m.event.trigger(a, b, c, !0) : void 0;
        } });function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();if (c.createElement) while (b.length) {
            c.createElement(b.pop());
        }return c;
    }var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;function ub(a, b) {
        var c,
            d,
            e = 0,
            f = _typeof(a.getElementsByTagName) !== K ? a.getElementsByTagName(b || "*") : _typeof(a.querySelectorAll) !== K ? a.querySelectorAll(b || "*") : void 0;if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
            !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        }return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f;
    }function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked);
    }function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
    }function yb(a) {
        var b = pb.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) {
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
        }
    }function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c,
                d,
                e,
                f = m._data(a),
                g = m._data(b, f),
                h = f.events;if (h) {
                delete g.handle, g.events = {};for (c in h) {
                    for (d = 0, e = h[c].length; e > d; d++) {
                        m.event.add(b, c, h[c][d]);
                    }
                }
            }g.data && (g.data = m.extend({}, g.data));
        }
    }function Bb(a, b) {
        var c, d, e;if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);for (d in e.events) {
                    m.removeEvent(b, d, e.handle);
                }b.removeAttribute(m.expando);
            }"script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }m.extend({ clone: function clone(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i = m.contains(a.ownerDocument, a);if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) {
                d[g] && Bb(e, d[g]);
            }if (b) if (c) for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) {
                Ab(e, d[g]);
            } else Ab(a, f);return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f;
        }, buildFragment: function buildFragment(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) {
                if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);else if (lb.test(f)) {
                    h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];while (e--) {
                        h = h.lastChild;
                    }if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                        f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;while (e--) {
                            m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                        }
                    }m.merge(p, h.childNodes), h.textContent = "";while (h.firstChild) {
                        h.removeChild(h.firstChild);
                    }h = o.lastChild;
                } else p.push(b.createTextNode(f));
            }h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;while (f = p[q++]) {
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;while (f = h[e++]) {
                        ob.test(f.type || "") && c.push(f);
                    }
                }
            }return h = null, o;
        }, cleanData: function cleanData(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events) for (e in g.events) {
                        n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    }j[f] && (delete j[f], l ? delete d[i] : _typeof(d.removeAttribute) !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
                }
            }
        } }), m.fn.extend({ text: function text(a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
            }, null, a, arguments.length);
        }, append: function append() {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);b.appendChild(a);
                }
            });
        }, prepend: function prepend() {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);b.insertBefore(a, b.firstChild);
                }
            });
        }, before: function before() {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        }, after: function after() {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        }, remove: function remove(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            }return this;
        }, empty: function empty() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));while (a.firstChild) {
                    a.removeChild(a.firstChild);
                }a.options && m.nodeName(a, "select") && (a.options.length = 0);
            }return this;
        }, clone: function clone(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b);
            });
        }, html: function html(a) {
            return V(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        }b = 0;
                    } catch (e) {}
                }b && this.empty().append(a);
            }, null, a, arguments.length);
        }, replaceWith: function replaceWith() {
            var a = arguments[0];return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        }, detach: function detach(a) {
            return this.remove(a, !0);
        }, domManip: function domManip(a, b) {
            a = e.apply([], a);var c,
                d,
                f,
                g,
                h,
                i,
                j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function (c) {
                var d = n.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) {
                    d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                }if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) {
                    d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                }i = c = null;
            }return this;
        } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
                c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            }return this.pushStack(e);
        };
    });var Cb,
        Db = {};function Eb(b, c) {
        var d,
            e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");return e.detach(), f;
    }function Fb(a) {
        var b = y,
            c = Db[a];return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c;
    }!function () {
        var a;k.shrinkWrapBlocks = function () {
            if (null != a) return a;a = !1;var b, c, d;return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), _typeof(b.style.zoom) !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0;
        };
    }();var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib,
        Jb,
        Kb = /^(top|right|bottom|left)$/;a.getComputedStyle ? (Ib = function Ib(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null);
    }, Jb = function Jb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
    }) : y.documentElement.currentStyle && (Ib = function Ib(a) {
        return a.currentStyle;
    }, Jb = function Jb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
    });function Lb(a, b) {
        return { get: function get() {
                var c = a();if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
            } };
    }!function () {
        var b, c, d, e, f, g, h;if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            var _i = function _i() {
                var b, c, d, i;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d));
            };

            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function reliableHiddenOffsets() {
                    return null == g && _i(), g;
                }, boxSizingReliable: function boxSizingReliable() {
                    return null == f && _i(), f;
                }, pixelPosition: function pixelPosition() {
                    return null == e && _i(), e;
                }, reliableMarginRight: function reliableMarginRight() {
                    return null == h && _i(), h;
                } });
        }
    }(), m.swap = function (a, b, c, d) {
        var e,
            f,
            g = {};for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f];
        }e = c.apply(a, d || []);for (f in b) {
            a.style[f] = g[f];
        }return e;
    };var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = { position: "absolute", visibility: "hidden", display: "block" },
        Sb = { letterSpacing: "0", fontWeight: "400" },
        Tb = ["Webkit", "O", "Moz", "ms"];function Ub(a, b) {
        if (b in a) return b;var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;while (e--) {
            if (b = Tb[e] + c, b in a) return b;
        }return d;
    }function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        }for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        }return a;
    }function Wb(a, b, c) {
        var d = Pb.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        }return g;
    }function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }m.extend({ cssHooks: { opacity: { get: function get(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");return "" === c ? "1" : c;
                    }
                } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = m.camelCase(b),
                    i = a.style;if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];if (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c;
                } catch (j) {}
            }
        }, css: function css(a, b, c, d) {
            var e,
                f,
                g,
                h = m.camelCase(b);return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
        } }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = { get: function get(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
                    return Yb(a, b, d);
                }) : Yb(a, b, d) : void 0;
            }, set: function set(a, c, d) {
                var e = d && Ib(a);return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
            } };
    }), k.opacity || (m.cssHooks.opacity = { get: function get(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        }, set: function set(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e);
        } }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"]) : void 0;
    }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        m.cssHooks[a + b] = { expand: function expand(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                }return e;
            } }, Gb.test(a) || (m.cssHooks[a + b].set = Wb);
    }), m.fn.extend({ css: function css(a, b) {
            return V(this, function (a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) {
                        f[b[g]] = m.css(a, b[g], !1, d);
                    }return f;
                }return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
            }, a, b, arguments.length > 1);
        }, show: function show() {
            return Vb(this, !0);
        }, hide: function hide() {
            return Vb(this);
        }, toggle: function toggle(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide();
            });
        } });function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e);
    }m.Tween = Zb, Zb.prototype = { constructor: Zb, init: function init(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
        }, cur: function cur() {
            var a = Zb.propHooks[this.prop];return a && a.get ? a.get(this) : Zb.propHooks._default.get(this);
        }, run: function run(a) {
            var b,
                c = Zb.propHooks[this.prop];return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this;
        } }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = { _default: { get: function get(a) {
                var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
            }, set: function set(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            } } }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = { set: function set(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        } }, m.easing = { linear: function linear(a) {
            return a;
        }, swing: function swing(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        } }, m.fx = Zb.prototype.init, m.fx.step = {};var $b,
        _b,
        ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = { "*": [function (a, b) {
            var c = this.createTween(a, b),
                d = c.cur(),
                e = bc.exec(b),
                f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                h = 1,
                i = 20;if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;do {
                    h = h || ".5", g /= h, m.style(c.elem, a, g + f);
                } while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
        }] };function fc() {
        return setTimeout(function () {
            $b = void 0;
        }), $b = m.now();
    }function gc(a, b) {
        var c,
            d = { height: a },
            e = 0;for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            c = T[e], d["margin" + c] = d["padding" + c] = a;
        }return b && (d.opacity = d.width = a), d;
    }function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) return d;
        }
    }function ic(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            l,
            n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i();
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
        }));for (d in b) {
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;q = !0;
                }o[d] = r && r[d] || m.style(a, d);
            } else j = void 0;
        }if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide();
            }), n.done(function () {
                var b;m._removeData(a, "fxshow");for (b in o) {
                    m.style(a, b, o[b]);
                }
            });for (d in o) {
                g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
            }
        }
    }function jc(a, b) {
        var c, d, e, f, g;for (c in a) {
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e);
                }
            } else b[d] = e;
        }
    }function kc(a, b, c) {
        var d,
            e,
            f = 0,
            g = dc.length,
            h = m.Deferred().always(function () {
            delete i.elem;
        }),
            i = function i() {
            if (e) return !1;for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                j.tweens[g].run(f);
            }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
        },
            j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $b || fc(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
            }, stop: function stop(b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
                    j.tweens[c].run(1);
                }return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
            } }),
            k = j.props;for (jc(k, j.opts.specialEasing); g > f; f++) {
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        }return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }m.Animation = m.extend(kc, { tweener: function tweener(a, b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b);
            }
        }, prefilter: function prefilter(a, b) {
            b ? dc.unshift(a) : dc.push(a);
        } }), m.speed = function (a, b, c) {
        var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b };return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
        }, d;
    }, m.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        }, animate: function animate(a, b, c, d) {
            var e = m.isEmptyObject(a),
                f = m.speed(b, c, d),
                g = function g() {
                var b = kc(this, m.extend({}, a), f);(e || m._data(this, "finish")) && b.stop(!0);
            };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        }, stop: function stop(a, b, c) {
            var d = function d(a) {
                var b = a.stop;delete a.stop, b(c);
            };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = m.timers,
                    g = m._data(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
                    g[e] && g[e].stop && cc.test(e) && d(g[e]);
                }for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                }(b || !c) && m.dequeue(this, a);
            });
        }, finish: function finish(a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b,
                    c = m._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = m.timers,
                    g = d ? d.length : 0;for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                }for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this);
                }delete c.finish;
            });
        } }), m.each(["toggle", "show", "hide"], function (a, b) {
        var c = m.fn[b];m.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e);
        };
    }), m.each({ slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
        m.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), m.timers = [], m.fx.tick = function () {
        var a,
            b = m.timers,
            c = 0;for ($b = m.now(); c < b.length; c++) {
            a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        }b.length || m.fx.stop(), $b = void 0;
    }, m.fx.timer = function (a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }, m.fx.interval = 13, m.fx.start = function () {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval));
    }, m.fx.stop = function () {
        clearInterval(_b), _b = null;
    }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);c.stop = function () {
                clearTimeout(d);
            };
        });
    }, function () {
        var a, b, c, d, e;b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value;
    }();var lc = /\r/g;m.fn.extend({ val: function val(a) {
            var b,
                c,
                d,
                e = this[0];{
                if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
                    var e;1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                        return null == a ? "" : a + "";
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c);
            }
        } }), m.extend({ valHooks: { option: { get: function get(a) {
                    var b = m.find.attr(a, "value");return null != b ? b : m.trim(m.text(a));
                } }, select: { get: function get(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;g.push(b);
                        }
                    }return g;
                }, set: function set(a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = m.makeArray(b),
                        g = e.length;while (g--) {
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0;
                        } catch (h) {
                            d.scrollHeight;
                        } else d.selected = !1;
                    }return c || (a.selectedIndex = -1), e;
                } } } }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = { set: function set(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
            } }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });var mc,
        nc,
        oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;m.fn.extend({ attr: function attr(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1);
        }, removeAttr: function removeAttr(a) {
            return this.each(function () {
                m.removeAttr(this, a);
            });
        } }), m.extend({ attr: function attr(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b));
        }, removeAttr: function removeAttr(a, b) {
            var c,
                d,
                e = 0,
                f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
                d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d);
            }
        }, attrHooks: { type: { set: function set(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                } } } }), nc = { set: function set(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c;
        } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = oc[b] || m.find.attr;oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
            var e, f;return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e;
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
        };
    }), rc && qc || (m.attrHooks.value = { set: function set(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c);
        } }), qc || (mc = { set: function set(a, b, c) {
            var d = a.getAttributeNode(c);return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
        } }, oc.id = oc.name = oc.coords = function (a, b, c) {
        var d;return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
    }, m.valHooks.button = { get: function get(a, b) {
            var c = a.getAttributeNode(b);return c && c.specified ? c.value : void 0;
        }, set: mc.set }, m.attrHooks.contenteditable = { set: function set(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c);
        } }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = { set: function set(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
            } };
    })), k.style || (m.attrHooks.style = { get: function get(a) {
            return a.style.cssText || void 0;
        }, set: function set(a, b) {
            return a.style.cssText = b + "";
        } });var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;m.fn.extend({ prop: function prop(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1);
        }, removeProp: function removeProp(a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a];
                } catch (b) {}
            });
        } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
            var d,
                e,
                f,
                g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        }, propHooks: { tabIndex: { get: function get(a) {
                    var b = m.find.attr(a, "tabindex");return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1;
                } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = { get: function get(a) {
                return a.getAttribute(b, 4);
            } };
    }), k.optSelected || (m.propHooks.selected = { get: function get(a) {
            var b = a.parentNode;return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this;
    }), k.enctype || (m.propFix.enctype = "encoding");var uc = /[\t\r\n\f]/g;m.fn.extend({ addClass: function addClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = 0,
                i = this.length,
                j = "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className));
            });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
                if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                    f = 0;while (e = b[f++]) {
                        d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    }g = m.trim(d), c.className !== g && (c.className = g);
                }
            }return this;
        }, removeClass: function removeClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className));
            });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
                if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                    f = 0;while (e = b[f++]) {
                        while (d.indexOf(" " + e + " ") >= 0) {
                            d = d.replace(" " + e + " ", " ");
                        }
                    }g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
                }
            }return this;
        }, toggleClass: function toggleClass(a, b) {
            var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function () {
                if ("string" === c) {
                    var b,
                        d = 0,
                        e = m(this),
                        f = a.match(E) || [];while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    }
                } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
            });
        }, hasClass: function hasClass(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            }return !1;
        } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), m.fn.extend({ hover: function hover(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }, bind: function bind(a, b, c) {
            return this.on(a, null, b, c);
        }, unbind: function unbind(a, b) {
            return this.off(a, null, b);
        }, delegate: function delegate(a, b, c, d) {
            return this.on(b, a, c, d);
        }, undelegate: function undelegate(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        } });var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");var c,
            d = null,
            e = m.trim(b + "");return e && !m.trim(e.replace(xc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
    }, m.parseXML = function (b) {
        var c, d;if (!b || "string" != typeof b) return null;try {
            a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
        } catch (e) {
            c = void 0;
        }return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c;
    };var yc,
        zc,
        Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");try {
        zc = location.href;
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href;
    }yc = Gc.exec(zc.toLowerCase()) || [];function Lc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");var d,
                e = 0,
                f = b.toLowerCase().match(E) || [];if (m.isFunction(c)) while (d = f[e++]) {
                "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
            }
        };
    }function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;function g(h) {
            var i;return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }return g(b.dataTypes[0]) || !e["*"] && g("*");
    }function Nc(a, b) {
        var c,
            d,
            e = m.ajaxSettings.flatOptions || {};for (d in b) {
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        }return c && m.extend(!0, a, c), a;
    }function Oc(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;while ("*" === i[0]) {
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        }if (e) for (g in h) {
            if (h[g] && h[g].test(e)) {
                i.unshift(g);break;
            }
        }if (i[0] in c) f = i[0];else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;break;
                }d || (d = g);
            }f = f || d;
        }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }function Pc(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
            j[g.toLowerCase()] = a.converters[g];
        }f = k.shift();while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
                    }
                }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
                    b = g(b);
                } catch (l) {
                    return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                }
            }
        }return { state: "success", data: b };
    }m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a);
        }, ajaxPrefilter: Lc(Hc), ajaxTransport: Lc(Ic), ajax: function ajax(a, b) {
            "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
                    var b;if (2 === t) {
                        if (!j) {
                            j = {};while (b = Cc.exec(f)) {
                                j[b[1].toLowerCase()] = b[2];
                            }
                        }b = j[a.toLowerCase()];
                    }return null == b ? null : b;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return 2 === t ? f : null;
                }, setRequestHeader: function setRequestHeader(a, b) {
                    var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
                }, overrideMimeType: function overrideMimeType(a) {
                    return t || (k.mimeType = a), this;
                }, statusCode: function statusCode(a) {
                    var b;if (a) if (2 > t) for (b in a) {
                        q[b] = [q[b], a[b]];
                    } else v.always(a[v.status]);return this;
                }, abort: function abort(a) {
                    var b = a || u;return i && i.abort(b), x(0, b), this;
                } };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);for (d in k.headers) {
                v.setRequestHeader(d, k.headers[d]);
            }if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (d in { success: 1, error: 1, complete: 1 }) {
                v[d](k[d]);
            }if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout");
                }, k.timeout));try {
                    t = 1, i.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;x(-1, w);
                }
            } else x(-1, "No Transport");function x(a, b, c, d) {
                var j,
                    r,
                    s,
                    u,
                    w,
                    x = b;2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")));
            }return v;
        }, getJSON: function getJSON(a, b, c) {
            return m.get(a, b, c, "json");
        }, getScript: function getScript(a, b) {
            return m.get(a, void 0, b, "script");
        } }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d });
        };
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), m._evalUrl = function (a) {
        return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
    }, m.fn.extend({ wrapAll: function wrapAll(a) {
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).wrapAll(a.call(this, b));
            });if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;while (a.firstChild && 1 === a.firstChild.nodeType) {
                        a = a.firstChild;
                    }return a;
                }).append(this);
            }return this;
        }, wrapInner: function wrapInner(a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b));
            } : function () {
                var b = m(this),
                    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
            });
        }, wrap: function wrap(a) {
            var b = m.isFunction(a);return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a);
            });
        }, unwrap: function unwrap() {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
            }).end();
        } }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a);
    };var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;function Vc(a, b, c, d) {
        var e;if (m.isArray(b)) m.each(b, function (b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
        });else if (c || "object" !== m.type(b)) d(a, b);else for (e in b) {
            Vc(a + "[" + e + "]", b[e], c, d);
        }
    }m.param = function (a, b) {
        var c,
            d = [],
            e = function e(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
            e(this.name, this.value);
        });else for (c in a) {
            Vc(c, a[c], b, e);
        }return d.join("&").replace(Qc, "+");
    }, m.fn.extend({ serialize: function serialize() {
            return m.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var a = m.prop(this, "elements");return a ? m.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a));
            }).map(function (a, b) {
                var c = m(this).val();return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return { name: b.name, value: a.replace(Sc, "\r\n") };
                }) : { name: b.name, value: c.replace(Sc, "\r\n") };
            }).get();
        } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c();
    } : Zc;var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();a.ActiveXObject && m(a).on("unload", function () {
        for (var a in Xc) {
            Xc[a](void 0, !0);
        }
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var _b3;return { send: function send(c, d) {
                    var e,
                        f = a.xhr(),
                        g = ++Wc;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
                        f[e] = a.xhrFields[e];
                    }a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    }f.send(a.hasContent && a.data || null), _b3 = function b(c, e) {
                        var h, i, j;if (_b3 && (e || 4 === f.readyState)) if (delete Xc[g], _b3 = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);try {
                                i = f.statusText;
                            } catch (k) {
                                i = "";
                            }h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
                        }j && d(h, i, j, f.getAllResponseHeaders());
                    }, a.async ? 4 === f.readyState ? setTimeout(_b3) : f.onreadystatechange = Xc[g] = _b3 : _b3();
                }, abort: function abort() {
                    _b3 && _b3(void 0, !0);
                } };
        }
    });function Zc() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
                return m.globalEval(a), a;
            } } }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b,
                c = y.head || m("head")[0] || y.documentElement;return { send: function send(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
                    }, c.insertBefore(b, c.firstChild);
                }, abort: function abort() {
                    b && b.onload(void 0, !0);
                } };
        }
    });var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;m.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var a = _c.pop() || m.expando + "_" + vc++;return this[a] = !0, a;
        } }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || y;var d = u.exec(a),
            e = !c && [];return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes));
    };var bd = m.fn.load;m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a]);
        }), this;
    }, m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem;
        }).length;
    };var cd = a.document.documentElement;function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }m.offset = { setOffset: function setOffset(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = m.css(a, "position"),
                l = m(a),
                n = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
        } }, m.fn.extend({ offset: function offset(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                m.offset.setOffset(this, a, b);
            });var b,
                c,
                d = { top: 0, left: 0 },
                e = this[0],
                f = e && e.ownerDocument;if (f) return b = f.documentElement, m.contains(b, e) ? (_typeof(e.getBoundingClientRect) !== K && (d = e.getBoundingClientRect()), c = dd(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d;
        }, position: function position() {
            if (this[0]) {
                var a,
                    b,
                    c = { top: 0, left: 0 },
                    d = this[0];return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var a = this.offsetParent || cd;while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
                    a = a.offsetParent;
                }return a || cd;
            });
        } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
        var c = /Y/.test(b);m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dd(a);return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
            }, a, d, arguments.length, null);
        };
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0;
        });
    }), m.each({ Height: "height", Width: "width" }, function (a, b) {
        m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");return V(this, function (b, c, d) {
                    var e;return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), m.fn.size = function () {
        return this.length;
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m;
    });var ed = a.jQuery,
        fd = a.$;return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m;
    }, (typeof b === "undefined" ? "undefined" : _typeof(b)) === K && (a.jQuery = a.$ = m), m;
});

/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
    var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery), +function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
            if (void 0 !== a.style[c]) return { end: b[c] };
        }return !1;
    }a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;a(this).one("bsTransitionEnd", function () {
            c = !0;
        });var e = function e() {
            c || a(d).trigger(a.support.transition.end);
        };return setTimeout(e, b), this;
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
            } });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
        });
    }var c = '[data-dismiss="alert"]',
        d = function d(b) {
        a(b).on("click", c, this.close);
    };d.VERSION = "3.3.1", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove();
        }var e = a(this),
            f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a(f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
    };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this;
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
        });
    }var c = function c(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
    };c.VERSION = "3.3.1", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
        }, this), 0);
    }, c.prototype.toggle = function () {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
            var c = this.$element.find("input");"radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));a && this.$element.toggleClass("active");
    };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this;
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault();
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
                g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }var c = function c(b, _c2) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c2, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };c.VERSION = "3.3.1", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {case 37:
                    this.prev();break;case 39:
                    this.next();break;default:
                    return;}a.preventDefault();
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = "prev" == a ? -1 : 1,
            d = this.getItemIndex(b),
            e = (d + c) % this.$items.length;return this.$items.eq(e);
    }, c.prototype.to = function (a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a);
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = "next" == b ? "first" : "last",
            j = this;if (!f.length) {
            if (!this.options.wrap) return;f = this.$element.find(".item")[i]();
        }if (f.hasClass("active")) return this.sliding = !1;var k = f[0],
            l = a.Event("slide.bs.carousel", { relatedTarget: k, direction: h });if (this.$element.trigger(l), !l.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");var m = a(this.$indicators.children()[this.getItemIndex(f)]);m && m.addClass("active");
            }var n = a.Event("slid.bs.carousel", { relatedTarget: k, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), j.sliding = !1, setTimeout(function () {
                    j.$element.trigger(n);
                }, 0);
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(n)), g && this.cycle(), this;
        }
    };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this;
    };var e = function e(c) {
        var d,
            e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
        }
    };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);b.call(c, c.data());
        });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c,
            d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
    }function c(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
        });
    }var d = function d(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
    };d.VERSION = "3.3.1", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");return a ? "width" : "height";
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b,
                e = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
                    };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
        }, this)).end();
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
    };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this;
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : a.extend({}, e.data(), { trigger: this });c.call(f, h);
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function () {
            var d = a(this),
                e = c(d),
                f = { relatedTarget: this };e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)));
        }));
    }function c(b) {
        var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
    }function d(b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
        });
    }var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function g(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };g.VERSION = "3.3.1", g.prototype.toggle = function (d) {
        var e = a(this);if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
            }return !1;
        }
    }, g.prototype.keydown = function (b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.divider):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);if (i.length) {
                    var j = i.index(b.target);38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
                }
            }
        }
    };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this;
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown);
}(jQuery), +function (a) {
    "use strict";
    function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
        });
    }var c = function c(b, _c3) {
        this.options = _c3, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };c.VERSION = "3.3.1", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.options.backdrop && d.adjustBackdrop(), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f);
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
        }));
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
        }, this));
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
    }, c.prototype.hideModal = function () {
        var a = this;this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
        });
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function (a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");var g = function g() {
                d.removeBackdrop(), b && b();
            };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
        } else b && b();
    }, c.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog();
    }, c.prototype.adjustBackdrop = function () {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight);
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
    }, c.prototype.checkScrollbar = function () {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar();
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "");
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
    };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus");
            });
        }), b.call(f, g, this);
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b,
                g = f && f.selector;(e || "destroy" != b) && (g ? (e || d.data("bs.tooltip", e = {}), e[g] || (e[g] = new c(this, f))) : e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }var c = function c(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b);
    };c.VERSION = "3.3.1", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS;
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
    }, c.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c && c.$tip && c.$tip.is(":visible") ? void (c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show());
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide();
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
                f = this.tip(),
                g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;if (j) {
                var n = h,
                    o = this.options.container ? a(this.options.container) : this.$element.parent(),
                    p = this.getPosition(o);h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h);
            }var q = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(q, h);var r = function r() {
                var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
            };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r();
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
                d.css({ top: Math.round(a.top), left: Math.round(a.left) });
            } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
            j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
        }var e = this,
            f = this.tip(),
            g = a.Event("hide.bs." + this.type);return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
    }, c.prototype.fixTitle = function () {
        var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, c.prototype.hasContent = function () {
        return this.getTitle();
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = d ? { top: 0, left: 0 } : b.offset(),
            g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            h = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, g, h, f);
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
            var j = b.left - f,
                k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k);
        }return e;
    }, c.prototype.getTitle = function () {
        var a,
            b = this.$element,
            c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, c.prototype.getUID = function (a) {
        do {
            a += ~~(1e6 * Math.random());
        } while (document.getElementById(a));return a;
    }, c.prototype.tip = function () {
        return this.$tip = this.$tip || a(this.options.template);
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, c.prototype.enable = function () {
        this.enabled = !0;
    }, c.prototype.disable = function () {
        this.enabled = !1;
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
    }, c.prototype.toggle = function (b) {
        var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, c.prototype.destroy = function () {
        var a = this;clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type);
        });
    };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this;
    };
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b,
                g = f && f.selector;(e || "destroy" != b) && (g ? (e || d.data("bs.popover", e = {}), e[g] || (e[g] = new c(this, f))) : e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }var c = function c(a, b) {
        this.init("popover", a, b);
    };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.1", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS;
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
    }, c.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    }, c.prototype.tip = function () {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
    };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this;
    };
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        var e = a.proxy(this.process, this);this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process();
    }function c(c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }b.VERSION = "3.3.1", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, b.prototype.refresh = function () {
        var b = "offset",
            c = 0;a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();var d = this;this.$body.find(this.selector).map(function () {
            var d = a(this),
                e = d.data("target") || d.attr("href"),
                f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null;
        }).sort(function (a, b) {
            return a[0] - b[0];
        }).each(function () {
            d.offsets.push(this[0]), d.targets.push(this[1]);
        });
    }, b.prototype.process = function () {
        var a,
            b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
            g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
        }
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this;
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);c.call(b, b.data());
        });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
        });
    }var c = function c(b) {
        this.element = a(b);
    };c.VERSION = "3.3.1", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
                });
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
        }var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
    };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this;
    };var e = function e(c) {
        c.preventDefault(), b.call(a(this), "show");
    };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
        });
    }var c = function c(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
    };c.VERSION = "3.3.1", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();if (null != c && "top" == this.affixed) return c > e ? "top" : !1;if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;return null != c && c >= i ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
            b = this.$element.offset();return this.pinnedOffset = b.top - a;
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = a("body").height();"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
            }"bottom" == h && this.$element.offset({ top: g - b - f });
        }
    };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this;
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this),
                d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
        });
    });
}(jQuery);
/*!
 * Bootstrap-select v1.6.3 (http://silviomoreto.github.io/bootstrap-select/)
 *
 * Copyright 2013-2014 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function (a) {
    "use strict";
    function b(a, b) {
        return a.toUpperCase().indexOf(b.toUpperCase()) > -1;
    }function c(b) {
        var c = [{ re: /[\xC0-\xC6]/g, ch: "A" }, { re: /[\xE0-\xE6]/g, ch: "a" }, { re: /[\xC8-\xCB]/g, ch: "E" }, { re: /[\xE8-\xEB]/g, ch: "e" }, { re: /[\xCC-\xCF]/g, ch: "I" }, { re: /[\xEC-\xEF]/g, ch: "i" }, { re: /[\xD2-\xD6]/g, ch: "O" }, { re: /[\xF2-\xF6]/g, ch: "o" }, { re: /[\xD9-\xDC]/g, ch: "U" }, { re: /[\xF9-\xFC]/g, ch: "u" }, { re: /[\xC7-\xE7]/g, ch: "c" }, { re: /[\xD1]/g, ch: "N" }, { re: /[\xF1]/g, ch: "n" }];return a.each(c, function () {
            b = b.replace(this.re, this.ch);
        }), b;
    }function d(a) {
        var b = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            c = "(?:" + Object.keys(b).join("|") + ")",
            d = new RegExp(c),
            e = new RegExp(c, "g"),
            f = null == a ? "" : "" + a;return d.test(f) ? f.replace(e, function (a) {
            return b[a];
        }) : f;
    }function e(b, c) {
        var d = arguments,
            e = b,
            b = d[0],
            c = d[1];[].shift.apply(d), "undefined" == typeof b && (b = e);var g,
            h = this.each(function () {
            var e = a(this);if (e.is("select")) {
                var h = e.data("selectpicker"),
                    i = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;if (h) {
                    if (i) for (var j in i) {
                        i.hasOwnProperty(j) && (h.options[j] = i[j]);
                    }
                } else {
                    var k = a.extend({}, f.DEFAULTS, a.fn.selectpicker.defaults || {}, e.data(), i);e.data("selectpicker", h = new f(this, k, c));
                }"string" == typeof b && (g = h[b] instanceof Function ? h[b].apply(h, d) : h.options[b]);
            }
        });return "undefined" != typeof g ? g : h;
    }a.expr[":"].icontains = function (c, d, e) {
        return b(a(c).text(), e[3]);
    }, a.expr[":"].aicontains = function (c, d, e) {
        return b(a(c).data("normalizedText") || a(c).text(), e[3]);
    };var f = function f(b, c, d) {
        d && (d.stopPropagation(), d.preventDefault()), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = f.prototype.val, this.render = f.prototype.render, this.refresh = f.prototype.refresh, this.setStyle = f.prototype.setStyle, this.selectAll = f.prototype.selectAll, this.deselectAll = f.prototype.deselectAll, this.destroy = f.prototype.remove, this.remove = f.prototype.remove, this.show = f.prototype.show, this.hide = f.prototype.hide, this.init();
    };f.VERSION = "1.6.3", f.DEFAULTS = { noneSelectedText: "Nothing selected", noneResultsText: "No results match", countSelectedText: function countSelectedText(a) {
            return 1 == a ? "{0} item selected" : "{0} items selected";
        }, maxOptionsText: function maxOptionsText(a, b) {
            var c = [];return c[0] = 1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", c[1] = 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)", c;
        }, selectAllText: "Select All", deselectAllText: "Deselect All", multipleSeparator: ", ", style: "btn-default", size: "auto", title: null, selectedTextFormat: "values", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1, actionsBox: !1, iconBase: "glyphicon", tickIcon: "glyphicon-ok", maxOptions: !1, mobile: !1, selectOnTab: !1, dropdownAlignRight: !1, searchAccentInsensitive: !1 }, f.prototype = { constructor: f, init: function init() {
            var b = this,
                c = this.$element.attr("id");this.$element.hide(), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$menu = this.$newElement.find("> .dropdown-menu"), this.$button = this.$newElement.find("> button"), this.$searchbox = this.$newElement.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function (a) {
                a.preventDefault(), b.$button.focus();
            })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.liHeight(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile();
        }, createDropdown: function createDropdown() {
            var b = this.multiple ? " show-tick" : "",
                c = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                d = this.autofocus ? " autofocus" : "",
                e = this.$element.parents().hasClass("form-group-lg") ? " btn-lg" : this.$element.parents().hasClass("form-group-sm") ? " btn-sm" : "",
                f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                g = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>' : "",
                h = this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">' + this.options.selectAllText + '</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                i = '<div class="btn-group bootstrap-select' + b + c + '"><button type="button" class="btn dropdown-toggle selectpicker' + e + '" data-toggle="dropdown"' + d + '><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">' + f + g + h + '<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>';return a(i);
        }, createView: function createView() {
            var a = this.createDropdown(),
                b = this.createLi();return a.find("ul").append(b), a;
        }, reloadLi: function reloadLi() {
            this.destroyLi();var a = this.createLi();this.$menu.find("ul").append(a);
        }, destroyLi: function destroyLi() {
            this.$menu.find("li").remove();
        }, createLi: function createLi() {
            var b = this,
                e = [],
                f = 0,
                g = function g(a, b, c) {
                return "<li" + ("undefined" != typeof c ? ' class="' + c + '"' : "") + ("undefined" != typeof b | null === b ? ' data-original-index="' + b + '"' : "") + ">" + a + "</li>";
            },
                h = function h(a, e, f, g) {
                var h = c(d(a));return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + ("undefined" != typeof f ? ' style="' + f + '"' : "") + ("undefined" != typeof g ? 'data-optgroup="' + g + '"' : "") + ' data-normalized-text="' + h + '">' + a + '<span class="' + b.options.iconBase + " " + b.options.tickIcon + ' check-mark"></span></a>';
            };return this.$element.find("option").each(function () {
                var c = a(this),
                    d = c.attr("class") || "",
                    i = c.attr("style"),
                    j = c.data("content") ? c.data("content") : c.html(),
                    k = "undefined" != typeof c.data("subtext") ? '<small class="muted text-muted">' + c.data("subtext") + "</small>" : "",
                    l = "undefined" != typeof c.data("icon") ? '<span class="' + b.options.iconBase + " " + c.data("icon") + '"></span> ' : "",
                    m = c.is(":disabled") || c.parent().is(":disabled"),
                    n = c[0].index;if ("" !== l && m && (l = "<span>" + l + "</span>"), c.data("content") || (j = l + '<span class="text">' + j + k + "</span>"), !b.options.hideDisabled || !m) if (c.parent().is("optgroup") && c.data("divider") !== !0) {
                    if (0 === c.index()) {
                        f += 1;var o = c.parent().attr("label"),
                            p = "undefined" != typeof c.parent().data("subtext") ? '<small class="muted text-muted">' + c.parent().data("subtext") + "</small>" : "",
                            q = c.parent().data("icon") ? '<span class="' + b.options.iconBase + " " + c.parent().data("icon") + '"></span> ' : "";o = q + '<span class="text">' + o + p + "</span>", 0 !== n && e.length > 0 && e.push(g("", null, "divider")), e.push(g(o, null, "dropdown-header"));
                    }e.push(g(h(j, "opt " + d, i, f), n));
                } else e.push(c.data("divider") === !0 ? g("", n, "divider") : c.data("hidden") === !0 ? g(h(j, d, i), n, "hide is-hidden") : g(h(j, d, i), n));
            }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), a(e.join(""));
        }, findLis: function findLis() {
            return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis;
        }, render: function render(b) {
            var c = this;b !== !1 && this.$element.find("option").each(function (b) {
                c.setDisabled(b, a(this).is(":disabled") || a(this).parent().is(":disabled")), c.setSelected(b, a(this).is(":selected"));
            }), this.tabIndex();var e = this.options.hideDisabled ? ":not([disabled])" : "",
                f = this.$element.find("option:selected" + e).map(function () {
                var b,
                    d = a(this),
                    e = d.data("icon") && c.options.showIcon ? '<i class="' + c.options.iconBase + " " + d.data("icon") + '"></i> ' : "";return b = c.options.showSubtext && d.attr("data-subtext") && !c.multiple ? ' <small class="muted text-muted">' + d.data("subtext") + "</small>" : "", d.data("content") && c.options.showContent ? d.data("content") : "undefined" != typeof d.attr("title") ? d.attr("title") : e + d.html() + b;
            }).toArray(),
                g = this.multiple ? f.join(this.options.multipleSeparator) : f[0];if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var h = this.options.selectedTextFormat.split(">");if (h.length > 1 && f.length > h[1] || 1 == h.length && f.length >= 2) {
                    e = this.options.hideDisabled ? ", [disabled]" : "";var i = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + e).length,
                        j = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(f.length, i) : this.options.countSelectedText;g = j.replace("{0}", f.length.toString()).replace("{1}", i.toString());
                }
            }this.options.title = this.$element.attr("title"), "static" == this.options.selectedTextFormat && (g = this.options.title), g || (g = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", d(g)), this.$newElement.find(".filter-option").html(g);
        }, setStyle: function setStyle(a, b) {
            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi, ""));var c = a ? a : this.options.style;"add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c));
        }, liHeight: function liHeight() {
            if (this.options.size !== !1) {
                var a = this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus", !1).end().appendTo("body"),
                    b = a.addClass("open").find("> .dropdown-menu"),
                    c = b.find("li").not(".divider").not(".dropdown-header").filter(":visible").children("a").outerHeight(),
                    d = this.options.header ? b.find(".popover-title").outerHeight() : 0,
                    e = this.options.liveSearch ? b.find(".bs-searchbox").outerHeight() : 0,
                    f = this.options.actionsBox ? b.find(".bs-actionsbox").outerHeight() : 0;a.remove(), this.$newElement.data("liHeight", c).data("headerHeight", d).data("searchHeight", e).data("actionsHeight", f);
            }
        }, setSize: function setSize() {
            this.findLis();var b,
                c,
                d,
                e = this,
                f = this.$menu,
                g = f.find(".inner"),
                h = this.$newElement.outerHeight(),
                i = this.$newElement.data("liHeight"),
                j = this.$newElement.data("headerHeight"),
                k = this.$newElement.data("searchHeight"),
                l = this.$newElement.data("actionsHeight"),
                m = this.$lis.filter(".divider").outerHeight(!0),
                n = parseInt(f.css("padding-top")) + parseInt(f.css("padding-bottom")) + parseInt(f.css("border-top-width")) + parseInt(f.css("border-bottom-width")),
                o = this.options.hideDisabled ? ", .disabled" : "",
                p = a(window),
                q = n + parseInt(f.css("margin-top")) + parseInt(f.css("margin-bottom")) + 2,
                r = function r() {
                c = e.$newElement.offset().top - p.scrollTop(), d = p.height() - c - h;
            };if (r(), this.options.header && f.css("padding-top", 0), "auto" == this.options.size) {
                var s = function s() {
                    var a,
                        h = e.$lis.not(".hide");r(), b = d - q, e.options.dropupAuto && e.$newElement.toggleClass("dropup", c > d && b - q < f.height()), e.$newElement.hasClass("dropup") && (b = c - q), a = h.length + h.filter(".dropdown-header").length > 3 ? 3 * i + q - 2 : 0, f.css({ "max-height": b + "px", overflow: "hidden", "min-height": a + j + k + l + "px" }), g.css({ "max-height": b - j - k - l - n + "px", "overflow-y": "auto", "min-height": Math.max(a - n, 0) + "px" });
                };s(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", s), a(window).off("resize.getSize").on("resize.getSize", s), a(window).off("scroll.getSize").on("scroll.getSize", s);
            } else if (this.options.size && "auto" != this.options.size && f.find("li" + o).length > this.options.size) {
                var t = this.$lis.not(".divider" + o).find(" > *").slice(0, this.options.size).last().parent().index(),
                    u = this.$lis.slice(0, t + 1).filter(".divider").length;b = i * this.options.size + u * m + n, e.options.dropupAuto && this.$newElement.toggleClass("dropup", c > d && b < f.height()), f.css({ "max-height": b + j + k + l + "px", overflow: "hidden" }), g.css({ "max-height": b - n + "px", "overflow-y": "auto" });
            }
        }, setWidth: function setWidth() {
            if ("auto" == this.options.width) {
                this.$menu.css("min-width", "0");var a = this.$newElement.clone().appendTo("body"),
                    b = a.find("> .dropdown-menu").css("width"),
                    c = a.css("width", "auto").find("> button").css("width");a.remove(), this.$newElement.css("width", Math.max(parseInt(b), parseInt(c)) + "px");
            } else "fit" == this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width");
        }, selectPosition: function selectPosition() {
            var b,
                c,
                d = this,
                e = "<div />",
                f = a(e),
                g = function g(a) {
                f.addClass(a.attr("class").replace(/form-control/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), c = a.hasClass("dropup") ? 0 : a[0].offsetHeight, f.css({ top: b.top + c, left: b.left, width: a[0].offsetWidth, position: "absolute" });
            };this.$newElement.on("click", function () {
                d.isDisabled() || (g(a(this)), f.appendTo(d.options.container), f.toggleClass("open", !a(this).hasClass("open")), f.append(d.$menu));
            }), a(window).resize(function () {
                g(d.$newElement);
            }), a(window).on("scroll", function () {
                g(d.$newElement);
            }), a("html").on("click", function (b) {
                a(b.target).closest(d.$newElement).length < 1 && f.removeClass("open");
            });
        }, setSelected: function setSelected(a, b) {
            this.findLis(), this.$lis.filter('[data-original-index="' + a + '"]').toggleClass("selected", b);
        }, setDisabled: function setDisabled(a, b) {
            this.findLis(), b ? this.$lis.filter('[data-original-index="' + a + '"]').addClass("disabled").find("a").attr("href", "#").attr("tabindex", -1) : this.$lis.filter('[data-original-index="' + a + '"]').removeClass("disabled").find("a").removeAttr("href").attr("tabindex", 0);
        }, isDisabled: function isDisabled() {
            return this.$element.is(":disabled");
        }, checkDisabled: function checkDisabled() {
            var a = this;this.isDisabled() ? this.$button.addClass("disabled").attr("tabindex", -1) : (this.$button.hasClass("disabled") && this.$button.removeClass("disabled"), -1 == this.$button.attr("tabindex") && (this.$element.data("tabindex") || this.$button.removeAttr("tabindex"))), this.$button.click(function () {
                return !a.isDisabled();
            });
        }, tabIndex: function tabIndex() {
            this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")));
        }, clickListener: function clickListener() {
            var b = this;this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function (a) {
                a.stopPropagation();
            }), this.$newElement.on("click", function () {
                b.setSize(), b.options.liveSearch || b.multiple || setTimeout(function () {
                    b.$menu.find(".selected a").focus();
                }, 10);
            }), this.$menu.on("click", "li a", function (c) {
                var d = a(this),
                    e = d.parent().data("originalIndex"),
                    f = b.$element.val(),
                    g = b.$element.prop("selectedIndex");if (b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
                    var h = b.$element.find("option"),
                        i = h.eq(e),
                        j = i.prop("selected"),
                        k = i.parent("optgroup"),
                        l = b.options.maxOptions,
                        m = k.data("maxOptions") || !1;if (b.multiple) {
                        if (i.prop("selected", !j), b.setSelected(e, !j), d.blur(), l !== !1 || m !== !1) {
                            var n = l < h.filter(":selected").length,
                                o = m < k.find("option:selected").length;if (l && n || m && o) if (l && 1 == l) h.prop("selected", !1), i.prop("selected", !0), b.$menu.find(".selected").removeClass("selected"), b.setSelected(e, !0);else if (m && 1 == m) {
                                k.find("option:selected").prop("selected", !1), i.prop("selected", !0);var p = d.data("optgroup");b.$menu.find(".selected").has('a[data-optgroup="' + p + '"]').removeClass("selected"), b.setSelected(e, !0);
                            } else {
                                var q = "function" == typeof b.options.maxOptionsText ? b.options.maxOptionsText(l, m) : b.options.maxOptionsText,
                                    r = q[0].replace("{n}", l),
                                    s = q[1].replace("{n}", m),
                                    t = a('<div class="notify"></div>');q[2] && (r = r.replace("{var}", q[2][l > 1 ? 0 : 1]), s = s.replace("{var}", q[2][m > 1 ? 0 : 1])), i.prop("selected", !1), b.$menu.append(t), l && n && (t.append(a("<div>" + r + "</div>")), b.$element.trigger("maxReached.bs.select")), m && o && (t.append(a("<div>" + s + "</div>")), b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                                    b.setSelected(e, !1);
                                }, 10), t.delay(750).fadeOut(300, function () {
                                    a(this).remove();
                                });
                            }
                        }
                    } else h.prop("selected", !1), i.prop("selected", !0), b.$menu.find(".selected").removeClass("selected"), b.setSelected(e, !0);b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(), (f != b.$element.val() && b.multiple || g != b.$element.prop("selectedIndex") && !b.multiple) && b.$element.change();
                }
            }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (a) {
                a.target == this && (a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus());
            }), this.$menu.on("click", "li.divider, li.dropdown-header", function (a) {
                a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus();
            }), this.$menu.on("click", ".popover-title .close", function () {
                b.$button.focus();
            }), this.$searchbox.on("click", function (a) {
                a.stopPropagation();
            }), this.$menu.on("click", ".actions-btn", function (c) {
                b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).is(".bs-select-all") ? b.selectAll() : b.deselectAll(), b.$element.change();
            }), this.$element.change(function () {
                b.render(!1);
            });
        }, liveSearchListener: function liveSearchListener() {
            var b = this,
                e = a('<li class="no-results"></li>');this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function () {
                b.$menu.find(".active").removeClass("active"), b.$searchbox.val() && (b.$searchbox.val(""), b.$lis.not(".is-hidden").removeClass("hide"), e.parent().length && e.remove()), b.multiple || b.$menu.find(".selected").addClass("active"), setTimeout(function () {
                    b.$searchbox.focus();
                }, 10);
            }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (a) {
                a.stopPropagation();
            }), this.$searchbox.on("input propertychange", function () {
                b.$searchbox.val() ? (b.options.searchAccentInsensitive ? b.$lis.not(".is-hidden").removeClass("hide").find("a").not(":aicontains(" + c(b.$searchbox.val()) + ")").parent().addClass("hide") : b.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains(" + b.$searchbox.val() + ")").parent().addClass("hide"), b.$menu.find("li").filter(":visible:not(.no-results)").length ? e.parent().length && e.remove() : (e.parent().length && e.remove(), e.html(b.options.noneResultsText + ' "' + d(b.$searchbox.val()) + '"').show(), b.$menu.find("li").last().after(e))) : (b.$lis.not(".is-hidden").removeClass("hide"), e.parent().length && e.remove()), b.$menu.find("li.active").removeClass("active"), b.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(), a(this).focus();
            });
        }, val: function val(a) {
            return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val();
        }, selectAll: function selectAll() {
            this.findLis(), this.$lis.not(".divider").not(".disabled").not(".selected").filter(":visible").find("a").click();
        }, deselectAll: function deselectAll() {
            this.findLis(), this.$lis.not(".divider").not(".disabled").filter(".selected").filter(":visible").find("a").click();
        }, keydown: function keydown(b) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m = a(this),
                n = m.is("input") ? m.parent().parent() : m.parent(),
                o = n.data("this"),
                p = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" };if (o.options.liveSearch && (n = m.parent().parent()), o.options.container && (n = o.$menu), d = a("[role=menu] li a", n), l = o.$menu.parent().hasClass("open"), !l && /([0-9]|[A-z])/.test(String.fromCharCode(b.keyCode)) && (o.options.container ? o.$newElement.trigger("click") : (o.setSize(), o.$menu.parent().addClass("open"), l = !0), o.$searchbox.focus()), o.options.liveSearch && (/(^9$|27)/.test(b.keyCode.toString(10)) && l && 0 === o.$menu.find(".active").length && (b.preventDefault(), o.$menu.parent().removeClass("open"), o.$button.focus()), d = a("[role=menu] li:not(.divider):not(.dropdown-header):visible", n), m.val() || /(38|40)/.test(b.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = o.$newElement.find("li").filter(o.options.searchAccentInsensitive ? ":aicontains(" + c(p[b.keyCode]) + ")" : ":icontains(" + p[b.keyCode] + ")"))), d.length) {
                if (/(38|40)/.test(b.keyCode.toString(10))) e = d.index(d.filter(":focus")), g = d.parent(":not(.disabled):visible").first().index(), h = d.parent(":not(.disabled):visible").last().index(), f = d.eq(e).parent().nextAll(":not(.disabled):visible").eq(0).index(), i = d.eq(e).parent().prevAll(":not(.disabled):visible").eq(0).index(), j = d.eq(f).parent().prevAll(":not(.disabled):visible").eq(0).index(), o.options.liveSearch && (d.each(function (b) {
                    a(this).is(":not(.disabled)") && a(this).data("index", b);
                }), e = d.index(d.filter(".active")), g = d.filter(":not(.disabled):visible").first().data("index"), h = d.filter(":not(.disabled):visible").last().data("index"), f = d.eq(e).nextAll(":not(.disabled):visible").eq(0).data("index"), i = d.eq(e).prevAll(":not(.disabled):visible").eq(0).data("index"), j = d.eq(f).prevAll(":not(.disabled):visible").eq(0).data("index")), k = m.data("prevIndex"), 38 == b.keyCode && (o.options.liveSearch && (e -= 1), e != j && e > i && (e = i), g > e && (e = g), e == k && (e = h)), 40 == b.keyCode && (o.options.liveSearch && (e += 1), -1 == e && (e = 0), e != j && f > e && (e = f), e > h && (e = h), e == k && (e = g)), m.data("prevIndex", e), o.options.liveSearch ? (b.preventDefault(), m.is(".dropdown-toggle") || (d.removeClass("active"), d.eq(e).addClass("active").find("a").focus(), m.focus())) : d.eq(e).focus();else if (!m.is("input")) {
                    var q,
                        r,
                        s = [];d.each(function () {
                        a(this).parent().is(":not(.disabled)") && a.trim(a(this).text().toLowerCase()).substring(0, 1) == p[b.keyCode] && s.push(a(this).parent().index());
                    }), q = a(document).data("keycount"), q++, a(document).data("keycount", q), r = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), r != p[b.keyCode] ? (q = 1, a(document).data("keycount", q)) : q >= s.length && (a(document).data("keycount", 0), q > s.length && (q = 1)), d.eq(s[q - 1]).focus();
                }(/(13|32)/.test(b.keyCode.toString(10)) || /(^9$)/.test(b.keyCode.toString(10)) && o.options.selectOnTab) && l && (/(32)/.test(b.keyCode.toString(10)) || b.preventDefault(), o.options.liveSearch ? /(32)/.test(b.keyCode.toString(10)) || (o.$menu.find(".active a").click(), m.focus()) : a(":focus").click(), a(document).data("keycount", 0)), (/(^9$|27)/.test(b.keyCode.toString(10)) && l && (o.multiple || o.options.liveSearch) || /(27)/.test(b.keyCode.toString(10)) && !l) && (o.$menu.parent().removeClass("open"), o.$button.focus());
            }
        }, mobile: function mobile() {
            this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide();
        }, refresh: function refresh() {
            this.$lis = null, this.reloadLi(), this.render(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight();
        }, update: function update() {
            this.reloadLi(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight();
        }, hide: function hide() {
            this.$newElement.hide();
        }, show: function show() {
            this.$newElement.show();
        }, remove: function remove() {
            this.$newElement.remove(), this.$element.remove();
        } };var g = a.fn.selectpicker;a.fn.selectpicker = e, a.fn.selectpicker.Constructor = f, a.fn.selectpicker.noConflict = function () {
        return a.fn.selectpicker = g, this;
    }, a(document).data("keycount", 0).on("keydown", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input", f.prototype.keydown).on("focusin.modal", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input", function (a) {
        a.stopPropagation();
    }), a(window).on("load.bs.select.data-api", function () {
        a(".selectpicker").each(function () {
            var b = a(this);e.call(b, b.data());
        });
    });
}(jQuery);
//# sourceMappingURL=bootstrap-select.js.map
/*
 * jQuery Superfish Menu Plugin - v1.7.4
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;(function (e) {
    "use strict";
    var s = function () {
        var s = { bcClass: "sf-breadcrumb", menuClass: "sf-js-enabled", anchorClass: "sf-with-ul", menuArrowClass: "sf-arrows" },
            o = function () {
            var s = /iPhone|iPad|iPod/i.test(navigator.userAgent);return s && e(window).load(function () {
                e("body").children().on("click", e.noop);
            }), s;
        }(),
            n = function () {
            var e = document.documentElement.style;return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent);
        }(),
            t = function t(e, o) {
            var n = s.menuClass;o.cssArrows && (n += " " + s.menuArrowClass), e.toggleClass(n);
        },
            i = function i(o, n) {
            return o.find("li." + n.pathClass).slice(0, n.pathLevels).addClass(n.hoverClass + " " + s.bcClass).filter(function () {
                return e(this).children(n.popUpSelector).hide().show().length;
            }).removeClass(n.pathClass);
        },
            r = function r(e) {
            e.children("a").toggleClass(s.anchorClass);
        },
            a = function a(e) {
            var s = e.css("ms-touch-action");s = "pan-y" === s ? "auto" : "pan-y", e.css("ms-touch-action", s);
        },
            l = function l(s, t) {
            var i = "li:has(" + t.popUpSelector + ")";e.fn.hoverIntent && !t.disableHI ? s.hoverIntent(u, p, i) : s.on("mouseenter.superfish", i, u).on("mouseleave.superfish", i, p);var r = "MSPointerDown.superfish";o || (r += " touchend.superfish"), n && (r += " mousedown.superfish"), s.on("focusin.superfish", "li", u).on("focusout.superfish", "li", p).on(r, "a", t, h);
        },
            h = function h(s) {
            var o = e(this),
                n = o.siblings(s.data.popUpSelector);n.length > 0 && n.is(":hidden") && (o.one("click.superfish", !1), "MSPointerDown" === s.type ? o.trigger("focus") : e.proxy(u, o.parent("li"))());
        },
            u = function u() {
            var s = e(this),
                o = d(s);clearTimeout(o.sfTimer), s.siblings().superfish("hide").end().superfish("show");
        },
            p = function p() {
            var s = e(this),
                n = d(s);o ? e.proxy(f, s, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(f, s, n), n.delay));
        },
            f = function f(s) {
            s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(c(this)), s.$path.length && e.proxy(u, s.$path)());
        },
            c = function c(e) {
            return e.closest("." + s.menuClass);
        },
            d = function d(e) {
            return c(e).data("sf-options");
        };return { hide: function hide(s) {
                if (this.length) {
                    var o = this,
                        n = d(o);if (!n) return this;var t = n.retainPath === !0 ? n.$path : "",
                        i = o.find("li." + n.hoverClass).add(this).not(t).removeClass(n.hoverClass).children(n.popUpSelector),
                        r = n.speedOut;s && (i.show(), r = 0), n.retainPath = !1, n.onBeforeHide.call(i), i.stop(!0, !0).animate(n.animationOut, r, function () {
                        var s = e(this);n.onHide.call(s);
                    });
                }return this;
            }, show: function show() {
                var e = d(this);if (!e) return this;var s = this.addClass(e.hoverClass),
                    o = s.children(e.popUpSelector);return e.onBeforeShow.call(o), o.stop(!0, !0).animate(e.animation, e.speed, function () {
                    e.onShow.call(o);
                }), this;
            }, destroy: function destroy() {
                return this.each(function () {
                    var o,
                        n = e(this),
                        i = n.data("sf-options");return i ? (o = n.find(i.popUpSelector).parent("li"), clearTimeout(i.sfTimer), t(n, i), r(o), a(n), n.off(".superfish").off(".hoverIntent"), o.children(i.popUpSelector).attr("style", function (e, s) {
                        return s.replace(/display[^;]+;?/g, "");
                    }), i.$path.removeClass(i.hoverClass + " " + s.bcClass).addClass(i.pathClass), n.find("." + i.hoverClass).removeClass(i.hoverClass), i.onDestroy.call(n), n.removeData("sf-options"), void 0) : !1;
                });
            }, init: function init(o) {
                return this.each(function () {
                    var n = e(this);if (n.data("sf-options")) return !1;var h = e.extend({}, e.fn.superfish.defaults, o),
                        u = n.find(h.popUpSelector).parent("li");h.$path = i(n, h), n.data("sf-options", h), t(n, h), r(u), a(n), l(n, h), u.not("." + s.bcClass).superfish("hide", !0), h.onInit.call(this);
                });
            } };
    }();e.fn.superfish = function (o) {
        return s[o] ? s[o].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof o === "undefined" ? "undefined" : _typeof(o)) && o ? e.error("Method " + o + " does not exist on jQuery.fn.superfish") : s.init.apply(this, arguments);
    }, e.fn.superfish.defaults = { popUpSelector: "ul,.sf-mega", hoverClass: "sfHover", pathClass: "overrideThisToUse", pathLevels: 1, delay: 800, animation: { opacity: "show" }, animationOut: { opacity: "hide" }, speed: "normal", speedOut: "fast", cssArrows: !0, disableHI: !1, onInit: e.noop, onBeforeShow: e.noop, onShow: e.noop, onBeforeHide: e.noop, onHide: e.noop, onIdle: e.noop, onDestroy: e.noop }, e.fn.extend({ hideSuperfishUl: s.hide, showSuperfishUl: s.show });
})(jQuery);
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this);
        }, this)), a.each(e.Pipe, a.proxy(function (b, c) {
            this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)), this.setup(), this.initialize();
    }function f(a) {
        if (a.touches !== d) return { x: a.touches[0].pageX, y: a.touches[0].pageY };if (a.touches === d) {
            if (a.pageX !== d) return { x: a.pageX, y: a.pageY };if (a.pageX === d) return { x: a.clientX, y: a.clientY };
        }
    }function g(a) {
        var b,
            d,
            e = c.createElement("div"),
            f = a;for (b in f) {
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        }return [!1];
    }function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1];
    }function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
    }function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0];
    }function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints;
    }function l() {
        return b.navigator.msPointerEnabled;
    }var m, n, o;m = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, n = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, o = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, e.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Plugins = {}, e.Pipe = [{ filter: ["width", "items", "settings"], run: function run(a) {
            a.current = this._items && this._items[this.relative(this._current)];
        } }, { filter: ["items", "settings"], run: function run() {
            var a = this._clones,
                b = this.$stage.children(".cloned");(b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = []);
        } }, { filter: ["items", "settings"], run: function run() {
            var a,
                b,
                c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;for (a = 0, b = Math.abs(e / 2); b > a; a++) {
                e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")));
            }
        } }, { filter: ["width", "items", "settings"], run: function run() {
            var a,
                b,
                c,
                d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0;for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) {
                a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f);
            }
        } }, { filter: ["width", "items", "settings"], run: function run() {
            var b,
                c,
                d = (this.width() / this.settings.items).toFixed(3),
                e = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" };if (this.$stage.css(e), e = { width: this.settings.autoWidth ? "auto" : d - this.settings.margin }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function (a) {
                return a > 1;
            }).length > 0) for (b = 0, c = this._coordinates.length; c > b; b++) {
                e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            } else this.$stage.children().css(e);
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            a.current && this.reset(this.$stage.children().index(a.current));
        } }, { filter: ["position"], run: function run() {
            this.animate(this.coordinates(this._current));
        } }, { filter: ["width", "position", "items", "settings"], run: function run() {
            var a,
                b,
                c,
                d,
                e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];for (c = 0, d = this._coordinates.length; d > c; c++) {
                a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            }this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass));
        } }], e.prototype.initialize = function () {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1;
        }this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized");
    }, e.prototype.setup = function () {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;c ? (a.each(c, function (a) {
            b >= a && a > d && (d = Number(a));
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function (a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "");
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }));
    }, e.prototype.optionsLogic = function () {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", { content: b });return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data;
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a];
        }, this._invalidated), e = {}; c > b;) {
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        }this._invalidated = {};
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {case e.Width.Inner:case e.Width.Outer:
                return this._width;default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin;}
    }, e.prototype.refresh = function () {
        if (0 === this._items.length) return !1;new Date().getTime();this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed");
    }, e.prototype.eventsCall = function () {
        this.e._onDragStart = a.proxy(function (a) {
            this.onDragStart(a);
        }, this), this.e._onDragMove = a.proxy(function (a) {
            this.onDragMove(a);
        }, this), this.e._onDragEnd = a.proxy(function (a) {
            this.onDragEnd(a);
        }, this), this.e._onResize = a.proxy(function (a) {
            this.onResize(a);
        }, this), this.e._transitionEnd = a.proxy(function (a) {
            this.transitionEnd(a);
        }, this), this.e._preventClick = a.proxy(function (a) {
            this.preventClick(a);
        }, this);
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
    }, e.prototype.onResize = function () {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1;
    }, e.prototype.eventsRouter = function (a) {
        var b = a.type;"mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a);
    }, e.prototype.internalEvents = function () {
        var c = (k(), l());this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function (a) {
            this.eventsRouter(a);
        }, this)), this.$stage.on("dragstart", function () {
            return !1;
        }), this.$stage.get(0).onselectstart = function () {
            return !1;
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function (a) {
            this.eventsRouter(a);
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this));
    }, e.prototype.onDragStart = function (d) {
        var e, g, h, i;if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = new Date().getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function (a) {
            this.eventsRouter(a);
        }, this));
    }, e.prototype.onDragMove = function (a) {
        var c, e, g, h, i, j;this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)));
    }, e.prototype.onDragEnd = function (b) {
        var d, e, f;if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;this.drag.endTime = new Date().getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents");
        }
    }, e.prototype.removeClick = function (c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function () {
            a(c).off("click.preventClick");
        }, 300);
    }, e.prototype.preventClick = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick");
    }, e.prototype.getTransformProperty = function () {
        var a, c;return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12];
    }, e.prototype.closest = function (b) {
        var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates();return this.settings.freeDrag || a.each(f, a.proxy(function (a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c;
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c;
    }, e.prototype.animate = function (b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + b + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: b + "px" }) : this.$stage.animate({ left: b }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function () {
            this.state.inMotion && this.transitionEnd();
        }, this));
    }, e.prototype.current = function (a) {
        if (a === d) return this._current;if (0 === this._items.length) return d;if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", { property: { name: "position", value: a } });b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
        }return this._current;
    }, e.prototype.invalidate = function (a) {
        this._invalidated[a] = !0;
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
    }, e.prototype.normalize = function (b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b));
    }, e.prototype.relative = function (a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0);
    }, e.prototype.maximum = function (a) {
        var b,
            c,
            d,
            e = 0,
            f = this.settings;if (a) return this._items.length - 1;if (!f.loop && f.center) b = this._items.length - 1;else if (f.loop || f.center) {
            if (f.loop || f.center) b = this._items.length + f.items;else {
                if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c);) {
                    b = ++e;
                }
            }
        } else b = this._items.length - f.items;return b;
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2;
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function f(a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };return b === d ? a.map(this._clones, function (a, b) {
            return f(b);
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
        });
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed;
    }, e.prototype.coordinates = function (b) {
        var c = null;return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b);
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c);
    }, e.prototype.duration = function (a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }, e.prototype.to = function (c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function () {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update();
            }, this), 30);
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update();
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a);
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a);
    }, e.prototype.transitionEnd = function (a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"));
    }, e.prototype.viewport = function () {
        var d;if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();else if (b.innerWidth) d = b.innerWidth;else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";d = c.documentElement.clientWidth;
        }return d;
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType;
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1);
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
    }, e.prototype.add = function (a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", { content: a, position: b }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: a, position: b });
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a }));
    }, e.prototype.addTriggerableEvents = function () {
        var b = a.proxy(function (b, c) {
            return a.proxy(function (a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]));
            }, this);
        }, this);a.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, a.proxy(function (a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"));
        }, this));
    }, e.prototype.watchVisibility = function () {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0;
        }function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile));
        }c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500));
    }, e.prototype.preloadAutoWidthImages = function (b) {
        var c, d, e, f;c = 0, d = this, b.each(function (g, h) {
            e = a(h), f = new Image(), f.onload = function () {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize());
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina");
        });
    }, e.prototype.destroy = function () {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);for (var d in this._plugins) {
            this._plugins[d].destroy();
        }(this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
            return !1;
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap();
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;switch (b) {case "<":
                return d ? a > c : c > a;case ">":
                return d ? c > a : a > c;case ">=":
                return d ? c >= a : a >= c;case "<=":
                return d ? a >= c : c >= a;}
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }, e.prototype.trigger = function (b, c, d) {
        var e = { item: { count: this._items.length, index: this.current() } },
            f = a.camelCase(a.grep(["on", b, d], function (a) {
            return a;
        }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e, c));return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(g);
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g;
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0;
        }, this));
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b];
        }, this));
    }, e.prototype.browserSupport = function () {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "";
        }this.state.orientation = b.orientation;
    }, a.fn.owlCarousel = function (b) {
        return this.each(function () {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b));
        });
    }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b) {
    var c = function c(b) {
        this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function (a, b) {
                    this.load(b);
                }, this); e++ < d;) {
                    this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h);
                }
            }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };c.Defaults = { lazyLoad: !1 }, c.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e,
                f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
            }, this)).attr("src", g) : (e = new Image(), e.onload = a.proxy(function () {
                f.css({ "background-image": "url(" + g + ")", opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
            }, this), e.src = g);
        }, this)), this._loaded.push(d.get(0)));
    }, c.prototype.destroy = function () {
        var a, b;for (a in this.handlers) {
            this._core.$element.off(a, this.handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c;
}(window.Zepto || window.jQuery, window, document), function (a) {
    var b = function b(c) {
        this._core = c, this._handlers = { "initialized.owl.carousel": a.proxy(function () {
                this._core.settings.autoHeight && this.update();
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update();
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update();
            }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };b.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, b.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass);
    }, b.prototype.destroy = function () {
        var a, b;for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b;
}(window.Zepto || window.jQuery, window, document), function (a, b, c) {
    var d = function d(b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = { "resize.owl.carousel": a.proxy(function (a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault();
            }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
                this._playing && this.stop();
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                var c = a(b.content).find(".owl-video");c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
            }, this) }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a);
        }, this));
    };d.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, d.prototype.fetch = function (a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");if (!g) throw new Error("Missing video URL.");if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else {
            if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");c = "vimeo";
        }d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
    }, d.prototype.thumbnail = function (b, c) {
        var d,
            e,
            f,
            g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function l(a) {
            e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e);
        };return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void ("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function success(a) {
                f = a[0].thumbnail_large, l(f);
            } }));
    }, d.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null;
    }, d.prototype.play = function (b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();var c,
            d,
            e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height();"youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d);
    }, d.prototype.isInFullScreen = function () {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0;
    }, d.prototype.destroy = function () {
        var a, b;this._core.$element.off("click.owl.video");for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function (a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                this.swapping = "translated" == a.type;
            }, this), "translate.owl.carousel": a.proxy(function () {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
            }, this) }, this.core.$element.on(this.handlers);
    };e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);var b,
                c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c));
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd();
    }, e.prototype.destroy = function () {
        var a, b;for (a in this.handlers) {
            this.core.$element.off(a, this.handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c) {
    var d = function d(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": a.proxy(function () {
                this.autoplay();
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                this.play(b, c);
            }, this), "stop.owl.autoplay": a.proxy(function () {
                this.stop();
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this.core.settings.autoplayHoverPause && this.pause();
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this.core.settings.autoplayHoverPause && this.autoplay();
            }, this) }, this.core.$element.on(this.handlers);
    };d.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, d.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function () {
            this.play();
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval);
    }, d.prototype.play = function () {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed);
    }, d.prototype.stop = function () {
        b.clearInterval(this.interval);
    }, d.prototype.pause = function () {
        b.clearInterval(this.interval);
    }, d.prototype.destroy = function () {
        var a, c;b.clearInterval(this.interval);for (a in this.handlers) {
            this.core.$element.off(a, this.handlers[a]);
        }for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d;
}(window.Zepto || window.jQuery, window, document), function (a) {
    "use strict";
    var b = function b(c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function (b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
            }, this), "add.owl.carousel": a.proxy(function (b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
            }, this), "remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1);
            }, this), "change.owl.carousel": a.proxy(function (a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value;
                }
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                "position" == a.property.name && this.draw();
            }, this), "refreshed.owl.carousel": a.proxy(function () {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation");
            }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers);
    };b.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, b.prototype.initialize = function () {
        var b,
            c,
            d = this._core.settings;d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function (b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();b.preventDefault(), this.to(c, d.dotsSpeed);
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function () {
            this.prev(d.navSpeed);
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function () {
            this.next(d.navSpeed);
        }, this));for (c in this._overrides) {
            this._core[c] = a.proxy(this[c], this);
        }
    }, b.prototype.destroy = function () {
        var a, b, c, d;for (a in this._handlers) {
            this.$element.off(a, this._handlers[a]);
        }for (b in this._controls) {
            this._controls[b].remove();
        }for (d in this.overides) {
            this._core[d] = this._overrides[d];
        }for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null);
        }
    }, b.prototype.update = function () {
        var a,
            b,
            c,
            d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy) for (this._pages = [], a = e, b = 0, c = 0; f > a; a++) {
            (b >= g || 0 === b) && (this._pages.push({ start: a - e, end: a - e + g - 1 }), b = 0, ++c), b += this._core.mergers(this._core.relative(a));
        }
    }, b.prototype.draw = function () {
        var b,
            c,
            d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++) {
                    d += this._templates[this._core.relative(c)];
                }this._controls.$indicators.html(d);
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active");
        }this._controls.$indicators.toggle(e.dots);
    }, b.prototype.onTrigger = function (b) {
        var c = this._core.settings;b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items) };
    }, b.prototype.current = function () {
        var b = this._core.relative(this._core.current());return a.grep(this._pages, function (a) {
            return a.start <= b && a.end >= b;
        }).pop();
    }, b.prototype.getPosition = function (b) {
        var c,
            d,
            e = this._core.settings;return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
    }, b.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
    }, b.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
    }, b.prototype.to = function (b, c, d) {
        var e;d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c));
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b;
}(window.Zepto || window.jQuery, window, document), function (a, b) {
    "use strict";
    var c = function c(d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function () {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c] = b.content;
            }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function () {
            var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0;return a ? void this._core.to(d, !1, !0) : !1;
        }, this));
    };c.Defaults = { URLhashListener: !1 }, c.prototype.destroy = function () {
        var c, d;a(b).off("hashchange.owl.navigation");for (c in this._handlers) {
            this._core.$element.off(c, this._handlers[c]);
        }for (d in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[d] && (this[d] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c;
}(window.Zepto || window.jQuery, window, document);
!function (t) {
    var e = { topSpacing: 0, bottomSpacing: 0, className: "is-sticky", wrapperClassName: "sticky-wrapper", center: !1, getWidthFrom: "", responsiveWidth: !1 },
        i = t(window),
        s = t(document),
        n = [],
        r = i.height(),
        o = function o() {
        for (var e = i.scrollTop(), o = s.height(), a = o - r, c = e > a ? a - e : 0, p = 0; p < n.length; p++) {
            var d = n[p],
                l = d.stickyWrapper.offset().top,
                h = l - d.topSpacing - c;if (d.stickyWrapper.css("height", d.stickyElement.outerHeight()), h >= e) null !== d.currentTop && (d.stickyElement.css("width", "").css("position", "").css("top", ""), d.stickyElement.trigger("sticky-end", [d]).parent().removeClass(d.className), d.currentTop = null);else {
                var u = o - d.stickyElement.outerHeight() - d.topSpacing - d.bottomSpacing - e - c;0 > u ? u += d.topSpacing : u = d.topSpacing, d.currentTop != u && (d.stickyElement.css("width", d.stickyElement.width()).css("position", "fixed").css("top", u), "undefined" != typeof d.getWidthFrom && d.stickyElement.css("width", t(d.getWidthFrom).width()), d.stickyElement.trigger("sticky-start", [d]).parent().addClass(d.className), d.currentTop = u);
            }
        }
    },
        a = function a() {
        r = i.height();for (var e = 0; e < n.length; e++) {
            var s = n[e];"undefined" != typeof s.getWidthFrom && s.responsiveWidth === !0 && s.stickyElement.css("width", t(s.getWidthFrom).width());
        }
    },
        c = { init: function init(i) {
            var s = t.extend({}, e, i);return this.each(function () {
                var i = t(this),
                    r = i.attr("id"),
                    o = (r ? r + "-" + e.wrapperClassName : e.wrapperClassName, t("<div></div>").attr("id", r + "-sticky-wrapper").addClass(s.wrapperClassName));i.wrapAll(o), s.center && i.parent().css({ width: i.outerWidth(), marginLeft: "auto", marginRight: "auto" }), "right" == i.css("float") && i.css({ "float": "none" }).parent().css({ "float": "right" });var a = i.parent();a.css("height", i.outerHeight()), n.push({ topSpacing: s.topSpacing, bottomSpacing: s.bottomSpacing, stickyElement: i, currentTop: null, stickyWrapper: a, className: s.className, getWidthFrom: s.getWidthFrom, responsiveWidth: s.responsiveWidth });
            });
        }, update: o, unstick: function unstick() {
            return this.each(function () {
                for (var e = t(this), i = -1, s = 0; s < n.length; s++) {
                    n[s].stickyElement.get(0) == e.get(0) && (i = s);
                }-1 != i && (n.splice(i, 1), e.unwrap(), e.removeAttr("style"));
            });
        } };window.addEventListener ? (window.addEventListener("scroll", o, !1), window.addEventListener("resize", a, !1)) : window.attachEvent && (window.attachEvent("onscroll", o), window.attachEvent("onresize", a)), t.fn.sticky = function (e) {
        return c[e] ? c[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : c.init.apply(this, arguments);
    }, t.fn.unstick = function (e) {
        return c[e] ? c[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : c.unstick.apply(this, arguments);
    }, t(function () {
        setTimeout(o, 0);
    });
}(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing = jQuery.easing.swing;jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function swing(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
    }, easeInQuad: function easeInQuad(e, f, a, h, g) {
        return h * (f /= g) * f + a;
    }, easeOutQuad: function easeOutQuad(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a;
    }, easeInOutQuad: function easeInOutQuad(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a;
        }return -h / 2 * (--f * (f - 2) - 1) + a;
    }, easeInCubic: function easeInCubic(e, f, a, h, g) {
        return h * (f /= g) * f * f + a;
    }, easeOutCubic: function easeOutCubic(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a;
    }, easeInOutCubic: function easeInOutCubic(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a;
        }return h / 2 * ((f -= 2) * f * f + 2) + a;
    }, easeInQuart: function easeInQuart(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a;
    }, easeOutQuart: function easeOutQuart(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a;
    }, easeInOutQuart: function easeInOutQuart(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a;
        }return -h / 2 * ((f -= 2) * f * f * f - 2) + a;
    }, easeInQuint: function easeInQuint(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a;
    }, easeOutQuint: function easeOutQuint(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
    }, easeInOutQuint: function easeInOutQuint(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a;
        }return h / 2 * ((f -= 2) * f * f * f * f + 2) + a;
    }, easeInSine: function easeInSine(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a;
    }, easeOutSine: function easeOutSine(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a;
    }, easeInOutSine: function easeInOutSine(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a;
    }, easeInExpo: function easeInExpo(e, f, a, h, g) {
        return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
    }, easeOutExpo: function easeOutExpo(e, f, a, h, g) {
        return f == g ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a;
    }, easeInOutExpo: function easeInOutExpo(e, f, a, h, g) {
        if (f == 0) {
            return a;
        }if (f == g) {
            return a + h;
        }if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a;
        }return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a;
    }, easeInCirc: function easeInCirc(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
    }, easeOutCirc: function easeOutCirc(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
    }, easeInOutCirc: function easeInOutCirc(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a;
        }return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
    }, easeInElastic: function easeInElastic(f, h, e, l, k) {
        var i = 1.70158;var j = 0;var g = l;if (h == 0) {
            return e;
        }if ((h /= k) == 1) {
            return e + l;
        }if (!j) {
            j = k * 0.3;
        }if (g < Math.abs(l)) {
            g = l;var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
    }, easeOutElastic: function easeOutElastic(f, h, e, l, k) {
        var i = 1.70158;var j = 0;var g = l;if (h == 0) {
            return e;
        }if ((h /= k) == 1) {
            return e + l;
        }if (!j) {
            j = k * 0.3;
        }if (g < Math.abs(l)) {
            g = l;var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e;
    }, easeInOutElastic: function easeInOutElastic(f, h, e, l, k) {
        var i = 1.70158;var j = 0;var g = l;if (h == 0) {
            return e;
        }if ((h /= k / 2) == 2) {
            return e + l;
        }if (!j) {
            j = k * (0.3 * 1.5);
        }if (g < Math.abs(l)) {
            g = l;var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
        }return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e;
    }, easeInBack: function easeInBack(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }return i * (f /= h) * f * ((g + 1) * f - g) + a;
    }, easeOutBack: function easeOutBack(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
    }, easeInOutBack: function easeInOutBack(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
        }return i / 2 * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
    }, easeInBounce: function easeInBounce(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
    }, easeOutBounce: function easeOutBounce(e, f, a, h, g) {
        if ((f /= g) < 1 / 2.75) {
            return h * (7.5625 * f * f) + a;
        } else {
            if (f < 2 / 2.75) {
                return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
            } else {
                if (f < 2.5 / 2.75) {
                    return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
                } else {
                    return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
                }
            }
        }
    }, easeInOutBounce: function easeInOutBounce(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
        }return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a;
    } });

/*! http://mths.be/smoothscroll v1.5.2 by @mathias */
(function (a, c) {
    var b = function () {
        var d = c(a.documentElement),
            f = c(a.body),
            e;if (d.scrollTop()) {
            return d;
        } else {
            e = f.scrollTop();if (f.scrollTop(e + 1).scrollTop() == e) {
                return d;
            } else {
                return f.scrollTop(e);
            }
        }
    }();c.fn.smoothScroll = function (d) {
        d = ~~d || 400;return this.find('a[href*="#"]').click(function (f) {
            var g = this.hash,
                e = c(g);if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                if (e.length) {
                    f.preventDefault();b.stop().animate({ scrollTop: e.offset().top }, d, function () {
                        location.hash = g;
                    });
                }
            }
        }).end();
    };
})(document, jQuery);
// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm

function ssc_init() {
    if (!document.body) return;var e = document.body;var t = document.documentElement;var n = window.innerHeight;var r = e.scrollHeight;ssc_root = document.compatMode.indexOf("CSS") >= 0 ? t : e;ssc_activeElement = e;ssc_initdone = true;if (top != self) {
        ssc_frame = true;
    } else if (r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
        ssc_root.style.height = "auto";if (ssc_root.offsetHeight <= n) {
            var i = document.createElement("div");i.style.clear = "both";e.appendChild(i);
        }
    }if (!ssc_fixedback) {
        e.style.backgroundAttachment = "scroll";t.style.backgroundAttachment = "scroll";
    }if (ssc_keyboardsupport) {
        ssc_addEvent("keydown", ssc_keydown);
    }
}function ssc_scrollArray(e, t, n, r) {
    r || (r = 1e3);ssc_directionCheck(t, n);ssc_que.push({ x: t, y: n, lastX: t < 0 ? .99 : -.99, lastY: n < 0 ? .99 : -.99, start: +new Date() });if (ssc_pending) {
        return;
    }var i = function i() {
        var s = +new Date();var o = 0;var u = 0;for (var a = 0; a < ssc_que.length; a++) {
            var f = ssc_que[a];var l = s - f.start;var c = l >= ssc_animtime;var h = c ? 1 : l / ssc_animtime;if (ssc_pulseAlgorithm) {
                h = ssc_pulse(h);
            }var p = f.x * h - f.lastX >> 0;var d = f.y * h - f.lastY >> 0;o += p;u += d;f.lastX += p;f.lastY += d;if (c) {
                ssc_que.splice(a, 1);a--;
            }
        }if (t) {
            var v = e.scrollLeft;e.scrollLeft += o;if (o && e.scrollLeft === v) {
                t = 0;
            }
        }if (n) {
            var m = e.scrollTop;e.scrollTop += u;if (u && e.scrollTop === m) {
                n = 0;
            }
        }if (!t && !n) {
            ssc_que = [];
        }if (ssc_que.length) {
            setTimeout(i, r / ssc_framerate + 1);
        } else {
            ssc_pending = false;
        }
    };setTimeout(i, 0);ssc_pending = true;
}function ssc_wheel(e) {
    if (!ssc_initdone) {
        ssc_init();
    }var t = e.target;var n = ssc_overflowingAncestor(t);if (!n || e.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(t, "embed") && /\.pdf/i.test(t.src)) {
        return true;
    }var r = e.wheelDeltaX || 0;var i = e.wheelDeltaY || 0;if (!r && !i) {
        i = e.wheelDelta || 0;
    }if (Math.abs(r) > 1.2) {
        r *= ssc_stepsize / 120;
    }if (Math.abs(i) > 1.2) {
        i *= ssc_stepsize / 120;
    }ssc_scrollArray(n, -r, -i);e.preventDefault();
}function ssc_keydown(e) {
    var t = e.target;var n = e.ctrlKey || e.altKey || e.metaKey;if (/input|textarea|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) {
        return true;
    }if (ssc_isNodeName(t, "button") && e.keyCode === ssc_key.spacebar) {
        return true;
    }var r,
        i = 0,
        s = 0;var o = ssc_overflowingAncestor(ssc_activeElement);var u = o.clientHeight;if (o == document.body) {
        u = window.innerHeight;
    }switch (e.keyCode) {case ssc_key.up:
            s = -ssc_arrowscroll;break;case ssc_key.down:
            s = ssc_arrowscroll;break;case ssc_key.spacebar:
            r = e.shiftKey ? 1 : -1;s = -r * u * .9;break;case ssc_key.pageup:
            s = -u * .9;break;case ssc_key.pagedown:
            s = u * .9;break;case ssc_key.home:
            s = -o.scrollTop;break;case ssc_key.end:
            var a = o.scrollHeight - o.scrollTop - u;s = a > 0 ? a + 10 : 0;break;case ssc_key.left:
            i = -ssc_arrowscroll;break;case ssc_key.right:
            i = ssc_arrowscroll;break;default:
            return true;}ssc_scrollArray(o, i, s);e.preventDefault();
}function ssc_mousedown(e) {
    ssc_activeElement = e.target;
}function ssc_setCache(e, t) {
    for (var n = e.length; n--;) {
        ssc_cache[ssc_uniqueID(e[n])] = t;
    }return t;
}function ssc_overflowingAncestor(e) {
    var t = [];var n = ssc_root.scrollHeight;do {
        var r = ssc_cache[ssc_uniqueID(e)];if (r) {
            return ssc_setCache(t, r);
        }t.push(e);if (n === e.scrollHeight) {
            if (!ssc_frame || ssc_root.clientHeight + 10 < n) {
                return ssc_setCache(t, document.body);
            }
        } else if (e.clientHeight + 10 < e.scrollHeight) {
            overflow = getComputedStyle(e, "").getPropertyValue("overflow");if (overflow === "scroll" || overflow === "auto") {
                return ssc_setCache(t, e);
            }
        }
    } while (e = e.parentNode);
}function ssc_addEvent(e, t, n) {
    window.addEventListener(e, t, n || false);
}function ssc_removeEvent(e, t, n) {
    window.removeEventListener(e, t, n || false);
}function ssc_isNodeName(e, t) {
    return e.nodeName.toLowerCase() === t.toLowerCase();
}function ssc_directionCheck(e, t) {
    e = e > 0 ? 1 : -1;t = t > 0 ? 1 : -1;if (ssc_direction.x !== e || ssc_direction.y !== t) {
        ssc_direction.x = e;ssc_direction.y = t;ssc_que = [];
    }
}function ssc_pulse_(e) {
    var t, n, r;e = e * ssc_pulseScale;if (e < 1) {
        t = e - (1 - Math.exp(-e));
    } else {
        n = Math.exp(-1);e -= 1;r = 1 - Math.exp(-e);t = n + r * (1 - n);
    }return t * ssc_pulseNormalize;
}function ssc_pulse(e) {
    if (e >= 1) return 1;if (e <= 0) return 0;if (ssc_pulseNormalize == 1) {
        ssc_pulseNormalize /= ssc_pulse_(1);
    }return ssc_pulse_(e);
}var ssc_framerate = 150;var ssc_animtime = 500;var ssc_stepsize = 150;var ssc_pulseAlgorithm = true;var ssc_pulseScale = 6;var ssc_pulseNormalize = 1;var ssc_keyboardsupport = true;var ssc_arrowscroll = 50;var ssc_frame = false;var ssc_direction = { x: 0, y: 0 };var ssc_initdone = false;var ssc_fixedback = true;var ssc_root = document.documentElement;var ssc_activeElement;var ssc_key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 };var ssc_que = [];var ssc_pending = false;var ssc_cache = {};setInterval(function () {
    ssc_cache = {};
}, 10 * 1e3);var ssc_uniqueID = function () {
    var e = 0;return function (t) {
        return t.ssc_uniqueID || (t.ssc_uniqueID = e++);
    };
}();var ischrome = /chrome/.test(navigator.userAgent.toLowerCase());if (ischrome) {
    ssc_addEvent("mousedown", ssc_mousedown);ssc_addEvent("mousewheel", ssc_wheel);ssc_addEvent("load", ssc_init);
}
'use strict';

// Cache
var body = $('body');
var mainSlider = $('#main-slider');
var imageCarousel = $('.img-carousel');
var imageCarouselSize = $('.img-carousel > .item').size();
var partnersCarousel = $('#partners');
var testimonialsCarousel = $('#testimonials');
var topProductsCarousel = $('#top-products-carousel');
var featuredProductsCarousel = $('#featured-products-carousel');
var sidebarProductsCarousel = $('#sidebar-products-carousel');
var hotDealsCarousel = $('#hot-deals-carousel');
var owlCarouselSelector = $('.owl-carousel');
var isotopeContainer = $('.isotope');
var isotopeFiltrable = $('#filtrable a');
var toTop = $('#to-top');
var hover = $('.thumbnail');
var navigation = $('.navigation');
var superfishMenu = $('ul.sf-menu');
var priceSliderRange = $('#slider-range');

// Slide in/out with fade animation function
jQuery.fn.slideFadeToggle = function (speed, easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, speed, easing, callback);
};
//
jQuery.fn.slideFadeIn = function (speed, easing, callback) {
    return this.animate({ opacity: 'show', height: 'show' }, speed, easing, callback);
};
jQuery.fn.slideFadeOut = function (speed, easing, callback) {
    return this.animate({ opacity: 'hide', height: 'hide' }, speed, easing, callback);
};

jQuery(document).ready(function () {
    // Prevent empty links
    // ---------------------------------------------------------------------------------------
    $('a[href=#]').click(function (event) {
        event.preventDefault();
    });
    // Sticky header/menu
    // ---------------------------------------------------------------------------------------
    if ($().sticky) {
        $('.header.fixed').sticky({ topSpacing: 0 });
        //$('.header.fixed').on('sticky-start', function() { console.log("Started"); });
        //$('.header.fixed').on('sticky-end', function() { console.log("Ended"); });
    }
    // SuperFish menu
    // ---------------------------------------------------------------------------------------
    if ($().superfish) {
        superfishMenu.superfish();
    }
    $('ul.sf-menu a').click(function () {
        body.scrollspy('refresh');
    });
    // Fixed menu toggle
    $('.menu-toggle').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });
    $('.menu-toggle-close').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });
    // Smooth scrolling
    // ----------------------------------------------------------------------------------------
    $('.sf-menu a, .scroll-to').click(function () {
        $('.sf-menu a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, {
            duration: 1200,
            easing: 'easeInOutExpo'
        });
        return false;
    });
    // BootstrapSelect
    // ---------------------------------------------------------------------------------------
    if ($().selectpicker) {
        $('.selectpicker').selectpicker();
    }
    // prettyPhoto
    // ---------------------------------------------------------------------------------------
    if ($().prettyPhoto) {
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            theme: 'dark_square'
        });
    }
    // Scroll totop button
    // ---------------------------------------------------------------------------------------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            toTop.css({ bottom: '15px' });
        } else {
            toTop.css({ bottom: '-100px' });
        }
    });
    toTop.click(function () {
        $('html, body').animate({ scrollTop: '0px' }, 800);
        return false;
    });
    // Add hover class for correct view on mobile devices
    // ---------------------------------------------------------------------------------------
    hover.hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });
    // Sliders
    // ---------------------------------------------------------------------------------------
    if ($().owlCarousel) {
        var owl = $('.owl-carousel');
        owl.on('changed.owl.carousel', function (e) {
            // update prettyPhoto
            if ($().prettyPhoto) {
                $("a[data-gal^='prettyPhoto']").prettyPhoto({
                    theme: 'dark_square'
                });
            }
        });
        // Main slider
        if (mainSlider.length) {
            mainSlider.owlCarousel({
                //items: 1,
                rtl: true,
                autoplay: false,
                autoplayHoverPause: true,
                loop: true,
                margin: 0,
                dots: true,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsiveRefreshRate: 100,
                responsive: {
                    0: { items: 1 },
                    479: { items: 1 },
                    768: { items: 1 },
                    991: { items: 1 },
                    1024: { items: 1 }
                }
            });
        }
        // Top products carousel
        if (topProductsCarousel.length) {
            topProductsCarousel.owlCarousel({
                rtl: true,
                autoplay: false,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: { items: 1 },
                    479: { items: 2 },
                    768: { items: 3 },
                    991: { items: 4 },
                    1024: { items: 5 },
                    1280: { items: 6 }
                }
            });
        }
        // Featured products carousel
        if (featuredProductsCarousel.length) {
            featuredProductsCarousel.owlCarousel({
                rtl: true,
                autoplay: false,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: { items: 1 },
                    479: { items: 1 },
                    768: { items: 2 },
                    991: { items: 3 },
                    1024: { items: 4 }
                }
            });
        }
        // Sidebar products carousel
        if (sidebarProductsCarousel.length) {
            sidebarProductsCarousel.owlCarousel({
                rtl: true,
                autoplay: false,
                loop: true,
                margin: 30,
                dots: true,
                nav: false,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: { items: 1 },
                    479: { items: 1 },
                    768: { items: 1 },
                    991: { items: 1 },
                    1024: { items: 1 }
                }
            });
        }
        // Partners carousel
        if (partnersCarousel.length) {
            partnersCarousel.owlCarousel({
                rtl: true,
                autoplay: false,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: { items: 1 },
                    479: { items: 2 },
                    768: { items: 3 },
                    991: { items: 4 },
                    1024: { items: 5 },
                    1280: { items: 6 }
                }
            });
        }
        // Testimonials carousel
        if (testimonialsCarousel.length) {
            testimonialsCarousel.owlCarousel({
                rtl: true,
                autoplay: true,
                loop: true,
                margin: 0,
                dots: true,
                nav: false,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: { items: 1 },
                    479: { items: 1 },
                    768: { items: 1 },
                    991: { items: 1 },
                    1024: { items: 1 },
                    1280: { items: 1 }
                }
            });
        }
        // Images carousel
        if (imageCarousel.length) {
            imageCarousel.owlCarousel({
                rtl: true,
                autoplay: false,
                loop: imageCarouselSize > 1 ? true : false,
                margin: 0,
                dots: true,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsiveRefreshRate: 100,
                responsive: {
                    0: { items: 1 },
                    479: { items: 1 },
                    768: { items: 1 },
                    991: { items: 1 },
                    1024: { items: 1 }
                }
            });
        }
    }
    // countdown
    // ---------------------------------------------------------------------------------------
    if ($().countdown) {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#dealCountdown1').countdown({ until: austDay });
        $('#dealCountdown2').countdown({ until: austDay });
        $('#dealCountdown3').countdown({ until: austDay });
    }
    // Google map
    // ---------------------------------------------------------------------------------------
    if ((typeof google === "undefined" ? "undefined" : _typeof(google)) === 'object' && _typeof(google.maps) === 'object') {
        if ($('#map-canvas').length) {
            var map;
            var marker;
            var image = 'assets/img/icon-google-map.png'; // marker icon
            google.maps.event.addDomListener(window, 'load', function () {
                var mapOptions = {
                    scrollwheel: false,
                    zoom: 12,
                    center: new google.maps.LatLng(40.9807648, 28.9866516) // map coordinates
                };

                map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(41.0096559, 28.9755535), // marker coordinates
                    map: map,
                    icon: image,
                    title: 'Hello World!'
                });
            });
        }
    }
    // Price range / need jquery ui
    // ---------------------------------------------------------------------------------------
    if ($.ui) {
        if ($(priceSliderRange).length) {
            $(priceSliderRange).slider({
                range: true,
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function slide(event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
        }
    }
    // Shop categories widget slide in/out
    // ---------------------------------------------------------------------------------------
    $('.shop-categories .arrow').click(function () {

        $(this).parent().parent().find('ul.children').removeClass('active');
        $(this).parent().parent().find('.fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-up');
        if ($(this).parent().find('ul.children').is(":visible")) {
            //$(this).find('.fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-up');
            //$(this).parent().find('ul.children').removeClass('active');
        } else {
            $(this).find('.fa-angle-down').addClass('fa-angle-up').removeClass('fa-angle-down');
            $(this).parent().find('ul.children').addClass('active');
        }
        $(this).parent().parent().find('ul.children').each(function () {
            if (!$(this).hasClass('active')) {
                $(this).slideFadeOut();
            } else {
                $(this).slideFadeIn();
            }
        });
    });
    $('.shop-categories ul.children').each(function () {
        if (!$(this).hasClass('active')) {
            $(this).hide();
        }
    });
});

jQuery(window).load(function () {
    // Preloader
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut(200);
    // Isotope
    if ($().isotope) {
        isotopeContainer.isotope({ // initialize isotope
            itemSelector: '.isotope-item' // options...
            //,transitionDuration: 0 // disable transition
        });
        isotopeFiltrable.click(function () {
            // filter items when filter link is clicked
            var selector = $(this).attr('data-filter');
            isotopeFiltrable.parent().removeClass('current');
            $(this).parent().addClass('current');
            isotopeContainer.isotope({ filter: selector });
            return false;
        });
        isotopeContainer.isotope('reLayout'); // layout/reLayout
    }
    // Scroll to hash
    if (location.hash != '') {
        var hash = '#' + window.location.hash.substr(1);
        if (hash.length) {
            body.delay(0).animate({
                scrollTop: jQuery(hash).offset().top
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
        }
    }
    // OwlSliders
    if ($().owlCarousel) {
        // Hot deal carousel
        // must initialized after counters
        if (hotDealsCarousel.length) {
            hotDealsCarousel.owlCarousel({
                rtl: true,
                autoplay: false,
                loop: true,
                margin: 30,
                dots: true,
                nav: false,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: { items: 1 },
                    479: { items: 1 },
                    768: { items: 1 },
                    991: { items: 1 },
                    1024: { items: 1 }
                }
            });
        }
    }
    // Refresh owl carousels/sliders
    owlCarouselSelector.trigger('refresh');
    owlCarouselSelector.trigger('refresh.owl.carousel');
});

jQuery(window).resize(function () {
    // Refresh owl carousels/sliders
    owlCarouselSelector.trigger('refresh');
    owlCarouselSelector.trigger('refresh.owl.carousel');
    // Refresh isotope
    if ($().isotope) {
        isotopeContainer.isotope('reLayout'); // layout/relayout on window resize
    }
    if ($().sticky) {
        $('.header.fixed').sticky('update');
    }
});

jQuery(window).scroll(function () {
    // Refresh owl carousels/sliders
    owlCarouselSelector.trigger('refresh');
    owlCarouselSelector.trigger('refresh.owl.carousel');
    if ($().sticky) {
        $('.header.fixed').sticky('update');
    }
});
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
"use strict";
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
})(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
        } catch (e) {
            return;
        }

        try {
            // If we can't parse the cookie, ignore it, it's unusable.
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write
        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            return document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };
});

$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    // Fix Carousal click
    $('.owl-item img').on('click', function () {
        $('.owl-item li').removeClass('active');
        $(this).addClass('active');
    });

    var language = $('#language').val();
    var name = 'name_' + language;
    console.log('the language is :', language);
    // $(document).on('show.bs.modal', function(event) {
    //     $('.old-price-ql').show();
    //     var product = $(event.relatedTarget) // Button that triggered the modal
    //     $('.old-price-ql').html(product.data('price'));
    //     $('.new-price-ql').html(product.data('saleprice'));
    //     $('.product-heading').html(product.data('name'));
    //     $('.view-details').attr('href', product.data('link'));
    //     $('.product-image').attr('src', product.data('image'));
    //     $('.quick-desc').html(product.data('description'));
    //
    //     // hide the on sale node if the product is not on sale
    //     if (product.data('price') == product.data('saleprice')) {
    //         $('.old-price-ql').hide();
    //     }
    // });
    // when the color changes .. fetch all sizes related according to the product attribute.
    $('#color').on('change', function (e) {
        var product_id = $('#product_id').val();
        var color_id = e.target.value;
        console.log('productid', product_id);
        console.log('color id', color_id);
        $('#size').html('<option value="">select size</option>');
        return axios.get('/api/size', { params: { product_id: product_id, color_id: color_id } }).then(function (r) {
            return r.data.map(function (s) {
                console.log('the size', "" + s.size[name]);
                return $('#size').append("<option value=\"" + s.size.id + "\">" + s.size[name] + "</option>");
            });
        }).catch(function (e) {
            return console.log(e);
        });
    });
    // when the size changes .. should fetch the qty of the current attribute and inject it in max qty.
    $('#size').on('change', function (e) {
        console.log('the size id ', e.target.value);
        var size_id = e.target.value;
        var color_id = $('#color').val();
        var product_id = $('#product_id').val();
        return axios.get('/api/qty', {
            params: {
                product_id: product_id,
                color_id: color_id,
                size_id: size_id
            }
        }).then(function (r) {
            $('#qty').attr('maxlength', r.data);
            $('#qty').attr('value', 0);
        }).catch(function (e) {
            return console.log(e);
        });
    });
    $('.qty-increase').on('click', function (e) {
        var max = parseInt($('#qty').attr('maxlength') - 1);
        var currentyQty = parseInt($('#qty').attr('value'));
        var qty = parseInt(currentyQty <= max ? currentyQty + 1 : 1);
        $('#qty').attr('value', qty);
    });

    $('.qty-decrease').on('click', function (e) {
        var currentyQty = parseInt($('#qty').attr('value'));
        var qty = currentyQty > 0 ? currentyQty - 1 : currentyQty;
        $('#qty').attr('value', qty);
    });
    // was a stupid bug in the original theme related to product gallery in product.show
    $('.nav-tabs').on('click', function () {
        $('.tab-pane').removeClass('show');
    });
});
$(document).ready(function () {
    $('*[class^="productCarousel"]').owlCarousel({
        rtl: true,
        autoplay: false,
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: { items: 1 },
            479: { items: 1 },
            768: { items: 2 },
            991: { items: 3 },
            1024: { items: 4 }
        }
    });

    $('#main-slider-ar').owlCarousel({
        //items: 1,
        rtl: true,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        margin: 0,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveRefreshRate: 100,
        responsive: {
            0: { items: 1 },
            479: { items: 1 },
            768: { items: 1 },
            991: { items: 1 },
            1024: { items: 1 }
        }
    });
});
$(document).ready(function () {
    var grandTotal = $('.grandTotal').attr('value');
    console.log('grandTotal', grandTotal);
    $('.grossTotal').attr('value', grandTotal);
    $('#grossTotal').html(grandTotal);
    $('#forward').attr('disabled', 'disabled');
    $('#shipment_package').on('change', function (e) {
        var shipmentPackageId = e.target.value;
        var charge = $(this).find(':selected').data("charge");
        var is_local = $(this).find(':selected').data("is_local");
        $('#branch').html('').addClass('hidden');
        $('.branches').addClass('hidden');
        $('#branch_address').html('').addClass('hidden');
        $('#free_shipment').addClass('hidden').attr('checked', false);
        $('.free_shipment').addClass('hidden');
        if (is_local) {
            $('#free_shipment').toggleClass('hidden');
            $('.free_shipment').toggleClass('hidden');
            $('#free_shipment').click(function () {
                if ($(this).is(':checked')) {
                    $('.branches').toggleClass('hidden');
                    $('#branch').toggleClass('hidden');
                    $('#branch_address').toggleClass('hidden');
                    axios.get('/api/branch').then(function (r) {
                        return r.data.map(function (v) {
                            $('#branch').append("<option value=\"" + v.id + "\">" + v.name + "</option>");
                        });
                    }).catch(function (e) {
                        return console.log(e);
                    });
                    var grandTotal = $('.grandTotal').attr('value');
                    $('#chargeVal').html('0');
                    $('.grossTotal').attr('value', grandTotal);
                    $('.grandTotal').attr('value', grandTotal);
                    $('#grossTotal').html("<p>" + grandTotal + "</p>");
                    $('#forward').removeAttr('disabled');
                } else {
                    $('.branches').toggleClass('hidden');
                    $('#branch').toggleClass('hidden');
                    $('#branch_address').toggleClass('hidden');
                    $('.charge').attr('value', charge);
                    $('#chargeVal').html(charge);
                    var grandTotal = $('.grandTotal').attr('value');
                    var grossTotal = parseFloat(grandTotal) + parseFloat(charge);
                    $('.grossTotal').attr('value', grossTotal);
                    $('.grandTotal').attr('value', grandTotal);
                    $('#grossTotal').html("<p>" + grossTotal + "</p>");
                    $('#forward').removeAttr('disabled');
                }
            });
            $('.charge').attr('value', charge);
            $('#chargeVal').html(parseFloat(!isNaN(charge) ? charge : 0));
            var grandTotal = $('.grandTotal').attr('value');
            var grossTotal = parseFloat(grandTotal) + parseFloat(charge);
            $('.grossTotal').attr('value', grossTotal);
            $('.grandTotal').attr('value', grandTotal);
            $('#grossTotal').html("" + grossTotal);
            $('#forward').removeAttr('disabled');
        } else {
            $('.charge').attr('value', charge);
            var grandTotal = $('.grandTotal').attr('value');
            console.log('isnull', isNaN(charge));
            $('#chargeVal').html(parseFloat(!isNaN(charge) ? charge : 0));
            var grossTotal = parseFloat(grandTotal) + parseFloat(!isNaN(charge) ? charge : 0);
            $('.grossTotal').attr('value', grossTotal);
            $('.grandTotal').attr('value', grandTotal);
            $('#grossTotal').html("" + grossTotal);
            $('#forward').removeAttr('disabled');
        }
        console.log('charge', charge);
        console.log('grossTotal', grossTotal);
        console.log('grandTotal', grandTotal);
    });
    $('#branch').on('change', function (e) {
        $('#branch_address').html('');
        var branchAddress = $(this).find(':selected').data('address');
        $(this).append("<p>" + branchAddress + "</p>");
    });
});