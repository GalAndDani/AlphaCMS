(function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(typeof jQuery != "undefined" ? jQuery : window.Zepto)
})(function(n) {
    "use strict";

    function u(t) {
        var i = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), n(t.target).ajaxSubmit(i))
    }

    function f(t) {
        var r = t.target,
            u = n(r),
            f, i, e;
        if (!u.is("[type=submit],[type=image]")) {
            if (f = u.closest("[type=submit]"), f.length === 0) return;
            r = f[0]
        }
        i = this;
        i.clk = r;
        r.type == "image" && (t.offsetX !== undefined ? (i.clk_x = t.offsetX, i.clk_y = t.offsetY) : typeof n.fn.offset == "function" ? (e = u.offset(), i.clk_x = t.pageX - e.left, i.clk_y = t.pageY - e.top) : (i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop));
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function t() {
        if (n.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var i = {},
        r;
    i.fileapi = n("<input type='file'/>").get(0).files !== undefined;
    i.formdata = window.FormData !== undefined;
    r = !!n.fn.prop;
    n.fn.attr2 = function() {
        if (!r) return this.attr.apply(this, arguments);
        var n = this.prop.apply(this, arguments);
        return n && n.jquery || typeof n == "string" ? n : this.attr.apply(this, arguments)
    };
    n.fn.ajaxSubmit = function(u) {
        function ot(t) {
            for (var r = n.param(t, u.traditional).split("&"), o = r.length, e = [], f, i = 0; i < o; i++) r[i] = r[i].replace(/\+/g, " "), f = r[i].split("="), e.push([decodeURIComponent(f[0]), decodeURIComponent(f[1])]);
            return e
        }

        function st(t) {
            for (var f, r, s, o = new FormData, i = 0; i < t.length; i++) o.append(t[i].name, t[i].value);
            if (u.extraData)
                for (f = ot(u.extraData), i = 0; i < f.length; i++) f[i] && o.append(f[i][0], f[i][1]);
            return u.data = null, r = n.extend(!0, {}, n.ajaxSettings, u, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: e || "POST"
            }), u.uploadProgress && (r.xhr = function() {
                var t = n.ajaxSettings.xhr();
                return t.upload && t.upload.addEventListener("progress", function(n) {
                    var t = 0,
                        i = n.loaded || n.position,
                        r = n.total;
                    n.lengthComputable && (t = Math.ceil(i / r * 100));
                    u.uploadProgress(n, i, r, t)
                }, !1), t
            }), r.data = null, s = r.beforeSend, r.beforeSend = function(n, t) {
                t.data = u.formData ? u.formData : o;
                s && s.call(this, n, t)
            }, n.ajax(r)
        }

        function ft(i) {
            function ot(n) {
                var i = null;
                try {
                    n.contentWindow && (i = n.contentWindow.document)
                } catch (r) {
                    t("cannot get iframe.contentWindow document: " + r)
                }
                if (i) return i;
                try {
                    i = n.contentDocument ? n.contentDocument : n.document
                } catch (r) {
                    t("cannot get iframe.contentDocument: " + r);
                    i = n.document
                }
                return i
            }

            function st() {
                function h() {
                    try {
                        var n = ot(a).readyState;
                        t("state = " + n);
                        n && n.toLowerCase() == "uninitialized" && setTimeout(h, 50)
                    } catch (i) {
                        t("Server abort: ", i, " (", i.name, ")");
                        b(tt);
                        g && clearTimeout(g);
                        g = undefined
                    }
                }
                var u = f.attr2("target"),
                    s = f.attr2("action"),
                    r, i, c;
                l.setAttribute("target", d);
                (!e || /post/i.test(e)) && l.setAttribute("method", "POST");
                s != o.url && l.setAttribute("action", o.url);
                o.skipEncodingOverride || e && !/post/i.test(e) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                });
                o.timeout && (g = setTimeout(function() {
                    rt = !0;
                    b(ut)
                }, o.timeout));
                r = [];
                try {
                    if (o.extraData)
                        for (i in o.extraData) o.extraData.hasOwnProperty(i) && (n.isPlainObject(o.extraData[i]) && o.extraData[i].hasOwnProperty("name") && o.extraData[i].hasOwnProperty("value") ? r.push(n('<input type="hidden" name="' + o.extraData[i].name + '">').val(o.extraData[i].value).appendTo(l)[0]) : r.push(n('<input type="hidden" name="' + i + '">').val(o.extraData[i]).appendTo(l)[0]));
                    o.iframeTarget || v.appendTo("body");
                    a.attachEvent ? a.attachEvent("onload", b) : a.addEventListener("load", b, !1);
                    setTimeout(h, 15);
                    try {
                        l.submit()
                    } catch (y) {
                        c = document.createElement("form").submit;
                        c.apply(l)
                    }
                } finally {
                    l.setAttribute("action", s);
                    u ? l.setAttribute("target", u) : f.removeAttr("target");
                    n(r).remove()
                }
            }

            function b(i) {
                var r, u, w, f, k, d, e, c, l;
                if (!s.aborted && !lt) {
                    if (h = ot(a), h || (t("cannot access response document"), i = tt), i === ut && s) {
                        s.abort("timeout");
                        y.reject(s, "timeout");
                        return
                    }
                    if (i == tt && s) {
                        s.abort("server abort");
                        y.reject(s, "error", "server abort");
                        return
                    }
                    if (h && h.location.href != o.iframeSrc || rt) {
                        a.detachEvent ? a.detachEvent("onload", b) : a.removeEventListener("load", b, !1);
                        r = "success";
                        try {
                            if (rt) throw "timeout";
                            if (w = o.dataType == "xml" || h.XMLDocument || n.isXMLDoc(h), t("isXml=" + w), !w && window.opera && (h.body === null || !h.body.innerHTML) && --ct) {
                                t("requeing onLoad callback, DOM not available");
                                setTimeout(b, 250);
                                return
                            }
                            f = h.body ? h.body : h.documentElement;
                            s.responseText = f ? f.innerHTML : null;
                            s.responseXML = h.XMLDocument ? h.XMLDocument : h;
                            w && (o.dataType = "xml");
                            s.getResponseHeader = function(n) {
                                var t = {
                                    "content-type": o.dataType
                                };
                                return t[n.toLowerCase()]
                            };
                            f && (s.status = Number(f.getAttribute("status")) || s.status, s.statusText = f.getAttribute("statusText") || s.statusText);
                            k = (o.dataType || "").toLowerCase();
                            d = /(json|script|text)/.test(k);
                            d || o.textarea ? (e = h.getElementsByTagName("textarea")[0], e ? (s.responseText = e.value, s.status = Number(e.getAttribute("status")) || s.status, s.statusText = e.getAttribute("statusText") || s.statusText) : d && (c = h.getElementsByTagName("pre")[0], l = h.getElementsByTagName("body")[0], c ? s.responseText = c.textContent ? c.textContent : c.innerText : l && (s.responseText = l.textContent ? l.textContent : l.innerText))) : k == "xml" && !s.responseXML && s.responseText && (s.responseXML = at(s.responseText));
                            try {
                                ht = yt(s, k, o)
                            } catch (nt) {
                                r = "parsererror";
                                s.error = u = nt || r
                            }
                        } catch (nt) {
                            t("error caught: ", nt);
                            r = "error";
                            s.error = u = nt || r
                        }
                        s.aborted && (t("upload aborted"), r = null);
                        s.status && (r = s.status >= 200 && s.status < 300 || s.status === 304 ? "success" : "error");
                        r === "success" ? (o.success && o.success.call(o.context, ht, "success", s), y.resolve(s.responseText, "success", s), p && n.event.trigger("ajaxSuccess", [s, o])) : r && (u === undefined && (u = s.statusText), o.error && o.error.call(o.context, s, r, u), y.reject(s, "error", u), p && n.event.trigger("ajaxError", [s, o, u]));
                        p && n.event.trigger("ajaxComplete", [s, o]);
                        p && !--n.active && n.event.trigger("ajaxStop");
                        o.complete && o.complete.call(o.context, s, r);
                        lt = !0;
                        o.timeout && clearTimeout(g);
                        setTimeout(function() {
                            o.iframeTarget ? v.attr("src", o.iframeSrc) : v.remove();
                            s.responseXML = null
                        }, 100)
                    }
                }
            }
            var l = f[0],
                it, nt, o, p, d, v, a, s, k, w, rt, g, y = n.Deferred(),
                ut, tt, ft, et, ht, h, ct, lt;
            if (y.abort = function(n) {
                    s.abort(n)
                }, i)
                for (nt = 0; nt < c.length; nt++) it = n(c[nt]), r ? it.prop("disabled", !1) : it.removeAttr("disabled");
            if (o = n.extend(!0, {}, n.ajaxSettings, u), o.context = o.context || o, d = "jqFormIO" + (new Date).getTime(), o.iframeTarget ? (v = n(o.iframeTarget), w = v.attr2("name"), w ? d = w : v.attr2("name", d)) : (v = n('<iframe name="' + d + '" src="' + o.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), a = v[0], s = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(i) {
                        var r = i === "timeout" ? "timeout" : "aborted";
                        t("aborting upload... " + r);
                        this.aborted = 1;
                        try {
                            a.contentWindow.document.execCommand && a.contentWindow.document.execCommand("Stop")
                        } catch (u) {}
                        v.attr("src", o.iframeSrc);
                        s.error = r;
                        o.error && o.error.call(o.context, s, r, i);
                        p && n.event.trigger("ajaxError", [s, o, r]);
                        o.complete && o.complete.call(o.context, s, r)
                    }
                }, p = o.global, p && 0 == n.active++ && n.event.trigger("ajaxStart"), p && n.event.trigger("ajaxSend", [s, o]), o.beforeSend && o.beforeSend.call(o.context, s, o) === !1) return o.global && n.active--, y.reject(), y;
            if (s.aborted) return y.reject(), y;
            k = l.clk;
            k && (w = k.name, w && !k.disabled && (o.extraData = o.extraData || {}, o.extraData[w] = k.value, k.type == "image" && (o.extraData[w + ".x"] = l.clk_x, o.extraData[w + ".y"] = l.clk_y)));
            ut = 1;
            tt = 2;
            ft = n("meta[name=csrf-token]").attr("content");
            et = n("meta[name=csrf-param]").attr("content");
            et && ft && (o.extraData = o.extraData || {}, o.extraData[et] = ft);
            o.forceSync ? st() : setTimeout(st, 10);
            ct = 50;
            var at = n.parseXML || function(n, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(n)) : t = (new DOMParser).parseFromString(n, "text/xml"), t && t.documentElement && t.documentElement.nodeName != "parsererror" ? t : null
                },
                vt = n.parseJSON || function(s) {
                    return window.eval("(" + s + ")")
                },
                yt = function(t, i, r) {
                    var f = t.getResponseHeader("content-type") || "",
                        e = i === "xml" || !i && f.indexOf("xml") >= 0,
                        u = e ? t.responseXML : t.responseText;
                    return e && u.documentElement.nodeName === "parsererror" && n.error && n.error("parsererror"), r && r.dataFilter && (u = r.dataFilter(u, i)), typeof u == "string" && (i === "json" || !i && f.indexOf("json") >= 0 ? u = vt(u) : (i === "script" || !i && f.indexOf("javascript") >= 0) && n.globalEval(u)), u
                };
            return y
        }
        var e, b, o, f, a, v, c, y, s, l, h, d, g, nt, ut, p, w;
        if (!this.length) return t("ajaxSubmit: skipping submit process - no element selected"), this;
        if (f = this, typeof u == "function" ? u = {
                success: u
            } : u === undefined && (u = {}), e = u.type || this.attr2("method"), b = u.url || this.attr2("action"), o = typeof b == "string" ? n.trim(b) : "", o = o || window.location.href || "", o && (o = (o.match(/^([^#]+)/) || [])[1]), u = n.extend(!0, {
                url: o,
                success: n.ajaxSettings.success,
                type: e || n.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, u), a = {}, this.trigger("form-pre-serialize", [this, u, a]), a.veto) return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (u.beforeSerialize && u.beforeSerialize(this, u) === !1) return t("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        if (v = u.traditional, v === undefined && (v = n.ajaxSettings.traditional), c = [], s = this.formToArray(u.semantic, c), u.data && (u.extraData = u.data, y = n.param(u.data, v)), u.beforeSubmit && u.beforeSubmit(s, this, u) === !1) return t("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [s, this, u, a]), a.veto) return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        l = n.param(s, v);
        y && (l = l ? l + "&" + y : y);
        u.type.toUpperCase() == "GET" ? (u.url += (u.url.indexOf("?") >= 0 ? "&" : "?") + l, u.data = null) : u.data = l;
        h = [];
        u.resetForm && h.push(function() {
            f.resetForm()
        });
        u.clearForm && h.push(function() {
            f.clearForm(u.includeHidden)
        });
        !u.dataType && u.target ? (d = u.success || function() {}, h.push(function(t) {
            var i = u.replaceTarget ? "replaceWith" : "html";
            n(u.target)[i](t).each(d, arguments)
        })) : u.success && h.push(u.success);
        u.success = function(n, t, i) {
            for (var e = u.context || this, r = 0, o = h.length; r < o; r++) h[r].apply(e, [n, t, i || f, f])
        };
        u.error && (g = u.error, u.error = function(n, t, i) {
            var r = u.context || this;
            g.apply(r, [n, t, i, f])
        });
        u.complete && (nt = u.complete, u.complete = function(n, t) {
            var i = u.context || this;
            nt.apply(i, [n, t, f])
        });
        var et = n("input[type=file]:enabled", this).filter(function() {
                return n(this).val() !== ""
            }),
            tt = et.length > 0,
            it = "multipart/form-data",
            rt = f.attr("enctype") == it || f.attr("encoding") == it,
            k = i.fileapi && i.formdata;
        for (t("fileAPI :" + k), ut = (tt || rt) && !k, u.iframe !== !1 && (u.iframe || ut) ? u.closeKeepAlive ? n.get(u.closeKeepAlive, function() {
                p = ft(s)
            }) : p = ft(s) : p = (tt || rt) && k ? st(s) : n.ajax(u), f.removeData("jqxhr").data("jqxhr", p), w = 0; w < c.length; w++) c[w] = null;
        return this.trigger("form-submit-notify", [this, u]), this
    };
    n.fn.ajaxForm = function(i) {
        if (i = i || {}, i.delegation = i.delegation && n.isFunction(n.fn.on), !i.delegation && this.length === 0) {
            var r = {
                s: this.selector,
                c: this.context
            };
            return !n.isReady && r.s ? (t("DOM not ready, queuing ajaxForm"), n(function() {
                n(r.s, r.c).ajaxForm(i)
            }), this) : (t("terminating; zero elements found by selector" + (n.isReady ? "" : " (DOM not ready)")), this)
        }
        if (i.delegation) {
            n(document).off("submit.form-plugin", this.selector, u).off("click.form-plugin", this.selector, f).on("submit.form-plugin", this.selector, i, u).on("click.form-plugin", this.selector, i, f);
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", i, u).bind("click.form-plugin", i, f)
    };
    n.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    n.fn.formToArray = function(t, r) {
        var o = [],
            e, c, l, s, f, h, u, p, w, a, y, v;
        if (this.length === 0 || (e = this[0], c = t ? e.getElementsByTagName("*") : e.elements, !c)) return o;
        for (l = 0, p = c.length; l < p; l++)
            if (u = c[l], f = u.name, f && !u.disabled) {
                if (t && e.clk && u.type == "image") {
                    e.clk == u && (o.push({
                        name: f,
                        value: n(u).val(),
                        type: u.type
                    }), o.push({
                        name: f + ".x",
                        value: e.clk_x
                    }, {
                        name: f + ".y",
                        value: e.clk_y
                    }));
                    continue
                }
                if (h = n.fieldValue(u, !0), h && h.constructor == Array)
                    for (r && r.push(u), s = 0, w = h.length; s < w; s++) o.push({
                        name: f,
                        value: h[s]
                    });
                else if (i.fileapi && u.type == "file")
                    if (r && r.push(u), a = u.files, a.length)
                        for (s = 0; s < a.length; s++) o.push({
                            name: f,
                            value: a[s],
                            type: u.type
                        });
                    else o.push({
                        name: f,
                        value: "",
                        type: u.type
                    });
                else h !== null && typeof h != "undefined" && (r && r.push(u), o.push({
                    name: f,
                    value: h,
                    type: u.type,
                    required: u.required
                }))
            }
        return !t && e.clk && (y = n(e.clk), v = y[0], f = v.name, f && !v.disabled && v.type == "image" && (o.push({
            name: f,
            value: y.val()
        }), o.push({
            name: f + ".x",
            value: e.clk_x
        }, {
            name: f + ".y",
            value: e.clk_y
        }))), o
    };
    n.fn.formSerialize = function(t) {
        return n.param(this.formToArray(t))
    };
    n.fn.fieldSerialize = function(t) {
        var i = [];
        return this.each(function() {
            var f = this.name,
                r, u, e;
            if (f)
                if (r = n.fieldValue(this, t), r && r.constructor == Array)
                    for (u = 0, e = r.length; u < e; u++) i.push({
                        name: f,
                        value: r[u]
                    });
                else r !== null && typeof r != "undefined" && i.push({
                    name: this.name,
                    value: r
                })
        }), n.param(i)
    };
    n.fn.fieldValue = function(t) {
        for (var f, i, r = [], u = 0, e = this.length; u < e; u++)(f = this[u], i = n.fieldValue(f, t), i !== null && typeof i != "undefined" && (i.constructor != Array || i.length)) && (i.constructor == Array ? n.merge(r, i) : r.push(i));
        return r
    };
    n.fieldValue = function(t, i) {
        var a = t.name,
            u = t.type,
            h = t.tagName.toLowerCase(),
            e, o, r, f;
        if (i === undefined && (i = !0), i && (!a || t.disabled || u == "reset" || u == "button" || (u == "checkbox" || u == "radio") && !t.checked || (u == "submit" || u == "image") && t.form && t.form.clk != t || h == "select" && t.selectedIndex == -1)) return null;
        if (h == "select") {
            if (e = t.selectedIndex, e < 0) return null;
            var c = [],
                l = t.options,
                s = u == "select-one",
                v = s ? e + 1 : l.length;
            for (o = s ? e : 0; o < v; o++)
                if (r = l[o], r.selected) {
                    if (f = r.value, f || (f = r.attributes && r.attributes.value && !r.attributes.value.specified ? r.text : r.value), s) return f;
                    c.push(f)
                }
            return c
        }
        return n(t).val()
    };
    n.fn.clearForm = function(t) {
        return this.each(function() {
            n("input,select,textarea", this).clearFields(t)
        })
    };
    n.fn.clearFields = n.fn.clearInputs = function(t) {
        var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var r = this.type,
                u = this.tagName.toLowerCase();
            i.test(r) || u == "textarea" ? this.value = "" : r == "checkbox" || r == "radio" ? this.checked = !1 : u == "select" ? this.selectedIndex = -1 : r == "file" ? /MSIE/.test(navigator.userAgent) ? n(this).replaceWith(n(this).clone(!0)) : n(this).val("") : t && (t === !0 && /hidden/.test(r) || typeof t == "string" && n(this).is(t)) && (this.value = "")
        })
    };
    n.fn.resetForm = function() {
        return this.each(function() {
            typeof this.reset != "function" && (typeof this.reset != "object" || this.reset.nodeType) || this.reset()
        })
    };
    n.fn.enable = function(n) {
        return n === undefined && (n = !0), this.each(function() {
            this.disabled = !n
        })
    };
    n.fn.selected = function(t) {
        return t === undefined && (t = !0), this.each(function() {
            var r = this.type,
                i;
            r == "checkbox" || r == "radio" ? this.checked = t : this.tagName.toLowerCase() == "option" && (i = n(this).parent("select"), t && i[0] && i[0].type == "select-one" && i.find("option").selected(!1), this.selected = t)
        })
    };
    n.fn.ajaxSubmit.debug = !1
}),
function(n) {
    var t, rt, h, o, w, c, wt, l = "Close",
        bt = "BeforeClose",
        ii = "AfterClose",
        ri = "BeforeAppend",
        ut = "MarkupParse",
        ft = "Open",
        kt = "Change",
        et = "mfp",
        u = "." + et,
        b = "mfp-ready",
        dt = "mfp-removing",
        ot = "mfp-prevent-close",
        k = function() {},
        st = !!window.jQuery,
        f = n(window),
        r = function(n, i) {
            t.ev.on(et + n + u, i)
        },
        e = function(t, i, r, u) {
            var f = document.createElement("div");
            return f.className = "mfp-" + t, r && (f.innerHTML = r), u ? i && i.appendChild(f) : (f = n(f), i && f.appendTo(i)), f
        },
        i = function(i, r) {
            t.ev.triggerHandler(et + i, r);
            t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, n.isArray(r) ? r : [r]))
        },
        ht = function(i) {
            return i === wt && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = n(t.st.closeMarkup.replace("%title%", t.st.tClose)), wt = i), t.currTemplate.closeBtn
        },
        ct = function() {
            n.magnificPopup.instance || (t = new k, t.init(), n.magnificPopup.instance = t)
        },
        ui = function() {
            var n = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== n.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in n) return !0;
            return !1
        },
        v, d, g, nt, lt, s, ni, vt, ti, tt, pt, it;
    k.prototype = {
        constructor: k,
        init: function() {
            var i = navigator.appVersion;
            t.isIE7 = -1 !== i.indexOf("MSIE 7.");
            t.isIE8 = -1 !== i.indexOf("MSIE 8.");
            t.isLowIE = t.isIE7 || t.isIE8;
            t.isAndroid = /android/gi.test(i);
            t.isIOS = /iphone|ipad|ipod/gi.test(i);
            t.supportsTransition = ui();
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
            o = n(document);
            t.popupsCache = {}
        },
        open: function(s) {
            var l, a, w, k, v, d, y, g, p;
            if (h || (h = n(document.body)), s.isObj === !1) {
                for (t.items = s.items.toArray(), t.index = 0, w = s.items, l = 0; w.length > l; l++)
                    if (a = w[l], a.parsed && (a = a.el[0]), a === s.el[0]) {
                        t.index = l;
                        break
                    }
            } else t.items = n.isArray(s.items) ? s.items : [s.items], t.index = s.index || 0;
            if (t.isOpen) return t.updateItemHTML(), void 0;
            for (t.types = [], c = "", t.ev = s.mainEl && s.mainEl.length ? s.mainEl.eq(0) : o, s.key ? (t.popupsCache[s.key] || (t.popupsCache[s.key] = {}), t.currTemplate = t.popupsCache[s.key]) : t.currTemplate = {}, t.st = n.extend(!0, {}, n.magnificPopup.defaults, s), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = e("bg").on("click" + u, function() {
                    t.close()
                }), t.wrap = e("wrap").attr("tabindex", -1).on("click" + u, function(n) {
                    t._checkIfClose(n.target) && t.close()
                }), t.container = e("container", t.wrap)), t.contentContainer = e("content"), t.st.preloader && (t.preloader = e("preloader", t.container, t.st.tLoading)), k = n.magnificPopup.modules, l = 0; k.length > l; l++) v = k[l], v = v.charAt(0).toUpperCase() + v.slice(1), t["init" + v].call(t);
            return i("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (r(ut, function(n, t, i, r) {
                i.close_replaceWith = ht(r.type)
            }), c += " mfp-close-btn-in") : t.wrap.append(ht())), t.st.alignTop && (c += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: f.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && o.on("keyup" + u, function(n) {
                27 === n.keyCode && t.close()
            }), f.on("resize" + u, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (c += " mfp-auto-cursor"), c && t.wrap.addClass(c), d = t.wH = f.height(), y = {}, t.fixedContentPos && t._hasScrollBar(d) && (g = t._getScrollbarSize(), g && (y.marginRight = g)), t.fixedContentPos && (t.isIE7 ? n("body, html").css("overflow", "hidden") : y.overflow = "hidden"), p = t.st.mainClass, t.isIE7 && (p += " mfp-ie7"), p && t._addClassToMFP(p), t.updateItemHTML(), i("BuildControls"), n("html").css(y), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || h), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(b), t._setFocus()) : t.bgOverlay.addClass(b);
                o.on("focusin" + u, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(d), i(ft), s
        },
        close: function() {
            t.isOpen && (i(bt), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(dt), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            var r, f;
            i(l);
            r = dt + " " + b + " ";
            (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (r += t.st.mainClass + " "), t._removeClassFromMFP(r), t.fixedContentPos) && (f = {
                marginRight: ""
            }, t.isIE7 ? n("body, html").css("overflow", "") : f.overflow = "", n("html").css(f));
            o.off("keyup" + u + " focusin" + u);
            t.ev.off(u);
            t.wrap.attr("class", "mfp-wrap").removeAttr("style");
            t.bgOverlay.attr("class", "mfp-bg");
            t.container.attr("class", "mfp-container");
            !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach();
            t._lastFocusedEl && n(t._lastFocusedEl).focus();
            t.currItem = null;
            t.content = null;
            t.currTemplate = null;
            t.prevHeight = 0;
            i(ii)
        },
        updateSize: function(n) {
            if (t.isIOS) {
                var u = document.documentElement.clientWidth / window.innerWidth,
                    r = window.innerHeight * u;
                t.wrap.css("height", r);
                t.wH = r
            } else t.wH = n || f.height();
            t.fixedContentPos || t.wrap.css("height", t.wH);
            i("Resize")
        },
        updateItemHTML: function() {
            var u = t.items[t.index],
                r, f, e;
            t.contentContainer.detach();
            t.content && t.content.detach();
            u.parsed || (u = t.parseEl(t.index));
            r = u.type;
            (i("BeforeChange", [t.currItem ? t.currItem.type : "", r]), t.currItem = u, t.currTemplate[r]) || (f = t.st[r] ? t.st[r].markup : !1, i("FirstMarkupParse", f), t.currTemplate[r] = f ? n(f) : !0);
            w && w !== u.type && t.container.removeClass("mfp-" + w + "-holder");
            e = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](u, t.currTemplate[r]);
            t.appendContent(e, r);
            u.preloaded = !0;
            i(kt, u);
            w = u.type;
            t.container.prepend(t.contentContainer);
            i("AfterChange")
        },
        appendContent: function(n, r) {
            t.content = n;
            n ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[r] === !0 ? t.content.find(".mfp-close").length || t.content.append(ht()) : t.content = n : t.content = "";
            i(ri);
            t.container.addClass("mfp-" + r + "-holder");
            t.contentContainer.append(t.content)
        },
        parseEl: function(r) {
            var o, u = t.items[r],
                e, f;
            if (u.tagName ? u = {
                    el: n(u)
                } : (o = u.type, u = {
                    data: u,
                    src: u.src
                }), u.el) {
                for (e = t.types, f = 0; e.length > f; f++)
                    if (u.el.hasClass("mfp-" + e[f])) {
                        o = e[f];
                        break
                    }
                u.src = u.el.attr("data-mfp-src");
                u.src || (u.src = u.el.attr("href"))
            }
            return u.type = o || t.st.type || "inline", u.index = r, u.parsed = !0, t.items[r] = u, i("ElementParse", u), t.items[r]
        },
        addGroup: function(n, i) {
            var u = function(r) {
                    r.mfpEl = this;
                    t._openClick(r, n, i)
                },
                r;
            i || (i = {});
            r = "click.magnificPopup";
            i.mainEl = n;
            i.items ? (i.isObj = !0, n.off(r).on(r, u)) : (i.isObj = !1, i.delegate ? n.off(r).on(r, i.delegate, u) : (i.items = n, n.off(r).on(r, u)))
        },
        _openClick: function(i, r, u) {
            var o = void 0 !== u.midClick ? u.midClick : n.magnificPopup.defaults.midClick,
                e;
            if (o || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                if (e = void 0 !== u.disableOn ? u.disableOn : n.magnificPopup.defaults.disableOn, e)
                    if (n.isFunction(e)) {
                        if (!e.call(t)) return !0
                    } else if (e > f.width()) return !0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation());
                u.el = n(i.mfpEl);
                u.delegate && (u.items = r.find(u.delegate));
                t.open(u)
            }
        },
        updateStatus: function(n, r) {
            if (t.preloader) {
                rt !== n && t.container.removeClass("mfp-s-" + rt);
                r || "loading" !== n || (r = t.st.tLoading);
                var u = {
                    status: n,
                    text: r
                };
                i("UpdateStatus", u);
                n = u.status;
                r = u.text;
                t.preloader.html(r);
                t.preloader.find("a").on("click", function(n) {
                    n.stopImmediatePropagation()
                });
                t.container.addClass("mfp-s-" + n);
                rt = n
            }
        },
        _checkIfClose: function(i) {
            if (!n(i).hasClass(ot)) {
                var r = t.st.closeOnContentClick,
                    u = t.st.closeOnBgClick;
                if (r && u || !t.content || n(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                if (i === t.content[0] || n.contains(t.content[0], i)) {
                    if (r) return !0
                } else if (u && n.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(n) {
            t.bgOverlay.addClass(n);
            t.wrap.addClass(n)
        },
        _removeClassFromMFP: function(n) {
            this.bgOverlay.removeClass(n);
            t.wrap.removeClass(n)
        },
        _hasScrollBar: function(n) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (n || f.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(i) {
            if (i.target !== t.wrap[0] && !n.contains(t.wrap[0], i.target)) return (t._setFocus(), !1)
        },
        _parseMarkup: function(t, r, f) {
            var e;
            f.data && (r = n.extend(f.data, r));
            i(ut, [t, r, f]);
            n.each(r, function(n, i) {
                var r, f;
                if (void 0 === i || i === !1) return !0;
                (e = n.split("_"), e.length > 1) ? (r = t.find(u + "-" + e[0]), r.length > 0 && (f = e[1], "replaceWith" === f ? r[0] !== i[0] && r.replaceWith(i) : "img" === f ? r.is("img") ? r.attr("src", i) : r.replaceWith('<img src="' + i + '" class="' + r.attr("class") + '" />') : r.attr(e[1], i))) : t.find(u + "-" + n).html(i)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var n = document.createElement("div");
                n.id = "mfp-sbm";
                n.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                document.body.appendChild(n);
                t.scrollbarSize = n.offsetWidth - n.clientWidth;
                document.body.removeChild(n)
            }
            return t.scrollbarSize
        }
    };
    n.magnificPopup = {
        instance: null,
        proto: k.prototype,
        modules: [],
        open: function(t, i) {
            return ct(), t = t ? n.extend(!0, {}, t) : {}, t.isObj = !0, t.index = i || 0, this.instance.open(t)
        },
        close: function() {
            return n.magnificPopup.instance && n.magnificPopup.instance.close()
        },
        registerModule: function(t, i) {
            i.options && (n.magnificPopup.defaults[t] = i.options);
            n.extend(this.proto, i.proto);
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;<\/button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    };
    n.fn.magnificPopup = function(i) {
        var r, u, f, e;
        return ct(), r = n(this), "string" == typeof i ? "open" === i ? (f = st ? r.data("magnificPopup") : r[0].magnificPopup, e = parseInt(arguments[1], 10) || 0, f.items ? u = f.items[e] : (u = r, f.delegate && (u = u.find(f.delegate)), u = u.eq(e)), t._openClick({
            mfpEl: u
        }, r, f)) : t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1)) : (i = n.extend(!0, {}, i), st ? r.data("magnificPopup", i) : r[0].magnificPopup = i, t.addGroup(r, i)), r
    };
    nt = "inline";
    lt = function() {
        g && (d.after(g.addClass(v)).detach(), g = null)
    };
    n.magnificPopup.registerModule(nt, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(nt);
                r(l + "." + nt, function() {
                    lt()
                })
            },
            getInline: function(i, r) {
                var f, u, o;
                return (lt(), i.src) ? (f = t.st.inline, u = n(i.src), u.length ? (o = u[0].parentNode, o && o.tagName && (d || (v = f.hiddenClass, d = e(v), v = "mfp-" + v), g = u.after(d).detach().removeClass(v)), t.updateStatus("ready")) : (t.updateStatus("error", f.tNotFound), u = n("<div>")), i.inlineElement = u, u) : (t.updateStatus("ready"), t._parseMarkup(r, {}, i), r)
            }
        }
    });
    var y, p = "ajax",
        at = function() {
            y && h.removeClass(y)
        },
        gt = function() {
            at();
            t.req && t.req.abort()
        };
    n.magnificPopup.registerModule(p, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content<\/a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(p);
                y = t.st.ajax.cursor;
                r(l + "." + p, gt);
                r("BeforeChange." + p, gt)
            },
            getAjax: function(r) {
                y && h.addClass(y);
                t.updateStatus("loading");
                var u = n.extend({
                    url: r.src,
                    success: function(u, f, e) {
                        var o = {
                            data: u,
                            xhr: e
                        };
                        i("ParseAjax", o);
                        t.appendContent(n(o.data), p);
                        r.finished = !0;
                        at();
                        t._setFocus();
                        setTimeout(function() {
                            t.wrap.addClass(b)
                        }, 16);
                        t.updateStatus("ready");
                        i("AjaxContentAdded")
                    },
                    error: function() {
                        at();
                        r.finished = r.loadError = !0;
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", r.src))
                    }
                }, t.st.ajax.settings);
                return t.req = n.ajax(u), ""
            }
        }
    });
    ni = function(i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var r = t.st.image.titleSrc;
        if (r) {
            if (n.isFunction(r)) return r.call(t, i);
            if (i.el) return i.el.attr(r) || ""
        }
        return ""
    };
    n.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"><\/div><figure><div class="mfp-img"><\/div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"><\/div><div class="mfp-counter"><\/div><\/div><\/figcaption><\/figure><\/div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image<\/a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var n = t.st.image,
                    i = ".image";
                t.types.push("image");
                r(ft + i, function() {
                    "image" === t.currItem.type && n.cursor && h.addClass(n.cursor)
                });
                r(l + i, function() {
                    n.cursor && h.removeClass(n.cursor);
                    f.off("resize" + u)
                });
                r("Resize" + i, t.resizeImage);
                t.isLowIE && r("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var n = t.currItem,
                    i;
                n && n.img && t.st.image.verticalFit && (i = 0, t.isLowIE && (i = parseInt(n.img.css("padding-top"), 10) + parseInt(n.img.css("padding-bottom"), 10)), n.img.css("max-height", t.wH - i))
            },
            _onImageHasSize: function(n) {
                n.img && (n.hasSize = !0, s && clearInterval(s), n.isCheckingImgSize = !1, i("ImageHasSize", n), n.imgHidden && (t.content && t.content.removeClass("mfp-loading"), n.imgHidden = !1))
            },
            findImageSize: function(n) {
                var i = 0,
                    u = n.img[0],
                    r = function(f) {
                        s && clearInterval(s);
                        s = setInterval(function() {
                            return u.naturalWidth > 0 ? (t._onImageHasSize(n), void 0) : (i > 200 && clearInterval(s), i++, 3 === i ? r(10) : 40 === i ? r(50) : 100 === i && r(500), void 0)
                        }, f)
                    };
                r(1)
            },
            getImage: function(r, u) {
                var e = 0,
                    o = function() {
                        r && (r.img[0].complete ? (r.img.off(".mfploader"), r === t.currItem && (t._onImageHasSize(r), t.updateStatus("ready")), r.hasSize = !0, r.loaded = !0, i("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(o, 100) : h()))
                    },
                    h = function() {
                        r && (r.img.off(".mfploader"), r === t.currItem && (t._onImageHasSize(r), t.updateStatus("error", c.tError.replace("%url%", r.src))), r.hasSize = !0, r.loaded = !0, r.loadError = !0)
                    },
                    c = t.st.image,
                    l = u.find(".mfp-img"),
                    f;
                return l.length && (f = document.createElement("img"), f.className = "mfp-img", r.img = n(f).on("load.mfploader", o).on("error.mfploader", h), f.src = r.src, l.is("img") && (r.img = r.img.clone()), f = r.img[0], f.naturalWidth > 0 ? r.hasSize = !0 : f.width || (r.hasSize = !1)), t._parseMarkup(u, {
                    title: ni(r),
                    img_replaceWith: r.img
                }, r), t.resizeImage(), r.hasSize ? (s && clearInterval(s), r.loadError ? (u.addClass("mfp-loading"), t.updateStatus("error", c.tError.replace("%url%", r.src))) : (u.removeClass("mfp-loading"), t.updateStatus("ready")), u) : (t.updateStatus("loading"), r.loading = !0, r.hasSize || (r.imgHidden = !0, u.addClass("mfp-loading"), t.findImageSize(r)), u)
            }
        }
    });
    ti = function() {
        return void 0 === vt && (vt = void 0 !== document.createElement("p").style.MozTransform), vt
    };
    n.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(n) {
                return n.is("img") ? n : n.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var u, f = t.st.zoom,
                    o = ".zoom";
                if (f.enabled && t.supportsTransition) {
                    var e, n, h = f.duration,
                        c = function(n) {
                            var r = n.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                u = "all " + f.duration / 1e3 + "s " + f.easing,
                                t = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                i = "transition";
                            return t["-webkit-" + i] = t["-moz-" + i] = t["-o-" + i] = t[i] = u, r.css(t), r
                        },
                        s = function() {
                            t.content.css("visibility", "visible")
                        };
                    r("BuildControls" + o, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(e), t.content.css("visibility", "hidden"), u = t._getItemToZoom(), !u) return s(), void 0;
                            n = c(u);
                            n.css(t._getOffset());
                            t.wrap.append(n);
                            e = setTimeout(function() {
                                n.css(t._getOffset(!0));
                                e = setTimeout(function() {
                                    s();
                                    setTimeout(function() {
                                        n.remove();
                                        u = n = null;
                                        i("ZoomAnimationEnded")
                                    }, 16)
                                }, h)
                            }, 16)
                        }
                    });
                    r(bt + o, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(e), t.st.removalDelay = h, !u) {
                                if (u = t._getItemToZoom(), !u) return;
                                n = c(u)
                            }
                            n.css(t._getOffset(!0));
                            t.wrap.append(n);
                            t.content.css("visibility", "hidden");
                            setTimeout(function() {
                                n.css(t._getOffset())
                            }, 16)
                        }
                    });
                    r(l + o, function() {
                        t._allowZoom() && (s(), n && n.remove(), u = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(i) {
                var r, u;
                r = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var f = r.offset(),
                    e = parseInt(r.css("padding-top"), 10),
                    o = parseInt(r.css("padding-bottom"), 10);
                return f.top -= n(window).scrollTop() - e, u = {
                    width: r.width(),
                    height: (st ? r.innerHeight() : r[0].offsetHeight) - o - e
                }, ti() ? u["-moz-transform"] = u.transform = "translate(" + f.left + "px," + f.top + "px)" : (u.left = f.left, u.top = f.top), u
            }
        }
    });
    var a = "iframe",
        fi = "//about:blank",
        yt = function(n) {
            if (t.currTemplate[a]) {
                var i = t.currTemplate[a].find("iframe");
                i.length && (n || (i[0].src = fi), t.isIE8 && i.css("display", n ? "block" : "none"))
            }
        };
    n.magnificPopup.registerModule(a, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"><\/div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen><\/iframe><\/div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(a);
                r("BeforeChange", function(n, t, i) {
                    t !== i && (t === a ? yt() : i === a && yt(!0))
                });
                r(l + "." + a, function() {
                    yt()
                })
            },
            getIframe: function(i, r) {
                var u = i.src,
                    f = t.st.iframe,
                    e;
                return n.each(f.patterns, function() {
                    if (u.indexOf(this.index) > -1) return (this.id && (u = "string" == typeof this.id ? u.substr(u.lastIndexOf(this.id) + this.id.length, u.length) : this.id.call(this, u)), u = this.src.replace("%id%", u), !1)
                }), e = {}, f.srcAction && (e[f.srcAction] = u), t._parseMarkup(r, e, i), t.updateStatus("ready"), r
            }
        }
    });
    tt = function(n) {
        var i = t.items.length;
        return n > i - 1 ? n - i : 0 > n ? i + n : n
    };
    pt = function(n, t, i) {
        return n.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
    };
    n.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><\/button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var u = t.st.gallery,
                    i = ".mfp-gallery",
                    f = Boolean(n.fn.mfpFastClick);
                return t.direction = !0, u && u.enabled ? (c += " mfp-gallery", r(ft + i, function() {
                    u.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        if (t.items.length > 1) return (t.next(), !1)
                    });
                    o.on("keydown" + i, function(n) {
                        37 === n.keyCode ? t.prev() : 39 === n.keyCode && t.next()
                    })
                }), r("UpdateStatus" + i, function(n, i) {
                    i.text && (i.text = pt(i.text, t.currItem.index, t.items.length))
                }), r(ut + i, function(n, i, r, f) {
                    var e = t.items.length;
                    r.counter = e > 1 ? pt(u.tCounter, f.index, e) : ""
                }), r("BuildControls" + i, function() {
                    if (t.items.length > 1 && u.arrows && !t.arrowLeft) {
                        var o = u.arrowMarkup,
                            i = t.arrowLeft = n(o.replace(/%title%/gi, u.tPrev).replace(/%dir%/gi, "left")).addClass(ot),
                            r = t.arrowRight = n(o.replace(/%title%/gi, u.tNext).replace(/%dir%/gi, "right")).addClass(ot),
                            s = f ? "mfpFastClick" : "click";
                        i[s](function() {
                            t.prev()
                        });
                        r[s](function() {
                            t.next()
                        });
                        t.isIE7 && (e("b", i[0], !1, !0), e("a", i[0], !1, !0), e("b", r[0], !1, !0), e("a", r[0], !1, !0));
                        t.container.append(i.add(r))
                    }
                }), r(kt + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout);
                    t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages();
                        t._preloadTimeout = null
                    }, 16)
                }), r(l + i, function() {
                    o.off(i);
                    t.wrap.off("click" + i);
                    t.arrowLeft && f && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick();
                    t.arrowRight = t.arrowLeft = null
                }), void 0) : !1
            },
            next: function() {
                t.direction = !0;
                t.index = tt(t.index + 1);
                t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1;
                t.index = tt(t.index - 1);
                t.updateItemHTML()
            },
            goTo: function(n) {
                t.direction = n >= t.index;
                t.index = n;
                t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                for (var i = t.st.gallery.preload, r = Math.min(i[0], t.items.length), u = Math.min(i[1], t.items.length), n = 1;
                    (t.direction ? u : r) >= n; n++) t._preloadItem(t.index + n);
                for (n = 1;
                    (t.direction ? r : u) >= n; n++) t._preloadItem(t.index - n)
            },
            _preloadItem: function(r) {
                if (r = tt(r), !t.items[r].preloaded) {
                    var u = t.items[r];
                    u.parsed || (u = t.parseEl(r));
                    i("LazyLoad", u);
                    "image" === u.type && (u.img = n('<img class="mfp-img" />').on("load.mfploader", function() {
                        u.hasSize = !0
                    }).on("error.mfploader", function() {
                        u.hasSize = !0;
                        u.loadError = !0;
                        i("LazyLoadError", u)
                    }).attr("src", u.src));
                    u.preloaded = !0
                }
            }
        }
    });
    it = "retina";
    n.magnificPopup.registerModule(it, {
            options: {
                replaceSrc: function(n) {
                    return n.src.replace(/\.\w+$/, function(n) {
                        return "@2x" + n
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var i = t.st.retina,
                            n = i.ratio;
                        n = isNaN(n) ? n() : n;
                        n > 1 && (r("ImageHasSize." + it, function(t, i) {
                            i.img.css({
                                "max-width": i.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), r("ElementParse." + it, function(t, r) {
                            r.src = i.replaceSrc(r, n)
                        }))
                    }
                }
            }
        }),
        function() {
            var u = 1e3,
                i = "ontouchstart" in window,
                r = function() {
                    f.off("touchmove" + t + " touchend" + t)
                },
                t = ".mfpFastClick";
            n.fn.mfpFastClick = function(e) {
                return n(this).each(function() {
                    var s, l = n(this),
                        a, v, y, h, o, c;
                    if (i) l.on("touchstart" + t, function(n) {
                        h = !1;
                        c = 1;
                        o = n.originalEvent ? n.originalEvent.touches[0] : n.touches[0];
                        v = o.clientX;
                        y = o.clientY;
                        f.on("touchmove" + t, function(n) {
                            o = n.originalEvent ? n.originalEvent.touches : n.touches;
                            c = o.length;
                            o = o[0];
                            (Math.abs(o.clientX - v) > 10 || Math.abs(o.clientY - y) > 10) && (h = !0, r())
                        }).on("touchend" + t, function(n) {
                            r();
                            h || c > 1 || (s = !0, n.preventDefault(), clearTimeout(a), a = setTimeout(function() {
                                s = !1
                            }, u), e())
                        })
                    });
                    l.on("click" + t, function() {
                        s || e()
                    })
                })
            };
            n.fn.destroyMfpFastClick = function() {
                n(this).off("touchstart" + t + " click" + t);
                i && f.off("touchmove" + t + " touchend" + t)
            }
        }();
    ct()
}(window.jQuery || window.Zepto)