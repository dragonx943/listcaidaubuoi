import {c3 as St, d as z, r as L, j as ce, A as Z, o as x, s as b, l as v, am as ae, aj as Y, q as e, c4 as It, b0 as Pe, c5 as qe, c6 as ot, h as J, c7 as $e, c8 as Pt, c9 as Et, m as oe, k as V, F as he, z as Re, ca as Tt, ai as ye, L as re, aw as ge, cb as Bt, p as h, bR as ue, ay as Ie, cc as Ce, cd as Mt, ce as At, cf as Rt, cg as Dt, ch as dt, at as De, ci as Lt, n as _e, cj as Ot, bv as Nt, ck as Ht, cl as st, b4 as Ye, ak as Xe, al as Qe, cm as Wt, cn as Vt, bU as Ze, t as fe, co as Ft, cp as pt, ab as Ee, b3 as zt, au as Ut, cq as jt, cr as Gt, a9 as ft, x as ne, an as se, ax as Le, f as Je, Q as Kt, y as le, bN as qt, e as xe, bZ as Ae, cs as et, aW as Yt, ct as Xt, v as pe, b$ as Qt, c0 as Zt, b_ as Jt, _ as en, aX as tn, aV as nn, O as an, b as on, i as Oe, w as mt, cu as sn, a0 as Ve, cv as ln, a3 as ve, cw as gt, cx as rn, c1 as cn, I as ht, G as vt, cy as yt, cz as un, b8 as lt, K as dn, P as pn, u as fn, B as mn, bC as gn} from "./DuabanpU.js";
import {_ as hn} from "./B90BLhGk.js";
import {C as bt} from "./BotLrfQr.js";
import {C as vn} from "./A736Rv3N.js";
import {_ as yn, H as bn} from "./C2fkUTyh.js";
import {M as wn, a as _n} from "./C-Kde1-v.js";
import {M as xn} from "./QG-9HW0V.js";
import {C as $n} from "./5scZfRx6.js";
import {_ as Cn} from "./3T6G1An3.js";
import {u as kn} from "./1ibu-oZi.js";
import "./CoWgJNfv.js";
function rt(i) {
    return i == null
}
function it(i, t=Number.NEGATIVE_INFINITY, n=Number.POSITIVE_INFINITY) {
    return Math.min(n, Math.max(t, i))
}
const Sn = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , In = [" ", "Enter"]
  , ie = 10;
function Ge(i, t, n) {
    return i === void 0 ? !1 : Array.isArray(i) ? i.some(l => Ke(l, t, n)) : Ke(i, t, n)
}
function Ke(i, t, n) {
    return i === void 0 || t === void 0 ? !1 : typeof i == "string" ? i === t : typeof n == "function" ? n(i, t) : typeof n == "string" ? (i == null ? void 0 : i[n]) === (t == null ? void 0 : t[n]) : St(i, t)
}
function Pn(i) {
    return i == null || i === "" || Array.isArray(i) && i.length === 0
}
const En = z({
    __name: "BubbleSelect",
    props: {
        autocomplete: {},
        autofocus: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        form: {},
        multiple: {
            type: Boolean
        },
        name: {},
        required: {
            type: Boolean
        },
        size: {},
        value: {}
    },
    setup(i) {
        const t = i
          , n = L();
        return ce( () => t.value, (l, s) => {
            const c = window.HTMLSelectElement.prototype
              , y = Object.getOwnPropertyDescriptor(c, "value").set;
            if (l !== s && y && n.value) {
                const a = new Event("change",{
                    bubbles: !0
                });
                y.call(n.value, l),
                n.value.dispatchEvent(a)
            }
        }
        ),
        (l, s) => (x(),
        Z(e(It), {
            "as-child": ""
        }, {
            default: b( () => [v("select", ae({
                ref_key: "selectElement",
                ref: n
            }, t), [Y(l.$slots, "default")], 16)]),
            _: 3
        }))
    }
})
  , Tn = {
    key: 0,
    value: ""
}
  , [ke,wt] = Pe("SelectRoot")
  , Bn = z({
    inheritAttrs: !1,
    __name: "SelectRoot",
    props: {
        open: {
            type: Boolean,
            default: void 0
        },
        defaultOpen: {
            type: Boolean
        },
        defaultValue: {},
        modelValue: {
            default: void 0
        },
        by: {},
        dir: {},
        multiple: {
            type: Boolean
        },
        autocomplete: {},
        disabled: {
            type: Boolean
        },
        name: {},
        required: {
            type: Boolean
        }
    },
    emits: ["update:modelValue", "update:open"],
    setup(i, {emit: t}) {
        const n = i
          , l = t
          , {required: s, disabled: c, multiple: g, dir: y} = qe(n)
          , a = ot(n, "modelValue", l, {
            defaultValue: n.defaultValue ?? (g.value ? [] : void 0),
            passive: n.modelValue === void 0,
            deep: !0
        })
          , d = ot(n, "open", l, {
            defaultValue: n.defaultOpen,
            passive: n.open === void 0
        })
          , p = L()
          , _ = L()
          , f = L({
            x: 0,
            y: 0
        })
          , M = J( () => {
            var u;
            return g.value && Array.isArray(a.value) ? ((u = a.value) == null ? void 0 : u.length) === 0 : rt(a.value)
        }
        );
        $e({
            isProvider: !0
        });
        const K = Pt(y)
          , U = Et(p)
          , X = L(new Set)
          , Q = J( () => Array.from(X.value).map(u => u.value).join(";"));
        function m(u) {
            if (g.value) {
                const C = Array.isArray(a.value) ? [...a.value] : []
                  , W = C.findIndex(R => Ke(R, u, n.by));
                W === -1 ? C.push(u) : C.splice(W, 1),
                a.value = [...C]
            } else
                a.value = u
        }
        return wt({
            triggerElement: p,
            onTriggerChange: u => {
                p.value = u
            }
            ,
            valueElement: _,
            onValueElementChange: u => {
                _.value = u
            }
            ,
            contentId: "",
            modelValue: a,
            onValueChange: m,
            by: n.by,
            open: d,
            multiple: g,
            required: s,
            onOpenChange: u => {
                d.value = u
            }
            ,
            dir: K,
            triggerPointerDownPosRef: f,
            disabled: c,
            isEmptyModelValue: M,
            optionsSet: X,
            onOptionAdd: u => X.value.add(u),
            onOptionRemove: u => X.value.delete(u)
        }),
        (u, C) => (x(),
        Z(e(Tt), null, {
            default: b( () => [Y(u.$slots, "default", {
                modelValue: e(a),
                open: e(d)
            }), e(U) ? (x(),
            Z(En, {
                key: Q.value,
                "aria-hidden": "true",
                tabindex: "-1",
                multiple: e(g),
                required: e(s),
                name: u.name,
                autocomplete: u.autocomplete,
                disabled: e(c),
                value: e(a)
            }, {
                default: b( () => [e(rt)(e(a)) ? (x(),
                V("option", Tn)) : oe("", !0), (x(!0),
                V(he, null, Re(Array.from(X.value), W => (x(),
                V("option", ae({
                    key: W.value ?? "",
                    ref_for: !0
                }, W), null, 16))), 128))]),
                _: 1
            }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : oe("", !0)]),
            _: 3
        }))
    }
})
  , [tt,Mn] = Pe("SelectItemAlignedPosition")
  , An = z({
    inheritAttrs: !1,
    __name: "SelectItemAlignedPosition",
    props: {
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["placed"],
    setup(i, {emit: t}) {
        const n = i
          , l = t
          , {getItems: s} = $e()
          , c = ke()
          , g = be()
          , y = L(!1)
          , a = L(!0)
          , d = L()
          , {forwardRef: p, currentElement: _} = ye()
          , {viewport: f, selectedItem: M, selectedItemText: K, focusSelectedItem: U} = g;
        function X() {
            if (c.triggerElement.value && c.valueElement.value && d.value && _.value && (f != null && f.value) && (M != null && M.value) && (K != null && K.value)) {
                const u = c.triggerElement.value.getBoundingClientRect()
                  , C = _.value.getBoundingClientRect()
                  , W = c.valueElement.value.getBoundingClientRect()
                  , R = K.value.getBoundingClientRect();
                if (c.dir.value !== "rtl") {
                    const N = R.left - C.left
                      , G = W.left - N
                      , S = u.left - G
                      , T = u.width + S
                      , q = Math.max(T, C.width)
                      , te = window.innerWidth - ie
                      , me = it(G, ie, Math.max(ie, te - q));
                    d.value.style.minWidth = `${T}px`,
                    d.value.style.left = `${me}px`
                } else {
                    const N = C.right - R.right
                      , G = window.innerWidth - W.right - N
                      , S = window.innerWidth - u.right - G
                      , T = u.width + S
                      , q = Math.max(T, C.width)
                      , te = window.innerWidth - ie
                      , me = it(G, ie, Math.max(ie, te - q));
                    d.value.style.minWidth = `${T}px`,
                    d.value.style.right = `${me}px`
                }
                const j = s().map(N => N.ref)
                  , O = window.innerHeight - ie * 2
                  , D = f.value.scrollHeight
                  , F = window.getComputedStyle(_.value)
                  , ee = Number.parseInt(F.borderTopWidth, 10)
                  , de = Number.parseInt(F.paddingTop, 10)
                  , we = Number.parseInt(F.borderBottomWidth, 10)
                  , Ne = Number.parseInt(F.paddingBottom, 10)
                  , Te = ee + de + D + Ne + we
                  , o = Math.min(M.value.offsetHeight * 5, Te)
                  , r = window.getComputedStyle(f.value)
                  , k = Number.parseInt(r.paddingTop, 10)
                  , E = Number.parseInt(r.paddingBottom, 10)
                  , P = u.top + u.height / 2 - ie
                  , w = O - P
                  , I = M.value.offsetHeight / 2
                  , A = M.value.offsetTop + I
                  , $ = ee + de + A
                  , B = Te - $;
                if ($ <= P) {
                    const N = M.value === j[j.length - 1];
                    d.value.style.bottom = "0px";
                    const G = _.value.clientHeight - f.value.offsetTop - f.value.offsetHeight
                      , S = Math.max(w, I + (N ? E : 0) + G + we)
                      , T = $ + S;
                    d.value.style.height = `${T}px`
                } else {
                    const N = M.value === j[0];
                    d.value.style.top = "0px";
                    const S = Math.max(P, ee + f.value.offsetTop + (N ? k : 0) + I) + B;
                    d.value.style.height = `${S}px`,
                    f.value.scrollTop = $ - P + f.value.offsetTop
                }
                d.value.style.margin = `${ie}px 0`,
                d.value.style.minHeight = `${o}px`,
                d.value.style.maxHeight = `${O}px`,
                l("placed"),
                requestAnimationFrame( () => y.value = !0)
            }
        }
        const Q = L("");
        re(async () => {
            await ge(),
            X(),
            _.value && (Q.value = window.getComputedStyle(_.value).zIndex)
        }
        );
        function m(u) {
            u && a.value === !0 && (X(),
            U == null || U(),
            a.value = !1)
        }
        return Bt(c.triggerElement, () => {
            X()
        }
        ),
        Mn({
            contentWrapper: d,
            shouldExpandOnScrollRef: y,
            onScrollButtonChange: m
        }),
        (u, C) => (x(),
        V("div", {
            ref_key: "contentWrapperElement",
            ref: d,
            style: Ie({
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: Q.value
            })
        }, [h(e(ue), ae({
            ref: e(p),
            style: {
                boxSizing: "border-box",
                maxHeight: "100%"
            }
        }, {
            ...u.$attrs,
            ...n
        }), {
            default: b( () => [Y(u.$slots, "default")]),
            _: 3
        }, 16)], 4))
    }
})
  , Rn = z({
    __name: "SelectPopperPosition",
    props: {
        side: {},
        sideOffset: {},
        align: {
            default: "start"
        },
        alignOffset: {},
        avoidCollisions: {
            type: Boolean
        },
        collisionBoundary: {},
        collisionPadding: {
            default: ie
        },
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: {
            type: Boolean
        },
        positionStrategy: {},
        updatePositionStrategy: {},
        disableUpdateOnLayoutShift: {
            type: Boolean
        },
        prioritizePosition: {
            type: Boolean
        },
        reference: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(i) {
        const n = Ce(i);
        return (l, s) => (x(),
        Z(e(Mt), ae(e(n), {
            style: {
                boxSizing: "border-box",
                "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
                "--reka-select-content-available-width": "var(--reka-popper-available-width)",
                "--reka-select-content-available-height": "var(--reka-popper-available-height)",
                "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
                "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
            }
        }), {
            default: b( () => [Y(l.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , Dn = {
    onViewportChange: () => {}
    ,
    itemTextRefCallback: () => {}
    ,
    itemRefCallback: () => {}
}
  , [be,_t] = Pe("SelectContent")
  , Ln = z({
    __name: "SelectContentImpl",
    props: {
        position: {
            default: "item-aligned"
        },
        bodyLock: {
            type: Boolean,
            default: !0
        },
        side: {},
        sideOffset: {},
        align: {
            default: "start"
        },
        alignOffset: {},
        avoidCollisions: {
            type: Boolean
        },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: {
            type: Boolean
        },
        positionStrategy: {},
        updatePositionStrategy: {},
        disableUpdateOnLayoutShift: {
            type: Boolean
        },
        prioritizePosition: {
            type: Boolean
        },
        reference: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
    setup(i, {emit: t}) {
        const n = i
          , l = t
          , s = ke();
        At(),
        Rt(n.bodyLock);
        const {CollectionSlot: c, getItems: g} = $e()
          , y = L();
        Dt(y);
        const {search: a, handleTypeaheadSearch: d} = dt()
          , p = L()
          , _ = L()
          , f = L()
          , M = L(!1)
          , K = L(!1)
          , U = L(!1);
        function X() {
            _.value && y.value && st([_.value, y.value])
        }
        ce(M, () => {
            X()
        }
        );
        const {onOpenChange: Q, triggerPointerDownPosRef: m} = s;
        De(R => {
            if (!y.value)
                return;
            let j = {
                x: 0,
                y: 0
            };
            const O = F => {
                var ee, de;
                j = {
                    x: Math.abs(Math.round(F.pageX) - (((ee = m.value) == null ? void 0 : ee.x) ?? 0)),
                    y: Math.abs(Math.round(F.pageY) - (((de = m.value) == null ? void 0 : de.y) ?? 0))
                }
            }
              , D = F => {
                var ee;
                F.pointerType !== "touch" && (j.x <= 10 && j.y <= 10 ? F.preventDefault() : (ee = y.value) != null && ee.contains(F.target) || Q(!1),
                document.removeEventListener("pointermove", O),
                m.value = null)
            }
            ;
            m.value !== null && (document.addEventListener("pointermove", O),
            document.addEventListener("pointerup", D, {
                capture: !0,
                once: !0
            })),
            R( () => {
                document.removeEventListener("pointermove", O),
                document.removeEventListener("pointerup", D, {
                    capture: !0
                })
            }
            )
        }
        );
        function u(R) {
            const j = R.ctrlKey || R.altKey || R.metaKey;
            if (R.key === "Tab" && R.preventDefault(),
            !j && R.key.length === 1 && d(R.key, g()),
            ["ArrowUp", "ArrowDown", "Home", "End"].includes(R.key)) {
                let D = [...g().map(F => F.ref)];
                if (["ArrowUp", "End"].includes(R.key) && (D = D.slice().reverse()),
                ["ArrowUp", "ArrowDown"].includes(R.key)) {
                    const F = R.target
                      , ee = D.indexOf(F);
                    D = D.slice(ee + 1)
                }
                setTimeout( () => st(D)),
                R.preventDefault()
            }
        }
        const C = J( () => n.position === "popper" ? n : {})
          , W = Ce(C.value);
        return _t({
            content: y,
            viewport: p,
            onViewportChange: R => {
                p.value = R
            }
            ,
            itemRefCallback: (R, j, O) => {
                const D = !K.value && !O
                  , F = Ge(s.modelValue.value, j, s.by);
                if (s.multiple.value) {
                    if (U.value)
                        return;
                    (F || D) && (_.value = R,
                    F && (U.value = !0))
                } else
                    (F || D) && (_.value = R);
                D && (K.value = !0)
            }
            ,
            selectedItem: _,
            selectedItemText: f,
            onItemLeave: () => {
                var R;
                (R = y.value) == null || R.focus()
            }
            ,
            itemTextRefCallback: (R, j, O) => {
                const D = !K.value && !O;
                (Ge(s.modelValue.value, j, s.by) || D) && (f.value = R)
            }
            ,
            focusSelectedItem: X,
            position: n.position,
            isPositioned: M,
            searchRef: a
        }),
        (R, j) => (x(),
        Z(e(c), null, {
            default: b( () => [h(e(Lt), {
                "as-child": "",
                onMountAutoFocus: j[6] || (j[6] = _e( () => {}
                , ["prevent"])),
                onUnmountAutoFocus: j[7] || (j[7] = O => {
                    var D;
                    l("closeAutoFocus", O),
                    !O.defaultPrevented && ((D = e(s).triggerElement.value) == null || D.focus({
                        preventScroll: !0
                    }),
                    O.preventDefault())
                }
                )
            }, {
                default: b( () => [h(e(Ot), {
                    "as-child": "",
                    "disable-outside-pointer-events": "",
                    onFocusOutside: j[2] || (j[2] = _e( () => {}
                    , ["prevent"])),
                    onDismiss: j[3] || (j[3] = O => e(s).onOpenChange(!1)),
                    onEscapeKeyDown: j[4] || (j[4] = O => l("escapeKeyDown", O)),
                    onPointerDownOutside: j[5] || (j[5] = O => l("pointerDownOutside", O))
                }, {
                    default: b( () => [(x(),
                    Z(Nt(R.position === "popper" ? Rn : An), ae({
                        ...R.$attrs,
                        ...e(W)
                    }, {
                        id: e(s).contentId,
                        ref: O => {
                            y.value = e(Ht)(O)
                        }
                        ,
                        role: "listbox",
                        "data-state": e(s).open.value ? "open" : "closed",
                        dir: e(s).dir.value,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none"
                        },
                        onContextmenu: j[0] || (j[0] = _e( () => {}
                        , ["prevent"])),
                        onPlaced: j[1] || (j[1] = O => M.value = !0),
                        onKeydown: u
                    }), {
                        default: b( () => [Y(R.$slots, "default")]),
                        _: 3
                    }, 16, ["id", "data-state", "dir", "onKeydown"]))]),
                    _: 3
                })]),
                _: 3
            })]),
            _: 3
        }))
    }
})
  , On = z({
    inheritAttrs: !1,
    __name: "SelectProvider",
    props: {
        context: {}
    },
    setup(i) {
        return wt(i.context),
        _t(Dn),
        (n, l) => Y(n.$slots, "default")
    }
})
  , Nn = {
    key: 1
}
  , Hn = z({
    inheritAttrs: !1,
    __name: "SelectContent",
    props: {
        forceMount: {
            type: Boolean
        },
        position: {},
        bodyLock: {
            type: Boolean
        },
        side: {},
        sideOffset: {},
        align: {},
        alignOffset: {},
        avoidCollisions: {
            type: Boolean
        },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: {
            type: Boolean
        },
        positionStrategy: {},
        updatePositionStrategy: {},
        disableUpdateOnLayoutShift: {
            type: Boolean
        },
        prioritizePosition: {
            type: Boolean
        },
        reference: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
    setup(i, {emit: t}) {
        const n = i
          , s = Ye(n, t)
          , c = ke()
          , g = L();
        re( () => {
            g.value = new DocumentFragment
        }
        );
        const y = L()
          , a = J( () => n.forceMount || c.open.value)
          , d = L(a.value);
        return ce(a, () => {
            setTimeout( () => d.value = a.value)
        }
        ),
        (p, _) => {
            var f;
            return a.value || d.value || (f = y.value) != null && f.present ? (x(),
            Z(e(Wt), {
                key: 0,
                ref_key: "presenceRef",
                ref: y,
                present: a.value
            }, {
                default: b( () => [h(Ln, Xe(Qe({
                    ...e(s),
                    ...p.$attrs
                })), {
                    default: b( () => [Y(p.$slots, "default")]),
                    _: 3
                }, 16)]),
                _: 3
            }, 8, ["present"])) : g.value ? (x(),
            V("div", Nn, [(x(),
            Z(Vt, {
                to: g.value
            }, [h(On, {
                context: e(c)
            }, {
                default: b( () => [Y(p.$slots, "default")]),
                _: 3
            }, 8, ["context"])], 8, ["to"]))])) : oe("", !0)
        }
    }
})
  , [Ro,Wn] = Pe("SelectGroup")
  , Vn = z({
    __name: "SelectGroup",
    props: {
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(i) {
        const t = i
          , n = Ze(void 0, "reka-select-group");
        return Wn({
            id: n
        }),
        (l, s) => (x(),
        Z(e(ue), ae({
            role: "group"
        }, t, {
            "aria-labelledby": e(n)
        }), {
            default: b( () => [Y(l.$slots, "default")]),
            _: 3
        }, 16, ["aria-labelledby"]))
    }
})
  , Fn = z({
    __name: "SelectIcon",
    props: {
        asChild: {
            type: Boolean
        },
        as: {
            default: "span"
        }
    },
    setup(i) {
        return (t, n) => (x(),
        Z(e(ue), {
            "aria-hidden": "true",
            as: t.as,
            "as-child": t.asChild
        }, {
            default: b( () => [Y(t.$slots, "default", {}, () => [n[0] || (n[0] = fe("▼"))])]),
            _: 3
        }, 8, ["as", "as-child"]))
    }
})
  , [xt,zn] = Pe("SelectItem")
  , Un = z({
    __name: "SelectItem",
    props: {
        value: {},
        disabled: {
            type: Boolean
        },
        textValue: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    emits: ["select"],
    setup(i, {emit: t}) {
        const n = i
          , l = t
          , {disabled: s} = qe(n)
          , c = ke()
          , g = be()
          , {forwardRef: y, currentElement: a} = ye()
          , {CollectionItem: d} = $e()
          , p = J( () => {
            var C;
            return Ge((C = c.modelValue) == null ? void 0 : C.value, n.value, c.by)
        }
        )
          , _ = L(!1)
          , f = L(n.textValue ?? "")
          , M = Ze(void 0, "reka-select-item-text")
          , K = "select.select";
        async function U(C) {
            if (C.defaultPrevented)
                return;
            const W = {
                originalEvent: C,
                value: n.value
            };
            Ft(K, X, W)
        }
        async function X(C) {
            await ge(),
            l("select", C),
            !C.defaultPrevented && (s.value || (c.onValueChange(n.value),
            c.multiple.value || c.onOpenChange(!1)))
        }
        async function Q(C) {
            var W, R;
            await ge(),
            !C.defaultPrevented && (s.value ? (W = g.onItemLeave) == null || W.call(g) : (R = C.currentTarget) == null || R.focus({
                preventScroll: !0
            }))
        }
        async function m(C) {
            var W;
            await ge(),
            !C.defaultPrevented && C.currentTarget === pt() && ((W = g.onItemLeave) == null || W.call(g))
        }
        async function u(C) {
            var R;
            await ge(),
            !(C.defaultPrevented || ((R = g.searchRef) == null ? void 0 : R.value) !== "" && C.key === " ") && (In.includes(C.key) && U(C),
            C.key === " " && C.preventDefault())
        }
        if (n.value === "")
            throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return re( () => {
            a.value && g.itemRefCallback(a.value, n.value, n.disabled)
        }
        ),
        zn({
            value: n.value,
            disabled: s,
            textId: M,
            isSelected: p,
            onItemTextChange: C => {
                f.value = ((f.value || (C == null ? void 0 : C.textContent)) ?? "").trim()
            }
        }),
        (C, W) => (x(),
        Z(e(d), {
            value: {
                textValue: f.value
            }
        }, {
            default: b( () => [h(e(ue), {
                ref: e(y),
                role: "option",
                "aria-labelledby": e(M),
                "data-highlighted": _.value ? "" : void 0,
                "aria-selected": p.value,
                "data-state": p.value ? "checked" : "unchecked",
                "aria-disabled": e(s) || void 0,
                "data-disabled": e(s) ? "" : void 0,
                tabindex: e(s) ? void 0 : -1,
                as: C.as,
                "as-child": C.asChild,
                onFocus: W[0] || (W[0] = R => _.value = !0),
                onBlur: W[1] || (W[1] = R => _.value = !1),
                onPointerup: U,
                onPointerdown: W[2] || (W[2] = R => {
                    R.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onTouchend: W[3] || (W[3] = _e( () => {}
                , ["prevent", "stop"])),
                onPointermove: Q,
                onPointerleave: m,
                onKeydown: u
            }, {
                default: b( () => [Y(C.$slots, "default")]),
                _: 3
            }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])]),
            _: 3
        }, 8, ["value"]))
    }
})
  , jn = z({
    __name: "SelectItemIndicator",
    props: {
        asChild: {
            type: Boolean
        },
        as: {
            default: "span"
        }
    },
    setup(i) {
        const t = i
          , n = xt();
        return (l, s) => e(n).isSelected.value ? (x(),
        Z(e(ue), ae({
            key: 0,
            "aria-hidden": "true"
        }, t), {
            default: b( () => [Y(l.$slots, "default")]),
            _: 3
        }, 16)) : oe("", !0)
    }
})
  , Gn = z({
    inheritAttrs: !1,
    __name: "SelectItemText",
    props: {
        asChild: {
            type: Boolean
        },
        as: {
            default: "span"
        }
    },
    setup(i) {
        const t = i
          , n = ke()
          , l = be()
          , s = xt()
          , {forwardRef: c, currentElement: g} = ye()
          , y = J( () => {
            var a, d;
            return {
                value: s.value,
                disabled: s.disabled.value,
                textContent: ((a = g.value) == null ? void 0 : a.textContent) ?? ((d = s.value) == null ? void 0 : d.toString()) ?? ""
            }
        }
        );
        return re( () => {
            g.value && (s.onItemTextChange(g.value),
            l.itemTextRefCallback(g.value, s.value, s.disabled.value),
            n.onOptionAdd(y.value))
        }
        ),
        Ee( () => {
            n.onOptionRemove(y.value)
        }
        ),
        (a, d) => (x(),
        Z(e(ue), ae({
            id: e(s).textId,
            ref: e(c)
        }, {
            ...t,
            ...a.$attrs
        }), {
            default: b( () => [Y(a.$slots, "default")]),
            _: 3
        }, 16, ["id"]))
    }
})
  , Kn = z({
    __name: "SelectPortal",
    props: {
        to: {},
        disabled: {
            type: Boolean
        },
        defer: {
            type: Boolean
        },
        forceMount: {
            type: Boolean
        }
    },
    setup(i) {
        const t = i;
        return (n, l) => (x(),
        Z(e(zt), Xe(Qe(t)), {
            default: b( () => [Y(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , $t = z({
    __name: "SelectScrollButtonImpl",
    emits: ["autoScroll"],
    setup(i, {emit: t}) {
        const n = t
          , {getItems: l} = $e()
          , s = be()
          , c = L(null);
        function g() {
            c.value !== null && (window.clearInterval(c.value),
            c.value = null)
        }
        De( () => {
            const d = l().map(p => p.ref).find(p => p === pt());
            d == null || d.scrollIntoView({
                block: "nearest"
            })
        }
        );
        function y() {
            c.value === null && (c.value = window.setInterval( () => {
                n("autoScroll")
            }
            , 50))
        }
        function a() {
            var d;
            (d = s.onItemLeave) == null || d.call(s),
            c.value === null && (c.value = window.setInterval( () => {
                n("autoScroll")
            }
            , 50))
        }
        return Ut( () => g()),
        (d, p) => {
            var _;
            return x(),
            Z(e(ue), ae({
                "aria-hidden": "true",
                style: {
                    flexShrink: 0
                }
            }, (_ = d.$parent) == null ? void 0 : _.$props, {
                onPointerdown: y,
                onPointermove: a,
                onPointerleave: p[0] || (p[0] = () => {
                    g()
                }
                )
            }), {
                default: b( () => [Y(d.$slots, "default")]),
                _: 3
            }, 16)
        }
    }
})
  , qn = z({
    __name: "SelectScrollDownButton",
    props: {
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(i) {
        const t = be()
          , n = t.position === "item-aligned" ? tt() : void 0
          , {forwardRef: l, currentElement: s} = ye()
          , c = L(!1);
        return De(g => {
            var y, a;
            if ((y = t.viewport) != null && y.value && ((a = t.isPositioned) != null && a.value)) {
                let d = function() {
                    const _ = p.scrollHeight - p.clientHeight;
                    c.value = Math.ceil(p.scrollTop) < _
                };
                const p = t.viewport.value;
                d(),
                p.addEventListener("scroll", d),
                g( () => p.removeEventListener("scroll", d))
            }
        }
        ),
        ce(s, () => {
            s.value && (n == null || n.onScrollButtonChange(s.value))
        }
        ),
        (g, y) => c.value ? (x(),
        Z($t, {
            key: 0,
            ref: e(l),
            onAutoScroll: y[0] || (y[0] = () => {
                const {viewport: a, selectedItem: d} = e(t);
                a != null && a.value && (d != null && d.value) && (a.value.scrollTop = a.value.scrollTop + d.value.offsetHeight)
            }
            )
        }, {
            default: b( () => [Y(g.$slots, "default")]),
            _: 3
        }, 512)) : oe("", !0)
    }
})
  , Yn = z({
    __name: "SelectScrollUpButton",
    props: {
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(i) {
        const t = be()
          , n = t.position === "item-aligned" ? tt() : void 0
          , {forwardRef: l, currentElement: s} = ye()
          , c = L(!1);
        return De(g => {
            var y, a;
            if ((y = t.viewport) != null && y.value && ((a = t.isPositioned) != null && a.value)) {
                let d = function() {
                    c.value = p.scrollTop > 0
                };
                const p = t.viewport.value;
                d(),
                p.addEventListener("scroll", d),
                g( () => p.removeEventListener("scroll", d))
            }
        }
        ),
        ce(s, () => {
            s.value && (n == null || n.onScrollButtonChange(s.value))
        }
        ),
        (g, y) => c.value ? (x(),
        Z($t, {
            key: 0,
            ref: e(l),
            onAutoScroll: y[0] || (y[0] = () => {
                const {viewport: a, selectedItem: d} = e(t);
                a != null && a.value && (d != null && d.value) && (a.value.scrollTop = a.value.scrollTop - d.value.offsetHeight)
            }
            )
        }, {
            default: b( () => [Y(g.$slots, "default")]),
            _: 3
        }, 512)) : oe("", !0)
    }
})
  , Xn = z({
    __name: "SelectTrigger",
    props: {
        disabled: {
            type: Boolean
        },
        reference: {},
        asChild: {
            type: Boolean
        },
        as: {
            default: "button"
        }
    },
    setup(i) {
        const t = i
          , n = ke()
          , {forwardRef: l, currentElement: s} = ye()
          , c = J( () => {
            var f;
            return ((f = n.disabled) == null ? void 0 : f.value) || t.disabled
        }
        );
        n.contentId || (n.contentId = Ze(void 0, "reka-select-content")),
        re( () => {
            n.onTriggerChange(s.value)
        }
        );
        const {getItems: g} = $e()
          , {search: y, handleTypeaheadSearch: a, resetTypeahead: d} = dt();
        function p() {
            c.value || (n.onOpenChange(!0),
            d())
        }
        function _(f) {
            p(),
            n.triggerPointerDownPosRef.value = {
                x: Math.round(f.pageX),
                y: Math.round(f.pageY)
            }
        }
        return (f, M) => (x(),
        Z(e(jt), {
            "as-child": "",
            reference: f.reference
        }, {
            default: b( () => {
                var K, U, X, Q;
                return [h(e(ue), {
                    ref: e(l),
                    role: "combobox",
                    type: f.as === "button" ? "button" : void 0,
                    "aria-controls": e(n).contentId,
                    "aria-expanded": e(n).open.value || !1,
                    "aria-required": (K = e(n).required) == null ? void 0 : K.value,
                    "aria-autocomplete": "none",
                    disabled: c.value,
                    dir: (U = e(n)) == null ? void 0 : U.dir.value,
                    "data-state": (X = e(n)) != null && X.open.value ? "open" : "closed",
                    "data-disabled": c.value ? "" : void 0,
                    "data-placeholder": e(Pn)((Q = e(n).modelValue) == null ? void 0 : Q.value) ? "" : void 0,
                    "as-child": f.asChild,
                    as: f.as,
                    onClick: M[0] || (M[0] = m => {
                        var u;
                        (u = m == null ? void 0 : m.currentTarget) == null || u.focus()
                    }
                    ),
                    onPointerdown: M[1] || (M[1] = m => {
                        if (m.pointerType === "touch")
                            return m.preventDefault();
                        const u = m.target;
                        u.hasPointerCapture(m.pointerId) && u.releasePointerCapture(m.pointerId),
                        m.button === 0 && m.ctrlKey === !1 && (_(m),
                        m.preventDefault())
                    }
                    ),
                    onPointerup: M[2] || (M[2] = _e(m => {
                        m.pointerType === "touch" && _(m)
                    }
                    , ["prevent"])),
                    onKeydown: M[3] || (M[3] = m => {
                        const u = e(y) !== "";
                        !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && u && m.key === " " || (e(a)(m.key, e(g)()),
                        e(Sn).includes(m.key) && (p(),
                        m.preventDefault()))
                    }
                    )
                }, {
                    default: b( () => [Y(f.$slots, "default")]),
                    _: 3
                }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])]
            }
            ),
            _: 3
        }, 8, ["reference"]))
    }
})
  , Qn = z({
    __name: "SelectViewport",
    props: {
        nonce: {},
        asChild: {
            type: Boolean
        },
        as: {}
    },
    setup(i) {
        const t = i
          , {nonce: n} = qe(t)
          , l = Gt(n)
          , s = be()
          , c = s.position === "item-aligned" ? tt() : void 0
          , {forwardRef: g, currentElement: y} = ye();
        re( () => {
            s == null || s.onViewportChange(y.value)
        }
        );
        const a = L(0);
        function d(p) {
            const _ = p.currentTarget
              , {shouldExpandOnScrollRef: f, contentWrapper: M} = c ?? {};
            if (f != null && f.value && (M != null && M.value)) {
                const K = Math.abs(a.value - _.scrollTop);
                if (K > 0) {
                    const U = window.innerHeight - ie * 2
                      , X = Number.parseFloat(M.value.style.minHeight)
                      , Q = Number.parseFloat(M.value.style.height)
                      , m = Math.max(X, Q);
                    if (m < U) {
                        const u = m + K
                          , C = Math.min(U, u)
                          , W = u - C;
                        M.value.style.height = `${C}px`,
                        M.value.style.bottom === "0px" && (_.scrollTop = W > 0 ? W : 0,
                        M.value.style.justifyContent = "flex-end")
                    }
                }
            }
            a.value = _.scrollTop
        }
        return (p, _) => (x(),
        V(he, null, [h(e(ue), ae({
            ref: e(g),
            "data-reka-select-viewport": "",
            role: "presentation"
        }, {
            ...p.$attrs,
            ...t
        }, {
            style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto"
            },
            onScroll: d
        }), {
            default: b( () => [Y(p.$slots, "default")]),
            _: 3
        }, 16), h(e(ue), {
            as: "style",
            nonce: e(l)
        }, {
            default: b( () => _[0] || (_[0] = [fe(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])),
            _: 1
        }, 8, ["nonce"])], 64))
    }
});
/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = ft("ArrowUpIcon", [["path", {
    d: "m5 12 7-7 7 7",
    key: "hav0vg"
}], ["path", {
    d: "M12 19V5",
    key: "x0mq9r"
}]]);
/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = ft("ChevronUpIcon", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]])
  , ea = z({
    __name: "DrawerFooter",
    props: {
        class: {}
    },
    setup(i) {
        const t = i;
        return (n, l) => (x(),
        V("div", {
            class: ne(e(se)("mt-auto flex flex-col gap-2 p-4", t.class))
        }, [Y(n.$slots, "default")], 2))
    }
})
  , ta = z({
    __name: "DrawerHeader",
    props: {
        class: {}
    },
    setup(i) {
        const t = i;
        return (n, l) => (x(),
        V("div", {
            class: ne(e(se)("grid gap-1.5 p-4 text-center sm:text-left", t.class))
        }, [Y(n.$slots, "default")], 2))
    }
});
function Fe(i) {
    const t = "text are required";
    if (!i)
        throw new Error(t);
    try {
        const n = new Uint8Array(atob(i).split("").map(c => c.charCodeAt(0)))
          , l = new TextEncoder().encode(t)
          , s = new Uint8Array(n.length);
        for (let c = 0; c < n.length; c++)
            s[c] = n[c] ^ l[c % l.length];
        return new TextDecoder().decode(s)
    } catch {
        throw new Error("Failed to deobfuscate: Invalid data or wrong another")
    }
}
const na = {
    class: "placeholder-content"
}
  , aa = {
    key: 0,
    class: "loading-spinner"
}
  , oa = {
    key: 1,
    class: "error-content"
}
  , sa = {
    class: "error-message"
}
  , la = {
    class: "canvas-container"
}
  , ra = ["width", "height"]
  , ia = {
    class: "absolute w-full h-full top-0 left-0"
}
  , ca = {
    class: "max-w-full xl:max-w-none h-full flex flex-col"
}
  , ua = ["width", "height"]
  , da = {
    key: 1,
    class: "error-message"
}
  , pa = {
    key: 0,
    class: "debug-info"
}
  , Se = 3
  , fa = {
    __name: "descrambledImage",
    props: {
        imageUrl: {
            type: String,
            required: !0
        },
        drmString: {
            type: String,
            required: !0
        },
        debug: {
            type: Boolean,
            default: !1
        }
    },
    setup(i) {
        const t = i
          , n = L(null)
          , l = L(null)
          , s = L(null)
          , c = L(1280)
          , g = L(1818)
          , y = L("")
          , a = L("")
          , d = L("")
          , p = L(!0)
          , _ = L("")
          , f = L(0)
          , M = L(!1);
        function K(o) {
            return o.split("").reduce( (r, k) => (r << 5) - r + k.charCodeAt(0) | 0, 0)
        }
        const {data: U} = Je(`vueChunk-${K(t.drmString)}`, () => null, {
            server: !0,
            lazy: !1,
            default: () => null,
            watch: [ () => t.drmString, () => t.imageUrl],
            immediate: !0,
            transform: o => o
        })
          , X = () => {
            const o = Math.min(1280, window.innerWidth - 40)
              , r = 1818 / 1280;
            c.value = o,
            g.value = Math.round(o * r)
        }
          , Q = () => {
            f.value < Se && m()
        }
          , m = () => {
            console.log(`Retrying image load (attempt ${f.value + 1}/${Se})`),
            f.value++,
            _.value = "",
            p.value = !0,
            M.value = !1,
            setTimeout( () => {
                we()
            }
            , 1e3)
        }
          , u = () => {
            U.value && (d.value = Fe(U.value))
        }
          , C = (o, r, k) => {
            const E = {
                overlaps: [],
                gaps: [],
                coverage: {
                    expected: r * k,
                    actual: 0,
                    efficiency: 0
                },
                chunkAnalysis: {},
                visualMap: null
            }
              , P = Object.keys(o);
            console.log("🔍 Checking for chunk overlaps...");
            for (let H = 0; H < P.length; H++)
                for (let N = H + 1; N < P.length; N++) {
                    const G = P[H]
                      , S = P[N]
                      , T = o[G]
                      , q = o[S]
                      , te = Math.max(T.x, q.x)
                      , me = Math.max(T.y, q.y)
                      , nt = Math.min(T.x + T.width, q.x + q.width)
                      , at = Math.min(T.y + T.height, q.y + q.height);
                    if (te < nt && me < at) {
                        const He = nt - te
                          , We = at - me
                          , Be = He * We;
                        E.overlaps.push({
                            chunk1: G,
                            chunk2: S,
                            area: Be,
                            bounds: {
                                x: te,
                                y: me,
                                width: He,
                                height: We
                            },
                            severity: Be > 10 ? "high" : Be > 3 ? "medium" : "low"
                        }),
                        console.warn(`❌ OVERLAP: ${G} ↔ ${S} = ${Be} pixels`, {
                            chunk1: `(${T.x},${T.y}) ${T.width}×${T.height}`,
                            chunk2: `(${q.x},${q.y}) ${q.width}×${q.height}`,
                            overlap: `(${te},${me}) ${He}×${We}`
                        })
                    }
                }
            console.log("📊 Analyzing pixel coverage...");
            const w = new Array(k).fill(null).map( () => new Array(r).fill(null));
            let I = 0;
            P.forEach(H => {
                const N = o[H];
                let G = 0;
                for (let S = N.y; S < N.y + N.height; S++)
                    for (let T = N.x; T < N.x + N.width; T++)
                        T < r && S < k && (w[S][T] === null ? (w[S][T] = H,
                        I++,
                        G++) : w[S][T] = `${w[S][T]},${H}`);
                E.chunkAnalysis[H] = {
                    expectedPixels: N.width * N.height,
                    actualPixels: G,
                    bounds: N
                }
            }
            ),
            console.log("🕳️  Checking for gaps...");
            const A = [];
            let $ = 0;
            for (let H = 0; H < k; H++)
                for (let N = 0; N < r; N++)
                    if (w[H][N] === null) {
                        $++;
                        const G = W(w, N, H, r, k);
                        G.area > 0 && A.push(G)
                    }
            E.gaps = A,
            E.coverage.actual = I,
            E.coverage.gapPixels = $,
            E.coverage.efficiency = I / E.coverage.expected * 100,
            console.log("🔲 Analyzing chunk boundaries...");
            const B = R(o);
            return E.boundaryIssues = B,
            E.visualMap = j(w, r, k),
            E
        }
          , W = (o, r, k, E, P) => {
            const w = new Set
              , I = [{
                x: r,
                y: k
            }]
              , A = {
                minX: r,
                maxX: r,
                minY: k,
                maxY: k,
                area: 0
            };
            for (; I.length > 0; ) {
                const {x: $, y: B} = I.pop()
                  , H = `${$},${B}`;
                w.has(H) || $ < 0 || $ >= E || B < 0 || B >= P || o[B][$] === null && (w.add(H),
                o[B][$] = "GAP_PROCESSED",
                A.area++,
                A.minX = Math.min(A.minX, $),
                A.maxX = Math.max(A.maxX, $),
                A.minY = Math.min(A.minY, B),
                A.maxY = Math.max(A.maxY, B),
                I.push({
                    x: $ + 1,
                    y: B
                }, {
                    x: $ - 1,
                    y: B
                }, {
                    x: $,
                    y: B + 1
                }, {
                    x: $,
                    y: B - 1
                }))
            }
            return {
                ...A,
                width: A.maxX - A.minX + 1,
                height: A.maxY - A.minY + 1
            }
        }
          , R = o => {
            const r = []
              , k = Object.keys(o);
            return k.forEach(E => {
                const P = o[E];
                (P.x !== Math.floor(P.x) || P.y !== Math.floor(P.y)) && r.push({
                    type: "fractional_position",
                    chunk: E,
                    position: {
                        x: P.x,
                        y: P.y
                    },
                    severity: "high"
                }),
                (P.width !== Math.floor(P.width) || P.height !== Math.floor(P.height)) && r.push({
                    type: "fractional_dimensions",
                    chunk: E,
                    dimensions: {
                        width: P.width,
                        height: P.height
                    },
                    severity: "high"
                });
                const w = parseInt(E.charAt(0))
                  , I = parseInt(E.charAt(1));
                k.forEach(A => {
                    if (A === E)
                        return;
                    const $ = o[A]
                      , B = parseInt(A.charAt(0))
                      , H = parseInt(A.charAt(1));
                    if (w === B && Math.abs(I - H) === 1) {
                        const N = I < H ? P : $
                          , G = I < H ? $ : P;
                        N.x + N.width !== G.x && r.push({
                            type: "horizontal_misalignment",
                            chunk1: I < H ? E : A,
                            chunk2: I < H ? A : E,
                            gap: G.x - (N.x + N.width),
                            severity: "medium"
                        })
                    }
                    if (I === H && Math.abs(w - B) === 1) {
                        const N = w < B ? P : $
                          , G = w < B ? $ : P;
                        N.y + N.height !== G.y && r.push({
                            type: "vertical_misalignment",
                            chunk1: w < B ? E : A,
                            chunk2: w < B ? A : E,
                            gap: G.y - (N.y + N.height),
                            severity: "medium"
                        })
                    }
                }
                )
            }
            ),
            r
        }
          , j = (o, r, k) => {
            const E = document.createElement("canvas");
            E.width = r,
            E.height = k;
            const P = E.getContext("2d")
              , w = P.createImageData(r, k)
              , I = w.data;
            for (let A = 0; A < k; A++)
                for (let $ = 0; $ < r; $++) {
                    const B = (A * r + $) * 4
                      , H = o[A][$];
                    if (H === null || H === "GAP_PROCESSED")
                        I[B] = 255,
                        I[B + 1] = 0,
                        I[B + 2] = 0,
                        I[B + 3] = 255;
                    else if (H.includes(","))
                        I[B] = 255,
                        I[B + 1] = 255,
                        I[B + 2] = 0,
                        I[B + 3] = 255;
                    else {
                        const G = 100 + parseInt(H) * 20;
                        I[B] = 0,
                        I[B + 1] = Math.min(255, G),
                        I[B + 2] = 0,
                        I[B + 3] = 255
                    }
                }
            return P.putImageData(w, 0, 0),
            E.toDataURL()
        }
          , O = o => (console.group("🔍 Pixel Coverage Analysis"),
        console.log(`📊 Coverage: ${o.coverage.actual}/${o.coverage.expected} pixels (${o.coverage.efficiency.toFixed(2)}%)`),
        o.coverage.gapPixels > 0 && console.warn(`🕳️  ${o.coverage.gapPixels} gap pixels found`),
        o.overlaps.length > 0 ? (console.group(`❌ ${o.overlaps.length} Overlaps Found`),
        o.overlaps.forEach(r => {
            console.warn(`${r.chunk1} ↔ ${r.chunk2}: ${r.area} pixels (${r.severity})`, r.bounds)
        }
        ),
        console.groupEnd()) : console.log("✅ No overlaps detected"),
        o.gaps.length > 0 ? (console.group(`🕳️  ${o.gaps.length} Gap Regions Found`),
        o.gaps.forEach( (r, k) => {
            console.warn(`Gap ${k + 1}: ${r.area} pixels at (${r.minX},${r.minY}) ${r.width}×${r.height}`)
        }
        ),
        console.groupEnd()) : console.log("✅ No gaps detected"),
        o.boundaryIssues.length > 0 ? (console.group(`🔲 ${o.boundaryIssues.length} Boundary Issues`),
        o.boundaryIssues.forEach(r => {
            console.warn(`${r.type}: ${r.chunk}`, r)
        }
        ),
        console.groupEnd()) : console.log("✅ All boundaries properly aligned"),
        console.group("📦 Individual Chunk Analysis"),
        Object.entries(o.chunkAnalysis).forEach( ([r,k]) => {
            const E = k.actualPixels / k.expectedPixels * 100;
            console.log(`${r}: ${k.actualPixels}/${k.expectedPixels} pixels (${E.toFixed(1)}%)`)
        }
        ),
        console.groupEnd(),
        console.groupEnd(),
        o)
          , D = o => {
            const r = o.split("|")
              , k = {
                version: "",
                scramblableWidth: 0,
                scramblableHeight: 0,
                positionMappings: {},
                chunkDimensions: {}
            };
            for (const E of r)
                if (E.startsWith("v"))
                    k.version = E.substring(1);
                else if (E.startsWith("sw:"))
                    k.scramblableWidth = parseInt(E.substring(3));
                else if (E.startsWith("sh:"))
                    k.scramblableHeight = parseInt(E.substring(3));
                else if (E.includes("@") && E.includes(">")) {
                    const [P,w] = E.split(">")
                      , [I,A] = P.split("@")
                      , [$,B,H,N] = A.split(",").map(Number);
                    k.chunkDimensions[I] = {
                        x: $,
                        y: B,
                        width: H,
                        height: N
                    },
                    k.positionMappings[I] = w
                } else if (E.includes(">")) {
                    const [P,w] = E.split(">");
                    k.positionMappings[P] = w
                }
            return k
        }
          , F = (o, r) => {
            const k = Math.floor(o / 3)
              , E = Math.floor(r / 3)
              , P = o % 3
              , w = r % 3
              , I = {}
              , A = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
            for (const $ of A) {
                const B = parseInt($.charAt(0))
                  , H = parseInt($.charAt(1))
                  , N = H * k
                  , G = B * E
                  , S = k + (H === 2 ? P : 0)
                  , T = E + (B === 2 ? w : 0);
                I[$] = {
                    x: N,
                    y: G,
                    width: S,
                    height: T
                }
            }
            return I
        }
          , ee = (o, r=!1) => {
            r ? (o.imageSmoothingEnabled = !1,
            o.webkitImageSmoothingEnabled = !1,
            o.mozImageSmoothingEnabled = !1,
            o.msImageSmoothingEnabled = !1,
            o.oImageSmoothingEnabled = !1,
            o.imageSmoothingQuality && (o.imageSmoothingQuality = "low")) : (o.imageSmoothingEnabled = !0,
            o.webkitImageSmoothingEnabled = !0,
            o.mozImageSmoothingEnabled = !0,
            o.msImageSmoothingEnabled = !0,
            o.oImageSmoothingEnabled = !0,
            o.imageSmoothingQuality && (o.imageSmoothingQuality = "high")),
            o.setTransform(1, 0, 0, 1, 0, 0)
        }
          , de = (o, r, k, E) => {
            const P = Math.round(k.x)
              , w = Math.round(k.y)
              , I = Math.round(k.width)
              , A = Math.round(k.height)
              , $ = Math.round(E.x)
              , B = Math.round(E.y)
              , H = Math.round(E.width)
              , N = Math.round(E.height)
              , G = Math.min(P + I, r.width)
              , S = Math.min(w + A, r.height)
              , T = G - P
              , q = S - w;
            if (T <= 0 || q <= 0) {
                console.warn(`Invalid source bounds for chunk: src(${P},${w},${I},${A})`);
                return
            }
            o.imageSmoothingEnabled = !1,
            o.webkitImageSmoothingEnabled = !1,
            o.antialias = !1,
            o.imageQuality = "high",
            console.log(`drawing from x: ${P}, y: ${w} to x :${$}, y : ${B}, srcwidth: ${T}, srcheight: ${q}, destWidth: ${H}, destHeight: ${N} `),
            o.drawImage(r, P, w, T, q, $, B, H, N)
        }
          , we = async () => {
            try {
                if (y.value = "",
                a.value = "",
                p.value = !0,
                _.value = "",
                u(),
                !d.value && Fe(U.value) && (d.value = Fe(U.value)),
                !t.imageUrl || !d.value) {
                    p.value = !1;
                    return
                }
                const o = new Image;
                o.crossOrigin = "anonymous",
                await new Promise( (S, T) => {
                    const q = setTimeout( () => {
                        T(new Error("Image loading timeout (30s)"))
                    }
                    , 3e4);
                    o.onload = () => {
                        clearTimeout(q),
                        console.log(`Image loaded successfully: ${o.width}x${o.height}`),
                        S()
                    }
                    ,
                    o.onerror = te => {
                        clearTimeout(q),
                        console.error("Image loading failed:", te),
                        T(new Error(`Failed to load image: ${t.imageUrl}`))
                    }
                    ,
                    o.src = t.imageUrl
                }
                ),
                f.value = 0,
                M.value = !1;
                const r = D(d.value);
                let k = null;
                t.debug && Object.keys(r.chunkDimensions).length > 0 && (console.log("🔍 Running pixel coverage analysis..."),
                k = C(r.chunkDimensions, r.scramblableWidth, r.scramblableHeight),
                O(k));
                const E = o.width
                  , P = o.height;
                let w = `DRM Descrambling with Variable Chunk Sizes
`;
                if (w += `DRM Version: ${r.version}
`,
                w += `Image: ${E}x${P}
`,
                w += `Scramblable area: ${r.scramblableWidth}x${r.scramblableHeight}

`,
                t.debug && k && (w += `PIXEL COVERAGE ANALYSIS:
`,
                w += `Coverage: ${k.coverage.actual}/${k.coverage.expected} pixels (${k.coverage.efficiency.toFixed(2)}%)
`,
                k.overlaps.length > 0 && (w += `❌ OVERLAPS (${k.overlaps.length}):
`,
                k.overlaps.forEach(S => {
                    w += `  ${S.chunk1} ↔ ${S.chunk2}: ${S.area}px (${S.severity})
`
                }
                )),
                k.gaps.length > 0 && (w += `🕳️  GAPS (${k.gaps.length}):
`,
                k.gaps.forEach( (S, T) => {
                    w += `  Gap ${T + 1}: ${S.area}px at (${S.minX},${S.minY}) ${S.width}×${S.height}
`
                }
                )),
                k.boundaryIssues.length > 0 && (w += `🔲 BOUNDARY ISSUES (${k.boundaryIssues.length}):
`,
                k.boundaryIssues.forEach(S => {
                    w += `  ${S.type}: ${S.chunk} (${S.severity})
`
                }
                )),
                k.overlaps.length === 0 && k.gaps.length === 0 && k.boundaryIssues.length === 0 && (w += `✅ Perfect pixel coverage - no issues detected!
`),
                w += `
`),
                Object.keys(r.positionMappings).length === 0 || r.scramblableWidth < 3 || r.scramblableHeight < 3) {
                    w += `No scrambling applied (too small or no positions)
`,
                    c.value = E,
                    g.value = P,
                    await ge();
                    const S = l.value.getContext("2d");
                    ee(S, t.debug),
                    S.clearRect(0, 0, E, P),
                    S.drawImage(o, 0, 0),
                    t.debug && (a.value = w),
                    p.value = !1;
                    return
                }
                let I = r.chunkDimensions;
                if (Object.keys(I).length === 0 ? (I = F(r.scramblableWidth, r.scramblableHeight),
                w += `Calculated chunk dimensions (not provided in DRM)
`) : w += `Using chunk dimensions from DRM data
`,
                t.debug) {
                    w += `
Chunk Dimensions:
`;
                    const S = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
                    for (const T of S) {
                        const q = I[T];
                        q && (w += `${T}: x=${q.x}, y=${q.y}, w=${q.width}, h=${q.height}
`)
                    }
                }
                c.value = E,
                g.value = P,
                await ge();
                const A = n.value.getContext("2d")
                  , $ = l.value.getContext("2d");
                ee(A, t.debug),
                ee($, t.debug),
                A.clearRect(0, 0, E, P),
                $.clearRect(0, 0, E, P),
                $.drawImage(o, 0, 0);
                const B = document.createElement("canvas");
                B.width = r.scramblableWidth,
                B.height = r.scramblableHeight;
                const H = B.getContext("2d");
                ee(H, t.debug),
                H.drawImage(o, 0, 0, r.scramblableWidth, r.scramblableHeight, 0, 0, r.scramblableWidth, r.scramblableHeight);
                const N = {}
                  , G = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
                for (const [S,T] of Object.entries(r.positionMappings))
                    N[T] = S;
                if (t.debug) {
                    w += `
Position Mappings (scrambled -> original):
`;
                    for (const [S,T] of Object.entries(N))
                        w += `${S} -> ${T}
`;
                    w += `
Descrambling chunks using seamless rendering:
`,
                    Te(I, r.scramblableWidth, r.scramblableHeight)
                }
                $.clearRect(0, 0, r.scramblableWidth, r.scramblableHeight);
                for (const S of G) {
                    const T = N[S];
                    if (!T) {
                        t.debug && (w += `WARNING: No reverse mapping for ${S}
`);
                        continue
                    }
                    const q = I[S]
                      , te = I[T];
                    if (!q || !te) {
                        t.debug && (w += `WARNING: Missing chunk dimensions for ${S} or ${T}
`);
                        continue
                    }
                    t.debug && (w += `${S} -> ${T}: src(${q.x},${q.y},${q.width}x${q.height}) -> dest(${te.x},${te.y},${te.width}x${te.height})
`),
                    de($, B, q, te)
                }
                if (t.debug) {
                    Ne($, I, G, r.scramblableWidth, r.scramblableHeight),
                    w += `
DEBUG: Red borders drawn around each chunk
`;
                    let S = 0;
                    for (const q of G) {
                        const te = I[q];
                        te && (S += te.width * te.height)
                    }
                    const T = r.scramblableWidth * r.scramblableHeight;
                    w += `
Verification:
`,
                    w += `Total chunk pixels: ${S}
`,
                    w += `Expected pixels: ${T}
`,
                    w += `Coverage: ${S === T ? "Perfect" : "Gap/Overlap detected!"}
`,
                    w += `
Descrambling complete! Seamless rendering prevents visual artifacts.
`
                }
                if (t.debug && k && k.visualMap) {
                    const S = document.querySelector(".pixel-debug-map");
                    S && S.remove();
                    const T = document.createElement("img");
                    T.src = k.visualMap,
                    T.className = "pixel-debug-map",
                    T.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        border: 3px solid #e74c3c;
        background: white;
        padding: 5px;
        z-index: 9999;
        max-width: 200px;
        max-height: 200px;
        image-rendering: pixelated;
      `,
                    T.title = "Pixel Debug Map: Red=Gaps, Yellow=Overlaps, Green=Normal Coverage",
                    T.addEventListener("click", () => T.remove()),
                    document.body.appendChild(T),
                    w += `Visual Debug Map displayed (click to close)
`,
                    w += `Legend: 🔴 Red=Gaps, 🟡 Yellow=Overlaps, 🟢 Green=Normal

`
                }
                t.debug && (a.value = w),
                p.value = !1
            } catch (o) {
                p.value = !1,
                f.value < Se ? (_.value = `Attempt ${f.value + 1}/${Se}: ${o.message}`,
                M.value = !0) : (_.value = `Failed after ${Se} attempts: ${o.message}`,
                M.value = !1),
                console.error("Descrambling error:", o)
            }
        }
          , Ne = (o, r, k, E, P) => {
            o.save(),
            o.strokeStyle = "#ff0000",
            o.lineWidth = 1,
            o.lineCap = "square",
            o.lineJoin = "miter",
            o.setLineDash([5, 15]),
            o.imageSmoothingEnabled = !1,
            console.log("🔍 Drawing chunk debug borders..."),
            k.forEach(w => {
                const I = r[w];
                if (!I)
                    return;
                const A = Math.floor(I.x)
                  , $ = Math.floor(I.y)
                  , B = Math.floor(I.width)
                  , H = Math.floor(I.height);
                console.log(`Drawing border for chunk ${w}: (${A},${$}) ${B}×${H}`),
                o.beginPath(),
                o.moveTo(A, $ + .5),
                o.lineTo(A + B, $ + .5),
                o.moveTo(A + B - .5, $),
                o.lineTo(A + B - .5, $ + H),
                o.moveTo(A, $ + H - .5),
                o.lineTo(A + B, $ + H - .5),
                o.moveTo(A + .5, $),
                o.lineTo(A + .5, $ + H),
                o.stroke(),
                o.fillStyle = "#ff0000",
                o.font = "bold 14px monospace",
                o.textAlign = "center",
                o.textBaseline = "middle";
                const N = A + B / 2
                  , G = $ + H / 2;
                o.fillStyle = "rgba(255, 255, 255, 0.8)";
                const S = 20
                  , T = 16;
                o.fillRect(N - S / 2, G - T / 2, S, T),
                o.fillStyle = "#ff0000",
                o.fillText(w, N, G)
            }
            ),
            o.strokeStyle = "#0066ff",
            o.lineWidth = 2,
            o.setLineDash([5, 3]),
            o.beginPath(),
            o.rect(.5, .5, E - 1, P - 1),
            o.stroke(),
            o.fillStyle = "rgba(0, 0, 0, 0.8)",
            o.fillRect(5, 5, 180, 40),
            o.fillStyle = "#ffffff",
            o.font = "12px monospace",
            o.textAlign = "left",
            o.fillText("Red: Chunk borders", 10, 20),
            o.fillText("Blue: Scramblable area", 10, 35),
            o.restore(),
            console.log("✅ Chunk debug borders drawn")
        }
          , Te = (o, r, k) => {
            console.group("📏 Chunk Grid Analysis");
            let E = 0;
            for (let P = 0; P < 3; P++) {
                let w = 0;
                console.log(`Row ${P}:`);
                for (let I = 0; I < 3; I++) {
                    const A = `${P}${I}`
                      , $ = o[A];
                    if ($) {
                        console.log(`  ${A}: (${$.x},${$.y}) ${$.width}×${$.height}`),
                        I === 0 && ($.height,
                        $.y),
                        w += $.width,
                        E += $.width * $.height;
                        const B = I === 0 ? 0 : o[`${P}${I - 1}`].x + o[`${P}${I - 1}`].width
                          , H = P === 0 ? 0 : o[`${P - 1}${I}`].y + o[`${P - 1}${I}`].height;
                        Math.abs($.x - B) > .1 && console.warn(`    ⚠️  X misalignment: expected ${B}, got ${$.x}`),
                        Math.abs($.y - H) > .1 && console.warn(`    ⚠️  Y misalignment: expected ${H}, got ${$.y}`)
                    }
                }
                w !== r && console.warn(`  ⚠️  Row ${P} width mismatch: ${w} vs expected ${r}`)
            }
            console.groupEnd()
        }
        ;
        return re( () => {
            X(),
            we()
        }
        ),
        Ee( () => {}
        ),
        ce([ () => t.imageUrl, () => d.value], () => {
            f.value = 0,
            M.value = !1,
            we()
        }
        , {
            immediate: !1
        }),
        ce( () => [window.innerWidth], () => {
            p.value && !_.value && X()
        }
        , {
            immediate: !1
        }),
        (o, r) => (x(),
        V(he, null, [v("div", ae({
            class: "image-descrambler transition transform w-auto mb-6 last:mb-0"
        }, o.$attrs, {
            style: `aspect-ratio: ${c.value / g.value}`,
            ref_key: "containerRef",
            ref: s
        }), [p.value || _.value ? (x(),
        V("div", {
            key: 0,
            class: ne(["image-placeholder bg-main-popup w-[1280px] h-[1400px]", {
                "error-state": _.value
            }]),
            onClick: Q
        }, [v("div", na, [p.value ? (x(),
        V("div", aa, r[1] || (r[1] = [v("div", {
            class: "spinner"
        }, null, -1)]))) : _.value ? (x(),
        V("div", oa, [r[3] || (r[3] = v("div", {
            class: "error-icon"
        }, "⚠️", -1)), r[4] || (r[4] = v("p", {
            class: "error-title"
        }, "Tải ảnh thất bại, thử lại nhé bạn ơi...", -1)), v("p", sa, le(_.value), 1), v("button", {
            class: "retry-button",
            onClick: Q
        }, r[2] || (r[2] = [v("span", {
            class: "retry-icon"
        }, "↻", -1), fe(" Retry ")])), r[5] || (r[5] = v("p", {
            class: "scroll-hint"
        }, "Or scroll to retry automatically", -1))])) : oe("", !0)])], 2)) : oe("", !0), Kt(v("div", la, [v("canvas", {
            ref_key: "outerCanvas",
            ref: n,
            width: c.value,
            height: g.value,
            class: "relative w-full h-auto",
            onContextmenu: r[0] || (r[0] = _e( () => {}
            , ["prevent"]))
        }, null, 40, ra), v("div", ia, [v("div", ca, [v("canvas", {
            ref_key: "innerCanvas",
            ref: l,
            width: c.value,
            height: g.value,
            class: "w-full pointer-events-none"
        }, null, 8, ua)])])], 512), [[qt, !p.value && !_.value]]), y.value ? (x(),
        V("div", da, le(y.value), 1)) : oe("", !0)], 16), a.value ? (x(),
        V("div", pa, [r[6] || (r[6] = v("h4", null, "Debug Info:", -1)), v("pre", null, le(a.value), 1)])) : oe("", !0)], 64))
    }
}
  , ma = Le(fa, [["__scopeId", "data-v-1d79464e"]])
  , ga = ["src"]
  , ha = {
    key: 1
}
  , va = "/loading-place.webp"
  , ya = z({
    __name: "ChapterImg",
    props: {
        src: {},
        width: {},
        preload: {
            type: Boolean,
            default: !1
        }
    },
    setup(i) {
        const t = i
          , n = L()
          , l = L(!1)
          , s = L(!1)
          , c = L(!1)
          , g = L(!1)
          , y = typeof window < "u"
          , a = J( () => {
            if (!t.src)
                return !1;
            try {
                return !!t.src.substring(t.src.lastIndexOf("/") + 1).match(/^([0-9a-zA-Z]+)_file_/)
            } catch (m) {
                return console.warn("Error detecting scrambled image:", m),
                !1
            }
        }
        )
          , d = J( () => {
            if (!a.value)
                return "";
            try {
                const u = t.src.substring(t.src.lastIndexOf("/") + 1).match(/^([0-9a-zA-Z]+)_file_/);
                return u ? u[1] : ""
            } catch (m) {
                return console.warn("Error extracting DRM string:", m),
                ""
            }
        }
        )
          , p = J( () => l.value ? {} : {
            backgroundImage: `url(${va})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        })
          , _ = () => {
            if (!n.value || !y)
                return;
            const m = n.value.getBoundingClientRect()
              , u = window.innerHeight || document.documentElement.clientHeight;
            m.top < u + 1700 && m.bottom > -1700 && (g.value = !0,
            window.removeEventListener("scroll", _),
            window.removeEventListener("resize", _))
        }
          , f = async () => {
            !t.src || !y || (await ge(),
            t.preload && M(),
            _(),
            g.value || (window.addEventListener("scroll", _, {
                passive: !0
            }),
            window.addEventListener("resize", _, {
                passive: !0
            })))
        }
        ;
        re( () => {
            f()
        }
        ),
        ce( () => t.src, m => {
            m && y && (l.value = !1,
            s.value = !1,
            g.value = !1,
            f())
        }
        , {
            immediate: !0
        }),
        ce(g, m => {
            m && !t.preload && K()
        }
        );
        const M = () => {
            if (!t.src || !y || typeof Image > "u")
                return;
            const m = new Image;
            m.onload = () => {
                c.value = !0
            }
            ,
            m.onerror = u => {
                s.value = !0,
                c.value = !0
            }
            ,
            m.src = Q()
        }
          , K = () => {
            if (!t.src || !y || typeof Image > "u") {
                l.value = !0;
                return
            }
            const m = new Image;
            m.onload = () => {
                setTimeout( () => {
                    l.value = !0
                }
                , 50)
            }
            ,
            m.onerror = u => {
                s.value = !0,
                console.log("load error", u),
                setTimeout( () => {
                    l.value = !0
                }
                , 50)
            }
            ,
            m.src = Q()
        }
        ;
        function U() {
            l.value = !0
        }
        function X() {
            s.value = !0,
            l.value = !0
        }
        function Q() {
            return a.value || t.width === 0 ? t.src : t.width ? "https://i0.wp.com/" + t.src.replace("https://external-content.duckduckgo.com/iu/?u=", "").replace("https://", "") + `?w=${t.width}` : t.src
        }
        return (m, u) => a.value ? (x(),
        V("div", ha, [h(ma, ae({
            "drm-string": d.value,
            "image-url": Q(),
            debug: !1
        }, m.$attrs), null, 16, ["drm-string", "image-url"])])) : (x(),
        V("div", {
            key: 0,
            class: "image-container w-full text-center justify-center flex",
            ref_key: "imageRef",
            ref: n,
            style: Ie(p.value)
        }, [g.value || m.preload && c.value ? (x(),
        V("img", ae({
            key: 0,
            src: Q()
        }, m.$attrs, {
            class: "actual-image",
            onLoad: U,
            onError: X
        }), null, 16, ga)) : oe("", !0)], 4))
    }
})
  , Ct = Le(ya, [["__scopeId", "data-v-47bcf7ff"]])
  , ct = z({
    __name: "Select",
    props: {
        open: {
            type: Boolean
        },
        defaultOpen: {
            type: Boolean
        },
        defaultValue: {},
        modelValue: {},
        by: {
            type: [String, Function]
        },
        dir: {},
        multiple: {
            type: Boolean
        },
        autocomplete: {},
        disabled: {
            type: Boolean
        },
        name: {},
        required: {
            type: Boolean
        }
    },
    emits: ["update:modelValue", "update:open"],
    setup(i, {emit: t}) {
        const s = Ye(i, t);
        return (c, g) => (x(),
        Z(e(Bn), Xe(Qe(e(s))), {
            default: b( () => [Y(c.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , ba = z({
    inheritAttrs: !1,
    __name: "SelectContent",
    props: {
        forceMount: {
            type: Boolean
        },
        position: {
            default: "popper"
        },
        bodyLock: {
            type: Boolean
        },
        side: {},
        sideOffset: {},
        align: {},
        alignOffset: {},
        avoidCollisions: {
            type: Boolean
        },
        collisionBoundary: {},
        collisionPadding: {},
        arrowPadding: {},
        sticky: {},
        hideWhenDetached: {
            type: Boolean
        },
        positionStrategy: {},
        updatePositionStrategy: {},
        disableUpdateOnLayoutShift: {
            type: Boolean
        },
        prioritizePosition: {
            type: Boolean
        },
        reference: {},
        asChild: {
            type: Boolean
        },
        as: {},
        class: {}
    },
    emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
    setup(i, {emit: t}) {
        const n = i
          , l = t
          , s = J( () => {
            const {class: g, ...y} = n;
            return y
        }
        )
          , c = Ye(s, l);
        return (g, y) => (x(),
        Z(e(Kn), null, {
            default: b( () => [h(e(Hn), ae({
                ...e(c),
                ...g.$attrs
            }, {
                class: e(se)("relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-stone-200 bg-white text-stone-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-50", g.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", n.class)
            }), {
                default: b( () => [h(e(Ca)), h(e(Qn), {
                    class: ne(e(se)("p-1", g.position === "popper" && "h-[--reka-select-trigger-height] w-full min-w-[--reka-select-trigger-width]"))
                }, {
                    default: b( () => [Y(g.$slots, "default")]),
                    _: 3
                }, 8, ["class"]), h(e($a))]),
                _: 3
            }, 16, ["class"])]),
            _: 3
        }))
    }
})
  , wa = z({
    __name: "SelectGroup",
    props: {
        asChild: {
            type: Boolean
        },
        as: {},
        class: {}
    },
    setup(i) {
        const t = i
          , n = J( () => {
            const {class: l, ...s} = t;
            return s
        }
        );
        return (l, s) => (x(),
        Z(e(Vn), ae({
            class: e(se)("p-1 w-full", t.class)
        }, n.value), {
            default: b( () => [Y(l.$slots, "default")]),
            _: 3
        }, 16, ["class"]))
    }
})
  , _a = {
    class: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center"
}
  , xa = z({
    __name: "SelectItem",
    props: {
        value: {},
        disabled: {
            type: Boolean
        },
        textValue: {},
        asChild: {
            type: Boolean
        },
        as: {},
        class: {}
    },
    setup(i) {
        const t = i
          , n = J( () => {
            const {class: s, ...c} = t;
            return c
        }
        )
          , l = Ce(n);
        return (s, c) => (x(),
        Z(e(Un), ae(e(l), {
            class: e(se)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-stone-100 focus:text-stone-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-stone-800 dark:focus:text-stone-50", t.class)
        }), {
            default: b( () => [v("span", _a, [h(e(jn), null, {
                default: b( () => [h(e(vn), {
                    class: "h-4 w-4"
                })]),
                _: 1
            })]), h(e(Gn), null, {
                default: b( () => [Y(s.$slots, "default")]),
                _: 3
            })]),
            _: 3
        }, 16, ["class"]))
    }
})
  , $a = z({
    __name: "SelectScrollDownButton",
    props: {
        asChild: {
            type: Boolean
        },
        as: {},
        class: {}
    },
    setup(i) {
        const t = i
          , n = J( () => {
            const {class: s, ...c} = t;
            return c
        }
        )
          , l = Ce(n);
        return (s, c) => (x(),
        Z(e(qn), ae(e(l), {
            class: e(se)("flex cursor-default items-center justify-center py-1", t.class)
        }), {
            default: b( () => [Y(s.$slots, "default", {}, () => [h(e(bt))])]),
            _: 3
        }, 16, ["class"]))
    }
})
  , Ca = z({
    __name: "SelectScrollUpButton",
    props: {
        asChild: {
            type: Boolean
        },
        as: {},
        class: {}
    },
    setup(i) {
        const t = i
          , n = J( () => {
            const {class: s, ...c} = t;
            return c
        }
        )
          , l = Ce(n);
        return (s, c) => (x(),
        Z(e(Yn), ae(e(l), {
            class: e(se)("flex cursor-default items-center justify-center py-1", t.class)
        }), {
            default: b( () => [Y(s.$slots, "default", {}, () => [h(e(Jn))])]),
            _: 3
        }, 16, ["class"]))
    }
})
  , ut = z({
    __name: "SelectTrigger",
    props: {
        disabled: {
            type: Boolean
        },
        reference: {},
        asChild: {
            type: Boolean
        },
        as: {},
        class: {}
    },
    setup(i) {
        const t = i
          , n = J( () => {
            const {class: s, ...c} = t;
            return c
        }
        )
          , l = Ce(n);
        return (s, c) => (x(),
        Z(e(Xn), ae(e(l), {
            class: e(se)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-stone-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white data-[placeholder]:text-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start dark:border-stone-800 dark:ring-offset-stone-950 dark:data-[placeholder]:text-stone-400 dark:focus:ring-stone-300", t.class)
        }), {
            default: b( () => [Y(s.$slots, "default"), h(e(Fn), {
                "as-child": ""
            }, {
                default: b( () => [h(e(bt), {
                    class: "w-4 h-4 opacity-50 shrink-0"
                })]),
                _: 1
            })]),
            _: 3
        }, 16, ["class"]))
    }
})
  , ka = {
    class: "p-4 md:mx-24"
}
  , Sa = {
    class: "grid grid-cols-3 gap-2 my-2"
}
  , Ia = {
    class: "grid grid-cols-2 gap-2 my-2"
}
  , Pa = {
    class: "my-3 text-sm"
}
  , Ea = {
    class: "flex text-white items-center justify-between"
}
  , Ta = {
    class: "flex text-white mt-2 items-center justify-between"
}
  , Ba = {
    class: "flex text-white mt-2 items-center justify-between"
}
  , Ma = {
    class: "mt-3"
}
  , Aa = {
    class: "gap-y-5"
}
  , Ra = {
    class: "grid grid-cols-3 gap-2"
}
  , kt = z({
    __name: "ReaderSettingPopup",
    setup(i) {
        const t = xe()
          , {imageQuality: n} = Ae(et());
        function l() {
            t.$patch({
                revControlle: !t.revControlle
            })
        }
        function s() {
            t.$patch({
                autoChapter: !t.autoChapter
            })
        }
        function c(y) {
            y < 0 && (y = 0),
            y > 25 && (y = 25),
            t.$patch({
                pageGap: y
            })
        }
        function g(y) {
            n.value = y
        }
        return (y, a) => {
            const d = Yt
              , p = Jt
              , _ = en;
            return x(),
            Z(e(nn), null, {
                default: b( () => [h(d, {
                    "as-child": ""
                }, {
                    default: b( () => [Y(y.$slots, "default")]),
                    _: 3
                }), h(e(tn), {
                    class: "bg-main-secondary border-0 flex text-main-text"
                }, {
                    default: b( () => [h(e(ta), null, {
                        default: b( () => [h(e(Xt), {
                            class: "text-lg font-semibold mx-auto"
                        }, {
                            default: b( () => a[8] || (a[8] = [fe("Cài đặt đọc truyện")])),
                            _: 1,
                            __: [8]
                        }), h(e(yn), {
                            class: "text-sm text-gray-500 mx-auto"
                        }, {
                            default: b( () => a[9] || (a[9] = [fe("Tùy chỉnh trải nghiệm đọc truyện của bạn")])),
                            _: 1,
                            __: [9]
                        })]),
                        _: 1
                    }), v("div", ka, [v("section", null, [a[13] || (a[13] = v("h3", {
                        class: "font-semibold"
                    }, "Chất lượng ảnh:", -1)), v("div", Sa, [h(e(pe), {
                        class: ne([[e(n) === "full" ? "bg-main-accent" : "bg-main-popup/60"], "hover:opacity-50 hover:bg-none"]),
                        onClick: a[0] || (a[0] = f => g("full"))
                    }, {
                        default: b( () => a[10] || (a[10] = [v("p", null, "Mặc định", -1)])),
                        _: 1,
                        __: [10]
                    }, 8, ["class"]), h(e(pe), {
                        class: ne([[e(n) === "med" ? "bg-main-accent" : "bg-main-popup/60"], "hover:opacity-50 hover:bg-none"]),
                        onClick: a[1] || (a[1] = f => g("med"))
                    }, {
                        default: b( () => a[11] || (a[11] = [v("p", null, "1024p", -1)])),
                        _: 1,
                        __: [11]
                    }, 8, ["class"]), h(e(pe), {
                        class: ne([[e(n) === "small" ? "bg-main-accent" : "bg-main-popup/60"], "hover:opacity-50 hover:bg-none"]),
                        onClick: a[2] || (a[2] = f => g("small"))
                    }, {
                        default: b( () => a[12] || (a[12] = [v("p", null, "800p", -1)])),
                        _: 1,
                        __: [12]
                    }, 8, ["class"])])]), v("section", null, [a[16] || (a[16] = v("h3", {
                        class: "font-semibold"
                    }, "Chế độ đọc:", -1)), v("div", Ia, [h(e(pe), {
                        class: ne([[e(t).singlePage ? "bg-main-popup/60" : "bg-main-accent"], "hover:opacity-50 hover:bg-none"]),
                        onClick: a[3] || (a[3] = f => e(t).$patch({
                            singlePage: !1
                        }))
                    }, {
                        default: b( () => [a[14] || (a[14] = v("p", null, "Đọc dọc", -1)), h(e(Qt), {
                            class: "text-main-text"
                        })]),
                        _: 1,
                        __: [14]
                    }, 8, ["class"]), h(e(pe), {
                        disabled: "",
                        class: ne([[e(t).singlePage ? "bg-main-accent" : "bg-main-popup/60"], "hover:opacity-50 hover:bg-none"]),
                        onClick: a[4] || (a[4] = f => e(t).$patch({
                            singlePage: !0
                        }))
                    }, {
                        default: b( () => [a[15] || (a[15] = v("p", null, "Đọc ngang", -1)), h(e(Zt), {
                            class: "text-main-text"
                        })]),
                        _: 1,
                        __: [15]
                    }, 8, ["class"])])]), v("div", Pa, [v("div", Ea, [a[17] || (a[17] = v("p", null, "Chuyển trang bên trái: ", -1)), h(p, {
                        "model-value": e(t).revControlle,
                        "onUpdate:modelValue": l,
                        class: "ml-2",
                        disabled: !e(t).singlePage
                    }, null, 8, ["model-value", "disabled"])]), v("div", Ta, [a[18] || (a[18] = v("p", null, "Tự động chuyển chap: ", -1)), h(p, {
                        "model-value": e(t).autoChapter,
                        "onUpdate:modelValue": s,
                        class: "ml-2",
                        disabled: e(t).singlePage
                    }, null, 8, ["model-value", "disabled"])]), v("div", Ba, [a[19] || (a[19] = v("p", null, "Khoảng cách giữa các ảnh: ", -1)), h(_, {
                        "onUpdate:modelValue": c,
                        "default-value": e(t).pageGap,
                        class: "w-20",
                        type: "number",
                        disabled: e(t).singlePage,
                        min: "0",
                        max: "25"
                    }, null, 8, ["default-value", "disabled"])])]), v("div", null, [a[23] || (a[23] = v("span", {
                        class: "font-semibold text-main-text"
                    }, "Tùy chỉnh ảnh truyện:", -1)), v("div", Ma, [v("div", Aa, [v("div", Ra, [h(e(pe), {
                        class: ne([[e(t).imageMode === "height-fit" ? "bg-main-accent" : "bg-main-primary/60"], "hover:opacity-50 hover:bg-main-popup/40 flex items-center flex-wrap h-full"]),
                        onClick: a[5] || (a[5] = f => e(t).$patch({
                            imageMode: "height-fit"
                        }))
                    }, {
                        default: b( () => [a[20] || (a[20] = v("p", null, "Vừa chiều dọc", -1)), h(e(wn))]),
                        _: 1,
                        __: [20]
                    }, 8, ["class"]), h(e(pe), {
                        class: ne([[e(t).imageMode === "width-fit" ? "bg-main-accent" : "bg-main-primary/60"], "hover:opacity-50 hover:bg-main-popup/40 flex items-center flex-wrap h-full"]),
                        onClick: a[6] || (a[6] = f => e(t).$patch({
                            imageMode: "width-fit"
                        }))
                    }, {
                        default: b( () => [a[21] || (a[21] = v("p", null, "Vừa chiều ngang", -1)), h(e(_n), {
                            class: "text-main-text"
                        })]),
                        _: 1,
                        __: [21]
                    }, 8, ["class"]), h(e(pe), {
                        class: ne([[e(t).imageMode === "auto" ? "bg-main-accent" : "bg-main-primary/60"], "hover:opacity-50 hover:bg-main-popup/40 flex items-center flex-wrap h-full"]),
                        onClick: a[7] || (a[7] = f => e(t).$patch({
                            imageMode: "auto"
                        }))
                    }, {
                        default: b( () => [a[22] || (a[22] = v("p", null, "Tự động", -1)), h(e(xn), {
                            class: "text-main-text"
                        })]),
                        _: 1,
                        __: [22]
                    }, 8, ["class"])])])])])]), h(e(ea))]),
                    _: 1
                })]),
                _: 3
            })
        }
    }
})
  , Da = {
    class: "flex flex-nowrap gap-2 p-2 bg-main-popup rounded-lg shadow-lg overflow-x-hidden"
}
  , La = {
    class: ""
}
  , Oa = {
    class: ""
}
  , Na = z({
    __name: "ChapterControl",
    props: {
        mangaId: {
            type: String,
            required: !0
        },
        chapterInfo: {
            type: Object,
            required: !0
        }
    },
    async setup(i) {
        var Q, m;
        let t, n;
        const l = i
          , s = an()
          , c = L(!0);
        on().params.chapter;
        const g = (m = (Q = l.chapterInfo) == null ? void 0 : Q.info) == null ? void 0 : m.id
          , y = L(g || "")
          , {y: a} = Oe()
          , d = L(!1)
          , {data: p, pending: _} = ([t,n] = mt( () => Je( () => cn(l.mangaId), {
            lazy: !0,
            watch: [ () => l.mangaId]
        }, "$mzrLGrd1QI")),
        t = await t,
        n(),
        t);
        re(async () => {
            try {
                g && (d.value = await sn(g),
                y.value = g)
            } catch {
                Ve().toast({
                    title: "Lỗi",
                    description: "Không thể tải danh sách chương đã thích",
                    type: "foreground",
                    variant: "destructive"
                })
            } finally {
                c.value = !1
            }
        }
        );
        const f = () => {
            if (s.isAnonymous) {
                Ve().toast({
                    title: "Lỗi",
                    description: "Bạn cần đăng nhập để thực hiện hành động này",
                    type: "foreground",
                    variant: "destructive"
                });
                return
            } else if (g)
                d.value = !d.value,
                ln(g);
            else {
                Ve().toast({
                    title: "Lỗi",
                    description: "Nút không khả dụng, bạn dùng trong trang đọc truyện nhé :(",
                    type: "foreground",
                    variant: "destructive"
                });
                return
            }
        }
          , M = u => {
            ve(`/g/${l.mangaId}/chapter/${u}`)
        }
          , K = () => {
            var u;
            ve(`/g/${l.mangaId}/chapter/${(u = l.chapterInfo) == null ? void 0 : u.next}`)
        }
          , U = () => {
            var u;
            ve(`/g/${l.mangaId}/chapter/${(u = l.chapterInfo) == null ? void 0 : u.prev}`)
        }
          , X = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        ;
        return ce(y, (u, C) => {
            u && u !== C && u !== "" && C !== "" && M(u)
        }
        , {
            immediate: !1
        }),
        (u, C) => {
            var R, j;
            const W = pe;
            return x(),
            V("div", Da, [h(W, {
                class: "bg-main-accent",
                onClick: U,
                disabled: ((R = l.chapterInfo) == null ? void 0 : R.prev) == null
            }, {
                default: b( () => [h(e($n), {
                    "stroke-width": 4
                })]),
                _: 1
            }, 8, ["disabled"]), h(W, {
                class: "bg-main-accent",
                onClick: K,
                disabled: ((j = l.chapterInfo) == null ? void 0 : j.next) == null
            }, {
                default: b( () => [h(e(gt), {
                    "stroke-width": 4
                })]),
                _: 1
            }, 8, ["disabled"]), c.value ? (x(),
            Z(e(ct), {
                key: 0,
                disabled: ""
            }, {
                default: b( () => [h(e(ut), {
                    class: "bg-white text-main-background"
                }, {
                    default: b( () => C[1] || (C[1] = [v("h1", null, "...", -1)])),
                    _: 1,
                    __: [1]
                })]),
                _: 1
            })) : (x(),
            Z(e(ct), {
                key: 1,
                modelValue: y.value,
                "onUpdate:modelValue": C[0] || (C[0] = O => y.value = O)
            }, {
                default: b( () => [h(e(ut), {
                    class: "bg-white text-main-background line-clamp-1 text-ellipsis sm:max-w-[100vw]"
                }, {
                    default: b( () => [v("h1", La, le(i.chapterInfo.info.title), 1)]),
                    _: 1
                }), h(e(ba), null, {
                    default: b( () => [h(e(wa), {
                        class: "text-wrap text-ellipsis overflow-hidden whitespace-nowrap max-w-[100vw]"
                    }, {
                        default: b( () => [(x(!0),
                        V(he, null, Re(e(p), O => (x(),
                        Z(e(xa), {
                            key: O.id,
                            value: O.id
                        }, {
                            default: b( () => [v("div", Oa, le(O.title), 1)]),
                            _: 2
                        }, 1032, ["value"]))), 128))]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            }, 8, ["modelValue"])), h(W, {
                class: "group bg-main-secondary/60",
                onClick: f
            }, {
                default: b( () => [h(e(bn), {
                    class: ne([d.value ? "fill-red-600 text-transparent" : "", "transition-all group-hover:fill-red-400"])
                }, null, 8, ["class"])]),
                _: 1
            }), h(W, {
                class: "bg-main-accent",
                onClick: X,
                disabled: e(a) == 0
            }, {
                default: b( () => [h(e(Zn), {
                    "stroke-width": 4
                })]),
                _: 1
            }, 8, ["disabled"]), h(kt, null, {
                default: b( () => [h(W, {
                    class: "bg-main-primary rounded"
                }, {
                    default: b( () => [h(e(rn))]),
                    _: 1
                })]),
                _: 1
            })])
        }
    }
})
  , Ha = window.setInterval
  , Wa = {
    id: "image",
    class: "min-w-0 relative mt-2 min-h-[130vh]",
    ref: "el"
}
  , Va = {
    key: 0,
    class: "flex justify-center items-center py-20"
}
  , Fa = {
    key: 0,
    class: "flex w-full justify-center group pt-12 pb-48"
}
  , za = {
    class: "font-heading group-hover:text-main-accent text-xl rounded px-1 text-main-text flex gap-1 items-center"
}
  , Ua = {
    key: 0
}
  , ja = ["disabled"]
  , Ga = {
    key: 1,
    class: "fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
}
  , Ka = {
    class: "max-w-md mx-auto p-4"
}
  , qa = {
    class: "text-center text-white text-sm mb-2"
}
  , Ya = {
    class: "w-full bg-gray-700 rounded-full h-2"
}
  , Xa = {
    key: 2,
    class: "mt-8 mb-6"
}
  , ze = 2e3
  , Qa = z({
    __name: "LongStripReader",
    props: {
        pages: {
            type: Array,
            required: !0,
            default: () => [],
            validator: i => Array.isArray(i)
        },
        nextChapter: {
            type: [String, Number, null],
            required: !0,
            default: null
        },
        mangaId: {
            type: String,
            required: !0,
            default: ""
        }
    },
    setup(i) {
        const {autoChapter: t} = xe()
          , n = L(null)
          , l = L(!1)
          , s = xe()
          , {y: c} = Oe()
          , {imageQuality: g} = Ae(et())
          , y = L(!1)
          , a = L(0)
          , d = L(null)
          , p = i
          , _ = J( () => p.pages && Array.isArray(p.pages) && p.pages.length > 0)
          , f = J( () => p.nextChapter !== null && p.nextChapter !== void 0)
          , M = J( () => s.autoChapter && f.value && l.value)
          , K = () => {
            if (!n.value || !l.value)
                return;
            const u = window.pageYOffset || document.documentElement.scrollTop
              , C = window.innerHeight
              , W = document.documentElement.scrollHeight
              , R = u + C >= W - 100;
            R && !y.value ? (y.value = !0,
            U()) : !R && y.value && (y.value = !1,
            X())
        }
          , U = () => {
            d.value && clearInterval(d.value),
            a.value = 0;
            const u = 50
              , C = u / ze * 100;
            d.value = Ha( () => {
                a.value += C,
                a.value >= 100 && (a.value = 100,
                clearInterval(d.value),
                M.value && p.nextChapter !== null && ve(`/g/${p.mangaId}/chapter/${p.nextChapter}`, {
                    replace: !0
                }))
            }
            , u)
        }
          , X = () => {
            d.value && (clearInterval(d.value),
            d.value = null),
            a.value = 0
        }
        ;
        re( () => {
            try {
                setTimeout( () => {
                    n.value = document
                }
                , 2300),
                n.value = document,
                l.value = !0,
                window.addEventListener("scroll", K, {
                    passive: !0
                })
            } catch (u) {
                console.error("Error during LongStripReader mount:", u)
            }
        }
        ),
        ht( () => {
            n.value = null,
            l.value = !1,
            c.value = 0,
            X(),
            window.removeEventListener("scroll", K)
        }
        ),
        vt( () => {
            n.value = document,
            l.value = !0,
            window.addEventListener("scroll", K, {
                passive: !0
            })
        }
        ),
        Ee( () => {
            X(),
            window.removeEventListener("scroll", K)
        }
        );
        const Q = () => {
            try {
                return g.value === "full" ? 0 : g.value === "med" ? 1024 : g.value === "small" ? 800 : 0
            } catch (u) {
                return console.warn("Error getting image width, using default:", u),
                0
            }
        }
          , m = () => {
            try {
                p.nextChapter !== null && p.mangaId && ve(`/g/${p.mangaId}/chapter/${p.nextChapter}`, {
                    replace: !0
                })
            } catch (u) {
                console.error("Error navigating to next chapter:", u)
            }
        }
        ;
        return (u, C) => (x(),
        V(he, null, [v("div", Wa, [e(_) ? (x(),
        V("div", {
            key: 1,
            class: "overflow-x-auto flex flex-col relative items-center h-full w-full select-none bg-transparent",
            style: Ie(`gap: ${e(s).pageGap || 0}px`)
        }, [(x(!0),
        V(he, null, Re(p.pages, (W, R) => (x(),
        V(he, {
            key: `page-${R}`
        }, [W ? (x(),
        Z(Ct, {
            key: 0,
            src: W,
            preload: !1,
            width: Q(),
            class: ne([e(s).imageMode === "auto" ? "w-auto h-auto max-w-[100vw]" : "", e(s).imageMode === "width-fit" ? "w-[100vw] h-auto" : "", e(s).imageMode === "height-fit" ? "h-[100vh] w-auto max-w-[100vw]" : ""]),
            onError: j => console.warn(`Failed to load image ${R}: ${W}`)
        }, null, 8, ["src", "width", "class", "onError"])) : oe("", !0)], 64))), 128))], 4)) : (x(),
        V("div", Va, C[0] || (C[0] = [v("div", {
            class: "text-main-text text-center"
        }, [v("p", {
            class: "text-lg"
        }, "No pages available")], -1)])))], 512), e(f) ? (x(),
        V("div", Fa, [v("div", za, [e(s).autoChapter ? oe("", !0) : (x(),
        V("div", Ua, [v("button", {
            class: "text-main-text bg-main-accent rounded hover:bg-main-accent/60 px-4 py-2 transition-colors",
            onClick: m,
            disabled: !p.mangaId || p.nextChapter === null
        }, " Chương tiếp >> ", 8, ja)]))])])) : oe("", !0), e(M) && e(y) ? (x(),
        V("div", Ga, [v("div", Ka, [v("div", qa, " Chuyển chap sau " + le(Math.ceil((ze - e(a) * ze / 100) / 1e3)) + "s ", 1), v("div", Ya, [v("div", {
            class: "bg-main-accent h-2 rounded-full transition-all duration-75 ease-out",
            style: Ie(`width: ${e(a)}%`)
        }, null, 4)]), C[1] || (C[1] = v("div", {
            class: "text-center text-gray-300 text-xs mt-1"
        }, " Cuộn lên để hủy ", -1))])])) : oe("", !0), e(f) ? oe("", !0) : (x(),
        V("div", Xa, [h(Cn)]))], 64))
    }
})
  , Za = Le(Qa, [["__scopeId", "data-v-abc035e7"]])
  , Ja = {
    class: "absolute top-0 left-0 z-10 w-screen h-full grid grid-cols-2 pointer-events-none"
}
  , eo = {
    class: "flex items-center justify-center h-screen"
}
  , to = {
    class: "hidden"
}
  , no = ["src"]
  , ao = {
    class: "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-gray-200 rounded-full h-2 overflow-hidden opacity-30"
}
  , oo = {
    class: "absolute bottom-5 right-5 text-xs text-white bg-black/50 px-2 py-1 rounded"
}
  , so = z({
    __name: "SinglePageReader",
    props: {
        pages: {
            type: Array,
            required: !0
        },
        nextChapter: {
            type: [String, Number],
            required: !0
        },
        prevChapter: {
            type: [String, Number],
            required: !0
        },
        mangaId: {
            type: String,
            required: !0
        }
    },
    setup(i, {expose: t}) {
        const {y: n, arrivedState: l} = Oe()
          , s = xe();
        yt();
        const c = un()
          , {revControlle: g, singlePage: y, singlePageOut: a} = Ae(xe())
          , {imageQuality: d} = Ae(et())
          , p = i
          , _ = L(0)
          , f = J( () => p.pages[_.value]);
        L(!1);
        const M = () => {
            _.value === p.pages.length - 1 && p.nextChapter === null && a.value && ve(`/g/${p.mangaId}`),
            _.value < p.pages.length - 1 && _.value++,
            _.value === p.pages.length - 1 && p.nextChapter !== null && ve(`/g/${p.mangaId}/chapter/${p.nextChapter}`),
            n.value = 500
        }
          , K = Q => {
            Q.key === "ArrowRight" ? s.revControlle ? U() : M() : Q.key === "ArrowLeft" && (s.revControlle ? M() : U())
        }
          , U = () => {
            _.value > 0 && _.value--,
            _.value === 0 && p.prevChapter !== null && (c.setComingFromNextChapter(!0),
            ve(`/g/${p.mangaId}/chapter/${p.prevChapter}`)),
            n.value = 500
        }
        ;
        re( () => {
            n.value = 500,
            c.comingFromNextChapter ? (_.value = p.pages.length - 1,
            c.setComingFromNextChapter(!1)) : _.value = 0,
            window.addEventListener("keydown", K)
        }
        ),
        Ee( () => {
            window.removeEventListener("keydown", K)
        }
        ),
        vt( () => {
            n.value = 230,
            window.addEventListener("keydown", K)
        }
        ),
        ht( () => {
            window.removeEventListener("keydown", K)
        }
        ),
        t({
            currPageIndex: _
        });
        const X = () => d.value === "full" ? 0 : d.value === "med" ? 1024 : d.value === "small" ? 800 : 0;
        return (Q, m) => (x(),
        V("div", {
            class: "relative flex items-center justify-center w-full h-screen overflow-hidden border-t border-white/30",
            onKeydown: [m[2] || (m[2] = lt(u => M(), ["right"])), m[3] || (m[3] = lt(u => U(), ["left"]))]
        }, [v("div", Ja, [v("div", {
            class: "cursor-pointer pointer-events-auto",
            onClick: m[0] || (m[0] = u => [e(s).revControlle ? M() : U()])
        }), v("div", {
            class: "cursor-pointer pointer-events-auto",
            onClick: m[1] || (m[1] = u => [e(s).revControlle ? U() : M()])
        })]), v("div", eo, [h(Ct, {
            class: "max-h-screen",
            width: X(),
            src: e(f),
            alt: "Page " + (e(_) + 1)
        }, null, 8, ["width", "src", "alt"])]), v("div", to, [(x(!0),
        V(he, null, Re(p.pages, (u, C) => (x(),
        V("img", {
            key: C,
            src: u,
            class: "w-0 h-0"
        }, null, 8, no))), 128))]), v("div", ao, [v("div", {
            class: "bg-main-accent h-full transition-all duration-300 ease-in-out",
            style: Ie({
                width: `${(e(_) + 1) / p.pages.length * 100}%`
            })
        }, null, 4)]), v("div", oo, le(e(_) + 1) + "/" + le(p.pages.length), 1)], 32))
    }
})
  , lo = z({
    __name: "Breadcrumb",
    props: {
        class: {}
    },
    setup(i) {
        const t = i;
        return (n, l) => (x(),
        V("nav", {
            "aria-label": "breadcrumb",
            class: ne(t.class)
        }, [Y(n.$slots, "default")], 2))
    }
})
  , Me = z({
    __name: "BreadcrumbItem",
    props: {
        class: {}
    },
    setup(i) {
        const t = i;
        return (n, l) => (x(),
        V("li", {
            class: ne(e(se)("inline-flex items-center gap-1.5", t.class))
        }, [Y(n.$slots, "default")], 2))
    }
})
  , Ue = z({
    __name: "BreadcrumbLink",
    props: {
        asChild: {
            type: Boolean
        },
        as: {
            default: "a"
        },
        class: {}
    },
    setup(i) {
        const t = i;
        return (n, l) => (x(),
        Z(e(ue), {
            as: n.as,
            "as-child": n.asChild,
            class: ne(e(se)("transition-colors hover:text-stone-950 dark:hover:text-stone-50", t.class))
        }, {
            default: b( () => [Y(n.$slots, "default")]),
            _: 3
        }, 8, ["as", "as-child", "class"]))
    }
})
  , ro = z({
    __name: "BreadcrumbList",
    props: {
        class: {}
    },
    setup(i) {
        const t = i;
        return (n, l) => (x(),
        V("ol", {
            class: ne(e(se)("flex flex-wrap items-center gap-1.5 break-words text-sm text-stone-500 sm:gap-2.5 dark:text-stone-400", t.class))
        }, [Y(n.$slots, "default")], 2))
    }
})
  , io = z({
    __name: "BreadcrumbPage",
    props: {
        class: {}
    },
    setup(i) {
        const t = i;
        return (n, l) => (x(),
        V("span", {
            role: "link",
            "aria-disabled": "true",
            "aria-current": "page",
            class: ne(e(se)("font-normal text-stone-950 dark:text-stone-50", t.class))
        }, [Y(n.$slots, "default")], 2))
    }
})
  , je = z({
    __name: "BreadcrumbSeparator",
    props: {
        class: {}
    },
    setup(i) {
        const t = i;
        return (n, l) => (x(),
        V("li", {
            role: "presentation",
            "aria-hidden": "true",
            class: ne(e(se)("[&>svg]:size-3.5", t.class))
        }, [Y(n.$slots, "default", {}, () => [h(e(gt))])], 2))
    }
})
  , co = z({
    __name: "HistoryInitializeComponent",
    props: {
        data: {}
    },
    setup(i) {
        const t = i
          , n = kn()
          , l = {
            authors: [],
            coverUrl: "",
            id: t.data.info.manga.id.toString(),
            title: "",
            genres: [],
            differentNames: [],
            lastRead: new Date().toLocaleDateString()
        };
        return re( () => {
            l.title = t.data.info.manga.title,
            l.coverUrl = t.data.info.manga.coverUrl,
            l.authors = t.data.info.manga.authors.map(s => s.name),
            l.genres = t.data.info.manga.genres.map(s => s.name),
            l.differentNames = t.data.info.manga.differentNames.map(s => s),
            n.addHistory(l)
        }
        ),
        Ee( () => {
            l.authors = [],
            l.genres = [],
            l.differentNames = []
        }
        ),
        (s, c) => (x(),
        V("div", null, c[0] || (c[0] = [v("span", {
            class: "hidden"
        }, "Init", -1)])))
    }
})
  , uo = {
    class: "bg-main-background min-h-screen"
}
  , po = {
    key: 0,
    class: "justify-center items-center flex w-full h-full py-32"
}
  , fo = {
    key: 1,
    class: "w-full h-full flex flex-col min-h-screen bg-main-background"
}
  , mo = {
    class: "my-6 text-main-text flex flex-col items-center w-full"
}
  , go = {
    class: "mr-auto md:ml-8 ml-2 my-4"
}
  , ho = {
    class: "flex items-center justify-center w-full gap-2"
}
  , vo = {
    class: "text-lg my-2 w-full bg-main-popup text-center py-1"
}
  , yo = {
    class: "text-lg my-2 w-full bg-main-popup text-center py-1 text-wrap text-ellipsis line-clamp-1"
}
  , bo = {
    key: 1
}
  , wo = {
    key: 2
}
  , _o = {
    key: 2,
    class: "justify-center items-center flex w-full h-full py-32"
}
  , xo = z({
    __name: "[chapter]",
    async setup(i) {
        let t, n;
        const {y: l} = Oe()
          , s = xe()
          , c = L(!1)
          , g = dn()
          , a = g.params.chapter.split("-").pop()
          , d = g.params.id;
        L(!1);
        const p = yt();
        ce(l, (O, D) => {
            O > D ? c.value = !1 : c.value = !0
        }
        );
        const _ = L(0)
          , {data: f, pending: M, error: K} = ([t,n] = mt( () => Je(`chapter-${a}`, () => gn(a), {
            server: !0,
            lazy: !1,
            immediate: !0,
            default: () => null
        })),
        t = await t,
        n(),
        t);
        if (K.value)
            throw pn({
                statusCode: 404,
                statusMessage: "Chapter not found"
            });
        re( () => {
            !M.value && f.value && (_.value = f.value.pages.length,
            p.setChapterInfo(f.value))
        }
        );
        const U = L(null)
          , X = J( () => U.value ? U.value.currPageIndex + 1 : 1)
          , Q = J( () => {
            var O, D;
            return ((D = (O = f.value) == null ? void 0 : O.info) == null ? void 0 : D.title) || "Loading..."
        }
        )
          , m = J( () => {
            var O, D, F;
            return ((F = (D = (O = f.value) == null ? void 0 : O.info) == null ? void 0 : D.manga) == null ? void 0 : F.title) || "Loading..."
        }
        )
          , u = J( () => {
            var O, D, F, ee;
            return ((ee = (F = (D = (O = f.value) == null ? void 0 : O.info) == null ? void 0 : D.manga) == null ? void 0 : F.authors) == null ? void 0 : ee.map(de => de.name).join(", ")) || "Unknown"
        }
        )
          , C = J( () => {
            var O, D, F;
            return ((F = (D = (O = f.value) == null ? void 0 : O.info) == null ? void 0 : D.manga) == null ? void 0 : F.description) || ""
        }
        )
          , W = J( () => {
            var O, D, F;
            return ((F = (D = (O = f.value) == null ? void 0 : O.info) == null ? void 0 : D.manga) == null ? void 0 : F.coverUrl) || ""
        }
        )
          , R = J( () => {
            var O, D, F, ee;
            return ((ee = (F = (D = (O = f.value) == null ? void 0 : O.info) == null ? void 0 : D.manga) == null ? void 0 : F.uploader) == null ? void 0 : ee.displayName) || ""
        }
        )
          , j = J( () => {
            var O, D, F;
            return ((F = (D = (O = f.value) == null ? void 0 : O.info) == null ? void 0 : D.manga) == null ? void 0 : F.id) || d
        }
        );
        return fn( () => ({
            title: `Đọc truyện ${m.value} bởi tác giả ${u.value} tới chap ${Q.value}`,
            meta: [{
                name: "description",
                content: C.value
            }, {
                property: "og:title",
                content: m.value
            }, {
                property: "og:image",
                content: W.value
            }, {
                name: "creator",
                content: R.value
            }]
        })),
        (O, D) => {
            const F = mn;
            return x(),
            V("div", uo, [v("div", null, [e(M) ? (x(),
            V("div", po, D[0] || (D[0] = [v("img", {
                src: hn,
                class: "h-64 py-6",
                alt: "loading"
            }, null, -1), v("h1", {
                class: "text-main-text"
            }, "Loading chapter...", -1)]))) : e(f) ? (x(),
            V("div", fo, [h(F, null, {
                default: b( () => [h(co, {
                    data: e(f)
                }, null, 8, ["data"])]),
                _: 1
            }), e(s).singlePage ? oe("", !0) : (x(),
            V("div", {
                key: 0,
                class: ne(["w-full flex justify-center fixed bottom-0 transition-all z-50 py-2", e(c) || e(l) == 0 ? "translate-y-0" : "translate-y-full"])
            }, [h(Na, {
                "manga-id": e(d),
                "chapter-info": e(f)
            }, null, 8, ["manga-id", "chapter-info"])], 2)), v("div", mo, [v("div", go, [h(e(lo), null, {
                default: b( () => [h(e(ro), null, {
                    default: b( () => [h(e(Me), null, {
                        default: b( () => [h(e(Ue), {
                            href: "/",
                            class: "hover:text-main-accent/50"
                        }, {
                            default: b( () => D[1] || (D[1] = [fe(" Trang chủ ")])),
                            _: 1,
                            __: [1]
                        })]),
                        _: 1
                    }), h(e(je)), h(e(Me), null, {
                        default: b( () => [h(e(Ue), {
                            href: "/lib",
                            class: "hover:text-main-accent/50"
                        }, {
                            default: b( () => D[2] || (D[2] = [fe(" Danh sách truyện ")])),
                            _: 1,
                            __: [2]
                        })]),
                        _: 1
                    }), h(e(je)), h(e(Me), null, {
                        default: b( () => [h(e(Ue), {
                            href: `/g/${e(j)}`,
                            class: "hover:text-main-accent/50"
                        }, {
                            default: b( () => [fe(le(e(m)), 1)]),
                            _: 1
                        }, 8, ["href"])]),
                        _: 1
                    }), h(e(je)), h(e(Me), null, {
                        default: b( () => [h(e(io), {
                            class: "text-main-text"
                        }, {
                            default: b( () => [fe(le(e(Q)), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            })]), v("div", ho, [h(kt, null, {
                default: b( () => D[3] || (D[3] = [v("h3", {
                    class: "text-lg my-2 w-full bg-main-popup text-center py-1 hover:bg-main-primary transition-all"
                }, " Menu ", -1)])),
                _: 1,
                __: [3]
            }), v("h3", vo, " Trang " + le(e(X)) + "/" + le(e(_)), 1), v("h3", yo, le(e(Q)), 1)])]), e(s).singlePage === !1 ? (x(),
            V("div", bo, [h(Za, {
                pages: e(f).pages,
                "next-chapter": e(f).next,
                "manga-id": e(d)
            }, null, 8, ["pages", "next-chapter", "manga-id"])])) : (x(),
            V("div", wo, [h(so, {
                pages: e(f).pages,
                "next-chapter": e(f).next,
                "prev-chapter": e(f).prev,
                "manga-id": e(d),
                ref_key: "singlePageReaderRef",
                ref: U
            }, null, 8, ["pages", "next-chapter", "prev-chapter", "manga-id"])]))])) : (x(),
            V("div", _o, D[4] || (D[4] = [v("div", {
                class: "text-center"
            }, [v("h1", {
                class: "text-main-text text-2xl mb-4"
            }, "Chapter not found"), v("p", {
                class: "text-main-text/70"
            }, "The requested chapter could not be loaded.")], -1)])))])])
        }
    }
})
  , Do = Le(xo, [["__scopeId", "data-v-25bf67a7"]]);
export {Do as default};
