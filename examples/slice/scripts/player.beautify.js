var ea = [];

function ha(a) {
    return function () {
        return ea[a].apply(this, arguments)
    }
}

const ia = {
    1: [[[29, 74, 1], [30, 83, 1], [31, 72], [33, 72, 1], [34, 72], [35, 64], [36, 65], [37, 72, 1], [38, 72], [39, 72], [40, 72], [41, 69], [42, 79, 1], [43, 67], [44, 62, 1], [45, 67], [46, 79, 0, 10], [47, 71], [48, 74], [49, 81], [50, 76], [51, 77, 1], [52, 83], [53, 77], [54, 72], [55, 81, 1], [56, 77], [57, 79], [58, 29], [59, 74, 1], [60, 84], [61, 89], [62, 45], [63, 53], [64, 48], [65, 62], [66, 60], [67, 59], [68, 57], [69, 38], [70, 98], [71, 107], [72, 96], [73, 12], [74, 14], [75, 43], [76, 95], [77, 93], [78, 28, 1], [79, 26], [80, 33, 1], [81, 31], [82, 117], [83, 112], [84, 108], [85, 41], [86, 16], [87, 17, 1], [91, 72], [92, 79, 0, 9], [93, 77, 1], [94, 77, 1], [95, 81, 1], [96, 83], [97, 81], [98, 79], [99, 76], [100, 76, 1], [101, 77, 1], [102, 79], [103, 79, 1], [104, 86], [105, 88, 1], [106, 91], [107, 105, 1], [108, 50, 1], [109, 52], [110, 55, 1], [111, 74], [112, 76], [113, 89, 1], [114, 35], [115, 47], [116, 36, 1], [117, 40], [118, 100], [119, 101], [120, 103], [122, 117], [123, 110], [126, 74, 1], [127, 74]], [[35, 64], [36, 65], [37, 72, 1], [38, 72, 0, 8], [40, 72], [42, 79], [43, 67], [44, 62], [45, 69], [46, 79, 0, 0, 1], [46, 79, 1, 0, 1], [47, 71], [48, 74], [49, 81], [50, 76], [51, 77], [52, 83], [53, 77, 0, 8]]],
    2: [[[42, 62], [38, 64], [42, 65]], [[42, 62], [38, 63], [38, 64], [42, 65]]]
}
    , ja = {
    1: "R",
    2: "L",
    3: "B"
}
    , ka = {
    28: [18],
    29: [15],
    30: [12],
    31: [9],
    32: [6],
    33: [3],
    34: [0],
    35: [],
    36: [19],
    37: [16],
    38: [10],
    39: [7],
    40: [4, 18],
    41: [1, 15],
    42: [12],
    43: [9],
    44: [6],
    45: [3],
    46: [0, 7],
    47: [4, 18],
    48: [1, 15],
    49: [12],
    50: [9],
    51: [6],
    52: [3, 18],
    53: [0, 15],
    54: [12],
    55: [9],
    56: [6, 10, 18],
    57: [3, 15],
    58: [0, 12],
    59: [9, 18],
    60: [6, 15],
    61: [3, 12],
    62: [0, 9, 18],
    63: [6, 15],
    64: [3, 12, 18],
    65: [0, 9, 15],
    66: [6, 12, 18],
    67: [3, 9, 15],
    68: [6, 12, 18],
    69: [3, 9, 15],
    70: [0, 6, 12, 18],
    71: [3, 9],
    72: [0, 6, 15],
    73: [3, 12, 18],
    74: [0, 9],
    75: [3, 6, 18],
    76: [3, 12, 15, 18],
    77: [0, 15, 18],
    78: [],
    79: []
}
    , ra = {
    0: [[], null, 0],
    1: [[5], 2, 4],
    2: [[5, 0], 2, 1],
    3: [[5, 0, 7], 2, 5],
    4: [[5, 0, 7, 2], 2, 2],
    5: [[5, 0, 7, 2, 9], 2, 6],
    6: [[5, 0, 7, 2, 9, 4], 2, 3],
    7: [[5, 0, 7, 2, 9, 4, 11], 2, 0],
    "-7": [[11, 4, 9, 2, 7, 0, 5], 3, 0],
    "-6": [[11, 4, 9, 2, 7, 0], 3, 4],
    "-5": [[11, 4, 9, 2, 7], 3, 1],
    "-4": [[11, 4, 9, 2], 3, 5],
    "-3": [[11, 4, 9], 3, 2],
    "-2": [[11, 4], 3, 6],
    "-1": [[11], 3, 3]
}
    , sa = {
    15: [57819, !1],
    22: [57819, !0],
    30: [57817, !1],
    45: [57817, !0],
    60: [57815, !1],
    90: [57815, !0],
    120: [57840, !1],
    180: [57840, !0],
    240: [57811, !1],
    360: [57811, !0],
    480: [57810, !1]
};
var ta = 1 / 3;
const ya = [0, -1, 1, -2, 2]
    ,
    Aa = [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"]
    , Ba = {
        5: 0,
        1: 2
    }
    , Da = [64, 59, 55, 50, 45, 40];

function t(a) {
    return document.getElementById(a)
}
function tt(a) {
    return document.getElementById(a)
}

function Ea(a, b) {
    return a.classList.contains(b)
}

function B(a, b) {
    a.classList.add(b)
}

function D(a, b) {
    a.classList.remove(b)
}

function E(a, b, c) {
    c ? B(a, b) : D(a, b)
}

function Ga(a, b) {
    a.classList.toggle(b)
}

function Ja(a, b, c) {
    for (var d = c.length; d--;)
        E(a, c[d], c[d] === b)
}

function Ka(a) {
    var b = document.documentElement;
    return getComputedStyle && getComputedStyle(b).getPropertyValue ? getComputedStyle(b).getPropertyValue(a) : ""
}

function Qa(a) {
    return a.parentNode.removeChild(a)
}

function Ra() {
    var a = document.activeElement.tagName;
    return "INPUT" === a || "TEXTAREA" === a
}

function Sa() {
    document.activeElement.blur()
}

function Ta(a, b) {
    var c;
    for (a && a.correspondingUseElement && (a = a.correspondingUseElement); a && a.getAttribute;) {
        if (c = a.getAttribute(b))
            return c;
        a = a.parentNode
    }
    return null
}

function Ua(a, b) {
    for (var c; a && a.getAttribute;) {
        if (c = a.getAttribute(b))
            return a;
        a = a.parentNode
    }
    return null
}

function Va(a) {
    a = a.getBoundingClientRect();
    return {
        left: Math.round(a.left) + window.pageXOffset,
        top: Math.round(a.top) + window.pageYOffset,
        width: a.width,
        height: a.height
    }
}

function Xa(a) {
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
}

function Ya(a, b) {
    var c = document.createElement("script");
    null !== b && (c.onload = b);
    c.setAttribute("crossorigin", "anonymous");
    c.src = a;
    document.head.appendChild(c)
}

function ib(a) {
    "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? a() : I(document, "DOMContentLoaded", a)
}

function lb(a, b) {
    a.style.left = b + "px"
}

function mb(a, b) {
    a.style.width = b + "px"
}

function Db(a, b) {
    a.style.height = b + "px"
}

function Mb(a, b) {
    a.style.display = b
}

function Nb() {
    var a = window.location.search || ""
        , b = {};
    "?" === a.charAt(0) && (a = a.substring(1));
    if (!a)
        return b;
    a = a.replace(/\+/g, " ");
    a = a.split(/&/g);
    var c;
    var d = 0;
    for (c = a.length; d !== c; d++) {
        var e = a[d].split("=");
        var f = decodeURIComponent(e[0]);
        e = 1 < e.length ? decodeURIComponent(e[1]) : "";
        b[f] = e
    }
    return b
}

function Ub(a, b) {
    if (0 >= a)
        return "0:00";
    var c = Math.floor(a % 60) + "";
    c = Math.floor(a / 60) + ":" + (1 === c.length ? "0" + c : c);
    b && (a = (a % 1 + "").substring(2, 4),
        c += "." + (0 === a.length ? "00" : 1 === a.length ? "0" + a : a.substring(0, 2)));
    return c
}

function Vb() {
    var a = new Date;
    return `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
}

function Zb(a, b) {
    var c = a.length
        , d = c;
    if (c !== b.length)
        return !1;
    for (; d--;)
        if (a[d] !== b[d])
            return !1;
    return !0
}

function dc(a, b) {
    for (var c = a.length; c--;)
        if (a[c] === b)
            return !0;
    return !1
}

function ec(a, b) {
    b.length && (b.length = 0);
    for (var c = 0, d = a.length; c !== d; c++)
        a[c] instanceof Array ? (b[c] = [],
            ec(a[c], b[c])) : b[c] = a[c]
}

function fc(a, b) {
    var c = a.length, d;
    for (d = 0; d !== c; d++)
        if (a[d] === b)
            return d;
    return -1
}

function I(a) {
    var b = arguments, c, d;
    var e = 1;
    for (d = b.length; e < d; e += 2) {
        var f = b[e].split(/\s/);
        for (c = f.length; c--;)
            b[0] && b[0].addEventListener(f[c], b[e + 1])
    }
}

function gc(a, b) {
    var c = window;
    a = a.split(/\s/);
    for (var d = a.length; d--;)
        c.removeEventListener(a[d], b, !1)
}

function nc(a, b) {
    var c = window
        , d = c.dispatchEvent
        , e = document.createEvent("Events");
    e.initEvent(a, !0, !0);
    e.data = b;
    d.call(c, e)
}

function J(a, b) {
    a.addEventListener(window.PointerEvent ? "pointerdown" : "click", c => {
            b(c)
        }
    )
}

function oc(a) {
    return function (b) {
        b.stopPropagation();
        b.preventDefault();
        !0 !== b.A && (a(b),
            b.A = !0)
    }
}

function qc(a) {
    var b, c = [];
    for (b in a)
        c[c.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a[b]);
    return c.join("&").replace("%20", "+")
}

function uc(a, b, c, d, e) {
    var f = new XMLHttpRequest
        , g = null;
    f.open(a, b, !0);
    f.onreadystatechange = function () {
        if (4 == f.readyState)
            if (200 <= f.status && 300 > f.status) {
                var h = JSON.parse(f.responseText);
                d(h)
            } else
                e(f.responseText)
    };
    c && (g = qc(c), f.setRequestHeader("Content-type", "application/x-www-form-urlencoded"));
    f.send(g);
}

var vc = null
    , wc = null
    , zc = ""
    , Ac = null;

function Bc() {
    vc && (D(vc, zc),
        vc.removeEventListener(window.PointerEvent ? "pointerdown" : "click", Bc),
        gc("mousedown", Kc),
        vc = null,
    Ac && (Ac(),
        Ac = null))
}

function Kc(a) {
    for (a = a.target; a;) {
        if (a == vc || a == wc)
            return;
        a = a.parentNode
    }
    Bc()
}

function $c(a, b, c, d) {
    Bc();
    B(a, "active");
    vc = a;
    zc = "active";
    Ac = c;
    d && J(a, Bc);
    b && b();
    I(window, "mousedown", Kc)
}

function ad(a, b, c, d, e) {
    I(a, "mousedown touchstart", oc(function () {
        Ea(b, "active") ? Bc() : ($c(b, c, d, e),
            wc = a)
    }))
}

function id(a, b, c, d, e, f) {
    var g, h, k, l, m, n;
    var p = q => {
            if (2 !== q.which && 3 !== q.which) {
                g = Va(b);
                q.targetTouches ? (n = q.targetTouches[0],
                    h = l = n.pageX - g.left,
                    k = m = n.pageY - g.top) : (h = l = q.pageX - g.left,
                    k = m = q.pageY - g.top);
                c(h, k, q);
                var r = v => {
                        v.preventDefault();
                        v.targetTouches && v.targetTouches[0] ? (n = v.targetTouches[0],
                            l = n.pageX - g.left,
                            m = n.pageY - g.top) : (l = v.pageX - g.left,
                            m = v.pageY - g.top);
                        d(l, m, v)
                    }
                    , u = () => {
                        gc("touchmove mousemove", r);
                        gc("touchend mouseup", u);
                        u = r = null;
                        e(l, m, h === l && k === m)
                    }
                ;
                I(window, "touchmove mousemove", r);
                I(window, "touchend mouseup", u)
            }
        }
    ;
    f && (p = oc(p));
    I(a, "touchstart mousedown", p)
}
;const kd = Math.PI;
var ld = [null, null, null, null, null, null, null, null, null, null, null, null];

function md(a) {
    return Math.sin(a / 180 * kd)
}

function nd(a, b, c, d, e, f, g, h, k) {
    f = f ? 1 : -1;
    if (b === d) {
        var l = c - a;
        c = a + l * e;
        d = b - f * g;
        var m = c;
        var n = b - f * h;
        var p = c;
        var q = b - f * k;
        h = a + l * (1 - e);
        g = d;
        a = h;
        b = n;
        e = h;
        k = q
    } else {
        l = md(90);
        var r = (d - b) / (c - a);
        0 > r && (f *= -1);
        var u = Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2));
        var v = 180 * Math.atan(r) / kd;
        var w = u * e;
        var y = a + w / l * md(90 - v);
        w = b + w / l * md(v);
        var x = 180 - 180 * Math.atan(-1 / r) / kd;
        m = y + -f * h / l * md(90 - x);
        n = w + f * h / l * md(x);
        c = y + -f * g / l * md(90 - x);
        d = w + f * g / l * md(x);
        p = y + -f * k / l * md(90 - x);
        q = w + f * k / l * md(x);
        w = u * (1 - e);
        y = a + w / l * md(90 - v);
        w = b + w / l * md(v);
        x = 180 - 180 * Math.atan(-1 / r) / kd;
        a = y + -f * h / l * md(90 - x);
        b = w + f * h / l * md(x);
        h = y + -f * g / l * md(90 - x);
        g = w + f * g / l * md(x);
        e = y + -f * k / l * md(90 - x);
        k = w + f * k / l * md(x)
    }
    ld[0] = m;
    ld[1] = n;
    ld[2] = a;
    ld[3] = b;
    ld[4] = c;
    ld[5] = d;
    ld[6] = h;
    ld[7] = g;
    ld[8] = p;
    ld[9] = q;
    ld[10] = e;
    ld[11] = k;
    return ld
}

var od = {};

function yd(a, b) {
    a.D.width = b * a.C;
    mb(a.D, b)
}

function Ed(a, b) {
    a.D.height = b * a.C;
    Db(a.D, b)
}

function Fd(a, b, c) {

        let fonts = [
            "fonts/2CDFA8_1_0-f013c61555aee95900727f890834f945.woff2",
            "fonts/2CDFA8_0_0-dd704242fc957c5c311f96fb3b9a1bf4.woff2",
            "fonts/2CDFA8_2_0-c2ac893f0bf35c631294741d02dad2b7.woff2",
            "fonts/regular-8970dfa7c444c9489c4319032f3159f8.woff2",
            "fonts/2F3AD3_8_0-e835dd5dc9e570f8f3982d53fb740851.woff2",
        "fonts/2F3AD3_3_0-83f070773e1ee1f3141f67725fea2eb9.woff2"]
    return fonts[5];
}

function Rd(a, b, c, d, e) {

    // Set the font style for a specific context 'a.A'
    a.A.font = '16.1296px ss-freight';
}


function K(a, b) {
    a.A.fillStyle = b
}

function Wd(a, b) {
    a.A.strokeStyle = b
}

function Xd(a, b) {
    return a.A.measureText(b).width / a.C
}

function Yd(a, b, c, d) {
    a.A.fillText(b, c * a.C, d * a.C)
}

function Zd(a, b, c, d, e) {
    var f = a.C;
    a.A.fillText(b, c * f, d * f, e * f)
}

function $d(a, b) {
    a.A.lineWidth = b * a.C
}

function ae(a) {
    a.A.beginPath()
}

function ie(a) {
    a.A.closePath()
}

function ke(a) {
    a.A.stroke()
}

function oe(a, b, c) {
    a.A.moveTo(b * a.C, c * a.C)
}

function pe(a, b, c) {
    a.A.lineTo(b * a.C, c * a.C)
}

function qe(a, b, c, d, e) {
    var f = a.C;
    a.A.quadraticCurveTo(b * f, c * f, d * f, e * f)
}

function re(a, b, c, d, e, f, g) {
    var h = a.C;
    a.A.bezierCurveTo(b * h, c * h, d * h, e * h, f * h, g * h)
}

function se(a, b, c, d, e) {
    var f = a.C;
    a.A.clearRect(b * f, c * f, d * f, e * f)
}

function M(a, b, c, d, e) {
    var f = a.C;
    a.A.fillRect(b * f, c * f, d * f, e * f)
}

function te(a, b, c, d, e) {
    var f = a.A;
    a = a.C;
    f.beginPath();
    f.arc(b * a, c * a, d * a, 0, 2 * kd, !1);
    f.fill();
    e && f.stroke();
    f.closePath()
}

function ue(a, b, c, d, e, f, g, h, k, l) {
    var m = a.A;
    m.beginPath();
    oe(a, b, c);
    pe(a, d, e);
    pe(a, f, g);
    pe(a, h, k);
    l ? m.fill() : (pe(a, b, c),
        m.stroke());
    m.closePath()
}

function ve(a, b, c, d, e, f, g, h, k, l) {
    var m = a.A;
    f = b + f;
    e = nd(b, c, f, d, e, g, h, k, l);
    $d(a, 1);
    m.beginPath();
    oe(a, b, c);
    re(a, e[0], e[1], e[2], e[3], f, d);
    m.stroke();
    m.beginPath();
    oe(a, b, c);
    re(a, e[4], e[5], e[6], e[7], f, d);
    re(a, e[10], e[11], e[8], e[9], b, c);
    m.fill();
    m.closePath()
}

class Ee {
    constructor(a, b) {
        var c = 0;
        this.D = a;
        this.A = a = a.getContext("2d");
        c || (c = (window.devicePixelRatio || 1) / (a.backingStorePixelRatio || a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1));
        this.C = c;
        this.F = b
    }

    fill() {
        this.A.fill()
    }
}
;

function Me(a) {
    var b = document.querySelector(".modal.active")
        , c = "string" === typeof a ? t(a) : a;
    b ? (document.activeElement.blur(),
        B(b, "notransition"),
        D(b, "active"),
        B(c, "notransition"),
        B(c, "active"),
        nc("MODAL_OPEN", null),
        setTimeout(() => {
                D(b, "notransition");
                D(c, "notransition")
            }
            , 500)) : (B(document.documentElement, "modal-active"),
        B(c, "active"))
}

function Ne(a) {
    a = "string" === typeof a ? t(a) : a;
    document.activeElement.blur();
    D(a, "active");
    D(document.documentElement, "modal-active");
    nc("MODAL_CLOSE", a.id)
}

function Oe() {
    return null !== document.querySelector(".modal.active")
}
;var Pe = {};

function Qe(a, b) {
    return b ? Qe(b, a % b) : a
}

function Re(a, b) {
    var c = Qe(a, b);
    1 !== c && (a /= c,
        b /= c);
    c = `${a}-${b}`;
    Pe[c] || (Pe[c] = new Se(a, b));
    return Pe[c]
}

function Te(a, b) {
    return a.Ba === b.Ba ? a.Ha > b.Ha : a.Ha * b.Ba > b.Ha * a.Ba
}

function Ue(a, b) {
    return a.Ba === b.Ba ? Re(a.Ha - b.Ha, a.Ba) : Re(a.Ha * b.Ba - b.Ha * a.Ba, a.Ba * b.Ba)
}

function Ve(a, b) {
    return Re(a.Ha * b.Ba, a.Ba * b.Ha)
}

function We(a, b) {
    return a.Ba === b.Ba ? a.Ha >= b.Ha : a.Ha * b.Ba >= b.Ha * a.Ba
}

function Xe(a, b) {
    return a.Ba === b.Ba ? 0 === a.Ha % b.Ha : 0 === a.Ha * b.Ba % (b.Ha * a.Ba)
}

function kf(a) {
    return `${a.Ha}/${a.Ba}`
}

class Se {
    constructor(a, b) {
        this.Ha = a;
        this.Ba = b;
        this.qa = a / b
    }

    add(a) {
        return this.Ba === a.Ba ? Re(this.Ha + a.Ha, this.Ba) : Re(this.Ha * a.Ba + a.Ha * this.Ba, this.Ba * a.Ba)
    }
}

const lf = Re(0, 4)
    , mf = Re(1, 1);

function nf(a, b, c) {
    var d = a.C.createEvent("Events");
    d.initEvent("ss" + b, !0, !0);
    d.data = c;
    a.A.dispatchEvent(d)
}

function of(a, b, c) {
    a.assign(b, c);
    c()
}

class pf {
    constructor(a) {
        this.C = a;
        this.A = a.createTextNode("")
    }

    assign(a) {
        var b = this.A, c = arguments, d, e;
        var f = 0;
        for (e = c.length; f < e; f += 2) {
            var g = c[f];
            for (d = g.length; d--;)
                b.addEventListener("ss" + g[d], c[f + 1])
        }
    }
}
;

function qf(a, b, c) {
    a.Ia !== c && (a.Ia = c,
        nf(b, 129, c))
}

function rf(a, b) {
    a.Da = 4;
    a.Ga = 4;
    a.I = !1;
    qf(a, b, "#EA6B24");
    a.ta = "255,255,255";
    a.N = "#FC5D2B";
    a.Ca = "193,165,217";
    a.Fa = "243,164,44";
    a.G = !0;
    a.ka = !1;
    a.va = !1;
    a.ja = !0;
    a.da = !0;
    a.F = !0;
    a.T = !1;
    a.W = 0;
    a.ya = !1;
    a.$ = 100;
    a.X = 1;
    a.ba = 2;
    a.S = !1;
    a.aa = !1;
    a.ma = 50;
    a.H = !0;
    a.D = null;
    a.P = !1;
    a.V = !1;
    a.Z = !1;
    a.Y = !0;
    a.C = 0;
    a.A = !1;
    a.wa = -1;
    a.xa = -1;
    a.M = !1;
    a.ia = 0
}

function sf(a) {
    return `rgb(${a.ta})`
}

class tf {
    constructor() {
        this.I = !1;
        this.G = !0;
        this.va = this.ka = !1;
        this.F = this.da = this.ja = !0;
        this.T = !1;
        this.W = 0;
        this.ya = !1;
        this.$ = 100;
        this.X = 1;
        this.ba = 2;
        this.aa = this.S = !1;
        this.ma = 50;
        this.H = !0;
        this.D = null;
        this.Z = this.V = this.P = !1;
        this.Y = !0;
        this.C = 0;
        this.A = !1;
        this.xa = this.wa = -1;
        this.M = !1;
        this.ia = 0;
        this.pa = 10;
        this.ra = null
    }

    load(a, b) {
        b.lf && (this.Da = b.lf);
        b.lof && (this.Ga = b.lof);
        b.pc && qf(this, a, b.pc);
        b.bgc && (this.ta = b.bgc);
        b.nc && (this.N = b.nc);
        b.kl && (this.Ca = b.kl);
        b.kr && (this.Fa = b.kr)
    }
}
;

function vf(a, b) {
    var c = 7 === a.status;
    a.status |= b;
    !c && 7 === a.status && nf(a.A, 10)
}

class wf {
    constructor(a) {
        this.A = a;
        this.status = 0
    }
}
;

function Ff(a, b, c) {
    var d = a.C;
    d[c] || (d[c] = Xd(a.D, String.fromCharCode(c)));
    return d[c] * b / 36
}

function Gf(a, b, c, d, e, f, g) {
    var h = [];
    d = d.split(/\s+/);
    for (var k = 0, l = d.length, m = 0, n, p; k !== l; k++)
        p = d[k],
            0 === k ? h.push(p) : (n = h[m] + " " + p,
                a.width(b, c, n, e, f) > g ? (h.push(p),
                    m++) : h[m] = n);
    return h
}

class Hf {
    constructor(a, b) {
        this.A = a;
        this.D = b;
        this.cache = {};
        this.C = {};
        Rd(b, 36, 1)
    }

    width(a, b, c, d, e) {
        "undefined" === typeof this.cache[b] && (this.cache[b] = {});
        var f = this.cache[b]
            , g = (d ? "1" : "0") + (e ? "1_" : "0_") + a + "_" + c;
        f[g] || (Rd(this.A, a, b, d, e),
            f[g] = Xd(this.A, c));
        return f[g]
    }
}
;var If = [null, 0, 1, -1, 2, -2, 3, -3]
    , Jf = {
        0: 1,
        1: 2,
        "-1": 3,
        2: 4,
        "-2": 5,
        3: 6,
        "-3": 7
    }
    , Kf = {
        "": 0,
        "#": 1,
        "##": 2,
        "###": 3,
        b: -1,
        bb: -2,
        bbb: -3
    }
    , Lf = [0, 2, 4, 5, 7, 9, 11]
    , Mf = [0, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]
    , Nf = [0, -1, 0, -1, 0, 0, 1, 0, -1, 0, -1, 0]
    , Of = "CDEFGAB".split("")
    , Pf = [[0, 0], [7, -5], [2, 2], [-3, -3], [4, 4], [-1, -1], [6, -6], [1, 1], [-4, -4], [3, 3], [-2, -2], [5, -7]];

function Vf(a) {
    return (0 > a ? a % 7 + 7 : a) % 7
}

function Wf(a) {
    return (0 > a ? a % 12 + 12 : a) % 12
}

function Zf(a) {
    return Of[a.A] + {
        0: "",
        1: "\u266f",
        2: "\ud834\udd2a",
        3: "\u266f\u266f\u266f",
        "-1": "\u266d",
        "-2": "\ud834\udd2b",
        "-3": "\u266d\u266d\u266d"
    }[a.C]
}

function $f(a) {
    return Wf(Lf[a.A] + a.C)
}

function ag(a) {
    return Pf[$f(a)][0 <= a.C ? 0 : 1]
}

function bg(a, b) {
    return -1 !== fc(ra[b][0], Lf[a.A])
}

function cg(a, b) {
    return dg(Vf(a.A - ra[b][2]), a.C - eg(a, b))
}

function fg(a, b) {
    return b % 12 ? gg(Wf($f(a) + b)) : a
}

function hg(a) {
    return Jf[a.C]
}

function eg(a, b) {
    var c = 0;
    bg(a, b) && (c = If[ra[b][1]]);
    return c
}

class ig {
    constructor(a, b) {
        this.A = a;
        this.C = b
    }

    toString() {
        return Of[this.A] + {
            0: "",
            1: "#",
            2: "##",
            3: "###",
            "-1": "b",
            "-2": "bb",
            "-3": "bbb"
        }[this.C]
    }
}

var jg = {};

function ng(a, b) {
    var c = `${a}-${b}`;
    jg[c] || (jg[c] = new ig(a, b));
    return jg[c]
}

function sg(a) {
    return ng(fc(Of, a.charAt(0)), Kf[a.substring(1)])
}

function gg(a) {
    return ng(Mf[a], Nf[a])
}

function tg(a) {
    return Ag(a, dg(0, 0))
}

function Ag(a, b) {
    b = ng((ra[a][2] + b.A) % 7, b.C);
    bg(b, a) && (b = ng(b.A, b.C + If[ra[a][1]]));
    return b
}

function Bg(a, b) {
    return a.A === b.A && a.C === b.C
}

function Cg(a, b) {
    return b ? 0 === b % 12 ? new Dg(a.A, Math.floor(b / 12)) : Eg(a.U + b, 0) : a
}

function Fg(a, b, c, d) {
    return c === d ? b ? 0 !== b % 12 ? Eg(a.U + b, d) : new Dg(a.A, a.C + b / 12) : a : Gg(Eg(a.U + b, d).U, hg(Ag(d, cg(a.A, c))))
}

function Hg(a) {
    var b = a.A;
    var c = b.C;
    b = c && !Nf[$f(b) % 12] || -1 > c || 1 < c ? gg($f(b)) : b;
    return b === a.A ? a : Gg(a.U, hg(b))
}

class Dg {
    constructor(a, b) {
        this.A = a;
        this.C = b;
        this.U = 12 * (b + 1) + Lf[a.A] + a.C
    }

    toString() {
        return this.A.toString() + this.C
    }
}

function Gg(a, b) {
    b = If[b];
    a -= b;
    return new Dg(ng(Mf[a % 12], b), Math.floor(a / 12) - 1)
}

function Eg(a, b) {
    return Gg(a, Nf[a % 12] ? 0 > b ? 3 : 2 : 1)
}

class Ig {
    constructor(a, b) {
        this.A = a;
        this.C = b
    }
}

var Jg = {};

function dg(a, b) {
    var c = `${a}-${b}`;
    Jg[c] || (Jg[c] = new Ig(a, b));
    return Jg[c]
}
;var Kg = {
    G1: [[2, 5, 1, 4, 0, 3, -1], [6, 3, 7, 4, 1, 5, 2]],
    G2: [[0, 3, -1, 2, 5, 1, 4], [4, 1, 5, 2, 6, 3, 7]],
    H2: [[0, 3, -1, 2, 5, 1, 4], [4, 1, 5, 2, 6, 3, 7]],
    F3: [[4, 0, 3, -1, 2, 5, 1], [1, 5, 2, 6, 3, 7, 4]],
    F4: [[2, 5, 1, 4, 7, 3, 6], [6, 3, 7, 4, 8, 5, 9]],
    H4: [[2, 5, 1, 4, 7, 3, 6], [6, 3, 7, 4, 8, 5, 9]],
    F5: [[0, 3, -1, 2, 5, 1, 4], [4, 1, 5, 2, 6, 3, 7]],
    C1: [[5, 1, 4, 0, 3, -1, 2], [2, -1, 3, 0, 4, 1, 5]],
    C2: [[3, 6, 2, 5, 1, 4, 0], [0, 4, 1, 5, 2, 6, 3]],
    C3: [[1, 4, 0, 3, 6, 2, 5], [5, 2, 6, 3, 7, 4, 8]],
    "C3.5": [[0, 3, -1, 2, 5, 1, 4], [4, 1, 5, 2, 6, 3, 7]],
    C4: [[6, 2, 5, 1, 4, 0, 3], [3, 0, 4, 1, 5, 2, 6]]
};

function Lg(a) {
    return !a.G && "T" !== a.code
}

class Mg {
    constructor(a, b) {
        this.code = a;
        this.G = !1;
        this.H = this.F = 2;
        this.D = this.C = 0;
        if ("T" === a)
            this.A = 57453;
        else {
            var c = a[0];
            this.D = parseFloat(a.substring(1));
            "F" === c || "H4" === a ? (a = 4,
                this.A = 57442,
                this.C = 10,
                this.F = 1,
                this.H = 2.5) : "C" === c ? (a = 3,
                this.A = 57436,
                this.C = 4) : "P" === c ? (this.G = !0,
                a = this.D = .5 * (b + 1),
                this.A = 57449,
                this.H = this.F = 1,
                this.C = 1 === b ? 2 : -2) : "H" === c ? (a = 2,
                this.A = 57426,
                this.F = 4.5,
                this.H = 3.5,
                this.C = 5) : (a = 2,
                this.A = 57424,
                this.F = 4.5,
                this.H = 2.5,
                this.C = -2);
            this.D !== a && (this.C -= 2 * (a - this.D))
        }
    }
}

var Ng = {};

function Og(a, b) {
    var c = `${a}-${b}`;
    Ng[c] || (Ng[c] = new Mg(a, b));
    return Ng[c]
}

class Sg {
    constructor(a, b, c) {
        this.A = Re(a, b);
        this.C = Og(c, 5)
    }
}
;

function Tg(a, b, c) {
    for (var d = a.length, e = d, f = null, g = null, h = [], k; e--;)
        if (k = a[e],
        null !== k) {
            if (null === f || k < f)
                f = k;
            if (null === g || k > g)
                g = k
        }
    if (null !== g)
        if (5 > g - f && 0 <= f + b)
            for (e = 0,
                     f = d; e !== f; e++)
                h[e] = null !== a[e] ? a[e] + b : null;
        else {
            e = 0;
            for (f = d; e !== f; e++)
                h[e] = null;
            for (e = d; e--;)
                if (k = a[e],
                null !== k)
                    for (f = c[d - e - 1] + k + b,
                             g = d; g--;)
                        if (!(0 > b && g > e) && null === h[g] && c[d - g - 1] <= f) {
                            h[g] = f - c[d - g - 1];
                            break
                        }
        }
    return h
}
;

class bh {
    constructor(a, b, c, d, e) {
        this.D = a;
        this.A = b;
        this.F = c;
        this.C = d;
        this.G = e
    }
}

function ch(a) {
    a.F = 0;
    a.G = 0;
    a.D = 0;
    if (null !== a.Sa) {
        var b = -1, c = -1, d = -1, e = a.Sa.length, f, g;
        for (f = 0; f !== e; f++)
            if (g = a.Sa[f]) {
                if (-1 === b || g < b)
                    b = g;
                if (-1 === c || g > c)
                    c = g;
                -1 === d && (d = g)
            }
        1 < b && 3 < c && (a.G = b);
        a.F = d;
        a.D = Math.max(4, c - b + 1)
    }
}

class dh {
    constructor(a, b, c) {
        this.C = a;
        this.A = "undefined" !== typeof c ? c : null;
        a = b.trim();
        var d = /^\((.*)\)$/.exec(a);
        c = !1;
        d && (a = d[1],
            c = !0);
        this.I = (d = /^([ABCDEFGabcdefg])((?:bb?|##?)?)(.*?)(?:\s*\/\s*(?:([ABCDEFGabcdefg])(bb?|##?)?))?$/.exec(a)) ? new bh("", sg(d[1].toUpperCase() + d[2]), d[3], d[4] ? sg(d[4].toUpperCase() + (d[5] || "")) : null, c) : new bh(a, null, "", null, c);
        this.name = b;
        this.H = this.I;
        this.Sa = this.A;
        this.D = this.G = this.F = 0;
        ch(this)
    }

    Qa(a, b) {
        if (0 === a)
            this.H = this.I,
                this.Sa = this.A,
                ch(this);
        else {
            var c = this.I;
            c.A && (this.H = new bh(c.D, fg(c.A, a), c.F, c.C ? fg(c.C, a) : null, c.G));
            this.A && b ? (this.Sa = Tg(this.A, a, b),
                ch(this)) : this.Sa = null
        }
    }
}
;var eh = {
        2: 1,
        1: 1,
        "0.5": 2,
        "0.25": 4,
        "0.125": 8,
        "0.0625": 16,
        "0.03125": 32,
        "0.015625": 64,
        "0.0078125": 128,
        "0.00390625": 256
    }
    , fh = {
        1: "Da Capo",
        2: "D.C. al Coda",
        3: "D.C. al Double Coda",
        4: "D.C. al Fine",
        5: "Da Segno",
        6: "D.S. al Coda",
        7: "D.S. al Double Coda",
        8: "D.S. al Fine",
        9: "Da Segno Segno",
        10: "D.S.S. al Coda",
        11: "D.S.S. al Double Coda",
        12: "D.S.S. al Fine",
        13: "To Coda",
        14: "To Double Coda",
        19: "fine"
    }
    , gh = {
        1: [3, 2],
        2: [7, 4],
        3: [15, 8],
        4: [31, 16]
    }
    , hh = [57920, 57922, 57924, 57926, 57928, 57930, 57921, 57923, 57925, 57927, 57929, 57931]
    , ih = {
        "2.4": 34,
        "2.7": 31,
        "3.2": 28,
        4: 24,
        5: 19,
        "5.8": 29,
        7: 12,
        "8.2": 28,
        9: 19,
        "9.6": 24,
        12: 0,
        "14.7": 19,
        16: 12,
        17: 19,
        19: 0,
        "21.7": 12,
        24: 0
    }
    ,
    jh = [null, 57506, 57507, 57508, 57513, 57563, 57561, 57560, 57565, 57591, 57523, 57593, 57601, 57600, 57514, 57604, 57512, 57511, 57504]
    , kh = {
        2: 0,
        1: 0,
        "0.5": 0,
        "0.25": 0,
        "0.125": 1,
        "0.0625": 2,
        "0.03125": 3,
        "0.015625": 4,
        "0.0078125": 5,
        "0.00390625": 6
    }
    , lh = {
        2: 58594,
        1: 58595,
        "0.5": 58596,
        "0.25": 58597,
        "0.125": 58598,
        "0.0625": 58599,
        "0.03125": 58600,
        "0.015625": 58601,
        "0.0078125": 58602,
        "0.00390625": 58603
    }
    , mh = {
        2: 1,
        1: 0,
        "0.5": .5,
        "0.25": 1.5,
        "0.125": .75,
        "0.0625": .75,
        "0.03125": 1.75,
        "0.015625": 1.75,
        "0.0078125": 2.75,
        "0.00390625": 2.75
    }
    , nh = {
        2: 0,
        1: .5,
        "0.5": 0,
        "0.25": 1.5,
        "0.125": 1,
        "0.0625": 2,
        "0.03125": 2,
        "0.015625": 3,
        "0.0078125": 3,
        "0.00390625": 4
    }
    , oh = {
        t8: .5 / 3 - .125,
        t16: .25 / 3 - .0625,
        d8: .0625,
        d16: .03125,
        s8: -.0625,
        s16: -.03125
    }
    ,
    ph = [null, null, [1.18, .168, 0, -.168], [1.18, .168, 0, -.168], [1.16, .444, 0, -.44], [1, 0, 0, 0], [1.004, 0, 0, 0], null, [1, 0, 0, 0], [1, 0, .004, 0], [.996, 0, 0, 0], [1.54, .456, 0, -.436], [2.12, 1, 0, -1], [1.46, .656, 0, -.664], [.988, .316, 0, -.312], [2, 0, 0, 0], [1.336, .412, 0, -.412], null, null]
    , qh = [0, 0, 0, 0]
    , rh = {
        "1/2": 1,
        "1/4": 1,
        "1/8": 1,
        "1/16": 1
    }
    , uh = Re(1, 2)
    , Eh = Re(1, 4)
    , Fh = Re(1, 8)
    , Gh = Re(1, 16)
    , Hh = Re(1, 32);

function Ih(a, b) {
    return a.J.track !== b.J.track ? a.J.track.index - b.J.track.index : a.ea !== b.ea ? a.ea - b.ea : a.J.O !== b.J.O ? a.J.O.U - b.J.O.U : a.fa - b.fa
}

function Jh(a, b) {
    return a.M.U - b.M.U
}

function Kh(a, b) {
    return Te(a.A, b.A) ? 1 : -1
}

function Lh(a, b) {
    return a.sa - b.sa
}

function Mh(a, b) {
    return a.A === b.A ? a.C - b.C : a.A - b.A
}

function Nh(a, b) {
    return b[1] - a[1]
}

function Oh(a) {
    var b = 0, c = 1, d;
    for (d = a.length; d--;) {
        var e = a[d];
        if (e.oa)
            b += Math.ceil(e.J.track.N / 2),
                c++;
        else {
            var f = e.A;
            var g = f.length;
            for (c += g; g--;)
                b += f[g].sa,
                e.D || null === e.aa || -1 === e.aa || (b += 0 === e.aa ? 4 : -4)
        }
    }
    return b / c
}

function Ph(a, b, c, d, e, f, g) {
    var h = null === f;
    if (null !== b.T) {
        a: {
            f = b.T.A;
            for (a = f.length; a--;)
                if (f[a][0] === d) {
                    d = f[a][1];
                    break a
                }
            d = 71
        }
        f = 1
    } else {
        var k = b.H
            , l = b.G;
        !b.Z && Qh(b) && (a ? h = !0 : k = Da);
        b.Ia && (d -= b.Ia[c],
        0 > d && (d = 0));
        c >= k.length && (c = k.length - 1);
        d = k[c] + d;
        a || (d -= b.Qa);
        if (l) {
            if (a || b.X)
                d += l;
            a && !b.X && (h = !0)
        }
        e && (1 === e[0] ? (a = ih[e[1]]) && (d += a) : e[1] && (d += parseInt(e[1], 10)))
    }
    return h ? Eg(d, g) : Gg(d, f)
}

function Rh(a) {
    a = ph[a];
    return null === a ? qh : a
}

class Sh {
    constructor(a, b, c, d, e, f, g, h) {
        this.A = a;
        this.C = b;
        this.F = c || 1;
        this.D = d || 120;
        this.H = e;
        this.text = f;
        this.G = g && "undefined" !== typeof sa[d];
        this.I = h
    }
}

class Th {
    constructor(a, b, c, d, e) {
        this.text = a;
        this.D = b;
        this.C = c;
        this.A = d;
        this.color = e
    }
}

function Uh(a, b, c) {
    return new Th(a.t, 1 === a.i, a.f || b, a.s || c, a.c || null)
}

function Vh(a, b) {
    a.A.push(b);
    null === b.I && (b.I = []);
    b.I.push(a);
    a.A.sort(Ih)
}

function Wh(a) {
    if (a.A[0].J.track.A) {
        a = a.A;
        for (var b = a.length; b--;)
            if (Xh(a[b]))
                return !0
    }
    return !1
}

function Yh(a) {
    if (null !== a.D)
        return a.D;
    if (a.A[0].D)
        return Zh(a.A[0].J) ? 0 === a.A[0].V : !1;
    var b = 0
        , c = 0;
    a = a.A;
    for (var d = a.length, e; d--;) {
        e = a[d];
        if (Zh(e.J))
            return 0 === e.V;
        e.G ? b++ : c++
    }
    return 0 === b ? !0 : 0 === c ? !1 : !0
}

class $h {
    constructor(a, b, c) {
        this.id = a;
        this.D = b;
        this.C = c;
        this.A = []
    }
}

class ai {
    constructor(a, b, c, d, e) {
        this.id = a;
        this.value = b;
        this.Ma = c;
        this.Za = d;
        this.fb = e;
        this.D = this.G = 0;
        this.nb = this.A = this.N = !1;
        this.C = 1;
        this.F = 0;
        this.M = this.H = mf;
        a = 2 === b ? 2 : 1;
        var f = eh[b];
        f ? (this.N = 0 < c,
            this.A = 1 < f,
            this.nb = 8 <= f,
            this.I = lh[b],
            this.F = kh[b],
            this.G = mh[b],
            this.D = nh[b],
            this.C = 1 === f ? 2 === a ? 18 : 1 : 2 === f ? 2 : 3,
        c && (a *= gh[c][0],
            f *= gh[c][1]),
            this.M = Re(a, f),
        d && (a *= e,
            f *= d),
            this.H = Re(a, f),
            this.duration = a / f) : (this.I = 58595,
            this.G = mh["1"],
            this.D = nh["1"],
            c = String(b),
            d = c.indexOf("."),
            -1 === d ? b = Re(b, 1) : (b = c.substring(d + 1),
                e = Math.pow(10, b.length),
                b = Re(parseInt(b, 10) + parseInt(c.substring(0, d), 10) * e, e),
                b = Te(b, Re(1, 256)) ? b : lf),
            this.H = this.M = b,
            this.duration = this.H.qa)
    }
}

function bi(a, b, c) {
    var d = b.J.O.U;
    return c && a.Pa === d && a.ab === b.F || !c && a.Na === d && a.cb === b.F
}

class ci {
    constructor(a, b, c, d, e, f, g) {
        this.Pa = a;
        this.ab = Re(b, c);
        this.Na = d;
        this.cb = Re(e, f);
        this.A = g
    }
}

class di {
    constructor(a, b, c) {
        this.A = a;
        this.C = b;
        this.D = c
    }
}

function ei(a) {
    a = a.code;
    return 15 === a || 17 === a || 16 === a || 18 === a
}

class fi {
    constructor(a, b) {
        this.code = a;
        this.A = b
    }
}

class gi {
    constructor(a, b) {
        this.A = a;
        this.C = b
    }
}

function ni(a) {
    a = ia[a];
    return new gi(a[0], a[1])
}

function pi(a) {
    var b = a.length - 1;
    if (a.length !== Da.length || Zb(a, Da))
        return !1;
    for (; b--;)
        if (a[b + 1] - a[b] !== Da[b + 1] - Da[b])
            return !1;
    return !0
}

function qi(a, b, c, d) {
    var e = ""
        , f = a.length;
    if ("64 59 55 50 45 40" === b)
        d || (e = "Standard tuning");
    else if ("64 59 55 50 45 38" === b)
        e = "Drop D tuning";
    else if ("62 59 55 50 43 38" === b)
        e = "Open G tuning";
    else if ("63 58 54 49 44 39" === b)
        e = "Tune down 1/2 step";
    else if ("62 57 53 48 43 38" === b)
        e = "Tune down 1 step";
    else if ("60 55 51 46 41 36" === b)
        e = "Tune down 2 steps";
    else {
        for (; f--;)
            e += Zf(Eg(a[f], c).A);
        e += " tuning"
    }
    return e
}

function Qh(a) {
    return a.D && pi(a.H)
}

function ri(a, b) {
    a.H = b;
    a.Wa = null === b ? "" : b.join(" ");
    a.I = null === b ? 0 : b.length
}

function si(a) {
    return "" !== a.ma ? a.ma : a.name
}

function ti(a, b, c) {
    if (null !== a.S) {
        a = a.S;
        for (var d = a.length, e; d--;)
            if (e = a[d],
            e.A === b && c === e.C)
                return d
    }
    return -1
}

function ui(a, b, c, d) {
    a = a.P || [];
    for (var e = a.length, f; e--;)
        if (f = a[e],
        d && f.Pa === b && f.ab === c || !d && f.Na === b && f.cb === c)
            return f;
    return null
}

function vi(a, b) {
    return (1.3 * (a.I - 1) + .13) * b
}

function wi(a) {
    return null === a.T && (!!a.G || !!a.Y || null === a.Y && (6 !== a.H.length || "64 59 55 50 45 40" !== a.Wa))
}

function xi(a) {
    return 1E3 <= a.Ja ? 1E3 : a.Ja
}

function yi(a) {
    return a.D && (!!a.G && !a.X || !a.Z && Qh(a))
}

function zi(a, b) {
    var c = (a.W ? 0 : b.C) - a.Qa;
    b.S ? 0 === a.Qa % 12 || (c += a.Qa) : (a.G && !a.X && (c -= a.G),
    !a.Z && Qh(a) && (c -= a.H[0] - Da[0]));
    return c
}

function Ai(a) {
    var b = -a.Qa;
    a.G && !a.X && (b -= a.G);
    !a.Z && Qh(a) && (b -= a.H[0] - Da[0]);
    return b
}

function Bi(a, b) {
    return -Ai(a) + zi(a, b)
}

function Ci(a, b) {
    return ag(fg(tg(b), Ai(a)))
}

function Di(a, b) {
    return ag(fg(tg(b), -Ai(a)))
}

function Ei(a, b, c) {
    return Fg(b, Ai(a), c, Ci(a, c))
}

function Fi(a, b, c) {
    return Fg(b, -Ai(a), c, Di(a, c))
}

function Gi(a) {
    return a.Ga || !a.Ka && a.Ta ? 0 : a.volume
}

class Hi {
    constructor(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, u, v, w, y, x, z, C, F, H, N, Q, L, G, W, T, S, V, aa) {
        this.index = a;
        (a = b) && a.trim() && "untitled" !== a.toLowerCase() || (a = 6 === h || 7 === h ? "Guitar" : "Instrument " + (this.index + 1));
        this.name = a;
        this.ma = c;
        this.Da = d;
        this.Ja = e;
        this.volume = f;
        this.N = g;
        this.D = 0 !== h;
        this.W = !1;
        this.I = 0;
        this.H = null;
        this.Wa = "";
        ri(this, k);
        this.Y = l;
        this.Ia = m;
        this.pa = p;
        this.T = null;
        p ? this.T = ni(p) : n && (this.T = new gi(n[0], n[1]));
        this.G = q;
        this.Qa = r;
        this.xa = {};
        if (w)
            for (c = 0,
                     d = w.length; c < d; c++)
                this.xa[w[c][0]] = new dh(w[c][0], w[c][1].name, w[c][1].frets);
        this.A = y;
        this.P = null;
        if (x) {
            w = [];
            for (c = x.length; c--;)
                y = x[c],
                    y = new ci(y[0], y[1], y[2], y[3], y[4], y[5], y[6]),
                (y.Na > y.Pa || y.Pa === y.Na && Te(y.cb, y.ab)) && w.push(y);
            this.P = w
        }
        this.S = null;
        if (z) {
            x = [];
            c = 0;
            for (d = z.length; c !== d; c++)
                w = z[c],
                    x.push(new di(w[0], Re(w[1], w[2]), w[3]));
            this.S = x
        }
        this.X = u;
        this.Z = v;
        this.ra = C;
        this.V = F;
        this.va = H;
        this.aa = N;
        this.$ = Q;
        this.ka = L;
        this.da = G;
        this.ta = W;
        this.C = C;
        this.F = F;
        this.La = H;
        this.ba = N;
        this.ia = Q;
        this.M = L;
        this.Xa = G;
        this.Ya = W;
        this.wa = T;
        this.ja = S;
        this.ya = V;
        this.Ca = aa;
        this.Ka = this.Ga = this.Ta = this.Oa = this.Fa = !1
    }

    isVisible() {
        return this.C || this.F || this.ba || this.ia || this.M
    }
}

function Ii(a) {
    return 0 < a && 1 > a ? 1 : a | 0
}

function Ji(a, b, c, d, e) {
    var f = c ? Math.min : Math.max, g = a.F, h;
    1 !== g && 2 !== g && null !== a.C && 0 !== a.C ? h = a.C : 0 !== a.A ? h = a.A : null !== a.end && 0 !== a.end ? h = a.end : h = null;
    null !== h && (0 !== a.A && (h = f(a.A, h)),
    0 !== a.end && (h = f(a.end, h)));
    e && Ki(a.D) && (e = Li(a.D, b, 1)) && e.C && (e = Ji(e.C, b, c, !1, !0),
    null !== e && (h = null === h ? e : f(e, h)));
    d && Mi(a.D) && (e = Ni(a.D, b)) && e.C && (e = Ji(e.C, b, c, !0, !1),
    null !== e && (h = null === h ? e : f(e, h)));
    return h
}

function Oi(a, b) {
    return null === a.A ? (a = Ni(a.D, b)) && a.C ? null !== a.C.end ? a.C.end : Oi(a.C, b) : 0 : a.A
}

function Pi(a, b, c, d) {
    var e = Ji(a, b, !0, !0, !0)
        , f = Ji(a, b, !1, !0, !0)
        , g = 2 * d;
    e !== f && (c = 1 === c ? Oi(a, b) : 2 === c ? a.C : a.end,
        g += d * (c - e) / 25);
    return g
}

function Qi(a, b) {
    if (!Mi(a.D))
        return !1;
    if ((a = Ni(a.D, b)) && a.C)
        return !0;
    if (a && Mi(a))
        for (; ;) {
            a = Ni(a, b);
            if (a.C)
                return !0;
            if (!Mi(a))
                return !1
        }
    else
        return !1
}

class Ri {
    constructor(a, b, c, d) {
        this.D = a;
        this.A = b;
        this.C = c;
        this.end = d;
        this.F = !Mi(this.D) && 0 < this.A ? this.A === this.end ? 5 : this.end > this.A ? 6 : 7 : Mi(this.D) && (null === this.A && null === this.end || this.A == this.C && this.A == this.end) ? 4 : null !== this.C && this.A < this.C && this.C > this.end ? 3 : Mi(this.D) && this.A > this.end ? 2 : 1
    }
}

function Si(a, b) {
    return (a = Ti(a.K, b, !0)) && a.va ? a.va.end : null
}

class Ui {
    constructor(a, b, c) {
        this.K = b;
        this.A = c[0] ? c[0] / 50 : c[0];
        this.C = c[1] ? c[1] / 50 : c[1];
        this.end = c[2] ? c[2] / 50 : c[2];
        null === this.A && null === this.end && (this.A = this.end = Si(this, a));
        b = this.A;
        c = this.C;
        a = Si(this, a);
        this.D = b === this.end ? null === c || c === b ? null === a || a !== b ? 10 : 4 : 9 : null === a ? 0 === b ? 8 : 11 : 8
    }
}

function Vi(a, b, c, d) {
    var e = null;
    "undefined" !== typeof a[b] ? (a = a[b],
        e = new Wi(a.t, a.c || null, a.p || 0)) : "undefined" !== typeof a[c] && (e = new Wi(a[c], a[d] || null, 0));
    return e
}

class Wi {
    constructor(a, b, c) {
        this.text = a;
        this.color = b;
        this.position = 1;
        this.A = c;
        this.C = 0
    }
}

function Mi(a) {
    return 0 !== (a.A & 2)
}

function Ki(a) {
    return 0 !== (a.A & 1)
}

function Li(a, b, c) {
    if (2 === c && !Xi(a) || 1 === c && !Ki(a))
        return null;
    var d = 2 === c;
    c = 1 === c;
    var e = a.K;
    b = b.A;
    for (var f = e.J.track.index, g = e.J.O.U, h = e.W, k = !0, l = !1, m, n, p, q, r, u, v, w; m = b[g];) {
        m = m.A[f].A;
        for (n = m.length; n--;)
            for (p = m[n],
                     q = 0,
                     r = p.length; q !== r; q++)
                if (u = p[q],
                !k || !Te(h, u.F))
                    if (!k || u.F === h && (n !== e.ea || q > e.fa))
                        for (l = !0,
                                 v = u.A.length; v--;) {
                            if (w = u.A[v],
                            d && Yi(w) && w.ga === a.ga || c && Mi(w) && w.H.U === a.H.U)
                                return w
                        }
                    else if (Te(u.F, h))
                        break;
        if (!l && k)
            g++,
                k = !1,
                h = lf;
        else
            break
    }
    return null
}

function Ni(a, b) {
    b = Ti(a.K, b, !0);
    if (!b || !Mi(a))
        return null;
    b = b.A;
    var c = a.ga, d;
    for (d = b.length; d--;) {
        var e = b[d];
        if (Ki(e) && (null === c && e.H.U === a.H.U || null !== e.ga && e.ga === c && e.Aa === a.Aa))
            return e
    }
    return null
}

function Zi(a, b) {
    a.A &= -65537;
    a.A &= -131073;
    1 === b ? a.A |= 65536 : 2 === b && (a.A |= 131072)
}

function $i(a, b, c) {
    var d = a.K;
    return Ph(b, d.J.track, a.$, a.ba, a.N, c, b ? aj(d.J) : d.J.I)
}

function Xi(a) {
    return 0 !== (a.A & 4)
}

function Yi(a) {
    return 0 !== (a.A & 8)
}

function bj(a) {
    return 0 !== (a.A & 64)
}

function cj(a) {
    return 0 !== (a.A & 128)
}

function ij(a) {
    return 0 !== (a.A & 2048)
}

function sj(a) {
    return 0 !== (a.A & 4096)
}

function tj(a) {
    return 0 !== (a.A & 8192)
}

function uj(a) {
    return 0 !== (a.A & 16384)
}

function vj(a) {
    return 0 !== (a.A & 32768)
}

function wj(a) {
    return 0 !== (a.A & 65536) ? 1 : 0 !== (a.A & 131072) ? 2 : null
}

function xj(a) {
    var b = a.K.J;
    return yj(a) ? zj(b.P, b.track) : b.track
}

function Aj(a, b) {
    for (var c; Mi(a);)
        if (c = Ni(a, b))
            a = c;
        else
            break;
    return a
}

function Bj(a) {
    return null !== a.ga && null !== a.Aa
}

function Cj(a) {
    return Dj(a.K.J.O.A[xj(a).index], a.K.F)
}

function yj(a) {
    return 0 !== (a.A & 1024) && Ej(a.K.J).F
}

function Fj(a) {
    return vj(a) || 13 === a.X || 12 === a.X || 15 === a.X
}

function Gj(a, b, c) {
    var d = String(a.Aa)
        , e = a.N;
    !c && e && (1 === e[0] ? d = `<${d}>` : (2 === e[0] && 12 != e[1] || 4 === e[0]) && null !== e[1] && (d += " (" + (a.Aa + parseInt(e[1], 10)) + ")"));
    bj(a) && (d = "X");
    if (b || cj(a))
        d = `(${d})`;
    return d
}

function Hj(a) {
    return a.K.D ? .65 : 0 !== (a.A & 512) ? .8 : 1
}

function Ij(a) {
    return fc(a.K.A, a)
}

function Jj(a, b, c) {
    return null !== a.D && (c || a.K.J.track.Xa) && !b.C
}

function Kj(a) {
    return null !== a.G && a.K.J.track.Xa
}

function Lj(a, b, c) {
    return c ? Jj(a, b, !1) && 1 === a.D.position || Kj(a) && 1 === a.G.position : Jj(a, b, !1) && 2 === a.D.position || Kj(a) && 2 === a.G.position
}

function Mj(a, b) {
    if (yj(a) === yj(b))
        return a.sa < b.sa;
    var c = a.K.J.track.A;
    return 0 !== (a.A & 1024) && 2 === c || 0 !== (b.A & 1024) && 1 === c
}

function Nj(a, b) {
    for (var c = a.K.A, d = a.ga, e = c.length, f = 100, g; e--;)
        g = c[e],
        g !== a && (b && g.ga < d && d - g.ga < f || !b && g.ga > d && g.ga - d < f) && (f = b ? d - g.ga : g.ga - d);
    return f
}

function Oj(a) {
    if (a.X)
        return a.X;
    var b = a.K.ha;
    if (bj(a))
        return b && !b.A ? 17 : b && 2 === b.H.Ba ? 16 : 4;
    if (vj(a))
        return a = Pj(a.K) ? 13 : 12,
        b && .5 <= b.value && (a = 15),
            a;
    if (a.K.D)
        return 3;
    var c = a.K.J.track.T;
    if (c && a.Aa) {
        a: {
            c = c.A;
            for (var d = c.length; d--;)
                if (c[d][0] === a.Aa) {
                    c = c[d];
                    break a
                }
            c = []
        }
        if (2 < c.length && c[2])
            return b && !b.A ? 17 : b && 2 === b.H.Ba ? 16 : 4;
        if (3 < c.length)
            return c[3]
    }
    b = b.C;
    a.N && (b = 1 === b ? 7 : 2 === b ? 6 : 5);
    return b
}

function Qj(a, b, c) {
    return Rh(Oj(a))[b ? 1 : 3] * c * (a.K.D ? .65 : 1)
}

function Rj(a, b) {
    var c = a.K;
    if (0 === (c.C & 8192) && Zh(c.J))
        var d = 0 === c.V;
    else if (d = c.G,
    1 === c.A.length)
        a = null !== b && d !== b.K.G,
            d = !(a || d && !a);
    else {
        b = c.A;
        c = b.length;
        for (var e = 1, f = !0, g = c, h = a.sa; g--;)
            b[g].sa < h ? (e++,
                f = !1) : b[g].sa > h && (f = !1);
        d = f ? 0 === Ij(a) : 1 === (c & 1) ? e === (c + 1) / 2 ? !d : e <= c / 2 : e <= c / 2
    }
    return d
}

function Sj(a) {
    a = a.sa;
    return -3 >= a ? !0 : 9 <= a ? !1 : null
}

function Tj(a, b) {
    for (; a;)
        if (Mi(a)) {
            if ((a = Ni(a, b)) && a.C)
                return a
        } else
            break;
    return null
}

function Uj(a, b, c) {
    b = c ? Vj(a.K, b, !0) : Ti(a.K, b, !0);
    a = a.ga;
    if (b)
        for (c = b.A,
                 b = c.length; b--;)
            if (c[b].ga === a)
                return c[b];
    return null
}

function Wj(a, b, c) {
    if (c && Mi(a))
        return Wj(Aj(a, b), b, !1);
    for (c = a.K.ia || 0; a && Ki(a);)
        (a = Li(a, b, 1)) && a.K.ia && (c += a.K.ia);
    return c
}

function Xj(a, b, c) {
    var d = a.K;
    return 1 - (Wj(a, b, !1) - (c * d.J.O.za.qa - d.Ea)) / Wj(a, b, !0)
}

class Yj {
    constructor(a, b) {
        this.K = a;
        this.ga = "undefined" === typeof b.string ? null : b.string;
        this.Aa = "undefined" === typeof b.fret ? null : b.fret;
        this.$ = this.ga;
        this.ba = this.Aa;
        this.da = b.sp || null;
        this.I = b.slideL || null;
        this.F = b.slideR || null;
        this.A = 0;
        1 === b.tiestart && (this.A |= 1);
        1 === b.tieend && (this.A |= 2);
        1 === b.hpstart && (this.A |= 4);
        1 === b.hpend && (this.A |= 8);
        1 === b.lefttap && (this.A |= 16);
        1 === b.leftpull && (this.A |= 32);
        1 === b.dead && (this.A |= 64);
        1 === b.ghost && (this.A |= 128);
        1 === b.tap && (this.A |= 256);
        1 === b.sm && (this.A |= 512);
        1 === b.os && a.J.track.A && (this.A |= 1024);
        1 === b.d && (this.A |= 2048);
        1 === b.f && (this.A |= 4096);
        1 === b.p && (this.A |= 8192);
        1 === b.s && (this.A |= 16384);
        1 === b["/"] && (this.A |= 32768);
        b.c && Zi(this, b.c);
        this.N = null;
        b.harm && (this.N = [b.harm[0], b.harm[1]]);
        this.aa = b.vibrato || 0;
        this.C = b.bend ? new Ri(this, b.bend[0], b.bend[1], b.bend[2]) : null;
        this.D = Vi(b, "lf", "lfinger", "lfc");
        this.G = Vi(b, "rf", "rfinger", "rfc");
        this.T = b.st || null;
        this.X = b.head || null;
        this.P = 0;
        this.color = b.co || null;
        this.Z = 0;
        b.tro ? (this.P = 1,
            this.Z = b.tro) : b.tr && (this.P = b.tr);
        this.Y = null;
        var c = b.pitch || null;
        this.W = 1;
        "undefined" === typeof b.a ? (b = c ? c : $i(this, !1, null).U,
            this.W = hg(Ei(a.J.track, Eg(b, aj(a.J)), aj(a.J)).A)) : this.W = b.a;
        c ? a = 0 === a.J.track.Qa % 12 ? Gg(c, this.W) : Fi(a.J.track, Gg(c - a.J.track.Qa, this.W), a.J.I) : (this.ga = this.ga || 0,
            this.Aa = this.Aa || 0,
            a = $i(this, !0, this.W));
        this.H = this.M = a;
        this.V = null;
        this.sa = this.S = 0
    }
}

function Xh(a) {
    if (a.J.track.A)
        for (var b = a.A.length; b--;)
            if (yj(a.A[b]))
                return !0;
    return !1
}

function Ti(a, b, c) {
    if (0 === a.fa) {
        var d = a.J.O.U;
        if (0 === d || !c)
            return null;
        b = b.A[d - 1].A[a.J.track.index];
        if (a.ea >= b.A.length)
            return null;
        a = b.A[a.ea];
        return a[a.length - 1]
    }
    return Zj(a)[a.fa - 1]
}

function Pj(a) {
    if (a.D)
        var b = !0;
    else {
        if (-1 === a.aa)
            return !1;
        if (a.ha.A) {
            b = !0;
            for (var c = a.A.length; c--;)
                if (12 === a.A[c].X) {
                    b = !1;
                    break
                }
        } else
            b = !1
    }
    return b
}

function Vj(a, b, c) {
    var d = a.J.A[a.ea];
    return a.fa === d.length - 1 ? c && (b = b.A[a.J.O.U + 1]) && (b = b.A[a.J.track.index]) && a.ea < b.A.length && b.A[a.ea].length ? b.A[a.ea][0] : null : d[a.fa + 1]
}

function ak(a, b, c) {
    a.D ? (a.ha = new ai(0, .25, 0, 0, 0),
        a.ra = 0,
        a.Z = lf) : (a.ha = b.I[c],
        a.ra = a.ha.duration,
        a.Z = a.ha.H);
    a.ia = a.ra
}

function bk(a) {
    return a.J.track.xa[a.N]
}

function ck(a, b) {
    a.C &= -131073;
    a.C &= -262145;
    1 === b ? a.C |= 131072 : 2 === b && (a.C |= 262144)
}

function dk(a) {
    a.A.sort(Jh);
    a.oa = 0 === a.A.length
}

function ek(a) {
    return 0 !== (a.C & 1)
}

function fk(a) {
    return 0 !== (a.C & 2)
}

function gk(a) {
    return 0 !== (a.C & 4)
}

function nk(a) {
    return 0 !== (a.C & 8)
}

function ok(a) {
    return 0 !== (a.C & 16)
}

function pk(a) {
    return 0 !== (a.C & 32)
}

function qk(a) {
    return 0 !== (a.C & 64)
}

function rk(a) {
    return 0 !== (a.C & 128)
}

function sk(a) {
    return 0 !== (a.C & 256)
}

function tk(a) {
    return 0 !== (a.C & 512)
}

function uk(a) {
    return 0 !== (a.C & 1024)
}

function vk(a) {
    return 0 !== (a.C & 2048)
}

function wk(a) {
    return 0 !== (a.C & 32768)
}

function xk(a) {
    return 0 !== (a.C & 65536)
}

function yk(a) {
    return 0 !== (a.C & 131072) || 0 !== (a.C & 262144)
}

function zk(a) {
    return 0 !== (a.C & 131072) ? 1 : 0 !== (a.C & 262144) ? 2 : null
}

function Ak(a) {
    for (var b = 0, c = a.fa; c-- && a.J.A[a.ea][c].D;)
        b++;
    if (a.D)
        for (c = a.fa; a.J.A[a.ea][c] && a.J.A[a.ea][c].D; c++)
            b++;
    return b
}

function Bk(a) {
    return 0 === a.fa && 1 === Zj(a).length
}

function Ck(a, b) {
    for (var c = Vj(a, b, !1), d = null; c;) {
        if (c.N) {
            d = c.F;
            break
        }
        c = Vj(c, b, !1)
    }
    return d ? Ue(d, a.F) : Ue(a.J.O.za, a.F)
}

function Zj(a) {
    return a.J.A[a.ea]
}

function Dk(a) {
    return 1 === a.H || 3 === a.H
}

function Ek(a) {
    return a.fa + 1 === Zj(a).length
}

function Fk(a, b) {
    a = a.A;
    for (var c = a.length; c--;)
        if (xj(a[c]) === b)
            return !0;
    return !1
}

function Gk(a) {
    a = a.A;
    for (var b = a.length; b--;)
        if (Ki(a[b]))
            return a[b];
    return null
}

function Hk(a) {
    return !(!a.I || !a.I.length)
}

function Ik(a, b) {
    a = a.I;
    var c;
    if (a)
        for (c = a.length; c--;)
            if (Yh(a[c]) === b)
                return !0;
    return !1
}

function Jk(a) {
    var b = a.J.track;
    return b.M ? !0 : b.A ? 2 === b.A : Zh(a.J) && !a.V
}

function Kk(a) {
    return Zh(a.J) ? !a.V : !a.G || a.J.H.G
}

function Lk(a) {
    return !Zh(a.J) || !a.V
}

function Mk(a) {
    for (var b = a.A.length, c; b--;)
        if (c = a.A[b],
        1 === c.I || 2 === c.I)
            return !0;
    return !1
}

function Nk(a, b) {
    for (var c = a.A.length, d; c--;)
        if (d = a.A[c],
        d.N && 1 !== d.N[0] && (!b || !Mi(d)))
            return d.N;
    return null
}

function Ok(a, b, c, d) {
    var e = a.F, f = a.J, g = Zh(f), h = f.track.A, k = a.ea, l = a.fa, m = a.D, n = c.sa, p = 0, q = 0, r = !1,
        u = !(!c.K.ha || !c.K.ha.Ma), v = 1, w = 1, y = 0, x, z, C;
    for (x = f.A.length; x--;) {
        var F = f.A[x];
        for (z = F.length; z--;) {
            var H = F[z];
            if (H.F === e) {
                if (!m && !H.D || H.fa === l)
                    for (C = H.A.length; C--;) {
                        var N = H.A[C];
                        c !== N && x === k && (n < N.sa ? w++ : v++);
                        x === k && (q++,
                        (Kj(N) || Jj(N, b, !1)) && p++);
                        if (N.V || tj(N) || uj(N) || Mi(N))
                            r = !0;
                        Ki(N) && (u = !0)
                    }
            } else if (Te(e, H.F))
                break
        }
    }
    g ? a = h && yj(c) ? 1 === h ? 2 : 1 : a.G ? 1 : 2 : p === q && (h || 2 >= q) ? a = h ? yj(c) ? 1 === h ? 2 : 1 : 1 === h ? 1 : 2 : a.G ? 2 : 1 : r && u ? a = 1 : -1 <= c.sa && 7 >= c.sa ? (a = r ? 4 : 3,
        y = 1 === w && 1 < v ? 3 : 1 === v && 1 < w ? 1 : 2) : a = r ? 4 : 3;
    d.position = a;
    d.C = y
}

function Pk(a, b, c, d) {
    if (a.oa)
        return null;
    var e = null;
    a = a.A;
    for (var f = a.length, g; f--;)
        g = a[f],
        !c && yj(g) || null !== d && xj(g) !== d || !(null === e || b && Mj(e, g) || !b && Mj(g, e)) || (e = g);
    return e
}

function Qk(a) {
    a = a.A;
    for (var b = a.length, c = 0, d = 0, e; b--;)
        e = a[b].sa - 3,
            0 > e ? e < d && (d = e) : e > c && (c = e);
    return c > -d ? c : d
}

function Rk(a, b) {
    var c = null
        , d = a.A.length;
    for (b = b ? -1 : 1; d--;)
        if (null === c || a.A[d].ga * b > c * b)
            c = a.A[d].ga;
    return c
}

function Sk(a, b, c) {
    b = b.sa;
    return Kk(a) ? a.G || !c && tk(a) && 4 > b || 2 > b : !a.G || !c && tk(a) && 2 < b || 4 < b
}

function Tk(a, b, c, d) {
    var e = c ? .3 : .4;
    1 === (b.sa & 1) && (b.K.G && 7 > b.sa || !b.K.G && -1 < b.sa) && (e += .5);
    !c && tk(a) && (e += 1);
    return e * d
}

function Uk(a) {
    return a.D ? Math.min(2, Ak(a)) : a.ha.F
}

function Vk(a, b) {
    a = Uk(a);
    if (!a)
        return null;
    --a;
    b || (a += 6);
    return hh[a]
}

function Wk(a, b, c) {
    for (var d = 0, e = a.A.length, f, g; e--;) {
        f = a.A[e];
        g = null;
        if (f.C)
            g = f.C;
        else
            for (; f && Mi(f);)
                if ((f = Ni(f, b)) && f.C) {
                    g = f.C;
                    break
                }
        if (g) {
            f = g;
            g = b;
            var h = c;
            f = null === f.A && null === f.end || f.A >= f.C && f.A >= f.end ? Pi(f, g, 1, h) : f.C >= f.A && f.C >= f.end ? Pi(f, g, 2, h) : Pi(f, g, 3, h);
            f > d && (d = f)
        }
    }
    return d ? d + 2 * c : d
}

class Xk {
    constructor(a, b, c, d, e, f) {
        var g = [];
        this.J = b;
        this.ea = c;
        this.fa = d;
        this.I = null;
        if (f.slur)
            if (d = f.slur,
            "object" == typeof d)
                for (b = 0,
                         c = d.length; b !== c; b++)
                    Yk(a, d[b], null, !1, this);
            else
                Yk(a, d, null, !1, this);
        this.ja = f.pick || null;
        this.F = lf;
        this.P = 0;
        this.Ea = null;
        this.D = f.grace || null;
        this.T = null;
        f.text ? this.T = new Th(f.text, !1, 2, 1.5, null) : f.ot1 && (this.T = Uh(f.ot1, 2, 1.5));
        this.S = null;
        f.text2 ? this.S = new Th(f.text2, !1, 2, 1.5, null) : f.ot2 && (this.S = Uh(f.ot2, 2, 1.5));
        this.Y = f.tt1 ? Uh(f.tt1, 4, 2) : null;
        this.X = f.tt2 ? Uh(f.tt2, 4, 2) : null;
        this.ra = this.ha = null;
        this.Z = lf;
        this.ia = null;
        ak(this, a, e);
        this.W = this.F.add(this.Z);
        this.ta = f.pause || null;
        this.N = f.chord || null;
        null === this.N || bk(this) || (this.N = null);
        this.ba = f.arpeggio || null;
        this.ma = f.brush || null;
        this.ka = f.tremolo || 0;
        this.Ca = f.trembar || null;
        this.H = f.oct || 0;
        this.$ = f.dyn || null;
        this.da = f.barre || null;
        this.wa = f.fading || null;
        this.pa = f.pop ? 2 : f.slap ? 3 : null;
        this.va = f.wb ? new Ui(a, this, f.wb) : null;
        this.M = f.ly || null;
        this.xa = "undefined" === typeof f.tbp ? null : f.tbp;
        this.C = 0;
        1 === f.ca && (this.C |= 1);
        1 === f.pl && (this.C |= 2);
        1 === f.ci && (this.C |= 4);
        1 === f.lr && (this.C |= 8);
        1 === f.pm && (this.C |= 16);
        1 === f.acc && (this.C |= 64);
        1 === f.hacc && (this.C |= 128);
        1 === f.hide && (this.C |= 256);
        1 === f.stac && (this.C |= 512);
        1 === f.sc && (this.C |= 1024);
        1 === f.ten && (this.C |= 2048);
        1 === f.d && (this.C |= 16384);
        f.sd && ck(this, f.sd);
        f.lb && (this.C |= 32768,
        2 === f.lb && (this.C |= 65536));
        if (f.notes)
            for (b = 0,
                     c = f.notes.length; b < c; b++)
                g.push(new Yj(this, f.notes[b]));
        this.A = g;
        this.oa = !1;
        dk(this);
        1 !== f.b || this.ha && !this.oa && !this.ha.nb || (this.C |= 32);
        this.aa = "undefined" === typeof f.s ? null : f.s;
        this.G = !1;
        this.V = 0;
        this.ya = -1
    }
}

Xk.prototype.jb = ha(0);

function Zh(a) {
    return 1 < Zk(a)
}

function aj(a) {
    return Di(a.track, a.I)
}

function Dj(a, b) {
    if (!a.N)
        return a.H;
    for (var c = a.N, d = c.length; d--;)
        if (We(b, c[d].A))
            return c[d].C;
    return a.H
}

function Ej(a) {
    return a.O.A[a.track.index + (1 === a.track.A ? 1 : -1)]
}

function $k(a, b) {
    a = a.A[b];
    b = a.length;
    for (var c = lf; b--;)
        c = c.add(a[b].Z);
    return c
}

function Zk(a) {
    a = a.A;
    for (var b = a.length, c = 0; b--;)
        a[b].length && c++;
    return c
}

function al(a) {
    if (a.P.ka.S && yi(a.track))
        var b = bl(a.O);
    else {
        b = a.track;
        var c = a.P.ka;
        b = ag(fg(tg(a.I), Bi(b, c)))
    }
    a.G = b
}

function cl(a, b, c, d) {
    null === a.N && (a.N = []);
    a = a.N;
    a.push(new Sg(b, c, d));
    a.sort(Kh)
}

function* dl(a) {
    var b = a.A
        , c = b.length;
    if (Zh(a)) {
        var d = lf, e = [], f = [], g, h;
        for (h = c; h--;)
            f[h] = 0;
        for (; ;) {
            h = c;
            var k = null;
            for (g = !1; h--;) {
                var l = b[h];
                a = f[h];
                for (p = l.length; a < p; a++) {
                    var m = l[a];
                    if (!m.oa) {
                        var n = m.F;
                        if (We(n, d)) {
                            null === k || Te(k, n) ? (k = n,
                                g = !!m.D) : n === k && m.D && (g = !0);
                            break
                        }
                    }
                }
            }
            if (null === k)
                break;
            for (h = c; h--;)
                for (l = b[h],
                         a = f[h],
                         p = l.length; a < p; a++)
                    if (m = l[a],
                        !m.oa)
                        if (m.F === k && g === !!m.D) {
                            Array.prototype.push.apply(e, m.A);
                            f[h] = a + 1;
                            break
                        } else if (Te(m.F, k))
                            break;
            e.sort(Jh);
            yield e;
            e = [];
            d = k
        }
    } else {
        a: {
            c = a.A;
            for (a = c.length; a--;)
                if (c[a].length) {
                    c = a;
                    break a
                }
            c = 0
        }
        b = b[c];
        a = 0;
        for (var p = b.length; a !== p; a++)
            b[a].oa || (yield b[a].A)
    }
}

function el(a) {
    return 0 === a.O.U ? null : fl(a.O).A[a.track.index]
}

function gl(a) {
    return a.O.U === a.P.A.length - 1 ? null : hl(a.O).A[a.track.index]
}

function il(a) {
    a = a.D;
    return 1 === a ? 1 : 2 === a || 3 === a ? 2 : 4
}

function jl(a) {
    return a.P.A[a.O.U - il(a)].A[a.track.index]
}

function ul(a) {
    if (a.D)
        return ul(jl(a));
    if (!a.A.length || 1 === a.A.length && 1 === a.A[0].length && a.A[0][0].oa && 1 === a.A[0][0].ra)
        return vl(a.O) ? lf : wl(a.O);
    for (var b = lf, c = a.A.length, d = 1 !== c, e, f, g, h, k; c--;) {
        e = a.A[c];
        f = lf;
        g = 0;
        for (h = e.length; g !== h; g++)
            k = e[g],
                k.fa = g,
                k.F = f,
                k.P = f.qa,
                f = f.add(k.Z),
                k.W = f;
        !Te(f, b) || d && 1 === h && e[0].oa && Te(f, wl(a.O)) || (b = f)
    }
    return b
}

function xl(a, b) {
    if (a.D)
        return xl(jl(a), b);
    a = a.A;
    for (var c = a.length, d = 0, e, f, g, h, k; c--;) {
        e = a[c];
        g = k = 0;
        for (h = e.length; g !== h; g++) {
            f = e[g];
            f.Ea = k;
            var l, m = f, n = Ak(m), p = m.J.O, q = m.ra;
            if (m.D)
                q = .02 / n;
            else if (Bk(m))
                q = p.za.qa;
            else if (p.N) {
                var r = p.N;
                var u = oh[r];
                var v = m;
                do
                    v = Vj(v, b, !1);
                while (v && v.D);
                var w = p.za;
                p = (l = vl(p)) ? Ue(w, m.F) : m.F;
                w = l ? Ue(w, m.W) : m.W;
                if ("t8" === r || "d8" === r || "s8" === r) {
                    var y = Fh;
                    r = Gh;
                    l = Eh
                } else
                    y = Gh,
                        r = Hh,
                        l = Fh;
                Te(m.Z, r) && Xe(p.add(y), l) && (q -= u);
                v && Te(v.Z, r) && Xe(w.add(y), l) && (q += u)
            }
            !m.D && n && (q -= .02);
            m.ia = q;
            k += f.ia
        }
        k > d && (d = k)
    }
    return d
}

function yl(a, b, c) {
    if (a.D)
        return yl(jl(a), b, c);
    a = a.A;
    for (var d = a.length, e, f, g; d--;)
        for (e = a[d],
                 g = e.length; g--;)
            if (f = e[g],
            !f.oa || b && f.N || c && (f.T || f.S))
                return !0;
    return !1
}

function zl(a, b) {
    var c = a.A;
    if (1 !== c.length || 1 !== c[0].length || c[0][0].Z !== b)
        c.length = 0,
            b = Al(a.P, null, b.qa, 0, 0, 0),
            c.push([new Xk(a.P, a, 0, 0, b, {})])
}

function Bl(a) {
    var b = a.C;
    return 0 <= b ? b : a.P.A[a.O.U + b].A[a.track.index].C
}

function Cl(a) {
    var b = a.C;
    return 0 === b ? -1 : a.O.U + (0 > b ? b : 0)
}

class Dl {
    constructor(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        this.P = a;
        this.O = b;
        this.track = c;
        this.I = 0;
        this.I = null !== d ? d : Ci(c, e);
        this.G = 0;
        al(this);
        this.H = Og(f, c.N);
        this.T = c.D ? Og("T", c.I) : null;
        this.N = null;
        if (g)
            for (b = g.length; b--;)
                cl(this, g[b][0], g[b][1], g[b][2]);
        this.S = n;
        this.Ua = p;
        this.C = m;
        this.D = h;
        this.A = [];
        g = 0;
        for (m = k.length; g < m; g++)
            for (p = [],
                     this.A.push(p),
                     n = k[g].length,
                     h = 0; h !== n; h++)
                b = k[g][h],
                    p.push(new Xk(a, this, g, h, "undefined" !== typeof b.r ? b.r : b.rhythm, b));
        this.M = null;
        "undefined" !== typeof l && null !== l && (this.M = l);
        this.F = !0
    }
}

function vl(a) {
    return 0 !== (a.C & 8)
}

function wl(a) {
    return Re(a.M, a.I)
}

function bl(a) {
    var b = 0
        , c = a.P.C;
    a = a.A;
    for (var d = a.length; d--;)
        if (yi(c[d]))
            b = a[d].G;
        else
            return aj(a[d]);
    return b
}

function fl(a) {
    return 0 === a.U ? null : a.P.A[a.U - 1]
}

function hl(a) {
    return a.U === a.P.A.length - 1 ? null : a.P.A[a.U + 1]
}

function El(a) {
    for (var b = a.P.A, c = a.U; c--;)
        if (!b[c].H)
            return !1;
    return !a.H
}

function Fl(a) {
    var b = null, c = null, d;
    for (d of Gl(a)) {
        if (!d.C)
            return 0;
        a = Bl(d);
        var e = Cl(d);
        if (null === b)
            b = a;
        else if (b !== a)
            return 0;
        if (null === c)
            c = e;
        else if (c !== e)
            return 0
    }
    return b || 0
}

function Hl(a) {
    return 0 !== (a.C & 1)
}

function Il(a) {
    return 0 !== (a.C & 2)
}

function Jl(a) {
    return 0 !== (a.C & 16)
}

function Kl(a) {
    return 0 !== (a.C & 256)
}

function Ll(a) {
    return a.U === a.P.A.length - 1
}

function* Gl(a) {
    a = a.A;
    for (var b = a.length; b--;)
        a[b].F && (yield a[b])
}

function Ml(a) {
    for (var b of Gl(a))
        if (0 > b.C)
            return b.C;
    return -1
}

function Nl(a) {
    if (Fl(a))
        for (var b of Gl(a))
            return Cl(b) !== a.U;
    return !1
}

function Ol(a) {
    if (Il(a))
        return !0;
    for (var b = a.P.A, c = a.U - 1; 0 <= c; c--) {
        if (b[c].G)
            return !1;
        if (Il(b[c]))
            return !0
    }
    var d = b.length;
    for (c = a.U; c < d && !Il(b[c]); c++)
        if (b[c].G)
            return !0;
    return !1
}

function Pl(a, b) {
    if (a.F) {
        a = a.F;
        for (var c = a.length; c--;)
            if (a[c].code === b)
                return c
    }
    return -1
}

function Ql(a, b) {
    if (a.F)
        for (var c = b.length, d; c--;)
            if (d = Pl(a, b[c]),
            -1 !== d)
                return a.F[d];
    return null
}

function Rl(a, b, c, d) {
    if (!a.F.length)
        return [-1, 0, !0];
    var e = a.P
        , f = e.A;
    var g = a.U;
    if (19 === b && -1 !== Pl(a, 19) && !dc(d, `${g}-${19}`))
        return [0, 19, !0];
    if ((13 === b || 14 === b) && -1 !== Pl(a, b) && !dc(d, `${g}-${b}`)) {
        var h = Sl(e, a.U, 13 === b ? 15 : 16);
        if (-1 !== h)
            return [h, b, !0]
    }
    if ((b = Ql(a, [1, 2, 3, 4])) && !dc(d, `${g}-${b.code}`)) {
        for (g = 0; f[g].H;)
            g++;
        return [g, b.code, b.A]
    }
    if ((b = Ql(a, [5, 6, 7, 8])) && !dc(d, `${g}-${b.code}`) && (h = Tl(e, a.U, 17),
    -1 !== h) || (b = Ql(a, [9, 10, 11, 12])) && !dc(d, `${g}-${b.code}`) && (h = Tl(e, a.U, 18),
    -1 !== h))
        return [h, b.code, b.A];
    if ((b = Ql(a, [13, 14])) && !dc(d, `${g}-${b.code}`) && (f = 13 === b.code ? 15 : 16,
        h = Sl(e, a.U, f),
    -1 !== h)) {
        var k = 15 === f ? [2, 6, 10] : [3, 7, 11]
            , l = !0
            , m = 0;
        for (g = k.length; g--;) {
            var n = Sl(e, 0, k[g]);
            -1 === n || dc(d, `${n}-${k[g]}`) || (l = !1)
        }
        if (l) {
            k = 15 === f ? [5, 9, 2, 6, 10] : [5, 9, 3, 7, 11];
            for (g = k.length; g--;)
                if (n = Sl(e, 0, k[g]),
                -1 !== n && (m++,
                    dc(d, `${n}-${k[g]}`)))
                    return [h, b.code, !0];
            if (!(d = m) && (d = Ol(a))) {
                a: {
                    d = a.P.A;
                    a = a.U;
                    for (e = d.length; a !== e; a++)
                        if (d[a].G) {
                            a = d[a].G;
                            break a
                        }
                    a = -1
                }
                d = c !== a
            }
            if (!d)
                return [h, b.code, !0]
        }
    }
    return [-1, 0, !0]
}

function Ul(a) {
    if (a) {
        if (2 === a || 6 === a || 10 === a)
            return 13;
        if (3 === a || 7 === a || 11 === a)
            return 14;
        if (4 === a || 8 === a || 12 === a)
            return 19;
        if (1 === a || 5 === a || 9 === a)
            return 1
    }
    return -1
}

function Vl(a) {
    return 0 === a.U ? a.N : fl(a).N !== a.N ? a.N || "n" : null
}

function Wl(a, b) {
    if (!a.N)
        return b;
    var c = a.za.qa;
    b *= c;
    var d = 10, e = null, f, g, h;
    for (f of Gl(a))
        for (g = f.A.length; g--;) {
            var k = f.A[g];
            for (h = k.length; h--;) {
                var l = k[h];
                var m = b - l.P;
                0 <= m && (m < d || m === d && l.ra < e.ra) && (e = l,
                    d = m)
            }
        }
    d = m = c;
    for (f of Gl(a))
        for (g = f.A.length; g--;)
            for (k = f.A[g],
                     h = k.length; h--;)
                l = k[h],
                l.P > e.P && l.P < d && (d = l.P,
                    m = l.Ea);
    return e.Ea / c + (b - e.P) / (d - e.P) * ((m - e.Ea) / c)
}

function Xl(a, b, c) {
    var d = a.A.length, e, f, g;
    for (e = 0; e !== d; e++) {
        var h = a.A[e];
        if (h.track.isVisible()) {
            var k = {};
            for (f of dl(h)) {
                h = 0;
                for (g = f.length; h !== g; h++) {
                    var l = void 0
                        , m = f[h]
                        , n = k
                        , p = c
                        , q = m.H;
                    if (m.K.J.track.T)
                        Zi(m, null),
                            m.V = null;
                    else {
                        var r = m.K
                            , u = r.J.O.A[xj(m).index]
                            , v = m.sa
                            , w = hg(q.A)
                            , y = null;
                        bj(m) || u.H.G || Fj(m) || !(!Mi(m) || p && 0 === r.fa || wj(m)) || (n[v] ? l = n[v] : l = dc(ra[u.G][0], Lf[q.A.A]) ? 0 > u.G ? 3 : 2 : 1,
                        l !== w && (y = w,
                            n[v] = y),
                        wj(m) && (y = w));
                        m.V = y
                    }
                }
                b.length = 0;
                n = f;
                g = b;
                m = n.length;
                for (h = 0; h !== m; h++)
                    l = n[h],
                        l.S = 0,
                    l.V && g.push(l);
                l = g.length;
                if (1 === l)
                    g[0].S = 1;
                else if (2 === l)
                    5 > g[0].sa - g[1].sa ? (g[0].S = 2,
                        g[1].S = 1) : g[0].S = g[1].S = 1;
                else if (3 === l)
                    5 > g[0].sa - g[2].sa ? (g[0].S = 2,
                        g[1].S = 3,
                        g[2].S = 1) : (g[0].S = g[2].S = 1,
                        g[1].S = 5 > g[0].sa - g[1].sa || 5 > g[1].sa - g[2].sa ? 2 : 1);
                else if (3 < l)
                    for (g[l - 1].S = 1,
                             n = g[l - 1].sa,
                             p = 0,
                             q = {
                                 1: n
                             },
                             h = 0,
                             m = l - 1; h < m; h++)
                        for (l = g[h],
                                 r = 1; ; r++)
                            if (("undefined" === typeof q[r] || 5 <= Math.abs(q[r] - l.sa)) && !(1 === r && 5 > l.sa - n)) {
                                l.S = r;
                                q[r] = l.sa;
                                r > p && (p = r);
                                break
                            }
            }
        }
    }
}

function Yl(a) {
    for (var b = a.A, c = a.P, d = b.length, e = d, f = lf, g, h, k, l, m, n, p, q, r, u, v, w; e--;)
        for (h = b[e],
                 g = c.C[e],
                 g.W = h.H.G,
                 w = g.P,
                 g = g.D,
             h.Ua && zl(h, wl(a)),
                 k = ul(h),
             Te(k, f) && (f = k),
                 l = h.A.length; l--;)
            for (m = h.A[l],
                     k = m.length,
                     n = 0; n !== k; n++) {
                p = m[n];
                if (g && (q = c,
                    !Hk(p))) {
                    r = p;
                    u = !1;
                    do {
                        a: {
                            for (var y = r.A, x = y.length; x--;)
                                if (v = y[x],
                                Xi(v) || 4 === v.F) {
                                    v = !0;
                                    break a
                                }
                            v = !1
                        }
                        if (v)
                            u = !0;
                        else if (!Gk(r))
                            break;
                        v = r.D;
                        r = Vj(r, q, !0)
                    } while (r && !v);
                    if (u) {
                        v = r;
                        r = p;
                        u = Yk(q, q.X, null, !0, r);
                        do
                            (r = Vj(r, q, !0)) && Vh(u, r);
                        while (r && r !== v)
                    }
                }
                p.ya = -1;
                if (null !== w)
                    for (q = w.length; q--;)
                        if (r = w[q],
                            u = p.J.O.U,
                        (r.Pa < u || r.Pa === u && Te(p.W, r.ab)) && (r.Na > u || r.Na === u && Te(r.cb, p.F))) {
                            p.ya = q;
                            break
                        }
                q = p.A;
                for (r = q.length; r--;) {
                    u = q[r];
                    u.T && !c.V && (c.V = !0);
                    v = u;
                    x = c.ka;
                    y = v.K;
                    var z = y.J.track
                        , C = y.J.O.A[xj(v).index]
                        , F = Aj(v, c);
                    var H = aj(C);
                    H = Fg(F.M, zi(z, x), H, C.G);
                    z.D && Bj(F) && (H = $i(F, !1, 0 === x.C % 12 ? F.W : null),
                        H = Fg(H, Bi(z, x), C.I, C.G));
                    z.T ? x = -7 * H.C - H.A.A - C.H.C + 35 : (x = -7 * H.C - H.A.A - Cj(v).C + 35,
                    y.H && (x -= 7 * ya[y.H]));
                    v.H = H;
                    v.sa = x;
                    g && (0 !== (u.A & 256) && (p.pa = 1),
                    null === u.I && (v = Uj(u, c, !1),
                    null === v || 4 !== v.F && 3 !== v.F || (u.I = v.F)))
                }
            }
    f === lf && (f = wl(a));
    a.za = f;
    a.W = 0;
    for (e = d; e--;)
        if (h = b[e],
        (h.Ua || 0 === Zk(h)) && zl(h, f),
            k = xl(h, c),
        k > a.W && (a.W = k),
        0 < h.C)
            for (d = c.A,
                     n = 1,
                     k = Math.min(h.C, d.length - a.U); n < k; n++)
                d[a.U + n].A[e].C = -n;
    Xl(a, [], !1);
    a.X = 0
}

class Zl {
    constructor(a, b, c, d, e, f, g, h, k, l, m, n, p, q, r, u, v, w, y, x) {
        this.P = a;
        this.U = b;
        this.V = c;
        this.M = d;
        this.I = e;
        this.C = 0;
        this.G = l;
        this.F = m;
        this.D = p;
        this.N = r;
        this.H = v;
        this.T = w;
        this.S = y;
        this.A = [];
        f && (this.C |= 1);
        1 === g ? this.C |= 32 : 2 === g && (this.C |= 64);
        k && (this.C |= 2);
        n && (this.C |= 4);
        u && (this.C |= 8);
        1 === x ? this.C |= 16 : 2 === x ? this.C |= 128 : 3 === x && (this.C |= 256);
        b = [];
        c = 0;
        for (d = q.length; c < d; c++)
            e = q[c],
                b.push(new Dl(a, this, a.C[c], "undefined" === typeof e.key ? null : e.key, h, e.clef, e.cc || null, e.simile || 0, e.voices, e.t, e.mr || 0, 1 === e.hc, 1 === e.fr));
        this.A = b;
        this.za = lf;
        this.X = this.W = 0
    }
}

function zj(a, b) {
    return a.C[b.index + (1 === b.A ? 1 : -1)]
}

function Yk(a, b, c, d, e) {
    b >= a.X && (a.X = b + 1);
    var f = String(b);
    a.M[f] || (a.M[f] = new $h(b, c, d));
    a = a.M[f];
    e && Vh(a, e);
    return a
}

function Al(a, b, c, d, e, f) {
    d = d || 0;
    if (null !== b)
        return a.I[b] || (a.I[b] = new ai(b, c, d, e, f)),
        b >= a.W && (a.W = b + 1),
            b;
    for (var g in a.I)
        if (b = a.I[g],
        b.value === c && b.Ma === d && b.Za === e && b.fb === f)
            return parseInt(g, 10);
    g = a.W++;
    a.I[g] = new ai(g, c, d, e, f);
    return g
}

function Sl(a, b, c) {
    for (var d, e = a.A.length; b < e;) {
        d = a.A[b];
        if (-1 !== Pl(d, c))
            return b;
        b++
    }
    return -1
}

function Tl(a, b, c) {
    for (var d; -1 !== b;) {
        d = a.A[b];
        if (-1 !== Pl(d, c))
            return b;
        b--
    }
    return -1
}

function $l(a) {
    a = a.G;
    a.length && 0 === a[0].A && 0 === a[0].C || a.splice(0, 0, new Sh(0, 0, 120, 120, 0, "", !1, !0))
}

function am(a, b) {
    if (1 < a.A.length) {
        var c = a.A, d, e, f = !1;
        var g = 1;
        for (d = c.length; g !== d; g++) {
            var h = c[g];
            var k = c[g - 1];
            if (null === h.D && null !== k.D && !k.G)
                for (e = g; e !== d && !Il(c[e]); e++) {
                    if (null !== c[e].D) {
                        Math.min.apply(Math, c[e].D) >= Math.max.apply(Math, k.D) && (h.D = [],
                            ec(k.D, h.D),
                            f = !0);
                        break
                    }
                    if (c[e].G) {
                        h.D = [];
                        ec(k.D, h.D);
                        f = !0;
                        break
                    }
                }
        }
        f && b && bm(a)
    }
}

function cm(a) {
    for (var b = a.A, c = b.length, d = !1, e; c--;)
        if (e = b[c],
        0 !== (e.C & 128) || Kl(e)) {
            d = !0;
            break
        }
    d !== a.da && (a.da = d,
        nf(a.ja, 176))
}

function dm(a) {
    return `/slices/${a.F}/`
}

function em(a) {
    a = a.G;
    return a.length ? a[0].F : 120
}

function fm(a, b, c) {
    var d = a.G
        , e = d.length
        , f = 0;
    if (1 !== e) {
        a = a.D;
        var g, h;
        for (g = 0; g !== b + 1; g++) {
            var k = a[g];
            for (h = 0; h !== e; h++) {
                var l = d[h];
                l.A === k && (g === b && l.C <= c || g !== b) && (f = h)
            }
        }
    }
    return f
}

function gm(a) {
    a = a.C;
    for (var b = a.length; b--;) {
        var c = a[b];
        if (0 !== c.Qa % 12 || yi(c))
            return !0
    }
    return !1
}

function hm(a, b, c) {
    for (a = a.C; c && b-- || !c && ++b < a.length;)
        if (a[b].isVisible())
            return a[b];
    return null
}

function im(a) {
    a = a.C;
    for (var b = a.length; b--;)
        if (a[b].C && (a[b].F || 1 === a[b].A && b < a.length - 1 && a[b + 1].C))
            return !0;
    return !1
}

function jm(a) {
    a = a.A;
    var b;
    var c = 0;
    for (b = a.length; c !== b; c++)
        Yl(a[c])
}

function bm(a) {
    var b = a.D;
    a = a.A;
    var c = a.length;
    b.length = 0;
    if (c)
        for (var d = 0, e = [], f = 1, g = -1, h = -1, k = !0, l = {}, m, n; d < c;) {
            n = a[d];
            m = n.D;
            (null === m || dc(m, f) || -1 !== g && 20 !== g) && b.push(d);
            Il(n) && 20 !== g && (f = 1);
            g = -1;
            if (n.F) {
                if (m = Rl(n, h, f, e),
                19 === m[1])
                    break
            } else
                m = [-1, 0, !0];
            if (k && n.G && (l[d] || (l[d] = 0),
            l[d] < n.G - 1)) {
                l[d]++;
                a: {
                    d = n.P.A;
                    n = n.U + 1;
                    for (g = 0; n--;) {
                        if (Il(d[n])) {
                            d = n;
                            break a
                        }
                        d[n].H || (g = n)
                    }
                    d = g
                }
                f++;
                g = 20;
                continue
            }
            if (n.F && (-1 !== h && -1 !== Pl(n, h) && (h = -1,
                k = !0),
            -1 !== m[0])) {
                e.push(`${d}-${m[1]}`);
                d = m[0];
                h = Ul(m[1]);
                f = null === a[d].D ? 1 : a[d].D[0];
                k = m[2];
                l = {};
                g = m[1];
                continue
            }
            d++
        }
}

function km(a, b, c, d) {
    if (b >= a.D.length)
        return 0;
    var e = a.A[a.D[b]]
        , f = !c && 1 === d;
    if (f && e.X)
        return e.X;
    var g = a.G;
    a = fm(a, b, c);
    b = g[a];
    var h = 60 / b.F * 480 / b.D * e.W * (d - c);
    if (1 !== g.length)
        for (var k = e.U, l = g.length, m = 0, n; m !== l; m++)
            n = g[m],
            m !== a && n.A === k && n.C > c && n.C < d && (c = n.C,
                h -= 60 / b.F * 480 / b.D * e.W * (d - c),
                b = n,
                h += 60 / b.F * 480 / b.D * e.W * (d - c));
    f && (e.X = h);
    return h
}

function lm(a, b, c) {
    var d = c.J.O;
    return km(a, b, c.Ea / d.W, (c.Ea + c.ia) / d.W)
}

function mm(a, b, c, d) {
    var e = lm(a, b, c.K);
    if (Ki(c)) {
        var f = Li(c, a, 1);
        !f || d && f.C && 4 !== f.C.F || (e += mm(a, b + (f.K.J.O === c.K.J.O ? 0 : 1), f, d))
    }
    tk(c.K) && (e *= .25);
    return e
}

class nm {
    constructor(a, b) {
        this.ja = a;
        this.ka = b;
        this.ma = 0;
        this.N = this.H = this.F = this.Z = "";
        this.S = 0;
        this.Y = !0;
        this.ia = this.$ = 1;
        this.T = "";
        this.P = !1;
        this.aa = !0;
        this.pa = 1;
        this.I = {};
        this.A = [];
        this.C = [];
        this.G = [];
        this.M = {};
        this.D = [];
        this.da = this.V = this.ba = !1;
        this.X = this.W = 1
    }
}
;var om = [null, 57953, 57954, 57952, 57955, 57956, 57957, 57958]
    , pm = [57472, 57473, 57474, 57475, 57476, 57477, 57478, 57479, 57480, 57481]
    , qm = [59520, 59521, 59522, 59523, 59524, 59525, 59526, 59527, 59528, 59529]
    , rm = Math.log(2);

function sm(a, b) {
    a = a.K;
    b = b.K;
    return a.J.track !== b.J.track ? a.J.track.index - b.J.track.index : a.ea !== b.ea ? a.ea - b.ea : a.fa - b.fa
}

function tm(a) {
    return "-" === a.charAt(a.length - 1)
}

function um(a) {
    return tm(a) ? a.substring(0, a.length - 1) : a
}

function vm(a, b, c) {
    for (var d = 0, e; b--;)
        if (e = c[b],
            e.H) {
            d += e.N;
            break
        } else if (null !== e.D[a]) {
            d += e.width - e.D[a].T;
            break
        } else
            d += e.width;
    return d
}

function wm(a, b, c) {
    var d = a[0].F, e, f = d;
    var g = 0;
    for (e = a.length; g < e; g++)
        a[g].F = f,
            f += xm(a[g], b, c);
    return f - d
}

function ym(a, b) {
    a = a.toString();
    for (var c = 0, d = a.length; c !== d; c++)
        b.push(pm[parseInt(a[c], 10)])
}

function zm(a, b, c) {
    nf(a.Ga, b, c)
}

function Am(a) {
    return !a.S && !a.da && !a.W && !a.Y && !a.Da
}

function Bm(a, b, c) {
    a.S || Cm(a) || (96 < b ? b = 96 : 5 > b && (b = 5));
    if (b === a.M && c && b === a.ma)
        return !1;
    c && (a.ma = b);
    a.M = b;
    a.A = b / 4;
    Cm(a) && Dm(a);
    zm(a, 55, b - 36);
    return !0
}

function Dm(a) {
    var b = 5 === a.F ? 28 : 0;
    if (Cm(a)) {
        var c = Em(a, !1);
        b = Math.max(4 * a.A, b);
        c = Math.ceil(c + b + b > a.H ? b : (a.H - c) / 2)
    } else
        c = .05 * a.H;
    b = Math.max(b, c);
    a.ba !== b && (a.ba = b,
        zm(a, 173))
}

function Fm(a, b) {
    if (0 !== (a.ya.status=3 & 1) || a.S) {
        a.Fa = !1;
        if (a.S) {
            var c = a.S.A;
            var d = a.D.A, e = a.G, f = a.aa, g = 0, h = 0, k = 0, l = 0, m = a.M, n, p, q, r;
            var u = e.length = 0;
            for (n = c.length; u !== n; u++) {
                var v = c[u];
                v.width > h && (h = v.width * m);
                var w = 0;
                for (p = v.C.length; w !== p; w++) {
                    var y = v.C[w];
                    var x = f[k];
                    x || (x = new Gm(a),
                        f.push(x));
                    x.U = k;
                    x.width = y.width * m;
                    x.height = y.height * m;
                    x.H = y.x * m;
                    x.M = g + y.y * m;
                    var z = [];
                    var C = 0;
                    for (q = y.A.length; C !== q; C++) {
                        var F = y.A[C];
                        var H = new Hm(a, d[l], l++, 0);
                        H.I = 0 === C;
                        H.C = k;
                        H.F = F.x * m;
                        H.naturalWidth = F.width * m;
                        H.width = F.width * m;
                        H.height = x.height;
                        var N = lf;
                        var Q = 0;
                        for (r = F.A.length; Q !== r; Q++) {
                            var L = F.A[Q];
                            var G = Im(H, Q);
                            Jm(G, 20, N, L.width * m, 0, !0, 0);
                            G.A = (L.x - F.x) * m;
                            G.width = L.width * m;
                            G.duration = L.duration;
                            N = N.add(L.duration)
                        }
                        H.H = F.A.length;
                        z.push(H);
                        e.push(H)
                    }
                    x.A = z;
                    k++
                }
                g += v.height * m
            }
            f.length > k && (f.length = k);
            a.X = g;
            a.N = h;
            c = !0
        } else if (a.Y) {
            r = a.D;
            c = r.D;
            d = c.length;
            e = r.A;
            f = a.aa;
            g = a.G;
            h = 2 === a.F;
            l = k = 0;
            m = a.ba;
            u = a.C.M ? 30 : 40;
            w = [];
            C = [];
            Q = 0;
            n = {};
            p = 0;
            g.length = 0;
            if (d) {
                a: {
                    q = r.A;
                    r = r.C;
                    v = r.length;
                    for (y = q.length; y--;)
                        for (z = q[y].A,
                                 F = v; F--;)
                            if (r[F].M)
                                for (H = z[F].A,
                                         L = H.length; L--;)
                                    for (G = H[L],
                                             x = G.length; x--;)
                                        if (wk(G[x])) {
                                            q = !0;
                                            break a
                                        }
                    q = !1
                }
                for (r = 0; r !== d; r++) {
                    v = e[c[r]];
                    L = n[v.U] || 0;
                    z = r === d - 1;
                    if (h)
                        F = new Hm(a, v, l++, L),
                            Km(F, 0 === r, z, 0, !0),
                            F.C = 0,
                            F.F = m + Q,
                            w.length = 0,
                            Lm(F, w, null, !1),
                            Q += F.width,
                            C.push(F),
                            g.push(F);
                    else
                        for (x = null; ;)
                            if (F = new Hm(a, v, l++, L),
                                Km(F, !1, !1, a.H, !0),
                                F.C = k,
                                F.F = m + Q,
                                w.length = 0,
                                x = Lm(F, w, x, !0),
                                Q += F.width,
                                C.push(F),
                                g.push(F),
                            !q && F.width || null !== x || z) {
                                if (y = f[k],
                                y || (y = new Gm(a),
                                    f.push(y)),
                                    Mm(y, k++, Q, 0, C, 0, 0, m, u, 0, 0),
                                Q > p && (p = Q),
                                    u += y.height,
                                    Q = 0,
                                    C = [],
                                !q && F.width || null === x && z)
                                    break
                            } else
                                break;
                    n[v.U] = L + 1
                }
                h ? (y = f[k],
                y || (y = new Gm(a),
                    f.push(y)),
                    Mm(y, k++, Q, 0, C, 0, 0, m, u, 0, 0),
                    u += y.height,
                    a.N = m + Q + m) : a.N = m + p + m;
                a.X = u + 40
            } else
                a.X = 0,
                    a.N = 0;
            f.length > k && (f.length = k);
            c = !0
        } else
            a.M < a.ma && Bm(a, a.ma, !0),
                c = Nm(a);
        c && (a.Fa = !0,
            zm(a, 35),
            nf(a.ia, 199, b),
        !a.Ca && a.G.length && 7 === a.ya.status && (a.Ca = !0,
            zm(a, 146)))
    }
}

function Om(a, b) {
    a.F !== b && (a.F = b,
        a.Z = 0,
        a.$ = 0,
        Bm(a, a.va || a.ma, !1),
        Dm(a),
        Fm(a, !0),
        zm(a, 31),
        nf(a.ia, 200))
}

function Pm(a, b) {
    b !== a.C.da && (a.C.da = b,
        zm(a, 169),
        Fm(a, !0))
}

function dn(a, b) {
    b !== a.C.F && (a.C.F = b,
        zm(a, 170),
        Dm(a),
        en(a, a.H, a.P),
        Fm(a, !0))
}

function fn(a) {
    return a.C.da && a.D.da && (4 === a.F || 5 === a.F)
}

function en(a, b, c) {
    var d = a.H !== b || a.P !== c
        , e = b < a.H
        , f = a.M
        , g = a.ma;
    if (Cm(a) && !a.S) {
        if (a.H = b,
            a.P = c,
            f = Em(a, !0),
            c = a.va,
            e = !1,
            f > b ? (c || (a.va = g),
                e = gn(a, g * b / f, !0)) : f < b && c && (b = Math.min(c, g * b / f),
                e = gn(a, b, !0),
            b >= c && (a.va = 0)),
        !e && d && (Dm(a),
            Fm(a, !0)),
        e || d)
            zm(a, 49),
                nf(a.ia, 198)
    } else
        d && (a.H = b,
            a.P = c,
            Dm(a),
            !e && f < g ? gn(a, g, !1) : Fm(a, !0),
            zm(a, 49),
            nf(a.ia, 198))
}

function Cm(a) {
    return !a.C.F && (4 === a.F || 5 === a.F)
}

function hn(a) {
    return !!a.S || 2 === a.F || 4 === a.F && !a.C.F
}

function jn(a) {
    return a.C.aa && 2 === a.F && a.da
}

function kn(a, b) {
    ln(a, (b * a.N - a.H / 2) / (a.N - a.H))
}

function mn(a, b, c) {
    if (b !== a.C.aa) {
        var d = (a.H / 2 - nn(a)) / a.N;
        a.C.aa = b;
        c && (Fm(a, !0),
            kn(a, d));
        zm(a, 166)
    }
}

function on(a, b, c) {
    var d = a.C;
    if (b !== d.ma) {
        var e = (a.H / 2 - nn(a)) / a.N;
        d.ma = b;
        c && d.aa && (Fm(a, !0),
            kn(a, e));
        zm(a, 165)
    }
}

function pn(a, b) {
    a.C.P !== b && (a.C.P = b,
        Fm(a, !0),
        zm(a, 116))
}

function qn(a, b) {
    a.C.W !== b && (a.C.W = b,
        a.pa = 1 === b || 2 === b,
        a.ra = 2 === b,
        Fm(a, !0))
}

function rn(a, b) {
    if (b !== a.C.S) {
        var c = a.D.A, d = a.D.C.length, e = c.length, f = 0, g;
        for (a.C.S = b; f !== e; f++) {
            b = c[f];
            for (g = d; g--;)
                al(b.A[g]);
            Yl(b)
        }
        Fm(a, !0);
        zm(a, 71)
    }
}

function sn(a, b) {
    if (12 < b || -12 > b)
        return !1;
    if (0 <= b)
        return !0;
    var c = a.D.C;
    a = a.D.A;
    for (var d = c.length, e, f, g, h, k, l, m, n, p; d--;)
        if (c[d].D)
            for (e = c[d].H,
                     f = Math.min.apply(null, e),
                     g = a.length; g--;)
                for (h = a[g].A[d].A,
                         k = h.length; k--;)
                    for (l = h[k].length; l--;)
                        for (m = h[k][l].A,
                                 n = m.length; n--;)
                            if (p = m[n],
                            e[p.$] + p.ba + b < f)
                                return !1;
    return !0
}

function tn(a, b) {
    a.C.H !== b && (a.C.H = b,
        Fm(a, !0),
        zm(a, 190))
}

function un(a) {
    return !a.T && !a.C.A && !fn(a)
}

function vn(a) {
    return a.C.va && un(a)
}

function wn(a) {
    return a.C.T && 2 !== a.F && !a.C.A
}

function xn(a, b) {
    return a.V !== b && 0 <= b && b < a.ta ? (a.V = b,
        zm(a, 171),
        nf(a.ia, 201),
        !0) : !1
}

function yn(a) {
    for (var b = a.D.C.length; b--;)
        if (zn(a, b, !1, !1, !0))
            return !0;
    return !1
}

function An(a) {
    return a.C.V && yn(a)
}

function zn(a, b, c, d, e) {
    a = Bn(a);
    for (var f = a.length, g, h, k, l, m; f--;)
        if (g = a[f].A[b])
            for (g = g.A,
                     h = g.length; h--;)
                for (k = g[h],
                         l = k.length; l--;)
                    if (m = k[l],
                    c && m.N || d && m.N && bk(m).A || e && m.M)
                        return !0;
    return !1
}

function Cn(a) {
    for (var b = a.D.C, c = b.length; c--;)
        Dn(a, b[c], !0);
    En(a)
}

function Fn(a, b) {
    b && !yn(a) && (b = !1);
    b !== a.C.Z && (a.C.Z = b,
        Cn(a),
        zm(a, 156))
}

function Bn(a) {
    var b = a.D.A;
    a.C.A && (b = b.slice(a.ka, a.ja));
    return b
}

function* Gn(a, b) {
    a = Bn(a);
    for (var c = a.length, d, e, f, g, h, k; c--;)
        if (d = a[c].A[b])
            for (d = d.A,
                     e = d.length; e--;)
                for (f = d[e],
                         g = f.length; g--;)
                    for (h = f[g].A,
                             k = h.length; k--;)
                        yield h[k]
}

function Hn(a, b) {
    for (var c of Gn(a, b))
        if (c.D || c.G)
            return !0;
    return !1
}

function In(a, b) {
    for (var c of Gn(a, b))
        if (c.T)
            return !0;
    return !1
}

function Jn(a, b) {
    a = a.G;
    for (var c = 0, d = a.length; c < d; c++)
        if (a[c].O === b)
            return a[c];
    return null
}

function Kn(a, b) {
    if (vn(a))
        return a = a.G,
            b < a.length ? a[b] : null;
    var c = a.D
        , d = c.D;
    return b < d.length && c.A.length > d[b] ? Jn(a, c.A[d[b]]) : null
}

function Ln(a, b, c, d) {
    var e = a.D;
    var f = e.D;
    var g = e.A, h = -1, k;
    if (b < f.length) {
        h = 0;
        var l = g[f[b]].U;
        for (k = 0; k !== b; k++)
            g[f[k]].U === l && h++
    }
    f = h;
    if (a.Y)
        for (g = a.G,
                 e = e.A[e.D[b]],
                 b = e.U,
                 c *= e.za.qa,
                 h = 0,
                 l = g.length; h !== l; h++) {
            if (e = g[h],
                k = e.D,
            e.O.U === b && e.N === f && (!k.length || k[0].K.F.qa <= c && k[k.length - 1].K.W.qa >= c)) {
                d.set(a, h, k.length ? (c - k[0].K.F.qa) / (k[k.length - 1].K.W.qa - k[0].K.F.qa) : 0, null, !1, !1, !1, 0, -1);
                break
            }
        }
    else
        e = Kn(a, b),
            d.set(a, e ? e.index : -1, c, null, !1, !1, !1, 0, vn(a) ? -1 : f)
}

function nn(a) {
    var b = a.N - a.H;
    return 0 >= b ? 0 : -Math.floor(a.Z * b)
}

function Mn(a) {
    var b = a.X - a.P;
    return 0 >= b ? 0 : -Math.floor(a.$ * b)
}

function gn(a, b, c) {
    var d = (a.H / 2 - nn(a)) / a.N;
    if (b = Bm(a, b, c))
        Fm(a, !0),
        hn(a) && kn(a, d);
    return b
}

function Em(a, b) {
    return a.ma * Math.ceil(a.C.$ / 4) + (b ? 8 * a.A : 0)
}

function ln(a, b) {
    hn(a) ? 0 > b ? b = 0 : 1 < b && (b = 1) : b = 0;
    b === a.Z || a.H > a.N || (a.Z = b,
        zm(a, 30),
        nf(a.ia, 197))
}

function Nn(a, b) {
    0 > b ? b = 0 : 1 < b && (b = 1);
    b === a.$ || a.P > a.X || (a.$ = b,
        zm(a, 73),
        nf(a.ia, 196))
}

function On(a, b) {
    var c = a.C;
    b !== c.$ && (c.$ = b,
    Cm(a) && (Dm(a),
        en(a, a.H, a.P),
        Fm(a, !0)),
        zm(a, 172))
}

function Pn(a, b) {
    var c = 0;
    if (b && a.pa || !b && a.ra)
        for (var d = a.D.C, e = a.A, f = d.length; f--;)
            d[f].isVisible() && (c = Math.max(c, e + a.I.width(2 * a.A, 4, b ? d[f].name : si(d[f]), !1, !1)));
    return c
}

function Qn(a) {
    if (Cm(a)) {
        var b = Em(a, !1);
        hn(a) || (b = Math.min(b, a.H - 2 * a.ba))
    } else
        b = a.H - 2 * a.ba;
    return b
}

function Rn(a, b, c, d, e) {
    var f = a.A;
    if (e && (d && b < c - f / 2 || !d && b > c + a.M + f / 2))
        return b;
    a = c + f * Math.round((b - c) / f);
    Math.abs(b - a) < .26 * f && (b = d ? a - f / 2 : a + f / 2);
    return b
}

function Sn(a) {
    var b = Qn(a);
    return b / Math.pow(2, Math.floor(Math.log(b / (20 * a.A)) / rm)) | 0
}

function Tn(a, b) {
    b = b ? 1.8 : 1.6;
    if (a.K.D || 0 !== (a.A & 512))
        b *= .9;
    return b
}

function Un(a, b, c, d) {
    return a.I.width(Tn(b, d) * a.A, 3, c.text, !0, d)
}

function Vn(a, b) {
    return Ff(a.I, a.M, b)
}

function Wn(a, b) {
    var c = Vn(a, om[b.V]);
    1 === wj(b) && (c += 1.4 * a.A);
    return c * Hj(b)
}

function Xn(a, b) {
    var c = a.I;
    a = a.M;
    for (var d = 0, e = b.length; e--;)
        d += Ff(c, a, b[e]);
    return d
}

function Yn(a, b) {
    return a.I.width(b.A * a.A, b.C, b.text, !1, b.D)
}

function Zn(a, b) {
    return a.C.A ? a.ka <= b && b < a.ja : !0
}

function $n(a, b, c, d) {
    if (!b.C && !a.S)
        return 0;
    b = ao(b);
    return (b.M - a.A + (2 === c ? 0 : 1 === c ? b.height - d : (b.height - d) / 2)) / (a.X - d)
}

function bo(a, b, c) {
    var d = a.D, e = 0, f;
    if (Mi(c)) {
        var g = Aj(c, d);
        (f = Ni(c, d)) && Zn(a, f.K.J.O.U) && (b -= f.K.J.O === c.K.J.O ? 0 : 1,
            e += lm(d, b, f.K) + bo(a, b, f));
        g && tk(g.K) && Zn(a, g.K.J.O.U) && (e /= .25)
    }
    return e
}

function co(a) {
    var b = a.D;
    jm(b);
    bm(b);
    Fm(a, !0);
    a: {
        var c = b.C;
        for (var d = c.length; d--;)
            if (!c[d].W) {
                c = !1;
                break a
            }
        c = !0
    }
    if (!c) {
        zm(a, 26);
        d = c = !1;
        b = b.C;
        for (var e = b.length; e--;)
            b[e].ja && (d = !0),
            b[e].D && (c = !0);
        c && zm(a, 27);
        d && zm(a, 29)
    }
}

function eo(a, b, c) {
    var d = !0;
    if (2 === c || 3 === c)
        d = null !== b.H && 0 !== b.H.length;
    else if (4 === c)
        d = zn(a, b.index, !0, !1, !1);
    else if (5 === c)
        d = zn(a, b.index, !1, !0, !1);
    else if (6 === c)
        d = zn(a, b.index, !1, !1, !0);
    else if (7 === c)
        d = Hn(a, b.index);
    else if (8 === c)
        d = In(a, b.index);
    else if (9 === c)
        d = null !== a.C.D;
    else if (10 === c)
        a: {
            b = Bn(a);
            c = b.length;
            a = a.D.C.length;
            for (var e, f, g, h, k, l, m; c--;)
                for (d = a; d--;)
                    if ((e = b[c].A[d]) && e.F)
                        for (e = e.A,
                                 f = e.length; f--;)
                            for (g = e[f],
                                     h = g.length; h--;) {
                                k = g[h];
                                if (k.T && k.T.color || k.S && k.S.color || k.Y && k.Y.color || k.X && k.X.color) {
                                    d = !0;
                                    break a
                                }
                                k = k.A;
                                for (l = k.length; l--;)
                                    if (m = k[l],
                                    m.color || m.D && m.D.color || m.G && m.G.color) {
                                        d = !0;
                                        break a
                                    }
                            }
            d = !1
        }
    return d
}

function En(a) {
    for (var b = a.D, c = b.C, d = c.length, e = !1, f = !1, g = !1, h = a.Y, k; d--;) {
        k = c[d];
        if (k.C || k.F && eo(a, k, 2))
            e = !0;
        k.M && eo(a, k, 6) && (f = !0);
        k.ba && eo(a, k, 4) && (g = !0)
    }
    a.W = !e && g && !f;
    a.Y = !e && !g && f;
    a.Da = !e && g && f;
    a.da = e;
    jm(b);
    Fm(a, !0);
    h !== a.Y && zm(aaa, 42);
    zm(a, 72)
}

function Dn(a, b, c) {
    var d = a.C.Z
        , e = b.Fa || !b.Oa;
    b.C = e && b.ra && !d;
    b.F = e && b.V && eo(a, b, 2) && !d;
    b.La = b.F && b.va;
    b.ba = e && b.aa && eo(a, b, 4) && !d;
    b.ia = e && b.$ && eo(a, b, 5) && !d;
    b.M = e && b.ka && eo(a, b, 6);
    b.Xa = e && b.da && !d && eo(a, b, 7);
    b.Ya = e && b.ta && !d && eo(a, b, 8);
    c || En(a)
}

function fo(a, b, c) {
    c !== b.ra && (b.ra = c,
        Dn(a, b, !1))
}

function go(a, b, c, d) {
    d && !c && (d = !1);
    if (c !== b.V || d !== b.va)
        b.V = c,
            b.va = d,
            Dn(a, b, !1)
}

function ho(a, b, c, d) {
    if (c !== b.aa || d !== b.$)
        b.aa = c,
            b.$ = d,
            Dn(a, b, !1)
}

function io(a, b, c) {
    c !== b.ka && (b.ka = c,
        Dn(a, b, !1))
}

function jo(a, b, c) {
    c !== b.da && (b.da = c,
        Dn(a, b, !1))
}

function ko(a, b, c) {
    c !== b.ta && (b.ta = c,
        Dn(a, b, !1))
}

function lo(a, b, c) {
    if (c !== b.Ka) {
        var d = a.D
            , e = d.C
            , f = e.length;
        if (b.Ka = c)
            for (; f--;)
                f !== b.index && (e[f].Ta = !0);
        else {
            a: {
                b = d.C;
                for (c = b.length; c--;)
                    if (b[c].Ka) {
                        b = !0;
                        break a
                    }
                b = !1
            }
            if (!b)
                for (; f--;)
                    e[f].Ta = !1
        }
        zm(a, 59)
    }
}

function mo(a, b, c) {
    for (var d = a.D.C, e = d.length; e--;) {
        var f;
        (f = !c) || (f = d[e],
            f = f.Fa || !f.Oa);
        if (f && eo(a, d[e], b))
            return !0
    }
    return !1
}

function no(a, b) {
    for (var c = a.D.C, d = c.length; d--;) {
        var e;
        if (e = eo(a, c[d], b)) {
            e = c[d];
            var f = !0;
            1 === b ? f = e.ra : 2 === b ? f = e.V : 3 === b ? f = e.va : 4 === b ? f = e.aa : 5 === b ? f = e.$ : 6 === b ? f = e.ka : 7 === b ? f = e.da : 8 === b && (f = e.ta);
            e = f
        }
        if (e)
            return !0
    }
    return !1
}

function oo(a) {
    var b = {};
    b[1] = no(a, 1);
    b[2] = no(a, 2);
    b[3] = no(a, 3);
    b[4] = no(a, 4);
    b[5] = no(a, 5);
    b[6] = no(a, 6);
    b[7] = no(a, 7);
    b[8] = no(a, 8);
    b[10] = a.C.H;
    b[9] = a.C.P;
    return b
}

function po(a, b, c) {
    for (var d = a.D.C, e = d.length, f, g; e--;) {
        f = d[e];
        var h = (g = -1 !== fc(c, e)) && (!b || !!b[2])
            , k = g && (!b || !!b[3])
            , l = g && (!b || !!b[4])
            , m = g && (!b || !!b[5])
            , n = g && (!b || !!b[6])
            , p = g && (!b || !!b[7])
            , q = g && (!b || !!b[8]);
        f.ra = g && (!b || !!b[1]);
        f.V = h;
        f.va = k;
        f.aa = l;
        f.$ = m;
        f.ka = n;
        f.da = p;
        f.ta = q
    }
    b && (pn(a, !!b[9]),
        tn(a, !!b[10]));
    Cn(a)
}

function qo(a, b, c) {
    var d = a.G, e = d.length, f = 10 * a.A, g;
    if (2 === a.F)
        for (g = e; g--;)
            d[g].C = 0,
                Km(d[g], 0 === g, g === e - 1, 0, !1);
    else {
        var h = fn(a), k = Qn(a), l = 0, m = 0, n = 0, p = !1, q;
        for (g = 0; g !== e; g++) {
            var r = d[g];
            var u = g === e - 1;
            var v = k;
            b && 0 === m && (v -= f);
            c && u && (v -= f);
            0 === m && a.pa ? v -= Pn(a, !0) : m && a.ra && (v -= Pn(a, !1));
            if (q = !Km(r, 0 === l, !0, v, !1))
                return qo(a, b, c);
            u = h && Kl(r.O);
            q = 0 !== g & (Jl(r.O) || h && 0 !== (r.O.C & 128));
            q = !q && l + r.naturalWidth <= v;
            if (0 === g || q || u) {
                if (0 !== g) {
                    var w = d[g - 1];
                    l -= w.naturalWidth;
                    if (q = !Km(w, w.I, !1, v, !1))
                        return qo(a, b, c);
                    l += w.naturalWidth
                }
                u || (p = !0)
            } else {
                if (q = !Km(r, !0, !0, v, !1))
                    return qo(a, b, c);
                m++;
                l = 0;
                n = g;
                p = !1
            }
            r.C = m;
            l += r.naturalWidth;
            if (l > v) {
                if (p) {
                    u = -1;
                    for (q = g - 1; 1 <= q && d[q - 1].C === m; q--)
                        if (!Kl(d[q].O)) {
                            u = q;
                            break
                        }
                    if (-1 !== u) {
                        g = u - 1;
                        m++;
                        l = 0;
                        p = !1;
                        continue
                    }
                }
                r = r.P - 100;
                for (u = d.slice(n, g + 1); 1800 <= r && l > v;)
                    l = wm(u, !0, r),
                        r -= 100;
                if (!(l <= v) && 5 < a.M)
                    return Bm(a, a.M - 1, !1),
                        qo(a, b, c)
            }
        }
    }
}

function Nm(a) {
    var b = a.D
        , c = a.C
        , d = a.G
        , e = Bn(a)
        , f = b.D
        , g = a.aa
        , h = vn(a)
        , k = h ? f.length : e.length
        , l = 2 === a.F
        , m = a.xa
        , n = a.wa
        , p = 0;
    d.length = 0;
    if (k && !Am(a)) {
        var q = {}, r;
        for (r = 0; r !== k; r++) {
            var u = h ? e[f[r]] : e[r];
            var v = q[u.U] || 0;
            d.push(new Hm(a, u, r, v));
            q[u.U] = v + 1
        }
        qo(a, !!m, !!n);
        e = a.W;
        f = Qn(a);
        h = [];
        q = a.ba;
        u = 10 * a.A;
        v = Pn(a, !0);
        var w = Pn(a, !1), y = q + v + (m ? u : 0), x = 0, z = a.C.M ? 30 : 40, C;
        wn(a) && (z += 9.2 * a.A);
        for (r = 0; r <= k; r++) {
            if ((C = r === k) || d[r].C !== p) {
                var F = g[p];
                F || (F = new Gm(a),
                    g.push(F));
                var H = 0;
                0 === p && a.pa ? H += v : p && a.ra && (H += w);
                m && 0 === p && (H += u);
                n && C && (H += u);
                y = f - H;
                var N = !0;
                l ? N = !1 : e ? N = !C || y - x < h[h.length - 1].naturalWidth : C && (N = !p || x >= y / 2 || h.length >= g[p - 1].A.length);
                Mm(F, p++, x, H, h, 1 === p ? m : 0, C ? n : 0, q, z, 1 === p ? v : w, N ? y : 0);
                z += F.height;
                h = [];
                x = 0;
                y = q + w
            }
            C || (C = d[r],
                h.push(C),
                x += C.naturalWidth,
                C.F = y,
                y += C.naturalWidth)
        }
        a.N = q + q + (l ? g[0].width : f);
        a.X = z - 2.5 * a.A + 40;
        if (!(c = l && c.ya && a.X > a.P && 5 < a.M && Bm(a, a.M - 2, !1)) && (c = 5 === a.F)) {
            a: {
                c = p;
                d = a.P;
                k = a.C.M ? 30 : 40;
                l = k + k;
                m = 0;
                n = a.aa;
                f = e = r = 0;
                for (h = k; e !== c; e++) {
                    !e && wn(a) && (f += 9.2 * a.A,
                        h += f);
                    q = n[e].height;
                    u = ro(n[e]);
                    if (k + f + q - u > d && 5 < a.M) {
                        Bm(a, a.M - 2, !1);
                        c = !1;
                        break a
                    }
                    !m || l + f + q - u <= d || (r++,
                        l = k + k,
                        m = 0,
                        h = k);
                    n[e].ma = h;
                    n[e].F = r;
                    l += q;
                    m += 1;
                    h += q
                }
                a.ta = r + 1;
                a.V >= a.ta && xn(a, r - 1);
                zm(a, 174);
                c = !0
            }
            c = !c
        }
        if (c)
            return Nm(a);
        if (b.ba)
            for (b = a.G,
                     c = b.length; c--;)
                for (d = b[c].M,
                         k = d.length; k--;)
                    if (f = d[k],
                        f.G)
                        for (h = zj(a.D, f.D),
                                 q = f.A,
                                 u = f.C,
                                 v = q[0].A.A.A,
                                 w = so(f).K.G; u--;)
                            if (e = q[u],
                                r = e.K,
                            !r.oa && (l = Pk(r, w, !0, h)))
                                n = to(f, e),
                                    m = ao(e.A),
                                    e.M = .5 * v / 2 + Math.abs(uo(m, Ej(r.J).track) - uo(m, e.K.J.track)) + (r.G ? 1 : -1) * (vo(e, l, !1, h) - n)
    } else
        k && Am(a) && zm(a, 24, ["All notation is currently hidden. You can unhide it via the Settings menu.", !1, 2]),
            a.X = 0,
            a.N = 0;
    g.length > p && (g.length = p);
    return !0
}

class wo {
    constructor(a, b, c, d, e, f) {
        this.ia = this.Ga = a;
        this.I = b;
        this.ya = c;
        this.D = d;
        this.C = e;
        this.S = f;
        this.T = this.ra = this.pa = !1;
        this.G = [];
        this.aa = [];
        this.ba = this.$ = this.Z = this.X = this.N = this.P = this.H = 0;
        this.ma = this.M = 36;
        this.va = 0;
        this.A = 9;
        this.F = 4;
        this.wa = this.xa = 0;
        this.ja = this.ka = -1;
        this.V = this.ta = 0;
        this.Da = this.Y = this.W = this.da = this.Fa = this.Ca = !1
    }

    Qa(a) {
        if (!this.T && this.C.C !== a)
            if (sn(this, a)) {
                for (var b = this.D.C, c = this.D.A, d = b.length, e = c.length, f = d, g = [], h, k; f--;)
                    for (k in h = b[f].xa,
                        h)
                        h[k].Qa(a, b[f].H);
                for (f = c.length; f--;)
                    for (h = d; h--;)
                        if (b[h].D) {
                            var l, m, n;
                            var p = c[f].A[h];
                            k = a;
                            var q = g
                                , r = p.track.H
                                , u = r.length
                                , v = p.A;
                            q.length = 0;
                            for (m = u; m--;)
                                q.push(null);
                            for (m = v.length; m--;) {
                                var w = v[m];
                                for (n = w.length; n--;)
                                    if (!w[n].oa) {
                                        var y = w[n].A;
                                        if (0 === k)
                                            for (l = y.length; l--;)
                                                y[l].Aa = y[l].ba,
                                                    y[l].ga = y[l].$;
                                        else {
                                            for (l = u; l--;)
                                                q[l] = null;
                                            for (l = y.length; l--;)
                                                q[u - y[l].$ - 1] = y[l].ba;
                                            var x = Tg(q, k, r);
                                            l = x.length;
                                            for (p = y.length - 1; l--;)
                                                null !== x[l] && (y[p].Aa = x[l],
                                                    y[p].ga = u - l - 1,
                                                    p--)
                                        }
                                    }
                            }
                        }
                this.C.C = a;
                for (f = 0; f !== e; f++) {
                    a = c[f];
                    for (b = d; b--;)
                        al(a.A[b]);
                    Yl(a)
                }
                Fm(this, !0);
                zm(this, 25)
            } else
                zm(this, 122),
                    zm(this, 24, ["We can\u2019t transpose that far. Try transposing in the other direction.", !1, 1])
    }
}

function xm(a, b, c) {
    var d = a.G, e = a.H, f = a.A, g = 0, h;
    for (h = 0; h !== e; h++)
        xo(d[h], f, c, h, d, e);
    if (h = !f.W)
        a: {
            h = f.D;
            for (f = h.C.length; f--;) {
                var k = h.C[f];
                if (k.ba || k.ia) {
                    h = !0;
                    break a
                }
            }
            h = !1
        }
    if (h)
        for (h = 0; h !== e; h++)
            a: {
                var l;
                f = void 0;
                k = d[h];
                var m = a;
                var n = h;
                var p = d;
                var q = e;
                var r = m.A;
                var u = r.I
                    , v = r.A
                    , w = .1 * v;
                for (f of yo(k))
                    if (f.N && (r = f.J.track,
                    r.ba || r.ia)) {
                        var y = bk(f);
                        var x = k.A + w + (y.Sa && r.ia ? Math.ceil(1.1 * v) * (y.Sa.length + 1.5) : u.width(1.8 * v, 2, y.name) + v);
                        for (l = n + 1; l !== q; l++) {
                            var z = p[l];
                            if (z.A >= x)
                                break a;
                            y = x - z.A;
                            b: {
                                var C = void 0;
                                var F = r.index;
                                for (C of zo(z, F))
                                    if (C.K.N) {
                                        C = !0;
                                        break b
                                    }
                                C = !1
                            }
                            if (C || l > Ao(m)) {
                                for (p[l - 1].width += y; l !== q;)
                                    p[l].A += y,
                                        l++;
                                break a
                            }
                        }
                    }
            }
    for (h = 0; h !== e; h++)
        for (n = d[h],
                 g += n.width,
                 f = 0,
                 m = n.D.length; f < m; f++)
            if (p = n.D[f],
            null !== p) {
                q = n.width;
                for (k = h + 1; k < e && null === d[k].D[f]; k++)
                    q += d[k].width;
                p.width = q;
                p.H = n.A
            }
    a.width = g;
    b && (a.naturalWidth = g);
    a.P = c;
    return g
}

function Bo(a) {
    var b = a.A.G;
    return a.index === b.length - 1 ? null : b[a.index + 1]
}

function Co(a) {
    return 0 === a.index ? null : a.A.G[a.index - 1]
}

function Do(a, b) {
    a = a.D;
    for (var c = a.length; c--;)
        if (a[c].K === b)
            return a[c];
    return null
}

function Eo(a) {
    var b = Fo(a);
    return a.width - (b ? b.A : 0)
}

function ao(a) {
    return a.A.aa[a.C]
}

function Km(a, b, c, d, e) {
    var f = a.A, g = f.D, h = f.C, k = 2 === f.F, l = a.D, m = a.O, n = m.A.length, p = a.M, q = [], r = a.I, u = 3600,
        v, w, y, x;
    for (v = n; v--;)
        m.A[v].F = g.C[v].isVisible();
    a.I = b;
    if (e)
        return !0;
    var z;
    if (z = b || r)
        a: {
            for (var C = m.A.length, F, H, N, Q; C--;)
                for (F = m.A[C].A,
                         H = F.length; H--;)
                    if (F[H].length)
                        for (N = F[H][0].A,
                                 Q = N.length; Q--;)
                            if (Mi(N[Q])) {
                                z = !0;
                                break a
                            }
            z = !1
        }
    z && Xl(m, q, b);
    q.length = 0;
    var L = a.O;
    if (Nl(L))
        a.H = 0;
    else {
        var G = a.A, W = vn(G), T = G.D, S = G.A, V = a.G, aa = 0, da = 0, eb = !1, fb = !1, Ob = a.I, Eb = Bo(a),
            gb = !1, pa = L.za, hc = G.W, be = Fl(L), Fb = !!Ql(L, [15, 16]), ua = be ? G.G[a.index + be - 1] : a, va,
            ma, Fa, Gb, Ha, Pb;
        for (Ha of Gl(L)) {
            for (va = Ha.A.length; va--;)
                da++;
            !eb && Ha.track.C && (eb = !0);
            !fb && Ha.track.La && (fb = !0);
            gb || !Ha.N && !Go(a, Ha) || (gb = !0)
        }
        2 === G.F && Jl(L) && a.index ? Jm(Im(a, aa++), 14, lf, 2 * S, 0, !1, null) : !Ob && Fb && Jm(Im(a, aa++), 14, lf, 4 * S, 0, !1, null);
        eb && (Fb || a.I || 2 === a.A.F && Jl(a.O)) && im(T) && Jm(Im(a, aa++), 17, lf, 1.25 * S, 0, !1, null);
        a: {
            if (Fb || a.I || Jl(a.O))
                for (var rc = a.O.A, Hb = rc.length, pd = 0, Lc, Mc; Hb--;)
                    if (Lc = rc[Hb],
                        Mc = Lc.track,
                    Lc.F && (Mc.F || Mc.C) && (pd++,
                    1 < pd || Mc.F)) {
                        var Nc = !0;
                        break a
                    }
            Nc = !1
        }
        Nc && Jm(Im(a, aa++), 2, lf, .16 * S, 0, !1, null);
        if (eb) {
            if (Fb || a.I || Jl(a.O))
                Jm(Im(a, aa++), 3, lf, .5 * S + Ho(a) + S, 0, !1, null);
            else {
                a: {
                    var bd = Io(a)
                        , Ye = a.O.A
                        , Cc = Ye.length;
                    if (bd)
                        for (; Cc--;)
                            if (Jo(Ye[Cc], bd)) {
                                var we = !0;
                                break a
                            }
                    we = !1
                }
                we && Jm(Im(a, aa++), 21, lf, .5 * S + .66 * Ho(a) + .5 * S, 0, !1, null)
            }
            (Fb || a.I || Ko(a) || Jl(a.O)) && (Pb = Lo(a, !Ob)) && Jm(Im(a, aa++), 4, lf, (Fb || a.I || Jl(a.O) ? 0 : a.A.A) + Pb + S, 0, !1, null)
        }
        (eb || fb) && !Hl(a.O) && (0 === a.index || Mo(a) || Jl(a.O)) && Jm(Im(a, aa++), 5, lf, No(a, fb && !eb, !1) + Oo(a) + S, 0, !1, null);
        !W && Il(L) ? Jm(Im(a, aa++), 6, lf, Vn(G, 57412) + 1.26 * S, 0, !1, null) : hc && Ob && Jm(Im(a, aa++), 8, lf, .16 * S, 0, !0, null);
        L.H || jn(G) || Jm(Im(a, aa++), 7, lf, S, S / 2, !Ob, null);
        aa = hc ? Po(a, aa) : Qo(a, !1, aa, q, da, T.C.length, gb, pa, null, !1);
        var Za = Im(a, aa++);
        if (!W && !c && Eb && Il(Eb.O))
            ua.O.G ? Ko(Eb) || Mo(Eb) ? Jm(Za, 10, pa, Vn(G, 57412) + 1.26 * S, 0, !1, null) : Jm(Za, 12, pa, Vn(G, 57412) + .76 * S, 0, !1, null) : aa--;
        else if (!W && ua.O.G)
            Jm(Za, 10, pa, Vn(G, 57412) + 1.26 * S, 0, !1, null);
        else {
            var Wb = ua.O;
            Ro(ua) || Wb.G || !Ll(Wb) && !Jl(hl(Wb)) ? Ro(ua) ? Jm(Za, 11, pa, .62 * S, 0, !0, null) : Jm(Za, 8, pa, .16 * S, 0, !0, null) : Jm(Za, 9, pa, (.8 + .16) * S, 0, !1, null)
        }
        c && Eb && !Jl(Eb.O) && (Ko(Eb) && (Pb = Lo(Eb, !0),
            Jm(Im(a, aa++), 13, pa, Pb + 2 * S, 0, !1, null)),
        Mo(Eb) && !Hl(Eb.O) && Jm(Im(a, aa++), 19, pa, No(Eb, !1, !0) + Oo(Eb) + .5 * S, 0, !1, null));
        if (aa) {
            for (Fa = aa - 1; Fa--;)
                V[Fa].duration = Ue(V[Fa + 1].C, V[Fa].C);
            V[aa - 1].duration = Ue(pa, V[aa - 1].C)
        }
        if (hc) {
            Pb = 0;
            for (Fa = aa - 1; Fa && V[Fa].H;)
                Pb += V[Fa].F,
                    Fa--;
            0 === Fa && V[Fa].H || (V[Fa].F -= Pb)
        } else {
            var pb = Fh, xe, $b, Dc;
            for (Dc of Gl(L))
                for (xe = Dc.A.length; xe--;) {
                    var ic = Dc.A[xe];
                    for ($b = ic.length; $b--;) {
                        var hb = ic[$b];
                        !hb.D && Te(pb, hb.Z) && (pb = hb.Z)
                    }
                }
            var ce = pb == lf ? Hh.qa : pb.qa;
            var X = 0;
            for (Fa = aa; Fa--;)
                if (Za = V[Fa],
                    !Za.F) {
                    var ac = null;
                    for (ma = da; ma--;)
                        for (Gb = Fa; 0 <= Gb; Gb--)
                            if (!V[Gb].F && null !== V[Gb].D[ma]) {
                                X = V[Gb].D[ma].K.ra;
                                if (null === ac || X < ac)
                                    ac = X;
                                break
                            }
                    var Ec = Za
                        , uf = ac
                        , kg = ce;
                    Ec.S = Ec.duration.qa / uf;
                    var sb = uf / kg;
                    Ec.T = Math.log2 ? Math.log2(sb) : Math.log(sb) / rm
                }
        }
        a.H = aa;
        V.length > aa + 5 && (V.length = aa + 5)
    }
    for (v = 0; v !== n; v++) {
        var Qb = m.A[v];
        if (Qb.F) {
            var de = Qb.A;
            var qb = de.length;
            if (Zh(Qb)) {
                var Oc = void 0
                    , Ia = void 0
                    , jc = void 0
                    , Pc = void 0
                    , tb = void 0
                    , ee = void 0
                    , sc = void 0
                    , qa = void 0
                    , xb = void 0
                    , $a = void 0
                    , La = Qb.A
                    , na = La.length
                    , cd = []
                    , Qc = 0;
                for ($a = 0; $a !== na; $a++)
                    cd.push([$a, 0]);
                for ($a = na; $a-- && 0 !== $a;)
                    for (qa = La[$a],
                             xb = $a; xb--;) {
                        sc = La[xb];
                        ee = qa.length - 1;
                        tb = sc.length - 1;
                        Ia = 0;
                        for (Oc = !1; 0 <= ee && 0 <= tb;)
                            Pc = qa[ee],
                                jc = sc[tb],
                                Pc.oa || Pc.D || Te(Pc.F, jc.F) ? ee-- : (jc.oa || jc.D || Te(jc.F, Pc.F) || (Oc = !0,
                                    Ia += Mj(Pk(Pc, !0, !0, null), Pk(jc, !1, !0, null)) ? 1 : -1,
                                    ee--),
                                    tb--);
                        if (!Oc) {
                            var ba = Oh(qa)
                                , yb = Oh(sc);
                            ba > yb ? Ia = -1 : ba < yb && (Ia = 1)
                        }
                        0 < Ia ? cd[$a][1]++ : 0 > Ia && cd[xb][1]++
                    }
                cd.sort(Nh);
                for ($a = 0; $a !== na; $a++)
                    if (qa = La[cd[$a][0]],
                        xb = qa.length) {
                        for (; xb--;)
                            qa[xb].V = Qc;
                        Qc++
                    }
            }
            for (y = qb; y--;) {
                var wa = 0;
                for (x = de[y].length; wa !== x; wa++) {
                    var la = void 0
                        , fa = de[y][wa];
                    if (fa.oa)
                        la = !1;
                    else if (h.C || null === fa.aa) {
                        var Ma = Zk(fa.J);
                        la = fa.D ? 1 === Ma ? !0 : 0 === fa.V : 1 === Ma ? 0 < Qk(fa) : 0 === fa.V ? !0 : fa.V === Ma - 1 ? !1 : 0 < Qk(fa)
                    } else
                        la = 1 === fa.aa;
                    fa.C = la ? fa.C | 4096 : fa.C & -4097
                }
            }
        }
    }
    l.sort(sm);
    So(a);
    v = 0;
    for (w = l.length; v !== w; v++) {
        var Na = l[v];
        var nb = Na.K;
        q.length = 0;
        if (nb.D) {
            var ye = To(Na);
            ye.F = Math.max(ye.F, f.A * (-1 === Na.C ? 1.8 : 1.4))
        }
        nb.G = -1 === Na.C || Xh(nb) ? 0 !== (nb.C & 4096) : Uo(Na).F;
        var Bb = void 0
            , Gd = void 0
            , xa = void 0
            , Cb = void 0
            , jb = void 0
            , Rc = nb
            , ob = q
            , ab = null
            , Xb = Rc.A
            , kc = Xb.length;
        Rc.C &= -8193;
        for (jb = kc; jb--;)
            Xb[jb].Y = null;
        if (!(2 > kc)) {
            for (jb = 0; jb !== kc; jb++)
                Cb = Xb[jb],
                    Cb.Y = null,
                0 !== jb && (xa = Xb[jb - 1],
                yj(xa) === yj(Cb) && 2 > xa.sa - Cb.sa && (xa === ab ? ob[ob.length - 1].push(Cb) : ob.push([xa, Cb]),
                    ab = Cb));
            if (Gd = ob.length)
                if (Rc.C |= 8192,
                    Rc.G)
                    for (; Gd--;)
                        for (Bb = ob[Gd],
                                 jb = 1,
                                 kc = Bb.length; jb < kc; jb += 2)
                            Bb[jb].Y = 2;
                else
                    for (; Gd--;)
                        for (Bb = ob[Gd],
                                 jb = Bb.length - 2; 0 <= jb; jb -= 2)
                            Bb[jb].Y = 1
        }
        for (var oa = void 0, bb = nb, Fc = h, ub = bb.A.length; ub--;)
            oa = bb.A[ub],
            oa.D && (oa.D.A ? (oa.D.position = oa.D.A,
                oa.D.C = 0) : Ok(bb, Fc, oa, oa.D)),
            oa.G && (oa.G.A ? (oa.G.position = oa.G.A,
                oa.G.C = 0) : Ok(bb, Fc, oa, oa.G));
        Na.F = 0;
        Na.D = nb.oa ? 58595 === Vo(Na, g).I ? 1 : 2 : 0
    }
    for (Qb of Gl(m))
        if (Zh(Qb)) {
            var Rb = void 0
                , za = void 0
                , Oa = void 0
                , vb = void 0
                , zb = void 0
                , Ib = a
                , Sb = q
                , Pa = Qb.track.index
                , qd = !1
                , Hd = !1
                , fe = Zk(Qb)
                , Qf = !1;
            for (vb of Wo(Ib))
                if (!vb.H) {
                    Sb.length = 0;
                    qd = !1;
                    Hd = !0;
                    Rb = null;
                    for (Oa of zo(vb, Pa))
                        Qf || sk(Oa.K) || (null === Rb ? Rb = Oa.K.ea : Oa.K.ea !== Rb && (Qf = !0)),
                            Oa.K.oa ? (Sb.length && Sb[0].K.ra !== Oa.K.ra && (qd = !0),
                                Sb.push(Oa)) : Hd = !1;
                    if (Qf && Sb.length)
                        if (zb = Sb.length,
                        Hd && 1 < zb && !qd)
                            for (var xf = -1; zb--;)
                                sk(Sb[zb].K) || (-1 === xf && (xf = Sb[zb].K.ea),
                                    Sb[zb].V = xf);
                        else
                            for (var kb; zb--;)
                                if (Oa = Sb[zb],
                                    za = Oa.K,
                                0 === za.V)
                                    kb = Xo(Ib, Pa, 1, za.F, !0),
                                        null === kb ? Oa.D-- : (kb -= 2 + 2 * za.ha.D,
                                            Oa.D = Math.min(Oa.D - 1, Math.floor(kb / 2)));
                                else if (za.V === fe - 1)
                                    kb = Xo(Ib, Pa, za.V - 1, za.F, !1),
                                        null === kb ? Oa.D++ : (kb += 2 + 2 * za.ha.G,
                                            Oa.D = Math.max(Oa.D + 1, Math.ceil(kb / 2)));
                                else {
                                    kb = Xo(Ib, Pa, za.V - 1, za.F, !1);
                                    var ge = Xo(Ib, Pa, za.V + 1, za.F, !0);
                                    null !== kb && null !== ge ? Yo(Oa, kb, ge) || (Oa.D = Math.round((kb + ge) / 4),
                                    Yo(Oa, kb, ge) || (kb = Xo(Ib, Pa, 0, za.F, !0),
                                        Oa.D = Math.floor((kb - 1 - 2 * za.ha.D) / 2))) : null !== kb ? Oa.D = Math.max(Oa.D, Math.ceil((kb + 1 + 2 * za.ha.G) / 2)) : null !== ge && (Oa.D = Math.min(Oa.D, Math.floor((ge - 1 - 2 * za.ha.D) / 2)))
                                }
                }
        }
    var rd = {};
    v = 0;
    for (w = l.length; v !== w; v++)
        if (Na = l[v],
            nb = Na.K,
        !nb.oa && !nb.D && nb.J.F && Zh(nb.J)) {
            var Ze = nb.J.track.index + "_" + kf(nb.F);
            rd[Ze] ? Zo(Na, rd[Ze]) : rd[Ze] = Na
        }
    rd = null;
    v = 0;
    for (w = l.length; v !== w; v++) {
        var tc = Na = l[v]
            , lg = tc.K
            , Sc = 0
            , Id = !1
            , yf = lg.A
            , Jb = yf.length;
        if (lg.J.track.C)
            if (Jb)
                for (; Jb--;)
                    Sc = Math.max(Sc, $o(tc, yf[Jb], 0, 9));
            else
                Sc = ap(tc);
        if (lg.J.track.F) {
            for (Jb = yf.length; Jb--;)
                yf[Jb].C && (Id = !0);
            Id && (Sc = Math.max(Sc, 4 * tc.A.A.A))
        }
        tc.T = Sc;
        var ca = Na
            , sd = ca.K
            , Rf = sd.J.track
            , Pg = ca.A.A
            , sh = Pg.A
            , Tc = 0
            , $e = 0
            , he = sd.A.length;
        if (Rf.C)
            for (; he--;)
                Tc = Math.max(Tc, bp(ca, sd.A[he], 0, 11));
        Rf.F && (sd.ba && ($e += 1.5 * sh),
        Mk(sd) && ($e += 1.5 * sh),
        sd.ma && ($e += Vn(Pg, 59462) + .4 * sh));
        ca.S = Math.max(Tc, $e)
    }
    for (v = a.H; v--;) {
        var Gc = void 0
            , Uc = void 0
            , Yb = a.G[v];
        if (!Yb.H) {
            var wb = 0;
            for (Uc of cp(Yb))
                Gc = Uc.T,
                Gc > wb && (wb = Gc);
            Yb.M = wb
        }
    }
    do
        xm(a, !0, u),
            u -= 200;
    while (!k && a.naturalWidth >= d && 1800 < u);
    if (!k && 0 !== d && a.naturalWidth > d && 5 < f.M)
        return Bm(f, f.M - 1, !1),
            !1;
    for (v = p.length; v--;) {
        for (var Hc = void 0, zf = void 0, lc = void 0, cb = void 0, Kb = void 0, je = void 0, Af = void 0, Lb = void 0, db = void 0, Wa = void 0, bc = void 0, dd = p[v], Jd = dd.C, ze = Jd, Kd = dd.A; ze--;)
            Kd[ze].M = 0;
        var Vc = Kd[0].A.A
            , Ab = Vc.A
            , rb = dd.D
            , Wc = so(dd)
            , ed = dp(dd)
            , mc = Wc.K.G
            , Ld = Pk(Wc.K, mc, !0, rb)
            , Ae = Pk(ed.K, mc, !0, rb);
        if (Ld && Ae) {
            var td = ep(Wc)
                , Md = vo(Wc, Ld, !0, rb)
                , fd = ep(ed)
                , Nd = vo(ed, Ae, !0, rb)
                , le = Wc.C;
            if (Md === Nd && Ld.sa !== Ae.sa) {
                var ud = Sj(Ld)
                    , Qg = Sj(Ae);
                null !== ud && ud === Qg && (Ld.H.U > Ae.H.U ? mc ? Md -= .5 * Ab : Nd += .5 * Ab : mc ? Nd -= .5 * Ab : Md += .5 * Ab)
            }
            Wa = dd.G ? 0 : td === fd ? 0 : (Nd - Md) / (fd - td);
            .15 < Wa ? (Wa = .15,
                mc ? (Kb = Md - Wa * td,
                    Nd = Wa * fd + Kb) : (Kb = Nd - Wa * fd,
                    Md = Wa * td + Kb)) : -.15 > Wa ? (Wa = -.15,
                mc ? (Kb = Nd - Wa * fd,
                    Md = Wa * td + Kb) : (Kb = Md - Wa * td,
                    Nd = Wa * fd + Kb)) : Kb = Md - Wa * td;
            bc = 0;
            for (cb = Wc; cb;) {
                lc = cb.K;
                if (!lc.oa && (!rb || Fk(lc, rb))) {
                    db = Wa * ep(cb) + Kb;
                    if (cb.C === le) {
                        Af = .5 * Ab * (1.5 * lc.ha.F - .5);
                        a: {
                            if (pk(lc)) {
                                var Bf = lc;
                                do
                                    if ((Bf = Vj(Bf, Vc.D, !1)) && !Bf.D) {
                                        var mg = Bf;
                                        break a
                                    }
                                while (Bf)
                            }
                            mg = null
                        }
                        je = .5 * Ab * (1.5 * Math.min(lc.ha.F, mg ? mg.ha.F : 0) - .5)
                    }
                    cb.C !== le && (db += (je + .5 * Ab) * (mc ? 1 : -1));
                    mc ? (Hc = fp(cb, !0, !0),
                    Hc < db && (bc = Math.max(bc, db - Hc)),
                    lc.D || (zf = gp(cb, Pk(lc, !1, !0, null), !0) - Ab / 2 - Af,
                    zf - Hc < Ab && (Lb = zf - Ab,
                    Lb < db && (bc = Math.max(bc, db - Lb))))) : (Hc = hp(cb, !0, !0),
                    Hc > db && (bc = Math.max(bc, Hc - db)),
                    lc.D || (zf = gp(cb, Pk(lc, !0, !0, null), !0) + Ab / 2 + Af,
                    Hc - zf < Ab && (Lb = zf + Ab,
                    Lb > db && (bc = Math.max(bc, Lb - db)))))
                }
                if (cb === ed)
                    break;
                cb = ip(cb, !1)
            }
            mc && (bc *= -1);
            Kb += bc;
            for (ze = Jd; ze--;)
                if (cb = Kd[ze],
                !cb.K.oa && (Ld = Pk(cb.K, mc, !0, rb)))
                    cb.M = Math.abs(Wa * ep(cb) + Kb - vo(cb, Ld, !0, rb))
        }
        var Od = void 0
            , af = void 0
            , Xc = void 0
            , og = void 0
            , Yc = p[v]
            , vd = Yc.A
            , gd = Yc.D
            , Be = vd[0]
            , Zc = Be.A.A.A
            , Cf = dp(Yc)
            , Pd = ep(Be)
            , hd = ep(Cf)
            , pg = jp(Be, !0, !0, gd)
            , wd = jp(Cf, !0, !0, gd)
            , xd = Yc.G ? 0 : (wd - pg) / (hd - Pd)
            , qg = pg - xd * Pd;
        if (0 !== hd - Pd)
            for (og = Yc.C; og--;)
                Xc = vd[og],
                Xc.K.oa && (af = xd * Xc.H + qg + .5 * Zc * (Yc.F ? 1 : -1),
                    Yc.F ? (Od = kp(Xc) - Zc / 2,
                    Od <= af && (Xc.D += Math.ceil((af - Od) / Zc))) : (Od = Gp(Xc) + Zc / 2,
                    Od >= af && (Xc.D -= Math.ceil((Od - af) / Zc))))
    }
    var Sf = a.S, Qd = a.D, me = 0, Tb, rg, Tf, Ce, Rg, Uf, bf;
    Sf.length = 0;
    if (a.A.da) {
        for (Tb = Qd.length; Tb--;)
            Qd[Tb].G = -1;
        for (Ce of Gl(a.O)) {
            var ne = Ce.M;
            if (!Ce.D && null !== ne && ne.length)
                for (Tb = 0,
                         rg = ne.length; Tb !== rg; Tb++) {
                    var cf = ne[Tb];
                    if (Uf = Ce.A[cf.v]) {
                        var th = [];
                        var De = 0;
                        for (Tf = cf.i.length; De !== Tf; De++)
                            (bf = Uf[cf.i[De]]) && (Rg = Do(a, bf)) && th.push(Rg);
                        th.length && Sf.push(new Hp(th, me++, !!cf.h, cf.s || "s".A))
                    }
                }
        }
    }
    return !0
}

function Lm(a, b, c, d) {
    var e = a.O, f = a.G, g = 0, h = 0, k = !1, l, m;
    for (l of Gl(e))
        for (m = l.A.length; m--;)
            g++;
    b = Qo(a, !0, 0, b, g, e.A.length, !1, e.za, c, d);
    5E4 < b && (b -= 5E4,
        k = !0);
    c = null;
    if (b) {
        for (e = 0; e !== b; e++)
            if (xo(f[e], a.A, 0, e, f, b),
            e === b - 1) {
                var n = Ip(f[e]);
                f[e].duration = n ? n.Z : lf
            } else
                f[e].duration = Ue(f[e + 1].C, f[e].C);
        for (e = 0; e !== b; e++)
            for (d = f[e],
                     h += d.width,
                     g = 0,
                     m = d.D.length; g < m; g++)
                if (n = d.D[g],
                null !== n) {
                    var p = d.width;
                    for (l = e + 1; l < b && null === f[l].D[g]; l++)
                        p += f[l].width;
                    n.width = p;
                    n.H = d.A;
                    k && e === b - 1 && (c = n.K.W)
                }
    }
    a.width = h;
    a.naturalWidth = h;
    a.H = b;
    f.length > b + 5 && (f.length = b + 5);
    return c
}

function Im(a, b) {
    a = a.G;
    b >= a.length && a.push(new Jp);
    return a[b]
}

function Kp(a, b) {
    var c = a.A;
    if (a.index >= c.G.length)
        return -1;
    -1 === b && (b = a.N);
    a = a.O.U;
    c = c.D.D;
    var d = 0, e;
    var f = 0;
    for (e = c.length; f !== e; f++)
        if (c[f] === a) {
            if (d === b)
                return f;
            d++
        }
    return -1
}

function Io(a) {
    var b = Kp(a, -1);
    return -1 !== b && 0 !== b ? Kn(a.A, b - 1) : null
}

function Lp(a, b) {
    var c = a.A
        , d = c.D.D
        , e = c.D.A;
    a = Kp(a, -1);
    if (-1 !== a) {
        a++;
        if (b)
            for (; d[a] && Nl(e[d[a]]);)
                a++;
        return Kn(c, a)
    }
    return null
}

function Mp(a, b, c, d) {
    a = a.D;
    for (var e = a.length, f, g; e--;)
        if (f = a[e],
            g = f.K,
        g.fa === d && g.ea === c && g.J.track.index === b)
            return f;
    return null
}

function* Wo(a) {
    for (var b = 0, c = a.H; b !== c; b++)
        yield a.G[b]
}

function Np(a, b, c) {
    a = a.D;
    for (var d = a.length, e; d--;)
        if (e = a[d],
        e.K.J.track === b && e.K.F === c)
            return e;
    return null
}

function Op(a, b, c) {
    var d = [];
    a = a.D;
    for (var e = a.length; e--;)
        a[e].K.J.track === b && d.push(a[e]);
    c && d.sort(sm);
    return d
}

function Pp(a) {
    var b = ao(a).A;
    return a === b[b.length - 1]
}

function Qp(a) {
    return nn(a.A) + a.F
}

function No(a, b, c) {
    return !a.I && !Jl(a.O) || b || c ? .5 * a.A.A : 0
}

function Mo(a) {
    if (0 === a.index)
        return !1;
    var b = a.O
        , c = Co(a).O;
    return !(b.M === c.M && b.I === c.I && Hl(b) === Hl(c) && 0 !== (b.C & 32) === (0 !== (c.C & 32)) && 0 !== (b.C & 64) === (0 !== (c.C & 64)) && !Hl(a.O))
}

function Oo(a) {
    var b = a.A
        , c = [];
    ym(a.O.M, c);
    var d = Xn(b, c);
    c.length = 0;
    ym(a.O.I, c);
    a = Xn(b, c);
    return d > a ? d : a
}

function Ko(a) {
    if (0 === a.index)
        return !1;
    var b = a.O.A
        , c = b.length;
    for (a = Co(a).O.A; c--;)
        if (b[c].G !== a[c].G)
            return !0;
    return !1
}

function Jo(a, b) {
    var c = b.O.A[a.track.index];
    return !a.S && a.H !== Go(b, c) && a.H !== Dj(c, c.O.za)
}

function Go(a, b) {
    return (a = Lp(a, !0)) && !Jl(a.O) && (a = a.O.A[b.track.index].H,
    a !== Dj(b, b.O.za)) ? a : null
}

function Ho(a) {
    var b = 0
        , c = a.A;
    a = a.O.A;
    for (var d = a.length, e; d--;)
        e = a[d],
        e.F && e.track.C && !e.S && (e = Vn(c, e.H.A),
        e > b && (b = e));
    return b
}

function Lo(a, b) {
    var c = 0, d = a.A, e = a.O, f;
    for (f of Gl(e)) {
        var g = Math
            , h = g.max;
        if (0 === f.G)
            var k = 0;
        else
            k = ra[f.G],
                k = Vn(d, 2 === k[1] ? 57954 : 57952) * k[0].length;
        c = h.call(g, c, k)
    }
    b && !c && e.U && (c = Lo(Co(a), !1));
    return c
}

function Ro(a) {
    var b = a.O;
    if (0 !== (b.C & 4))
        return !0;
    var c = Bo(a);
    return !!(c && vn(a.A) && c.O.U < b.U)
}

function Fo(a) {
    for (var b of Wo(a))
        if (!b.H)
            return b;
    return null
}

function Ao(a) {
    var b = a.G;
    a = a.H;
    for (var c; a--;)
        if (c = b[a],
            !c.H)
            return a;
    return null
}

function Rp(a) {
    if (!a.A.Y || !a.D.length)
        return a.O.za;
    a = a.D;
    for (var b = null, c = null, d = a.length, e, f; d--;) {
        e = a[d];
        f = e.K.F;
        if (null === b || Te(b, f))
            b = f;
        e = e.K;
        f = e.J.D ? e.J.O.za : e.W;
        if (null === c || Te(f, c))
            c = f
    }
    return Ue(c, b)
}

function Sp(a) {
    var b = a.A
        , c = Fo(a).A
        , d = b.A;
    return nn(b) + a.F + c - d + Math.round((a.width - c + d - Vn(b, 58595)) / 2)
}

function Tp(a, b, c, d, e) {
    var f = a.O
        , g = a.H
        , h = Fl(f);
    if (h)
        return e = a,
            c = 0,
        Nl(f) && (c = -Ml(f),
            e = a.A.G[a.index - c]),
            g = (g = Up(e, 7)) ? g.A : 0,
        e.F + g + (c + b) * (e.width - g) / h - a.F;
    if (0 === g)
        return 0;
    h = Rp(a);
    f = 0;
    var k = null
        , l = a.G;
    b = l[0].C.qa + b * h.qa;
    var m = null, n;
    for (n = 0; n !== g; n++) {
        var p = l[n];
        if (!p.H && p.duration !== lf)
            if (p.C.qa <= b)
                f = n;
            else if (null === k) {
                k = n;
                break
            }
    }
    p = l[f];
    g = p.A;
    n = p.C;
    n !== lf || 7 !== l[0].G || Vp(p) && !d || (g = 0);
    null === k ? (d = l[0].C.add(h),
    c || Pp(a) || (m = (c = Up(Bo(a), 1)) && Vp(c) ? a.width + c.A : a.width),
    null === m && (m = g + l[f].width)) : (d = l[k].C,
        m = l[k].A);
    e && d === h && (m = a.width);
    a = (b - n.qa) / Ue(d, n).qa;
    return Math.round(g + a * (m - g))
}

function Wp(a, b) {
    return a.F + (b.C ? Tp(a, b.C, !0, !1, !1) : a.D.length ? a.D[0].H : 0)
}

function Xp(a, b) {
    for (var c = a.C, d; a;) {
        d = Bo(a);
        if (a.O.U === b.Na || !d || d.C !== c)
            break;
        a = d
    }
    return a
}

function Yp(a, b, c, d, e) {
    return nn(a.A) + a.F + Tp(a, b, c, d, e)
}

function Up(a, b) {
    for (var c of Wo(a))
        if (c.G === b)
            return c;
    return null
}

function Xo(a, b, c, d, e) {
    for (var f = null, g = a.D, h = g.length, k, l; h--;)
        if (k = g[h],
            l = k.K,
        !l.D && l.J.track.index === b && l.V === c && l.F === d && !sk(l)) {
            if (l.oa)
                f = 2 * (k.D + (e ? -l.ha.G : l.ha.D));
            else if (e)
                if (l.G)
                    f = Math.round(2 * fp(k, !1, !0) / a.A.A) - 1;
                else {
                    if (a = Pk(l, l.G, !1, null))
                        f = a.sa
                }
            else
                l.G ? (a = Pk(l, l.G, !1, null)) && (f = a.sa + 2) : f = Math.round(2 * hp(k, !1, !0) / a.A.A) - 1;
            break
        }
    return f
}

function So(a) {
    var b = a.M, c = a.D, d = null, e = 0, f = 0, g;
    var h = b.length = 0;
    for (g = c.length; h !== g; h++) {
        var k = c[h];
        k.C = -1;
        k.M = 0;
        var l = k.K;
        if (l.D)
            f++;
        else if (pk(l))
            null === d ? l.oa || (d = [k]) : d.push(k);
        else if (null !== d && d.length) {
            for (d.push(k); d[d.length - 1].K.oa;)
                d.splice(d.length - 1, 1);
            d.length && (b.push(new Zp(a.A.D, d, e)),
                e++);
            d = null
        }
    }
    if (1 < f)
        for (h = 0,
                 g = c.length; h !== g; h++)
            k = c[h],
                k.K.D ? -1 === k.C && (null === d ? d = [k] : d.push(k)) : (null !== d && 1 !== d.length && b.push(new Zp(a.A.D, d, e++)),
                    d = null)
}

function Po(a, b) {
    var c = a.O, d = Sn(a.A), e = a.D, f = 0, g = c.za.qa, h = [], k = !1, l, m;
    e.length = 0;
    for (l = b; l--;)
        f += a.G[l].F;
    for (v of Gl(c)) {
        var n = v.A;
        for (l = n.length; l--;) {
            var p = n[l];
            var q = 0;
            for (m = p.length; q !== m; q++) {
                var r = p[q];
                if (r.J.track.ba && r.N) {
                    c = h.length;
                    for (k = !1; c--;) {
                        var u = h[c];
                        if (u[0] === r.F) {
                            k = !0;
                            u.push(r);
                            break
                        }
                    }
                    k || h.push([r.F, r])
                }
            }
        }
    }
    h.sort((w, y) => w[0].qa - y[0].qa);
    for (l = 0; l !== h.length; l++) {
        c = h[l][0];
        k = 0 < l ? 0 : -f;
        0 === l && Te(c, lf) && (k += d * c.qa / g,
            Jm(Im(a, b++), 20, lf, k, k, !0, 0),
            k = 0);
        var v = Im(a, b++);
        Jm(v, 16, c, 0, 0, !0, 0);
        n = Infinity;
        for (c = 1; c < h[l].length; c++)
            r = h[l][c],
                n = Math.min(n, d * Ck(r, a.A.D).qa / g),
                r = new $p(a, r, b - 1),
                v.D.push(r),
                e.push(r);
        v.F = k + n
    }
    h.length || (d -= f,
        Jm(Im(a, b++), 20, lf, d, d, !0, 0));
    return b
}

function Qo(a, b, c, d, e, f, g, h, k, l) {
    var m = e
        , n = a.O;
    e = a.A;
    var p = e.A, q = a.D, r = n.A, u = .5 * p, v = !1, w, y, x;
    q.length = 0;
    if (k)
        for (y = m = 0; y !== f; y++) {
            var z = r[y];
            if (z.F) {
                z = z.A;
                var C = 0;
                for (x = z.length; C !== x; C++) {
                    var F = d[m] = 0;
                    for (w = z[C].length; F !== w; F++) {
                        var H = z[C][F];
                        if (We(H.F, k)) {
                            d[m] = F;
                            break
                        }
                    }
                    m++
                }
            }
        }
    else
        for (; m--;)
            d[m] = 0;
    for (; ;) {
        F = null;
        m = 0;
        w = !1;
        var N = null;
        for (y = 0; y !== f; y++)
            if (z = r[y],
                z.F)
                for (z = z.A,
                         C = 0,
                         x = z.length; C !== x; C++)
                    (H = z[C][d[m]]) && (null === F || We(F, H.F)) && (w = F === H.F ? !(!w && !H.D) : !!H.D,
                        F = H.F,
                    b || F !== H.F && null !== F || 0 === (H.C & 16384) || (N = F)),
                        m++;
        if (!b && g && (0 === c || a.G[c - 1].C !== F))
            for (y = f; y--;)
                if (z = r[y],
                    z.N)
                    for (m = z.N.length; m--;)
                        C = z.N[m].A,
                        (C === F || null === F && C === h) && Jm(Im(a, c++), 15, C, .66 * Vn(e, z.N[m].C.A) + u, u, !1, z.track.index);
        if (null === F)
            break;
        N === F && Jm(Im(a, c++), 18, F, 1.16 * p, 0, !0, null);
        N = Im(a, c++);
        Jm(N, 1, F, 0, 0, !0, null);
        !b && n.H && (N.F = 20 * p);
        for (y = m = 0; y !== f; y++)
            if (z = r[y],
                z.F)
                for (z = z.A,
                         C = 0,
                         x = z.length; C !== x; C++) {
                    if ((H = z[C][d[m]]) && H.F === F && (w && H.D || !w && !H.D)) {
                        if (!k || We(H.F, k)) {
                            var Q = new $p(a, H, c - 1);
                            N.D.push(Q);
                            q.push(Q);
                            b ? (N.F = Math.max(N.F, H.M ? aq(Q, bq(Q), !0, l && wk(H), p) : 0),
                            l && wk(H) && (v = !0)) : !b && 0 === N.I && Gk(H) && (N.I = 3.5 * p)
                        }
                        d[m]++
                    } else
                        N.D.push(null);
                    m++
                }
        if (b && v && !w) {
            c += 5E4;
            break
        }
    }
    if (!b && g)
        for (y = 0; y !== f; y++)
            z = r[y],
            z.F && (b = Go(a, z),
                d = 0 < z.C,
            b && Jm(Im(a, c++), d ? 23 : 22, h, .66 * Vn(e, b.A) + u, u, !1, z.track.index));
    return c
}

function* cq(a, b) {
    var c = a.C, d = a.A.G, e = a.index, f, g;
    if (!Il(a.O))
        for (; e--;) {
            var h = d[e];
            if (h.C !== c || !h.O.D)
                break;
            for (f = h.D.length; f--;)
                h.D[f].K.J.track.index === b && (yield h.D[f]);
            if (Il(h.O))
                break
        }
    e = a.index;
    for (g = d.length; e !== g; e++) {
        h = d[e];
        if (h.C !== c || !h.O.D || e !== a.index && Il(h.O))
            break;
        for (f = h.D.length; f--;)
            h.D[f].K.J.track.index === b && (yield h.D[f])
    }
}

class Hm {
    constructor(a, b, c, d) {
        this.A = a;
        this.O = b;
        this.index = c;
        this.N = d;
        this.I = !1;
        this.C = -1;
        this.P = this.height = this.width = this.naturalWidth = this.F = 0;
        this.G = [];
        this.H = 0;
        this.D = [];
        this.M = [];
        this.S = []
    }
}

function aq(a, b, c, d, e) {
    var f = a.K;
    a = a.A.A;
    var g = 0;
    if (f.M && -1 !== b) {
        var h = um(f.M[b]);
        h && (g = a.I.width((c ? 2.8 : 2) * e, c ? a.C.Ga : a.C.Da, h),
        !c || d || tm(f.M[b]) || (g += .6 * e))
    }
    return g
}

function dq(a, b) {
    return 1 === b.Y ? -eq(a, b) + 1 : 2 === b.Y ? eq(a, b) - 1 : 0
}

function gp(a, b, c) {
    var d = a.K
        , e = a.A.A
        , f = e.A / 2 * (b.sa + 1);
    e.Fa && yj(b) && c && (b = Ej(d.J),
    b.track.C && (a = ao(a.A),
        f += uo(a, b.track) - uo(a, d.J.track)));
    return f
}

function Yo(a, b, c) {
    return b + 1 <= 2 * (a.D - a.K.ha.G) && c - 1 >= 2 * (a.D + a.K.ha.D)
}

function To(a) {
    return a.A.G[a.I]
}

function Uo(a) {
    return a.A.M[a.C]
}

function Zo(a, b) {
    for (var c = a.K, d = b.K, e = c.A.length, f = a.A.A.A, g = f / 2, h = .3 * f, k = c.G, l = d.G, m = k != l, n = Te(c.Z, d.Z) ? b : a, p = n === a ? b : a, q = c.ha.A, r, u, v, w, y; e--;)
        for (u = c.A[e],
                 y = yj(u),
                 r = d.A.length; r--;)
            if (v = d.A[r],
            y === yj(v))
                if (w = Math.abs(u.sa - v.sa),
                1 < w) {
                    if (q || d.ha.A)
                        if (u.sa < v.sa && (!m || !k)) {
                            if (!k && !l && vo(a, u, !0, null) + g > fq(b, v, !0) || !k && l && vo(a, u, !0, null) + f > gq(b, v) || k && l && fq(a, u, !0) + g > vo(b, v, !0, null) || 1 === c.ha.C && l && gp(a, u, !0) + f > vo(b, v, !0, null)) {
                                b.F = .75 * hq(a);
                                return
                            }
                        } else if (u.sa > v.sa && (!m || k) && (k && l && vo(a, u, !0, null) - g < fq(b, v, !0) || !k && !l && fq(a, u, !0) - g < vo(b, v, !0, null) || k && !l && gq(a, u) - f < vo(b, v, !0, null))) {
                            a.F = .75 * hq(b);
                            return
                        }
                } else {
                    if (c.ha.Ma !== d.ha.Ma) {
                        c.ha.Ma ? a.F = hq(b) + h : b.F = hq(a) + h;
                        return
                    }
                    if (0 === w) {
                        if (c.ha.C !== d.ha.C) {
                            n.F = hq(p) + h;
                            return
                        }
                    } else {
                        c.Z === d.Z ? u.sa < v.sa ? b.F = hq(a) + h : a.F = hq(b) + h : n.F = hq(p) + h;
                        return
                    }
                }
}

function bq(a) {
    var b = a.A.N;
    return b < a.K.M.length ? b : -1
}

function fp(a, b, c) {
    var d = a.K
        , e = 0
        , f = b ? null : d.J.track;
    d.oa ? e = kp(a) : d.ha.A && d.G ? e = jp(a, c, b, f) : (b = Pk(d, !1, b, f)) && (e = gp(a, b, c) - a.A.A.A / 2);
    return e
}

function hp(a, b, c) {
    var d = a.K
        , e = a.A.A.A
        , f = (4.13 - .065) * e
        , g = b ? null : d.J.track;
    d.oa ? f = Gp(a) : d.ha.A ? d.G ? (b = Pk(d, !0, b, g)) && (f = gp(a, b, c) + e / 2) : f = jp(a, c, b, g) : (b = Pk(d, !0, b, g)) && (f = gp(a, b, c) + e / 2);
    return f
}

function iq(a, b) {
    var c = a.K;
    a = a.A;
    if (0 === c.fa) {
        if (0 === a.index || !b)
            return null;
        b = Co(a);
        a = b.O.A[c.J.track.index];
        return c.ea >= a.A.length ? null : Mp(b, c.J.track.index, c.ea, a.A[c.ea].length - 1)
    }
    return Mp(a, c.J.track.index, c.ea, c.fa - 1)
}

function ip(a, b) {
    var c = a.K;
    a = a.A;
    return c.fa === c.J.A[c.ea].length - 1 ? b && (b = Bo(a)) && (a = b.O.A[c.J.track.index]) && c.ea < a.A.length && a.A[c.ea].length ? Mp(b, c.J.track.index, c.ea, 0) : null : Mp(a, c.J.track.index, c.ea, c.fa + 1)
}

function jq(a) {
    return 0 === a.K.fa && a.A.I
}

function kq(a) {
    return a.A.S[a.G]
}

function lq(a, b) {
    var c = a.V;
    a = a.K.ea;
    var d = b.T;
    return -1 === c || d && a === b.C.ia || d && c === a && a !== b.C.ia || !d && c === a
}

function mq(a) {
    return -1 !== a.G && !kq(a).D
}

function nq(a, b) {
    var c = b.A
        , d = a.A
        , e = ao(d);
    if (c <= d.O.U && c >= e.A[0].O.U) {
        a: {
            e = e.A;
            for (var f = e.length, g; f--;)
                if (g = e[f],
                g.index <= d.index && g.O.U === c) {
                    e = g;
                    break a
                }
            e = e[0]
        }
        c = Wp(e, b);
        e = !!Vl(e.O);
        f = d.F + a.H;
        if (b.G || "" !== b.text || e) {
            if (a = c <= f + a.width) {
                d = d.A;
                a = 0;
                g = d.A;
                var h = b.G;
                b.text && (a += d.I.width(2 * g, 4, b.text + (h || e ? "   " : ""), !0));
                h && (a += g * (5 + (e ? 2.5 : 0)));
                e && (a += 8 * g);
                a = c + a >= f
            }
            return a
        }
    }
    return !1
}

function oq(a) {
    return Qp(a.A) + a.H
}

function pq(a) {
    var b = a.K;
    a = b.G ? (Rh(b.D ? 3 : b.ha.C)[0] - .16) * a.A.A.A : 0;
    b.D && (a *= .65);
    return a
}

function ep(a) {
    return a.H + pq(a) + a.F
}

function hq(a) {
    var b = a.A.A
        , c = a.K;
    a = Vn(b, c.oa ? Vo(a, b.D).I : jh[c.D ? 3 : c.ha.C]);
    c.D && (a *= .65);
    return a
}

function qq(a) {
    var b = hq(a)
        , c = b;
    0 !== (a.K.C & 8192) && a.K.G && (c += b);
    return c
}

function rq(a) {
    return oq(a) + hq(a) / 2
}

function sq(a, b) {
    return 58595 === Vo(a, b).I && Bk(a.K)
}

function Vo(a, b) {
    var c = a.K.J;
    if (3 <= c.P.pa)
        var d = c.Ua;
    else {
        d = c.O;
        c = c.A;
        var e = 0 === c.length;
        d = vl(d) && e && rh[kf(d.za)] ? !1 : e || 1 === c.length && 1 === c[0].length && c[0][0].oa && We(c[0][0].Z, uh)
    }
    return d ? b.I[Al(b, null, 1, !1, 0, 0)] : a.K.ha
}

function kp(a) {
    return a.A.A.A * (a.D - a.K.ha.G)
}

function tq(a, b, c, d, e, f, g) {
    if (6 === c && !Xi(b) && 4 !== b.F || 1 === c && !Ki(b))
        return null;
    var h = 6 === c
        , k = 1 === c
        , l = a.K;
    a = a.A;
    for (var m = l.J.track, n = d ? a.C : null, p = l.W, q = !0, r, u, v, w, y, x, z; a && (!d || a.C === n);) {
        v = a.D;
        r = 0;
        for (u = v.length; r !== u; r++)
            if (w = v[r],
                y = w.K,
            !(y.J.track !== m || q && Te(p, y.F)) && y.F === p && (!q || y.ea !== l.ea || y.fa > l.fa))
                for (x = y.A.length; x--;)
                    if (z = y.A[x],
                    h && z.ga === b.ga || k && Mi(z) && z.H.U === b.H.U)
                        return f && (z.C || Xi(z) || z.F) || g && z.C && 4 !== z.C.F ? null : e && (h && (Xi(z) || 4 === z.F) || k && Ki(z)) ? tq(w, z, c, d, e, f, g) || new uq(w, z) : new uq(w, z);
        a = Bo(a);
        q = !1;
        p = lf
    }
    return null
}

function vq(a, b, c) {
    if (0 === b && 25 === c && -1 !== a.P)
        return a.P;
    var d = a.K
        , e = a.A
        , f = ao(e)
        , g = e.A
        , h = g.C
        , k = d.J.track.C
        , l = Kk(d)
        , m = g.A
        , n = d.A
        , p = sk(d)
        , q = 0;
    if (k) {
        if (0 >= b && 0 <= c) {
            var r = 0;
            for (x of zo(To(a), d.J.track.index)) {
                var u = x.K;
                if (!sk(u)) {
                    if (u.oa) {
                        var v = kp(x);
                        Uo(x) && (v = Math.min(v, to(Uo(x), x)))
                    } else
                        v = Xh(u) && 2 === u.J.track.A ? fp(x, !0, !1) : fp(x, !1, !0);
                    0 > v && (v = -v / m,
                    v > r && (r = v))
                }
            }
            q += r
        }
        !p && 1 >= b && 1 <= c && !d.oa && (v = 0,
        l && (tk(d) && Sk(d, Pk(d, d.G, !0, null), !0) && (v += .8),
        uk(d) && (v += 1.3),
        vk(d) && Sk(d, Pk(d, d.G, !0, null), !1) && (v += .55)),
        d.G && Pj(d) || (u = Pk(d, !1, !1, null)) && Ki(u) && 1 > u.sa && (r = tq(a, u, 1, !1, !1, !1, !1),
        Rj(u, r ? r.A : null) && !Ik(d, !0) && (v = Math.max(v, 1.404))),
            q += v);
        if (!p && 2 >= b && 2 <= c && mq(a)) {
            var w = kq(a);
            if (wq(w) && w.C) {
                var y = 0 === b ? q * m : vq(a, 0, 1);
                r = 0;
                for (u = w.A.length; u--;)
                    w.A[u] !== a && (v = (vq(w.A[u], 0, 1) - y) / m,
                    v > r && (r = v));
                q += r
            }
        }
        !p && 3 >= b && 3 <= c && mq(a) && (w = kq(a),
        w.C && (xq(w) === a ? q += 2 : wq(w) && (q += 1.25)));
        if (!p && 4 >= b && 4 <= c && d.I)
            for (u = d.I.length,
                     y = 0 === b ? q * m : vq(a, 0, 3); u--;)
                r = d.I[u],
                Yh(r) && !Wh(r) && (v = -yq(zq(a, r), oq(a)) - y,
                0 < v && (q += .5 + v / m));
        !p && 5 >= b && 5 <= c && !d.oa && l && (qk(d) || rk(d)) && (q += 1.3);
        if (!p && 6 >= b && 6 <= c && d.H && Dk(d)) {
            y = 0 === b ? q * m : vq(a, 0, 5);
            r = 0;
            for (x of Aq(a))
                x !== a && (v = (vq(x, 0, 5) - y) / m,
                Bq(x) || (v -= 1.7),
                v > r && (r = v));
            q += r
        }
        !p && 7 >= b && 7 <= c && d.H && Dk(d) && (q += 2.5);
        if (8 >= b && 8 <= c) {
            r = 0;
            if (!d.oa) {
                if (Lk(d)) {
                    y = null;
                    for (u = n.length; u--;)
                        n[u].P && (y = n[u]);
                    y && (r += 2)
                }
                for (u = n.length; u--;)
                    Lj(n[u], h, !0) && (r += 1.3)
            }
            !d.oa && Lk(d) && (d.ja && (r += .5 + (1 === d.ja ? 2 : 1.25)),
            gk(d) && (r += 1.5),
            fk(d) && (r += 1.5));
            d.ta && Lk(d) && (r += 2.5);
            d.$ && Jk(d) && (r += 3);
            d.da && (r += 2.5);
            yk(d) && !d.J.track.F && (r += 3.5);
            u = d.J;
            u.F && 0 !== Fl(u.O) && (r += 2.5);
            ek(d) && (r = Math.max(r, 1.5));
            q += r
        }
        if (9 >= b && 9 <= c && d.Y) {
            l = oq(a) + Cq(a, !0);
            y = 0 === b ? q * m : vq(a, 0, 8);
            r = 0;
            n = Dq(f, d.J.track, e.index, null, a.I, null, null);
            for (u = n.length; u--;) {
                var x = n[u];
                x !== a && (x.I !== a.I || x.K.ea < d.ea) && oq(x) < l && (v = (vq(x, 0, 10) - y) / m,
                v > r && (r = v))
            }
            q += r
        }
        10 >= b && 10 <= c && d.Y && (q += 1 + Eq(a, !0, m));
        if (h.P && (h = Fq(To(a), d.J.track, !0).length)) {
            if (11 >= b && 11 <= c) {
                y = 0 === b ? q * m : vq(a, 0, 10);
                r = 0;
                n = Dq(f, d.J.track, f.A[0].index, null, 0, null, null);
                for (u = n.length; u--;)
                    x = n[u],
                    x !== a && (v = (vq(x, 0, 10) - y) / m,
                    v > r && (r = v));
                q += r + 1
            }
            12 >= b && 12 <= c && (q += 1.75 * h)
        }
    }
    if (13 >= b && 13 <= c && d.N && (k || d.J.track.F)) {
        y = 0 === b ? q * m : vq(a, 0, 12);
        r = 0;
        n = e.D;
        for (u = n.length; u--;)
            x = n[u],
            x !== a && x.K.J.track === d.J.track && (v = (vq(x, 0, 12) - y) / m,
            v > r && (r = v));
        2 > y / m + r + 1 && (r = 1 - y / m);
        q += r
    }
    14 >= b && 14 <= c && (d.J.track.ba && !g.da ? q += d.J.track.ia ? 11.3 : 4 : d.J.track.ba && d.N && (q = bk(d).Sa && d.J.track.ia ? q + 11.3 : q + 2.8));
    if (u = 15 >= b && 15 <= c)
        u = d.J.O,
            u = null !== u.G && 2 < u.G;
    u && !vn(g) && (g.W ? q += 1.5 * .8 + 1 : (y = 0 === b ? q : vq(a, 0, 14) / m,
        q += Math.max(0, 1.5 * .8 + 1 - y)));
    if (16 >= b && 16 <= c && Gq(f, d.J)) {
        y = 0 === b ? q * m : vq(a, 0, 15);
        r = 0;
        for (x of cq(e, d.J.track.index))
            x !== a && (v = (vq(x, 0, 15) - y) / m,
            v > r && (r = v));
        q += r
    }
    17 >= b && 17 <= c && Gq(f, d.J) && (q += 3);
    if (18 >= b && 18 <= c && Hq(f, d.J))
        for (x = d.J.O.F.length; x--;)
            if (!ei(d.J.O.F[x]) && a.A.width - a.H - a.width < 8.5 * m) {
                y = 0 === b ? q * m : vq(a, 0, 17);
                r = 0;
                n = Op(e, d.J.track, !1);
                for (u = n.length; u--;)
                    x = n[u],
                    x !== a && x.A.width - x.H - x.width < 8.5 * m && (v = (vq(x, 0, 17) - y) / m,
                    v > r && (r = v));
                q += r;
                break
            }
    if (19 >= b && 19 <= c && Hq(f, d.J) && (x = Iq(a, !0),
        k = Iq(a, !1),
        r = h = 0,
    x || k)) {
        for (u = d.J.O.F.length; u--;)
            ei(d.J.O.F[u]) ? x && (h += 4) : k && (r += 1.8);
        q += Math.max(h, r)
    }
    if (20 <= c && 21 >= b && g.da) {
        k = [];
        x = a.A;
        u = x.A.D.G;
        h = u.length;
        r = Vl(x.O);
        if (Jq(ao(x)) === a.K.J.track)
            for (; h--;)
                nq(a, u[h]) && k.push(u[h]);
        r && !k.length && k.push(new Sh(x.O.U, 0, 1, 120, 0, "", !1, !0));
        if (k.length) {
            if (20 >= b && 20 <= c) {
                y = 0 === b ? q * m : vq(a, 0, 19);
                r = 0;
                n = Dq(f, d.J.track, f.A[0].index, lf, null, null, null);
                for (u = n.length; u--;) {
                    x = n[u];
                    if (h = x !== a)
                        a: {
                            h = x;
                            v = k;
                            if (Jq(ao(h.A)) === h.K.J.track)
                                for (l = v.length; l--;)
                                    if (nq(h, v[l])) {
                                        h = !0;
                                        break a
                                    }
                            h = !1
                        }
                    h && (v = (vq(x, 0, 19) - y) / m,
                    v > r && (r = v))
                }
                q += r
            }
            21 >= b && 21 <= c && Jq(f) === d.J.track && (q += 1.7 + .77 * g.M / m)
        }
    }
    if (22 >= b && 22 <= c && d.T) {
        l = oq(a) + Kq(a, !0);
        y = 0 === b ? q * m : vq(a, 0, 21);
        r = 0;
        n = Dq(f, d.J.track, e.index, null, a.I, null, null);
        for (u = n.length; u--;)
            x = n[u],
            x !== a && oq(x) < l && (v = (vq(x, 0, 21) - y) / m,
            v > r && (r = v));
        q += r
    }
    23 >= b && 23 <= c && d.T && (q += .8 + Lq(a, !0, m));
    if (24 >= b && 24 <= c && !d.fa && !d.ea && Mq(f, d.J)) {
        y = 0 === b ? q * m : vq(a, 0, 23);
        r = 0;
        n = Op(e, d.J.track, !1);
        for (u = n.length; u--;)
            x = n[u],
            x !== a && (v = (vq(x, 0, 23) - y) / m,
            v > r && (r = v));
        q += r
    }
    25 >= b && 25 <= c && !d.fa && !d.ea && Mq(f, d.J) && (d = q,
        f = g.A,
        q = e.O,
        x = 0,
    q.S && (u = 1.6 * f,
        x += u * Gf(g.I, u, 2, q.S, !0, !1, Eo(e)).length),
    q.T && (x += .5 * f + 2.2 * f + (q.S ? f : 0)),
        q = d + (1 + x / m));
    q *= m;
    0 === b && 25 === c && (a.P = q);
    return q
}

function zq(a, b) {
    for (var c = b.A, d = a.A.C, e = a, f = fc(c, a.K), g; a;) {
        a = iq(a, !0);
        if (!a || a.A.C !== d)
            break;
        g = fc(c, a.K);
        if (-1 === g || g > f)
            break;
        e = a
    }
    return new Nq(e, b)
}

function* Aq(a) {
    for (var b = a.K.H, c = a, d = a.A.C; c && c.K.H === b && c.A.C === d;)
        yield c,
            c = iq(c, !0);
    for (c = ip(a, !0); c && c.K.H === b && c.A.C === d;)
        yield c,
            c = ip(c, !0)
}

function Bq(a) {
    var b = iq(a, !0);
    return null === b || b.K.H !== a.K.H || jq(a)
}

function Cq(a, b) {
    var c = a.A;
    return Math.min(Yn(c.A, b ? a.K.Y : a.K.X), ao(c).width + c.A.ba - c.F - a.H)
}

function Eq(a, b, c) {
    var d = b ? a.K.Y : a.K.X;
    return d.A * Gf(a.A.A.I, d.A * c, d.C, d.text, !1, d.D, Cq(a, b)).length
}

function Iq(a, b) {
    var c = a.K
        , d = a.A.A.A;
    return b ? !c.ea && !c.fa && a.H - a.A.D[0].H < 4 * d : !c.ea && Ek(c) && a.A.width - a.H - a.width < 8.5 * d
}

function Kq(a, b) {
    var c = a.A
        , d = a.K
        , e = c.G
        , f = d.J.track
        , g = c.A.A;
    a = a.I;
    var h, k;
    var l = a + 1;
    for (h = c.H; l < h; l++)
        for (k of yo(e[l]))
            if (k !== d && k.J.track === f && (k.T && b || k.S && !b))
                return e[l].A - e[a].A - g;
    return c.width - e[a].A - (b ? 0 : 1.5 * g)
}

function Lq(a, b, c) {
    var d = b ? a.K.T : a.K.S;
    return d.A * Gf(a.A.A.I, d.A * c, d.C, d.text, !1, d.D, Kq(a, b)).length
}

function Gp(a) {
    return a.A.A.A * (a.D + a.K.ha.D)
}

function Oq(a, b, c) {
    if (0 === b && 16 === c && -1 !== a.N)
        return a.N;
    var d = a.K
        , e = d.J.track
        , f = a.A
        , g = ao(f)
        , h = f.A
        , k = !Kk(d)
        , l = h.A
        , m = sk(d)
        , n = 0;
    if (0 >= b && 0 <= c) {
        var p = 0;
        for (w of zo(To(a), e.index)) {
            var q = w.K;
            if (!sk(q)) {
                if (q.oa) {
                    var r = Gp(w);
                    Uo(w) && (r = Math.max(r, to(Uo(w), w)));
                    r = 4.13 * l - r
                } else
                    r = Xh(q) && 1 === q.J.track.A ? 4.13 * l - hp(w, !0, !1) : 4.13 * l - hp(w, !1, !0);
                0 > r && (r = -r / l,
                r > p && (p = r))
            }
        }
        n += p
    }
    !m && 1 >= b && 1 <= c && !d.oa && (r = 0,
    k && (tk(d) && Sk(d, Pk(d, d.G, !0, null), !0) && (r += .8),
    uk(d) && (r += 1.3),
    vk(d) && Sk(d, Pk(d, d.G, !0, null), !1) && (r += .55)),
    (d.G || !Pj(d)) && (q = Pk(d, !0, !1, null)) && Ki(q) && 5 < q.sa && (p = tq(a, q, 1, !1, !1, !1, !1),
    Rj(q, p ? p.A : null) || Ik(d, !1) || (r = Math.max(r, 1.404))),
        n += r);
    if (!m && 2 >= b && 2 <= c && mq(a)) {
        var u = kq(a);
        if (wq(u) && !u.C) {
            var v = 0 === b ? n * l : Oq(a, 0, 1);
            p = 0;
            for (q = u.A.length; q--;)
                u.A[q] !== a && (r = (Oq(u.A[q], 0, 1) - v) / l,
                r > p && (p = r));
            n += p
        }
    }
    !m && 3 >= b && 3 <= c && mq(a) && (u = kq(a),
    u.C || (xq(u) === a ? n += 2 : wq(u) && (n += 1.25)));
    if (!m && 4 >= b && 4 <= c && d.I)
        for (q = d.I.length,
                 v = 0 === b ? n * l : Oq(a, 0, 3); q--;)
            r = d.I[q],
            Yh(r) || Wh(r) || (r = (yq(zq(a, r), oq(a)) - v) / l,
            4.13 < r && (n += .5 + r - 4.13));
    !m && 5 >= b && 5 <= c && !d.oa && k && (qk(d) || rk(d)) && (n += 1.3);
    if (!m && 6 >= b && 6 <= c && d.H && !Dk(d)) {
        v = 0 === b ? n * l : Oq(a, 0, 5);
        p = 0;
        for (w of Aq(a))
            w !== a && (r = (Oq(w, 0, 5) - v) / l,
            Bq(w) || (r -= 1.7),
            r > p && (p = r));
        n += p
    }
    !m && 7 >= b && 7 <= c && d.H && !Dk(d) && (n += 2.5);
    if (!m && 8 >= b && 8 <= c) {
        var w = d.A;
        k = !1;
        for (q = w.length; q--;)
            Lj(w[q], h.C, !1) && (k || (n += .5,
                k = !0),
                n += 1.3);
        Lk(d) || (d.oa || (gk(d) && (n += 1.5),
        fk(d) && (n += 1.5)),
        d.ta && (n += 2.5));
        !d.$ || Jk(d) || Pq(g, d) || (n += 3)
    }
    if (9 >= b && 9 <= c && d.X) {
        m = oq(a) + Cq(a, !1);
        v = 0 === b ? n * l : Oq(a, 0, 8);
        p = 0;
        k = Dq(g, e, f.index, null, a.I, null, null);
        for (q = k.length; q--;)
            w = k[q],
            w !== a && (w.I !== a.I || w.K.ea < d.ea) && oq(w) < m && (r = (Oq(w, 0, 10) - v) / l,
            r > p && (p = r));
        n += p
    }
    10 >= b && 10 <= c && d.X && (n += .4 + Eq(a, !1, l));
    if (11 >= b && 11 <= c && h.D.V && g.T[e.index]) {
        k = Dq(g, e, 0, null, 0, null, null);
        v = 0 === b ? n * l : Oq(a, 0, 10);
        p = 0;
        for (q = k.length; q--;)
            w = k[q],
                r = (Oq(w, 0, 10) - v) / l,
            r > p && (p = r);
        n += p
    }
    12 >= b && 12 <= c && h.D.V && g.T[e.index] && (n += 2 * g.T[e.index] + .5);
    if (13 >= b && 13 <= c && (e.P || g.T[e.index]) && (k = Qq(a),
        q = k.length)) {
        v = 0 === b ? n * l : Oq(a, 0, 12);
        for (p = 0; q--;)
            r = (Oq(k[q], 0, 12) - v) / l,
            r > p && (p = r);
        n += p
    }
    14 >= b && 14 <= c && (d.wa || e.P || g.T[e.index]) && (d.wa || !d.ea && e.P && Qq(a).length ? n += 2 : d.$ && !Jk(d) && Pq(g, d) && (n += 3));
    if (15 >= b && 15 <= c && d.S) {
        m = oq(a) + Kq(a, !1);
        v = 0 === b ? n * l : Oq(a, 0, 14);
        p = 0;
        k = Dq(g, e, f.index, null, a.I, null, null);
        for (q = k.length; q--;)
            w = k[q],
            w !== a && oq(w) < m && (r = (Oq(w, 0, 14) - v) / l,
            r > p && (p = r));
        n += p
    }
    16 >= b && 16 <= c && d.S && (n += .8 + Lq(a, !1, l));
    n *= l;
    0 === b && 16 === c && (a.N = n);
    return n
}

function Qq(a) {
    for (var b = a.A.A.G, c = a.K, d = c, e = d.J.track, f = a.A.index, g = d.F, h = f, k = g, l = -1 === d.ya ? null : d.J.track.P[d.ya], m = ui(e, d.J.O.U, g, !1) || l, n = !1; m;)
        n = !0,
            f -= d.J.O.U - m.Pa,
            0 > f ? m = null : (g = m.ab,
                (m = Np(b[f], e, g)) && m.K.$ ? (d = m.K,
                    m = ui(e, d.J.O.U, g, !1)) : m = null);
    d = c;
    for (m = ui(e, d.J.O.U, c.F, !0) || l; m;)
        n = !0,
            h += m.Na - d.J.O.U,
            h + 1 > b.length ? m = null : (k = m.cb,
                (m = Np(b[h], e, k)) && m.K.$ ? (d = m.K,
                    m = ui(e, d.J.O.U, k, !0)) : m = null);
    return n ? Dq(ao(a.A), e, f, g, null, h, k) : []
}

function bp(a, b, c, d) {
    var e = 0, f = a.K, g = a.A.A, h = g.C, k = g.A, l = f.A, m;
    0 >= c && 0 <= d && !f.G && 1 === b.Y && !a.F && (e += hq(a));
    1 >= c && 1 <= d && cj(b) && (e += Hj(b) * (Vn(g, 57590) + .3 * k));
    if (2 >= c && 2 <= d) {
        if (1 !== l.length) {
            var n = l.length;
            var p = 0 === c ? e : bp(a, b, 0, 1);
            for (m = 0; n--;)
                if (l[n] !== b) {
                    var q = bp(a, l[n], 0, 1) - p;
                    q > m && (m = q)
                }
            e += m
        }
        if (b.V && 1 < b.S) {
            p = 1;
            for (var r = b.S - 1, u = Fq(To(a), f.J.track, !1); p <= r; p++) {
                n = u.length;
                for (m = 0; n--;)
                    u[n].S === p && (q = Wn(g, u[n]) + .35 * k,
                    q > m && (m = q));
                e += m
            }
        }
    }
    3 >= c && 3 <= d && b.V && (e += Wn(g, b) + .35 * k);
    if (4 >= c && 4 <= d && (1 === b.I || 2 === b.I || b.I && jq(a))) {
        n = l.length;
        if (1 < n) {
            p = 0 === c ? e : bp(a, b, 0, 3);
            for (m = 0; n--;)
                l[n] !== b && (q = bp(a, l[n], 0, 3) - p,
                q > m && (m = q));
            e += m
        }
        e += 1.8 * k
    }
    if (5 >= c && 5 <= d && 1 !== l.length) {
        n = l.length;
        p = 0 === c ? e : bp(a, b, 0, 4);
        for (m = 0; n--;)
            l[n] !== b && (q = bp(a, l[n], 0, 4) - p,
            q > m && (m = q));
        e += m
    }
    6 >= c && 6 <= d && f.ba && (e += 1.5 * k);
    7 >= c && 7 <= d && (tj(b) || uj(b)) && (e += Vn(g, 58848) + .4 * k);
    8 >= c && 8 <= d && Kj(b) && 3 === b.G.position && (e += Un(g, b, b.G, !0) + .5 * k);
    9 >= c && 9 <= d && Jj(b, h, !0) && 3 === b.D.position && (e += Un(g, b, b.D, !1) + .5 * k);
    if (b = 10 >= c && 10 <= d && jq(a))
        a: {
            if (f.I)
                for (b = f.I.length; b--;)
                    if (f !== f.I[b].A[0]) {
                        b = !0;
                        break a
                    }
            for (b = f.A.length; b--;)
                if (Mi(f.A[b])) {
                    b = !0;
                    break a
                }
            b = !1
        }
    b && (e += 2.6 * k);
    11 >= c && 11 <= d && f.H && Bq(a) && (e = Math.max(e, .5 * k));
    return e
}

function eq(a, b) {
    return Vn(a.A.A, jh[Oj(b)]) * Hj(b)
}

function $o(a, b, c, d) {
    var e = 0
        , f = a.K
        , g = a.A.A
        , h = g.C
        , k = g.A
        , l = 0;
    0 >= c && 0 <= d && (2 === b.Y && (e += hq(a)),
    a.F && (e += a.F));
    1 >= c && 1 <= d && (l = e += eq(a, b));
    2 >= c && 2 <= d && cj(b) && (e += Hj(b) * (Vn(g, 57590) + .3 * k));
    if (!f.D && f.ha.N) {
        if (3 >= c && 3 <= d) {
            for (var m = f.A, n = m.length, p = 0 === c ? e : $o(a, b, 0, 2), q = 0; n--;)
                if (m[n] !== b) {
                    var r = $o(a, m[n], 0, 2) - p;
                    r > q && (q = r)
                }
            e += q
        }
        4 >= c && 4 <= d && f.ha.Ma && (r = Vn(g, 57831) * Hj(b),
            e += f.ha.Ma * r + Rq(a) + .45 * (f.ha.Ma - 1) * k + .45 * k)
    }
    5 >= c && 5 <= d && b.F && (e += 1.8 * k);
    6 >= c && 6 <= d && (sj(b) || ij(b)) && (e += Vn(g, 58840) + .4 * k);
    7 >= c && 7 <= d && Jj(b, h, !0) && 4 === b.D.position && (e += Un(g, b, b.D, !1) + .5 * k);
    8 >= c && 8 <= d && Kj(b) && 4 === b.G.position && (e += Un(g, b, b.G, !0) + .5 * k);
    9 >= c && 9 <= d && (f.G && !f.oa && Uk(f) && -1 === a.C && e === l && (b = e,
        c = a.K,
        d = Vn(a.A.A, Vk(c, c.G)),
    c.D && (d *= .65),
        e = b + d),
    a.F && (e += a.F));
    return e
}

function Rq(a) {
    var b = a.K;
    return !b.oa && -1 === a.C && b.G && b.ha.F ? 1.2 : .45
}

function fq(a, b, c) {
    return gp(a, b, c) + a.A.A.A / 2 * (a.K.G ? 1 : -1)
}

function gq(a, b) {
    return gp(a, b, !0) + a.A.A.A / 2 * (a.K.G ? -1 : 1)
}

function jp(a, b, c, d) {
    return (c = Pk(a.K, a.K.G, c, d)) ? vo(a, c, b, d) : 0
}

function vo(a, b, c, d) {
    var e = a.K.G;
    return gp(a, b, c) + (e ? -1 : 1) * Sq(a, e, !1, d)
}

function Sq(a, b, c, d) {
    if (1 === a.K.ra)
        return 0;
    var e = a.K
        , f = a.A.A.A
        , g = e.A
        , h = g.length
        , k = a.M
        , l = 0;
    if (1 < h) {
        l = h;
        for (var m = null, n = null; l--;)
            if (h = g[l],
            !d || xj(h) === d) {
                if (null === m || Mj(h, m))
                    m = h;
                if (null === n || Mj(n, h))
                    n = h
            }
        if (!m)
            return 0;
        l = gp(a, n, !0) - gp(a, m, !0);
        k += l;
        c && (k = b ? k - Qj(n, !0, f) : k + Qj(m, !1, f));
        h = b ? m : n
    } else {
        h = g[0];
        if (d && xj(h) !== d)
            return 0;
        c && (k -= Qj(h, b, f) * (b ? 1 : -1))
    }
    c = h.sa;
    !e.D && !b && -5 >= c ? k += 2 * f - gp(a, h, !0) : !e.D && b && 11 <= c ? k += gp(a, h, !0) - 2 * f : (e.D ? a = .65 * (-1 === a.C ? 3.5 : 3) : (a = e.ha.F && -1 === a.C ? 3.5 : b ? .25 * c + 2.5 : -.25 * c + 4,
        3.5 < a ? a = 3.5 : 2.5 > a && (a = 2.5)),
        k += a * f);
    if (2 === e.ka || 3 === e.ka)
        e = 2 === e.ka ? 3 * f : 3.5 * f,
        k - l < e && (k = l + e);
    return k
}

function ap(a) {
    var b = 0
        , c = a.K;
    if (c = c.ha ? c.ha.Ma : 0) {
        var d = a.A.A
            , e = Rq(a) * d.A;
        b += e + c * Vn(d, 57831) + 2 * (c - 1) * e
    }
    return b + hq(a)
}

function Tq(a, b) {
    var c = a.K.A;
    b = c.length ? b ? c[c.length - 1] : c[0] : null;
    var d;
    b ? d = oq(a) + dq(a, b) + eq(a, b) / 2 : d = oq(a) + hq(a) / 2;
    return d
}

function Uq(a, b, c) {
    var d = a.A.A.A;
    a = gp(a, b, !0) + 1.6 * d * (1 - .68);
    c = c.C;
    1 === c ? a -= .4 * d : 3 === c ? a += .4 * d : 2 === c && (a -= .2 * d);
    return a
}

function Vq(a, b, c, d) {
    a = d ? ip(a, !0) : iq(a, !0);
    var e;
    if (a)
        for (d = a.K.A,
                 e = d.length; e--;)
            if (b && Bg(d[e].H, b) || c && d[e].M.U === c)
                return new uq(a, d[e]);
    return null
}

function Wq(a, b, c) {
    a = c ? ip(a, !0) : iq(a, !0);
    if (a) {
        var d = a.K.A;
        for (c = d.length; c--;)
            if (d[c].ga === b)
                return new uq(a, d[c])
    }
    return null
}

function Xq(a, b) {
    return 10 <= b.F ? Vq(a, null, b.F / 10, !0) : Wq(a, b.ga, !0)
}

function Yq(a) {
    var b = a.K.J.track
        , c = To(a);
    a = [];
    var d;
    for (d of yo(c))
        if (d.J.track === b && !d.oa) {
            var e = d.A;
            for (c = e.length; c--;)
                e[c].T && a.push(e[c])
        }
    a && a.sort(Lh);
    return a
}

function Zq(a) {
    var b = []
        , c = a.A
        , d = c.A.D.G
        , e = d.length;
    if (c.A.da && Jq(ao(c)) === a.K.J.track)
        for (; e--;) {
            var f = d[e];
            c = a.K;
            a: if (c.D) {
                var g = Zj(c);
                for (var h = c.fa, k = g.length; h < k; h++)
                    if (!g[h].D) {
                        g = g[h];
                        break a
                    }
                g = null
            } else
                g = c;
            h = f.C * c.J.O.za.qa;
            if (f = (f.G || "" !== f.text) && f.A === c.J.O.U && c.P <= h)
                f = Ti(c, a.A.A.D, !1),
                    f = !f || f.F !== c.F;
            f && (!g || g.W.qa > h) && b.push(d[e])
        }
    return b
}

function $q(a, b) {
    var c = a.K;
    if (3 === b && !c.H || 4 === b && !nk(c) || 5 === b && !ok(c))
        return a;
    for (var d = a.A.C, e; a;) {
        e = ip(a, !0);
        if (!e || e.A.C !== d)
            break;
        if (3 === b)
            if (e.K.H === c.H)
                a = e;
            else
                break;
        else if (4 === b)
            if (nk(e.K))
                a = e;
            else
                break;
        else if (5 === b)
            if (ok(e.K))
                a = e;
            else
                break
    }
    return a
}

function ar(a, b) {
    var c = a.A
        , d = a.K.J.track.index
        , e = a;
    a = a.I + 1;
    for (var f, g, h, k, l; c;) {
        for (f = c.H; a < f; a++) {
            a: {
                g = e.K;
                var m = g.A;
                k = g.I;
                if (l = m.length) {
                    for (; l--;)
                        if (Ki(m[l])) {
                            g = !0;
                            break a
                        }
                    if (k)
                        for (l = k.length; l--;)
                            if (m = k[l],
                            m.A[m.A.length - 1] !== g) {
                                g = !0;
                                break a
                            }
                }
                g = !1
            }
            if (!g)
                return e;
            g = c.G[a];
            if (1 === g.G) {
                k = null;
                l = !1;
                for (h of zo(g, d)) {
                    if (h.K.M && h.K.M.length > b && h.K.M[b])
                        return e;
                    k = h;
                    h.K.oa || (l = !0)
                }
                if (k) {
                    if (!l)
                        return e;
                    e = k
                }
            }
        }
        c = Bo(c);
        a = 0
    }
    return e
}

class $p {
    constructor(a, b, c) {
        this.A = a;
        this.K = b;
        this.I = c;
        this.T = this.S = this.F = this.H = this.width = 0;
        this.C = this.N = this.P = -1;
        this.M = 0;
        this.G = -1;
        this.D = 0;
        this.V = -1
    }
}

class uq {
    constructor(a, b) {
        this.C = a;
        this.A = b
    }
}

function br(a) {
    return -1 !== a.A
}

function cr(a) {
    a.A = -1;
    a.C = 0;
    a.H = null;
    a.G = !1;
    a.D = !1;
    a.F = !1;
    a.I = -1
}

function dr(a, b) {
    var c = !0;
    if (a.A < b.A)
        c = !1;
    else if (a.A > b.A)
        c = !0;
    else if (a.C < b.C)
        c = !1;
    else if (a.D && b.D || a.F && b.F)
        c = a.time > b.time;
    else if (a.D || b.D)
        c = b.D;
    else if (a.F || b.F)
        c = a.F;
    return c
}

function er(a, b, c) {
    return a.A === b && (c && 0 === a.C || !c && 1 === a.C)
}

function fr(a, b) {
    return -1 === a.A || a.A >= b.G.length ? -1 : Kp(b.G[a.A], a.I)
}

function gr(a, b) {
    if (-1 === a.A)
        return 0;
    b = b.G[a.A];
    return Nl(b.O) ? a.C : b.H ? (b.G[0].C.qa + a.C * Rp(b).qa) / b.O.za.qa : 0
}

function hr(a, b) {
    return b.G[a.A]
}

class ir {
    constructor() {
        this.A = -1;
        this.C = 0;
        this.H = null;
        this.F = this.D = this.G = !1;
        this.time = 0;
        this.I = -1
    }

    set(a, b, c, d, e, f, g, h, k) {
        var l = !1;
        e || f || g || 0 !== c && 1 !== c || -1 === b || (a = a.G[b].D,
        a.length && (d = 0 === c ? a[0].K.F : a[a.length - 1].K.W,
            e = !0));
        b !== this.A && (this.A = b,
            l = !0);
        c !== this.C && (this.C = c,
            l = !0);
        d !== this.H && (this.H = d,
            l = !0);
        e !== this.G && (this.G = e,
            l = !0);
        f !== this.D && (this.D = f,
            l = !0);
        g !== this.F && (this.F = g,
            l = !0);
        h !== this.time && (this.time = h,
            l = !0);
        k !== this.I && (this.I = k,
            l = !0);
        return l
    }
}

function wq(a) {
    var b = a.A[0];
    a = a.A[a.A.length - 1];
    if (-1 !== b.C && b.C === a.C) {
        var c = Uo(b);
        if (c.A[0] === b && jr(c) === a)
            return !1
    }
    return !0
}

function xq(a) {
    return a.A[Math.ceil(a.A.length / 2) - 1]
}

class Hp {
    constructor(a, b, c, d) {
        this.A = a;
        this.D = c;
        this.F = a[0].K.ha.Za;
        this.G = a[0].K.ha.fb;
        for (c = a.length; c--;)
            a[c].G = b;
        if (!(a = d))
            a: if (wq(this)) {
                a = this.A;
                b = 0;
                for (d = a.length; b < d; b++)
                    if (!a[b].K.oa) {
                        a = a[b].K.G ? 1 : 2;
                        break a
                    }
                a = 2
            } else
                a = Uo(this.A[0]).F ? 1 : 2;
        this.C = 1 === a
    }

    text() {
        var a = this.F
            , b = this.G;
        if (3 === a && 2 === b)
            return "3";
        if (2 === a && 3 === b)
            return "2";
        if (4 === a && 3 === b)
            return "4";
        if (8 === a && 8 === b)
            return "8";
        switch (a) {
            case 5:
            case 6:
            case 7:
                if (4 === b)
                    return a.toString();
                break;
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
                if (8 === b)
                    return a.toString()
        }
        return a + ":" + b
    }
}

function to(a, b) {
    var c = b.K
        , d = b.A.A
        , e = so(a)
        , f = dp(a)
        , g = d.A
        , h = ep(e);
    e = jp(e, !1, !0, a.D);
    var k = ep(f);
    f = jp(f, !1, !0, a.D);
    f = a.G ? 0 : h === k ? 0 : (f - e) / (k - h);
    b = f * ep(b) + (e - f * h) + (a.F ? .5 : -.5) * g / 2;
    d = 0 === c.fa ? 0 : Math.min(Uk(Ti(c, d.D, !0)), Uk(c));
    1 < d && c.G !== a.F && (b += (c.G ? -.5 : .5) * g * 1.5 * (d - 1));
    return b
}

function jr(a) {
    return a.A[a.C - 1]
}

function so(a) {
    if (a.G) {
        var b = a.A, c = a.C, d = a.D, e;
        for (e = 0; e !== c; e++) {
            var f = b[e];
            if (Fk(f.K, d))
                return f
        }
    }
    return a.A[0]
}

function dp(a) {
    if (a.G)
        for (var b = a.A, c = a.C, d = a.D, e; c--;)
            if (e = b[c],
                Fk(e.K, d))
                return e;
    return a.A[a.C - 1]
}

class Zp {
    constructor(a, b, c) {
        this.A = b;
        for (var d = this.C = b.length, e = 0 !== b[0].K.J.track.A && Ej(b[0].K.J).track.C, f = !1, g, h, k; d--;)
            if (g = b[d],
                g.M = 0,
                g.C = c,
                g = g.K,
            !g.oa && e && !f)
                for (h = g.A.length; h--;)
                    if (yj(g.A[h])) {
                        f = !0;
                        k = 0 !== (g.C & 4096);
                        break
                    }
        this.G = f;
        a: {
            c = this.A;
            d = this.C;
            for (g = c[0].A.A.C.C; d--;)
                if (e = c[d].K,
                null !== e.aa && !g && !Xh(e)) {
                    c = 1 === e.aa;
                    break a
                }
            if (Zh(c[0].K.J))
                c = 0 === c[0].K.V;
            else {
                var l = h = g = 0
                    , m = 0;
                for (d = this.C; d--;) {
                    e = c[d].K;
                    var n = Math.abs(Qk(e));
                    0 !== (e.C & 4096) ? (g++,
                    n > l && (l = n)) : (h++,
                    n > m && (m = n))
                }
                c = g === h ? l > m : g > h
            }
        }
        this.F = c;
        if (f) {
            b = b[0].K.J.track;
            if (k && this.F && 2 === b.A || !k && !this.F && 1 === b.A)
                b = zj(a, b);
            this.D = b
        } else
            this.D = null
    }

    width() {
        return ep(jr(this)) - ep(this.A[0])
    }

    isVisible() {
        for (var a = this.A, b = this.C; b--;)
            if (Pj(a[b].K) && !sk(a[b].K))
                return !0;
        return !1
    }
}

function yq(a, b) {
    for (var c = nd(a.A, a.F, a.C, a.D, .1, a.G, a.height, a.height, a.height + a.H), d = 0, e = 1, f, g = 0, h = 0; 1E3 > g;) {
        h = (d + e) / 2;
        f = 1 - h;
        f = f * f * f * a.A + 3 * f * f * h * c[8] + 3 * f * h * h * c[10] + h * h * h * a.C;
        if (1 >= Math.abs(f - b))
            break;
        b > f ? d = h : e = h;
        g++
    }
    b = 1 - h;
    return b * b * b * a.F + 3 * b * b * h * c[9] + 3 * b * h * h * c[11] + h * h * h * a.D
}

class Nq {
    constructor(a, b) {
        var c = a.A, d = c.A, e = a.K, f = d.A, g = f / 2, h = 1.17 * f, k = 2.34 * f, l = c.C, m = b.A, n = m.length,
            p = Yh(b), q = Tq(a, p), r = !1, u = e != m[0], v;
        b = b.A;
        var w = b.length
            , y = !1;
        if (b[0].D && !b[w - 1].D && (y = !0,
        2 < w))
            for (v = 1; v < w - 1; v++)
                if (!b[v].D) {
                    y = !1;
                    break
                }
        v = y;
        y = fc(m, e);
        var x = e;
        for (w = y + 1; w < n;) {
            b = m[w];
            if (b.J.O === c.O)
                x = b;
            else {
                var z = Bo(c);
                if (!z || z.O !== b.J.O)
                    break;
                if (z.C !== l) {
                    r = !0;
                    break
                }
                x = b;
                c = z
            }
            y = w;
            w++
        }
        b = Do(c, x);
        u && (q = oq(a) - 2.6 * f);
        u = r ? c.F + c.width : v ? oq(b) - g / 2 : Tq(b, p);
        w = (u - q) / f;
        a = p ? fp(a, !0, !0) - g : hp(a, !0, !0) + g;
        v ? g = a : (g = p ? fp(b, !0, !0) - g : hp(b, !0, !0) + g,
        r && (g += f * (p ? -1 : 1)));
        h = 5 >= w ? h : 10 <= w ? k : h + (k - h) * (w - 5) / 5;
        if (!v)
            for (k = (g - a) / (u - q),
                     r = a - k * q,
                     w = y + 1; w--;) {
                b = m[w];
                v = Do(c, b);
                l = oq(v);
                y = k * l + r;
                l = (.5 - Math.abs(.5 - (l - q) / (u - q))) / .5;
                p ? (y -= h * l / 3,
                (v = vq(v, 0, 3)) && -y < v && (a -= v + y,
                    g -= v + y,
                    r -= v + y)) : (y -= 4.13 * f - h * l / 3,
                (v = Oq(v, 0, 3)) && y < v && (a += v - y,
                    g += v - y,
                    r += v - y));
                if (b === e)
                    break;
                0 < w && m[w - 1].J.O.U < b.J.O.U && (c = Co(c))
            }
        a = Rn(d, a, 0, p, !0);
        g = Rn(d, g, 0, p, !0);
        this.A = q;
        this.C = u;
        this.F = a;
        this.D = g;
        this.G = p;
        this.height = h;
        this.H = .28 * f
    }
}

function kr(a) {
    return 5 === a.C.F ? a.ma : Mn(a.C) + a.M
}

function ro(a) {
    if (a.C.Y) {
        a: {
            var b = a.A;
            if (b.length) {
                b = b[b.length - 1].D;
                for (var c = b.length; c--;)
                    if (xk(b[c].K)) {
                        b = !0;
                        break a
                    }
            }
            b = !1
        }
        b = b ? 2 : 0
    } else
        b = 2.5;
    return a.C.A * b
}

function uo(a, b) {
    return a.M + lr(a, b.index)
}

function Mm(a, b, c, d, e, f, g, h, k, l, m) {
    a.U = b;
    a.width = c;
    a.F = -1;
    a.A = e;
    a.N = f;
    a.X = g;
    a.H = h;
    a.M = k;
    a.S = l;
    var n = !a.C.T && a.C.C.ja && !a.C.W, p = a.A, q = p.length, r = a.P.C, u = r.length, v, w, y, x = !1, z = [];
    for (v = 0; v !== u; v++) {
        var C = q;
        if ((w = r[v].isVisible()) && n) {
            for (y = !1; C--;)
                if (yl(p[C].O.A[v], !0, !0) && (y = !0,
                    yl(p[C].O.A[v], !1, !1))) {
                    x = !0;
                    break
                }
            y || (w = !1)
        }
        z[v] = w
    }
    if (a.P.ba)
        for (v = u; v--;)
            1 === r[v].A && z[v] !== z[v + 1] && (z[v] = !0,
                z[v + 1] = !0);
    if (n && !x)
        for (v = 0; v < u; v++)
            if (r[v].C || r[v].F) {
                z[v] = !0;
                1 === r[v].A && (z[v + 1] = !0);
                break
            }
    for (v = u; v--;)
        for (C = q; C--;)
            p[C].O.A[v].F = z[v] && r[v].isVisible();
    if (m) {
        var F = a.A, H = F[0].P, N = 2E3, Q = 0, L = c <= m, G = H, W;
        do {
            N = L ? 2 * N : N / 2;
            var T = wm(F, !1, N)
        } while ((L && T < m || !L && T > m) && 20 > Q++);
        for (Q = 0; 20 > Q++;) {
            var S = parseInt((H + N) / 2, 10);
            T = wm(F, !1, S);
            if (L && T <= m || !L && T >= m)
                if (G = S,
                10 >= Math.abs(m - T))
                    break;
            L ? T > m ? N = S : T < m && (H = S) : T < m ? N = S : T > m && (H = S)
        }
        if (L && T > m || !L && T < m)
            T = wm(F, !1, G);
        if (L && T < m || !L && T > m) {
            var V = m - T;
            var aa = mr(a);
            var da = aa.D;
            for (W = da.length; W--;) {
                var eb = da[W];
                eb.K.J.F && eb.K.fa === Zj(eb.K).length - 1 && (eb.width += V)
            }
            if (aa.H) {
                var fb = Ao(aa);
                if (null !== fb)
                    for (aa.G[fb].width += V,
                             fb++; fb < aa.H;)
                        aa.G[fb].A += V,
                            fb++
            }
            aa.width += V
        }
        a.width = m
    }
    a.width += d;
    var Ob = a.C, Eb = Ob.D, gb = Eb.C, pa = Ob.A, hc = Ob.W, be = Ob.Y, Fb = gb.length, ua = a.A, va = ua.length,
        ma = Fb, Fa = !1, Gb = a.T, Ha, Pb, rc;
    a.D.length = 0;
    a.V.length = 0;
    a.$.length = 0;
    a.G.length = 0;
    a.ka.length = 0;
    a.ba.length = 0;
    a.aa.length = 0;
    a.ja.length = 0;
    a.ia.length = 0;
    a.Z.length = 0;
    a.I.length = 0;
    a.W.length = 0;
    for (Gb.length = 0; ma--;)
        a.D.push(0),
            a.V.push(0),
            a.$.push(0),
            a.G.push(0),
            a.ka.push([]),
            a.ba.push(0),
            a.aa.push(0),
            a.ja.push(0),
            a.ia.push(0),
            a.Z.push(0),
            a.I.push(0),
            a.W.push(0),
            Gb.push(0);
    if (Eb.V) {
        for (; va--;) {
            var Hb = ua[va].D;
            for (Ha = Hb.length; Ha--;) {
                var pd = Hb[Ha];
                pd.K.J.track.Ya && (rc = Yq(pd).length) && rc > Gb[pd.K.J.track.index] && (Gb[pd.K.J.track.index] = rc)
            }
        }
        va = ua.length
    }
    for (ma = Fb; ma--;) {
        var Lc;
        if (Lc = gb[ma].C && gb[ma].S)
            a: {
                var Mc = void 0
                    , Nc = void 0
                    , bd = gb[ma];
                if (null !== bd.S)
                    for (var Ye = bd.S, Cc = Ye.length; Cc--;)
                        for (Nc = Ye[Cc].A,
                                 Mc = ua.length; Mc--;)
                            if (ua[Mc].O.U === Nc) {
                                Lc = !0;
                                break a
                            }
                Lc = !1
            }
        Lc && (a.$[ma] = 2.5 * pa)
    }
    for (; va--;) {
        var we = ua[va];
        if (be)
            for (Ha = Fb; Ha--;)
                a.G[Ha] = gb[Ha].M ? 3.8 * pa : 0;
        else
            for (Hb = we.D,
                     Ha = Hb.length; Ha--;) {
                pd = Hb[Ha];
                var Za = pd.K;
                var Wb = Za.J;
                if (Wb.F) {
                    var pb = Za.J.track;
                    ma = pb.index;
                    if (pb.C) {
                        var xe = Wb.H;
                        a.D[ma] = Math.max(a.D[ma], (xe.F - pb.N + xe.D) * pa);
                        var $b = Wb.H;
                        a.V[ma] = Math.max(a.V[ma], ($b.H - $b.D + 1) * pa)
                    }
                    0 < Wb.C && (Ob.T || Wb.F && 0 !== Fl(Wb.O)) && (pb.C ? a.D[ma] = Math.max(a.D[ma], pa - (5 === pb.N ? -1.5 * pa : (4.13 * pa - (pb.N - 1 + .13) * pa) / 2 - 2 * pa)) : pb.F && (a.I[ma] = Math.max(a.I[ma], 3.25 * pa)));
                    yk(Za) && pb.F && (a.aa[ma] = 3.5 * pa);
                    if (Za.M && pb.M) {
                        var Dc = Za.M.length;
                        for (Pb = a.ka[ma]; Dc--;)
                            Za.M[Dc] && -1 === fc(Pb, Dc) && (Pb.push(Dc),
                                a.G[ma] = 2 * pa * Pb.length)
                    }
                    var ic = void 0
                        , hb = void 0
                        , ce = pd
                        , X = a.D
                        , ac = a.V
                        , Ec = a.ba
                        , uf = a.ja
                        , kg = a.ia
                        , sb = a.Z
                        , Qb = a.I
                        , de = a.W
                        , qb = ce.K
                        , Oc = qb.J.track
                        , Ia = Oc.index
                        , jc = qb.A
                        , Pc = ce.A.A
                        , tb = Pc.A
                        , ee = !1
                        , sc = !1
                        , qa = !1
                        , xb = 0
                        , $a = 0;
                    if (!qb.oa)
                        for (hb = jc.length,
                                 xb = Wk(qb, Pc.D, tb); hb--;)
                            ic = jc[hb],
                            ic.aa && (ee = !0),
                                0 === ic.ga ? sc = !0 : ic.ga === Oc.I - 1 && (qa = !0);
                    hb = vq(ce, 0, 25);
                    hb > X[Ia] && (X[Ia] = hb);
                    Oc.C && (hb = Oq(ce, 0, 16),
                    hb > ac[Ia] && (ac[Ia] = hb));
                    if (Oc.F) {
                        Nk(qb, !0) && ($a += 2.5 * tb);
                        qb.pa && ($a += 2.5 * tb);
                        if (nk(qb) || ok(qb))
                            $a += 2.55 * tb;
                        var La = qb.J;
                        wi(La.track) && El(La.O) && ($a += 2.5 * tb);
                        $a && $a > Ec[Ia] && (Ec[Ia] = $a);
                        if (ee || qb.Ca)
                            xb += 2 * tb;
                        if (qb.va) {
                            var na = qb.va
                                , cd = Math.max(0, na.A, na.end);
                            null !== na.C && na.C > cd && (cd = na.C);
                            cd *= ta * tb;
                            9 === na.D && na.A > na.C && (cd += 1.5 * tb);
                            uf[Ia] = Math.max(uf[Ia], cd);
                            var Qc = qb.va
                                , ba = Math.min(Qc.A, Qc.end);
                            null !== Qc.C && Qc.C < ba && (ba = Qc.C);
                            kg[Ia] = Math.max(kg[Ia], (0 <= ba ? 1.5 * tb : -ba * ta * tb) + .5 * tb)
                        }
                        xb > sb[Ia] && (sb[Ia] = xb);
                        sc && (Qb[Ia] = Math.max(Qb[Ia], 1.56 * tb / 2));
                        qa && (de[Ia] = Math.max(de[Ia], 1.56 * tb / 2));
                        Oc.La && (hb = (3.9 + (mq(ce) ? 2 : 0)) * tb,
                            Zh(qb.J) && 0 === qb.V ? Qb[Ia] = Math.max(Qb[Ia], hb) : de[Ia] = Math.max(de[Ia], hb))
                    }
                }
            }
    }
    for (ma = 0; ma !== Fb; ma++) {
        pb = gb[ma];
        if (pb.C && (0 < a.U && !Fa && (a.D[ma] < 2.8 * pa && (a.D[ma] = 2.8 * pa),
            Fa = !0),
            pb.F)) {
            var yb = nr(a, ma) + or(a, ma) + 1.2 * pa;
            yb < 2.5 * pa && (a.I[ma] += 2.5 * pa - yb)
        }
        hc && pb.ba && (a.D[ma] = Math.max(a.D[ma], 4 * pa))
    }
    var wa = a.C.Y, la = 0, fa = a.P.C, Ma = a.A, Na = a.C.A, nb = a.da, ye = a.Y, Bb = 0, Gd;
    var xa = nb.length = 0;
    for (Gd = fa.length; xa < Gd; xa++) {
        var Cb = fa[xa];
        if (pr(a, xa, Cb)) {
            var jb = la += Bb;
            wa || (la += a.D[xa],
            Cb.C && (la += 4.13 * Na + nr(a, xa)));
            Cb.M && (la += a.G[xa]);
            if (Cb.F) {
                if (Cb.C || Cb.M)
                    la += 1.2 * Na;
                la += or(a, xa) + vi(Cb, Na) + a.W[xa]
            }
            nb[xa] = la - jb;
            if (xa !== Gd - 1) {
                if (wa)
                    var Rc = 0;
                else {
                    var ob = void 0
                        , ab = void 0
                        , Xb = void 0
                        , kc = void 0
                        , oa = void 0
                        , bb = void 0
                        , Fc = void 0
                        , ub = void 0
                        , Rb = a
                        , za = Cb
                        , Oa = xa
                        , vb = Rb.P.C[Oa + 1]
                        , zb = Rb.C.A
                        , Ib = 2 * zb;
                    if (za.C && !za.F && !za.M && vb && vb.C) {
                        for (var Sb = Rb.A, Pa = Sb.length, qd = 4 * zb; Pa--;) {
                            Fc = Sb[Pa];
                            for (bb of Wo(Fc))
                                if (1 === bb.G) {
                                    oa = bb.D;
                                    ub = oa.length;
                                    for (ab = Xb = 0; ub--;)
                                        oa[ub] && (kc = oa[ub],
                                            kc.K.J.track === za ? kc.N > Xb && (Xb = kc.N) : kc.K.J.track === vb && kc.P > ab && (ab = kc.P));
                                    ob = Xb + ab + zb;
                                    ob > qd && (qd = ob)
                                }
                        }
                        Ib = qd - Rb.V[Oa] - Rb.D[Oa + 1]
                    }
                    Rc = Ib
                }
                Bb = Rc;
                ye[xa] = Bb
            }
        } else
            nb[xa] = 0,
                ye[xa] = 0
    }
    a.height = la + ro(a);
    var Hd = la;
    for (xa = Ma.length; xa--;)
        Ma[xa].height = Hd
}

function lr(a, b) {
    return qr(a, b) + a.D[b]
}

function Dq(a, b, c, d, e, f, g) {
    var h = [];
    a = a.A;
    for (var k = a.length, l, m, n, p; k--;)
        if (l = a[k],
        l.index >= c && (null === f || l.index <= f))
            for (m = l.D,
                     p = m.length; p--;)
                n = m[p],
                n.K.J.track === b && (c !== l.index || (null !== d ? We(n.K.F, d) : n.I >= e)) && (f !== l.index || null === g || We(g, n.K.F)) && h.push(n);
    return h
}

function Gq(a, b) {
    return !!b.O.D && !vn(a.C) && Jq(a) === b.track
}

function Hq(a, b) {
    return !!b.O.F && !vn(a.C) && Jq(a) === b.track
}

function Jq(a) {
    for (var b = a.P.C, c = 0, d = b.length; c !== d; c++)
        if (pr(a, c, b[c]))
            return b[c];
    return null
}

function Mq(a, b) {
    return !(!b.O.T && !b.O.S) && Jq(a) === b.track
}

function Pq(a, b) {
    var c;
    a: {
        for (var d = (c = b.J.track.P) ? c.length : 0; d--;)
            if (bi(c[d], b, !0) || bi(c[d], b, !1)) {
                c = !0;
                break a
            }
        c = !1
    }
    return c || !!a.T[b.J.track.index]
}

function qr(a, b) {
    for (var c = 0, d = 0, e; c < b;)
        (e = a.da[c]) && (d += e + a.Y[c]),
            c++;
    return d
}

function pr(a, b, c) {
    return c.isVisible() && 0 !== a.A.length && a.A[0].O.A[b].F
}

function rr(a, b) {
    var c = a.P.C[b]
        , d = lr(a, b);
    c.C || (c.M && (d += a.G[b]),
    c.F && (c.M && (d += 1.2 * a.C.A),
        d += or(a, b)));
    return d
}

function sr(a) {
    for (var b = 0, c = a.P.C, d = c.length, e = 0, f; b < d;) {
        f = c[b];
        if (pr(a, b, f) && (f.C || f.F)) {
            e = rr(a, b);
            break
        }
        b++
    }
    return e
}

function nr(a, b) {
    return a.V[b] + a.$[b]
}

function tr(a) {
    for (var b = a.P.C, c = b.length, d = 0, e; c--;)
        if (e = b[c],
            pr(a, c, e)) {
            d = qr(a, c) + a.da[c];
            if (e.F)
                return d - a.W[c];
            e.M && (d -= a.G[c]);
            if (e.C)
                return d - nr(a, c)
        }
    return d
}

function or(a, b) {
    return a.ba[b] + a.aa[b] + a.ja[b] + a.ia[b] + a.Z[b] + a.I[b]
}

function ur(a, b) {
    var c = a.C.A
        , d = b.index
        , e = lr(a, d);
    b.C && (e += 4.13 * c + nr(a, d));
    b.M && (e += a.G[d]);
    b.F && (b.C || b.M) && (e += 1.2 * c);
    return e + or(a, b.index)
}

function vr(a, b) {
    var c = 0
        , d = b.index
        , e = a.C.A;
    b.C && (c += 4.13 * e);
    b.F && (b.C && (c += nr(a, d) + or(a, d) + 1.2 * e),
        c += vi(b, e));
    return c
}

function mr(a) {
    a = a.A;
    for (var b = a.length, c; b--;)
        if (c = a[b],
            !Nl(c.O))
            return c;
    return a[0]
}

class Gm {
    constructor(a) {
        this.C = a;
        this.P = a.D;
        this.height = this.width = this.U = 0;
        this.A = [];
        this.S = this.M = this.H = this.X = this.N = 0;
        this.ma = this.F = -1;
        this.D = [];
        this.V = [];
        this.$ = [];
        this.G = [];
        this.ka = [];
        this.ba = [];
        this.aa = [];
        this.ja = [];
        this.ia = [];
        this.Z = [];
        this.I = [];
        this.W = [];
        this.da = [];
        this.Y = [];
        this.T = []
    }
}

function Jm(a, b, c, d, e, f, g) {
    a.D.length = 0;
    a.G = b;
    a.C = c;
    a.F = d;
    a.I = 0;
    a.N = e;
    a.V = f;
    a.H = 1 !== b && 16 !== b && 20 !== b;
    a.P = g;
    a.duration = lf;
    a.S = 0;
    a.T = 0;
    a.width = 0;
    a.M = e;
    a.A = 0
}

function* zo(a, b) {
    for (var c of cp(a))
        c.K.J.track.index === b && (yield c)
}

function Vp(a) {
    for (var b of yo(a))
        if (!b.oa)
            return !0;
    return !1
}

function xo(a, b, c, d, e, f) {
    var g = jn(b)
        , h = b.C
        , k = 15 === a.G || 22 === a.G
        , l = a.H
        , m = 0;
    k ? c = 0 : a.F ? c = a.F : g ? c = a.duration.qa * h.ma * b.A : (c = a.S * (a.T + c / 2E3) * 1.4 * b.A,
        c = c >= a.M ? c : a.M,
    a.I && c < a.I && (c = a.I));
    l && !k && (a.N = a.M);
    if (0 !== d) {
        if (!(b.Y || g || !k && l))
            if (b = b.A,
                g = d,
                k = .5 * b,
            15 === a.G || 22 === a.G) {
                k = f;
                m = 0;
                for (l = -1; k--;)
                    if (h = e[k],
                        !h.H) {
                        m = h.D.length;
                        break
                    }
                for (k = m; k--;) {
                    a: {
                        for (h = f; h--;)
                            if (m = e[h],
                            !m.H && null !== m.D[k]) {
                                m = m.D[k].K.J.track.index;
                                break a
                            }
                        m = -1
                    }
                    m === a.P && (m = vm(k, g, e),
                    -1 === l || m < l) && (l = m)
                }
                var n = l - b / 2;
                if (n < a.F) {
                    for (; g--;) {
                        var p = e[g];
                        if (15 !== p.G && 22 !== p.G)
                            break
                    }
                    p.width += a.F - n
                }
            } else
                for (f = a.D.length; f--;)
                    if (l = a.D[f],
                    null !== l) {
                        p = l.K;
                        m = l.S;
                        if (p.M && p.J.track.M) {
                            h = p.M;
                            for (var q = p.J.track.index, r = h.length, u; r--;)
                                if (h[r]) {
                                    u = aq(l, r, !1, !1, b) / 2 + b;
                                    a: {
                                        for (var v, w, y = g, x = e, z = q, C = r, F = b, H = 0; 0 < y--;) {
                                            w = x[y];
                                            v = w.D;
                                            for (n = v.length; n--;)
                                                if (v[n] && (p = v[n].K,
                                                p.J.track.index === z && p.M && p.M.length > C && p.M[C])) {
                                                    n = H += w.width - aq(v[n], C, !1, !1, F) / 2;
                                                    break a
                                                }
                                            H += w.width
                                        }
                                        n = H
                                    }
                                    n < u && (p = e[g - 1],
                                        p.width += u - n,
                                    p.H && (p.N = p.width - p.F))
                                }
                        }
                        m && (n = vm(f, g, e) - k,
                        n < m && (p = e[g - 1],
                            p.width += m - n,
                        p.H && (p.N = p.width - p.F)))
                    }
        d = e[d - 1];
        m = d.A + d.width
    }
    a.width = c;
    a.A = m
}

function Ip(a) {
    for (var b of yo(a))
        return b;
    return null
}

function Fq(a, b, c) {
    var d = [], e;
    for (e of zo(a, b.index))
        if (!e.K.oa)
            for (b = e.K.A,
                     a = b.length; a--;)
                c && Mi(b[a]) || d.push(b[a]);
    return d
}

function* yo(a) {
    for (var b of cp(a))
        yield b.K
}

function* cp(a) {
    a = a.D;
    for (var b = a.length; b--;)
        a[b] && (yield a[b])
}

class Jp {
    constructor() {
        this.D = [];
        this.G = 0;
        this.C = lf;
        this.N = this.I = this.F = 0;
        this.H = this.V = !1;
        this.P = 0;
        this.duration = lf;
        this.A = this.M = this.width = this.T = this.S = 0
    }
}
;

class wr {
    constructor(a, b, c, d, e, f, g, h, k, l) {
        this.A = a;
        this.name = b;
        this.Pa = c;
        this.Na = d;
        this.C = e;
        this.D = f;
        this.F = g;
        this.G = h;
        this.H = k;
        this.I = l
    }
}

function xr(a, b) {
    a = a.A;
    var c = 0
        , d = b.length;
    for (a.length = 0; c !== d; c++) {
        var e = b[c];
        a.push(new wr(e.id, e.n, e.b1, e.b2, e.r, e.a, e.i, e.t, e.p, e.o))
    }
}

function yr(a, b) {
    a = a.A;
    for (var c = a.length; c--;)
        if (a[c].A === b)
            return a[c];
    return null
}

class zr {
    constructor() {
        this.A = []
    }
}
;

function Ar(a) {
    var b = a.A
        , c = a.width;
    a = a.C;
    var d = a.length;
    se(b, 0, 0, c, 1);
    for (K(b, "hsla(0, 0%, 100%, 0.9)"); d--;)
        M(b, c * a[d], 0, 6, 1)
}

class Br {
    constructor(a) {
        this.A = a;
        this.width = 0;
        this.C = []
    }
}
;

function Cr(a) {
    if (null !== a.D || a.C)
        return null;
    var b = new XMLHttpRequest;
    return new Promise((c, d) => {
            b.open("GET", a.F, !0);
            b.responseType = "arraybuffer";
            b.onload = () => {
                400 <= b.status ? (a.C = !1,
                    d()) : a.A.decodeAudioData(b.response, e => {
                        a.D = e;
                        a.C = !1;
                        c()
                    }
                )
            }
            ;
            b.onerror = () => {
                a.C = !1;
                d()
            }
            ;
            a.C = !0;
            b.send()
        }
    )
}

function Dr(a, b, c, d, e, f, g, h, k) {
    if (null === a.D || 21 > b && !h)
        return null;
    var l = a.A.createBufferSource();
    var m = "function" === typeof a.A.createGain ? a.A.createGain() : a.A.createGainNode();
    var n = m.gain;
    g = g ? .3 : .001;
    var p = a.G;
    p = h ? b : p + (e + 3.36 * (b - 21));
    m.connect(k);
    d = Math.min(d, 3.36 - g - e);
    l.buffer = a.D;
    l.connect(m);
    l.start(c, p, d + g);
    n.value = 0;
    n.linearRampToValueAtTime(0, c);
    n.linearRampToValueAtTime(f, c + .001);
    n.linearRampToValueAtTime(f, c + d);
    n.linearRampToValueAtTime(0, c + d + g);
    l.stop(c + d + g);
    return m
}

class Er {
    constructor(a, b) {
        this.A = Fr;
        this.F = a;
        this.D = null;
        this.C = !1;
        this.G = 2 === b ? .045 : 0
    }
}
;var Gr = Math.PI
    , Hr = 16 / 9;

function Ir() {
}

function Jr(a, b) {
    var c = Math.round((b - a.min) / (a.max - a.min) * 100)
        , d = Ka("--player-settings-slider-background-color") || "hsla(0, 0%, 100%, 0.3)"
        , e = Ka("--player-settings-highlight") || "#f3a42d";
    a.value = b;
    a.style.backgroundImage = `linear-gradient(to right, ${e} 0%, ${e} ${c}%, ${d} ${c}%, ${d} 100%)`
}

function Kr(a, b, c) {
    uc("GET", `/wait-for-pdf/?ajax=1&job_id=${c}`, null, d => {
            2 === d.status && d.url ? b.location = d.url : 3 === d.status ? b.location = "/error/?msg=pdf-export" : a.setTimeout(Kr, 1E3, a, b, c)
        }
        , () => {
            b.location = "/error/?msg=pdf-export"
        }
    )
}

var Lr = 16 / 9, Mr = 1, Nr = 1, Or = !1, Fr, Pr = null, Qr, Rr;
try {
    Qr = "undefined" !== typeof window.AudioContext || "undefined" !== typeof window.webkitAudioContext
} catch (a) {
    Qr = !1
}
if (Qr) {
    Rr = window.AudioContext || window.webkitAudioContext;
    try {
        Pr = new Rr
    } catch (a) {
        Pr = null
    }
}
Fr = Pr;

function Sr(a, b, c) {
    this.A = a;
    this.C = -1;
    this.T = !0;
    this.ka = this.Fa = this.P = !1;
    this.Z = this.ja = !0;
    this.duration = this.Ca = 0;
    this.ra = this.ia = !1;
    this.F = (this.pb = c) && !!Fr;
    this.da = !1;
    this.qb = !this.F;
    this.D = !1;
    this.G = 0;
    this.ob = this.ya = 1;
    this.La = 0;
    this.F && (this.tb = () => {
        Tr(this)
    }
        ,
        Ur(this, b));
    this.ma = {};
    this.Oa = {};
    this.Da = this.V = null;
    this.Ia = [];
    this.Wa = [];
    this.wa = [];
    this.Ka = [];
    this.Xa = {};
    this.Ta = [];
    this.Ga = [];
    this.rb = [];
    this.sb = new ir;
    this.I = 0;
    this.gb = -1;
    this.mb = this.kb = 0;
    this.eb = this.Ya = !0;
    // a = document.createElement("audio");
    // try {
    //     this.Ya = !!a.canPlayType("audio/mpeg"),
    //         this.eb = !!a.canPlayType('audio/ogg; codecs="vorbis"')
    // } catch (d) {
    //     this.eb = this.Ya = !1
    // }
}

function Tr(a) {
    var b = a.A
        , c = a.gb
        , d = b.C.D.length - 1;
    if (!(c > fr(b.H, b.A) + 3)) {
        var e = b.C;
        b = a.mb;
        var f = Math.min(d, c + 2), g = e.C.length, h = a.kb, k, l, m;
        for (k = c; k <= f; k++) {
            var n = e.A[e.D[k]];
            var p = (l = k === c) ? h * n.za.qa : 0;
            for (m = g; m--;)
                Vr(a, n.A[m], k, b, l, p);
            b += km(e, k, k === c ? h : 0, 1)
        }
        c = f + 1;
        a.mb = b;
        a.kb = 0
    }
    c <= d && (a.gb = c,
        a.Ka.push(setTimeout(a.tb, 350)))
}

function Ur(a, b) {
    uc("GET", b, null, c => {
            console.log("c", c);
            for (var d = {}, e = c.inst, f = e.length; f--;)
                d[e[f][0]] = [e[f][2], e[f][3]];
            a.Xa = d;
            a.Ta = e;
            a.Ga = c.metronome;
            a.rb = c.percussion;
            O(a.A, 56);
            c.metronome && (O(a.A, 1),
                Wr(a, .5));
            c = Xr();
            c.gain.value = a.ob;
            c.connect(Fr.destination);
            a.V = c;
            c = Xr();
            c.gain.value = a.La;
            c.connect(Fr.destination);
            a.Da = c;
            Yr(a, -4);
            O(a.A, 74)
        }
        , Ir)
}

function Wr(a, b) {
    0 > b ? b = 0 : 1 < b && (b = 1);
    b !== a.La && (a.La = b,
    null !== a.Da && (a.Da.gain.value = b),
        O(a.A, 62, b))
}

function Xr() {
    return "function" === typeof Fr.createGain ? Fr.createGain() : Fr.createGainNode()
}

function Yr(a, b) {
    var c = 1E3 <= b
        , d = -4 === b
        , e = a.eb ? 1 : a.Ya ? 2 : 3;
    c && (b = 1E3);

    Zr(a, b) || a.Oa[b] || !a.Ta.length || d && !a.Ga.length;
    a.Oa[b] = !0;
    d || (a.da = !0, O(a.A, 8));
    c = new Er($r(a, b, d, c, e), e);
    a.ma[b] = c;
        // Cr(c).then(() => {
        //         var f = 0
        //             , g = a.Oa;
        //         g[b] = !1;
        //         for (var h in g)
        //             g.hasOwnProperty(h) && g[h] && f++;
        //         a.da && 0 === f && (a.da = !1,
        //             a.qb = !0,
        //             O(a.A, 7, a.C))
        //     }
        // ).catch(() => {
        //         P(a.A, "Couldn't load the synth player.", !0, 1);
        //         a.da = !1;
        //         O(a.A, 6)
        //     }
        // )
}

function as(a) {
    if (a.F && a.V) {
        for (var b = a.wa, c = a.A.C.C, d = b.length, e = c.length; d--;)
            b[d].disconnect();
        for (d = b.length = 0; d !== e; d++)
            b[d] = Xr(),
                b[d].gain.value = Gi(c[d]),
                b[d].connect(a.V)
    }
}

function $r(a, b, c, d, e) {
    var f;
    c ? f = a.Ga : d ? f = a.rb : f = a.Xa[b] || a.Xa[0];
    b = f;
    return a.A.T + (1 === e ? b[0] : 2 === e ? b[1] : "")
}

function Zr(a, b) {
    return a.F ? !(!a.ma[b] || null === a.ma[b].D) : !0
}

function bs(a, b, c, d, e, f, g, h, k) {
    c = a.ma[c];
    if (!c)
        return null;
    (b = Dr(c, b, d, e, f, g, k, !1, -1 === h ? a.V : a.wa[h])) && a.Ia.push(b);
    return b
}

function cs(a, b, c) {
    (b = Dr(a.ma[-4], c ? 0 : 1, Fr.currentTime + b, .2, 0, 1, !1, !0, a.Da)) && a.Wa.push(b)
}

function ds(a) {
    var b = a.A
        , c = a.sb;
    es(b, a.G, c);
    br(c) && (a.gb = fr(c, b.A),
        a.kb = gr(c, b.A),
        a.mb = 0,
        a.I = Fr.currentTime,
    a.F && Tr(a),
        a.D = !0)
}

function Vr(a, b, c, d, e, f) {
    if (b.D)
        Vr(a, jl(b), c - il(b), d, e, f);
    else
        for (var g = a.A, h = b.A.length, k, l, m, n, p, q, r, u, v, w, y, x; h--;)
            for (k = b.A[h],
                     l = d,
                     m = 0,
                     n = k.length; m < n; m++) {
                p = k[m];
                q = lm(g.C, c, p);
                r = !1;
                u = 0;
                if (e) {
                    if (p.Ea + p.ia <= f)
                        continue;
                    p.Ea <= f && (u = q * (f - p.Ea) / p.ia,
                        q -= u,
                        r = !0)
                }
                v = 0;
                for (w = p.A.length; v < w; v++)
                    if (y = p.A[v],
                        x = fs(g, y),
                    null !== x)
                        a: {
                            var z = a
                                , C = x
                                , F = c
                                , H = r
                                , N = l;
                            x = u;
                            var Q = q
                                , L = z.A
                                , G = z.ya
                                , W = y.K
                                , T = W.J.track
                                , S = xi(T)
                                , V = 0
                                , aa = !Xi(y)
                                , da = mm(L.C, F, y, !0) - x;
                            if (Mi(y))
                                if (H)
                                    if (0 === N)
                                        V = bo(L.A, F, y);
                                    else
                                        break a;
                                else if (!y.C)
                                    break a;
                            if (Yi(y) || y.I)
                                V += .2;
                            if (y.F)
                                if (aa = !1,
                                3 === y.F || 4 === y.F || 10 <= y.F) {
                                    F = L.C;
                                    if (10 <= y.F)
                                        b: {
                                            if (F = Vj(y.K, F, !0))
                                                for (H = F.A,
                                                         F = H.length; F--;)
                                                    if (H[F].M.U === y.F / 10) {
                                                        F = H[F];
                                                        break b
                                                    }
                                            F = null
                                        }
                                    else
                                        F = Uj(y, F, !0);
                                    null !== F && (H = fs(L, F),
                                        F = H > C ? 1 : -1,
                                    1 < Math.abs(H - C) && (gs(z, T, (N + .85 * da) / G, da * (1 - .85) / G, C + F, H - F, F, 0, .2),
                                        da *= .85))
                                } else
                                    F = 1 === y.F ? 1 : -1,
                                        gs(z, T, (N + .85 * da) / G, da * (1 - .85) / G, C + 2 * F, C + F, F, 0, .2),
                                        da *= .85;
                            ok(W) && (da *= .125,
                                V += .4);
                            if (!(3.36 <= x + V)) {
                                if (y.C) {
                                    if (4 === y.C.F)
                                        break a;
                                    aa = Qi(y.C, L.C);
                                    C = y.C;
                                    F = 3 === C.F ? fs(L, C.D) + Ii(C.C / 50) : null;
                                    C = y.C;
                                    H = Oi(C, L.C);
                                    C = Ii(null !== H ? H / 50 : 0) + fs(L, C.D);
                                    H = y.C;
                                    var eb = null === H.end ? Oi(H, L.C) : H.end;
                                    H = fs(L, H.D) + Ii(null !== eb ? eb / 50 : 0);
                                    null !== F ? (hs(z, T, !0, N + da / 2, F, H, da / 2, da / 2),
                                        da = hs(z, T, aa, N, C, F, da / 2, da / 2)) : C !== H && (da = hs(z, T, aa, N, C, H, Q, da));
                                    if (aa)
                                        break a;
                                    aa = !1
                                }
                                if (W.ka && 4 !== W.ka)
                                    for (V = C,
                                             C = T.index,
                                             T = W,
                                             W = T.ka,
                                             Q = 1 === W ? 2 : 2 === W ? 4 : 8,
                                         We(T.Z, Re(1, 2)) && (Q *= Ve(T.Z, Re(1, 4)).qa),
                                             T = V,
                                             W = C,
                                             V = Q,
                                             N /= G,
                                             C = x / G,
                                             y = cj(y) ? .2 : rk(y.K) ? 1 : qk(y.K) ? .9 : .6,
                                             G = (da + x) / G / V,
                                             x = 0; x !== V; x++)
                                        da = x * G,
                                        0 <= N + da - C && (da = N + da - C,
                                        0 <= da && 0 <= G && bs(z, T, S, da + z.I, G, 0 === x ? C : 0, y, W, !0));
                                else if (W = N / G,
                                    da /= G,
                                0 <= W && 0 <= da && bs(z, C, S, W + z.I, da, x + V, cj(y) ? .2 : rk(y.K) ? 1 : qk(y.K) ? .9 : .6, T.index, aa),
                                1 === y.I || 2 === y.I)
                                    F = 1 === y.I ? 1 : -1,
                                        gs(z, T, (N - .1) / G, .1 / G, C - 2 * F, C - F, F, 0, .2)
                            }
                        }
                l += q
            }
}

function gs(a, b, c, d, e, f, g, h, k) {
    f = Math.abs(f - e) + 1;
    d /= f;
    var l;
    for (l = 0; l !== f; l++) {
        var m = c + l * d
            , n = d + (l === f - 1 ? h : 0);
        0 <= m && 0 <= n && bs(a, e + l * g, b.Ja, m + a.I, n, k, .6, b.index, !1)
    }
}

function hs(a, b, c, d, e, f, g, h) {
    var k = a.ya
        , l = f > e ? 1 : -1
        , m = c ? 0 : g / 2;
    h -= m;
    g = Math.min(.15, g / 3);
    1 < Math.abs(f - e) ? (m -= c ? 0 : g / 2,
        gs(a, b, (d + m) / k, g / k, e + l, f, l, h - (c ? g : g / 2), .3)) : (c = (d + m) / k,
        k = h / k,
    0 <= c && 0 <= k && bs(a, f, b.Ja, c + a.I, k, .3, .6, b.index, !0));
    return m
}

function is(a, b) {
    if (a.F) {
        for (var c = a.Wa.length; c--;)
            a.Wa[c].disconnect();
        if (!b) {
            for (c = a.Ka.length; c--;)
                window.clearTimeout(a.Ka[c]);
            a.Ka.length = 0;
            for (c = a.Ia.length; c--;)
                a.Ia[c].disconnect();
            a.Ia.length = 0
        }
    }
}

function js(a) {
    is(a, !1);
    a.G += (Fr.currentTime - a.I) * a.ya;
    a.D = !1
}

Sr.prototype = {
    H: function () {
        var a = this.A;
        if (this.F) {
            for (var b = a.C.C, c = b.length; c--;)
                Yr(this, b[c].Ja);
            as(this);
            a.assign([5, 13], d => {
                    d = d.data;
                    this.ia = this.D;
                    Yr(this, d.Ja);
                    O(a, 44, d)
                }
                , [5, 16, 219], () => {
                    as(this)
                }
                , [60], d => {
                    this.wa.length && (d = d.data,
                        this.wa[d.index].gain.value = Gi(d))
                }
                , [59], () => {
                    for (var d = this.wa, e = this.A.C.C, f = e.length; f--;)
                        d[f] && (d[f].gain.value = Gi(e[f]))
                }
            )
        } else
            O(a, 8),
                O(a, 7, this.C)
    },
    ba: function (a, b) {
        this.N(a);
        null !== b && b(this)
    },
    pa: Ir,
    M: function () {
        return this.da
    },
    W: function () {
        return this.qb
    },
    X: function () {
        return this.D
    },
    aa: function () {
        this.pb && !Fr ? P(this.A, "Your browser doesn't support playback.", !1, 1) : this.A.C.A.length && (ds(this),
            this.D = !0,
            O(this.A, 43))
    },
    Y: function () {
        js(this);
        this.D = !1;
        O(this.A, 40)
    },
    N: function (a) {
        this.D ? (js(this),
            this.G = a,
            ds(this)) : this.G = a;
        return !0
    },
    S: function () {
        return this.G
    },
    xa: function () {
        return .01
    },
    va: function () {
        return 10
    },
    Va: function (a) {
        var b = this.X();
        b && js(this);
        this.ya = a;
        O(this.A, 57, a);
        b && ds(this)
    },
    $a: function () {
    },
    setVolume: function (a) {
        null !== this.V && (this.V.gain.value = this.ob = a)
    },
    aspectRatio: function () {
        return 1
    }
};
var ks = null;

function ls(a, b, c) {
    uc("GET", b, null, d => {
            c(d.url)
        }
        , () => {
            P(a, "Apologies...We couldn't play the audio.", !1, 1)
        }
    )
}

function ms(a, b, c, d, e, f, g) {
    this.D = a;
    this.C = -1;
    this.url = b;
    this.duration = c || 0;
    this.sampleRate = d || 44100;
    this.gb = f;
    this.I = g;
    this.Fa = this.P = this.T = !1;
    this.ja = this.ka = g;
    this.Z = !0;
    this.Ca = 0;
    this.ia = !1;
    this.ra = g;
    this.A = Fr;
    this.F = this.G = null;
    this.Da = !1;
    this.ma = this.Ga = 1;
    this.Xa = this.Ya = this.Wa = 0;
    this.Oa = this.Ka = this.V = this.source = null;
    this.da = !1;
    this.eb = this.Ia = 0;
    this.wa = this.La = null;
    this.Ta = () => {
        ns(a)
    }
    ;
    this.ya = null;
    e && this.H()
}

function os(a) {
    var b = a.D
        , c = new XMLHttpRequest;
    O(b, 8);
    c.open("GET", a.url, !0);
    c.responseType = "arraybuffer";
    c.onload = () => {
        ps(a, c.response)
    }
    ;
    c.onerror = () => {
        P(b, "We couldn\u2019t load the MP3\u00a0\u2014 its URL is invalid or inaccessible.", !1, 1);
        O(b, 6)
    }
    ;
    c.send()
}

function ps(a, b) {
    var c = a.D;
    a.A.decodeAudioData(b, d => {
            d.duration !== a.duration && (a.duration = d.duration,
                O(c, 52));
            a.G = d;
            qs(a)
        }
        , () => {
            if (10 > a.Ya) {
                var d = new Uint8Array(b);
                var e = a.Xa;
                for (d.indexOf = Array.prototype.indexOf; ;) {
                    e = d.indexOf(255, e);
                    if (-1 === e || d[e + 1] & 1)
                        break;
                    e++
                }
                a.Xa = e;
                a.Ya++;
                (d = -1 !== e ? b.slice(e) : null) && ps(a, d)
            } else
                P(c, "Apologies...We couldn't play the audio.", !1, 1),
                    O(c, 6)
        }
    )
}

function qs(a) {
    var b = a.D;
    a.I ? (rs(() => {
            a.C === b.I && (ss(a),
                ts.Va(a.ma),
                ts.$a(a.Wa));
            a.Da = !1;
            O(a.D, 7, a.C)
        }
    ),
        us(b, a.A)) : null === ks ? Ya(b.T + "scripts/soundtouch.min-10b0ee21523c0b1ce90839f1c45aa303.js", () => {
            ks = window.soundtouch;
            vs(a)
        }
    ) : vs(a)
}

function ss(a) {
    var b = a.G
        , c = a.sampleRate;
    ts.A.sendMessageToAudioScope({
        left: b.getChannelData(0),
        right: b.getChannelData(1 < b.numberOfChannels ? 1 : 0),
        sr: c
    });
    ws(ts, a.D.D.D ? xs(a.D, a.D.D.D) : 0);
    a.F = ys(a);
    a.F.gain.value = a.Ga;
    a.F.connect(a.A.destination);
    ts.A.connect(a.F)
}

function vs(a) {
    a.ya = new Float32Array(4096);
    a.Ka = new ks.SoundTouch(a.sampleRate);
    a.Va(a.ma);
    a.Oa = new ks.SimpleFilter(a.G, a.G.numberOfChannels, a.Ka);
    a.Da = !1;
    O(a.D, 7, a.C)
}

function ys(a) {
    return "function" === typeof a.A.createGain ? a.A.createGain() : a.A.createGainNode()
}

function zs(a) {
    null !== a.wa && (window.clearTimeout(a.wa),
        a.wa = null)
}

function As(a) {
    a.source = a.A.createBufferSource();
    a.source.buffer = a.G;
    null === a.La && (a.La = "function" === typeof a.A.createScriptProcessor ? "createScriptProcessor" : "createJavascriptNode");
    a.F = ys(a);
    a.F.gain.value = a.Ga;
    a.F.connect(a.A.destination);
    1 !== a.ma ? (a.V = a.A[a.La](2048, 2, 2),
        a.V.onaudioprocess = c => {
            var d = c.outputBuffer.getChannelData(0);
            c = c.outputBuffer.getChannelData(1);
            var e = a.Oa.extract(a.ya, 2048), f;
            for (f = 0; f < e; f++)
                d[f] = a.ya[2 * f],
                    c[f] = a.ya[2 * f + 1]
        }
        ,
        a.V.connect(a.F),
        a.source.connect(a.V)) : a.source.connect(a.F);
    a.eb = a.A.currentTime;
    var b = a.S();
    a.Oa.sourcePosition = Math.round(b * a.G.sampleRate);
    if (0 < a.duration - b)
        return a.source.start(0, b, a.duration - b),
            zs(a),
            a.wa = setTimeout(a.Ta, 1 / a.ma * (a.duration - b) * 1E3),
            !0;
    zs(a);
    a.wa = setTimeout(a.Ta, 0);
    a.source = null;
    return !1
}

function Bs(a) {
    null !== a.source && (a.F.gain.linearRampToValueAtTime(a.Ga, a.A.currentTime),
        a.F.gain.linearRampToValueAtTime(0, a.A.currentTime + .05),
        a.source.stop(a.A.currentTime + .05),
    null !== a.V && (a.source.disconnect(a.V),
        a.V.disconnect(),
        a.V = null),
        a.source = null);
    zs(a);
    a.Ia = a.S()
}

ms.prototype = {
    H: function () {
        this.Da = !0;
        this.gb ? ls(this.D, this.url, a => {
                this.url = a;
                os(this)
            }
        ) : os(this)
    },
    ba: function (a, b) {
        this.I && this.G && ss(this);
        this.N(a);
        null !== b && b(this)
    },
    pa: function () {
        if (this.I) {
            var a = ts;
            a.A && a.A.disconnect()
        }
    },
    M: function () {
        return this.Da
    },
    W: function () {
        return null !== this.G
    },
    X: function () {
        return this.I ? ts && ts.F : this.da
    },
    aa: function () {
        if (this.I) {
            if (ts && !ts.F) {
                var a = ts;
                a.A && (a.A.sendMessageToAudioScope({
                    a: !0
                }),
                    a.F = !0,
                    O(a.C, 43))
            }
        } else
            this.G && !this.da && As(this) && (this.da = !0,
                O(this.D, 43))
    },
    Y: function () {
        if (this.I) {
            if (this.X()) {
                var a = ts;
                a.A && a.A.sendMessageToAudioScope({
                    a: !1
                });
                a.F = !1;
                O(a.C, 40)
            }
        } else
            this.source && (Bs(this),
                this.da = !1,
                O(this.D, 40))
    },
    N: function (a) {
        if (!this.G)
            return !1;
        if (this.I) {
            var b = ts;
            b.G = Math.round(a * b.D);
            b.A.sendMessageToAudioScope({
                p: b.G
            })
        } else
            this.da ? (Bs(this),
                this.Ia = a,
            As(this) || (this.da = !1,
                O(this.D, 40))) : this.Ia = a;
        return !0
    },
    S: function () {
        return this.I ? ts ? ts.G / ts.D : 0 : this.Ia + this.ma * (this.A.currentTime - this.eb)
    },
    xa: function () {
        return .25
    },
    va: function () {
        return 2
    },
    Va: function (a) {
        this.ma = a;
        if (this.G)
            if (this.I)
                ts.Va(a),
                    O(this.D, 57, a);
            else if (this.Ka) {
                var b = this.da;
                b && Bs(this);
                this.Ka.tempo = a;
                b && As(this);
                O(this.D, 57, a)
            }
    },
    $a: function (a) {
        this.Wa = a;
        this.G && this.I && ts.$a(a)
    },
    setVolume: function (a) {
        this.Ga = a;
        this.F && (this.F.gain.value = a)
    },
    aspectRatio: function () {
        return 1
    }
};

function rs(a) {
    var b = ts;
    b.A ? a() : b.I.push(a)
}

function us(a, b) {
    var c = ts
        , d = a.T + "scripts/superpowered.min-73757caaef61573415a361113d9faf5a.js";
    c.C = a;
    c.D = b.sampleRate;
    c.H || (null === c.module ? (c.H = !0,
        Ya(d, () => {
                c.module = window.SuperpoweredModule;
                Cs(c, d, b)
            }
        )) : Cs(c, d, b))
}

function ws(a, b) {
    a.A.sendMessageToAudioScope({
        c: Math.round(b * a.D)
    })
}

function Cs(a, b, c) {
    a.A ? Ds(a) : a.module({
        onReady: d => {
            d.createAudioNode(c, b, "SSProcessor", e => {
                    var f = a.C;
                    a.A = e;
                    f.assign([53, 14, 68, 136], () => {
                            var g = Es(f)
                                , h = g ? a.D : 1;
                            a.A.sendMessageToAudioScope({
                                l1: Math.round(g ? Fs(f) * h : -1),
                                l2: Math.round(g ? Gs(f) * h : -1)
                            })
                        }
                        , [225], g => {
                            a.A.sendMessageToAudioScope({
                                lo: g.data
                            })
                        }
                        , [158, 139], () => {
                            a.A.sendMessageToAudioScope({
                                ci: f.D.I || f.D.H.isActive
                            })
                        }
                        , [36, 136], () => {
                            var g = f.D.D;
                            ws(a, g ? xs(f, g) : 0)
                        }
                    );
                    a.H = !1;
                    Ds(a)
                }
                , e => {
                    var f = a.C;
                    "undefined" !== typeof e.p && (a.G = e.p);
                    e.f && ns(f);
                    e.la && O(f, 34);
                    e.dc && Hs(f, f.M.D, !0)
                }
            )
        }
    })
}

function Ds(a) {
    a = a.I;
    for (var b; a.length;)
        b = a.pop(),
            b()
}

class Is {
    constructor() {
        this.A = this.C = this.module = null;
        this.D = 44100;
        this.F = this.H = !1;
        this.G = 0;
        this.I = []
    }

    Va(a) {
        this.A && this.A.sendMessageToAudioScope({
            t: a
        })
    }

    $a(a) {
        this.A && this.A.sendMessageToAudioScope({
            ps: a
        })
    }
}

var ts = new Is;

function Js(a, b, c, d, e, f) {
    this.F = a;
    this.C = -1;
    this.url = b;
    this.duration = c || 0;
    this.V = f;
    this.ja = this.ka = this.Fa = this.P = this.T = !1;
    this.Z = !0;
    this.Ca = 1;
    this.ra = this.ia = !1;
    this.A = null;
    this.I = this.D = this.G = !1;
    e && this.H()
}

function Ks(a) {
    var b = document.createElement("audio")
        , c = a.F;
    I(b, "loadedmetadata", () => {
            a.G = !1;
            a.A = b;
            Infinity !== b.duration && (a.duration = b.duration);
            a.duration && O(c, 52);
            O(c, 7, a.C)
        }
        , "waiting", () => {
            a.D = !1;
            O(c, 11)
        }
        , "playing", () => {
            a.D || (a.D = !0,
                O(c, 43));
            Ls(c.D)
        }
        , "seeked", () => {
            a.I && (a.I = !1,
                a.aa())
        }
        , "ended", () => {
            ns(c)
        }
        , "error", () => {
            a.Y()
        }
    );
    b.src = a.url;
    document.body.appendChild(b)
}

Js.prototype = {
    H: function () {
        this.G = !0;
        O(this.F, 8);
        this.V ? ls(this.F, this.url, a => {
                this.url = a;
                Ks(this)
            }
        ) : Ks(this)
    },
    ba: function (a, b) {
        this.N(a);
        null !== b && b(this)
    },
    pa: Ir,
    M: function () {
        return this.G
    },
    W: function () {
        return null !== this.A
    },
    X: function () {
        return this.D
    },
    aa: function () {
        this.A && (this.A.play(),
            this.D = !0,
            O(this.F, 43))
    },
    Y: function () {
        this.A && (this.A.pause(),
            this.D = !1,
            O(this.F, 40))
    },
    N: function (a) {
        if (!this.A)
            return !1;
        var b = this.D;
        b && this.Y();
        this.I = b;
        this.A.currentTime = a;
        Ls(this.F.D);
        return !0
    },
    S: function () {
        return this.A.currentTime
    },
    xa: function () {
        return .5
    },
    va: function () {
        return 2
    },
    Va: function (a) {
        this.A && (this.A.playbackRate = a,
            O(this.F, 57, a))
    },
    $a: function () {
    },
    setVolume: function (a) {
        this.A && (this.A.volume = a)
    },
    aspectRatio: function () {
        return 1
    }
};

function Ms(a) {
    Mr = 2;
    O(a, 8);
    window.onYouTubeIframeAPIReady = () => {
        Mr = 3;
        nc("YTLOADED", null)
    }
    ;
    a = document.createElement("script");
    a.src = "https://www.youtube.com/iframe_api";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b)
}

function Ns(a) {
    var b = tt(a), c;
    I(b, "mouseover", () => {
            c = setInterval(() => {
                    document.activeElement == b && window.focus()
                }
                , 250)
        }
        , "mouseout", () => {
            clearInterval(c)
        }
    )
}

function Os(a) {
    return "ytvid" + a.P.La
}

function Ps(a, b) {
    a.G.D.P = b;
    if (!a.A)
        return !1;
    a.M ? (a.C.seekTo(b, !0),
    a.D || Ls(a.G.D)) : (a.F = b,
        Ls(a.G.D));
    return !0
}

function Qs(a, b, c) {
    if (!a.C) {
        a.I = b;
        a.N = c;
        var d = a.G;
        a.C = new YT.Player(Os(a), {
            height: "100%",
            width: "100%",
            videoId: b,
            host: "https://www.youtube-nocookie.com",
            playerVars: {
                controls: 0,
                disablekb: 1,
                html5: 1,
                iv_load_policy: 3,
                hl: d.F.ra,
                modestbranding: 1,
                origin: "https://www.soundslice.com",
                playsinline: 1,
                rel: 0,
                showinfo: 0
            },
            events: {
                onError: e => {
                    switch (e.data) {
                        case 100:
                            P(d, "This video has been removed from YouTube.", !0, 1);
                            O(d, 40);
                            break;
                        case 101:
                        case 150:
                            P(d, "This video cannot be displayed on sites outside of YouTube.", !0, 1),
                                O(d, 40)
                    }
                }
                ,
                onPlaybackRateChange: e => {
                    O(d, 57, e.data)
                }
                ,
                onReady: () => {
                    a.A = !0;
                    Ns(Os(a));
                    null !== a.H && (a.H(),
                        a.H = null);
                    O(d, 7, a.N)
                }
                ,
                onStateChange: e => {
                    switch (e.data) {
                        case YT.PlayerState.PLAYING:
                            a.D = !0;
                            a.M = !0;
                            O(d, 43);
                            -1 !== a.F && (Ps(a, a.F),
                                a.F = -1);
                            Ls(d.D);
                            break;
                        case YT.PlayerState.PAUSED:
                            a.D = !1;
                            O(d, 40);
                            break;
                        case YT.PlayerState.BUFFERING:
                            a.D = !1;
                            O(d, 11);
                            break;
                        case YT.PlayerState.UNSTARTED:
                        case YT.PlayerState.CUED:
                            a.M = !1;
                            O(d, 220);
                            break;
                        case YT.PlayerState.ENDED:
                            a.D = !1,
                                ns(d)
                    }
                }
            }
        })
    }
}

function Rs(a, b) {
    a.I !== b && (a.I = b,
    a.A && a.C.cueVideoById(b))
}

class Ss {
    constructor(a, b) {
        this.P = a;
        this.G = b;
        this.C = null;
        this.I = "";
        this.N = -1;
        this.A = !1;
        this.H = null;
        this.F = -1;
        this.D = this.M = !1;
        1 === Mr && Ms(b);
        b = a.F.createElement("div");
        a = Ts(a, "video-container");
        b.id = Os(this);
        a.appendChild(b)
    }

    Va(a) {
        this.A && this.C.setPlaybackRate(a)
    }

    setVolume(a) {
        this.A && this.C.setVolume(Math.round(100 * a))
    }
}

function Us(a, b, c) {
    var d = a.A;
    this.F = d;
    this.C = -1;
    this.G = b;
    this.duration = c || 0;
    this.T = this.D = !1;
    this.P = !0;
    this.ja = this.ka = this.Fa = !1;
    this.Z = !0;
    this.Ca = 1;
    this.ia = !1;
    this.ra = !0;
    a.ta || (a.ta = new Ss(a, d));
    this.A = a.ta
}

function Vs(a) {
    if (!a.D) {
        var b = a.A;
        b = b.A ? b.C.getDuration() : 0;
        isNaN(b) || 0 === b || b === a.duration || (a.duration = b,
            O(a.F, 52),
        0 !== b % 1 && (a.D = !0))
    }
}

Us.prototype = {
    ba: function (a, b) {
        var c = this.F
            , d = this.A
            , e = this.G
            , f = this.C;
        Mb(tt(Os(d)), "block");
        d.F = a;
        3 === Mr ? d.A ? (Rs(d, e),
        b && b(this)) : (d.H = () => {
            b && b(this)
        }
            ,
            Qs(d, e, f)) : (d.H = () => {
            b && b(this)
        }
            ,
            I(window, "YTLOADED", () => {
                    Qs(d, e, f)
                }
            ));
        O(c, 212, [0, 0])
    },
    pa: function () {
        Mb(tt(Os(this.A)), "none")
    },
    H: Ir,
    M: function () {
        return !this.A.A
    },
    W: function () {
        return this.A.A
    },
    X: function () {
        return this.A.D
    },
    aa: function () {
        var a = this.A;
        a.A && (a.D = !0,
            a.C.playVideo());
        Vs(this)
    },
    Y: function () {
        var a = this.A;
        a.D = !1;
        a.A && (O(a.G, 40),
            a.C.pauseVideo())
    },
    N: function (a) {
        return Ps(this.A, a)
    },
    S: function () {
        this.D || Vs(this);
        var a = this.A;
        -1 !== a.F ? a = a.F : a.A ? (a = a.C.getCurrentTime(),
            a = "undefined" === typeof a ? null : a) : a = 0;
        return a
    },
    xa: function () {
        return .25
    },
    va: function () {
        return 2
    },
    Va: function (a) {
        this.A.Va(a)
    },
    $a: function () {
    },
    setVolume: function (a) {
        this.A.setVolume(a)
    },
    aspectRatio: function () {
        return Lr
    }
};
var Ws = !0;

function Xs(a) {
    if (1 === Nr) {
        Nr = 2;
        var b = a.M.F
            , c = b.createElement("script");
        c.type = "text/javascript";
        c.onload = () => {
            Nr = 3;
            nc("HLSJS_LOAD", null)
        }
        ;
        c.src = a.D.T + "scripts/hls-f473eb526a694494a182e01e5cbda205.js";
        b.getElementsByTagName("head")[0].appendChild(c)
    }
}

function Ys(a) {
    if (a.A) {
        var b = a.A.play();
        b && b.catch(c => {
                "NotAllowedError" === c.name && P(a.D, "This web browser requires that you manually press the Play button in order for audio to work.", !0, 1)
            }
        )
    }
}

function Zs(a) {
    a.A && (a.A.pause(),
    a.F || (a.G = !1),
        a.F = !1)
}

function $s(a) {
    var b = !1;
    try {
        b = !!(a.A.canPlayType && a.A.canPlayType("application/vnd.apple.mpegurl") && /i(Phone|Pad)/.test(window.navigator.userAgent))
    } catch (c) {
    }
    return b
}

function Dt(a, b) {
    if (!a.A) {
        var c = a.D
            , d = a.M.F.createElement("video")
            , e = Ts(a.M, "video-container")
            , f = !1;
        a.A = d;
        d.style.width = "100%";
        d.style.height = "100%";
        Mb(d, "none");
        d.setAttribute("webkit-playsinline", "");
        d.setAttribute("playsinline", "");
        e.appendChild(d);
        try {
            f = d.canPlayType && d.canPlayType("video/mp4")
        } catch (g) {
            f = !1
        }
        if (!f) {
            P(c, "Your browser doesn't support our video playback.", !0, 1);
            O(c, 6);
            return
        }
        d.preload = "metadata";
        I(d, "canplay seeked", () => {
                O(c, 220);
                a.F && (a.F = !1,
                    Ys(a))
            }
            , "contextmenu", g => {
                g.preventDefault();
                return !1
            }
            , "loadedmetadata loadeddata", () => {
                a.I = 3;
                O(c, 78, a.S)
            }
            , "pause", () => {
                a.G = !1;
                a.F ? O(c, 11) : O(c, 40)
            }
            , "playing", () => {
                a.N = !0
            }
            , "ended", () => {
                ns(c)
            }
            , "error", g => {
                g.target.error.code === g.target.error.MEDIA_ERR_NETWORK && a.$ ? O(c, 79) : g.target.networkState === HTMLMediaElement.NETWORK_NO_SOURCE && (P(c, "We couldn't load the video.", !0, 1),
                    a.I = 1,
                    O(c, 6));
                Zs(a)
            }
            , "timeupdate", () => {
                if (a.N)
                    a.N = !1,
                        a.G = !0,
                        O(c, 43),
                        Ls(c.D);
                else {
                    var g = (new Date).getTime();
                    1E3 < g - a.W && (Ls(c.D),
                        a.W = g)
                }
            }
            , "mousedown touchstart", oc(() => {
                    a.N || a.G ? Zs(a) : Ys(a)
                }
            ))
    }
    b && 1 === Nr && !$s(a) && Xs(a)
}

function Et(a, b, c, d, e, f) {
    if (f || a.$ !== b || a.ta !== c) {
        a.I = 2;
        a.$ = b;
        a.ta = c;
        a.S = d;
        f = a.A;
        var g = a.D
            , h = a.M;
        if (c && Ws)
            if ($s(a))
                f.src = c,
                    e(),
                    a.H = !0;
            else if (2 === Nr)
                I(window, "HLSJS_LOAD", () => {
                        Et(a, b, c, d, e, !0)
                    }
                );
            else if (window.Hls.isSupported()) {
                a.C && a.C.destroy();
                var k = new window.Hls;
                k.attachMedia(f);
                k.on(window.Hls.Events.MEDIA_ATTACHED, () => {
                        k.loadSource(c);
                        e()
                    }
                );
                k.on(window.Hls.Events.MANIFEST_PARSED, () => {
                        O(g, 212, [a.P.C, k.levels.length])
                    }
                );
                k.on(window.Hls.Events.LEVEL_SWITCHED, () => {
                        h.M.V = k.currentLevel;
                        h.M.T = k.autoLevelEnabled;
                        O(g, 213)
                    }
                );
                a.C = k;
                a.H = !0
            } else
                Ws = !1,
                    b ? (f.src = b,
                        e()) : (P(g, "Your browser doesn't support our video playback.", !0, 1),
                        O(g, 6)),
                    a.H = !1;
        else
            a.H && a.C && a.C.destroy(),
                f.src = b,
                e(),
                a.H = !1
    }
}

function Ft(a, b, c) {
    a.P = b;
    Et(a, b.$, b.ta, b.D, c, !1)
}

function Gt(a) {
    Mb(a.A, "block");
    a.P && O(a.D, 212, [a.P.C, a.C ? a.C.levels.length : 0])
}

class Ht {
    constructor(a) {
        this.M = a;
        this.D = a.A;
        this.C = this.A = this.P = null;
        this.ta = this.$ = "";
        this.S = -1;
        this.F = this.G = this.H = !1;
        this.I = 1;
        this.N = !1;
        this.W = (new Date).getTime();
        this.V = -1;
        this.T = !0
    }

    Va(a) {
        this.A && (this.A.playbackRate = a,
            O(this.D, 57, a))
    }

    setVolume(a) {
        this.A && (this.A.volume = a)
    }

    aspectRatio() {
        return this.A && this.A.videoWidth && this.A.videoHeight ? this.A.videoWidth / this.A.videoHeight : Hr
    }
}

function It(a, b, c, d, e, f) {
    var g = a.A;
    this.G = g;
    this.C = -1;
    this.D = b;
    this.$ = c;
    this.F = d;
    this.ta = e;
    this.duration = f || 0;
    this.T = !1;
    this.Fa = this.P = !0;
    this.ja = this.ka = !1;
    this.Z = !0;
    this.Ca = 1;
    this.ra = this.ia = !1;
    g.assign([78], h => {
            h.data === this.D && (h = this.A,
                this.duration = h.A ? h.A.duration : 0,
                O(g, 52),
                O(g, 7, this.C))
        }
        , [79], () => {
            Jt(this)
        }
    );
    a.M || (a.M = new Ht(a));
    this.A = a.M;
    Dt(this.A, e)
}

function Jt(a) {
    if (a.F) {
        var b = a.S();
        a.Y();
        uc("GET", a.F, null, c => {
                a.$ = c.url;
                a.ba(b, d => {
                        d.aa()
                    }
                )
            }
            , () => {
                P(a.G, "The video expired. Try reloading the page.", !0, 1)
            }
        )
    }
}

It.prototype = {
    ba: function (a, b) {
        Gt(this.A);
        Ft(this.A, this, () => {
                this.N(a);
                b(this)
            }
        )
    },
    pa: function () {
        Mb(this.A.A, "none")
    },
    H: Ir,
    M: function () {
        return 2 === this.A.I
    },
    W: function () {
        return 3 === this.A.I
    },
    X: function () {
        return this.A.G
    },
    aa: function () {
        Ys(this.A)
    },
    Y: function () {
        Zs(this.A)
    },
    N: function (a) {
        var b = this.A;
        if (b.A) {
            var c = b.G;
            b.F || (b.F = c);
            b.A.currentTime = a;
            Ls(b.D.D);
            a = !0
        } else
            a = !1;
        return a
    },
    S: function () {
        var a = this.A;
        return a.A ? a.A.currentTime : null
    },
    xa: function () {
        return .25
    },
    va: function () {
        return 2
    },
    Va: function (a) {
        return this.A.Va(a)
    },
    $a: function () {
    },
    setVolume: function (a) {
        this.A.setVolume(a)
    },
    aspectRatio: function () {
        return this.A.aspectRatio()
    }
};

function Kt(a, b, c, d, e) {
    a = c ? d : e;
    24 < a.length && (a = a.substring(0, 23) + "\u2026");
    return `${b}<a href="${c ? c + d : "http://" + e}" rel="nofollow">${a}</a>`
}

function Lt(a) {
    return a.replace(/(^|\s|\()(?:(https?:\/\/)([^\s<]+[A-Za-z0-9\/])|([A-Za-z0-9\.-]+\.(?:com|org)(?:\/(?:\S*[A-Za-z0-9\/])?)?))/g, Kt)
}

var Mt = [0, 0, 58732, 58733, 58727, 58728, 58734, 58805, 58822, 58811, 58824, 58808, 58823, 58813, 58800]
    , Nt = [null, 58960, 58965]
    , Ot = [57888, 57889, 57890, 57898]
    , Pt = [58564, 58560, 58566]
    , Qt = [null, 58641, 58652, 58645, 58646]
    , Rt = {
    f: 58658,
    ff: 58671,
    fff: 58672,
    ffff: 58673,
    fp: 58676,
    fz: 58677,
    mf: 58669,
    mp: 58668,
    p: 58656,
    pp: 58667,
    ppp: 58666,
    pppp: 58665,
    sf: 58678,
    sffz: 58683,
    sfz: 58681
}
    , St = {
    25: "\u00bc",
    50: "\u00bd",
    75: "\u00be",
    100: "1",
    125: "1\u00bc",
    150: "1\u00bd",
    175: "1\u00be",
    200: "2",
    225: "2\u00bc",
    250: "2\u00bd",
    275: "2\u00be",
    300: "3",
    325: "3\u00bc",
    350: "3\u00bd"
}
    , Tt = {
    0: "0",
    1: "\u00bd",
    2: "1",
    3: "1\u00bd",
    4: "2",
    5: "2\u00bd",
    6: "3",
    7: "3\u00bd",
    8: "4",
    9: "4\u00bd",
    10: "5",
    11: "5\u00bd",
    12: "6",
    13: "6\u00bd",
    14: "7",
    15: "7\u00bd",
    16: "8"
}
    , Ut = {
    2: "A.H.",
    3: "P.H.",
    4: "T.H.",
    5: "S.H.",
    6: "Fdbk."
}
    , Vt = ["T", "P", "S"];

function Wt() {
    this.Ra || (requestAnimationFrame(this.ib),
        this.Ra = !0)
}

function Xt(a, b, c, d, e, f, g, h, k, l) {
    f = f.A;
    var m = fc(f, e), n = f[m + 1], p = 0 === m, q;
    p && M(a, b, c - (d ? 0 : k), h - b, k);
    for (q = Uk(e.K); 1 < q--;) {
        if (n && !n.K.oa && Uk(n.K) > q)
            e = b,
                h = g;
        else if (n && (p || Uk(f[m - 1].K) <= q))
            e = b,
                h = b + l;
        else if (0 !== m && (f[m - 1].K.oa || Uk(f[m - 1].K) <= q))
            e = b - l,
                h = b;
        else
            continue;
        var r = d ? 0 : -k;
        r += c + 1.5 * (d ? 1 : -1) * k * q;
        M(a, e, r, h - e, k)
    }
}

class Yt {
    constructor(a, b, c, d, e, f, g, h, k) {
        this.A = a;
        this.C = b;
        this.D = c;
        this.J = d;
        this.F = e;
        this.G = f;
        this.I = g;
        this.H = h;
        this.M = k
    }

    set(a, b, c, d, e, f, g) {
        this.A = a;
        this.C = b;
        this.J = c;
        this.G = d;
        this.I = e;
        this.H = f;
        this.M = g
    }
}

var Zt = new Yt(0, null, null, null, 0, 0, 0, 0, 0);

function $t(a) {
    var b = a.I
        , c = a.D;
    if (!b.aa) {
        var d = a.A
            , e = b.H
            , f = br(e)
            , g = au(b.D);
        if (!f || !a.G || e.A >= c.G.length || c.T && !g && !c.S || Am(c) || 5 === c.F && ao(hr(e, c)).F !== c.V)
            0 !== a.H && (Db(a.A, 0),
                a.H = 0),
                bu(a, 0);
        else if (f) {
            var h = a.M
                , k = hr(e, c);
            f = k.height;
            var l = h && c.C.ka ? f : 0;
            b = kr(ao(k));
            h && (bu(a, l),
            l && (mb(h, k.width),
                h.style.transform = `translate(${k.F + nn(c)}px,${b}px)`));
            g && 4 === a.F && (f = 0);
            f && (c = a.D,
                g = hr(e, c),
                h = fr(e, c),
                e = cu(a.I, a.D, e, !(-1 === h || g.index === g.A.G.length - 1 ? 0 : Kn(c, h + 1) === Bo(g)), !1),
                d.style.transform = `translate(${e}px,${b}px)`);
            d = f;
            d !== a.H && (Db(a.A, d),
                a.H = d)
        }
    }
}

function bu(a, b) {
    var c = a.M;
    c && b !== a.N && (Db(c, b),
        a.N = b)
}

function du(a, b) {
    b !== a.F && (a.F = b,
        Ja(a.A, 2 === b ? "rectangle" : 3 === b ? "rectangle-wide" : "", ["rectangle", "rectangle-wide"]),
        zm(a.D, 152))
}

function eu(a, b) {
    var c = a.D;
    b !== c.C.ka && (c.C.ka = b,
        Ga(document.body, "barbg-active"),
        a.C(),
        zm(c, 150))
}

class fu {
    constructor(a, b, c, d, e) {
        this.I = a;
        this.D = c;
        this.A = d;
        this.M = e;
        this.Ra = !1;
        this.F = 1;
        this.G = !1;
        this.N = this.H = 0;
        this.ib = () => {
            $t(this);
            this.Ra = !1
        }
        ;
        this.C = Wt;
        a.assign([67], () => {
                $t(this)
            }
            , [43], () => {
                this.G = !0
            }
            , [51], () => {
                this.G = !0;
                this.C()
            }
            , [40, 32, 218, 152], () => {
                this.C()
            }
            , [136, 41], () => {
                this.G = !1
            }
        );
        b.assign([196, 197, 198, 199, 201], () => {
                this.C()
            }
        );
        gu(a, [129], () => {
                this.A.style.background = c.C.Ia;
                this.C()
            }
        )
    }
}

function hu(a) {
    var b = a.G
        , c = a.A
        , d = -1
        , e = b.H;
    if (c.S) {
        b = a.C;
        var f = a.A;
        c = f.S.A;
        e = f.M;
        d = nn(f);
        f = Mn(f) - 1;
        var g;
        iu(a);
        if (e) {
            var h = 0;
            for (g = c.length; h !== g; h++) {
                var k = c[h];
                var l = k.height * e;
                if (f > a.height)
                    break;
                if (f > -l) {
                    var m = b.C;
                    b.A.drawImage(k.A, 0, 0, k.width, k.height, d * m, f * m, k.width * e * m, l * m)
                }
                f += l
            }
        }
        a.H = !1
    } else if (0 !== (b.ia.status & 1) && !b.aa) {
        a.T.length = 0;
        a.V.length = 0;
        if (au(b.D) && br(e)) {
            if (c.C.G && (d = a.T,
            !e.D && !e.F)) {
                f = gr(e, c);
                k = c.G[e.A];
                h = k.D;
                g = h.length;
                var n;
                for (f *= k.O.za.qa; g--;)
                    if (l = h[g],
                        m = l.K,
                    m.J.F && m.Ea <= f && m.Ea + m.ia > f)
                        for (k = m.A.length; k--;) {
                            var p = m.A[k];
                            d.push(p);
                            var q = p;
                            for (n = l; Ki(q);) {
                                n = tq(n, q, 1, !1, !1, !1, !1);
                                if (null === n)
                                    break;
                                q = n.A;
                                n = n.C;
                                d.push(q)
                            }
                            for (q = p; Mi(q);) {
                                q = Ni(q, c.D);
                                if (null === q)
                                    break;
                                d.push(q)
                            }
                        }
            }
            d = e.A
        }
        if (a.H || !Zb(a.T, a.M) || d !== a.N) {
            ec(a.T, a.M);
            a.N = d;
            if (5 === c.F)
                for (c = a.A.V,
                         e = a.A.aa,
                         d = [],
                         f = 0,
                         h = e.length,
                         iu(a); f !== h && !(g = e[f],
                g.F === c && ju(a, g, kr(g), d),
                g.F > c); f++)
                    ;
            else
                for (g = a.A,
                         c = a.height,
                         e = g.aa,
                         d = Mn(g),
                         f = d + (g.C.M ? 30 : 40),
                         h = [],
                     wn(g) && (f += 9.2 * g.A),
                         iu(a),
                         g = 0,
                         k = e.length; g !== k && !(l = e[g],
                    f += l.height,
                0 <= f && (ju(a, l, l.M + d, h),
                f > c)); g++)
                    ;
            if (b.Oa.length)
                for (b = a.G.Oa,
                         c = a.A.A,
                         e = b.length; e--;)
                    d = b[e],
                        f = d.A,
                        g = f.K.J,
                        h = Jn(a.A, g.O),
                        k = Mn(a.A) + uo(ao(h), g.track),
                        g = (f.sa + 1) * c / 2,
                        ku(a, h, new $p(h, f.K, 0), f.K, f, Qp(h) + Tp(h, d.C, !1, !1, !1), k, k + .065 * c + g, !1);
            a.H = !1
        }
    }
}

function lu(a) {
    var b = a.C
        , c = a.A
        , d = c.P;
    c = c.H;
    a.width !== c && (yd(b, c),
        a.width = c);
    a.height !== d && (Ed(b, d),
        a.height = d)
}

function mu(a, b, c, d) {
    Rd(a.C, a.A.M, 1);
    Yd(a.C, String.fromCharCode(b), c, d)
}

function nu(a, b, c, d, e) {
    var f = "", g;
    var h = 0;
    for (g = b.length; h < g; h++)
        f += String.fromCharCode(b[h]);
    Rd(a.C, a.A.M * e, 1);
    Yd(a.C, f, c, d)
}

function ou(a, b, c, d, e) {
    Rd(a.C, a.A.M * e, 1);
    Yd(a.C, String.fromCharCode(b), c, d)
}

function pu(a, b, c, d, e, f, g, h, k, l) {
    a.A.T && a.V.push(new Yt(b, c, d, e, f, g, h, k, l))
}

function qu(a, b, c, d, e, f, g, h) {
    pu(a, b, c, null, d, 0, e, f, g, h)
}

function ru(a, b) {
    a = a.G;
    return a.N && !au(a.D) && a.F.ia !== b.ea
}

function su(a, b, c, d, e, f, g) {
    var h = a.G
        , k = a.F;
    return !h.N || h.$ || h.X || k.A !== b || k.C !== c || k.J !== e || k.F !== (f || 0) || k.D !== d ? g || a.D : "#FC5D2B"
}

function tu(a, b, c, d) {
    var e = a.G
        , f = e.F;
    if (f.G && c.index === a.N && dc(a.M, b))
        return f.N;
    if (e.N) {
        c = a.F;
        d = d ? 23 : 1;
        if (ru(a, b.K))
            return c.A === d && c.D === b ? "#FD9271" : "#aaa";
        if (!(!e.G || f.H && b.color || au(e.D)) && null !== e.G.I(b, null) || !e.$ && !e.X && c.A === d && c.D === b)
            return "#FC5D2B"
    }
    return (f.H ? b.color : "") || a.D
}

function uu(a, b, c, d, e, f, g, h, k) {
    var l = a.C;
    a = Gf(a.A.I, b, c, d, e, f, g);
    d = a.length;
    for (Rd(l, b, c, e, f); d--;)
        Zd(l, a[d], h, k, g),
            k -= b;
    return k
}

function iu(a) {
    var b = a.C;
    K(b, sf(a.A.C));
    M(b, 0, 0, a.width, a.height)
}

function ju(a, b, c, d) {
    var e = a.A, f = e.D.C, g = 2 === e.F, h = e.Y, k = nn(e), l = b.A, m = b.U,
        n = b.H + b.S + (b.N ? 10 * b.C.A : 0) + k, p = c, q;
    if (!m && wn(e)) {
        var r = a.A
            , u = a.C
            , v = r.D.H
            , w = 4 * r.A
            , y = b.width
            , x = r.I.width(w, 4, v, !1, !1)
            , z = Math.max(b.H, b.H + (y - x) / 2)
            , C = c - 5.2 * r.A;
        K(u, su(a, 34, null, null, null));
        Rd(u, w, 4, !1, !1);
        Zd(u, v, Math.floor(z) + nn(r), C, y);
        qu(a, 34, null, null, z, C - w, z + x, C)
    }
    if (!h && (!m && e.pa || m && e.ra)) {
        var F = !!m, H = a.A, N = H.D.C, Q = a.C, L = H.A, G = nn(H), W = kr(b), T = b.A[0].O.A, S = 2 * L, V = .7 * S,
            aa;
        Rd(Q, S, 4, !1, !1);
        var da = 0;
        for (aa = T.length; da !== aa; da++) {
            var eb = T[da];
            if (eb.F) {
                var fb = eb.track;
                var Ob = rr(b, da);
                var Eb = F ? si(N[da]) : N[da].name;
                if (1 === fb.A && T[da + 1].F)
                    var gb = lr(b, da + 1) + 4.13 * L - Ob;
                else if (2 === fb.A && T[da - 1].F)
                    continue;
                else
                    gb = vr(b, fb);
                var pa = H.I.width(S, 4, Eb, !1, !1);
                K(Q, su(a, 35, null, null, eb));
                var hc = G + b.H + b.S - L - pa;
                var be = W + Ob + (gb + V) / 2;
                Yd(Q, Eb, hc, be);
                qu(a, 35, null, eb, hc, be - S, hc + pa, be)
            }
        }
    }
    var Fb = 0;
    for (q = f.length; Fb < q; Fb++) {
        var ua = f[Fb];
        if (pr(b, Fb, ua)) {
            var va = a
                , ma = b
                , Fa = ua
                , Gb = n
                , Ha = p + b.D[Fb]
                , Pb = va.A
                , rc = va.C
                , Hb = Pb.A
                , pd = ma.A
                , Lc = Fa.index
                , Mc = ma.width - ma.S
                , Nc = -1
                , bd = Ha
                , Ye = Fa.N;
            hn(Pb) && 0 > Gb && (Mc += Gb,
                Gb = 0);
            ma.N && (Mc -= 10 * Hb);
            ma.X && (Mc -= 10 * Hb);
            Fa.C && (K(rc, va.P),
                Nc = Ha,
                Ha += Ba[Ye] * Hb,
                vu(va, Gb, Ha, pd, Lc, Ye, Mc, Hb, .13 * Hb, Pb.T),
                bd = Ha = Nc + 4.13 * Hb,
                Ha += nr(ma, Lc));
            Fa.M && (Ha += ma.G[Lc]);
            if (Fa.F) {
                if (Fa.C || Fa.M)
                    Ha += 1.2 * Hb;
                Ha += or(ma, Lc);
                -1 === Nc && (Nc = Ha);
                K(rc, va.P);
                vu(va, Gb, Ha, pd, Lc, Fa.I, Mc, 1.3 * Hb, .13 * Hb, Pb.T);
                bd = Ha += vi(Fa, Hb);
                Ha += ma.W[Lc]
            }
            va.S = Ha;
            va.W = bd;
            p !== a.S && (a.S += b.Y[Fb]);
            p = a.S
        }
    }
    b.N && wu(a, !0, b, c);
    Fb = 0;
    for (q = l.length; Fb < q; Fb++) {
        var Cc = l[Fb];
        var we;
        if (!(we = !g))
            a: {
                var Za = void 0
                    , Wb = Cc
                    , pb = k
                    , xe = Wb.A
                    , $b = Wb.F + pb
                    , Dc = xe.H;
                if (xe.T)
                    for (Za of Gl(Wb.O))
                        if (0 < Za.C) {
                            var ic = xe.G[Wb.index + Za.C - 1];
                            we = $b < Dc && 0 < ic.F + ic.width + pb;
                            break a
                        }
                we = 0 < $b + Wb.width + 500 && $b < Dc
            }
        if (we)
            if (h) {
                var hb = void 0
                    , ce = void 0
                    , X = a
                    , ac = Cc
                    , Ec = ao(ac)
                    , uf = Qp(ac)
                    , kg = kr(Ec);
                for (ce of Wo(ac))
                    for (hb of cp(ce))
                        if (hb.K.J.F && hb.K.M) {
                            var sb = X
                                , Qb = uf + ce.A
                                , de = kg + qr(Ec, hb.K.J.track.index)
                                , qb = bq(hb);
                            if (-1 !== qb) {
                                var Oc = sb.A.C
                                    , Ia = sb.C
                                    , jc = hb.K
                                    , Pc = jc.oa ? null : jc.A[0]
                                    , tb = 2.8 * sb.A.A
                                    , ee = Oc.G && Pc ? hb.A.index === sb.N && dc(sb.M, Pc) : !1;
                                Rd(Ia, tb, Oc.Ga);
                                K(Ia, ee ? Oc.N : sb.D);
                                Yd(Ia, um(jc.M[qb]), Qb, de + tb)
                            }
                        }
            } else {
                var sc = void 0
                    , qa = void 0
                    , xb = void 0
                    , $a = void 0
                    , La = void 0
                    , na = void 0
                    , cd = void 0
                    , Qc = void 0
                    , ba = void 0
                    , yb = void 0
                    , wa = void 0
                    , la = a
                    , fa = b
                    , Ma = Cc
                    , Na = c
                    , nb = d
                    , ye = la.G
                    , Bb = la.A
                    , Gd = ye.N && ye.G && !ye.G.F()
                    , xa = Bb.A
                    , Cb = .065 * xa
                    , jb = 4.13 * xa
                    , Rc = sf(Bb.C)
                    , ob = Ma.O
                    , ab = ob.H
                    , Xb = la.C
                    , kc = Fo(Ma)
                    , oa = Qp(Ma)
                    , bb = oa + (kc ? kc.A : 0)
                    , Fc = ob.A.length
                    , ub = Ma
                    , Rb = ub.O;
                var za = Rb.P.aa && (-1 !== Rb.V && !Nl(Rb) || 0 !== ub.C && ub.I && !Jl(Rb));
                if (ab) {
                    var Oa = void 0
                        , vb = void 0
                        , zb = void 0
                        , Ib = void 0
                        , Sb = la
                        , Pa = fa
                        , qd = ob
                        , Hd = kc.width
                        , fe = bb
                        , Qf = Na
                        , xf = Bb.W
                        , kb = ab
                        , ge = Sb.A
                        , rd = ge.A
                        , Ze = ge.I
                        , tc = (xf ? Qf : sr(Pa)) | 0
                        , lg = xf ? Math.ceil(Pa.height) - ro(Pa) : Math.ceil(tr(Pa)) - tc
                        , Sc = Sb.C
                        , Id = 1.6 * rd
                        , yf = Hd - 2 * rd
                        , Jb = 0;
                    xf || (tc += Qf);
                    K(Sc, ge.C.I ? "rgba(35,36,42, 0.7)" : "rgba(245, 245, 245, 0.9)");
                    M(Sc, fe, tc, Hd, lg);
                    K(Sc, su(Sb, 26, null, null, qd.A[0]));
                    Rd(Sc, Id, 2);
                    zb = Gf(Ze, Id, 2, kb, !1, !1, yf);
                    vb = zb.length;
                    for (Oa = tc += (lg + vb * Id) / 2 - (1 - .8) * Id; vb--;)
                        Ib = Ze.width(Id, 2, zb[vb]),
                            Zd(Sc, zb[vb], fe + (Hd - Ib) / 2, tc, yf),
                            tc -= Id,
                        Ib > Jb && (Jb = Ib);
                    fe += (Hd - Jb) / 2;
                    qu(Sb, 26, null, qd.A[0], fe, tc, fe + Jb, Oa)
                }
                if (!ab) {
                    K(Xb, la.D);
                    if (Ma.M.length) {
                        var ca = void 0
                            , sd = void 0
                            , Rf = la
                            , Pg = fa
                            , sh = oa
                            , Tc = Na
                            , $e = Ma.M;
                        sd = 0;
                        for (ca = $e.length; sd !== ca; sd++) {
                            var he, Gc, Uc = Rf, Yb = Pg, wb = $e[sd], Hc = sh, zf = Tc, lc = Uc.C, cb = Uc.A.A;
                            var Kb = so(wb);
                            var je = Kb.K.J.track;
                            if (Kb.K.J.F && je.C && wb.isVisible()) {
                                var Af = dp(wb);
                                var Lb = zf + lr(Yb, je.index) + .065 * cb;
                                var db = Hc + ep(Kb);
                                var Wa = Hc + ep(Af);
                                var bc = Lb + jp(Kb, !0, !0, wb.D);
                                var dd = Lb + jp(Af, !0, !0, wb.D);
                                var Jd = wb.G ? 0 : db === Wa ? 0 : (dd - bc) / (Wa - db);
                                var ze = bc - Jd * db;
                                if (Kb !== wb.A[0] || Af !== jr(wb))
                                    db = Hc + ep(wb.A[0]),
                                        bc = Jd * db + ze,
                                        Wa = Hc + ep(jr(wb)),
                                        dd = Jd * Wa + ze;
                                var Kd = .5 * cb * (Kb.K.D ? .65 : 1);
                                var Vc = Kb.K.G ? -1 : 1;
                                K(lc, ru(Uc, Kb.K) ? "#aaa" : Uc.D);
                                ue(lc, db, bc, Wa, dd, Wa, dd - Vc * Kd, db, bc - Vc * Kd, !0);
                                var Ab = 0;
                                for (Gc = wb.C; Ab !== Gc; Ab++) {
                                    var rb = wb.A[Ab];
                                    if (!rb.K.oa) {
                                        var Wc = Ab + 1 === Gc ? null : wb.A[Ab + 1];
                                        var ed = 0 === Ab ? null : wb.A[Ab - 1];
                                        db = Hc + ep(rb);
                                        var mc = Jd * db + ze;
                                        for (he = Uk(rb.K); 1 < he--;) {
                                            if (Wc)
                                                if (!Wc.K.oa && Uk(Wc.K) > he && Wc.G === rb.G) {
                                                    Wa = Hc + ep(Wc);
                                                    var Ld = !1
                                                } else if (ed && !ed.K.oa && Uk(ed.K) > he)
                                                    continue;
                                                else {
                                                    Ld = !0;
                                                    var Ae;
                                                    if (Ae = ed)
                                                        if (Uk(ed.K) > Uk(Wc.K))
                                                            Ae = !0;
                                                        else {
                                                            var td = rb.K
                                                                , Md = Re(1, td.J.O.I);
                                                            Ae = Ve(td.F, Md).Ba > Ve(td.W, Md).Ba
                                                        }
                                                    Wa = Ae ? db - hq(rb) + .16 * cb : db + hq(rb) - 1
                                                }
                                            else if (ed && (ed.K.oa || Uk(ed.K) <= he || ed.G !== rb.G))
                                                Wa = db - hq(rb) + .16 * cb,
                                                    Ld = !0;
                                            else
                                                continue;
                                            var fd = Ld && wb.F !== rb.K.G ? mc + 1.5 * Kd * he * (rb.K.G ? 1 : -1) : mc - 1.5 * Kd * he * Vc;
                                            var Nd = Jd * (Wa - db) + fd;
                                            ue(lc, db, fd, Wa, Nd, Wa, Nd - Vc * Kd, db, fd - Vc * Kd, !0)
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ba = 0;
                    for (Qc = Fc; ba !== Qc; ba++)
                        if (wa = ob.A[ba],
                        wa.F && (na = wa.track,
                            qa = Na + lr(fa, ba),
                        na.C && (za && (xu(la, Ma, na, qa, !1),
                            za = !1),
                            qa += jb + nr(fa, ba)),
                        na.M && (qa += fa.G[ba]),
                            na.F)) {
                            if (na.C || na.M)
                                qa += 1.2 * xa;
                            if (wi(wa.track) && El(wa.O)) {
                                var le = Up(Ma, 3)
                                    , ud = la
                                    , Qg = na
                                    , Bf = le ? oa + le.A + .5 * xa : bb
                                    , mg = qa
                                    , Od = ud.C
                                    , af = 1.5 * ud.A.A
                                    , Xc = yu(ud.G, Qg, !0);
                                Rd(Od, af, 2);
                                K(Od, ud.D);
                                Qg.G && (Xc = "Capo " + Qg.G + (Xc ? "; " + Xc : ""));
                                Yd(Od, Xc, Bf, mg + af)
                            }
                            qa += or(fa, ba);
                            if (fa.Z[ba]) {
                                var og = void 0
                                    , Yc = void 0
                                    , vd = void 0
                                    , gd = void 0
                                    , Be = la
                                    , Zc = Ma
                                    , Cf = ba
                                    , Pd = oa
                                    , hd = qa - fa.I[ba]
                                    , pg = null
                                    , wd = null
                                    , xd = null;
                                for (Yc of Wo(Zc)) {
                                    vd = gd = !1;
                                    if (1 === Yc.G)
                                        for (og of zo(Yc, Cf)) {
                                            vd = !0;
                                            xd = Yc;
                                            a: {
                                                var qg = og.K;
                                                if (qg.Ca)
                                                    var Sf = !0;
                                                else {
                                                    for (var Qd = qg.A, me = Qd.length; me--;)
                                                        if (Qd[me].aa) {
                                                            Sf = !0;
                                                            break a
                                                        }
                                                    Sf = !1
                                                }
                                            }
                                            if (Sf) {
                                                pg = og;
                                                gd = !0;
                                                break
                                            }
                                        }
                                    gd ? null === wd && (wd = xd.A) : vd && null !== wd && (zu(Be, pg.K, Pd + wd, hd, xd.A - wd),
                                        wd = null)
                                }
                                null !== wd && zu(Be, pg.K, Pd + wd, hd, xd.A + pg.width - wd)
                            }
                            za && (xu(la, Ma, na, qa, !0),
                                za = !1)
                        }
                }
                for (yb of Wo(Ma))
                    switch (La = yb.G,
                        bb = oa + yb.A,
                        La) {
                        case 1:
                            ba = 0;
                            for (Qc = yb.D.length; ba !== Qc; ba++)
                                $a = yb.D[ba],
                                null !== $a && $a.K.J.F && (!Gd || ru(la, $a.K) ? Au(la, fa, $a, bb, Na + qr(fa, $a.K.J.track.index)) : nb.push($a));
                            if (nb.length) {
                                for (ba = nb.length; ba--;)
                                    xb = nb[ba],
                                        Au(la, fa, xb, bb, Na + qr(fa, xb.K.J.track.index));
                                nb.length = 0
                            }
                            break;
                        case 16:
                            if (!ab)
                                for (xb of cp(yb))
                                    Au(la, fa, xb, bb, Na + qr(fa, xb.K.J.track.index));
                            break;
                        case 2:
                            K(Xb, la.D);
                            ba = sr(fa);
                            M(Xb, bb, Na + ba, yb.width, tr(fa) - ba);
                            break;
                        case 17:
                            K(Xb, Rc);
                            ba = sr(fa) - 2;
                            M(Xb, bb, Na + ba, yb.width + 1, tr(fa) + 2 - ba);
                            K(Xb, la.D);
                            for (ba = Fc; ba--;)
                                if (wa = ob.A[ba],
                                wa.F && wa.track.C)
                                    if (1 === wa.track.A && ob.A[ba + 1].F) {
                                        qa = lr(fa, ba);
                                        var Tb = la
                                            , rg = bb
                                            , Tf = lr(fa, ba + 1) + jb - qa
                                            , Ce = Na + qa + Tf
                                            , Rg = Tb.A.A;
                                        Rd(Tb.C, Tf, 1);
                                        Zd(Tb.C, String.fromCharCode(57344), rg, Ce, Rg)
                                    } else if (wa.track.F) {
                                        qa = lr(fa, ba);
                                        var Uf = la
                                            , bf = bb
                                            , ne = Na + qa
                                            , cf = ur(fa, wa.track) + vi(wa.track, xa) - qa
                                            , th = Uf.C
                                            , De = Uf.A.A;
                                        cf += De / 2;
                                        bf += De / 4;
                                        ne -= De / 4;
                                        mu(Uf, 57347, bf, ne + 1);
                                        M(th, bf, ne, .5 * De, cf);
                                        mu(Uf, 57348, bf, ne - 1 + cf)
                                    }
                            break;
                        case 15:
                        case 22:
                        case 23:
                            K(Xb, la.D);
                            for (ba = Fc; ba--;)
                                if (wa = ob.A[ba],
                                wa.F && wa.track.C && wa.track.index === yb.P) {
                                    if (yb.C === ob.za) {
                                        xb = Op(Lp(Ma, !0), wa.track, !0)[0];
                                        var ug = xb.K.J.H
                                    } else
                                        ug = Dj(wa, yb.C),
                                            xb = Np(Ma, wa.track, yb.C);
                                    ug && Bu(la, ug, wa.track, xb, !0, bb - (23 === La ? 0 : yb.F), Na + lr(fa, ba))
                                }
                            break;
                        case 8:
                        case 11:
                        case 18:
                        case 9:
                        case 10:
                        case 12:
                        case 6:
                        case 3:
                        case 21:
                        case 4:
                        case 13:
                        case 5:
                        case 19:
                            K(Xb, la.D);
                            sc = jn(Bb) && !Pp(Ma) ? bb - xa : bb;
                            ba = 0;
                            for (Qc = Fc; ba !== Qc; ba++)
                                if (wa = ob.A[ba],
                                    wa.F)
                                    if (na = wa.track,
                                        qa = Na + lr(fa, ba),
                                    8 === La || 9 === La || 6 === La || 10 === La || 12 === La || 11 === La || 18 === La) {
                                        var vg = sc + yb.width
                                            , hi = (10 === La || 12 === La) && null !== ob.G && 2 < ob.G;
                                        if (na.C) {
                                            var jd = jb;
                                            if (wa.track.F || 1 === wa.track.A && wa.O.A[wa.track.index + 1].F)
                                                jd += nr(fa, ba),
                                                na.M && (jd += fa.G[ba]),
                                                    jd = na.A ? jd + (fa.Y[ba] + fa.D[ba + 1]) : jd + (1.2 * xa + or(fa, ba));
                                            !hi || 2 === na.A && Ej(wa).F || Cu(la, ob.G, vg, qa);
                                            Du(la, 1, wa, sc, vg, qa, jd, La);
                                            qa += jb + nr(fa, ba)
                                        }
                                        qa += fa.G[ba];
                                        if (na.F) {
                                            if (na.C || na.M)
                                                qa += 1.2 * xa;
                                            qa += or(fa, ba);
                                            hi && !na.C && Cu(la, ob.G, vg, qa);
                                            Du(la, 2, wa, sc, vg, qa, vi(na, xa), La)
                                        } else
                                            na.ba && !Bb.da && (jd = (na.ia ? 11.3 : 4) * xa,
                                                qa -= jd,
                                            hi && Cu(la, ob.G, vg, qa),
                                            Bb.W && hm(Bb.D, na.index, !1) && (jd += fa.Y[ba] + xa),
                                                Du(la, 4, wa, sc, vg, qa, jd, La))
                                    } else if (3 === La || 21 === La)
                                        na.C && !wa.S && ((3 === La || Jo(wa, Io(Ma))) && Bu(la, wa.H, na, Op(Ma, na, !0)[0], 21 === La, bb + .5 * xa, qa),
                                        na.F && 21 !== La && Bu(la, wa.T, na, Op(Ma, na, !0)[0], !1, bb + .5 * xa, qa + jb + nr(fa, ba) + fa.G[ba] + 1.2 * xa + or(fa, ba)));
                                    else if (4 === La || 13 === La) {
                                        if (na.C) {
                                            var Ug = void 0
                                                , Sd = la
                                                , zd = wa
                                                , ii = qa + Cb
                                                , dj = 13 === La;
                                            if (!zd.H.G) {
                                                var ji = Sd.C
                                                    , Df = Sd.A
                                                    , vh = Df.A
                                                    , Xf = dj || Ko(Ma) && !Ma.I
                                                    ,
                                                    Ad = bb + (dj ? vh : Ql(Ma.O, [15, 16]) || Ma.I || Jl(Ma.O) ? 0 : Ma.A.A)
                                                    , Fe = Ad;
                                                dj && (zd = gl(zd));
                                                var Bd = Xf && 0 === zd.G
                                                    , Vg = Bd ? el(zd).G : zd.G
                                                    , xc = ra[Vg]
                                                    , ej = Bd ? 57953 : 2 === xc[1] ? 57954 : 57952
                                                    , Qm = Vn(Df, ej) * (Bd ? 1.5 : 1)
                                                    , Wg = zd.H;
                                                Ug = (Kg[Wg.code] ? Kg[Wg.code] : Kg.G2)[0 <= Vg ? 0 : 1];
                                                var yc = 0
                                                    , df = xc[0].length;
                                                for (K(ji, su(Sd, 4, null, null, zd)); yc !== df; yc++)
                                                    mu(Sd, ej, Fe, ii + Ug[yc] * vh / 2),
                                                        Fe += Qm;
                                                qu(Sd, 4, null, zd, Ad, ii, Fe, ii + 4.13 * vh)
                                            }
                                        }
                                    } else {
                                        var Xg = 19 === La
                                            , wh = Xg ? Bo(Ma) : Ma;
                                        na.C && (Eu(la, wh, wh.O, na, bb, qa + Cb, !1, Xg),
                                            qa += jb + nr(fa, ba));
                                        if (na.La) {
                                            if (na.C || na.M)
                                                qa += 1.2 * xa;
                                            na.M && (qa += fa.G[ba]);
                                            Eu(la, wh, wh.O, na, bb, qa + or(fa, ba) + Cb, !0, Xg)
                                        }
                                    }
                            break;
                        case 14:
                            K(Xb, Rc),
                                M(Xb, bb, Na, yb.width, fa.height)
                    }
                for (ba = Fc; ba--;)
                    if (fa.$[ba]) {
                        var xh = Bb.D.C[ba].S;
                        if (null !== xh)
                            for (cd = xh.length; cd--;)
                                if (xh[cd].A === ob.U) {
                                    var Ge = la
                                        , wg = fa
                                        , yh = Ma
                                        , He = Bb.D.C[ba]
                                        , Ie = xh[cd]
                                        , fj = Na
                                        , gj = Ge.C
                                        , ki = Nt[Ie.D]
                                        , li = Np(yh, He, Ie.C)
                                        , hj = Vn(Ge.A, ki)
                                        , Ic = Yp(yh, Ve(Ie.C, yh.O.za).qa, !0, !1, !1)
                                        , ef = fj + lr(wg, He.index) + 4.13 * Ge.A.A + nr(wg, He.index)
                                        , Yg = ti(He, yh.O.U, Ie.C);
                                    li && (Ic += (hq(li) - hj) / 2);
                                    K(gj, su(Ge, 32, null, null, yh.O.A[He.index], Yg));
                                    mu(Ge, ki, Ic, ef);
                                    pu(Ge, 32, null, null, yh.O.A[He.index], Yg, Ic, ef - Ge.A.A, Ic + hj, ef)
                                }
                    }
            }
        else if (Cc.F > -k + e.H)
            break
    }
    b.X && wu(a, !1, b, c)
}

function wu(a, b, c, d) {
    var e = a.A
        , f = e.C
        , g = e.A;
    a = a.C;
    var h = sr(c)
        , k = 10 * g
        , l = tr(c) - h;
    e = nn(e) + (b ? c.H + c.S : c.H + c.width - 10 * c.C.A);
    d += h;
    c = Ub(b ? c.N : c.X, !1);
    g *= 1.6;
    K(a, f.I ? "hsla(0, 0%, 100%, 0.1)" : "hsla(0, 0%, 0%, 0.1)");
    M(a, e, d, k, l);
    K(a, f.I ? "hsl(0, 0%, 20%)" : "hsl(0, 0%, 98%)");
    M(a, e + (b ? 1 : 0), d + 1, k - 1, l - 2);
    K(a, f.I ? "#b3b3b3" : "#808080");
    Rd(a, g, 2, !1, !1);
    Yd(a, c, e + (k - Xd(a, c)) / 2, d + (l + g / 2) / 2)
}

function vu(a, b, c, d, e, f, g, h, k, l) {
    for (var m = a.G, n = a.C, p = f; p--;)
        M(n, b, c + p * h, g, k);
    if (l)
        for (b = m.G,
                 p = d.length; p--;) {
            g = d[p];
            m = g.O;
            l = m.A[e];
            if (m = !vl(m) && !m.H && b && !b.M(l))
                a: {
                    m = wl(l.O);
                    for (var q = l.A, r = q.length; r--;)
                        if (q[r].length && m !== $k(l, r)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
            m && (K(n, "red"),
            (l = Up(g, 7)) && vu(a, Qp(g) + l.A, c, d, e, f, g.width - l.A, h, k, !1))
        }
}

function xu(a, b, c, d, e) {
    var f = a.C
        , g = a.A
        , h = g.A
        , k = Qp(b);
    d -= (e ? .6 : c.F ? 2.25 : 1.5) * h;
    e = 1.3 * h;
    a: {
        var l = b.A.G;
        var m = b.index
            , n = 0;
        do {
            var p = l[m];
            var q = p.O;
            if (0 === p.N && -1 !== q.V) {
                l = q.V + n;
                break a
            }
            if (Jl(q)) {
                l = n + 1;
                break a
            }
            n++;
            m--
        } while (0 <= m);
        l = n
    }
    l = String(l);
    c = b.O.A[c.index];
    b.I && im(g.D) && (k += 1.25 * h);
    K(f, su(a, 28, null, null, c));
    Rd(f, e, 2, !1, !0);
    Yd(f, l, k, d);
    qu(a, 28, null, c, k, d - e, k + Xd(f, l), d)
}

function Au(a, b, c, d, e) {
    var f = a.A, g = f.C, h = a.C, k = c.K, l = k.J.O, m = !l.H, n = c.A, p = f.A, q = .065 * p, r = k.J, u = k.J.track,
        v = u.index, w = u.C, y = k.A.length, x = hq(c), z = r.C, C = z ? Fl(l) : 0, F = sk(k), H = f.T && !0,
        N = ru(a, k) ? "#aaa" : a.D, Q = null, L = 0, G = 0, W = null, T = d, S, V, aa;
    d |= 0;
    var da = V = d + c.F;
    G = L = S = e + b.D[v];
    if (w && m) {
        var eb = Kk(k)
            , fb = !1
            , Ob = !1;
        if (y && !F) {
            var Eb = Pj(k)
                , gb = k.G;
            W = Pk(k, gb, !0, null);
            var pa = L + q + gp(c, W, !0)
                , hc = 0;
            if (Eb) {
                K(h, N);
                var be = Sq(c, gb, !0, null);
                gb ? M(h, V + pq(c), pa - Qj(W, !0, p) - be, .16 * p, be) : M(h, V, pa - Qj(W, !1, p), .16 * p, be);
                if (-1 === c.C) {
                    var Fb = Vk(k, gb);
                    Fb && (ou(a, Fb, V + pq(c), pa + be * (gb ? -1 : 1), k.D ? .65 : 1),
                    1 === k.D && ($d(h, .1 * p),
                        Wd(h, N),
                        ae(h),
                        oe(h, V - x * (gb ? -.2 : .4), pa + (be - 1.5 * p) * (gb ? -1 : 1)),
                        pe(h, V + x * (gb ? 1.6 : 1.2), pa + (be - .5 * p) * (gb ? -1 : 1)),
                        ie(h),
                        ke(h)))
                }
            }
            var ua = 0;
            for (aa = y; ua < aa; ua++) {
                var va = k.A[ua];
                hc = L + .065 * p + gp(c, va, !0);
                ku(a, n, c, k, va, d, L, hc, Eb);
                va.P && (Q = va)
            }
            if (k.ka) {
                var ma = V
                    , Fa = L + q
                    , Gb = a.A
                    , Ha = k.ka
                    , Pb = Ot[Ha - 1]
                    , rc = Fa
                    , Hb = gq(c, Pk(k, !gb, !0, null));
                if (Pj(k)) {
                    gb && (ma += pq(c));
                    var pd = jp(c, !0, !0, null)
                        , Lc = c.K;
                    -1 !== c.C && (pd += .5 * (Lc.G ? 1 : -1) * c.A.A.A * (1.5 * Lc.ha.F - .5));
                    Fa += Hb - (Hb - pd) / 2
                } else
                    ma += x / 2,
                        Fa += Hb + Gb.A / 2 * Ha * (gb ? -1 : 1);
                if (1 === Ha || 4 === Ha) {
                    var Mc = Gb.A;
                    Fa = Fa < rc - Mc / 2 || Fa > rc + Gb.M + Mc / 2 ? Fa : rc + Mc * Math.round((Fa - rc) / Mc)
                }
                K(a.C, ru(a, k) ? "#aaa" : a.D);
                mu(a, Pb, ma, Fa)
            }
            k.ba && Fu(a, c, k, oq(c) - bp(c, k.A[0], 0, 6), L + q, 1 === k.ba, !1);
            Xh(k) && 2 === u.A && (L = uo(b, Ej(k.J).track) + Mn(f))
        } else if (r.D)
            Gu(a, n, k, S + q + 2 * p);
        else if (!H && C || H && 0 < z || H && 0 > z && n.I)
            Hu(a, H, n, c, r, d, S + 4.13 * p / 2, S + (5 === u.N ? -1.5 * p : (4.13 * p - (u.N - 1 + .13) * p) / 2 - 2 * p), !0);
        else if (!F && lq(c, f) && !k.D && (0 <= z && !C || 0 > z && !H)) {
            var Nc = d
                , bd = S + q
                , Ye = a.G
                , Cc = a.A
                , we = a.C
                , Za = Cc.A
                , Wb = Vo(c, Cc.D)
                , pb = Wb.I
                , xe = Cc.T && Ye.G && !au(Ye.D) && Ye.G.H(k)
                , $b = Vn(Cc, pb)
                , Dc = Nc
                , ic = bd
                , hb = c.D;
            58595 === pb && (sq(c, Cc.D) && (Dc = Sp(n)),
            1 === k.J.track.N && hb++);
            bd += Za * hb;
            K(we, ru(a, k) ? 2 === a.F.A && a.F.C === c ? "#FD9271" : "#aaa" : xe ? "#FC5D2B" : su(a, 2, c, null, null));
            mu(a, pb, Dc, bd);
            Nc = Dc + $b;
            58596 === pb && (4 < hb || 0 > hb) && M(we, Dc - .4 * Za, bd, $b + .8 * Za, .17 * Za);
            if (Wb.N) {
                Nc += .45 * Za;
                for (var ce = 0; ce !== Wb.Ma; ce++)
                    mu(a, 57831, Nc, ic + (hb - .5) * Za),
                        Nc += .9 * Za
            }
            qu(a, 2, c, null, Dc, bd - Wb.G * Za, Nc, bd + Wb.D * Za)
        }
        !y && sq(c, f.D) && (V = Sp(n));
        G = L - vq(c, 0, 0);
        if (y && !F) {
            var X = G;
            eb && (tk(k) && (Sk(k, W, !0) ? (X -= .3 * p,
                mu(a, 58530, V + (x - Vn(f, 58530)) / 2, X),
                X -= .5 * p) : mu(a, 58530, V + (x - Vn(f, 58530)) / 2, L + q + fq(c, W, !1) - Tk(k, W, !0, p))),
            uk(k) && (X -= .3 * p,
                mu(a, 58534, V + (x - Vn(f, 58534)) / 2, X),
                X -= p),
            vk(k) && (Sk(k, W, !1) ? (X -= .3 * p,
                mu(a, 58532, V + (x - Vn(f, 58532)) / 2, X)) : mu(a, 58532, V + (x - Vn(f, 58532)) / 2, L + q + fq(c, W, !1) - Tk(k, W, !1, p))))
        }
        G -= vq(c, 1, 2);
        if (mq(c)) {
            var ac = kq(c);
            xq(ac) === c && ac.C && Iu(a, ac, oq(ac.A[0]), G - .5 * p, !0, !1)
        }
        if (Hk(k))
            for (ua = k.I.length; ua--;)
                if (!Wh(k.I[ua]) && (jq(c) || k.I[ua].A[0] === c.K)) {
                    var Ec = a
                        , uf = c
                        , kg = S + q
                        , sb = Ec.C
                        , Qb = zq(uf, k.I[ua])
                        , de = ru(Ec, uf.K) ? "#aaa" : Ec.D;
                    K(sb, de);
                    Wd(sb, de);
                    ve(sb, Qb.A, kg + Qb.F, kg + Qb.D, .1, Qb.C - Qb.A, Qb.G, Qb.height, Qb.height, Qb.height + .28 * Ec.A.A)
                }
        G -= vq(c, 3, 4);
        if (y && eb && (qk(k) || rk(k))) {
            var qb = qk(k) ? 58528 : 58540;
            mu(a, qb, V + (x - Vn(f, qb)) / 2, G - .3 * p)
        }
        G -= vq(c, 5, 6);
        k.H && Dk(k) && Bq(c) && Ju(a, c, k, !0, V, G - .5 * p);
        X = G -= vq(c, 7, 7);
        if (Q && Lk(k)) {
            X -= .5 * p;
            if (1 === Q.P)
                a: {
                    var Oc = Q
                        , Ia = V
                        , jc = X;
                    if (Mi(Oc)) {
                        var Pc = Oc;
                        do
                            if ((Pc = Ni(Pc, a.A.D)) && Pc.P)
                                break a;
                        while (Pc && Mi(Pc))
                    }
                    var tb = a.C
                        , ee = a.A
                        , sc = Vn(ee, 58726)
                        , qa = Vn(ee, 60068)
                        , xb = tq(c, Oc, 1, !0, !0, !1, !1)
                        , $a = jc;
                    var La = xb ? oq(xb.C) + xb.C.width - oq(c) : c.width;
                    K(tb, su(a, 19, c, Oc, null));
                    mu(a, 58726, Ia, jc);
                    for (jc += 1.5 * ee.A / 4; sc + qa < La;)
                        mu(a, 60068, Ia + sc, jc),
                            sc += qa;
                    pu(a, 19, c, Oc, null, 0, Ia, $a, Ia + sc, jc)
                }
            else
                qb = Mt[Q.P],
                    mu(a, qb, V + (x - Vn(f, qb)) / 2, X);
            X -= 1.5 * p
        }
        ek(k) && mu(a, 58574, V + c.width / 3, X - .5 * p);
        ua = 0;
        for (aa = y; ua !== y; ua++)
            if (va = k.A[ua],
                fb = Jj(va, g, !1) && 1 === va.D.position,
                Ob = Kj(va) && 1 === va.G.position,
            fb || Ob)
                X -= .5 * p,
                fb && Ku(a, c, va, V, X, x, va.D, !1),
                Ob && Ku(a, c, va, V + (fb ? .2 * p + Un(f, va, va.D, !1) : 0), X, x, va.G, !0),
                    X -= .8 * p;
        if (y && Lk(k)) {
            if (k.ja) {
                X -= .5 * p;
                var na = V
                    , cd = X;
                K(a.C, a.D);
                mu(a, k.ja ? 1 === k.ja ? 58898 : 58896 : null, na, cd);
                X -= (1 === k.ja ? 2 : 1.25) * p
            }
            gk(k) && (X -= .5 * p,
                mu(a, 59384, V + (x - Vn(f, 59384)) / 2, X),
                X -= p);
            fk(k) && (X -= .5 * p,
                mu(a, 59381, V + (x - Vn(f, 59384)) / 2, X),
                X -= p)
        }
        k.ta && Lk(k) && (X -= p,
            Lu(a, c, V + x / 2, X, !1),
            X -= 1.5 * p);
        k.$ && Jk(k) && (X -= p,
            Mu(a, k, x, da, X),
            X -= 2 * p);
        if (k.da) {
            X -= .75 * p;
            var Qc = V
                , ba = X
                , yb = a.C
                , wa = c.K
                , la = "";
            wa.da && (la = Aa[wa.da[0]],
            wa.da[1] || (la = "\u00bd B " + la));
            var fa = la;
            var Ma = 1.75 * a.A.A;
            K(yb, su(a, 27, c, null, null));
            Rd(yb, Ma, 4);
            Yd(yb, fa, Qc, ba);
            qu(a, 27, c, null, Qc, ba - Ma, Qc + Xd(yb, fa), ba);
            X -= 1.75 * p
        }
        if (!u.F && yk(k)) {
            var Na = a.A.A;
            Nu(a, d + Na / 4, X - 3.5 * p, 2.5 * Na, 1 === zk(c.K))
        }
        G -= vq(c, 8, 9);
        k.Y && Ou(a, c, 8, k.Y, da, G - p, Cq(c, !0));
        G -= vq(c, 10, 10);
        if (g.P) {
            G -= vq(c, 11, 11);
            if (X = vq(c, 12, 12)) {
                var nb = d
                    , ye = G
                    , Bb = a.C
                    , Gd = 1.75 * a.A.A
                    , xa = Fq(To(c), c.K.J.track, !0)
                    , Cb = ye
                    , jb = xa.length
                    , Rc = 0;
                K(Bb, su(a, 29, c, null, null));
                Rd(Bb, Gd, 2);
                for (xa.sort(Lh); jb--;) {
                    var ob = Zf(xa[jb].H.A);
                    Yd(Bb, ob, nb, Cb);
                    Rc = Math.max(Rc, Xd(Bb, ob));
                    Cb -= Gd
                }
                qu(a, 29, c, null, nb, Cb, nb + Rc, ye)
            }
            G -= X
        }
    }
    G -= vq(c, 13, 13);
    X = vq(c, 14, 14);
    if (k.J.track.ba && k.N) {
        var ab = d
            , Xb = G - X
            , kc = G
            , oa = a.C
            , bb = a.A
            , Fc = bb.I
            , ub = bb.A
            , Rb = bk(k)
            , za = Rb.H
            , Oa = "";
        if (za.D)
            Oa = za.D;
        else if (za.A) {
            var vb = za.F;
            vb && /^(?:m7|min7|-7|5|7|13)?(?:\(?[b#](?:3|5|6|7|9|11|13)\)?)+$/.test(vb) && (vb = vb.replace(/b/g, "\u266d").replace(/#/g, "\u266f"));
            Oa = Zf(za.A) + vb + (za.C ? "/" + Zf(za.C) : "")
        }
        za.G && (Oa = `(${Oa})`);
        var zb = Oa;
        var Ib = 0
            , Sb = 0
            , Pa = 0
            , qd = su(a, 11, c, null, null)
            , Hd = u.ia && Rb.Sa
            , fe = bb.W && !Hd
            , Qf = ub * (fe ? 3 : Hd ? 1.5 : 1.8)
            , xf = Math.ceil(ub / 2)
            , kb = kc;
        Hd && bb.W && k.F === lf && (ab += ub);
        ab |= 0;
        if (Hd) {
            var ge = Rb.Sa.length, rd = Rb.G, Ze = Rb.F, tc = 1.1 * ub, lg = 0 === rd ? 1 : rd, Sc = Rb.D, Id = 6 * ub,
                yf = Math.ceil(.3 * ub), Jb = Math.round(36 * ub) / 100, ca = Math.ceil(.1 * ub),
                sd = Math.ceil(.25 * ub), Rf = ((Id - sd) / Sc | 0) - ca, Pg = Math.ceil(1.5 * ub),
                sh = Math.ceil(.7 * ub), Tc = Math.ceil(.1 * ub), $e = Math.ceil(.3 * ub), he = Math.ceil(1.1 * ub),
                Gc = 0 < rd ? $e : 0, Uc = Xb + Qf + xf + Pg + $e | 0, Yb;
            Ib = (ge - 1) * (he + Tc) + Tc;
            Pa = ab + Ib;
            K(oa, sf(bb.C));
            M(oa, ab, Uc - Gc, Ib, Id + Gc);
            K(oa, qd);
            for (Yb = 1; Yb < ge - 1; Yb++)
                M(oa, ab + Yb * (he + Tc), Uc - Gc, Tc, Id + Gc);
            for (Yb = 0; Yb < Sc; Yb++)
                M(oa, ab, Uc + sd - ca + Yb * (ca + Rf), Ib, ca);
            Wd(oa, qd);
            M(oa, ab, Uc - Gc, Tc, Id + Gc);
            M(oa, ab + Ib - Tc, Uc - Gc, Tc, Id + Gc);
            0 === rd ? M(oa, ab - yf, Uc, Ib + 2 * yf, sd) : (Rd(oa, tc, 2, !0),
                Yd(oa, String(Ze), ab - Fc.width(tc, 2, String(Ze), !0) - .4 * ub - (Rb.Sa[0] === Ze ? Jb : 0), Uc + sd + tc + (ca + Rf) * (Ze - rd)));
            K(oa, qd);
            Rd(oa, tc, 2);
            for (Yb = 0; Yb < ge; Yb++) {
                var wb = Rb.Sa[Yb];
                if (null === wb || 0 === wb) {
                    var Hc = null === wb ? "X" : "O";
                    Yd(oa, Hc, ab + Yb * (he + Tc) - Fc.width(tc, 2, Hc) / 2 + 1, Uc - $e - Pg / 2 + tc / 2 - 1)
                }
            }
            for (Yb = 0; Yb < ge; Yb++)
                (wb = Rb.Sa[Yb]) && te(oa, ab + 1 + Yb * (Tc + he), Uc + sd + (Rf / 2 | 0) + (wb - lg) * (ca + Rf), Jb, !1);
            kb = Xb + Qf
        } else
            kb -= ub;
        K(oa, qd);
        Rd(oa, Qf, 2);
        fe && (zb += " ");
        Sb = Fc.width(Qf, 2, zb);
        if (fe) {
            var zf = To(c).F;
            Sb > zf ? (Zd(oa, zb, ab, kb, zf),
                Pa = ab + zf) : Yd(oa, zb, ab, kb)
        } else if (Ib) {
            var lc = Ib + 2 * sh;
            Zd(oa, zb, ab + (lc > Sb ? (Ib - Sb) / 2 : -sh), kb, lc)
        } else
            Yd(oa, zb, ab, kb),
                Pa = ab + Sb;
        qu(a, 11, c, null, ab, Xb, Pa, Ib ? kc : kb)
    }
    G -= X;
    G -= vq(c, 15, 17);
    if (!k.fa && !k.ea && Gq(b, r)) {
        var cb = d
            , Kb = G
            , je = a.C
            , Af = a.A
            , Lb = Af.A
            , db = .16 * Lb
            , Wa = Qp(n)
            , bc = n.O
            , dd = bc.D
            , Jd = hl(bc)
            , ze = fl(bc)
            , Kd = !ze || null === ze.D || !Zb(ze.D, dd);
        if (Kd)
            a: {
                var Vc = bc.D, Ab = Vc.length, rb;
                if (4 > Ab)
                    var Wc = !1;
                else {
                    for (rb = Vc[--Ab]; Ab--;) {
                        if (rb !== Vc[Ab] + 1) {
                            Wc = !1;
                            break a
                        }
                        rb = Vc[Ab]
                    }
                    Wc = !0
                }
            }
        else
            Wc = !1;
        var ed = Wc
            , mc = Jd && null !== Jd.D && Zb(Jd.D, dd)
            , Ld = Pp(n) || mc
            , Ae = null === Jd || null !== Jd.D && !mc
            , td = [];
        cb = a.A.W ? Wa - (n.I ? 0 : .16 * Lb) : n.I ? cb : Wa - .16 * Lb;
        var Md = Wa + n.width - cb - (Ld ? 0 : .5 * Lb);
        K(je, a.D);
        M(je, cb, Kb, Md, db);
        Ae && M(je, cb + Md - .16 * Lb, Kb, db, 2 * Lb);
        if (Kd) {
            M(je, cb, Kb, db, 2 * Lb);
            var fd = 0
                , Nd = dd.length
                , le = cb + .7 * Lb
                , ud = Kb + 1.3 * Lb
                , Qg = le
                , Bf = bc.A[0];
            for (K(je, su(a, 33, null, null, Bf)); fd < Nd;)
                ym(dd[fd], td),
                    nu(a, td, le, ud, .6),
                    le += .6 * Xn(Af, td) + .1 * Lb,
                    td.length = 0,
                    fd !== Nd - 1 ? (ou(a, ed ? 45 : 57494, le, ud + .6 * Lb, .6),
                        le += Lb) : (ou(a, 57412, le, ud + .9 * Lb, .85),
                        le += Lb / 2),
                    ed && 0 === fd ? fd = Nd - 1 : fd++;
            qu(a, 33, null, Bf, Qg, ud - Lb, le, ud + Lb)
        }
    }
    Hq(b, r) && (G -= vq(c, 18, 18),
    Iq(c, !0) && Pu(a, n, c, d, G - p, !0),
    Iq(c, !1) && Pu(a, n, c, d, G - p, !1));
    G -= vq(c, 19, 20);
    if (!k.ea) {
        var mg;
        if (mg = !k.fa) {
            var Od = k.J;
            mg = !!Vl(Od.O) && b.C.da && Jq(b) === Od.track
        }
        var af = mg
            , Xc = Zq(c)
            , og = !1;
        ua = Xc.length;
        if (af || ua) {
            for (; ua--;) {
                var Yc = Xc[ua];
                !Yc.C && af && (og = !0);
                Qu(a, c, Yc, Wp(n, Yc) + nn(f), G - 1.7 * p, !Yc.C && af ? Vl(l) : null)
            }
            af && !og && Qu(a, c, null, T, G - 1.7 * p, Vl(l))
        }
    }
    G -= vq(c, 21, 22);
    k.T && Ou(a, c, 6, k.T, d, G - .8 * p, Kq(c, !0));
    G -= vq(c, 23, 24);
    if (!k.fa && !k.ea && Mq(b, r)) {
        var vd = d
            , gd = G
            , Be = Eo(n)
            , Zc = a.C
            , Cf = a.A
            , Pd = Cf.A
            , hd = .5 * Pd
            , pg = gd - Pd;
        l.S && (K(Zc, su(a, 13, c, null, null)),
            gd = uu(a, 1.6 * Pd, 2, l.S, !0, !1, Be, vd, pg),
            qu(a, 13, c, null, vd, gd, vd + Math.min(Be, Cf.I.width(1.6 * Pd, 2, l.S, !0, !1)), pg));
        if (l.T) {
            var wd = su(a, 14, c, null, null);
            var xd = 2.2 * Pd;
            gd -= xd + hd + Pd;
            Rd(Zc, xd, 2, !0);
            K(Zc, wd);
            Wd(Zc, wd);
            $d(Zc, .1 * Pd);
            var qg = Cf.I.width(xd, 2, l.T, !0);
            ue(Zc, vd, gd, vd + qg + hd + hd, gd, vd + qg + hd + hd, gd + xd + hd, vd, gd + xd + hd, !1);
            Yd(Zc, l.T, vd + hd, gd + xd);
            qu(a, 14, c, null, vd, gd, vd + qg + hd + hd, gd + xd + hd)
        }
    }
    if (w && m) {
        L = S;
        Xh(k) && 1 === u.A ? (L = uo(b, Ej(r).track) + Mn(f),
            G = L + 4.13 * p) : G = S += 4.13 * p;
        X = G += Oq(c, 0, 0);
        y && !eb && (tk(k) && (Sk(k, W, !0) ? (X += .3 * p,
            mu(a, 58531, V + (x - Vn(f, 58531)) / 2, X),
            X += .5 * p) : mu(a, 58531, V + (x - Vn(f, 58531)) / 2, L + q + fq(c, W, !1) + Tk(k, W, !0, p))),
        uk(k) && (X += .3 * p,
            mu(a, 58535, V + (x - Vn(f, 58535)) / 2, X),
            X += p),
        vk(k) && (Sk(k, W, !1) ? (X += .3 * p,
            mu(a, 58533, V + (x - Vn(f, 58533)) / 2, X)) : mu(a, 58533, V + (x - Vn(f, 58533)) / 2, L + q + fq(c, W, !1) + Tk(k, W, !1, p))));
        G += Oq(c, 1, 2);
        mq(c) && (ac = kq(c),
        xq(ac) !== c || ac.C || Iu(a, ac, oq(ac.A[0]), G + .5 * p, !1, !1));
        G += Oq(c, 3, 4);
        y && !eb && (qk(k) || rk(k)) && (qb = qk(k) ? 58529 : 58541,
            mu(a, qb, V + (x - Vn(f, qb)) / 2, G + .3 * p));
        G += Oq(c, 5, 6);
        k.H && !Dk(k) && Bq(c) && Ju(a, c, k, !1, V, G + .5 * p);
        X = G += Oq(c, 7, 7);
        ua = y;
        for (var Sf = !1; ua--;)
            if (va = k.A[ua],
                fb = Jj(va, g, !1) && 2 === va.D.position,
                Ob = Kj(va) && 2 === va.G.position,
            fb || Ob)
                Sf || (Sf = !0,
                    X += .5 * p),
                    X += 1.3 * p,
                fb && Ku(a, c, va, V, X, x, va.D, !1),
                Ob && Ku(a, c, va, V + (fb ? .2 * p + Un(f, va, va.D, !1) : 0), X, x, va.G, !0);
        Lk(k) || (y && (gk(k) && (X += 1.5 * p,
            mu(a, 59384, V + (x - Vn(f, 59384)) / 2, X)),
        fk(k) && (X += 1.5 * p,
            mu(a, 59381, V + (x - Vn(f, 59384)) / 2, X))),
        k.ta && (X += 2.5 * p,
            Lu(a, c, V + x / 2, X, !0)));
        !k.$ || Jk(k) || Pq(b, k) || Mu(a, k, x, da, X + 2.5 * p);
        G += Oq(c, 8, 10);
        k.X && Ou(a, c, 9, k.X, da, G, Cq(c, !1));
        if (b.T[v]) {
            var Qd = Yq(c)
                , me = !1;
            X = G += Oq(c, 11, 11);
            if ((ua = Qd.length) && Qd[0].K.ea === k.ea)
                for (ua = 0; ua < Qd.length; ua++) {
                    me || (me = !0,
                        X += .5 * p);
                    X += 2 * p;
                    var Tb = a
                        , rg = c
                        , Tf = Qd[ua]
                        , Ce = V
                        , Rg = X
                        , Uf = x
                        , bf = Tb.C
                        , ne = Tb.A
                        , cf = Tf.K
                        , th = (cf.D ? .25 : 0) * ne.A
                        , De = 2 * ne.A * (cf.D ? .75 : 1)
                        , ug = ja[Tf.T] || ""
                        , vg = ne.I.width(De, 4, ug, !0, !1);
                    K(bf, ru(Tb, cf) ? "#aaa" : su(Tb, 31, rg, Tf, null, 0, Tb.D || ""));
                    Rd(bf, De, 4, !0, !1);
                    Uf && (Ce += (Uf - vg) / 2);
                    Yd(bf, ug, Ce, Rg - th);
                    pu(Tb, 31, rg, Tf, null, 0, Ce, Rg - De, Ce + vg, Rg)
                }
        }
        G += Oq(c, 12, 13);
        if (k.wa)
            Ru(a, oq(c), c.width / 2, G + .5 * p, c.K.wa, !0);
        else {
            var hi = k.$ && !Jk(k) && Pq(b, k);
            hi && Mu(a, k, x, V, G + 2.5 * p);
            if (!k.ea && u.P) {
                for (var jd = [], Ug = c.K.J.track.P, Sd = Ug ? Ug.length : 0; Sd--;) {
                    var zd = Ug[Sd]
                        , ii = c.A
                        , dj = c.K
                        , ji = ii.O.U;
                    (ji === zd.Pa && We(zd.ab, dj.F) && Te(dj.W, zd.ab) || ii.I && ji > zd.Pa && ji <= zd.Na && !c.K.fa) && jd.push(Ug[Sd])
                }
                if (ua = jd.length)
                    for (X = G + (hi ? p / 2 : 0) + .5 * p; ua--;) {
                        var Df = jd[ua]
                            , vh = !0;
                        if (1 === Df.A)
                            vh = Df.Pa === n.O.U;
                        else if (2 === Df.A) {
                            var Xf = ao(n).A;
                            vh = Xf[Xf.length - 1].O.U >= Df.Na
                        }
                        var Ad = a
                            , Fe = n
                            , Bd = v
                            , Vg = hi && bi(jd[ua], k, !0) ? k.$ : null
                            , xc = jd[ua]
                            , ej = X
                            , Qm = vh
                            , Wg = x
                            , yc = Ad.A
                            , df = Fe.O;
                        var Xg = Yp(Fe, xc.Pa === df.U ? Ve(xc.ab, df.za).qa : 0, !0, !1, !1);
                        var wh = Xp(Fe, xc)
                            , xh = wh.O
                            , Ge = Yp(wh, xc.Na === xh.U ? Ve(xc.cb, xh.za).qa : 1, !0, !1, !1) - Xg;
                        a: {
                            var wg = void 0
                                , yh = Bd
                                , He = Xp(Fe, xc);
                            if (He.O.U === xc.Na) {
                                b: {
                                    for (var Ie = void 0, fj = He.G, gj = He.H; gj--;)
                                        if (Ie = fj[gj],
                                        Ie.C === xc.cb) {
                                            var ki = Ie;
                                            break b
                                        }
                                    ki = null
                                }
                                if (ki)
                                    for (wg of zo(ki, yh))
                                        if (wg.K.$) {
                                            var li = wg.K.$;
                                            break a
                                        }
                            }
                            li = ""
                        }
                        if (Vg) {
                            var hj = (Vn(yc, Rt[Vg]) + Wg) / 2;
                            Xg += hj;
                            Ge -= hj
                        }
                        Ge = li ? Ge - (Vn(yc, Rt[li]) + Wg) / 2 : Ge - yc.A;
                        Ru(Ad, Xg, Ge, ej, xc.A, Qm)
                    }
            }
        }
    }
    G += Oq(c, 14, 16);
    k.S && Ou(a, c, 7, k.S, d, G, Kq(c, !1));
    S += nr(b, v);
    if (u.M && m) {
        if (k.M || f.T && (wk(k) || xk(k))) {
            var Ic = d, ef = S, Yg = a.A, Rm = Yg.C, ff = a.C, Sm = Yg.A, at = Yg.I, kl = 2 * Sm, lp = Rm.Da,
                kz = k.oa ? null : k.A[0], kG = Rm.G && kz ? n.index === a.N && dc(a.M, kz) : !1, lG = Ic, mp = Ic,
                hk = Ic, np = Yg.T && wk(k) ? xk(k) ? 2 : 1 : 0, lz = 0, mz = !!k.M, mG = mz ? k.M.length : 1, bt = "",
                Tm = "", jj;
            Rd(ff, kl, lp);
            2 === np && (lz = at.width(kl, lp, "\u21a9\ufe0e"));
            for (jj = 0; jj !== mG; jj++) {
                mz && (bt = k.M[jj],
                    Tm = um(bt));
                if (Tm || np || -1 !== fc(b.ka[k.J.track.index], jj))
                    ef += kl;
                if (Tm) {
                    var nz = at.width(kl, lp, Tm);
                    mp = lG - (nz - qq(c)) / 2;
                    K(ff, kG ? Rm.N : su(a, 15, c, null, null));
                    Yd(ff, Tm, mp, ef);
                    Ic = hk = mp + nz;
                    if (tm(bt)) {
                        var ct = at.width(kl, lp, "-");
                        a: {
                            for (var op = void 0, oz = void 0, pz = void 0, pp = void 0, nG = jj, Um = c.A, oG = c.K.J.track.index, qz = c.I + 1; Um;) {
                                pp = qz;
                                for (pz = Um.H; pp < pz; pp++) {
                                    oz = Um.G[pp];
                                    b: {
                                        var dt = void 0
                                            , et = void 0
                                            , pG = oz
                                            , qG = oG
                                            , rz = nG;
                                        for (et of zo(pG, qG))
                                            if ((dt = et.K.M) && dt.length > rz && dt[rz]) {
                                                op = et;
                                                break b
                                            }
                                        op = null
                                    }
                                    if (op) {
                                        var ll = op;
                                        break a
                                    }
                                }
                                Um = Bo(Um);
                                qz = 0
                            }
                            ll = null
                        }
                        var rG = ll ? ll.A.C === n.C ? oq(ll) + (qq(ll) - aq(ll, jj, !1, !1, Sm)) / 2 : n.F + n.width : Ic + 2 * ct;
                        hk = (Ic + rG - ct) / 2;
                        Yd(ff, "-", hk, ef);
                        hk += ct
                    } else {
                        var qp = ar(c, jj);
                        qp !== c && (hk = qp.A.C === n.C ? oq(qp) + qq(qp) : ao(n).width + Yg.ba,
                            Ic += .13 * Sm,
                            M(ff, Ic, ef, hk - Ic, .13 * Sm))
                    }
                    qu(a, 15, c, null, mp, ef - kl, hk, ef)
                }
                np && (K(ff, "#808080"),
                    Yd(ff, "\u21a9\ufe0e", Ic, ef),
                2 === np && Yd(ff, "\u21a9\ufe0e", Ic + lz, ef))
            }
        }
        S += b.G[v]
    }
    if (u.F && m) {
        var sz = rq(c);
        if (u.C || u.M)
            S += 1.2 * p;
        X = S += b.ba[v];
        if (nk(k) || ok(k)) {
            var ft;
            if (ft = nk(k)) {
                var tz = iq(c, !0);
                ft = null === tz || !nk(tz.K) || jq(c)
            }
            if (ft)
                Su(a, c, d, X, 4);
            else {
                var gt;
                if (gt = ok(k)) {
                    var vz = iq(c, !0);
                    gt = null === vz || !ok(vz.K) || jq(c)
                }
                gt && Su(a, c, d, X, 5)
            }
            X -= 2.55 * p
        }
        if (k.pa) {
            var sG = d
                , tG = X
                , ht = a.C
                , wz = a.A.A;
            Rd(ht, 1.5 * wz, 2);
            K(ht, a.D);
            Yd(ht, Vt[k.pa - 1], sG, tG - wz);
            X -= 2.5 * p
        }
        if (Nk(k, !0)) {
            var uG = d
                , vG = X
                , it = a.C
                , xz = a.A.A;
            Rd(it, 1.5 * xz, 2);
            K(it, a.D);
            Yd(it, Ut[Nk(k, !1)[0]], uG, vG - xz)
        }
        if (yk(k)) {
            var yz = a.A.A;
            Nu(a, d + yz / 4, S, 2.5 * yz, 1 === zk(c.K))
        }
        S += b.aa[v];
        S += b.ja[v];
        if (k.va) {
            var zh = d
                , rp = S
                , Td = a.C
                , Ah = a.A.A
                , jt = a.A.I
                , kt = ta * Ah
                , Vm = 1.5 * Ah
                , Je = k.va
                , sp = ip(c, !0);
            var zz = sp && sp.A.C === c.A.C && !sp.K.oa ? oq(sp) - oq(c) : c.width;
            var Zg = zh + zz
                , ml = rp - Je.A * kt
                , Az = null !== Je.C ? rp - Je.C * kt : 0
                , nl = rp - Je.end * kt
                , Bz = Ek(k);
            $d(Td, .13 * Ah);
            Rd(Td, Vm, 2);
            ae(Td);
            switch (Je.D) {
                case 9:
                    var kj = Tt[Math.abs(Je.C)];
                    Zg -= zz / 2;
                    oe(Td, zh, ml);
                    pe(Td, (zh + Zg) / 2, Az);
                    pe(Td, Zg, nl);
                    Yd(Td, kj, (zh + Zg - jt.width(Vm, 2, kj)) / 2, ml + (ml > Az ? Vm : 0));
                    break;
                case 8:
                    kj = Tt[Math.abs(Je.end)];
                    oe(Td, zh, ml);
                    pe(Td, Zg, nl);
                    Bz && (Zg = zh + c.width - Ah / 2);
                    Yd(Td, kj, Zg - jt.width(Vm, 2, kj), nl + (Je.A > Je.end ? 1.5 * (Je.A - Je.end) * Ah / -6 : 1.5 * Ah / -2));
                    break;
                case 4:
                    oe(Td, zh, ml);
                    pe(Td, Zg, nl);
                    break;
                case 10:
                case 11:
                    kj = Tt[Math.abs(Je.end)],
                        oe(Td, zh, rp),
                        pe(Td, zh + .5 * Ah, ml),
                        pe(Td, Zg, nl),
                    Bz && (Zg = zh + c.width - Ah / 2),
                        Yd(Td, kj, Zg - jt.width(Vm, 2, kj), nl + (Je.A > Je.end ? 1.5 * (Je.A - Je.end) * Ah / -6 : 1.5 * Ah / -2))
            }
            ke(Td);
            ie(Td)
        }
        S += b.ia[v] + b.Z[v] + b.I[v] + .13 * p / 2;
        var tp = d;
        Mk(k) && (tp -= 1.5 * p);
        k.ba && (tp -= 1.5 * p,
            Fu(a, c, k, tp, S, 1 === k.ba, !0));
        if (k.ma) {
            var wG = S
                , xG = 2 === k.ma
                , lt = a.A
                , Cz = 1.3 * lt.A
                , Dz = Rk(k, !0)
                , yG = (Rk(k, !1) - Dz + 1) * Cz;
            Nu(a, tp - .4 * lt.A - Vn(lt, 59462), wG + (Dz - .5) * Cz, yG, xG)
        }
        if (r.D)
            Gu(a, n, k, S + vi(u, p) / 2);
        else {
            if (y)
                for (ua = 0,
                         aa = y; ua < aa; ua++) {
                    if (va = k.A[ua],
                        Bj(va))
                        a: {
                            var ik = void 0
                                , mt = void 0
                                , Wm = void 0
                                , lj = void 0
                                , Ke = a
                                , Xm = n
                                , xg = c
                                , jk = k
                                , Ca = va
                                , mi = sz
                                , nt = d
                                , Ef = S
                                , up = Ke.A
                                , vp = up.C
                                , ot = up.I
                                , Ez = !0
                                , Ym = !1
                                , Fz = jk.J.track.La
                                , Gz = !1
                                , wp = vp.G ? Xm.index === Ke.N && dc(Ke.M, Ca) : !1;
                            if (Mi(Ca))
                                if (Fz)
                                    Gz = Ym = !0;
                                else if (0 === jk.fa) {
                                    if (!Ca.C && !Xi(Ca) && !Ca.F)
                                        break a;
                                    Ym = !0
                                } else if (Ca.C) {
                                    var Hz = Ni(Ca, up.D);
                                    Hz && Hz.C ? Ez = !1 : Ym = !0
                                } else if (Xi(Ca) || Ca.F)
                                    Ym = !0;
                                else
                                    break a;
                            var Bh = Ke.C
                                , yg = up.A
                                , Zm = Gj(Ca, Ym, Gz)
                                , ol = (jk.D ? 1.25 : 1.56) * yg
                                , zG = Ef
                                , pl = 0;
                            Ef += 1.3 * Ca.ga * yg;
                            if (Ez) {
                                Rd(Bh, ol, 2, !0);
                                K(Bh, sf(vp));
                                pl = ot.width(ol, 2, Zm, !0);
                                lj = pl / 2;
                                ik = pl + 3;
                                Wm = mi - lj - 1;
                                mt = 1 === Ca.I || 2 === Ca.I || Ca.I && jq(xg);
                                if (3 === Ca.F || 4 === Ca.F) {
                                    var xp = Xq(xg, Ca);
                                    ik = null !== xp && xp.C.A.C === Xm.C ? ik + (rq(xp.C) - ot.width(ol, 2, Gj(xp.A, !1, !1), !0) / 2 - mi) : xg.width
                                } else
                                    Ca.F && (ik += 1.5 * yg);
                                mt && (Wm -= 1.5 * yg,
                                    ik += 1.5 * yg);
                                M(Bh, Wm, Ef - 2, ik, .13 * yg + 4);
                                K(Bh, tu(Ke, Ca, Xm, !0));
                                Yd(Bh, Zm, mi - lj, Ef + 1.3 * yg / 2);
                                pu(Ke, 23, xg, Ca, null, 0, Wm, Ef, Wm + ik, Ef + .13 * yg);
                                Ca.Z && (ol = 1.25 * yg,
                                    Rd(Bh, ol, 2, !0),
                                    Zm = " " + `(${Ca.Aa + Ca.Z})` + " ",
                                    K(Bh, sf(vp)),
                                    M(Bh, mi + lj, Ef - 2, ot.width(ol, 2, Zm, !0), .13 * yg + 4),
                                    K(Bh, wp ? vp.N : Ke.D),
                                    Yd(Bh, Zm, mi + lj, Ef + 1.3 * yg / 2));
                                mt && Tu(Ke, Xm, xg, !0, jk, Ca, Ca.I, lj, mi, Ef, wp);
                                Ca.F && Tu(Ke, Xm, xg, !1, jk, Ca, Ca.F, lj, mi, Ef, wp);
                                if ((Xi(Ca) || 4 === Ca.F) && (!Yi(Ca) && 4 !== Ca.I || jq(xg)) || Fz && Ki(Ca))
                                    b: {
                                        var pt = void 0
                                            , qt = void 0
                                            , rt = void 0
                                            , st = void 0
                                            , tt = void 0
                                            , ql = void 0
                                            , yp = mi + lj
                                            , ut = Ef
                                            , Jz = Ke.C
                                            , mj = Ke.A.A
                                            , zp = tq(xg, Ca, 6, !0, !0, !1, !1)
                                            , kk = 2
                                            , vt = 1;
                                        if (null !== zp) {
                                            ql = oq(zp.C) - yp;
                                            var Kz = zp.A;
                                            0 === Ca.ga ? kk = 2 : (qt = Math.min(Nj(Ca, !0), Nj(Kz, !0)),
                                                3 <= qt ? kk = 2 : (pt = Math.min(Nj(Ca, !1), Nj(Kz, !1)),
                                                    kk = 3 <= pt ? 3 : qt >= pt ? 0 : 1));
                                            Xi(zp.A) && (ql *= 1.5)
                                        } else
                                            ql = xg.width - pl;
                                        if (1 === kk || 3 === kk)
                                            vt = -1;
                                        if (2 === kk || 3 === kk)
                                            yp -= .45 * mj,
                                                ql += .9 * mj,
                                                ut -= .85 * mj * vt,
                                                tt = 1,
                                                st = 1.4,
                                                rt = 1.2;
                                        else {
                                            if (4 === Ca.F)
                                                break b;
                                            yp += .1 * mj;
                                            ql -= .2 * mj;
                                            tt = .8;
                                            st = 1.05;
                                            rt = 1
                                        }
                                        K(Jz, ru(Ke, xg.K) ? "#aaa" : Ke.D);
                                        ve(Jz, yp, ut, ut, .15, ql, 1 === vt, tt * mj, rt * mj, st * mj)
                                    }
                                (0 !== (Ca.A & 16) || (Yi(Ca) || 4 === Ca.I) && jq(xg)) && Uu(Ke, jk, nt - 2 * yg, Ef);
                                0 !== (Ca.A & 32) && Uu(Ke, jk, nt + pl, Ef)
                            }
                            var wt;
                            if (wt = Ca.C) {
                                var xt = Ca.C;
                                wt = !(0 === xt.A && null === xt.C && 0 === xt.end)
                            }
                            if (wt) {
                                var Ap = void 0
                                    , pc = void 0
                                    , Le = void 0
                                    , Cd = void 0
                                    , Ud = void 0
                                    , nj = void 0
                                    , $g = void 0
                                    , Dd = void 0
                                    , Yf = Ke
                                    , yt = xg
                                    , Ch = Ca
                                    , gf = nt
                                    , lk = Ef
                                    , Mz = mi
                                    , ah = zG
                                    , rl = pl;
                                rl += 2;
                                var Bp = Yf.A
                                    , zg = Bp.D
                                    , oj = Yf.C
                                    , Vd = Bp.A
                                    , $m = Bp.I
                                    , sl = 1.5 * Vd
                                    , AG = Ch.K
                                    , Jc = Ch.C
                                    , pj = yt.width
                                    , an = .3 * Vd
                                    , bn = .5 * Vd
                                    , Nz = wp ? Bp.C.N : ru(Yf, AG) ? "#aaa" : Yf.D;
                                Rd(oj, sl, 2);
                                Ki(Ch) && (Ap = tq(yt, Ch, 1, !0, !1, !0, !1)) && (pj = oq(Ap.C) - oq(yt),
                                Ap.A.C || (pj += Ap.C.width));
                                K(oj, Nz);
                                Wd(oj, Nz);
                                switch (Jc.F) {
                                    case 1:
                                        $g = (Dd = St[Jc.end]) ? $m.width(sl, 2, Dd) : 0;
                                        nj = pj - Math.max(an, Math.ceil($g / 2));
                                        Ud = gf;
                                        0 === Jc.A ? (nj -= rl,
                                            Ud += rl,
                                            Cd = lk - 1.3 * Vd / 4) : Cd = ah - Pi(Jc, zg, 1, Vd);
                                        Le = Ud + nj - 1;
                                        pc = ah - Pi(Jc, zg, 3, Vd);
                                        Vu(Yf, Ud, Cd, Le, pc);
                                        Dd && Yd(oj, Dd, Le - Math.round($g / 2), pc - bn);
                                        break;
                                    case 2:
                                        Ud = gf;
                                        Le = Ud + (pj - an) - 1;
                                        Cd = ah - Pi(Jc, zg, 1, Vd);
                                        pc = 0 === Jc.end ? lk : ah - Pi(Jc, zg, 3, Vd);
                                        Vu(Yf, Ud, Cd, Le, pc);
                                        break;
                                    case 3:
                                        $g = (Dd = St[Jc.C]) ? $m.width(sl, 2, Dd) : 0;
                                        nj = pj - an - 5;
                                        Ud = gf;
                                        Mi(Ch) || (nj -= rl,
                                            Ud += rl);
                                        Le = Ud + (nj >> 1);
                                        Cd = 0 === Jc.A ? lk - 1.3 * Vd / 4 : ah - Pi(Jc, zg, 1, Vd);
                                        pc = ah - Pi(Jc, zg, 2, Vd);
                                        Vu(Yf, Ud, Cd, Le, pc);
                                        Dd && Yd(oj, Dd, Le - Math.round($g / 2), pc - bn);
                                        Le = Ud + (nj >> 1);
                                        Cd = pc;
                                        pc = 0 === Jc.end ? lk : ah - Pi(Jc, zg, 3, Vd);
                                        Vu(Yf, Le + 5, Cd, Le + (nj >> 1), pc);
                                        break;
                                    case 4:
                                        Ud = gf;
                                        Le = Ud + pj - 1;
                                        (Ch = Tj(Ch, zg)) && Ch.C && (Cd = ah - Pi(Ch.C, zg, 3, Vd),
                                            Vu(Yf, Ud, Cd, Le, Cd));
                                        break;
                                    case 5:
                                        $g = (Dd = St[Jc.A]) ? $m.width(sl, 2, Dd) : 0;
                                        gf = Mz;
                                        Cd = lk - 1.3 * Vd * 3 / 4;
                                        pc = ah - Pi(Jc, zg, 3, Vd);
                                        Vu(Yf, gf, Cd, gf, pc);
                                        Dd && Yd(oj, Dd, gf - Math.round($g / 2), pc - bn);
                                        Ki(Ch) && Vu(Yf, gf, pc, gf + (pj - an - 5), pc);
                                        break;
                                    case 6:
                                    case 7:
                                        if ($g = (Dd = St[Jc.A]) ? $m.width(sl, 2, Dd) : 0,
                                            gf = Mz,
                                            Cd = lk - 1.3 * Vd * 3 / 4,
                                            pc = ah - Pi(Jc, zg, 1, Vd),
                                            Vu(Yf, gf, Cd, gf, pc),
                                        Dd && Yd(oj, Dd, gf - Math.round($g / 2), pc - bn),
                                            Ud = gf + 5,
                                            Le = Ud + (pj - rl - an) - 1,
                                            Cd = pc,
                                            pc = 0 === Jc.end ? lk : ah - Pi(Jc, zg, 3, Vd),
                                            Vu(Yf, Ud, Cd, Le, pc),
                                        0 !== Jc.end && (Dd = St[Jc.end]))
                                            $g = $m.width(sl, 2, Dd),
                                                Yd(oj, Dd, Le - Math.round($g / 2), pc - bn - (pc > Cd ? 10 : 0))
                                }
                            }
                        }
                }
            else if (!H && C || H && 0 < z || H && 0 > z && n.I) {
                Hu(a, H, n, c, r, d, S + vi(u, p) / 2, S - 1.5 * p, !1);
                return
            }
            S += -.13 * p / 2;
            if (u.La && !k.D && !r.D) {
                var hf = Zh(k.J) && 0 === k.V;
                if (hf) {
                    var Oz = S - b.I[v];
                    var Pz = S
                } else
                    Oz = S += vi(u, p),
                        Pz = S + b.W[v];
                var mk = sz, Cp = Oz, zt = Pz, At = a.C, Qz = a.A, jf = Qz.A, tl = 1.3 * jf, oi = c.K, BG = oi.A,
                    Dp = vi(oi.J.track, jf), Bt = 3.9 * jf, qj = hf ? Dp : 0, cn = null, rj = hf ? zt - Bt : Cp + Bt,
                    CG = Zh(oi.J), Ct;
                K(At, ru(a, oi) ? "#aaa" : a.D);
                if (y) {
                    if (Pj(oi)) {
                        for (Ct = y; Ct--;) {
                            var Dh = BG[Ct].ga * tl;
                            if (hf && Dh < qj || !hf && Dh > qj)
                                qj = Dh
                        }
                        qj = 2 === oi.ha.C ? 2.2 * -jf : hf ? qj - tl / 2 : Dp - qj - 3 * tl / 4;
                        M(At, mk - .16 * jf / 2, hf ? rj : Cp - qj, .16 * jf, Bt + qj)
                    }
                    if (-1 === c.C)
                        (cn = Vk(oi, hf)) && mu(a, cn, mk, rj);
                    else {
                        var Ep = Uo(c)
                            , DG = rq(jr(Ep))
                            , Rz = Ep.A[fc(Ep.A, c) + 1]
                            , EG = Rz ? rq(Rz) : 0;
                        Xt(At, mk, rj, hf, c, Ep, EG, DG, .5 * jf, jf)
                    }
                } else
                    lq(c, a.A) && (cn = Vo(c, Qz.D).I,
                        CG && 2 !== c.D ? Dh = hf ? zt - tl : Cp + tl : (Dh = hf ? zt + Dp / 2 : Cp - Dp / 2,
                        1 === (oi.J.track.I & 1) || (Dh -= tl / 2)),
                        mu(a, cn, mk, Dh));
                oi.ha.N && (cn && (mk += jf),
                y && (Dh = rj),
                -1 !== c.C && (Dh += .75 * Uk(c.K) * jf * (hf ? 1 : -1)),
                    mu(a, 57831, mk + .45 * jf, Dh + jf / 2 * (hf ? 1 : -1)));
                if (mq(c)) {
                    var Fp = kq(c);
                    Fp.A[0] === c && (hf ? rj -= (wq(Fp) ? 1.5 : .5) * jf : (rj += .5 * jf,
                    wq(Fp) || (rj += 1.5 * jf)),
                        Iu(a, Fp, mk, rj, hf, !0))
                }
            }
        }
    }
}

function Bu(a, b, c, d, e, f, g) {
    var h = a.A
        , k = h.A;
    e = "T" === b.code ? 1 / 1.3 * (c.I - 1) / 4 : e ? .66 : 1;
    var l = c.N;
    c = g + k * (("T" === b.code ? 1.3 * (c.I - 1) / 2 : 1 === l ? Ba[1] : l - b.D) + .065);
    g = !!d && Lg(b);
    K(a.C, g ? su(a, 5, d, null, null) : a.D);
    ou(a, b.A, f, c, e);
    g && qu(a, 5, d, null, f, c - b.F * k * e, f + Vn(h, b.A) * e, c + b.H * k * e)
}

function Cu(a, b, c, d) {
    var e = a.C
        , f = a.A.A;
    b += "x";
    Rd(e, 1.5 * f, 2, !0);
    Yd(e, b, c - a.A.I.width(1.5 * f, 2, b, !0), d - f)
}

function Du(a, b, c, d, e, f, g, h) {
    var k = a.C
        , l = a.A
        , m = l.A
        , n = .3 * m
        , p = .5 * m
        , q = .16 * m;
    if (8 === h)
        M(k, e - q, f, q, g);
    else if (9 === h)
        M(k, e - p, f, p, g),
            M(k, e - p - n - q, f, q, g);
    else if (11 === h)
        M(k, e - q, f, q, g),
            M(k, e - Math.ceil(q + n) - q, f, q, g);
    else if (18 === h)
        Wu(a, f, f + g, d, !1, .6, .16);
    else {
        l = Vn(l, 57412);
        if (2 === b) {
            b = 1.3 * m * (Math.ceil(c.track.I / 2) - 1);
            var r = 1.3 * m * (c.track.I + 2 >> 1)
        } else
            1 === b ? (b = 2 * m,
                r = 3 * m) : (b = g / 3 + m / 2,
                r = 2 * g / 3 + m / 2);
        6 === h ? (M(k, d, f, p, g),
            d += p + n,
            M(k, d, f, q, g),
            d += .3 * m + 1,
            mu(a, 57412, d, f + b),
            mu(a, 57412, d, f + r)) : (K(k, su(a, 22, null, null, c)),
            d = e,
        10 === h && (d -= p,
            M(k, d, f, p, g)),
            d -= n + q,
            M(k, d, f, q, g),
            d -= .3 * m + l,
            mu(a, 57412, d, f + b),
            mu(a, 57412, d, f + r),
            qu(a, 22, null, c, d, f, e, f + g))
    }
}

function Eu(a, b, c, d, e, f, g, h) {
    var k = a.C, l = a.A, m = l.A, n;
    if (n = g) {
        a: {
            n = l.D;
            for (var p = n.C.length, q; p--;)
                if (q = n.C[p],
                    q.C) {
                    n = !0;
                    break a
                }
            n = !1
        }
        n = !n
    }
    h = No(b, n, h);
    n = 0 !== (c.C & 32) ? 57482 : 0 !== (c.C & 64) ? 57483 : null;
    p = [];
    q = [];
    var r = Mo(b);
    b = g ? 1.3 * (d.I - 1) * m / 2 : (Ba[d.N] + (d.N - 1) / 2) * m;
    var u, v;
    e += h;
    if (n)
        var w = v = u = Vn(l, n);
    else
        ym(c.M, p),
            ym(c.I, q),
            u = Xn(l, p),
            v = Xn(l, q),
            w = u > v ? u : v;
    if (r && !g)
        for (g = f + Ba[d.N] * m,
                 K(k, sf(l.C)),
                 M(k, e - h / 2, f, w + h, 4.13 * m),
                 K(k, a.P),
                 l = 0; l !== d.N; l++)
            M(k, e - h / 2, g - (.065 - l) * m, w + h, .13 * m);
    K(k, su(a, 3, null, null, c.A[d.index]));
    n ? mu(a, n, e, f + b) : (nu(a, p, e + (u < w ? (w - u) / 2 : 0), f + b - m, 1),
        nu(a, q, e + (v < w ? (w - v) / 2 : 0), f + b + m, 1));
    qu(a, 3, null, c.A[d.index], e, f, e + w, f + 2 * b)
}

function Xu(a, b, c, d, e, f, g, h, k, l, m) {
    d *= .55;
    e *= .55;
    var n = a.C
        , p = a.A
        , q = p.A
        , r = .55 * Vn(p, 57508)
        , u = f <= g ? f : g
        , v = c - d
        , w = .275 * q
        , y = .16 * q * .55;
    if (h || m)
        e += .55 * q;
    if (m) {
        var x = .55 * q;
        m = .75 * q * .55;
        var z = .16 * q * .55;
        p = .55 * Vn(p, 59523);
        ou(a, 59523, b + (r + e - p) / 2, v - x, .55);
        p = v - x - m;
        M(n, b, p, z, m);
        M(n, b, p, r, z);
        M(n, b + e, p, r, z);
        M(n, b + r + e, p, z, m)
    }
    ou(a, 57508, b, c, .55);
    b += r - y;
    M(n, b, v, y, d);
    h && ou(a, 57831, b + .45 * q * .55, c, .55);
    for (h = u; h--;)
        M(n, b, v + h * w * 1.5, e, w);
    if (f > g)
        for (h = f; h-- > g;)
            M(n, b, v + h * w * 1.5, r, w);
    else if (f < g)
        for (h = g; h-- > f;)
            M(n, b + e - r, v + h * w * 1.5, r, w);
    b += e;
    M(n, b, v, y, d);
    ou(a, 57508, b - r + y, c, .55);
    k && ou(a, 57831, b + .45 * q * .55, c, .55);
    l && ou(a, 57920, b, c - d, .55);
    return b + .16 * q * .55
}

function Qu(a, b, c, d, e, f) {
    var g = a.C
        , h = a.A
        , k = h.A
        , l = 2 * k
        , m = 1.56 * k
        , n = d;
    if (c) {
        K(g, su(a, 10, b, null, null));
        var p = c.text;
        p && (Rd(g, l, 4, !0),
            Yd(g, p, d, e),
            d += h.I.width(l, 4, p + "   ", !0));
        c.G && (p = sa[c.D][0],
            ou(a, p, d, e - (480 === c.D ? k / 2 : 0), .55),
            d += .55 * Vn(h, p),
        sa[c.D][1] && (d += .45 * k * .55,
            ou(a, 57852, d, e, .55),
            d += .55 * Vn(h, 57852)),
            p = " = " + c.F,
            Rd(g, m, 2),
            Yd(g, p, d, e),
            d += h.I.width(m, 2, p));
        qu(a, 10, b, null, n, e - l, d, e);
        c.G && (d += 2.5 * k)
    }
    if (f) {
        K(g, su(a, 12, b, null, null));
        n = d;
        c = .55 * k;
        g = 2.975 * k;
        m = 2.5 * k;
        if ("t8" === f || "d8" === f || "s8" === f || "n" === f)
            d = Xu(a, d, e, g, m, 1, 1, !1, !1, !1, !1);
        else {
            if ("d16" === f || "s16" === f)
                g = 3.5 * k * 1.1;
            d = Xu(a, d, e, g, m, 2, 2, !1, !1, !1, !1)
        }
        d += c;
        ou(a, 61, d, e, .55);
        d += .55 * Vn(h, 61) + c;
        switch (f) {
            case "n":
                d = Xu(a, d, e, g, m, 1, 1, !1, !1, !1, !1);
                break;
            case "t8":
                d = Xu(a, d, e, g, m, 0, 0, !1, !1, !0, !0);
                break;
            case "t16":
                d = Xu(a, d, e, g, m, 1, 2, !1, !1, !1, !0);
                break;
            case "d8":
                d = Xu(a, d, e, g, m, 1, 2, !0, !1, !1, !1);
                break;
            case "d16":
                d = Xu(a, d, e, g, m, 2, 3, !0, !1, !1, !1);
                break;
            case "s8":
                d = Xu(a, d, e, g, m, 2, 1, !1, !0, !1, !1);
                break;
            case "s16":
                d = Xu(a, d, e, g, m, 3, 2, !1, !0, !1, !1)
        }
        qu(a, 12, b, null, n, e - l, d, e)
    }
}

function Pu(a, b, c, d, e, f) {
    for (var g = a.C, h = a.A, k = h.A, l = 1.8 * k, m = b.O.F, n = m.length, p = 0, q, r, u; n--;)
        if (q = m[n],
            r = q.code,
            r = ei(q) || 13 === r || 14 === r || 19 === r ? 21 : 30,
            K(g, su(a, r, c, null, null)),
            ei(q)) {
            if (f) {
                switch (q.code) {
                    case 15:
                        mu(a, 57416, d, e);
                        p = d + Vn(h, 57416);
                        break;
                    case 17:
                        mu(a, 57415, d, e);
                        p = d + Vn(h, 57415);
                        break;
                    case 16:
                        p = [57416, 57416];
                        nu(a, p, d, e, 1);
                        p = d + Xn(h, p);
                        break;
                    case 18:
                        p = [57415, 57415],
                            nu(a, p, d, e, 1),
                            p = d + Xn(h, p)
                }
                e -= 4 * k;
                qu(a, r, c, null, d, e, p, e + 4 * k)
            }
        } else
            f || (Rd(g, l, 4),
                q = fh[q.code],
                p = Qp(b) + b.width,
                u = p - h.I.width(l, 4, q),
                Yd(g, q, u, e),
                e -= l,
                pu(a, r, c, null, null, n, u, e, p, e + l))
}

function Wu(a, b, c, d, e, f, g) {
    var h = a.C;
    a = a.A.A;
    var k = 1E4;
    if (c - b >= a)
        for (; k--;) {
            var l = Math.min(f * a, c - b);
            if (l < .2 * a)
                break;
            e ? M(h, c - l, d, l, g * a) : M(h, d, c - l, g * a, l);
            c -= l + .3 * a;
            if (c <= b)
                break
        }
}

function Hu(a, b, c, d, e, f, g, h, k) {
    var l = a.A
        , m = a.C
        , n = l.A
        , p = e.C
        , q = n * (k ? 1 : 1.3)
        , r = 0 > p
        , u = .16 * n
        , v = []
        , w = !0;
    K(m, su(a, 25, null, null, e));
    if (b)
        if (b = a.A.G[0 < p ? c.index + p - 1 : c.index + p + Bl(e) - 1],
        b.C !== c.C)
            w = !1,
                b = mr(ao(c)),
                d = Qp(b) + b.width - oq(d);
        else {
            b.H || (b = c);
            c = Ao(b);
            var y = b.G;
            d = Qp(b) + (null === c ? 0 : y[c].A + y[c].width) - oq(d) - n
        }
    else
        d = d.width - n;
    r || M(m, f, g - q, u, 2 * q);
    w && M(m, f + d - u, g - q, u, 2 * q);
    M(m, f, g - .5 * n / 2, d, .5 * n);
    qu(a, 25, null, e, f, g - q, f + d, g + 2 * q);
    r || !k && e.track.C || (ym(p, v),
        f += (d - Xn(l, v)) / 2,
        nu(a, v, f, h, 1),
        qu(a, 25, null, e, f, h - 2 * n / 2, f + Xn(l, v), h + 2 * n / 2))
}

function Yu(a, b, c, d) {
    var e = a.A;
    b = b.text();
    var f;
    var g = 0;
    for (f = b.length; g !== f; g++) {
        var h = ":" === b[g] ? 59530 : qm[parseInt(b[g], 10)];
        mu(a, h, c, d);
        c += Vn(e, h)
    }
}

function Iu(a, b, c, d, e, f) {
    for (var g = a.C, h = a.A, k = h.A, l = b.A[0].K, m = 0, n = b.text(), p = n.length, q; p--;)
        q = ":" === n[p] ? 59530 : qm[parseInt(p, 10)],
            m += Vn(h, q);
    h = m;
    K(g, ru(a, l) ? "#aaa" : a.D);
    wq(b) ? (l = .75 * k,
        m = .16 * k,
        n = .5 * k,
        p = c,
        q = b.A[b.A.length - 1],
        q = q.H + hq(q) - 1 - b.A[0].H,
        p += q,
        q = (p - c - h - n - n) / 2,
        e ? (f || (d -= l),
            M(g, c, d, m, l),
            M(g, p, d, m, l),
            M(g, c, d, q, m),
            M(g, c + q + h + n + n, d, q, m),
            Yu(a, b, c + q + n, d + 1.5 * k / 2)) : (M(g, c, d, m, l),
            M(g, p, d, m, l),
            M(g, c, d + l - 1, q, m),
            M(g, c + q + h + n + n, d + l - 1, q, m),
            Yu(a, b, c + q + n, d + l + 1.5 * k / 2))) : (g = Uo(b.A[0]),
    f || (e ? c += hq(b.A[0]) - .16 * k : d += 1.5 * k),
        Yu(a, b, c + (g.width() - h) / 2, d))
}

function ku(a, b, c, d, e, f, g, h, k) {
    var l = a.C
        , m = a.A
        , n = m.C
        , p = m.A
        , q = .065 * p
        , r = eq(c, e)
        , u = Hj(e);
    k = f + c.F + dq(c, e) + (k && d.G ? hq(c) - r : 0);
    a: {
        var v = e.sa;
        if (-3 >= v)
            v = -3 - v;
        else if (9 <= v)
            v -= 9;
        else {
            var w = 0;
            break a
        }
        w = Math.ceil((v + 1) / 2)
    }
    if (w) {
        var y = 9 <= e.sa;
        K(l, a.P);
        var x = .065 * p + (yj(e) ? uo(ao(b), Ej(d.J).track) + Mn(a.A) : g);
        y && (x += 4 * p);
        for (v = 1; v <= w; v++) {
            var z = e.V ? .18 : .4;
            M(l, k - z * p, x + ((y ? v : -v) - .085) * p, r + (z + .4) * p, .17 * p)
        }
    }
    K(l, tu(a, e, b, !1));
    ou(a, jh[Oj(e)], k, h, u);
    b = f - bp(c, e, 0, 1);
    f += $o(c, e, 0, 1);
    cj(e) && (ou(a, 57589, b, h, u),
        ou(a, 57590, f + .3 * p * u, h, u),
        f += $o(c, e, 2, 2));
    b -= bp(c, e, 2, 2);
    x = bp(c, e, 3, 3);
    e.V && (1 === wj(e) && (ou(a, 57962, b - x, h, u),
        ou(a, 57963, b - (.7 + .35) * p, h, u)),
        b -= x,
        ou(a, om[e.V], b + (1 === wj(e) ? .7 * p : 0), h, u));
    b -= bp(c, e, 4, 4);
    if (!d.D && d.ha.N) {
        x = f += $o(c, e, 3, 3);
        r = h;
        1 === (e.sa & 1) && (r += p / 2 * (Zh(d.J) && 0 < d.V && !d.G ? 1 : -1));
        if (d.ha.Ma)
            for (x += Rq(c) * p,
                     v = 0; v !== d.ha.Ma; v++)
                mu(a, 57831, x, r),
                    x += (.45 * p + Vn(m, 57831)) * u;
        f += $o(c, e, 4, 4)
    }
    pu(a, 1, c, e, null, 0, k, h - p / 2, f, h + p / 2);
    K(l, a.D);
    if (Ki(e)) {
        l = a.C;
        var C = a.A;
        m = C.A;
        u = ru(a, d) ? "#aaa" : a.D;
        z = tq(c, e, 1, !1, !1, !1, !1);
        y = null !== z ? z.A : null;
        var F = null !== z && z.C.A.C !== c.A.C
            , H = oq(c);
        w = H;
        x = (k = Rj(e, y)) ? 1 : -1;
        var N = null !== y ? y.K : null
            , Q = !1;
        r = .78 * m;
        v = 1.404 * m;
        if (1 < d.A.length || !k && !d.G || k && d.G || N && 1 < N.A.length) {
            x = h - (1 === (e.sa & 1) ? .25 : .75) * m * x;
            var L = 1 === e.Y ? 0 : dq(c, e) + ap(c);
            w += L + .25 * m;
            1 === e.Y && (w += m / 4)
        } else
            Q = !0,
                x = h - .83 * m * x,
                w += .7 * eq(c, e);
        null === y || F ? C = Ek(c.K) && Pp(c.A) || !Vj(d, C.D, !0) ? H + c.width - .2 * m : oq(ip(c, !0)) : (C = oq(z.C) + dq(z.C, y),
        2 === y.Y && (C -= m / 4),
            C = !Q || 1 < N.A.length || Zh(N.J) || !N.G && !k || d.G !== N.G ? C - .25 * m : C + .3 * eq(z.C, y));
        d = C - w;
        z = d / m;
        r = 5 >= z ? r : 12 <= z ? v : r + (v - r) * (z - 5) / 7;
        K(l, u);
        Wd(l, u);
        ve(l, w, x, x, .2, d, k, r, r, r + .28 * m)
    }
    (1 === e.I || 2 === e.I || e.I && jq(c)) && Zu(a, c, !0, e, b, g + q);
    e.F && (Zu(a, c, !1, e, f + .5 * p, g + q),
        f += $o(c, e, 5, 5));
    b -= bp(c, e, 5, 7);
    if (ij(e) || sj(e))
        ij(e) && mu(a, 58837, f + .4 * p, h + (1 === (e.sa & 1) ? -.25 : .25) * p),
        sj(e) && mu(a, 58840, f + .4 * p, h + (1 === (e.sa & 1) ? 1.75 : 1.5) * p),
            f += $o(c, e, 6, 6);
    tj(e) && mu(a, 58848, b, h + (1 === (e.sa & 1) ? -.5 : 0) * p);
    uj(e) && mu(a, 58832, b, h + (1 === (e.sa & 1) ? 1.75 : 1.5) * p);
    Jj(e, n, !1) && 4 === e.D.position && (Ku(a, c, e, f + .5 * p, g + q + Uq(c, e, e.D), 0, e.D, !1),
        f += $o(c, e, 7, 7));
    Kj(e) && 4 === e.G.position && (Ku(a, c, e, f + .5 * p, g + q + Uq(c, e, e.G), 0, e.G, !0),
        $o(c, e, 8, 8));
    Kj(e) && 3 === e.G.position && (b -= bp(c, e, 8, 8),
        Ku(a, c, e, b, g + q + Uq(c, e, e.G), 0, e.G, !0));
    Jj(e, n, !1) && 3 === e.D.position && (b -= bp(c, e, 9, 9),
        Ku(a, c, e, b, g + q + Uq(c, e, e.D), 0, e.D, !1));
    Mi(e) && jq(c) && (g = b - bp(c, e, 10, 10),
        c = b + bp(c, e, 4, 9),
        n = a.C,
        p = a.A.A,
        q = c - g,
        a = ((a = Ni(e, a.A.D)) ? Rj(a, e) : Rj(e, null)) ? 1 : -1,
        d = .28 * p * a,
        b = .78 * p,
        f = g + .2 * q,
        q = g + .8 * q,
        e = h - (1 === (e.sa & 1) ? .25 : .75) * p * a,
        ae(n),
        oe(n, g, e),
        re(n, f, e - a * b, q, e - a * b, c, e),
        re(n, q, e - (a * b + d), f, e - (a * b + d), g, e),
        n.fill(),
        ie(n))
}

function Fu(a, b, c, d, e, f, g) {
    var h = a.C
        , k = a.A
        , l = k.A
        , m = Vn(k, 60074);
    k = Vn(k, 60078);
    var n = 0;
    if (g) {
        b = 1.3 * l;
        g = Rk(c, !0);
        var p = Rk(c, !1);
        c = (p - g + 1) * b;
        e = f ? e + (-k + (p + .5) * b) : e + (k + (g - .5) * b)
    } else {
        p = c.G;
        var q = l / 2;
        g = -q + gp(b, p ? Pk(c, !p, !0, null) : Pk(c, p, !1, null), !0);
        b = q + gp(b, p ? Pk(c, p, !1, null) : Pk(c, !p, !0, null), !0);
        c = b - g;
        e = f ? e + (b - k) : e + (g + k)
    }
    K(h, a.D);
    Wd(h, a.D);
    h.A.save();
    h.A.translate((d + l * (f ? .5 : .75)) * h.C, e * h.C);
    h.A.rotate(Gr / 2 * (f ? 1 : -1));
    mu(a, 60078, 0, 0);
    c -= k;
    if (0 < c)
        for (e = Math.ceil(c / m); e--;)
            mu(a, 60074, n, 0),
                n -= m;
    h.A.restore()
}

function Gu(a, b, c, d) {
    var e = c.J.D;
    if (1 === e || 2 === e) {
        c = a.C;
        var f = a.A
            , g = f.A
            , h = Fo(b)
            , k = (e = 1 === e) ? 58624 : 58625;
        f = Vn(f, k);
        var l = nn(a.A);
        K(c, a.D);
        l = e || Pp(b) ? l + (b.F + h.A - g + Math.round((b.width - h.A + g - f) / 2)) : l + (b.F + b.width - f / 2);
        mu(a, k, l, d)
    }
}

function Ju(a, b, c, d, e, f) {
    var g = a.C
        , h = a.A
        , k = h.A
        , l = .8 * k
        , m = $q(b, 3)
        , n = ip(m, !0)
        , p = Qt[c.H];
    c = 2 * k;
    var q = e - .5 * k;
    K(g, su(a, 16, b, null, null));
    d || (f += c);
    mu(a, p, q, f);
    e = q + Vn(h, p);
    d && (f -= c);
    K(g, a.D);
    n && n.K.H === m.K.H ? h = m.A.F + m.A.width : (h = oq(m) + qq(m),
    e >= h - l && (h = e + l),
        M(g, h, f - (d ? 0 : l), .13 * k, l),
        M(g, h - l, f, l, .13 * k),
        h -= l + .3 * k);
    Wu(a, e, h, f, !0, .8, .13);
    d && (f += c);
    qu(a, 16, b, null, q, f - c, e, f)
}

function Ku(a, b, c, d, e, f, g, h) {
    var k = a.C
        , l = a.A
        , m = Tn(c, h) * l.A
        , n = l.I.width(m, 3, g.text, !0, h);
    l = su(a, h ? 18 : 17, b, c, null, 0, (l.C.H ? g.color : "") || "");
    K(k, ru(a, c.K) ? "#aaa" : l);
    Rd(k, m, 3, !0, h);
    f && (d += (f - n) / 2);
    Yd(k, g.text, d, e);
    pu(a, h ? 18 : 17, b, c, null, 0, d, e - m, d + n, e)
}

function Lu(a, b, c, d, e) {
    var f = a.C
        , g = a.A
        , h = Pt[b.K.ta - 1]
        , k = Vn(g, h);
    g = 1.5 * g.A;
    c -= k / 2;
    K(f, su(a, 20, b, null, null));
    e ? (e = a.C,
        e.A.save(),
        e.A.translate((c + k) * e.C, (d - g) * e.C),
        e.A.rotate(-Gr),
        mu(a, h, 0, 0),
        e.A.restore()) : mu(a, h, c, d);
    qu(a, 20, b, null, c, d - g, c + k, d)
}

function Mu(a, b, c, d, e) {
    b = Rt[b.$];
    K(a.C, a.D);
    mu(a, b, d + (c - Vn(a.A, b)) / 2, e)
}

function Ou(a, b, c, d, e, f, g) {
    var h = a.A;
    K(a.C, su(a, c, b, null, null, 0, (h.C.H ? d.color : "") || ""));
    h = uu(a, d.A * h.A, d.C, d.text, !1, d.D, g, e, f);
    qu(a, c, b, null, e, h, e + Math.min(g, Yn(a.A, d)), f)
}

function Su(a, b, c, d, e) {
    var f = a.C
        , g = a.A.A
        , h = 1.55 * g
        , k = $q(b, e)
        , l = ip(k, !0)
        , m = 4 === e ? "let ring" : "P.M.";
    K(f, a.D);
    Rd(f, h, 2);
    Yd(f, m, c, d - g);
    b !== k && (c += a.A.I.width(h, 2, m) + 5,
        d -= g + .8 * h / 2,
        l && (4 === e && nk(l.K) || 5 === e && ok(l.K)) ? b = k.A.F + k.A.width : (b = oq(k) + k.width - g,
        b - c >= g && M(f, b, d + -.87 * g / 2, .13 * g, g)),
        Wu(a, c, b, d, !0, .8, .13))
}

function Zu(a, b, c, d, e, f) {
    var g = a.C
        , h = a.A
        , k = h.A
        , l = 1.3 * k
        , m = .2 * k;
    if (c) {
        var n = d.I;
        if (4 === n || 3 === n) {
            m = Wq(b, d.ga, !1);
            if (null === m)
                return;
            n = m.A.H.U > d.H.U ? -1 : 1
        } else
            n = 1 === n ? 1 : -1;
        l = e + l;
        b = c = f + gp(b, d, !0)
    } else if (n = d.F,
        c = f + gp(b, d, !0),
    4 === n || 3 === n || 10 <= n) {
        m = Xq(b, d);
        if (null === m)
            return;
        n = d.H.U > m.A.H.U ? -1 : 1;
        l = b.A.C === m.C.A.C ? oq(m.C) - m.C.S - .5 * k : oq(b) + b.width;
        b = f + gp(m.C, m.A, !0)
    } else
        n = 1 === n ? 1 : -1,
            l = e + m + l,
            b = c;
    c === b ? (f = 1 === (d.sa & 1),
        c += n * k / (f ? 3 : 4),
        b -= n * k / (f ? 3 : 4)) : (c = Rn(h, c, f, b > c, !1),
        b = Rn(h, b, f, b < c, !1));
    Wd(g, ru(a, d.K) ? "#aaa" : a.D);
    $d(g, .13 * k);
    ae(g);
    oe(g, e, c);
    pe(g, l, b);
    ke(g)
}

function Ru(a, b, c, d, e, f) {
    var g = a.C
        , h = a.A.A
        , k = h / 2
        , l = f ? 0 : .25 * h;
    d += .5 * h;
    Wd(g, a.D);
    $d(g, .13 * h);
    ae(g);
    1 === e ? (oe(g, b + c, d),
        pe(g, b, d + k - l),
    f || (ke(g),
        ae(g),
        oe(g, b, d + k + l)),
        pe(g, b + c, d + h)) : 2 === e ? (oe(g, b, d),
        pe(g, b + c, d + k - l),
    f || (ke(g),
        ae(g),
        oe(g, b + c, d + k + l)),
        pe(g, b, d + h)) : 3 === e && (oe(g, b + c / 2, d),
        pe(g, b, d + k),
        pe(g, b + c / 2, d + h),
        pe(g, b + c, d + k),
        pe(g, b + c / 2, d));
    ke(g)
}

function Nu(a, b, c, d, e) {
    var f = a.C
        , g = a.A
        , h = g.A
        , k = e ? 59462 : 59463;
    g = Vn(g, k);
    var l = .2 * h
        , m = h / 2;
    K(f, a.D);
    M(f, b + (g - l) / 2, c + (e ? m : 0), l, d - m);
    mu(a, k, b, c + (e ? 2 * h : d))
}

function Tu(a, b, c, d, e, f, g, h, k, l, m) {
    var n = a.C
        , p = a.A
        , q = p.A
        , r = 1.3 * q
        , u = 1.25 * q
        , v = .2 * q;
    l -= 1.3 * q / 2;
    Wd(n, m ? p.C.N : ru(a, e) ? "#aaa" : a.D);
    $d(n, .13 * q);
    1 === g || 2 === g ? (f = 1 === g,
        ae(n),
        k = d ? k - (h + v + r) : k + (h + v),
        oe(n, k, l + (f ? u : 0)),
        pe(n, k + r, l + (f ? 0 : u))) : (d ? (k -= v + r + h,
        a = Wq(c, f.ga, !1),
        f = null === a ? !0 : a.A.H.U < f.H.U) : (k += h,
        a = Xq(c, f),
        f = null === a ? !0 : a.A.H.U > f.H.U),
        g = u,
        d ? b = r : null === a || a.C.A.C !== b.C ? b = c.width - 2 * h : (b = rq(a.C) - p.I.width((a.A.K.D ? 1.25 : 1.56) * q, 2, Gj(a.A, !1, !1), !0) / 2 - k,
        e.D && (g = .65 * u,
            l += g / 2)),
        ae(n),
        oe(n, k + v, l + (f ? g : 0)),
        pe(n, k + b - v, l + (f ? 0 : g)));
    ke(n);
    ie(n)
}

function Uu(a, b, c, d) {
    var e = a.C
        , f = a.A.A;
    K(e, ru(a, b) ? "#aaa" : a.D);
    ve(e, c, d, d, .15, 2 * f, !0, f, 1.2 * f, 1.4 * f)
}

function zu(a, b, c, d, e) {
    var f = a.C
        , g = a.A
        , h = g.A
        , k = Vn(g, 60081)
        , l = 0;
    d -= Wk(b, g.D, h) + h;
    for (K(f, a.D); l + k < e;)
        mu(a, 60081, c + l, d),
            l += k
}

function Vu(a, b, c, d, e) {
    var f = a.C;
    a = a.A.A;
    var g = .6 * a
        , h = .3 * a
        , k = e < c ? 1 : -1;
    ae(f);
    $d(f, .13 * a);
    oe(f, b, c);
    b === d ? pe(f, d, e) : qe(f, d, c, d, e);
    ke(f);
    ie(f);
    ae(f);
    c === e ? (oe(f, d - g, e + h),
        pe(f, d - g, e - h)) : (oe(f, d + h, e + g * k),
        pe(f, d - h, e + g * k));
    pe(f, d, e);
    f.fill();
    ie(f)
}

class $u {
    constructor(a, b, c, d) {
        this.G = a;
        this.A = c;
        this.P = this.D = "#000000";
        this.H = this.Ra = !1;
        this.ib = () => {
            hu(this);
            this.Ra = !1
        }
        ;
        this.I = Wt;
        this.height = this.width = 0;
        this.C = d;
        this.M = [];
        this.T = [];
        this.N = -1;
        this.V = [];
        this.F = Zt;
        this.S = null;
        this.W = -1;
        lu(this);
        gu(a, [167], () => {
                var e = c.C.I;
                this.D = e ? "#ebebeb" : "#000000";
                this.P = e ? "#bfbfbf" : "#000000";
                this.H = !0;
                hu(this)
            }
        );
        a.assign([38, 40, 203], () => {
                this.H = !0;
                this.I()
            }
            , [67], () => {
                c.S || this.I()
            }
        );
        b.assign([196, 197, 198, 201], () => {
                this.H = !0;
                lu(this);
                this.I()
            }
            , [199], e => {
                e.data && (this.H = !0,
                    this.I())
            }
        )
    }
}

function av(a, b, c, d) {
    if (!a.F) {
        var e = a.C
            , f = a.P;
        O(e, 119);
        a.N = "touchstart" === d.type;
        a.D = !1;
        a.V = !1;
        a.X = b;
        if (e.C.A.length)
            if (e.X = !e.$ && bv(a, b, c, f),
                e.X)
                d.preventDefault(),
                    a = e.M,
                    d = a.C,
                    b = a.A,
                    f.A === d.A && f.C === d.C ? f.set(a.G.A, b.A, b.C, b.H, b.G, b.D, b.F, b.time, b.I) : f.set(a.G.A, d.A, d.C, d.H, d.G, d.D, d.F, d.time, d.I);
            else if (cv(e, a.A, b, c, f, !0),
                a.N) {
                f = d.targetTouches;
                for (c = b = f.length; c--;)
                    e = f[c],
                        a.Y[e.identifier] = [e.pageX, e.pageY];
                2 === b && (d.preventDefault(),
                    a.V = !0)
            }
    }
}

function dv(a, b, c) {
    if (!a.F) {
        var d = a.C
            , e = a.A
            , f = a.P
            , g = a.T
            , h = d.M
            , k = !0;
        a.D = !d.X && !a.N && !a.V && (!!e.S || !e.T) && !!d.C.A.length;
        d.X && (h = h.A,
            k = !(f.A === h.A && f.C === h.C));
        if (d.X || a.D)
            hn(e) && (50 > b && 0 < e.Z ? ln(e, e.Z - (50 - b) / e.N) : b > e.H - 50 && 1 > e.Z && ln(e, e.Z + (b - e.H + 50) / e.N)),
            5 !== e.F && (50 > c && 0 < e.$ ? Nn(e, e.$ - (50 - c) / e.X) : c > e.P - 50 && 1 > e.$ && Nn(e, e.$ + (c - e.P + 50) / e.X)),
                cv(d, e, b, c, g, k),
                a.W.style.cursor = "ew-resize",
                b = dr(f, g),
                E(a.H, "dragging", b),
                E(a.M, "dragging", !b),
                b ? ev(a, g, f) : ev(a, f, g)
    }
}

function fv(a, b, c, d) {
    if (!a.F) {
        var e = a.C
            , f = a.A
            , g = a.P;
        a.N && (a.Y = {});
        if (e.X || a.D)
            a.W.style.cursor = "auto",
                D(a.H, "dragging"),
                D(a.M, "dragging"),
            a.D && !d && (d = 20 > Math.abs(a.X - b) && hr(g, f).C === hr(a.T, f).C),
                e.X = !1,
                a.D = !1,
                a.I();
        !d || e.N && !f.S || b >= f.H - 12 || c >= f.P - 12 - 12 || (bv(a, b, c, g),
            gv(e.M),
            b = a.C,
        a.A.G.length && (c = a.P,
            d = hr(c, a.A),
            c.D || c.F ? hv(b.D, c.time, !0, !1) : c.H && !d.O.N ? iv(b.D, d, c.H, !0, !1) : hv(b.D, jv(b, c), !0, !1)));
        cr(g);
        cr(a.T)
    }
}

function bv(a, b, c, d) {
    var e = a.C.M;
    return kv(e) && (lv(a, b, c, e.C, d) || lv(a, b, c, e.A, d)) ? !0 : !1
}

function ev(a, b, c) {
    mv(a.C.M, b.A, b.C, b.G, b.D, b.F, b.time, c.A, c.C, c.G, c.D, c.F, c.time)
}

function lv(a, b, c, d, e) {
    var f = a.A
        , g = hr(d, f)
        , h = kr(ao(g));
    return c >= h - 10 - 20 && c <= h + g.height + 30 && (a = cu(a.C, f, d, !1, !0),
    20 > Math.abs(b - a)) ? (e.set(f, d.A, d.C, d.H, d.G, d.D, d.F, d.time, -1),
        !0) : !1
}

function nv(a, b, c, d) {
    var e = a.A
        , f = hr(c, e);
    a = cu(a.C, e, c, !1, !0);
    -40 > a || a > e.H + 40 || 5 === e.F && ao(f).F !== e.V ? Mb(b, "none") : (lb(b, d ? Math.ceil(a) : Math.floor(a - 13)),
        b.style.top = kr(ao(f)) + "px",
        Db(b, f.height),
        Mb(b, "block"))
}

class ov {
    constructor(a, b, c, d, e, f, g, h, k, l, m) {
        this.C = a;
        this.A = c;
        this.G = d;
        this.W = e;
        this.H = f;
        this.M = g;
        this.Z = h;
        this.S = l;
        this.ba = m;
        this.$ = new Ee(k, a.T);
        this.height = this.width = 0;
        this.aa = !0;
        this.X = -1;
        this.P = new ir;
        this.T = new ir;
        this.N = !1;
        this.Y = {};
        this.Ra = this.V = this.F = this.D = !1;
        this.ib = () => {
            var n = this.C;
            if (!n.aa) {
                var p = this.$
                    , q = n.M
                    , r = `rgba(${n.F.ta},`
                    , u = 5 === this.A.F ? this.A.V : -1;
                var v = q.G.A;
                v = 5 === v.F && pv(q) && (ao(hr(q.C, v)).F > v.V || ao(hr(q.A, v)).F < v.V);
                se(p, 0, 0, this.width, this.height);
                if (this.D || n.X || kv(q))
                    K(p, `${r}${.85})`),
                        M(p, 0, 0, this.width, this.height);
                if (v || !kv(q) || q.C.A > q.A.A)
                    Mb(this.H, "none"),
                        Mb(this.M, "none"),
                    this.S && Mb(this.S, "none");
                else {
                    v = this.A.G;
                    var w = q.C;
                    q = q.A;
                    var y = w.A, x = q.A, z = null, C;
                    for (C = y; C <= x; C++) {
                        var F = v[C];
                        var H = ao(F);
                        var N = kr(H);
                        if (!(0 > N + F.height)) {
                            if (N > this.height)
                                break;
                            if (-1 === u || H.F === u)
                                if (null === z && (z = C === y && (w.D || w.F) ? qv(n, F, w.D, w.time) : C !== y && F.I ? H.H + H.S + (H.N ? 10 * H.C.A : 0) + nn(this.A) : Yp(F, C === y ? w.C : 0, !1, er(w, C, !0), er(q, C, !1))),
                                C === x || v[C + 1].C !== F.C) {
                                    H = q.D || q.F ? qv(n, F, q.D, q.time) : Yp(F, C === x ? q.C : 1, !1, er(w, C, !0), er(q, C, !1));
                                    z = Math.floor(z - 40);
                                    H = Math.ceil(H + 40);
                                    se(p, z, N, H - z, F.height);
                                    if (0 < z + 40) {
                                        var Q = p.C;
                                        Q = p.A.createLinearGradient(z * Q, N * Q, (z + 40) * Q, N * Q);
                                        Q.addColorStop(0, `${r}${.85})`);
                                        Q.addColorStop(.5, `${r}${.7})`);
                                        Q.addColorStop(1, `${r}${.2})`);
                                        K(p, Q);
                                        M(p, z, N, 40, F.height)
                                    }
                                    z = p.C;
                                    Q = p.A.createLinearGradient(H * z, N * z, (H - 40) * z, N * z);
                                    Q.addColorStop(0, `${r}${.85})`);
                                    Q.addColorStop(.5, `${r}${.7})`);
                                    Q.addColorStop(1, `${r}${.2})`);
                                    K(p, Q);
                                    M(p, H - 40, N, 40, F.height);
                                    z = null
                                }
                        }
                    }
                    nv(this, this.H, w, !0);
                    nv(this, this.M, q, !1);
                    this.S && this.aa && nv(this, this.S, q, !1)
                }
            }
            this.Ra = !1
        }
        ;
        this.I = Wt;
        a.assign([53, 14, 167], () => {
                this.I()
            }
        );
        of(b, [198], () => {
                var n = this.$
                    , p = this.A.P
                    , q = this.A.H;
                this.width !== q && (yd(n, q),
                    this.width = q);
                this.height !== p && (Ed(n, p),
                    this.height = p)
            }
        );
        of(b, [199], () => {
                var n = 1;
                2 === c.F || c.S ? n = c.N : Cm(c) && Math.round(Em(c, !0)) > c.H && (n = c.N);
                var p = 5 === c.F ? 100 : c.X
                    , q = n > c.H;
                mb(this.Z, n);
                Db(this.Z, p - (q ? 24 : 0));
                E(m, "has-horizbar", q);
                this.I()
            }
        );
        b.assign([196, 197, 200], () => {
                this.F || (m.scrollTop = c.$ * (c.X - m.clientHeight),
                    m.scrollLeft = c.Z * (c.N - m.clientWidth));
                this.I()
            }
            , [201], () => {
                this.I()
            }
        );
        id(this.G, this.G, (n, p, q) => {
                av(this, n, p, q)
            }
            , (n, p) => {
                dv(this, n, p)
            }
            , (n, p, q) => {
                fv(this, n, p, q)
            }
            , !1);
        id(this.H, this.G, (n, p, q) => {
                av(this, n, p, q)
            }
            , (n, p) => {
                dv(this, n, p)
            }
            , (n, p, q) => {
                fv(this, n, p, q)
            }
            , !1);
        id(this.M, this.G, (n, p, q) => {
                av(this, n, p, q)
            }
            , (n, p) => {
                dv(this, n, p)
            }
            , (n, p, q) => {
                fv(this, n, p, q)
            }
            , !1)
    }
}

function mv(a, b, c, d, e, f, g, h, k, l, m, n, p) {
    if (b === h && c === k && e === m && f === n && g === p)
        gv(a);
    else {
        var q = a.G
            , r = q.A
            , u = r.G;
        1 === c && b + 1 < u.length && (b++,
            c = 0);
        0 === k && 0 < h && (h--,
            k = 1);
        var v = u[b];
        u = u[h];
        b = a.C.set(r, b, c, 0 === c ? lf : 1 === c ? mf : null, d, e, f, g, -1);
        d = -1;
        1 === k && !vn(r) && (e = Kp(u, -1) + 1,
            e = e < q.C.D.length ? q.C.D[e] : -1,
        e > v.O.U || e === v.O.U && 0 === c) && (d = u.O.G - 1);
        if (b = a.A.set(r, h, k, 0 === k ? lf : 1 === k ? mf : null, l, m, n, p, d) || b)
            rv(a),
                a.D === a.F ? gv(a) : O(q, 53)
    }
}

function gv(a) {
    pv(a) && (cr(a.C),
        cr(a.A),
        a.D = a.F = -1,
        O(a.G, 14))
}

function kv(a) {
    return br(a.C) && br(a.A)
}

function sv(a) {
    if (-1 != a.D && -1 != a.F) {
        var b = a.C
            , c = a.A;
        es(a.G, a.D, b);
        es(a.G, a.F, c);
        1 === b.C && b.A + 1 < a.G.A.G.length && (b.A++,
            b.C = 0);
        0 === c.C && 0 < c.A && (c.A--,
            c.C = 1)
    }
}

function pv(a) {
    return -1 !== a.D && -1 !== a.F
}

function rv(a) {
    if (kv(a)) {
        var b = a.G;
        a.D = jv(b, a.C);
        a.F = jv(b, a.A)
    }
}

function tv(a, b, c) {
    b === c ? gv(a) : (a.D = b,
        a.F = c,
        sv(a),
        O(a.G, 53))
}

function uv(a) {
    var b = a.G
        , c = b.H;
    b.aa ? (tv(a, b.D.F, b.D.F + 3),
        O(b, 120)) : br(c) ? mv(a, c.A, 0, !0, !1, !1, 0, c.A, 1, !0, !1, !1, 0) : b.A.G.length && mv(a, 0, 0, !0, !1, !1, 0, 0, 1, !0, !1, !1, 0)
}

function vv(a) {
    if (pv(a) && .2 > a.F - a.D) {
        var b = a.D;
        gv(a);
        hv(a.G.D, b, !1, !1)
    }
}

class wv {
    constructor(a) {
        this.G = a;
        this.C = new ir;
        this.A = new ir;
        this.F = this.D = -1;
        a.assign([47, 4, 17], () => {
                sv(this)
            }
        )
    }
}

function Ls(a) {
    var b = a.C;
    b && !b.M() && (b = b.S(),
    null !== b && (a.F = b,
        xv(a, !0)))
}

function au(a) {
    return null === a.C ? !1 : a.C.X()
}

function hv(a, b, c, d) {
    var e = a.A;
    yv(a, b) && (zv(e, c),
        O(e, 51, [b, d]))
}

function iv(a, b, c, d, e) {
    var f = a.A
        , g = b.D.length ? Ve(Ue(c, b.D[0].K.F), Rp(b)).qa : Ve(c, b.O.za).qa;
    f.H.set(b.A, b.index, g, c, !1, !1, !1, 0, -1);
    b = jv(f, f.H);
    yv(a, b) && (d && O(f, 202),
        O(f, 51, [b, e]))
}

function Av(a) {
    if (null !== a.C && !a.C.X()) {
        var b = a.C
            , c = a.A
            , d = pv(c.M);
        b.W() ? (d && hv(a, Fs(c), !0, !1),
        a.H.isActive && Bv(a.H, a),
            a.M ? Cv(a, !d) : Dv(a)) : (b.ia = !0,
        b.M() || b.H())
    }
}

function Ev(a) {
    a.A.S && (is(a.A.S.C, !0),
        a.X = -1);
    a.T && (clearTimeout(a.T),
        a.T = 0,
        a.N = !1,
        O(a.A, 40));
    try {
        a.C.Y()
    } catch (b) {
    }
    a.P = -1
}

function xv(a, b) {
    if (au(a)) {
        requestAnimationFrame(a.ba);
        var c = a.A
            , d = (new Date).getTime()
            , e = d - (a.$ || d)
            , f = Es(c)
            , g = a.C
            , h = a.D
            , k = a.P
            , l = c.V ? -1 : xs(c, h)
            , m = c.H;
        a.$ = d;
        b || g.ra ? (b = g.S(),
            null !== b ? a.F = b : b = a.F) : (a.F += e / 1E3 * a.G,
            b = a.F);
        if (-1 !== k)
            if (.4 > Math.abs(k - b))
                a.P = -1;
            else
                return;
        g.ka || (k = Fs(c),
            f && (b < k - g.Ca || b > Gs(c)) ? Hs(c, k, !1) : -1 !== l && b > l && ns(c));
        es(c, b, m);
        O(c, 202);
        if (c.S && br(m) && (l = c.S.C,
            d = hr(m, c.A).O,
        c.ja && l.La && !d.H)) {
            k = Math.round(100 * gr(m, c.A)) / 100;
            if (vl(d) || wl(d) !== d.za) {
                e = d.W;
                var n = vl(d) ? d.M / d.I - e : 0;
                d = (Math.ceil((k * e + n) * d.M / d.I * d.I) / d.I - n) / e
            } else
                d = 1 / d.M,
                    d = Math.ceil(k / d) * d;
            k = 0 === d || 1 === d;
            h = Fv(c, h, fr(m, c.A), d);
            h !== a.X && (!f || h < Gs(c)) && (k || c.xa) && (cs(l, (h - b) / a.G, k),
                a.X = h);
            Or || !g.ka || a.aa || (P(c, "Metronome playback might be buggy in this web browser. Try disabling enhanced slowdown or use another browser.", !0, 1),
                Or = !0)
        }
        O(c, 67)
    }
}

function Gv(a, b) {
    b !== a.M && (a.M = b,
        O(a.A, 224, b))
}

function Hv(a, b) {
    b !== a.I && (a.I = b,
        O(a.A, 158, b))
}

function Iv(a) {
    Gv(a, !0);
    Hv(a, !0)
}

function Jv(a, b) {
    b !== a.S && (a.S = b,
        O(a.A, 160))
}

function Kv(a, b) {
    b !== a.V && (a.V = b,
        O(a.A, 225, b))
}

function Lv(a) {
    return a.D ? a.F - Mv(a.A, a.D) : 0
}

function Cv(a, b) {
    if (!a.N) {
        var c = a.A;
        if (c.S && c.C.A.length) {
            var d = c.S.C;
            if (d.pb && !Fr)
                P(c, "This browser doesn't support playback with count-in.", !1, 1),
                    Dv(a);
            else {
                a.N = !0;
                O(c, 43);
                var e = c.H;
                br(e) || zv(c, !1);
                var f = fr(e, c.A)
                    , g = hr(e, c.A).O
                    , h = Nv(c)
                    , k = g.M * a.S
                    , l = Fv(c, h, f, 0);
                f = (Fv(c, h, f, 1) - l) / a.G / g.za.qa / g.I;
                b && 0 !== gr(e, c.A) && hv(a, l, !0, !1);
                for (a.T = setTimeout(() => {
                        Dv(a);
                        a.T = 0
                    }
                    , f * k * 1E3); k--;)
                    cs(d, f * k, 0 == k % g.M)
            }
        } else
            Dv(a)
    }
}

function Dv(a) {
    a.N && (a.N = !1);
    try {
        a.C.aa()
    } catch (b) {
        P(a.A, "The audio couldn't be loaded.", !1, 1);
        return
    }
    Ls(a)
}

function Ov(a) {
    au(a) || a.N ? Ev(a) : Av(a)
}

function yv(a, b) {
    if (-1 !== a.P && au(a))
        return !1;
    var c = a.C;
    null != c && (c.W() || c.M() || 0 === b || c.H(),
        0 >= b ? b = 0 : c.duration && b > c.duration && (b = c.duration),
    a.A.S && is(a.A.S.C, !0),
        a.P = b,
        c.N(b),
        a.F = b);
    return !0
}

function Pv(a, b) {
    1 < b ? b = 1 : 0 > b && (b = 0);
    b *= Qv(a.A, !0);
    a.D && hv(a, b + Mv(a.A, a.D), !0, !1)
}

function Rv(a) {
    return null !== a.C && !a.C.T
}

function Sv(a, b, c, d) {
    a.Z() && (d || Tv(a.H, a.A),
    b !== a.W && (5 > b ? b = 5 : 500 < b && (b = 500),
        a.W = b,
    c && Uv(a, b / em(a.A.C), !1, d)))
}

function Uv(a, b, c, d) {
    if (a.Z() && (d || Tv(a.H, a.A),
    b !== a.G)) {
        var e = a.C
            , f = e.xa()
            , g = e.va();
        b < f ? b = f : b > g && (b = g);
        c && Sv(a, Math.round(b * em(a.A.C)), !1, d);
        e.W() || e.M() ? (e.Va(b),
            Ls(a)) : O(a.A, 57, b)
    }
}

function Vv(a, b) {
    Rv(a) ? Uv(a, Math.round(10 * a.G + (b ? .5 : -.6)) / 10, !0, !1) : Sv(a, a.W + (b ? 5 : -5), !0, !1)
}

function Wv(a) {
    Sv(a, Math.round(em(a.A.C) * a.G), !1, !1);
    O(a.A, 175)
}

class Xv {
    constructor(a) {
        this.A = a;
        this.H = new Yv;
        this.G = 1;
        this.W = 120;
        this.volume = 1;
        this.$ = this.F = 0;
        this.X = -1;
        this.C = this.D = null;
        this.I = this.M = !1;
        this.S = 1;
        this.V = !1;
        this.P = -1;
        this.N = !1;
        this.T = 0;
        this.aa = "function" === typeof AudioWorkletNode;
        this.Y = () => {
            if (Fr) {
                var b = Fr.createOscillator()
                    , c = Fr.createGain();
                c.gain.value = 0;
                b.connect(c);
                c.connect(Fr.destination);
                c = Fr.currentTime;
                b.start(c);
                b.stop(c + .5);
                Fr.resume && Fr.resume()
            }
            Zv(a, [119], this.Y)
        }
        ;
        a.assign([57], b => {
                this.G = b.data
            }
            , [7], b => {
                b.data === a.I && (b = this.C,
                    b.N(this.F),
                    b.Va(this.G),
                    b.setVolume(this.volume),
                b.ia && Av(this))
            }
            , [38], b => {
                if (a.G && 1 === a.G.size()) {
                    var c = b.data[0];
                    if (c && b.data[2] && this.D)
                        if (a.N || c.P === c.Ea) {
                            var d = Jn(a.A, c.J.O);
                            d && iv(this, d, c.F, b.data[1], !0)
                        } else
                            hv(this, $v(a, c.J.O, c.P / c.J.O.za.qa), b.data[1], !0)
                }
            }
            , [44, 25, 143], b => {
                var c = this.C;
                c && c.T && au(this) && (Ev(this),
                b.data && !Zr(c, b.data.Ja) || Av(this))
            }
            , [25, 143, 144], () => {
                this.$a(aw(this.A))
            }
            , [119], this.Y);
        this.ba = () => {
            xv(this, !1)
        }
    }

    Z() {
        return null !== this.C && this.C.Z
    }

    $a(a) {
        null !== this.C && this.C.$a(a)
    }

    setVolume(a) {
        0 > a ? a = 0 : 1 < a && (a = 1);
        a !== this.volume && (this.volume = a,
            this.C.setVolume(a),
            O(this.A, 61, a))
    }
}

function Bv(a, b) {
    a = a.C + Math.floor(a.currentIteration / a.D) * a.A;
    Rv(b) ? Uv(b, a / 100, !0, !0) : Sv(b, a, !0, !0)
}

function Tv(a, b) {
    a.isActive && (a.isActive = !1,
        O(b, 139))
}

class Yv {
    constructor() {
        this.isActive = !1;
        this.A = this.D = this.F = this.C = 1;
        this.currentIteration = 0
    }
}

function bw(a) {
    return a[2] ? a[2] / 480 : 0
}

function cw(a, b) {
    return a[0] === b[0] ? bw(a) < bw(b) : a[0] < b[0]
}

function dw(a) {
    return 4 <= a.length && !!a[3]
}

function ew(a, b) {
    uc("GET", b, null, c => {
            for (var d = [], e = 0, f = c.length; e !== f; e++)
                0 <= c[e][0] && d.push(c[e]);
            a.A = d;
            nf(a.P, 66);
            nf(a.P, 47)
        }
        , Ir)
}

function fw(a) {
    var b = a.D
        , c = a.T;
    a.D = null !== a.M ? a.M : 0;
    a.T = null !== a.I ? a.I : -1;
    a.D === b && a.T === c || nf(a.P, 36)
}

function gw(a, b) {
    if (a.G) {
        var c = () => {
                gw(a, 2 * b)
            }
        ;
        uc("GET", `/api/v1/recordings/${a.G}/waveform/`, null, d => {
                d.sample_rate ? (a.X = d.sample_rate,
                    hw(a, d.url, 1E3)) : setTimeout(c, b)
            }
            , () => {
                setTimeout(c, b)
            }
        )
    }
}

function hw(a, b, c) {
    var d = new XMLHttpRequest;
    d.open("GET", b, !0);
    d.responseType = "arraybuffer";
    d.onreadystatechange = () => {
        if (4 == d.readyState && 200 == d.status) {
            for (var e = new Uint8Array(d.response), f = e.length, g = 0; f--;)
                e[f] > g && (g = e[f]);
            a.W = e;
            a.Y = g;
            nf(a.P, 84)
        }
    }
    ;
    d.onerror = () => {
        setTimeout(() => {
                hw(a, b, 2 * c)
            }
            , c)
    }
    ;
    d.send()
}

function iw(a) {
    return -1 === a.T ? a.C.duration : a.T
}

function jw(a, b, c, d) {
    var e = a.A
        , f = e.length
        , g = null
        , h = null;
    a = iw(a);
    var k;
    if (0 === f)
        return 0;
    for (k = 0; k < f - 1; k++) {
        var l = e[k];
        var m = e[k + 1];
        if (m[1] >= d && (l[0] < b || l[0] === b && bw(l) <= c) && (m[0] > b || m[0] === b && bw(m) > c || cw(m, l))) {
            g = l;
            h = m;
            break
        }
    }
    null === g && (g = e[f - 1],
        h = [g[0], Math.max(g[1], a), 480]);
    d = bw(g);
    e = bw(h);
    return Math.min(g[1] + (g[0] === b ? c - d : 1 - d + c + (b - g[0] - 1)) / (cw(g, h) ? g[0] === h[0] ? e - d : 1 - d + e + (h[0] - g[0] - 1) : 1 - d) * (h[1] - g[1]), a)
}

function kw(a) {
    return 2 === a.V || 8 === a.V
}

class lw {
    constructor(a, b, c, d, e, f, g, h, k, l, m) {
        this.P = a;
        this.V = b;
        this.G = c;
        this.name = d;
        this.index = e;
        this.X = g;
        this.W = null;
        this.Y = 0;
        this.M = h;
        this.I = k;
        this.C = m;
        this.F = m.T;
        this.A = [];
        this.N = null;
        this.H = -1;
        this.D = h || 0;
        this.T = -1;
        this.S = l;
        f && ew(this, f);
        a.assign([47], () => {
                fw(this)
            }
        )
    }
}

function mw(a) {
    uc("GET", a.A, null, b => {
            uc("GET", b.url, null, c => {
                    for (var d = a.C, e = 0, f = c.length, g; e !== f; e++)
                        g = c[e],
                            d.push(new nw(g.t1, g.t2, g.t));
                    a.A = null
                }
                , Ir)
        }
        , Ir)
}

class ow {
    constructor(a, b) {
        this.D = a;
        this.A = b;
        this.C = []
    }
}

class nw {
    constructor(a, b, c) {
        this.startTime = a;
        this.endTime = b;
        this.text = c
    }
}

function pw(a) {
    if (a.A.S) {
        for (var b = a.A.S.C.Ta, c = "", d = 0, e = b.length, f; d !== e; d++)
            f = b[d],
                c += '<option value="' + f[0] + '">' + Xa(f[1]) + "</option>";
        a.F.getElementsByClassName("mixerinst-select")[0].innerHTML = c;
        qw(a);
        return !0
    }
    return !1
}

function qw(a) {
    var b = a.F.innerHTML
        , c = a.A.C.C
        , d = "";
    var e = 0;
    for (c = c.length; e !== c; e++)
        d += `<div id="mixer${e}" data-trackid="${e}" class="volume-row">${b}</div>`;
    a.G.innerHTML = d;
    rw(a)
}

function rw(a) {
    a = a.A.C.C;
    for (var b = a.length, c, d; b--;)
        c = a[b],
            d = tt("mixer" + b),
            d.getElementsByClassName("mixername")[0].innerHTML = Xa(c.name),
            Jr(d.getElementsByClassName("inputrange")[0], 100 * c.volume),
            E(d.getElementsByClassName("mixermute")[0], "active", c.Ga),
            d.getElementsByClassName("mixerinst-select")[0].value = c.Ja,
        1E3 <= c.Ja && Mb(d.getElementsByClassName("mixerinst")[0], "none")
}

function sw(a) {
    E(a.C, "notsynth", !Nv(a.A).F);
    E(a.C, "synthpossible", tw(a.A))
}

class uw {
    constructor(a) {
        this.A = a;
        this.C = tt("mixer");
        this.G = tt("mixerbody");
        this.F = tt("mixertemplate");
        this.D = tt("metronomesection");
        this.isActive = !1;
        pw(this) || qw(this);
        gu(a, [61], () => {
                Jr(tt("volumeslider"), Math.round(100 * this.A.D.volume))
            }
        );
        a.assign([72, 60, 59, 48, 13], () => {
                rw(this)
            }
            , [5, 16, 219], () => {
                qw(this)
            }
            , [68], () => {
                sw(this)
            }
            , [56], () => {
                pw(this)
            }
            , [1], () => {
                D(this.D, "unloaded")
            }
            , [62], c => {
                Jr(tt("metronome-volume"), Math.round(100 * c.data))
            }
            , [228], () => {
                E(this.D, "metronomeoff", !a.ja)
            }
        );
        var b = c => {
                var d = c.target
                    , e = Ta(d, "data-trackid")
                    , f = Ta(d, "data-action")
                    , g = null;
                if (f)
                    switch (f = parseInt(f, 10),
                    5 !== f && 10 !== f && 11 !== f && 9 !== f && c.preventDefault(),
                    e && (g = a.C.C[parseInt(e, 10)]),
                        c = g,
                        d = 5 === f || 10 === f || 11 === f || 9 === f ? parseInt(d.value, 10) : null,
                        e = this.A,
                        g = e.A,
                        f) {
                        case 5:
                            c.volume = d / 100;
                            zm(g, 60, c);
                            break;
                        case 6:
                            c.Ga = !c.Ga;
                            zm(g, 60, c);
                            break;
                        case 7:
                            lo(g, c, !c.Ka);
                            break;
                        case 9:
                            d !== c.Ja && (c.Ja = d,
                                zm(g, 13, c));
                            break;
                        case 8:
                            vw(e);
                            break;
                        case 10:
                            e.D.setVolume(d / 100);
                            break;
                        case 11:
                            f = e.S,
                            null !== f && Wr(f.C, d / 100)
                    }
            }
        ;
        I(this.C, "mousedown touchstart input", b, "change", c => {
                b(c);
                c.target.blur()
            }
        )
    }
}

function ww(a) {
    var b;
    if (Qv(a.G, !0)) {
        var c = b = a.A.width;
        var d = a.A;
        d = Qv(d.C, d.F) / d.A + 30;
        c /= d;
        1 <= c ? b = 0 : (b = b * c | 0,
        20 > b && (b = 20))
    } else
        b = 0;
    c = Math;
    d = c.round;
    var e = a.A;
    var f = 15 * e.A;
    e = (e.G - e.H + f) / (Qv(e.C, e.F) + f + f);
    c = d.call(c, e * a.A.width);
    b !== a.width && (mb(a.C, b),
        a.width = b);
    c !== a.left && (lb(a.C, c),
        a.left = c)
}

class xw {
    constructor(a, b) {
        this.G = a;
        this.A = b;
        this.C = b.D.getElementsByClassName("waveformnav")[0];
        this.left = this.width = this.F = this.D = 0;
        a.assign([39, 52, 36], () => {
                ww(this)
            }
        );
        id(this.C, this.C, c => {
                this.D = c;
                this.F = b.G
            }
            , c => {
                c = (c - this.D) / b.width;
                var d = Qv(a, b.F) + 30 * b.A;
                yw(b, this.F + c * d, !1)
            }
            , Ir, !1)
    }
}

function yw(a, b, c) {
    var d = 15 * a.A
        , e = a.H - d;
    d = a.H + Qv(a.C, a.F) + d - a.A * a.width;
    b < e ? b = e : b > d && (b = Math.max(e, d));
    a.G !== b ? (a.G = b,
        a.S(),
        zw(a),
        O(a.C, 39)) : c && (a.S(),
        zw(a))
}

function Aw(a) {
    var b = a.C.M
        , c = a.ra
        , d = 0
        , e = 0
        , f = 0
        , g = a.$
        , h = a.aa
        , k = pv(b);
    k && (d = Bw(a, b.D),
        e = Bw(a, b.F),
        lb(g, d),
        lb(h, e - 13),
        d = Math.max(0, d),
        f = Math.min(a.width, e) - d);
    0 < f ? (mb(c, f),
        lb(c, d)) : mb(c, 0);
    Mb(g, k && 0 <= d ? "block" : "none");
    Mb(h, k && e <= a.width ? "block" : "none")
}

function Cw(a) {
    var b = a.C
        , c = a.H
        , d = a.N;
    if (a.F && -1 !== b.I) {
        var e = Nv(b);
        a.H = Mv(b, e);
        a.N = xs(b, e)
    } else
        a.H = 0,
            a.N = 0;
    a.H === c && a.N === d || yw(a, a.G, !0)
}

function Dw(a) {
    a.isActive && (a.Ca.innerHTML = Ub(Qv(a.C, a.F), !1))
}

function Ew(a) {
    var b = Va(a.D)
        , c = Math.ceil(b.width);
    b = b.height;
    if (c !== a.width || b !== a.I)
        a.width = c,
            yd(a.P, c),
            a.I = b - 2,
            a.T = b - 6,
            a.V = b / 2 - 1,
            a.wa = .8 * a.T,
            Ed(a.P, a.T),
            Db(a.Y, a.I),
            Db(a.ra, a.I),
            a.S(),
            zw(a),
            ww(a.Fa),
            O(a.C, 77)
}

function Fw(a, b, c) {
    var d = a.width;
    .002 > b && (b = .002);
    var e = b * d;
    var f = Qv(a.C, a.F) + 30 * a.A;
    e > f && (b = Qv(a.C, a.F) / (d - 15 - 15));
    b !== a.A && (c = c ? Gw(a, a.width / 2) : a.C.D.F,
        a.A = b,
        yw(a, c - a.A * a.width / 2, !1))
}

function Hw(a, b) {
    var c = a.C.M
        , d = Gw(a, b)
        , e = -1
        , f = -1
        , g = !1
        , h = !1;
    if (pv(c)) {
        var k = Bw(a, c.D);
        var l = Bw(a, c.F);
        20 > Math.abs(k - b) ? (d = c.F,
            g = !0) : 20 > Math.abs(l - b) ? (d = c.D,
            g = !0) : b > k && b < l && (d = c.D,
            e = c.F,
            f = b,
            h = !0)
    }
    a.W = d;
    a.pa = e;
    a.ma = f;
    a.C.X = g;
    a.da = h
}

function Iw(a, b) {
    var c = Nv(a.C);
    if (a.da) {
        b = a.A * (b - a.ma);
        var d = a.W + b;
        b = a.pa + b
    } else
        d = a.W,
            b = Gw(a, b);
    d < c.D || b > iw(c) || (a = a.C.M,
        c = b,
        d <= c ? tv(a, d, c) : tv(a, c, d))
}

function Jw(a, b, c) {
    var d = a.C
        , e = d.M;
    !c || d.X || a.da ? pv(e) && vv(e) : (hv(d.D, Gw(a, b), !0, !1),
    pv(e) && gv(e))
}

function Kw(a) {
    a.isActive || (a.isActive = !0,
        a.C.assign([53, 14, 39], a.va, [67, 51], a.ta, [52], a.xa, [36], a.ia, [68, 84, 136], a.ja, [218], a.X, [195], a.X),
        B(a.D, "active"),
        Ew(a),
        a.ja(),
        Aw(a))
}

function Lw(a) {
    if (a.isActive) {
        var b = a.C;
        a.isActive = !1;
        Zv(b, [53, 14, 39], a.va);
        Zv(b, [67, 51], a.ta);
        Zv(b, [52], a.xa);
        Zv(b, [36], a.ia);
        Zv(b, [68, 84, 136], a.ja);
        Zv(b, [218], a.X);
        Zv(b, [195], a.X);
        D(a.D, "active")
    }
}

function Gw(a, b) {
    b = a.G + b * a.A;
    a.F && (b < a.H ? b = a.H : b > a.N && (b = a.N));
    return b
}

function Mw(a) {
    return a.G + a.A * a.width
}

function Bw(a, b) {
    return Math.floor((b - a.G) / a.A)
}

function zw(a) {
    var b = Bw(a, a.C.D.F) - .5;
    b >= a.width - 3 && (b = -10);
    b !== a.Z && (lb(a.Y, b),
        0 > a.Z && 0 <= b ? Mb(a.Y, "block") : 0 > b && 0 <= a.Z && Mb(a.Y, "none"),
        a.Z = b)
}

class Nw {
    constructor(a, b, c, d, e) {
        this.C = a;
        this.color = e;
        this.D = tt(b);
        this.wa = this.V = this.T = this.I = this.width = 0;
        this.F = d;
        this.M = this.D.getElementsByClassName("waveformcan")[0];
        this.Y = this.D.getElementsByClassName("waveformplayhead")[0];
        this.ra = this.D.getElementsByClassName("waveformloop")[0];
        this.Ca = this.D.getElementsByClassName("waveformtime-all")[0];
        this.ba = this.D.getElementsByClassName("waveformtime-now")[0];
        this.$ = this.D.getElementsByClassName("waveloophand1")[0];
        this.aa = this.D.getElementsByClassName("waveloophand2")[0];
        this.P = new Ee(this.M, a.T);
        this.Ra = !1;
        this.Z = 0;
        this.A = .008;
        this.isActive = !1;
        this.G = -15 * this.A;
        this.N = this.H = 0;
        this.Fa = new xw(a, this);
        this.pa = this.W = 0;
        this.ma = -1;
        this.da = !1;
        this.Da = [];
        this.ya = [];
        this.ib = () => {
            se(this.P, 0, 0, this.width, this.T);
            if (-1 !== this.C.I) {
                var l = Nv(this.C);
                if (null !== l.W && l.X) {
                    var m = l.W
                        , n = l.Y
                        , p = this.P
                        , q = this.width
                        , r = this.V
                        , u = this.A
                        , v = this.H
                        , w = this.N
                        , y = this.G
                        , x = Mw(this);
                    l = u * l.X / 147;
                    var z = this.Da
                        , C = this.ya
                        , F = Math.round(y / u);
                    v = this.F && v > y ? Math.floor((v - y) / u) : 0;
                    u = this.F && w < x ? q - Math.ceil((x - w) / u) : q;
                    K(p, this.color);
                    for (w = 0; w !== q; w++) {
                        if (w < v || w > u)
                            y = x = 0;
                        else {
                            y = w + F;
                            x = Math.floor(l * y);
                            y = Math.ceil(l * (y + 1)) - 1;
                            z.length = 0;
                            C.length = 0;
                            z.push(0);
                            for (C.push(0); x++ < y;)
                                if (m[2 * x])
                                    z.push(m[2 * x]),
                                        C.push(m[2 * x + 1]);
                                else
                                    break;
                            x = Math.max.apply(Math, z) * r / n;
                            y = Math.max.apply(Math, C) * r / n
                        }
                        M(p, w, r - x, 1, x + y + 1)
                    }
                } else
                    for (m = this.P,
                             n = this.width,
                             p = this.T,
                             q = this.wa,
                             z = 8 * Math.max(0, Math.ceil(this.G - 1)),
                             r = 8 * (Mw(this) + 1),
                             l = Nv(this.C).C.duration,
                             K(m, this.color),
                             M(m, 0, this.V, n, 1); z < r; z++)
                        if (C = z / 8,
                        !l || C <= l)
                            C = Bw(this, C),
                            0 < C && C < n && (F = q / Re(z % 8, 8).Ba,
                                M(m, C, (p - F) / 2, 1, F))
            }
            this.Ra = !1
        }
        ;
        this.S = Wt;
        this.va = () => {
            Aw(this)
        }
        ;
        this.ta = () => {
            var l = this.C.D
                , m = l.F;
            m <= this.G || m >= Mw(this) ? yw(this, m - this.A * this.width / 8, !0) : zw(this);
            this.ba.innerHTML = Ub(this.F ? Lv(l) : m, !0)
        }
        ;
        this.xa = () => {
            Cw(this);
            this.S()
        }
        ;
        this.ia = () => {
            Cw(this);
            Dw(this)
        }
        ;
        this.ja = () => {
            if (-1 !== a.I && this.isActive) {
                var l = Nv(a);
                this.ia();
                if (!l.F && Qv(this.C, this.F) / this.A + 30 < this.width) {
                    var m = Qv(this.C, this.F) / (this.width - 15 - 15);
                    m && (this.A = m,
                        yw(this, -15 * this.A, !1))
                }
                this.S();
                null === l.W && gw(l, 1E3);
                l = null !== l.W && !!l.X;
                E(tt("waveform-status-message"), "hidden", l)
            }
        }
        ;
        this.ka = 0;
        this.Ga = () => {
            Ew(this)
        }
        ;
        this.X = () => {
            this.ka && window.clearTimeout(this.ka);
            this.ka = setTimeout(this.Ga, 10)
        }
        ;
        var f = 1;
        I(this.D, "wheel", l => {
                l.preventDefault();
                l.ctrlKey ? Fw(this, this.A + l.deltaY * this.A / 100, !0) : yw(this, this.G + l.deltaX * this.A, !1)
            }
            , "gesturestart", l => {
                l.preventDefault();
                f = this.A
            }
            , "gesturechange", l => {
                l.preventDefault();
                Fw(this, f / l.scale, !0)
            }
        );
        c && (id(this.M, this.M, l => {
                Hw(this, l)
            }
            , l => {
                Iw(this, l)
            }
            , (l, m, n) => {
                Jw(this, l, n)
            }
            , !1),
            id(this.$, this.M, l => {
                    Hw(this, l)
                }
                , l => {
                    Iw(this, l)
                }
                , (l, m, n) => {
                    Jw(this, l, n)
                }
                , !1),
            id(this.aa, this.M, l => {
                    Hw(this, l)
                }
                , l => {
                    Iw(this, l)
                }
                , (l, m, n) => {
                    Jw(this, l, n)
                }
                , !1));
        J(this.D.getElementsByClassName("zoom-in")[0], () => {
                Fw(this, this.A / 1.5, !1)
            }
        );
        J(this.D.getElementsByClassName("zoom-out")[0], () => {
                Fw(this, 1.5 * this.A, !1)
            }
        );
        var g = this.D.getElementsByClassName("waveform-time")[0]
            , h = this.D.getElementsByClassName("waveformtime-inp")[0]
            , k = l => {
                if ("mousedown" === l.type)
                    for (l = l.target; l;) {
                        if (l === h)
                            return;
                        l = l.parentNode
                    }
                else if ("keydown" === l.type)
                    if (13 === l.which) {
                        l = h.value;
                        var m = Qv(a, this.F), n = null, p;
                        l = l.trim();
                        /^\d+(\.\d+)?$/.exec(l) ? n = parseFloat(l) : (p = /^(\d+)?:(\d\d(\.\d+)?)$/.exec(l)) ? n = 60 * parseInt(p[1] || 0, 10) + parseFloat(p[2]) : (p = /^(\d+):(\d\d):(\d\d(\.\d+)?)$/.exec(l)) && (n = 3600 * parseInt(p[1], 10) + 60 * parseInt(p[2], 10) + parseFloat(p[3]));
                        null !== n && n > m && (n = m);
                        l = n;
                        null !== l && (m = a.D,
                        m.D && hv(m, l + Mv(m.A, m.D), !0, !1))
                    } else if (27 !== l.which)
                        return;
                D(g, "editmode");
                gc("mousedown", k);
                gc("keydown", k)
            }
        ;
        I(this.ba, "mousedown touchstart", oc(() => {
                h.value = this.ba.innerHTML;
                B(g, "editmode");
                h.focus();
                h.select();
                I(window, "mousedown", k);
                I(window, "keydown", k)
            }
        ));
        gu(a, [32, 68, 52, 4, 17, 12, 136], () => {
                Dw(this)
            }
        )
    }
}

function O(a, b, c) {
    nf(a.Z, b, c)
}

function P(a, b, c, d) {
    O(a, 24, [Ow(a, b), c, d])
}

function es(a, b, c) {
    var d = a.D.D;
    if (d)
        if (d.F)
            a: {
                a = a.A;
                var e = a.D
                    , f = 0;
                d = e.D.length;
                var g;
                if (e.A.length)
                    if (0 === b)
                        c.set(a, 0, 0, lf, !0, !1, !1, 0, -1);
                    else {
                        for (g = 0; g < d; g++) {
                            var h = km(e, g, 0, 1);
                            if (b >= f && b < f + h) {
                                d = g;
                                var k;
                                b -= f;
                                f = e.G;
                                var l = 0;
                                if (1 === f.length)
                                    l = b / h;
                                else {
                                    var m = e.D[g];
                                    var n = 0;
                                    for (k = f.length; n !== k; n++) {
                                        h = f[n];
                                        var p = n + 1 === k;
                                        if (!p) {
                                            if (f[n + 1].A < m)
                                                continue;
                                            if (f[n + 1].A === m && b >= km(e, g, 0, f[n + 1].C))
                                                continue
                                        }
                                        h = h.A < m ? 0 : h.C;
                                        p = p || f[n + 1].A > m ? 1 : f[n + 1].C;
                                        f = km(e, g, 0, h);
                                        e = km(e, g, 0, p);
                                        l = h + (b - f) / (e - f) * (p - h);
                                        break
                                    }
                                }
                                Ln(a, d, l, c);
                                break a
                            }
                            f += h
                        }
                        Ln(a, d - 1, 1, c)
                    }
                else
                    cr(c)
            }
        else
            Pw(a, d, b, c)
}

function fs(a, b) {
    if (b.da)
        return b.da;
    if (Fj(b))
        return null;
    var c = b.K.J.track;
    if (c.T) {
        if (null !== b.Aa)
            return b.Aa;
        a: {
            a = bj(b);
            var d = b.X
                , e = gk(b.K);
            c = c.T.C;
            for (var f, g, h, k, l; ;) {
                for (f = c.length; f--;)
                    if (g = c[f],
                    g[1] === b.M.U && (h = 2 < g.length ? !!g[2] : !1,
                        k = 3 < g.length && g[3] ? g[3] : null,
                        l = 4 < g.length ? !!g[4] : !1,
                    a === h && d === k && e === l)) {
                        b = g[0];
                        break a
                    }
                if (e)
                    e = !1;
                else if (d)
                    d = null;
                else if (a)
                    a = !1;
                else
                    break
            }
            b = null
        }
        return b ? b : null
    }
    return 1E3 <= c.Ja ? c.Ja - 1E3 : bj(b) ? 109 : b.M.U + Math.round(aw(a) / 100)
}

function ns(a) {
    var b = a.D;
    Ev(b);
    if (a.N && !a.G.F()) {
        var c = a.G.D(!1).C();
        c = $v(a, c.J.O, c.P / c.J.O.za.qa)
    } else
        c = Fs(a);
    Es(a) || b.H.isActive ? Hs(a, c, !0) : (hv(b, c, !0, !1),
        O(a, 41))
}

function xs(a, b) {
    return a.F.A ? Fv(a, b, a.F.xa, 1) : b.F ? Qw(a, a.C.D.length - 1, 1) : iw(b)
}

function Es(a) {
    return pv(a.M) || a.F.A
}

function Fs(a) {
    return pv(a.M) ? a.M.D : a.D.D ? Mv(a, a.D.D) : 0
}

function Gs(a) {
    return pv(a.M) ? a.M.F : a.D.D ? xs(a, a.D.D) : 0
}

function Hs(a, b, c) {
    var d = a.D;
    if (d.V)
        O(a, 140),
            Ev(d);
    else {
        O(a, 34);
        (d.I || c) && Ev(d);
        hv(d, b, !1, !1);
        if (a = d.H.isActive)
            a = d.H,
                ++a.currentIteration >= (Math.ceil((a.F - a.C) / a.A) + 1) * a.D ? (a.currentIteration = 0,
                    a = !1) : (Bv(a, d),
                    a = !0),
                a = !a;
        a ? Ev(d) : d.I ? Cv(d, !1) : c && Av(d)
    }
}

function gu(a, b, c) {
    a.assign(b, c);
    c()
}

function cu(a, b, c, d, e) {
    var f = hr(c, b);
    if (c.D || c.F)
        return qv(a, f, c.D, c.time);
    if (e)
        var g = c.C;
    else if (e = f.O,
        c = c.C,
    !e.N || b.W)
        g = c;
    else {
        b = e.za.qa;
        c *= b;
        var h = 10, k = null, l, m;
        for (g of Gl(e))
            for (l = g.A.length; l--;) {
                var n = g.A[l];
                for (m = n.length; m--;) {
                    var p = n[m];
                    var q = c - p.Ea;
                    0 <= q && (q < h || q === h && p.ia < k.ia) && (k = p,
                        h = q)
                }
            }
        h = q = b;
        for (g of Gl(e))
            for (l = g.A.length; l--;)
                for (n = g.A[l],
                         m = n.length; m--;)
                    p = n[m],
                    p.Ea > k.Ea && p.Ea < q && (q = p.Ea,
                        h = p.P);
        g = k.P / b + (c - k.Ea) / (q - k.Ea) * ((h - k.P) / b)
    }
    a = a.M;
    return Yp(f, g, d, br(a.C) && er(a.C, f.index, !0), br(a.A) && er(a.A, f.index, !1))
}

function yu(a, b, c) {
    var d = "";
    null !== b.Y ? d = b.Y : b.H && (d = Ow(a, qi(b.H, b.Wa, a.C.A.length ? a.C.A[0].A[b.index].G : 0, c)));
    return d
}

function cv(a, b, c, d, e, f) {
    var g = b.C, h = c - nn(b), k = 5 === b.F ? b.V : -1, l = b.aa, m;
    var n = 0;
    for (m = l.length; n < m; n++) {
        var p = l[n];
        if (-1 !== k && k !== p.F) {
            if (p.F > k) {
                p = l[n - 1];
                break
            }
        } else {
            var q = kr(p) + p.height;
            if (q > d && (f || q - ro(p) > d))
                break
        }
    }
    d = p;
    f = d.A;
    k = 0;
    l = f.length;
    for (n = f[0]; k !== l && !(m = f[k],
    m.width && (n = m),
    m.F + m.width > h); k++)
        ;
    f = n;
    k = Fl(f.O);
    l = Math.max(0, h - f.F);
    n = b.C.pa;
    m = Infinity;
    p = null;
    for (var r of Wo(f))
        r.V && (q = Math.abs(r.A - l),
        (q <= n || -1 === n) && q < m && (m = q,
            p = r.C),
            q = Math.abs(r.A + r.width - l),
        (q <= n || -1 === n) && q < m && (m = q,
            p = r.C.add(r.duration)));
    if (p)
        e.set(b, f.index, Ve(Ue(p, f.G[0].C), Rp(f)).qa, p, !0, !1, !1, 0, -1);
    else {
        r = e.set;
        n = f.index;
        a: {
            m = f.G;
            var u = f.H
                , v = Rp(f);
            p = a.M;
            q = 0;
            var w = null, y = null, x = null, z;
            if (u) {
                for (z = 0; z !== u; z++) {
                    var C = m[z];
                    if (!C.H && C.duration !== lf) {
                        if (null === x) {
                            if (l <= C.A) {
                                l = 0;
                                break a
                            }
                            x = C
                        }
                        if (C.A <= l)
                            q = z;
                        else if (null === w) {
                            w = z;
                            break
                        }
                    }
                }
                C = m[q];
                u = C.A;
                x = Ve(Ue(C.C, m[0].C), v).qa;
                0 === x && 7 === m[0].G && (!Vp(C) || br(p.C) && er(p.C, f.index, !0)) && (u = 0);
                null === w ? (v = 1,
                Pp(f) || Bo(f) !== Lp(f, !1) || (y = (w = Up(Bo(f), 1)) && Vp(w) ? f.width + w.A : f.width),
                null === y && (y = u + m[q].width)) : (v = Ve(Ue(m[w].C, m[0].C), v).qa,
                    y = m[w].A);
                br(p.A) && er(p.A, f.index, !1) && (y = f.width);
                l = Math.max(0, Math.min(1, x + (l - u) / (y - u) * (v - x)))
            } else
                l = 0
        }
        r.call(e, b, n, l, null, !1, !1, !1, 0, -1)
    }
    if (k)
        if (l = Math.max(Math.min(Math.floor(e.C * k), k - 1), 0),
            r = e.G,
            e.set(b, e.A + l, (e.C - l / k) * k, null, !1, !1, !1, 0, -1),
        r && .1 > e.C || Math.abs(Yp(hr(e, b), 0, !1, !1, !1) - c) <= g.pa)
            e.H = lf,
                e.C = 0,
                e.G = !0;
        else {
            if (r && .9 < e.C || Math.abs(Yp(hr(e, b), 1, !1, !1, !1) - c) <= g.pa)
                e.H = Re(1, 1),
                    e.C = 1,
                    e.G = !0
        }
    else
        e.G && 1 === e.C && !Pp(f) && e.set(b, e.A + 1, 0, lf, !0, !1, !1, 0, -1);
    h -= d.H + d.S;
    d.N && (c = 10 * b.A,
    h < c && (e.D = !0,
        h <= g.pa ? (e.time = Rw(a, !0, 0),
            e.G = !0) : (e.time = Rw(a, !0, h / c),
            e.G = !1)));
    d.X && (c = f.F + f.width - b.ba,
        b = 10 * b.A,
    h > c && (e.F = !0,
        c + b - h <= g.pa ? (e.time = Rw(a, !1, 1),
            e.G = !0) : (e.time = Rw(a, !1, (h - c) / b),
            e.G = !1)))
}

function jv(a, b) {
    var c = a.A
        , d = Nv(a);
    if (b.D || b.F)
        return b.time;
    var e = fr(b, c);
    return -1 !== e && d ? Fv(a, d, e, Wl(hr(b, c).O, gr(b, c))) : 0
}

function qv(a, b, c, d) {
    var e = ao(b);
    b = nn(a.A) + (c ? e.H + e.S : e.H + e.width - 10 * e.C.A);
    if (c && e.N || !c && e.X) {
        e = Nv(a);
        var f = 0;
        e && e.A.length && (c ? f = d > e.D ? (d - e.D) / (e.A[0][1] - e.D) : 0 : (c = jw(e, a.C.D.length, 0, 0),
            e = iw(e),
            f = d > e ? 1 : d > c ? (d - c) / (e - c) : 0));
        b += 10 * a.A.A * f
    }
    return b
}

function Zv(a, b, c) {
    a = a.Z;
    for (var d = b.length; d--;)
        a.A.removeEventListener("ss" + b[d], c, !1)
}

function $v(a, b, c) {
    return a.D.D ? Fv(a, a.D.D, fc(a.C.D, b.U), Wl(b, c)) : 0
}

function aw(a) {
    return (-1 === a.I ? 0 : a.P[a.I].S) + (a.pa ? 100 * a.F.C : 0)
}

function Mv(a, b) {
    return a.F.A ? Fv(a, b, a.F.wa, 0) : b.D
}

function zv(a, b) {
    -1 !== a.I && (es(a, a.D.F, a.H),
    b && O(a, 202))
}

function Nv(a) {
    return -1 === a.I ? null : a.P[a.I]
}

function Fv(a, b, c, d) {
    return b.F ? Qw(a, c, d) : jw(b, c, d, 0)
}

function Qv(a, b) {
    return -1 === a.I ? 0 : Sw(a, a.P[a.I], b)
}

function Ow(a, b) {
    return a.Ta ? a.Ta[b] || b : b
}

function tw(a) {
    return a.F.Y && !!a.C.A.length
}

function vw(a) {
    a.S && Tw(a, a.P.indexOf(a.S))
}

function Uw(a, b, c) {
    var d = a.D
        , e = a.M
        , f = au(d);
    f && Ev(d);
    kv(e) && (cr(e.C),
        cr(e.A));
    e = a.C;
    var g = a.Ca, h = 0, k;
    e.pa = 1;
    e.I = {};
    e.A.length = 0;
    e.D.length = 0;
    e.C.length = 0;
    e.G.length = 0;
    e.M = {};
    e.ba = !1;
    e.V = !1;
    e.da = !1;
    e.W = 1;
    e.X = 1;
    if (b) {
        e.pa = b.v || 1;
        e.aa = 0 !== b.bn;
        e.ka.V = 1 === b.lo;
        if (b.tempos) {
            var l = 0;
            for (k = b.tempos.length; l !== k; l++) {
                var m = b.tempos[l];
                var n = e;
                n.G.push(new Sh(m[0], m[1], m[2], m[3], m[4], m[5] || "", 1 !== m[6], !1));
                n.G.sort(Mh)
            }
        }
        $l(e);
        l = 0;
        for (k = b.rhythms.length; l < k; l++)
            m = b.rhythms[l],
                Al(e, m.id, m.val, m.dots, m.tuplet ? m.tuplet[0] : 0, m.tuplet ? m.tuplet[1] : 0);
        if (b.s)
            for (l = 0,
                     k = b.s.length; l !== k; l++)
                m = b.s[l],
                    Yk(e, m.i, 1 === m.s, !1, null);
        l = 0;
        for (k = b.tracks.length; l < k; l++) {
            m = b.tracks[l];
            h = 1 === m.gs ? 1 === h ? 2 : 1 : 0;
            n = e;
            var p = h;
            m = new Hi(n.C.length, m.name || "", m.na || "", m.i || "", "undefined" !== typeof m.midi ? m.midi : 0, "undefined" !== typeof m.vol ? m.vol / 100 : 1, m.lines || 5, m.strings || 0, m.pitches || null, "undefined" !== typeof m.tn ? m.tn : null, m.so || null, m.sm || null, m.smp || null, m.capo || 0, m.transpose || 0, 1 === m.cn, 0 !== m.ts, m.chords, p, m.h || null, m.pd || null, "undefined" !== typeof g["show_staff_t" + l] ? "0" !== g["show_staff_t" + l] : "undefined" !== typeof g.show_staff ? "0" !== g.show_staff : 0 !== m.ds, "undefined" !== typeof g["show_tab_t" + l] ? "0" !== g["show_tab_t" + l] : "undefined" !== typeof g.show_tab ? "0" !== g.show_tab : 0 !== m.dt, "undefined" !== typeof g["show_tab_t" + l] ? "2" === g["show_tab_t" + l] : "undefined" !== typeof g.show_tab ? "2" === g.show_tab : 2 === m.dt, "undefined" !== typeof g["show_chords_t" + l] ? "0" !== g["show_chords_t" + l] : "undefined" !== typeof g.show_chords ? "0" !== g.show_chords : 0 !== m.dc, "undefined" !== typeof g["show_chords_t" + l] ? -1 !== fc(["0", "1"], g["show_chords_t" + l]) : "undefined" !== typeof g.show_chords ? -1 === fc(["0", "1"], g.show_chords) : -1 === fc([0, 1], m.dc), "undefined" !== typeof g["show_lyrics_t" + l] ? "0" !== g["show_lyrics_t" + l] : "undefined" !== typeof g.show_lyrics ? "0" !== g.show_lyrics : 0 !== m.dl, "undefined" !== typeof g.show_finger ? "0" !== g.show_finger : 0 !== m.df, "undefined" !== typeof g.show_sticking ? "0" !== g.show_sticking : 0 !== m.dst, 0 !== m.vk, 1 === m.vi, 1 === m.vtrb, 1 === m.vtpt);
            n.C.push(m);
            p && (n.ba = !0);
            nf(n.ja, 5, m)
        }
        g = b.bars;
        l = 0;
        for (k = g.length; l < k; l++) {
            l !== k - 1 && (g[l + 1].section || g[l + 1].sectionltr) && (g[l].doublebar = 1);
            var q = e;
            n = l;
            h = g[l];
            m = null;
            var r = h.dirs || null;
            if (r) {
                m = [];
                for (var u = 0, v = r.length; u !== v; u++) {
                    var w = r[u];
                    w instanceof Array ? (p = w[0],
                        w = !!w[1]) : (p = w,
                        w = !0);
                    m.push(new fi(p, w))
                }
            }
            p = q;
            h = new Zl(p, n, "undefined" === typeof h.n ? -1 : h.n, h.time[0], h.time[1], 1 === h.nt, h.tg || null, h.key, 1 === h.startrepeat, h.endrepeat || null, m, 1 === h.doublebar, h.altendings || null, h.tracks, h.tf || null, 1 === h.p, h.c || null, h.l || h.sectionltr || null, h.s || h.section || null, h.b || 0);
            p.A.splice(n, 0, h)
        }
        am(e, !1)
    }
    cm(e);
    b ? Wv(d) : P(a, "We couldn't load the notation. Try reloading the page?", !0, 1);
    Cn(a.A);
    co(a.A);
    c && (O(a, 63),
        vf(a.ia, 4));
    O(a, 32);
    f && Av(d)
}

function Vw(a, b) {
    O(a, 33);
    console.log('b', b)
    if(b.includes('token and cookie')){
        return;
    }
    uc("GET", b, null, c => {
            Uw(a, c, !0)
        }
        , () => {
            Uw(a, null, !0)
        }
    )
}

function Ww(a, b) {
    b !== a.F.G && (a.F.G = b,
        O(a, 151))
}

function Xw(a, b) {
    if (xn(a.A, b) && !au(a.D)) {
        a: {
            for (var c = a.A.aa, d = 0, e = c.length; d !== e; d++)
                if (c[d].F === b) {
                    b = c[d];
                    break a
                }
            b = null
        }
        b && b.A.length && iv(a.D, b.A[0], lf, !1, !1)
    }
}

function Yw(a) {
    a = a.C.C;
    for (var b = [], c = a.length; c--;)
        a[c].isVisible() && b.push(c);
    return b
}

function Zw(a, b) {
    if (null !== b.xa)
        return b.xa;
    var c = b.A, d;
    if (c.length && (c = ka[fs(a, c[0])],
    "object" == typeof c && (d = c.length))) {
        if (1 < d)
            for (a = 0; a !== d; a++)
                if (0 === c[a] % 3)
                    return c[a];
        return c[0]
    }
    return (b = Ti(b, a.C, !0)) ? Zw(a, b) : 0
}

function $w(a) {
    return !a.N && !a.F.va && !a.A.Y
}

function ax(a, b, c, d, e) {
    var f = a.A
        , g = f.ka
        , h = f.ja
        , k = null === b
        , l = -1
        , m = -1;
    if (!k) {
        for (; Nl(b.O);)
            b = Co(b);
        for (; c.index !== c.A.G.length - 1 && Nl(Bo(c).O);)
            c = Bo(c);
        l = b.O.U;
        m = c.O.U + 1
    }
    if (l !== g || m !== h)
        if (k || $w(a))
            f.ka = l,
                f.ja = m,
                a.F.wa = b ? Kp(b, -1) : -1,
                a.F.xa = c ? Kp(c, -1) : -1,
                a.F.A = -1 !== l && -1 !== m,
                a.Ia = e,
                Ev(a.D),
                cr(a.H),
                gv(a.M),
                Nn(f, 0),
                ln(f, 0),
                bm(a.C),
                Fm(f, !0),
                k && d ? (b = Jn(f, a.C.A[g]),
                    mv(a.M, b.index, 0, !0, !1, !1, 0, Jn(f, a.C.A[h - 1]).index, 1, !0, !1, !1, 0),
                    iv(a.D, b, lf, !0, !1)) : Pv(a.D, 0),
                O(a, 136, e)
}

function bx(a, b, c, d) {
    var e = a.A;
    e.C.A && (e.ka = -1,
        e.ja = -1,
        e.C.A = !1,
        Fm(e, !1));
    ax(a, Jn(e, e.D.A[b]), Jn(e, e.D.A[c]), !0, d)
}

function cx(a) {
    var b = a.M;
    pv(b) && ax(a, hr(b.C, a.A), hr(b.A, a.A), !1, "")
}

function Sw(a, b, c) {
    return b.F || a.F.A || c ? xs(a, b) - Mv(a, b) : b.C.duration
}

function dx(a, b) {
    var c = a.C.A.length
        , d = b.Pa
        , e = b.Na;
    if (d >= c || e >= c)
        P(a, "The music has been edited since this clip was created.", !0, 2),
        d >= c && (d = c - 1),
        e >= c && (e = c - 1);
    null === b.D && null === b.F || po(a.A, b.D, b.F);
    bx(a, d, e, b.A);
    -1 === b.C ? vw(a) : null !== b.C && (b = ex(a, b.C)) && Tw(a, b.index)
}

function fx(a) {
    return !!a.va && window.soundslice.isNonfree
}

function gx(a, b) {
    var c = a.D.F;
    if (Es(a)) {
        var d = Fs(a);
        a = Gs(a);
        if (c < d || c > a)
            c = d;
        for (; 0 < b;)
            b > a - c ? (b -= a - c,
                c = d) : (c += b,
                b = 0);
        return c
    }
    return c + b
}

function hx(a, b) {
    if (!(a.aa || !br(a.H) || a.H.A >= b.A.G.length)) {
        var c = b.A
            , d = a.H
            , e = c.F
            , f = hr(d, c);
        if (5 === e)
            xn(c, ao(f).F);
        else if (!(2 === c.F && 3 === c.C.X || 2 !== c.F && 3 === c.C.ba)) {
            var g = nn(c)
                , h = c.H
                , k = c.P
                , l = -Mn(c)
                , m = au(a.D)
                , n = a.M;
            if (2 === e)
                k = c.C.X,
                    l = cu(a, c, d, !1, !0),
                    1 === k ? -1 === b.I && (0 > l || l + 150 > h || !d.D && f.F + f.width + g > h) && ix(b, (l - g) / (c.N - h)) : ln(c, (l - g - (2 === k ? 100 : h / 2)) / (c.N - h));
            else if (!m && c.T)
                d = a.G.N(),
                (0 > d || d > k) && jx(b, (d + l - 50) / (c.X - k), 200);
            else if (!b.C) {
                g = c.S ? 4 : c.C.ba;
                if (m) {
                    m = a.wa;
                    var p = gx(a, 1);
                    e = gx(a, .35);
                    h = 3;
                    es(a, p, m);
                    if (!br(m) || m.A >= c.G.length)
                        return;
                    p = hr(m, c);
                    es(a, e, m);
                    if (!br(m) || m.A >= c.G.length)
                        return;
                    a = hr(m, c);
                    1 === g ? ao(a).M < l ? h = 2 : ao(p).M + p.height > l + k && (h = 1) : h = 4 === g ? 4 : 2;
                    if (1 === h && p.C !== f.C) {
                        jx(b, $n(c, p, h, k), 1E3);
                        return
                    }
                    if ((2 === h || 4 === h) && a.C !== f.C) {
                        jx(b, $n(c, a, h, k), 350);
                        return
                    }
                }
                (ao(f).M < l || ao(f).M + f.height > l + k) && (!kv(n) || dr(d, n.C) && dr(n.A, d)) && jx(b, $n(c, f, 4 === g ? 4 : 2, k), 350)
            }
        }
    }
}

function Rw(a, b, c) {
    var d = Nv(a)
        , e = 0;
    d && d.A.length && (b ? e = d.D + c * (d.A[0][1] - d.D) : (a = jw(d, a.C.D.length, 0, 0),
        e = a + c * (iw(d) - a)));
    return e
}

function Tw(a, b) {
    if (!(a.I === b || 0 > b || b >= a.P.length)) {
        var c = a.D
            , d = au(c)
            , e = a.I
            , f = -1 === e
            , g = a.wa
            , h = c.G
            , k = c.volume;
        d && Ev(c);
        Tv(c.H, a);
        f || es(a, c.F, g);
        f || a.P[e].C.pa();
        a.I = b;
        f = a.P[b];
        e = f.C;
        a.ma = e.T;
        c.D = f;
        c.C = e;
        g = jv(a, g);
        g < f.D && (g = f.D);
        a.H.D = !1;
        a.H.F = !1;
        c.F = g;
        e.ba(g, l => {
                l.Va(h);
                l.$a(aw(a));
                l.setVolume(k);
                d && Av(c)
            }
        );
        rv(a.M);
        O(a, 68, b)
    }
}

function ex(a, b) {
    a = a.P;
    for (var c = a.length, d; c--;)
        if (d = a[c],
        d.G === b)
            return d;
    return null
}

function kx(a, b, c, d, e, f, g, h, k, l, m) {
    var n = a.P.length;
    b = new lw(a.Z, b, c, d, n, e, f, g, h, k, l);
    l.C = n;
    a.P.push(b);
    O(a, 2);
    m && Tw(a, n);
    return b
}

function lx(a) {
    var b = 0;
    a = a.P;
    for (var c = a.length; c--;)
        a[c].F || b++;
    return b
}

function mx(a) {
    return !!a.S && a.I === a.S.index
}

function Qw(a, b, c) {
    a = a.C;
    var d = a.A, e = a.D, f = 0, g;
    if (d.length) {
        for (g = 0; g < b; g++)
            f += km(a, g, 0, 1);
        d[e[b]] && (f += km(a, b, 0, c))
    }
    return f
}

function Pw(a, b, c, d) {
    var e = a.A, f = b.A, g = a.C.D, h = f.length, k = a.C.A.length - 1, l = g.length - 1, m = null, n = null, p;
    if (0 === h || !g.length)
        return cr(d),
            -1;
    for (p = 0; p < h; p++) {
        var q = f[p];
        if (q[1] > c) {
            if (0 === p)
                return d.set(e, 0, 0, lf, !1, !0, !1, c, -1),
                    -1;
            m = f[p - 1];
            n = q;
            break
        }
    }
    if (null === m && f[h - 1][0] > l || null !== m && m[0] > l)
        return d.set(e, e.G.length - 1, 1, mf, !1, !1, !0, c, -1),
            -1;
    null === m && (n = iw(b),
        m = f[h - 1],
        n = [m[0], Math.max(m[1], n), 480]);
    if (dw(m))
        return cr(d),
            -1;
    f = bw(m);
    h = bw(n);
    m[0] === n[0] ? h = n[1] > m[1] ? h - f : 0 : (h = 1 - f + h,
    n[0] > m[0] && (h += n[0] - m[0] - 1));
    c = f + h * (c - m[1]) / (n[1] - m[1]);
    m = m[0] + (c | 0);
    c %= 1;
    0 === c && m === g.length && (m--,
        c = 1);
    a.F.A && (l = a.F.xa);
    if (-1 !== l)
        for (; m > l || g[m] > k;)
            m--,
                c = 1;
    Ln(e, m, c, d);
    return m
}

function nx(a, b) {
    b !== a.ja && (a.ja = b,
    !b && a.S && is(a.S.C, !0),
        O(a, 228))
}

function ox(a, b) {
    b !== a.xa && (a.xa = b,
    a.S && is(a.S.C, !0),
        O(a, 159))
}

function px(a, b, c) {
    var d = b.A
        , e = a.C.D.length;
    return d.length && e && !a.F.A ? c ? Math.max(0, d[0][1] - b.D) : Math.max(0, iw(b) - jw(b, e, 0, 0)) : 0
}

function qx(a, b) {
    a.A.Ca ? b() : a.assign([146], () => {
            b()
        }
    )
}

class rx {
    constructor(a, b, c, d, e, f, g, h, k, l) {
        this.Ca = a;
        this.Z = b;
        this.Y = c;
        this.F = new tf;
        rf(this.F, b);
        this.F.da = k;
        this.F.F = l;
        this.F.ra = f;
        this.D = new Xv(this);
        this.M = new wv(this);
        this.C = new nm(b, this.F);
        this.G = null;
        this.T = d;
        this.va = e;
        this.Ta = g;
        this.X = this.$ = this.V = this.N = !1;
        this.pa = !0;
        this.Fa = this.da = this.ka = !1;
        this.Ka = this.Da = "";
        this.La = !1;
        this.ta = this.ba = 0;
        this.Ga = [];
        this.Ia = "";
        this.aa = !1;
        this.ya = !0;
        this.ia = new wf(b);
        this.H = new ir;
        this.P = [];
        this.I = -1;
        this.S = null;
        this.ma = !0;
        this.ra = h;
        this.ja = !1;
        this.xa = !0;
        this.W = new zr;
        this.A = new wo(b, c, this.ia, this.C, this.F, null);
        this.A.F = 4;
        this.Oa = [];
        this.wa = new ir;
        gu(this, [47, 52, 68], () => {
                var m = this.A;
                var n = 0
                    , p = 0
                    , q = Nv(this);
                !m.W && q && 1 < q.A.length && (p = px(this, q, !0),
                    n = 1 <= p ? p : 0,
                    p = px(this, q, !1),
                    p = 4 <= p ? p : 0);
                m.xa !== n || m.wa !== p ? (m.xa = n,
                    m.wa = p,
                    m = !0) : m = !1;
                m && Fm(this.A, !0)
            }
        )
    }

    assign(a) {
        this.Z.assign.apply(this.Z, arguments)
    }
}

function ix(a, b) {
    a.I = b;
    var c = a.A
        , d = c.Z
        , e = b - c.Z
        , f = (new Date).getTime();
    a.D && clearInterval(a.D);
    a.D = setInterval(() => {
            var g = (new Date).getTime() - f;
            200 < g && (g = 200);
            ln(c, -e / 2 * (Math.cos(Math.PI * g / 200) - 1) + d);
            200 === g && (a.D && clearInterval(a.D),
                a.D = 0,
                a.I = -1)
        }
        , 50)
}

function jx(a, b, c) {
    var d = a.A
        , e = d.$
        , f = b - d.$
        , g = (new Date).getTime();
    a.C && clearInterval(a.C);
    a.C = setInterval(() => {
            var h = (new Date).getTime() - g;
            h > c && (h = c);
            Nn(d, -f / 2 * (Math.cos(Math.PI * h / c) - 1) + e);
            h === c && (a.C && clearInterval(a.C),
                a.C = 0)
        }
        , 50)
}

function sx(a, b) {
    return a.G.getElementsByClassName(b)[0]
}

function tx(a) {
    var b = Va(a.G)
        , c = b.width | 0;
    b = b.height;
    c && b && en(a.A, c, b)
}

function ux(a) {
    a.N && a.V.clearTimeout(a.N);
    a.N = setTimeout(a.T, 10)
}

function vx(a) {
    a.P || tx(a)
}

class wx {
    constructor(a, b, c, d) {
        var e = new pf(d.document);
        this.A = b;
        b.ia = e;
        this.G = c;
        this.V = d;
        this.S = e;
        this.I = -1;
        this.C = this.D = 0;
        this.F = new $u(a, e, b, new Ee(sx(this, "notecanvas"), a.T));
        var f = sx(this, "scrollland");
        this.M = new ov(a, e, b, sx(this, "mouseland"), d.document.body, sx(this, "loophand1"), sx(this, "loophand2"), sx(this, "heightspacer"), sx(this, "looper"), sx(this, "loophand-buttons"), f);
        this.H = new fu(a, e, b, sx(this, "playhead"), sx(this, "barbg"));
        this.P = !1;
        this.N = 0;
        this.T = () => {
            tx(this)
        }
        ;
        tx(this);
        "ResizeObserver" in d ? ((new d.ResizeObserver(() => {
                ux(this)
            }
        )).observe(this.G),
            this.P = !0) : I(d, "resize SS_RESIZE onfullscreenchange onwebkitfullscreenchange onmozfullscreenchange MSFullscreenChange", () => {
                ux(this)
            }
        );
        I(f, "scroll", () => {
                var h = this.M
                    , k = !!this.C
                    , l = !!this.D
                    , m = h.ba
                    , n = h.A;
                h.F = !0;
                k || Nn(n, m.scrollTop / (n.X - m.clientHeight));
                l || ln(n, n.N === m.clientWidth ? 0 : m.scrollLeft / (n.N - m.clientWidth));
                h.F = !1
            }
        );
        var g = 1;
        I(c, "wheel", h => {
                h.ctrlKey && (h.preventDefault(),
                    gn(b, b.M - b.M * h.deltaY / 100, !0))
            }
            , "gesturestart", h => {
                h.preventDefault();
                g = b.M
            }
            , "gesturechange", h => {
                h.preventDefault();
                gn(b, g * h.scale, !0)
            }
        );
        e.assign([200], () => {
                ux(this)
            }
        );
        of(e, [200], () => {
                E(this.G, "horizontal", 2 === b.F)
            }
        );
        a.assign([202], () => {
                hx(a, this)
            }
        );
        b.S && gn(b, b.H / b.S.C, !0)
    }
}

function xx(a, b) {
    document.fonts.ready.then(() => {
        document.fonts.load("9px soundslice").then(c => {
                console.log(c.length, 'c.length')
                    c.length ? (c = b.A,
                        vf(c.ya, 1),
                        Fm(c, !0)) : yx(b)
                }
                , () => {
                    yx(b)
                }
            )
        }
    )
}

function yx(a) {
    P(a, "Couldn\u2019t load the music font.", !0, 1)
}

var zx = 0;
const Ax = " Keyboard Fretboard Violin   Trumpet Trombone".split(" ")
    , Bx = " keyboard fretboard violin   trumpet trombone".split(" ");

function Ts(a, b) {
    return a.H.getElementsByClassName(b)[0]
}

function Cx(a) {
    var b = a.A
        , c = a.D
        , d = b.aa
        , e = a.G
        , f = a.xa
        , g = tt("video-wrapper")
        , h = Ts(a, "video-container")
        , k = tt("video-sidebar")
        , l = a.Z ? null : tt("show-sidebar")
        , m = f.clientWidth;
    f = b.D.C ? b.D.C.aspectRatio() : Hr;
    !d && (600 > m || 3 === a.X) ? (d = b.A.H,
        (b.F.M = a.T) ? (b = a.Fa ? a.da : a.Ga,
            c = a.S ? c.innerHeight - tt("controlbar").clientHeight : tt("notation-and-video-wrapper").clientHeight,
            m = !1,
            B(e, "topvideo"),
            B(g, "narrow"),
        150 > b && (b = 150),
        100 > c - b && (b = c - 100),
        b > d / f && (b = d / f,
            m = !0),
            a.da = b,
            Db(g, b),
        l && (l.style.top = "0px"),
            m ? h.style.width = "100%" : mb(h, Math.floor(b * f)),
        a.S && (e.style.top = b + "px",
            e.style.height = `calc(100% - ${b}px)`)) : (g.removeAttribute("style"),
            h.removeAttribute("style"),
        a.S && e.removeAttribute("style")),
    k && k.removeAttribute("style")) : (g.removeAttribute("style"),
        h.removeAttribute("style"),
    a.S && e.removeAttribute("style"),
        b.F.M = !1,
    a.T && (D(e, "topvideo"),
        D(g, "narrow"),
    k && !d && (h = a.Da ? a.aa : a.va,
        150 > h ? h = 150 : 200 > m - h && (h = m - 200),
    h / f > b.A.P - 40 && (h = (b.A.P - 40) * f),
        mb(k, h),
        Db(g, h / f),
        a.ja = h,
        a.aa = h,
        vx(a.C),
    l && (l.style.top = h / f + "px"))));
    !a.T && k && 0 !== a.ja && (k.style.width = 0,
        a.ja = 0);
    E(e, "video-active", a.T);
    g = a.S;
    if (g !== a.Ca) {
        e = e.getElementsByClassName("jsfliptip");
        for (k = e.length; k--;)
            E(e[k], "downward", g);
        a.Ca = g
    }
    vx(a.C)
}

function Dx(a) {
    var b = a.W
        , c = a.A;
    a = 1 === b || 3 === b && a.D.matchMedia && a.D.matchMedia("(prefers-color-scheme: dark)").matches;
    a !== c.F.I && (c.F.I = a,
        c.F.ta = a ? "35,36,42" : "255,255,255",
        O(c, 167))
}

function Ex(a) {
    var b = a.H.clientWidth | 0
        , c = a.H.clientHeight | 0;
    if (b !== a.ka || c !== a.wa)
        a.ka = b,
            a.wa = c,
            O(a.A, 195)
}

function Fx(a) {
    a.ra || (requestAnimationFrame(a.Ka),
        a.ra = !0)
}

function Gx(a, b, c) {
    var d = a.A;
    if (d.aa !== b) {
        var e = tt("appwrapper");
        (d.aa = b) ? (a.ya = a.I,
            B(e, "notationless"),
            Hx(a),
        c && !a.A.N && Ix(a, 4)) : (D(e, "notationless"),
            Ix(a, a.ya),
            vx(a.C),
            Fm(d.A, !0));
        O(d, 37)
    }
}

function Jx(a) {
    a = a.A.P[680 <= a.G.offsetWidth ? a.ba : a.A.I];
    var b = tt("realrecname");
    a && (tt("realrecimage").innerHTML = Kx(a),
        b.innerText = a.name,
        b.setAttribute("data-backend", a.index))
}

function Lx(a) {
    var b = a.A.ma
        , c = 680 <= a.G.offsetWidth
        , d = tt("toggle-container");
    a: {
        var e = a.A.P;
        for (var f = e.length, g = 0; f--;)
            if ((e[f].F ? tw(a.A) : 1) && 1 < ++g) {
                e = !0;
                break a
            }
        e = !1
    }
    E(d, "disabled", !e);
    E(tt("toggle-container"), "nosynth", !tw(a.A));
    E(tt("midi-toggle"), "multiple", Mx(a));
    E(tt("usesynth"), "toggle-active", c && b);
    E(tt("realrectoggle"), "toggle-active", !c || !b);
    Jx(a)
}

function Nx(a) {
    a = a.A;
    var b = a.C;
    document.title = (a.N ? "Edit: " : "") + (b.H || "Untitled") + (b.N ? " - " + b.N : "") + (soundslice.is_ss ? " | Soundslice" : "")
}

function Ox(a) {
    var b = Ts(a, "artist-info");
    a = Xa(a.A.C.H);
    b.innerHTML = a
}

function Px(a) {
    var b = a.A.C;
    Ts(a, "postplayer-title-text").innerHTML = Xa(b.H) + (b.N ? " - " + Xa(b.N) : "");
    Ts(a, "post-description").innerHTML = Lt(Xa(b.T)).replace(/\n/g, "<br>")
}

function Ix(a, b) {
    if (b !== a.I) {
        Qx(a);
        switch (b) {
            case 1:
                R(a, "keyboard", 113, null);
                break;
            case 2:
            case 3:
                R(a, "fretboard", 111, 3 === b);
                break;
            case 7:
                R(a, "trombone", 126, null);
                break;
            case 6:
                R(a, "trumpet", 124, null);
                break;
            case 4:
                if (!a.V || !a.ia)
                    return;
                Kw(a.V);
                break;
            case 5:
                if (!a.Y)
                    return;
                var c = a.Y;
                c.isActive || (rw(c),
                    sw(c),
                    B(c.C, "active"),
                    c.isActive = !0);
                break;
            default:
                return
        }
        a.I = b;
        O(a.A, 76, b)
    }
}

function Rx(a) {
    return !!a.A.va && window.soundslice.isNonfree
}

function Sx(a) {
    a.pa && a.D.clearTimeout(a.pa);
    a.pa = setTimeout(a.Oa, 2E3)
}

function Tx(a, b) {
    var c = a.A
        , d = c.F;
    (b.u !== c.va || d.ra && b.lang !== d.ra) && a.F.location.reload();
    var e = c.A
        , f = c.C
        , g = c.Ca;
    b.ds && (c.D.G = b.ds);
    "undefined" !== typeof b.vo && (c.D.volume = b.vo);
    c.Da = b.fu || "";
    c.Ka = b.fn || "";
    c.La = !!b.pf;
    c.ba = b.cid || 0;
    c.ta = b.cc || 0;
    c.Ga = b.g && b.g.length ? b.g : [];
    c.assign([63], () => {
            (b.na || b["in"]) && po(c.A, b.na, b["in"])
        }
    );
    c.da = !!b.owns;
    var h = "0" === g.enable_synth;
    d.Y = !!b.sy && !h;
    d.D = "undefined" !== typeof b.aup ? b.aup : null;
    d.P = !!d.D;
    b.eo && d.load(c.Z, b.eo);
    f.ma = b.id || 0;
    f.Z = b.slug || "";
    f.F = b.sh || "";
    f.H = b.name || "";
    f.N = b.a || "";
    f.S = b.v || 0;
    f.Y = b.sn;
    f.$ = b.s;
    f.ia = b.es;
    f.T = b.pd || "";
    f.P = !!b.pp;
    if (b.d) {
        var k = Ux(a, f.F);
        k && k.scoreJSON && k.scoreVersion === f.S ? (Uw(c, k.scoreJSON, !0),
            O(c, 180, k.changeCount)) : Vw(c, b.d)
    }
    c.ka = !!b.cp;
    d.T = !!b.st;
    qn(e, b.ns);
    c.ya = b.n && "0" !== g.show_notation;
    c.ya && xx(a.F, c);
    b.l && Om(e, b.l);
    b.pw && on(e, b.pw, !1);
    b.po && mn(e, !0, !1);
    c.Fa = !!b.pc;
    b.pt && du(a.C.H, b.pt);
    b.pm && Vx(a, b.pm);
    !1 === b.hn && Ww(c, !1);
    b.hb && eu(a.C.H, !0);
    b.dm && Wx(a, b.dm);
    b.m && (nx(c, !0),
        ox(c, 1 === b.m));
    b.ci && Gv(c.D, !0);
    b.cip && Hv(c.D, !0);
    b.cil && Jv(c.D, b.cil);
    b.hs && (d.X = b.hs);
    b.vs && (d.ba = b.vs);
    "undefined" !== typeof b.rl && Pm(e, b.rl);
    -1 === b.sw ? dn(e, !0) : b.sw && (dn(e, !1),
        On(e, b.sw));
    d = !c.ya || "1" === g.notationless;
    e = b.r;
    f = e.length;
    k = f - 1;
    var l = "1" === g.defer
        , m = "2" === g.defer
        , n = 0
        , p = -1;
    b.cl && (xr(c.W, b.cl),
        O(c, 181),
        c.assign([136], r => {
                a: {
                    r = r.data;
                    var u = a.D;
                    if (u.history.replaceState) {
                        var v = u.location.href;
                        try {
                            var w = new URL(v)
                        } catch (y) {
                            break a
                        }
                        r ? w.searchParams.set("clip", r) : w.searchParams.delete("clip");
                        w.href !== v && u.history.replaceState(null, "", w.href)
                    }
                }
            }
        ));
    Xx(a, b);
    if (b.synthurl && !d) {
        var q = g.synth_display_name;
        if (!q || 30 < q.length)
            q = Ow(c, "Synthetic");
        c.S = kx(c, 0, 0, q, "", null, null, null, 0, new Sr(c, b.synthurl, !h), !0);
        k++;
        n++
    }
    "undefined" !== typeof g.recording_idx && /^\d+$/.test(g.recording_idx) ? p = parseInt(g.recording_idx, 10) : "undefined" !== typeof b.ri && (p = b.ri);
    -1 !== p && p <= k && (k = p);
    for (h = 0; h !== f; h++)
        p = e[h],
            Yx(a, p.s, p.id, p.name, p.sync, p.sr, p.cs, p.ce, p.ps || 0, m ? !1 : h + n === k ? l : !0, p, !1);
    Tw(c, k);
    d && Gx(a, !0, "0" !== g.waveform);
    g.clip && qx(c, () => {
            var r = yr(c.W, g.clip);
            r && dx(c, r)
        }
    );
    b.er ? O(c, 118) : b.oim && O(c, 134);
    vf(c.ia, 2);
    O(c, 230)
}

function Zx(a) {
    let d = {
        "id": 0,
        "slug": "",
        "sh": "",
        "name": "Uploaded file",
        "a": "",
        "cp": false,
        "st": false,
        "s": null,
        "es": null,
        "n": true,
        "d": "/parse_xml_test/examples/slice/scripts/3.json",
        "r": [],
        "synthurl": "/parse_xml_test/examples/slice/scripts/synth.en.json",
        "u": null,
        "lang": "en",
        "owns": false,
        "v": 0,
        "sn": true,
        "pd": "",
        "pp": false,
        "ap": 0,
        "pfc": 0,
        "sy": true,
        "cc": 0,
        "ns": 0
    };
    Tx(a, d)
    // var b = soundslice.scoredata || window.location.pathname + "scoredata/"
    //     , c = a.A;
    // b += `?width=${a.D.innerWidth}`;
    // O(c, 229);
    // uc("GET", b, null, d=>{
    //         Tx(a, d)
    //     }
    //     , ()=>{
    //         P(c, "We couldn't load the notation. Try reloading the page?", !0, 1);
    //         a.F.title = Ow(c, "Page not found");
    //         Ts(a, "artist-info").innerHTML = Ow(c, "Page not found")
    //     }
    // )

}

function Ux(a, b) {
    try {
        var c = a.D.localStorage.getItem(b);
        return c ? JSON.parse(c) : null
    } catch (d) {
        return null
    }
}

function Vx(a, b) {
    var c = a.A
        , d = c.F
        , e = ""
        , f = ""
        , g = "";
    switch (b) {
        case 1:
            f = "#FC5D2B";
            g = "#EA6B24";
            break;
        case 2:
            e = "color-subtle";
            f = "#FC5D2B";
            g = "#43444e";
            break;
        case 3:
            e = "color-blue";
            f = "#0079FF";
            g = "#1a73e8";
            break;
        case 4:
            e = "color-yellow",
                g = f = "#F0B302"
    }
    f && (d.N = f);
    g && qf(d, c.Z, g);
    Ja(a.$, e, ["color-subtle", "color-blue", "color-yellow"]);
    a.ma = b;
    O(c, 153)
}

function Wx(a, b) {
    b !== a.W && (a.W = b,
        Dx(a),
        O(a.A, 168))
}

function Xx(a, b) {
    function c() {
        a: {
            var G = 1E3 * d.D.F;
            for (var W = C.C, T = W.length, S; T--;) {
                S = W[T];
                if (S.endTime > G && S.startTime <= G) {
                    G = S.text;
                    break a
                }
                if (S.endTime < G)
                    break
            }
            G = ""
        }
        G !== F && (z.innerHTML = Xa(G),
            F = G)
    }

    var d = a.A
        , e = d.Ca
        , f = d.C
        , g = a.G
        , h = Ts(a, "playcontainer")
        , k = tt("togglenotation")
        , l = !d.da || d.ba ? null : t("add-notation-from-recording")
        , m = !d.da || d.ba ? null : t("editor-on-link")
        , n = d.ya
        , p = "0" !== e.settings
        , q = b.ch
        , r = !m;
    m && (B(m, "active"),
        m.href = `${dm(f)}edit/`);
    l && (gu(d, [20, 32], () => {
            E(l, "active", !d.N && !f.A.length && 0 !== (d.ia.status & 4))
        }
    ),
        J(l, () => {
                r ? O(d, 135) : window.location = `${dm(f)}edit/`
            }
        ));
    m = a.F.querySelectorAll("slice-practice-lists");
    m.length && m[0].setAttribute("slice", f.F);
    b.sc ? $x(a, b.sc) : q && ay(a, q);
    b.cm && by(a);
    b.ph && (a.Z = b.ph,
        cy(a, b.ls),
        R(a, "practice", 133, b.rs),
        R(a, "practicelist", 193, b.plsh));
    "0" === e.vfs && (n = !1);
    p || B(g, "nosettings");
    dy(a);
    ey(a);
    fy(a);
    gy(a);
    hy(a);
    iy(a);
    Nx(a);
    Ox(a);
    jy(a);
    ky(a);
    ly(a);
    my(a);
    ny(a);
    oy(a);
    p && py(a);
    gu(d, [230], () => {
            if (-1 === a.ba)
                for (var G = a.A.P, W = G.length; W--;)
                    if (G[W].F ? tw(a.A) : 1) {
                        a.ba = W;
                        Jx(a);
                        break
                    }
        }
    );
    d.assign([224], G => {
            G = G.data;
            E(h, "withcountin", G);
            E(tt("loophand-countin"), "active", G)
        }
    );
    m = e.play_type;
    "2" === m ? Kv(d.D, !0) : "3" === m && Iv(d.D);
    I(window, "resize", () => {
            qy()
        }
    );
    m = () => {
        Qx(a)
    }
    ;
    for (var u = document.getElementsByClassName("close-viz"), v = u.length; v--;)
        I(u[v], "click", m);
    var w = tt("instbuttons");
    m = G => {
        G = Ta(G.target, "data-inst");
        null !== G && (G = parseInt(G, 10),
            G === a.I ? Qx(a) : Ix(a, G),
            Sa())
    }
    ;
    I(w, "click", m);
    I(tt("mobile-settings-section"), "click", m);
    I(tt("toggle-waveform"), "click", () => {
            4 === a.I ? Qx(a) : Ix(a, 4)
        }
    );
    d.assign([68, 32, 37, 5, 216, 222, 1], () => {
            ry(a)
        }
        , [26], () => {
            ry(a);
            "1" === e.keyboard && d.assign([32], () => {
                    Ix(a, 1)
                }
            );
            An(d.A) && "1" === e.lo && Fn(d.A, !0);
            a.ia && "1" === e.waveform && (ry(a),
                Ix(a, 4))
        }
        , [27], () => {
            ry(a);
            "1" === e.fretboard && Ix(a, 2)
        }
        , [29], () => {
            ry(a);
            "1" === e.violin && Ix(a, 3)
        }
        , [76], G => {
            G = G.data;
            for (var W = w.getElementsByTagName("button"), T = W.length, S, V; T--;)
                S = W[T],
                    V = parseInt(S.getAttribute("data-inst"), 10),
                V === G && B(S, "active");
            vx(a.C)
        }
        , [75], G => {
            G = G.data;
            for (var W = w.getElementsByTagName("button"), T = W.length, S; T--;)
                S = W[T],
                    S = parseInt(S.getAttribute("data-inst"), 10),
                S === G && D(W[T], "active");
            vx(a.C)
        }
    );
    d.assign([68], () => {
            a.T = Nv(d).C.P;
            Fx(a)
        }
        , [43], () => {
            B(tt("video-icons"), "playing")
        }
        , [40], () => {
            D(tt("video-icons"), "playing")
        }
    );
    var y = tt("subtitlenav")
        , x = tt("subtitleswitch")
        , z = tt("subtitlecues")
        , C = null
        , F = "";
    d.assign([68, 58, 70], () => {
            if (-1 !== d.I) {
                var G = Nv(d);
                G.C.P && (x.innerHTML = Xa(-1 === G.H ? "Subtitles off" : `Subtitles on (${G.N[G.H].D})`),
                    E(y, "active", null !== G.N));
                if (G.C.P && -1 !== G.H) {
                    var W = G.H;
                    C = -1 === W ? null : G.N[W];
                    c();
                    d.assign([67, 51], c);
                    B(z, "active");
                    B(g, "subtitles-active")
                } else
                    C = null,
                        Zv(d, [67, 51], c),
                        D(z, "active"),
                        D(g, "subtitles-active");
                vx(a.C)
            }
        }
    );
    J(x, () => {
            var G = Nv(d);
            if (G.N) {
                var W = G.H;
                G.H = W === G.N.length - 1 ? -1 : W + 1;
                -1 !== G.H && G.N[G.H].A && mw(G.N[G.H]);
                nf(G.P, 70)
            }
        }
    );
    p && sy(a);
    if (!d.aa) {
        var H = tt("video-wrapper"), N = tt("vidsizer"), Q, L;
        d.assign([43], () => {
                B(N, "playing")
            }
            , [40], () => {
                D(N, "playing")
            }
        );
        id(N, N, (G, W, T) => {
                T.preventDefault();
                B(H, "resizing");
                d.F.M ? (L = a.da,
                    Q = W,
                    document.body.style.cursor = "row-resize",
                    a.X = 3) : (L = a.aa,
                    Q = G,
                    document.body.style.cursor = "col-resize",
                    a.X = 2)
            }
            , (G, W) => {
                d.F.M ? (G = L + W - Q,
                    a.Fa = !0,
                    a.da = G) : (G = L + G - Q,
                    a.Da = !0,
                    a.aa = G);
                Fx(a)
            }
            , () => {
                document.body.style.cursor = "default";
                D(H, "resizing")
            }
            , !1)
    }
    ty(a);
    uy(a) && vy(a);
    n ? J(k, () => {
            Gx(a, !d.aa, !0)
        }
    ) : D(k, "active");
    k = tt("sliceback");
    n = "";
    p = e.from;
    k && (b.pr ? n = n + '<a href="/practice/" class="slice-breadcrumb">Practice</a><span class="slice-breadcrumb-divider">/</span><a href="' + (b.pul + '" class="slice-breadcrumb">' + Xa(b.pr) + "</a>") : d.da ? (n = '<a href="/manage/" class="slice-breadcrumb">Slices</a>',
    d.Da && (n = n + '<span class="slice-breadcrumb-divider folder-breadcrumb-divider">/</span><a href="' + (d.Da + '" class="slice-breadcrumb folder-breadcrumb truncate-text">' + d.Ka + "</a>"))) : n = d.ba ? n + `<a class="slice-breadcrumb" href="/courses/${d.ba}/">Overview</a>` : !q || "channel" !== p && "community" !== p && "search" !== p ? q && "feed" === p ? n + '<a class="slice-breadcrumb" href="/channels/timeline/">Your feed</a>' : n + '<a class="slice-breadcrumb" href="/"><span class="back-arrow">\u2190</span> Back <span class="only6col">to library</span></a>' : n + ('<a href="/community/" class="slice-breadcrumb truncate-text">Community</a> <span class="slice-breadcrumb-divider">/</span> <a class="slice-breadcrumb" href="' + q.uu + '">' + q.un + "</a>"),
        n = n + '<span class="slice-breadcrumb-divider">/</span><div id="editbar-slice-title" class="slice-title-text truncate-text" title="' + (Xa(f.H) + '">' + Xa(f.H) + "</div>"),
        k.innerHTML = n)
}

function Yx(a, b, c, d, e, f, g, h, k, l, m, n) {
    switch (b) {
        case 1:
            var p = new Us(a, m.sd, m.duration);
            break;
        case 2:
            p = Fr ? ms : Js;
            p = new p(a.A, m.mediaurl, m.duration, m.sr, !l, !!m.ind, a.A.ra);
            break;
        case 8:
            p = Fr ? ms : Js;
            p = new p(a.A, m.sd, m.duration, m.sr, !l, !1, a.A.ra);
            break;
        case 3:
        case 4:
        case 6:
        case 7:
            p = new It(a, c, m.mediaurl + "", m.renwurl, m.hls || "", m.duration)
    }
    b = kx(a.A, b, c, d, e, f, g, h, k, p, n);
    if (m.st) {
        m = m.st;
        a = a.A.F.ra;
        c = [];
        d = 0;
        for (e = m.length; d !== e; d++)
            f = new ow(m[d].l, m[d].u),
                c.push(f),
            f.D === a && (mw(f),
                b.H = d);
        b.N = c;
        nf(b.P, 58)
    }
    return b
}

function wy(a, b) {
    var c = a.A
        , d = c.A
        , e = c.F;
    "3" === b.layout ? (Pm(d, !0),
        dn(d, !1),
        Om(d, 4)) : "2" === b.layout || "1" === b.horiz ? Om(d, 2) : "1" === b.layout ? (Pm(d, !1),
        dn(d, !0),
        Om(d, 4)) : "5" === b.layout && Om(d, 5);
    "1" === b.rsb && Pm(d, !0);
    "2" === b.hscroll_type && (e.X = 2);
    "1" === b.scroll_type && (e.ba = 1);
    "0" === b.collapse_empty && (e.ja = !1);
    "1" === b.hshrink && (e.ya = !0);
    "0" === b.enable_waveform && (a.ia = !1);
    if (b.speed) {
        var f = b.speed;
        /^\d+$/.test(f) && (c.D.G = parseInt(f, 10) / 100)
    }
    b.zoom && (f = b.zoom,
    /^-?\d+$/.test(f) && gn(d, 36 + parseInt(f, 10), !0));
    "0" === b.c && Ww(c, !1);
    b.snap && (f = b.snap,
    "-1" === f || /^\d+$/.test(f)) && (e.pa = parseInt(f, 10));
    "0" === b.lm && (a.C.M.aa = !1);
    "0" === b.tac && !1 !== c.pa && (c.pa = !1,
        O(c, 143));
    b.proportional && (f = b.proportional,
    /^\d{2,3}$/.test(f) && (mn(d, !0, !1),
        on(d, parseInt(f, 10), !1)))
}

function xy(a, b) {
    a.N.addEventListener("animationend", c => {
            "fadeOut" === c.animationName && (b(),
                D(a.N, "fadeout"),
                B(a.N, "fadein"))
        }
        , {
            once: !0
        });
    D(a.N, "fadein");
    B(a.N, "fadeout")
}

function R(a, b, c, d) {
    var e = a.Ia
        , f = Ts(a, "player-message-loading");
    3 === e[b] ? O(a.A, c, d) : 2 !== e[b] && (e[b] = 2,
        B(f, "active"),
        Ya(a.H.getAttribute("data-mod" + b), () => {
                e[b] = 3;
                O(a.A, c, d);
                D(f, "active")
            }
        ))
}

function Qx(a) {
    var b = a.I;
    if (0 !== b) {
        switch (b) {
            case 1:
                O(a.A, 114);
                break;
            case 2:
            case 3:
                O(a.A, 112, 3 === b);
                break;
            case 7:
                O(a.A, 127);
                break;
            case 6:
                O(a.A, 125);
                break;
            case 4:
                Lw(a.V);
                break;
            case 5:
                var c = a.Y;
                c.isActive && (D(c.C, "active"),
                    c.isActive = !1)
        }
        a.I = 0;
        O(a.A, 75, b)
    }
}

function Hx(a) {
    null === a.V && (a.V = new Nw(a.A, "waveform", !0, !0, "#9c9c9c"))
}

function uy(a) {
    a = a.F;
    return a.fullscreenEnabled || a.webkitFullscreenEnabled || a.mozFullScreenEnabled || a.msFullscreenEnabled
}

function yy(a) {
    var b = a.A
        , c = {
        transpose: b.F.C,
        appearance: JSON.stringify(oo(b.A)),
        instruments: JSON.stringify(Yw(b)),
        collapse_staves: b.F.ja,
        stave_width: b.F.F ? -1 : b.F.$,
        instrument_names: b.F.W
    };
    if (b.ka) {
        O(b, 45);
        var d = a.D.open("/wait-for-pdf/", "sliceprint");
        uc("POST", `/slices/${b.C.F}/pdf-export/`, c, e => {
                a.D.setTimeout(Kr, 1E3, a.D, d, e.job_id)
            }
            , () => {
                P(b, "There was an error while printing.", !1, 1)
            }
        )
    }
}

function cy(a, b) {
    var c = tt("post-tabs")
        , d = tt("show-sidebar-mobile");
    B(document.body, "postpage");
    a.A.ba && B(a.H, "coursepage");
    d && J(d, () => {
            zy(a, !a.P, !1)
        }
    );
    J(Ts(a, "postplayer-toggle"), () => {
            zy(a, !a.P, !1)
        }
    );
    J(tt("show-sidebar"), () => {
            zy(a, !a.P, !1)
        }
    );
    I(Ts(a, "postplayer"), "transitionend", () => {
            D(a.H, "sidebar-is-animating");
            vx(a.C);
            qy()
        }
    );
    c && I(c, "click", e => {
            var f = e.target;
            f.hasAttribute("href") || (e.preventDefault(),
            (e = Ta(f, "data-tab")) && Ay(a, e))
        }
    );
    zy(a, b && 801 <= a.D.innerWidth, !0)
}

function Ay(a, b) {
    var c = Ts(a, "postplayer")
        , d = tt("post-tabs").querySelectorAll(".tab")
        , e = d.length;
    E(c, "commentson", "comments" === b);
    E(c, "embedon", "embed" === b);
    E(c, "coursenavon", "coursenav" === b);
    for (E(c, "performson", "performs" === b); e--;)
        D(d[e], "tab-active");
    B(Ts(a, "tab" + b), "tab-active")
}

function $x(a, b) {
    var c = a.A.C;
    Ts(a, "postplayer-content").innerHTML = b;
    cy(a, !0);
    t("post-tabs") && (a.A.ba ? Ay(a, "coursenav") : a.A.La && Ay(a, "comments"));
    (b = Ts(a, "post-description")) && c.T && (b.innerHTML = Lt(Xa(c.T)).replace(/\n/g, "<br>"));
    (c = a.F.querySelectorAll(".course-lesson-list .active")[0]) && a.P && c.scrollIntoView(!1)
}

function By(a, b) {
    var c = a.A
        , d = Ts(a, "postplayer-channelfollow");
    c.da ? Mb(d, "none") : c.va ? (uc("GET", "/api/v1/follows/?ids=" + b, null, e => {
            Cy(a, e[b])
        }
        , Ir),
        I(d, "click", () => {
                Dy(a, b, !Ea(d, "following"))
            }
        )) : J(d, () => {
            Me("loginmodal")
        }
    )
}

function Ey(a) {
    uc("GET", `/api/v1/slices/${a.A.C.F}/related/html/`, null, b => {
            b.count && (Ts(a, "post-related").insertAdjacentHTML("beforeend", b.html),
                B(tt("post-related-section"), "active"))
        }
        , () => {
        }
    )
}

function ay(a, b) {
    var c = a.A.C
        , d = Ts(a, "postplayer-uname")
        , e = b.crs;
    cy(a, !0);
    Px(a);
    if (a.A.da && !soundslice.hasAvatar)
        D(Ts(a, "postplayer-ulink-blank"), "hidden");
    else {
        var f = Ts(a, "postplayer-ulink");
        f.href = b.uu;
        D(f, "hidden")
    }
    Ts(a, "postplayer-avatar").src = b.ua;
    d.innerHTML = Xa(b.un);
    d.href = b.uu;
    t("embedcodeid").innerHTML = c.F;
    b.ub && (c = Ts(a, "postplayer-badge"),
        c.setAttribute("data-modal-extra", b.un),
        D(c, "hidden"),
        J(c, soundslice.modalOpenerClick));
    Ts(a, "postplayer-date").innerHTML = b.w;
    By(a, b.ui);
    b.p && (tt("post-genres").innerHTML = b.p,
        t("logged-out-tags").innerHTML = b.p);
    Ay(a, "comments");
    Ey(a);
    J(tt("toggle-post-related"), () => {
            Ga(tt("post-related-section"), "show-all")
        }
    );
    e && (tt("coursename").innerHTML = Xa(e[0]),
        t("courselink").href = e[1],
        t("courseimg").src = e[2],
        B(tt("courselink"), "active"))
}

function zy(a, b, c) {
    if (c || b !== a.P) {
        var d = tt("show-sidebar-mobile");
        c || B(a.H, "sidebar-is-animating");
        d && E(d, "active", b);
        E(document.body, "hide-postplayer", !b);
        a.P = b;
        c ? (a.X = b ? 3 : 1,
            Fx(a)) : O(a.A, 163, b)
    }
}

function qy() {
    var a = tt("controlbar")
        , b = tt("title-and-time")
        , c = a.getBoundingClientRect().width;
    E(b, "hide", 160 > b.offsetWidth);
    E(a, "medium-width", 900 > c);
    E(a, "small-width", 680 > c);
    E(a, "smallest-width", 540 > c);
    E(tt("mobile-settings-section"), "show", 540 > c)
}

function dy(a) {
    J(tt("switchvideoside"), () => {
            a.X = a.A.F.M ? 2 : 3;
            Fx(a)
        }
    )
}

function Fy(a) {
    a = a.M;
    a = a.T ? -1 : a.V;
    for (var b = tt("vidlevelchoices").getElementsByTagName("label"), c = b.length; c--;)
        E(b[c], "active", parseInt(b[c].getAttribute("data-level"), 10) === a)
}

function fy(a) {
    var b = a.A
        , c = tt("vidlevels")
        , d = tt("vidlevelchoices")
        , e = tt("vidlevelsmenu");
    b.assign([212], f => {
            var g = f.data[1];
            f = 1 < g && f.data[0] === b.I;
            E(c, "active", f);
            if (f) {
                var h = 0;
                for (f = '<label class="visible ui-tooltip-button link-text-center" data-level="-1"><span class="truncate-text reset-lh">Auto</span></label>'; h !== g; h++)
                    f += '<label class="visible ui-tooltip-button link-text-center" data-level="' + h + '"><span class="truncate-text reset-lh">' + (h + 1) + (0 === h ? " (worst)" : h === g - 1 ? " (best)" : "") + "</span></label>";
                d.innerHTML = f;
                Fy(a)
            }
        }
        , [213], () => {
            Fy(a)
        }
    );
    ad(c, e, null, null, !1);
    J(d, f => {
            f = Ta(f.target, "data-level");
            if (null !== f) {
                var g = a.M;
                g.C && (g.C.currentLevel = parseInt(f, 10));
                D(e, "active")
            }
        }
    )
}

function ty(a) {
    var b = a.A
        , c = tt("vidflip");
    B(c, "active");
    J(c, () => {
            Ga(Ts(a, "video-container"), "flip")
        }
    );
    b.assign([68], () => {
            E(c, "active", Nv(b).C.Fa)
        }
    )
}

function Mx(a) {
    var b = lx(a.A);
    !tw(a.A) || 680 <= a.G.offsetWidth || b++;
    return 1 < b
}

function ey(a) {
    var b = a.A
        , c = tt("synth-toggle-tooltip");
    I(c, "click", d => {
            d = Ta(d.target, "data-backend");
            null !== d && (Tw(b, parseInt(d, 10)),
            c && D(c, "active"))
        }
    );
    I(tt("usesynth"), "click", () => {
            vw(b)
        }
    );
    I(tt("midi-toggle"), "mousedown touchstart", oc(() => {
            var d = parseInt(tt("realrecname").getAttribute("data-backend"), 10);
            d !== b.I ? Tw(b, d) : Mx(a) && ((d = tt("synthlistitem")) && E(d, "visible", !(680 <= a.G.offsetWidth)),
                $c(c, Ir, Ir, !0))
        }
    ))
}

function Kx(a) {
    return '<svg class="svg-icon ui-tooltip-icon' + (a.C.P ? " video-recording" : "") + '"><use xlink:href="' + (a.F ? "#shape-digital-sound" : a.C.P ? "#shape-video-source" : "#shape-audio-source") + '"></use></svg>'
}

function ky(a) {
    var b = a.A
        , c = Ts(a, "playcontainer");
    I(Ts(a, "playbutton"), "mousedown", oc(() => {
            O(b, 119);
            Ov(b.D)
        }
    ));
    b.assign([43], () => {
            B(c, "playing");
            D(c, "loading")
        }
        , [40], () => {
            b.D.N || (D(c, "playing"),
                D(c, "loading"))
        }
        , [11], () => {
            D(c, "playing");
            B(c, "loading")
        }
        , [8], () => {
            -1 !== b.I && Nv(b).C.M() && B(c, "loading")
        }
        , [7, 220], () => {
            -1 !== b.I && Nv(b).C.W() && D(c, "loading")
        }
        , [6], () => {
            D(c, "loading")
        }
        , [68], () => {
            E(c, "loading", Nv(b).C.M())
        }
    )
}

function ly(a) {
    var b = a.A, c = new Br(new Ee(tt("progressbarcan"), b.T)), d = tt("progressbar"), e = tt("progressmarker"),
        f = tt("progresstip"), g = tt("currentmeasure"), h = tt("nummeasures"), k = tt("currenttime1"),
        l = tt("currenttime2"), m = Ts(a, "totaltime"), n = tt("totaltime2"), p = !1, q = !1, r;
    gu(b, [195], () => {
            var u = a.ka;
            u !== c.width && (yd(c.A, u),
                Ed(c.A, 1),
                c.width = u,
                Ar(c))
        }
    );
    I(tt("progressnib"), "mouseover", () => {
            q = !0;
            O(b, 46)
        }
        , "mouseout", () => {
            q = !1
        }
    );
    id(d, d, (u, v, w) => {
            w.preventDefault();
            B(d, "being-dragged");
            p = !0;
            r = Va(d).width;
            Pv(b.D, u / r)
        }
        , u => {
            Pv(b.D, u / r);
            document.body.style.cursor = "pointer"
        }
        , () => {
            D(d, "being-dragged");
            p = !1;
            document.body.style.cursor = "default"
        }
        , !1);
    b.assign([40, 51, 67, 68], () => {
            var u = e.style;
            var v = b.D;
            var w = v.D;
            v = null === w ? 0 : Math.min(1, (v.F - Mv(b, w)) / Sw(b, w, !0));
            u.width = 100 * v + "%"
        }
        , [46, 51, 67], () => {
            if (p || q) {
                var u = 0;
                if (b.C.A.length) {
                    var v = fr(b.H, b.A);
                    -1 === v ? u = 1 : (u += v + 1,
                    b.F.A && (u -= b.F.wa),
                        u = Math.max(1, u))
                }
                g.innerHTML = u;
                k.innerHTML = Ub(Lv(b.D), !1);
                u = f.offsetWidth / 2 + 8;
                v = e.offsetWidth;
                var w = 0;
                v < u ? w = v - u : d.offsetWidth - v < u && (w = u - (d.offsetWidth - v));
                f.style.marginRight = w + "px"
            }
            l && (l.innerHTML = Ub(Lv(b.D), !1))
        }
        , [32, 4, 17, 12, 136], () => {
            h.innerHTML = b.F.A ? b.F.xa - b.F.wa + 1 : b.C.D.length
        }
        , [32, 68, 52, 4, 17, 12, 36, 136], () => {
            var u = Ub(Qv(b, !0), !1);
            m.innerHTML = u;
            n && (n.innerHTML = u)
        }
    );
    gu(b, [32, 68, 31, 174], () => {
            var u = a.A
                , v = Nv(u);
            if (v) {
                var w = Sw(u, v, !0)
                    , y = u.C.D
                    , x = u.C.A
                    , z = c.C
                    , C = 5 === u.A.F
                    , F = 0
                    , H = 0
                    , N = y.length;
                for (z.length = 0; H !== N; H++) {
                    var Q = !1;
                    var L = x[y[H]];
                    if (C) {
                        if (L = Kn(u.A, H))
                            L = ao(L).F,
                            L !== F && (Q = !0,
                                F = L)
                    } else
                        Q = !(!L.T && !L.S);
                    Q && 0 !== H && z.push(Fv(u, v, H, 0) / w)
                }
                Ar(c)
            }
        }
    )
}

function Gy(a, b) {
    a = a.A.D;
    b = parseInt(b.replace(/\s*%\s*$/g, "").trim(), 10);
    isNaN(b) || (Rv(a) ? Uv(a, b / 100, !0, !1) : Sv(a, b, !0, !1))
}

function jy(a) {
    var b = a.A, c = b.D, d = tt("speedui-footer"), e = d.querySelectorAll(".speed-tooltip")[0],
        f = d.querySelectorAll(".input-group-text")[0], g = d.querySelectorAll(".speedlabel")[0],
        h = d.querySelectorAll(".speedvalue")[0], k = d.querySelectorAll(".speedvaluetext")[0],
        l = d.querySelectorAll(".speedinp")[0], m = d.querySelectorAll(".enhanced-slowdown-form")[0],
        n = tt("improved-slowdown"), p = tt("speedtrainmodal"), q = tt("speedtrainform"),
        r = document.querySelectorAll(".jstraintype"), u = d.querySelectorAll("#speedpresets .jspreset"),
        v = tt("speedpreset100bpm"), w = () => {
            D(e, "active");
            l.value = ""
        }
        , y;
    b.assign([68], () => {
            var x = Rv(c);
            g.innerHTML = Ow(b, x ? "Speed" : "BPM");
            E(d, "is-bpm", !x);
            E(m, "active", kw(c.D) && Fr && "object" === typeof WebAssembly)
        }
        , [57, 32, 68, 175], () => {
            k.innerHTML = Rv(c) ? Math.round(100 * c.G) + "%" : String(c.W)
        }
        , [32, 68, 175], () => {
            v.innerHTML = Rv(c) ? "" : "(" + em(b.C) + " " + Ow(b, "BPM") + ")"
        }
        , [57, 139, 175], () => {
            var x = c.H.isActive ? "train" : String(100 * c.G);
            for (y = u.length; y--;)
                E(u[y], "active", u[y].getAttribute("data-val") === x)
        }
        , [139], () => {
            E(d, "istraining", c.H.isActive)
        }
    );
    I(d, "mousedown touchstart", x => {
            if (!x.A) {
                var z;
                if (z = Ta(x.target, "data-dir"))
                    nc("BLUR_ALL", null),
                        Vv(c, "1" === z),
                        x.A = !0,
                        x.preventDefault()
            }
        }
    );
    I(tt("speedpresets"), "click", x => {
            if (x = Ta(x.target, "data-val")) {
                if ("train" === x) {
                    x = Rv(c) ? "%" : Ow(c.A, "BPM");
                    for (y = r.length; y--;)
                        r[y].innerHTML = x;
                    Me(p)
                } else
                    Uv(c, parseInt(x, 10) / 100, !0, !1);
                w()
            }
        }
    );
    I(l, "blur", () => {
            Gy(a, l.value)
        }
        , "keydown", x => {
            if (13 === x.which || 9 === x.which)
                x.preventDefault(),
                    Gy(a, l.value),
                    w()
        }
    );
    n.checked = b.ra;
    I(n, "change", x => {
            x = x.target.checked;
            if (x !== b.ra) {
                var z = b.P
                    , C = b.I
                    , F = b.D
                    , H = F.G
                    , N = F.volume
                    , Q = z.length;
                for (b.ra = x; Q--;) {
                    var L = z[Q];
                    if (kw(L)) {
                        L = L.C;
                        var G = Q === C;
                        G && au(F) && Ev(F);
                        L.pa();
                        var W = L
                            , T = x;
                        W.ya = null;
                        W.V = null;
                        W.F = null;
                        W.I = T;
                        W.ka = T;
                        W.ja = T;
                        W.ra = T;
                        qs(W);
                        G && (F.C = L,
                            L.Va(H),
                            L.$a(aw(b)),
                            L.setVolume(N))
                    }
                }
                O(b, 142)
            }
        }
    );
    I(window, "BLUR_ALL", () => {
            Sa();
            Gy(a, l.value);
            w()
        }
    );
    I(q, "submit", x => {
            x.preventDefault();
            Hv(c, q.ci.checked);
            x = c.H;
            var z = parseInt(q.a.value.trim(), 10)
                , C = parseInt(q.b.value.trim(), 10)
                , F = parseInt(q.d.value.trim(), 10)
                , H = parseInt(q.c.value.trim(), 10);
            0 < z && 0 < C && z < C && 0 < F && 0 < H ? (x.isActive = !0,
                x.C = z,
                x.F = C,
                x.D = F,
                x.A = H,
                x.currentIteration = 0,
                Kv(b.D, !1),
                O(b, 139),
                Bv(x, b.D),
                x = !0) : x = !1;
            x && Ne(p)
        }
    );
    ad(h, e, () => {
            f.innerHTML = Rv(c) ? "%" : Ow(c.A, "BPM");
            l.value = "";
            l.focus()
        }
        , () => {
            Gy(a, l.value);
            l.value = ""
        }
        , !1)
}

function Hy(a) {
    R(a, "clipsui", 182, null)
}

function gy(a) {
    var b = a.A
        , c = Ts(a, "loopbutton")
        , d = Ts(a, "loophand-button")
        , e = tt("loophand-more-menu")
        , f = tt("loophand-once")
        , g = tt("loophand-focus")
        , h = tt("loophand-focus-options")
        , k = tt("loophand-save")
        , l = b.M
        , m = tt("loopfocus-nav")
        , n = tt("loopfocus-text")
        , p = tt("loopfocus-b1")
        , q = tt("loopfocus-b2")
        , r = tt("clipnotes")
        , u = () => {
            var w = parseInt(p.value.trim(), 10) - 1
                , y = parseInt(q.value.trim(), 10) - 1;
            !isNaN(w) && !isNaN(y) && w <= y && 0 <= w && y <= b.C.A.length - 1 && bx(b, w, y, b.Ia)
        }
        , v = () => {
            xy(a, () => {
                    ax(b, null, null, !0, "")
                }
            )
        }
    ;
    J(c, () => {
            pv(l) ? gv(l) : uv(l)
        }
    );
    ad(d, e, () => {
            Mb(h, $w(b) && !b.F.A ? "block" : "none")
        }
        , null, !1);
    I(f, "click", () => {
            Kv(b.D, !b.D.V);
            D(e, "active")
        }
    );
    I(tt("loophand-countin"), "click", () => {
            Gv(b.D, !b.D.M);
            D(e, "active")
        }
    );
    I(g, "click", () => {
            xy(a, () => {
                    cx(b)
                }
            );
            D(e, "active")
        }
    );
    d = document.getElementsByClassName("close-focus-button");
    for (g = d.length; g--;)
        J(d[g], v);
    I(p, "input", u);
    I(q, "input", u);
    b.assign([53], () => {
            B(c, "active")
        }
        , [14], () => {
            D(c, "active")
        }
        , [225], w => {
            w = w.data;
            E(c, "withlooponce", w);
            E(f, "active", w)
        }
        , [136], w => {
            var y = b.A
                , x = b.F.A;
            x && (w = (w = w.data) ? yr(b.W, w) : null,
                n.innerHTML = w ? Xa(w.name) : "<span>Focused on</span>",
                p.value = y.ka + 1,
                q.value = y.ja,
                y = b.C.A.length,
                p.max = y,
                q.max = y,
                r.innerText = w ? w.G : "");
            E(m, "active", x)
        }
    );
    fx(b) && (J(k, () => {
            Hy(a)
        }
    ),
        gu(b, [20, 136, 138, 42], () => {
                Mb(k, $w(b) && !b.F.A ? "block" : "none")
            }
        ))
}

function hy(a) {
    var b = a.A
        , c = b.D
        , d = tt("metronome-tooltip-button")
        , e = tt("toggle-metronome")
        , f = tt("countin-toggle")
        , g = tt("metronome-every-beat")
        , h = tt("metronome-loop-countin")
        , k = tt("countinlen");
    ad(d, t("metronome-tooltip"), null, null, !1);
    I(e, "change", () => {
            nx(b, e.checked);
            Sa()
        }
    );
    I(f, "change", () => {
            Gv(c, f.checked);
            Sa()
        }
    );
    I(g, "change", () => {
            ox(b, "1" === g.value);
            Sa()
        }
    );
    I(h, "change", () => {
            Hv(c, "1" === h.value);
            Sa()
        }
    );
    I(k, "change", () => {
            Jv(c, parseInt(k.value, 10));
            Sa()
        }
    );
    gu(b, [228, 159, 224, 158, 160], () => {
            e.checked = b.ja;
            f.checked = c.M;
            g.value = b.xa ? "1" : "0";
            h.value = c.I ? "1" : "0";
            k.value = c.S;
            E(tt("metronome-options"), "show", b.ja);
            E(tt("countin-options"), "show", c.M || c.I);
            E(d, "active", b.ja || c.M || c.I)
        }
    )
}

function my(a) {
    var b = a.A
        , c = fx(b);
    if (c || b.W.A.length) {
        var d = tt("clips-button")
            , e = tt("clips-tooltip-1")
            , f = tt("clips-tooltip-2")
            , g = tt("clips-list")
            , h = tt("loopfocus-save")
            , k = tt("loopfocus-edit")
            , l = tt("clips-cbar-count")
            , m = "";
        if (!c) {
            var n = tt("clips-tooltip-creation");
            n && B(n, "hidden")
        }
        ad(d, t("clips-tooltip"), () => {
                B(d, "active")
            }
            , () => {
                D(d, "active")
            }
            , !0);
        gu(b, [181], () => {
                if (b.W.A.length) {
                    for (var p = b.W.A, q = "", r = "", u, v = 0, w = p.length, y; v !== w; v++)
                        y = p[v],
                            u = `<li><button id="clip-${y.A}" class="ui-tooltip-button" data-svid="${y.A}">` + Xa(y.name) + "</button></li>",
                            y.H ? q += u : r += u;
                    q && r && (q = '<li class="list-item-header"><h4 class="text-muted">Clips</h4></li>' + q,
                        r = '<li class="list-item-header"><h4 class="text-muted margin-top-14">Private clips</h4></li>' + r);
                    g.innerHTML = q + r;
                    f && D(f, "active");
                    B(e, "active");
                    D(l, "clip-button-plus");
                    l.innerText = b.W.A.length
                } else
                    D(e, "active"),
                    c && B(f, "active"),
                        B(l, "clip-button-plus"),
                        l.innerText = "+"
            }
        );
        b.assign([136], p => {
                p = p.data;
                var q = yr(b.W, p);
                if (m) {
                    var r = tt(`clip-${m}`);
                    r && D(r, "active");
                    m = ""
                }
                E(h, "hidden", !!p);
                p && (B(tt(`clip-${p}`), "active"),
                    m = p);
                k && E(k, "active", !!q && q.I && c)
            }
        );
        J(g, p => {
                if (p = Ta(p.target, "data-svid")) {
                    var q = yr(b.W, p);
                    q && xy(a, () => {
                            dx(b, q)
                        }
                    )
                }
            }
        );
        c && (J(tt("clips-trigger"), () => {
                Hy(a)
            }
        ),
            J(tt("clips-trigger-2"), () => {
                    Hy(a)
                }
            ),
            J(h, () => {
                    Hy(a)
                }
            ),
            J(k, () => {
                    R(a, "clipsui", 183, m)
                }
            ));
        gu(b, [32, 184, 185], () => {
                E(tt("clips-cbar"), "hidden", !b.C.A.length)
            }
        )
    }
}

function ny(a) {
    var b = a.A
        , c = a.C.A
        , d = tt("slidenav")
        , e = tt("prevslidediv")
        , f = tt("nextslidediv")
        , g = () => {
            5 === c.F && (E(e, "active", 0 !== c.V),
                E(f, "active", c.V !== c.ta - 1))
        }
    ;
    J(tt("prevslide"), () => {
            Xw(b, c.V - 1)
        }
    );
    J(tt("nextslide"), () => {
            Xw(b, c.V + 1)
        }
    );
    gu(b, [31], () => {
            g();
            E(d, "active", 5 === c.F)
        }
    );
    gu(b, [171, 174], () => {
            g()
        }
    );
    gu(b, [31, 173], () => {
            if (5 === c.F) {
                var h = Math.max(c.ba - 12, 28);
                mb(e, h);
                mb(f, h)
            }
        }
    )
}

function iy(a) {
    var b = a.A
        , c = tt("toggle-lyricsonly")
        , d = tt("mobile-toggle-lyricsonly");
    J(c, () => {
            Fn(b.A, !b.F.Z)
        }
    );
    J(d, () => {
            Fn(b.A, !b.F.Z)
        }
    );
    b.assign([156], () => {
            E(c, "active", b.F.Z);
            E(d, "active", b.F.Z)
        }
    )
}

function Iy(a) {
    a = a.A;
    return `/api/v1/slices/${a.C.F}/` + (a.ba ? `in-course-${a.ba}/` : "") + "comments/"
}

function Jy(a, b, c, d) {
    uc("POST", Iy(a), {
            comment: b,
            parent_id: c
        }, e => {
            var f = c ? t("commentthread" + c) : d;
            f.insertAdjacentHTML("beforeend", e.html);
            f && B(f, "isthread")
        }
        , () => {
        }
    )
}

function Ky(a) {
    a = tt("commentthread" + a);
    Qa(a.getElementsByClassName("comment-reply-form")[0]);
    D(a, "withreplyform")
}

function Ly(a, b) {
    Qa(tt("comment" + b));
    uc("DELETE", Iy(a) + `${b}/`, null, () => {
        }
        , () => {
        }
    )
}

function by(a) {
    var b = Ts(a, "postplayer")
        , c = Ts(a, "post-commentlist")
        , d = e => {
            e.preventDefault();
            var f = e.target.c;
            e = e.target.pid.value;
            f.value && f.value.trim() && (Jy(a, f.value, e ? parseInt(e, 10) : null, c),
                f.value = "",
            e && Ky(e))
        }
    ;
    B(b, "hascomments");
    uc("GET", Iy(a) + "html/", null, e => {
            c.insertAdjacentHTML("beforeend", e.html)
        }
        , () => {
        }
    );
    a.A.Fa ? I(Ts(a, "post-comment-form"), "submit", d) : B(b, "commentsdisabled");
    I(c, "click", e => {
            var f = e.target
                , g = Ta(f, "data-replyid");
            if (g)
                e = parseInt(g, 10),
                    a.A.va ? (f = tt("comrplytemplate").innerHTML,
                        g = tt("commentthread" + e),
                        f = f.replace(/name="pid" value=""/g, `name="pid" value="${e}"`),
                        f = f.replace(/data-cancelreply=""/g, `data-cancelreply="${e}"`),
                        g.insertAdjacentHTML("beforeend", f),
                        B(g, "withreplyform"),
                        g.querySelectorAll("textarea")[0].focus()) : Me("loginmodal");
            else {
                if (g = Ta(f, "data-delid"))
                    e.preventDefault(),
                        Ly(a, g);
                if (g = Ta(f, "data-cancelreply"))
                    e.preventDefault(),
                        Ky(g);
                Ua(f, "data-modal") && soundslice.modalOpenerClick(e)
            }
        }
        , "submit", d)
}

function Cy(a, b) {
    a = Ts(a, "postplayer-channelfollow");
    E(a, "following", b);
    a.innerHTML = b ? "Following" : "Follow"
}

function Dy(a, b, c) {
    uc("POST", `/api/v1/follows/${b}/`, {
            action: c ? "follow" : "unfollow",
            source: 6
        }, () => {
            Cy(a, c)
        }
        , Ir)
}

function ry(a) {
    var b = a.A
        , c = b.C
        , d = c.C.length
        , e = !1
        , f = !1
        , g = !1
        , h = !1
        , k = !1
        , l = !1
        , m = An(b.A)
        , n = a.I
        , p = 0;
    if (c.A.length)
        for (; d--;) {
            var q = c.C[d];
            e || !q.wa || q.W || (e = !0);
            f || !q.D || (f = !0);
            !g && q.ja && (g = !0);
            q.ya && (h = !0);
            q.Ca && (k = !0)
        }
    null === a.Y && (a.Y = new uw(a.A));
    a.ia && -1 !== b.I && !Nv(b).C.T && (l = !0,
        Hx(a));
    (!e && 1 === n || !f && 2 === n || !g && 3 === n || !k && 6 === n || !h && 7 === n) && Qx(a);
    k ? p = 6 : h ? p = 7 : g ? p = 3 : f ? p = 2 : e && (p = 1);
    E(tt("toggle-keyboard"), "visible", e && 1 !== p);
    E(tt("toggle-fretboard"), "visible", f && 2 !== p);
    E(tt("toggle-violinboard"), "visible", g && 3 !== p);
    E(tt("toggle-trombone"), "visible", h && 7 !== p);
    E(tt("toggle-trumpet"), "visible", k && 6 !== p);
    E(tt("toggle-mixer"), "visible", !0);
    E(tt("toggle-lyricsonly"), "visible", m);
    a = tt("toggle-metronome");
    c = b.S;
    E(a, "visible", null !== c ? !!c.C.Ga.length : !1);
    E(tt("mobile-toggle-keyboard"), "visible", e);
    E(tt("mobile-toggle-fretboard"), "visible", f);
    E(tt("mobile-toggle-violinboard"), "visible", g);
    E(tt("mobile-toggle-trombone"), "visible", h);
    E(tt("mobile-toggle-trumpet"), "visible", k);
    E(tt("mobile-toggle-mixer"), "visible", !0);
    E(tt("mobile-toggle-lyricsonly"), "visible", m);
    E(tt("primvizbut"), "visible", 0 !== p);
    E(tt("settings-viz-header"), "active", e || f || g || h || k || m);
    E(tt("toggle-waveform"), "hidden", !l);
    0 !== p && (tt("primvizbut").setAttribute("data-inst", p),
        tt("primvizsvg").innerHTML = '<use xlink:href="#shape-' + Bx[p] + '"></use>',
        tt("primvizname").innerText = Ow(b, Ax[p]));
    E(tt("toggle-settings"), "visible", !0);
    qy()
}

function vy(a) {
    var b = tt("fullscreenbutton")
        , c = !1;
    B(b, "visible");
    D(b, "hidden");
    I(b, "click", () => {
            var d;
            if (c) {
                var e = a.F;
                var f = ["msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen", "exitFullscreen"]
            } else
                e = a.F.documentElement,
                    f = ["msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen", "requestFullscreen"];
            for (d = f.length; d--;) {
                var g = f[d];
                if (e[g]) {
                    e[g]();
                    break
                }
            }
        }
    );
    I(window, "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", () => {
            c = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
            E(b, "active", c);
            qy()
        }
        , "fullscreenerror mozfullscreenerror MSFullscreenError webkitfullscreenerror", () => {
            P(a.A, "This web browser doesn't support full-screen mode.", !1, 1)
        }
    )
}

function sy(a) {
    var b = () => {
            var c = !Ea(tt("toggle-settings"), "active");
            My(a, c, "")
        }
    ;
    J(tt("toggle-settings"), b);
    J(tt("closesettings"), b)
}

function My(a, b, c) {
    R(a, "settings", 69, [b, c])
}

function oy(a) {
    var b = a.A
        , c = a.C.A;
    I(a.D, "keydown", d => {
            var e = b.N;
            if (!Ra() && !Oe())
                switch (d.which) {
                    case 32:
                        d.preventDefault();
                        e || (O(b, 119),
                            Ov(b.D));
                        break;
                    case 13:
                    case 36:
                        e && 36 !== d.which || Pv(b.D, 0);
                        break;
                    case 35:
                        e || Pv(b.D, 1);
                        break;
                    case 61:
                    case 187:
                    case 107:
                        if (107 === d.which || d.metaKey || d.ctrlKey)
                            d.preventDefault(),
                            e || gn(c, c.M + 1, !0);
                        break;
                    case 109:
                    case 173:
                    case 189:
                        if (109 === d.which || d.metaKey || d.ctrlKey)
                            d.preventDefault(),
                            e || gn(c, c.M - 1, !0);
                        break;
                    case 37:
                    case 39:
                        d.preventDefault();
                        var f = 39 === d.which;
                        if (!e)
                            if (d.metaKey || d.ctrlKey)
                                a: {
                                    if (b.C.A.length) {
                                        e = b.H;
                                        var g = hr(b.H, b.A);
                                        if (f) {
                                            if (g.index === g.A.G.length - 1)
                                                break a;
                                            e = Bo(g)
                                        } else if (0 !== e.C)
                                            e = g;
                                        else {
                                            if (0 === g.index)
                                                break a;
                                            e = Co(g)
                                        }
                                        iv(b.D, e, lf, !0, !1)
                                    }
                                }
                            else if (!d.shiftKey && !d.altKey && b.C.A.length) {
                                br(b.H) || b.H.set(b.A, 0, 0, lf, !0, !1, !1, 0, 0);
                                e = [];
                                var h = 0;
                                g = hr(b.H, b.A);
                                for (var k = g.H, l = b.H.H, m = null === l ? b.H.C * g.O.za.qa : null, n; k--;)
                                    if (n = g.G[k],
                                    1 === n.G && (null === m && n.C === l || null !== m && n.C.qa <= m)) {
                                        h = k;
                                        break
                                    }
                                l || f || h++;
                                n = h;
                                for (h = null; g && !h;)
                                    if (f) {
                                        n++;
                                        k = g.H;
                                        for (l = n; l < k; l++)
                                            if (m = g.G[l],
                                            1 === m.G && !m.F) {
                                                h = m;
                                                break
                                            }
                                        h || (g = Bo(g),
                                            n = -1)
                                    } else {
                                        for (l = n; l--;)
                                            if (m = g.G[l],
                                            1 === m.G && !m.F) {
                                                h = m;
                                                break
                                            }
                                        !h && (g = Co(g)) && (n = g.H)
                                    }
                                e[0] = g;
                                e[1] = h;
                                g = e[0];
                                if (n = e[1])
                                    e = Ip(n),
                                        e.P === e.Ea ? iv(b.D, g, n.C, !0, !1) : hv(b.D, $v(b, g.O, e.P / g.O.za.qa), !0, !1)
                            }
                        !d.altKey || d.metaKey || d.ctrlKey || d.shiftKey || 5 !== c.F || Xw(b, c.V + (f ? 1 : -1));
                        break;
                    case 188:
                    case 190:
                        !e && d.shiftKey && Vv(b.D, 190 === d.which)
                }
        }
    )
}

function py(a) {
    var b = a.A
        , c = a.$
        , d = tt("contextmenu")
        , e = tt("contextmenu-wrapper")
        , f = tt("context-instruments")
        , g = tt("context-appearance")
        , h = d.offsetWidth
        , k = d.offsetHeight
        , l = -1
        , m = -1
        , n = !1
        , p = null
        , q = u => {
            u.preventDefault();
            if (!b.N) {
                var v = Va(c);
                l = u.pageX - v.left;
                m = u.pageY - v.top;
                E(f, "hidden", !(1 < a.A.C.C.length));
                u = a.A.A;
                u = mo(u, 2, !1) || mo(u, 4, !1) || mo(u, 6, !1) || mo(u, 7, !1) || mo(u, 8, !1) || mo(u, 9, !1) || mo(u, 10, !1);
                E(g, "hidden", !u);
                B(d, "active");
                lb(e, Math.min(l + v.left, a.D.innerWidth - h - 16));
                e.style.top = Math.min(m + v.top, a.D.innerHeight - k - 16) + "px"
            }
        }
        , r = () => {
            D(d, "active")
        }
    ;
    I(c, "contextmenu", u => {
            q(u)
        }
    );
    J(c, r);
    b.assign([218], r);
    I(c, "touchstart", u => {
            n = !1;
            p = setTimeout(() => {
                    n || q(u)
                }
                , 800)
        }
    );
    I(c, "touchmove", () => {
            n = !0
        }
    );
    I(c, "touchend", () => {
            clearTimeout(p)
        }
    );
    I(c, "touchleave", () => {
            clearTimeout(p)
        }
    );
    J(tt("context-loop"), () => {
            cv(b, b.A, l, m, b.H, !0);
            br(b.H) && mv(b.M, b.H.A, 0, !0, !1, !1, 0, b.H.A, 1, !0, !1, !1, 0);
            r()
        }
    );
    J(f, () => {
            My(a, !0, "intsettingsblock");
            r()
        }
    );
    J(g, () => {
            My(a, !0, "appearsettings");
            r()
        }
    );
    J(tt("context-zoom"), () => {
            My(a, !0, "zoom-panel");
            r()
        }
    );
    J(tt("context-transpose"), () => {
            My(a, !0, "transposeui");
            r()
        }
    )
}

class Ny {
    constructor(a, b, c) {
        var d = soundslice.media_url;
        var e = soundslice.user_id;
        var f = soundslice.lang;
        var g = soundslice.i18n;

        this.D = a;
        this.F = a.document;
        this.H = b;
        this.$ = Ts(this, "notationland");
        b = this.F.createElement("canvas");
        var h = this.F.createElement("canvas")
            , k = a.navigator.userAgent || ""
            , l = 600 > Va(this.$).width;
        b.width = 10;
        b.height = 10;
        h.width = 10;
        h.height = 10;
        var m = this.A = new rx(c, new pf(this.F), new Hf(new Ee(b, d), new Ee(h, d)), d, e, f, g, !/Android|iPhone|iPad/.test(k), !l, l);

        this.N = Ts(this, "notationwide");
        this.La = zx++;
        this.M = this.ta = null;
        this.Ia = {};
        this.S = this.P = !1;
        this.W = 2;
        this.Ca = !1;
        this.X = 1;
        this.Ga = 580 >= a.innerWidth ? 180 : 225;
        this.va = .4 * a.innerWidth;
        this.da = 225;
        this.T = this.Da = this.Fa = !1;
        this.aa = this.va;
        this.ja = 0;
        this.ra = !1;
        this.wa = this.ka = 0;
        this.ba = -1;
        this.G = tt("appwrapper");
        this.xa = tt("musicwrapper");
        this.Ka = () => {
            Cx(this);
            this.ra = !1
        };
        this.pa = 0;
        this.Oa = () => {
            var r = this.A
                , u = r.F;
            Rx(this) && (u = {
                width: this.D.innerWidth,
                layout: r.A.F,
                proportional_on: u.aa,
                proportional_width: u.ma,
                recording_idx: r.I,
                volume: Math.round(100 * r.D.volume),
                speed: Math.round(100 * r.D.G),
                playhead_type: this.C.H.F,
                playhead_theme: this.ma,
                highlight_note: u.G ? "True" : "False",
                highlight_bar: u.ka ? "True" : "False",
                dark_mode: this.W,
                metronome: r.ja ? r.xa ? 1 : 2 : 0,
                count_in_before_play: r.D.M ? "True" : "False",
                count_in_before_loop: r.D.I ? "True" : "False",
                count_in_length: r.D.S,
                horizontal_scroll_type: u.X,
                vertical_scroll_type: u.ba,
                respect_line_breaks: u.da,
                stave_width: u.F ? -1 : u.$,
                appearance: JSON.stringify(oo(r.A)),
                instruments: JSON.stringify(Yw(r))
            },
                    uc("POST", `/api/v1/slices/${r.C.F}/userstate/`, u, Ir, Ir))
        }
        ;
        this.ma = 1;
        this.Z = "";
        this.ya = this.I = 0;
        this.ia = !0;
        this.C = new wx(m, m.A, this.$, a);
        this.V = this.Y = null;
        a.matchMedia && (c = a.matchMedia("(prefers-color-scheme: dark)"),
        c.addEventListener && I(c, "change", () => {
                Dx(this)
            }
        ));
        I(a, "FONT_LOADED", r => {
                m.Y.cache[r.data] = {};
                Fm(m.A, !0)
            }
        );
        I(a, "resize", () => {
                Ex(this)
            }
        );
        Ex(this);
        m.assign([32], () => {
                B(this.N, "active")
            }
        );
        m.assign([37, 7, 43], () => {
                Fx(this)
            }
            , [68], () => {
                m.ma ? Gx(this, !1, !1) : this.ba = m.I;
                Jx(this)
            }
            , [195], () => {
                Cx(this);
                Lx(this)
            }
            , [63, 2, 68, 215, 226, 227, 81, 85, 80], () => {
                var r = this.A, u = "", v = r.P, w = v.length, y;
                for (y = 0; y !== w; y++) {
                    var x = v[y];
                    (x.F ? tw(r) : 1) && (u += "<label " + (x.F ? 'id="synthlistitem" ' : "") + 'class="visible" data-backend="' + x.index + '"><div class="ui-tooltip-button link-text-center' + (x.index === r.I ? " active" : "") + '"><input type="radio" name="audiotype" class="invisible-radio">' + Kx(x) + '<span class="truncate-text reset-lh" title="' + Xa(x.name) + '">' + Xa(x.name) + "</span></div></label>")
                }
                tt("recordings-tooltip").innerHTML = u;
                Lx(this)
            }
            , [211], () => {
                Nx(this);
                Ox(this);
                Px(this)
            }
            , [120], () => {
                Ix(this, 4)
            }
        );
        gu(m, [167], () => {
                E(this.G, "darkmode", m.F.I)
            }
        );
        Rx(this) && m.assign([10], () => {
                m.assign([31, 68, 61, 57, 152, 153, 150, 151, 228, 159, 224, 158, 160, 166, 165, 168, 172, 169, 170, 72], () => {
                        Sx(this)
                    }
                )
            }
        );
        var n = Ts(this, "player-message-js")
            , p = () => {
            D(n, "active")
        }
            , q = 0;
        n && (m.assign([24], r => {
                q && clearTimeout(q);
                B(n, "active");
                n.getElementsByTagName("p")[0].innerHTML = r.data[0];
                E(n, "player-message-notice", 2 === r.data[2]);
                E(n, "player-message-success", 3 === r.data[2]);
                r.data[1] || (q = setTimeout(p, 4500))
            }
        ),
            J(n.getElementsByClassName("player-message-close")[0], () => {
                    D(n, "active")
                }
            ));
        soundslice.is_ss && Oy(m)
    }
}

function Oy(a) {
    function b() {
        l || ((v = kv(g)) ? (p = hr(g.C, h).O.U,
            q = gr(g.C, h),
            r = hr(g.A, h).O.U,
            u = gr(g.A, h),
            n = 0) : (p = br(a.H) ? hr(a.H, h).O.U : 0,
            q = gr(a.H, h),
            u = r = null,
            n = 1),
            m = a.P[a.I].G,
            l = new Date)
    }

    function c() {
        500 <= new Date - l && (v && 0 !== n || (r = br(a.H) ? hr(a.H, h).O.U : 0,
            u = gr(a.H, h),
            v = !1,
            n = 1),
            k.push([p, q, r, u, m, n, v ? 1 : 0]));
        l = null
    }

    function d() {
        if (!a.N && !C) {
            var F = {
                s: a.C.ma,
                plays: JSON.stringify(k),
                t: z,
                m: !1
            };
            w && (F.sid = w);
            C = !0;
            // uc("POST", "/practicesession/", F, H => {
            //         w || (w = H.sid);
            //         C = !1
            //     }
            //     , () => {
            //         C = !1
            //     }
            // );
            k.length = 0;
            x = new Date
        }
    }

    function e() {
        var F = new Date;
        z += Math.min(F - y, 3E5);
        y = F;
        12E4 <= F - x && d()
    }

    var f = a.D
        , g = a.M
        , h = a.A
        , k = []
        , l = null
        , m = null
        , n = 0
        , p = 0
        , q = 0
        , r = null
        , u = null
        , v = !1
        , w = null
        , y = new Date
        , x = y
        , z = 0
        , C = !1;
    I(window, "pagehide", () => {
            e();
            d()
        }
    );
    a.assign([51, 68, 60, 59, 25, 13, 57, 61, 62, 224, 158, 225, 76, 75, 49, 73, 30], () => {
            e()
        }
        , [34], () => {
            n++
        }
        , [53, 14], () => {
            e();
            au(f) && (c(),
                b())
        }
        , [43], () => {
            e();
            b()
        }
        , [40], () => {
            c();
            e();
            d()
        }
        , [32], () => {
            d()
        }
    )
}
;

function Py(a) {
    return 0 !== a && 52 !== a ? (a %= 7,
    2 !== a && 5 !== a) : !1
}

function Qy(a) {
    var b = a.A;
    return 2 + 7 * (a.C - 1) + b.A + (1 === b.C ? 1 : 0)
}

function Ry(a, b, c, d) {
    a.I = b;
    a.F = c;
    if (d !== a.C)
        for (a.C = d,
                 a.H = .55 * d,
                 a = a.D,
                 d *= .08,
                 b = 0; 7 !== b; b++) {
            c = 0;
            if (1 === b || 4 === b)
                c = d;
            else if (6 === b || 3 === b)
                c = -d;
            a[b] = c
        }
}

function Sy(a, b, c) {
    if (b !== a.width || c !== a.height)
        b !== a.width && yd(a.A, b),
        c !== a.height && (Ed(a.A, c),
            a.G = .65 * c),
            a.width = b,
            a.height = c
}

function Ty(a) {
    var b = a.A
        , c = a.width
        , d = a.height
        , e = a.I
        , f = a.C;
    a = a.F;
    K(b, "#fff");
    M(b, 0, 0, c, d);
    K(b, "#aaa");
    for (e += 1; e--;)
        M(b, f * e - .5, 0, 1, d);
    M(b, 0, 0, c, 1);
    M(b, 0, d - 1, c, 1);
    K(b, "#999");
    Wd(b, "#999");
    te(b, f * (23 - a + .5), 7 * d / 8, f / 8, !0);
    Rd(b, 14, 2)
}

function Uy(a) {
    var b = a.A
        , c = a.D
        , d = a.I
        , e = a.C
        , f = a.H
        , g = f / 2
        , h = a.F;
    a = a.G;
    var k;
    K(b, "#000");
    for (k = h; k !== d + h + 1; k++)
        Py(k) && M(b, e * (k - h) - g + c[k % 7], 1, f, a)
}

function Vy(a, b, c, d, e, f) {
    if (!(0 > b || 52 <= b)) {
        var g = a.A
            , h = a.C
            , k = a.G
            , l = a.H
            , m = a.F;
        K(g, e + Math.round(100 * d) / 100 + ")");
        c ? (b = h * (b - m),
            M(g, b + .5, 1, h - 1, a.height - 2)) : (b = h * (b - m) - l / 2 + a.D[b % 7],
            M(g, b + 1, 2, l - 2, k - 2));
        null !== f && (k = c ? k + (a.height - k) / 2 : k / 2,
            b += (c ? h : l) / 2,
            K(g, "#ddd"),
            Wd(g, "#bbb"),
            te(g, b, k, 3 * h / 5, !0),
            K(g, "#000"),
            Yd(g, f, b - a.M.width(14, 2, f) / 2, k + .2 * h))
    }
}

class Wy {
    constructor(a, b) {
        this.A = a;
        this.M = b;
        this.F = this.H = this.G = this.I = this.C = this.height = this.width = 0;
        this.D = [];
        Ry(this, 52, 0, 20)
    }
}
;var Xy = [2, 4, 5, 7];

function Yy(a) {
    a.I = Math.floor((a.height - 2 * a.P) / (a.H - 1))
}

function Zy(a, b, c) {
    if (b !== a.width || c !== a.height)
        b !== a.width && (yd(a.F, b),
            yd(a.C, b)),
        c !== a.height && (Ed(a.F, c),
            Ed(a.C, c),
            mb(a.T, c)),
            a.width = b,
            a.height = c,
            Yy(a)
}

function $y(a, b, c) {
    var d = a.F;
    b = (a.D[b] + 3 + a.D[b + 1]) / 2;
    a.G ? te(d, a.width - b, c, 4, !1) : te(d, b, c, 4, !1)
}

function az(a) {
    var b = a.F, c = a.T, d = a.width, e = a.height, f = a.D, g = a.S, h = a.G, k = a.P, l = a.H, m = a.A, n = a.M,
        p = a.N, q = a.I, r = (d - 20 - 20) / (1 - 1 / Math.pow(2, (n + 1) / 12)), u;
    K(b, "#626262");
    M(b, 0, 0, d, e);
    for (u = f.length = 0; u !== n + 2; u++)
        f.push(40 + r - r / Math.pow(2, u / 12));
    if (g)
        for (K(b, "#868686"),
                 u = Xy.length; u--;) {
            r = b;
            var v = f[Xy[u]]
                , w = e;
            h ? M(r, d - v - 16, 0, 16, w) : M(r, v, 0, 16, w)
        }
    else
        for (K(b, "#868686"),
                 u = 1; u !== n + 1; u++)
            r = b,
                v = f[u],
                w = e,
                h ? M(r, d - v - 3, 0, 3, w) : M(r, v, 0, 3, w);
    g || (K(b, "#868686"),
        $y(a, 2, e / 2),
        $y(a, 4, e / 2),
    5 < n && ($y(a, 6, e / 2),
    7 < n && ($y(a, 8, e / 2),
    10 < n && ($y(a, 11, e / 3),
        $y(a, 11, 2 * e / 3),
    13 < n && ($y(a, 14, e / 2),
    15 < n && ($y(a, 16, e / 2),
    17 < n && ($y(a, 18, e / 2),
    20 < n && ($y(a, 20, e / 2),
    23 < n && ($y(a, 23, e / 3),
        $y(a, 23, 2 * e / 3))))))))));
    m ? (Mb(c, "block"),
        lb(c, (h ? d - f[m] : f[m] - 21) - e),
        c.innerText = "Capo " + m) : Mb(c, "none");
    K(b, "#bdbdbd");
    for (u = l; u--;)
        M(b, 0, k + u * q, d, 2 * (u + l) / (2 * l));
    if (!g && null !== p)
        for (K(b, "#626262"),
                 u = p.length; u--;)
            if (e = p[u])
                a = b,
                    c = k + (u - .5) * q,
                    e = f[e],
                    g = q + 2 + (u === l - 1 ? q : 0),
                    h ? M(a, d - e, c, e, g) : M(a, 0, c, e, g)
}

function bz(a) {
    var b = a.C;
    se(b, 0, 0, a.width, a.height);
    Rd(b, 11, 2, !0);
    Wd(b, "transparent")
}

function cz(a, b, c, d, e) {
    var f = a.C
        , g = a.width
        , h = a.S
        , k = a.G
        , l = a.D;
    c = a.P + c * a.I;
    0 === b ? b = 20 : (b += a.A,
        b = h ? l[b] + 8 : (l[b] + 3 + l[b - 1]) / 2);
    -1 === e ? K(f, "rgba(0, 0, 0, 0.5)") : K(f, "rgba(243, 164, 44, " + Math.round(100 * e) / 100 + ")");
    e = b;
    k ? te(f, g - e, c, 12, !1) : te(f, e, c, 12, !1);
    K(f, "#fff");
    a = b - a.V.width(11, 2, d, !0) / 2;
    c += 2.75;
    k ? Yd(f, d, g - a - Xd(f, d), c) : Yd(f, d, a, c)
}

class dz {
    constructor(a, b, c, d, e) {
        this.F = a;
        this.C = b;
        this.T = c;
        this.V = d;
        this.S = e;
        this.G = !1;
        this.H = 6;
        this.A = 0;
        this.M = 12;
        this.N = null;
        this.P = e ? 15 : 12;
        this.I = 0;
        this.D = [];
        this.height = this.width = 0
    }
}

function ez() {
    var a = Nb()
        , b = new Ny(window, t("appandedit"), a);
    b.A.assign([33], () => {
            B(b.H, "notation-loading")
        }
        , [32], () => {
            D(b.H, "notation-loading")
        }
    );
    wy(b, a);
    Zx(b);
    soundslice.webui = b
}

ez();

