'use strict';

function g(a, b) {
    var c;
    for (a && a.correspondingUseElement && (a = a.correspondingUseElement); a && a.getAttribute;) {
        if (c = a.getAttribute(b)) return c;
        a = a.parentNode
    }
    return null
}

function h(a) {
    var b = arguments, c, e;
    var f = 1;
    for (e = b.length; f < e; f += 2) {
        var d = b[f].split(/\s/);
        for (c = d.length; c--;) b[0].addEventListener(d[c], b[f + 1])
    }
}

function k(a) {
    return function (b) {
        b.stopPropagation();
        b.preventDefault();
        !0 !== b.j && (a(b), b.j = !0)
    }
}

function l(a) {
    var b, c = [];
    for (b in a) c[c.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a[b]);
    return c.join("&").replace("%20", "+")
}

function m(a, b, c, e) {
    var f = n, d = new XMLHttpRequest, q = null;
    d.open(a, b, !0);
    d.onreadystatechange = function () {
        if (4 == d.readyState) if (200 <= d.status && 300 > d.status) {
            var a = JSON.parse(d.responseText);
            e(a)
        } else f(d.responseText)
    };
    c && (q = l(c), d.setRequestHeader("Content-type", "application/x-www-form-urlencoded"));
    d.send(q)
}

var p = null, r = null, t = "", u = null;

function v() {
    if (p) {
        p.classList.remove(t);
        p.removeEventListener(window.PointerEvent ? "pointerdown" : "click", v);
        for (var a = window, b = w, c = "mousedown".split(/\s/), e = c.length; e--;) a.removeEventListener(c[e], b, !1);
        p = null;
        u && (u(), u = null)
    }
}

function w(a) {
    for (a = a.target; a;) {
        if (a == p || a == r) return;
        a = a.parentNode
    }
    v()
}

function x(a, b) {
    h(a, "mousedown touchstart", k(function () {
        b.classList.contains("active") ? v() : (v(), b.classList.add("active"), p = b, t = "active", u = null, h(window, "mousedown", w), r = a)
    }))
};

function n() {
}

class y extends HTMLElement {
    static get observedAttributes() {
        return ["slice"]
    }

    constructor() {
        super();
        this.b = "";
        this.a = 0;
        this.c = {};
        this.appendChild(document.getElementById("slice-practice-lists").content.cloneNode(!0))
    }

    connectedCallback() {
        var a = this.getAttribute("slice");
        a && this.f(a)
    }

    attributeChangedCallback(a, b, c) {
        "slice" === a && c && this.f(c)
    }

    f(a) {
        if (!this.b) {
            this.b = a;
            var b = this.firstElementChild;
            a = b.querySelectorAll(".editbar-button")[0];
            b = b.querySelectorAll(".ui-tooltip")[0];
            var c = b.firstElementChild;
            a &&
            this.getAttribute("user") && (x(a, b), m("GET", `/api/v1/slices/${this.b}/practice-lists/`, null, (a) => {
                this.a = a.in_count;
                this.c = a.lists;
                c.innerHTML = a.html;
                this.g();
                a = c.querySelectorAll("button");
                for (var b = a.length; b--;) h(a[b], "click", (a) => {
                    this.i(a)
                })
            }))
        }
    }

    g() {
        var a = this.firstElementChild.querySelectorAll(".plisticon")[0];
        this.a ? a.classList.add("bookmarked") : a.classList.remove("bookmarked")
    }

    i(a) {
        var b = a.target;
        a = g(b, "data-listhash");
        b = "1" === g(b, "data-editable");
        var c = !this.c[a];
        a && b && this.h(a, c)
    }

    h(a, b) {
        var c =
            this.b;
        b ? (this.a++, m("POST", `/api/v1/practice-lists/${a}/slices/`, {slicehashes: c}, n)) : (this.a--, m("DELETE", `/api/v1/practice-lists/${a}/slices/${c}/`, null, n));
        this.c[a] = b;
        this.g();
        a = this.firstElementChild.querySelectorAll(`.pl_div${a}`)[0];
        b ? a.classList.add("checked") : a.classList.remove("checked")
    }
}

customElements.define("slice-practice-lists", y);
