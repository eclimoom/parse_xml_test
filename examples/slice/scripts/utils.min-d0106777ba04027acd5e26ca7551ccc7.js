(function () {
    function h(a) {
        return document.getElementById(a)
    }

    function q(a, b) {
        return a.classList.contains(b)
    }

    function d(a, b) {
        a.classList.add(b)
    }

    function e(a, b) {
        a.classList.remove(b)
    }

    function r(a) {
        var b = document.querySelector(".modal.active"), c = "string" === typeof a ? h(a) : a;
        b ? (document.activeElement.blur(), d(b, "notransition"), e(b, "active"), d(c, "notransition"), d(c, "active"), n("MODAL_OPEN", null), setTimeout(function () {
            e(b, "notransition");
            e(c, "notransition")
        }, 500)) : (d(document.documentElement, "modal-active"),
            d(c, "active"))
    }

    function t(a) {
        a = "string" === typeof a ? h(a) : a;
        document.activeElement.blur();
        e(a, "active");
        e(document.documentElement, "modal-active");
        n("MODAL_CLOSE", a.id)
    }

    function A(a, b) {
        var c = document.createEvent("Events");
        c.initEvent(a, !0, !0);
        c.data = b;
        return c
    }

    function l(a) {
        var b = arguments, c, u;
        var d = 1;
        for (u = b.length; d < u; d += 2) {
            var g = b[d].split(/\s/);
            for (c = g.length; c--;) b[0].addEventListener(g[c], b[d + 1])
        }
    }

    function v(a, b, c) {
        b = b.split(/\s/);
        for (var d = b.length; d--;) a.removeEventListener(b[d], c, !1)
    }

    function n(a,
               b) {
        window.dispatchEvent(A(a, b))
    }

    function B(a) {
        var b, c = [];
        for (b in a) c[c.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a[b]);
        return c.join("&").replace("%20", "+")
    }

    function w(a) {
        return function (b) {
            b.stopPropagation();
            b.preventDefault();
            !0 !== b.handled && (a(b), b.handled = !0)
        }
    }

    function p() {
        k && (e(k, x), v(window, "mousedown", y), k = null, m && (m(), m = null))
    }

    function y(a) {
        for (a = a.target; a;) {
            if (a == k || a == z) return;
            a = a.parentNode
        }
        p()
    }

    var k = null, z = null, x = "", m = null;
    window.utils = {
        gid: h, hasClass: q, addClass: d, removeClass: e,
        addRemoveClass: function (a, b, c) {
            c ? d(a, b) : e(a, b)
        }, toggleClass: function (a, b) {
            a.classList.toggle(b)
        }, getDataAttribute: function (a, b) {
            var c;
            a && a.correspondingUseElement && (a = a.correspondingUseElement);
            for (; a && a.getAttribute;) {
                if (c = a.getAttribute(b)) return c;
                a = a.parentNode
            }
            return null
        }, getElementWithAttribute: function (a, b) {
            for (var c; a && a.getAttribute;) {
                if (c = a.getAttribute(b)) return a;
                a = a.parentNode
            }
            return null
        }, elOffset: function (a) {
            a = a.getBoundingClientRect();
            return {
                left: Math.round(a.left) + window.pageXOffset,
                top: Math.round(a.top) + window.pageYOffset, width: a.width, height: a.height
            }
        }, makeSafe: function (a) {
            return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
        }, openModal: r, closeModal: t, openCloseModal: function (a, b) {
            b ? r(a) : t(a)
        }, assign: l, unassign: v, dispatch: n, assignFastClick: function (a, b) {
            a.addEventListener(window.PointerEvent ? "pointerdown" : "click", function (a) {
                b(a)
            })
        }, onready: function (a) {
            "complete" === document.readyState || "loading" !== document.readyState &&
            !document.documentElement.doScroll ? a() : l(document, "DOMContentLoaded", a)
        }, ajax: function (a, b, c, d, e, g) {
            var f = new XMLHttpRequest;
            f.open(a, b, !0);
            f.onreadystatechange = function () {
                if (4 == f.readyState) if (200 <= f.status && 300 > f.status) {
                    var a = JSON.parse(f.responseText);
                    d(a)
                } else e(f.responseText)
            };
            c && (c = B(c), f.setRequestHeader("Content-type", "application/x-www-form-urlencoded"));
            if (g && g.headers) for (a = 0, b = g.headers.length; a < b; a++) f.setRequestHeader(g.headers[a][0], g.headers[a][1]);
            f.send(c)
        }, prettyTime: function (a,
                                 b) {
            if (0 >= a) return "0:00";
            var c = Math.floor(a % 60) + "";
            c = Math.floor(a / 60) + ":" + (1 === c.length ? "0" + c : c);
            b && (a = (a % 1 + "").substring(2, 4), c += "." + (0 === a.length ? "00" : 1 === a.length ? "0" + a : a.substring(0, 2)));
            return c
        }, singleEvent: w, singleEventWithoutPreventDefault: function (a) {
            return function (b) {
                !0 !== b.handled && (a(b), b.handled = !0)
            }
        }, makeMenu: function (a, b, c, e, h) {
            l(a, "mousedown touchstart", w(function (g) {
                q(b, c) ? p() : (p(), d(b, c), k = b, z = a, x = c, m = h, e && e(), l(window, "mousedown", y))
            }))
        }
    }
})();
