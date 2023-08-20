(function (g, k, B, v, n, m, C, w, r, D, E, F, t, x, J) {
    function p(a) {
        for (var c = document.querySelectorAll(".modal.active"), f = c.length; f--;) a && v(c[f], "jsnoescape") || D(c[f]);
        B("BLUR_ALL")
    }

    function G(a) {
        a.preventDefault();
        p(!1)
    }

    function u(a) {
        a = a.getElementsByClassName("jsclosemodal");
        for (var c = a.length; c--;) k(a[c], "click", G)
    }

    function y(a) {
        var c = x(a.target, "data-modal");
        c && (a.preventDefault(), q(c, x(a.target, "data-modal-extra") || "", null, null))
    }

    function q(a, c, f, b) {
        var h = a + "-modal";
        if (!c && g(h)) r(h), b && b(); else {
            a = "/modals/" +
                a + "/";
            var e = g(h);
            e && e.parentNode.removeChild(e);
            c && (a += "?data=" + encodeURIComponent(c));
            t("GET", a, null, d => {
                document.body.insertAdjacentHTML("beforeend", d.modal);
                u(g(h));
                r(h);
                f && f();
                b && b()
            }, () => {
            })
        }
    }

    function z(a) {
        g("page-message-txt").innerText = a;
        n(g("page-message"), "active")
    }

    function A(a) {
        a = a.value.trim();
        "" !== a && (window.location = "/manage/?q=" + encodeURIComponent(a))
    }

    function H(a, c, f) {
        a.value === c && t("GET", `/manage/search-completions/?q=${c}`, null, f, () => {
        })
    }

    function I(a) {
        var c = g("globalsearchdropdown"),
            f = [], b = -1, h = null;
        c.innerHTML = "";
        k(a, "input focus", e => {
            var d = e.currentTarget.value.trim();
            C(c, "active", "" !== d);
            d && d === e.currentTarget.value && (clearTimeout(h), h = setTimeout(H, 200, a, d, l => {
                a.value === l.q && (c.innerHTML = l.html, f = c.querySelectorAll(".autocomplete-dropdown-item"), b = -1)
            }))
        }, "blur", () => {
            m(c, "active")
        }, "keydown", e => {
            var d = e.which, l = -1 === b ? null : f[b];
            13 === d ? (e.preventDefault(), -1 === b ? A(a) : l && l.href ? window.location = l.href : (a.value = l.innerText, A(a))) : 27 === d ? a.blur() : 32 === d ? l && !l.href && (a.value = l.innerText) :
                40 === d ? (e.preventDefault(), e = f.length - 1, -1 !== b && b !== e && m(f[b], "active"), b < e && (b += 1, n(f[b], "active"))) : 38 === d && (e.preventDefault(), -1 !== b && 0 < b && m(f[b], "active"), 0 < b && (--b, n(f[b], "active")))
        });
        k(c, "mousedown", e => {
            e.target.href && (window.location = e.target.href)
        })
    }

    window.soundslice.activateModalOpeners = function () {
        for (var a = document.getElementsByClassName("jsopenmodal"), c = a.length; c--;) k(a[c], "click", y)
    };
    window.soundslice.modalOpenerClick = y;
    window.soundslice.activateModalClosers = u;
    window.soundslice.closeActiveModal =
        p;
    window.soundslice.loadAjaxModal = q;
    window.soundslice.openUpgradeModal = function (a) {
        q("upgrade", "", null, () => {
            g("upgrade-modal-feature").innerText = a
        })
    };
    window.soundslice.showSuccessMessage = z;
    E(function () {
        var a = g("searchwrap"), c = g("searchlink"), f = g("page-message"), b, h;
        var e = document.getElementsByClassName("showloginmodal");
        for (h = e.length; h--;) k(e[h], "click", function (d) {
            d.preventDefault();
            r("loginmodal");
            setTimeout(function () {
                g("loginmodal_email").focus()
            }, 100)
        });
        c && a && k(c, "mousedown touchstart", function (d) {
            d.preventDefault();
            w(a, "active");
            g("searchbar").focus()
        });
        (b = g("settings-link")) && F(b, g("user-settings"), "active");
        (b = g("feedback-modal-button")) && k(b, "click", () => {
            q("feedback", "", () => {
                k(g("feedback-form"), "submit", d => {
                    d.preventDefault();
                    (d = d.target.feedback.value.trim()) && t("POST", "/api/v1/feedback/", {message: d}, l => {
                        z("Thanks for the feedback!");
                        p(!1)
                    }, () => {
                    })
                })
            }, null)
        });
        (b = g("close-page-message")) && k(b, "mousedown touchstart", function (d) {
            m(f, "active")
        });
        f && v(f, "active") && setTimeout(function () {
            m(f, "active")
        }, 4E3);
        (b =
            g("globalsearch")) && I(b);
        b = document.getElementsByClassName("header-search")[0];
        c = g("show-search-mobile");
        b && c && (k(c, "click", () => {
            n(document.body, "mobile-search-on");
            b.focus()
        }), k(g("globalsearchcancel"), "click", () => {
            m(document.body, "mobile-search-on")
        }));
        e = document.getElementsByClassName("mobile-menu-toggle");
        for (h = e.length; h--;) k(e[h], "mousedown", function () {
            w(document.body, "mobile-menu-on")
        });
        u(document);
        k(window, "keydown", function (d) {
            27 === d.which && p(!0)
        });
        // "serviceWorker" in navigator && navigator.serviceWorker.register("/serviceworker.js", {scope: "/"})
    })
})(utils.gid, utils.assign, utils.dispatch, utils.hasClass, utils.addClass, utils.removeClass, utils.addRemoveClass, utils.toggleClass, utils.openModal, utils.closeModal, utils.onready, utils.makeMenu, utils.ajax, utils.getDataAttribute, utils.makeSafe);
