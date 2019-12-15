/*!
 * VERSION: 1.6.1
 * DATE: 2019-09-05
 * https://leon-sans.com
 *
 * @license Copyright (c) 2019, Jongmin Kim. All rights reserved.
 **/
/* eslint-disable */
export const LeonSans = (function(t) {
  var r = {};
  function e(i) {
    if (r[i]) return r[i].exports;
    var n = (r[i] = { i: i, l: !1, exports: {} });
    return t[i].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
  }
  return (
    (e.m = t),
    (e.c = r),
    (e.d = function(t, r, i) {
      e.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: i });
    }),
    (e.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (e.t = function(t, r) {
      if ((1 & r && (t = e(t)), 8 & r)) return t;
      if (4 & r && 'object' == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (e.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
        2 & r && 'string' != typeof t)
      )
        for (var n in t)
          e.d(
            i,
            n,
            function(r) {
              return t[r];
            }.bind(null, n),
          );
      return i;
    }),
    (e.n = function(t) {
      var r =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(r, 'a', r), r;
    }),
    (e.o = function(t, r) {
      return Object.prototype.hasOwnProperty.call(t, r);
    }),
    (e.p = ''),
    e((e.s = 0))
  );
})([
  function(t, r, e) {
    var i = e(1).default;
    t.exports = i;
  },
  function(t, r, e) {
    'use strict';
    function i(t) {
      return (i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function n(t, r) {
      for (var e = 0; e < r.length; e++) {
        var i = r[e];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    e.r(r);
    var a = (function() {
        function t() {
          !(function(t, r) {
            if (!(t instanceof r))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.handlers_ = { update: { listeners: [] } });
        }
        var r, e, a;
        return (
          (r = t),
          (e = [
            {
              key: 'on',
              value: function(t, r) {
                return 'function' != typeof r
                  ? (console.error(
                      'The listener callback must be a function, the given type is '.concat(
                        i(r),
                      ),
                    ),
                    !1)
                  : 'string' != typeof t
                  ? (console.error(
                      'The event name must be a string, the given type is '.concat(
                        i(t),
                      ),
                    ),
                    !1)
                  : (void 0 === this.handlers_[t] &&
                      (this.handlers_[t] = { listeners: [] }),
                    void this.handlers_[t].listeners.push(r));
              },
            },
            {
              key: 'off',
              value: function(t, r) {
                if (void 0 === this.handlers_[t])
                  return (
                    console.error('This event: '.concat(t, ' does not exist')),
                    !1
                  );
                this.handlers_[t].listeners = this.handlers_[
                  t
                ].listeners.filter(function(t) {
                  return t.toString() !== r.toString();
                });
              },
            },
            {
              key: 'dispatch',
              value: function(t, r) {
                this.handlers_[t].listeners.forEach(function(t) {
                  t(r);
                });
              },
            },
          ]) && n(r.prototype, e),
          a && n(r, a),
          t
        );
      })(),
      s = 500,
      o = 1,
      l = 900,
      f = 70,
      y = 80,
      h = 1,
      c = 0.78,
      u = 0.49,
      d = 120,
      p = 2 * Math.PI;
    function v(t, r) {
      return {
        x: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        y: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        w: t.rect.w * u * r,
        h: (t.rect.h + 220) * u * r,
      };
    }
    function x(t, r, e) {
      return { x: t / 2, y: (r - 130 * u * e) / 2 };
    }
    function g(t, r, e) {
      var i = t.ratio.x1,
        n = t.ratio.x2,
        a = t.ratio.y1,
        s = t.ratio.y2;
      return { r: r, cr: e, fr1: h, fr2: c, gx1: i, gx2: n, gy1: a, gy2: s };
    }
    function b(t, r, e, i, n) {
      var a = ((i - n) / (r - e)) * (t - e) + n;
      return a < n ? (a = n) : a > i && (a = i), a;
    }
    function m(t) {
      var r,
        e,
        i,
        n,
        a,
        s,
        o,
        l,
        f,
        y,
        h,
        c = t.typo.p.length,
        u = [];
      for (r = 0; r < c; r++)
        for (n = (a = t.typo.p[r]).cv.length, e = 0; e < n; e++) {
          if (
            ((o = (s = a.cv[e]).addRect(t.rect)),
            (l = a.d),
            (y = (f = t.pointsLength.lengths[r]) / t.pointsLength.max),
            (h = 0),
            r > 0)
          )
            for (i = 0; i < r; i++)
              h += t.pointsLength.lengths[i] / t.pointsLength.max;
          (y += h),
            u.push({
              pos: o,
              drawing: t.drawing,
              direction: l,
              lengths: f,
              maxDrawing: y,
              minDrawing: h,
              closePath: s.ratio.c,
              stroke: function(t, r) {
                var e = b(r.drawing.value, r.maxDrawing, r.minDrawing, 1, 0);
                if (e > 0 && 'a' != r.pos.type) {
                  var i = r.lengths * e;
                  t.setLineDash([r.lengths]),
                    (t.lineDashOffset = r.direction * (i + r.lengths)),
                    t.stroke();
                }
              },
            });
        }
      return u;
    }
    function S(t, r) {
      var e,
        i,
        n = t.length,
        a = [];
      for (e = 0; e < n; e++) (i = t[e].addRect(r.rect)), a.push(i);
      return a;
    }
    function _(t, r) {
      var e,
        i,
        n,
        a = r.lines.length;
      for (e = 0; e < a; e++)
        'a' == (n = (i = r.lines[e]).pos).type
          ? (t.beginPath(),
            t.arc(n.x, n.y, n.radius * i.drawing.value, 0, p),
            t.fill(),
            t.closePath())
          : 'm' == n.type
          ? (t.beginPath(), t.moveTo(n.x, n.y))
          : 'l' == n.type
          ? t.lineTo(n.x, n.y)
          : 'b' == n.type && t.bezierCurveTo(n.x, n.y, n.x2, n.y2, n.x3, n.y3),
          i.stroke(t, i);
    }
    function O(t, r) {
      t.save(), (t.lineWidth = 1);
      var e,
        i = r.lines.length;
      for (e = 0; e < i; e++) N(t, r.lines[e]);
      for (
        t.restore(), t.save(), t.lineWidth = 1, i = r.typo.p.length, e = 0;
        e < i;
        e++
      )
        J(t, r.typo.p[e], r);
      t.restore();
    }
    function J(t, r, e) {
      var i,
        n,
        a,
        s = r.v.length;
      for (i = 0; i < s; i++)
        (a = (n = r.cv[i]).addRect(e.rect)),
          'b' == n.type
            ? ((t.fillStyle = '#ff2a00'),
              t.beginPath(),
              t.arc(a.x3 + (a.x3 - a.x2), a.y3 + (a.y3 - a.y2), 1.5, 0, p),
              t.fill(),
              t.beginPath(),
              t.arc(a.x2, a.y2, 1.5, 0, p),
              t.fill(),
              t.beginPath(),
              t.moveTo(a.x2, a.y2),
              t.lineTo(a.x3, a.y3),
              t.lineTo(a.x3 + (a.x3 - a.x2), a.y3 + (a.y3 - a.y2)),
              t.stroke(),
              t.beginPath(),
              (t.fillStyle = THEME.palette.text),
              t.arc(a.x3, a.y3, 2.5, 0, p),
              t.fill(),
              t.stroke())
            : (t.beginPath(),
              (t.fillStyle = THEME.palette.text),
              (t.strokeStyle = '#ff2a00'),
              t.arc(a.x, a.y, 2.5, 0, p),
              t.fill(),
              t.stroke());
    }
    function N(t, r) {
      var e = r.pos;
      'a' != e.type &&
        ('m' == e.type
          ? ((t.strokeStyle = '#ff2a00'), t.beginPath(), t.moveTo(e.x, e.y))
          : 'l' == e.type
          ? t.lineTo(e.x, e.y)
          : 'b' == e.type && t.bezierCurveTo(e.x, e.y, e.x2, e.y2, e.x3, e.y3),
        t.stroke());
    }
    function w(t, r) {
      t.save(), t.beginPath(), (t.lineWidth = 1), (t.strokeStyle = '#aaaaaa');
      var e,
        i,
        n = r.guide.length;
      for (e = 0; e < n; e++)
        (i = r.rect.y + r.grid[e]),
          t.moveTo(r.rect.x, i),
          t.lineTo(r.rect.x + r.rect.w, i);
      t.stroke(),
        (t.lineWidth = 1),
        t.beginPath(),
        (t.strokeStyle = '#aaaaaa'),
        t.rect(r.rect.x, r.rect.y, r.rect.w, r.rect.h),
        t.stroke(),
        t.restore();
    }
    var P,
      k = 110,
      W = Math.cos,
      D = Math.sin;
    function T(t, r, e, i, n, a) {
      var s,
        o,
        l,
        f,
        y,
        h = r.wavePaths.length,
        c = (function(t, r) {
          return d * t * r;
        })(i, e),
        u = [];
      for (t.beginPath(), s = 0; s < h; s++) {
        if (((o = r.wavePaths[s]), a)) {
          var v = Math.random() * c - c / 2,
            x = Math.random() * c - c / 2;
          (o.rx = o.x + v * W(o.rotation)),
            (o.ry = o.y + v * D(o.rotation)),
            (o.sx = o.x + v),
            (o.sy = o.y + x);
        }
        'a' == o.type
          ? u.push(o)
          : 1 == o.start
          ? t.moveTo(o.x, o.y)
          : o.fix
          ? t.lineTo(o.x, o.y)
          : n < k
          ? (l = r.wavePaths[s - 1]) &&
            ((f = l.x + 0.5 * (o.x - l.x)),
            (y = l.y + 0.5 * (o.y - l.y)),
            t.quadraticCurveTo(f, y, o.rx, o.ry))
          : t.lineTo(o.rx, o.ry);
      }
      for (t.stroke(), s = 0; s < u.length; s++)
        (o = u[s]), t.beginPath(), t.arc(o.x, o.y, o.radius, 0, p), t.fill();
    }
    function I(t, r, e, i) {
      var n,
        a,
        s = Math.round(r.paths.length * r.drawing.value),
        o = e / 2,
        l = e / 3,
        f = i / 2;
      for (n = 0; n < s; n++)
        1 == (a = r.paths[n]).num
          ? (t.fillStyle = '#ff00c5')
          : (t.fillStyle = '#ff95f8'),
          'a' == a.type
            ? (t.beginPath(), t.arc(a.x, a.y, l, 0, p), t.fill())
            : (t.beginPath(),
              t.save(),
              t.translate(a.x, a.y),
              t.rotate(a.rotation),
              t.fillRect(-o, -f, e, i),
              t.restore());
    }
    function R(t, r, e, i) {
      var n = i.length,
        a = (r + n * (Math.abs((r / 10) | 0) + 1)) % n;
      if (Array.isArray(i[a])) {
        var s,
          o = 1 / ((n = i[a].length) + 1),
          l = t.createLinearGradient(
            e.rect.x,
            e.rect.y,
            e.rect.x,
            e.rect.y + e.rect.h,
          );
        for (l.addColorStop(o, i[a][0]), s = 0; s < n; s++)
          l.addColorStop(o * (s + 1), i[a][s]);
        l.addColorStop(o * (n + 1), i[a][n - 1]),
          (t.strokeStyle = l),
          (t.fillStyle = l);
      } else (t.strokeStyle = i[a]), (t.fillStyle = i[a]);
    }
    function F(t, r) {
      var e,
        i,
        n = t.typo.p.length,
        a = [],
        s = [],
        o = 0;
      for (i = 0; i < n; i++)
        (o += (e = M(t, t.typo.p[i].v, r)).l), a.push(e.v), s.push(e.l);
      return { max: o, lines: a, lengths: s };
    }
    function M(t, r, e) {
      var i,
        n,
        a,
        s,
        o,
        l,
        f = r.length,
        y = [],
        h = 0;
      for (i = 0; i < f; i++)
        (a = {}),
          (o = (n = r[i]).convert(t, e)),
          0 == i || 'a' == n.type
            ? ((a.x1 = o.x),
              (a.y1 = o.y),
              (a.distance = 0),
              (a.radius = o.radius))
            : ((s = l.convert(t, e)),
              'b' == l.type
                ? ((a.x1 = s.x3), (a.y1 = s.y3))
                : ((a.x1 = s.x), (a.y1 = s.y)),
              (a.x2 = o.x),
              (a.y2 = o.y),
              'b' == n.type
                ? ((a.x3 = o.x2),
                  (a.y3 = o.y2),
                  (a.x4 = o.x3),
                  (a.y4 = o.y3),
                  (a.distance = j(
                    a.x1,
                    a.y1,
                    a.x2,
                    a.y2,
                    a.x3,
                    a.y3,
                    a.x4,
                    a.y4,
                  )))
                : (a.distance = C(a.x1, a.y1, a.x2, a.y2))),
          (a.type = n.type),
          (a.rotation = n.ratio.r),
          (a.pat = n.ratio.p),
          (a.fix = n.ratio.f),
          (a.vt = n.ratio.v),
          y.push(a),
          (h += a.distance),
          (l = n);
      return { v: y, l: h };
    }
    function j(t, r, e, i, n, a, s, o, l) {
      var f,
        y,
        h,
        c,
        u = l || 40,
        d = 0,
        p = t,
        v = r;
      for (h = 1; h < u; h++)
        (f = (c = G(h / u, t, r, e, i, n, a, s, o)).x - p),
          (y = c.y - v),
          (d += Math.sqrt(f * f + y * y)),
          (p = c.x),
          (v = c.y);
      return (f = s - p), (y = o - v), (d += Math.sqrt(f * f + y * y));
    }
    function G(t, r, e, i, n, a, s, o, l) {
      return (
        (r += (i - r) * t),
        (e += (n - e) * t),
        {
          x:
            (r += ((i += (a - i) * t) - r) * t) +
            ((i += ((a += (o - a) * t) - i) * t) - r) * t,
          y:
            (e += ((n += (s - n) * t) - e) * t) +
            ((n += ((s += (l - s) * t) - n) * t) - e) * t,
        }
      );
    }
    function C(t, r, e, i) {
      var n = e - t,
        a = i - r;
      return Math.sqrt(n * n + a * a);
    }
    var L,
      z = -1,
      A = 10;
    function E(t) {
      var r = (function() {
        ++z == L && (z = 0);
        return P[z];
      })();
      (t.fillStyle = r), (t.strokeStyle = r);
    }
    function q(t, r, e, i, n, a) {
      var s = e / i,
        o = b(n.drawing.value, a + s, a, 1, 0);
      if (
        (1 == r.direction && (o = b(1 - n.drawing.value, a, a + s, 1, 0)),
        o > 0)
      ) {
        var l = e * o;
        t.setLineDash([e]),
          (t.lineDashOffset = r.direction * (l + e)),
          t.stroke();
      }
      return s;
    }
    function X(t, r, e, i) {
      var n, a;
      if (1 == r.drawing.value)
        for (n = r.lines.length, a = 0; a < n; a++) B(t, r.lines[a], e, i);
      else
        for (n = r.drawingPaths.length * r.drawing.value, a = 0; a < n; a++)
          H(t, r.drawingPaths[a], e, i, r.drawing.value);
    }
    function B(t, r, e, i) {
      var n = r.pos;
      'a' == n.type
        ? (t.lineStyle(0, i, 0),
          t.beginFill(i),
          t.drawCircle(n.x, n.y, n.radius),
          t.endFill())
        : 'm' == n.type
        ? (t.lineStyle(e, i, 1), t.moveTo(n.x, n.y))
        : 'l' == n.type
        ? t.lineTo(n.x, n.y)
        : 'b' == n.type && t.bezierCurveTo(n.x, n.y, n.x2, n.y2, n.x3, n.y3),
        r.closePath && t.closePath();
    }
    function H(t, r, e, i, n) {
      'a' == r.type
        ? (t.lineStyle(0, i, 0),
          t.beginFill(i),
          t.drawCircle(r.x, r.y, r.radius * n),
          t.endFill())
        : 1 == r.start
        ? (t.lineStyle(e, i, 1), t.moveTo(r.x, r.y))
        : t.lineTo(r.x, r.y, 1);
    }
    function K(t, r, e) {
      var i = e.length,
        n = (t + i * (Math.abs((t / 10) | 0) + 1)) % i;
      if (!Array.isArray(e[n])) return e[n];
    }
    function Q(t, r) {
      var e,
        i,
        n,
        a = [];
      for (e = 0; e < 6; e++)
        (i = 10 * e + 20),
          (n = 10 * e + 90),
          (a[e] = {
            x1: i * u * r,
            x2: (t.rect.w - 2 * i) * u * r,
            y1: n * u * r,
            y2: (t.rect.h - n) * u * r - 10 * e * u * r,
          });
      return a;
    }
    function U(t, r) {
      var e,
        i = [],
        n = [98, 340, 815];
      for (e = 0; e < 3; e++) i[e] = n[e] * u * r;
      return i;
    }
    function V(t) {
      Object.assign(this, t);
    }
    function Y(t) {
      (this.type = t[0]),
        (this.x = t[1] || 0),
        (this.y = t[2] || 0),
        'b' == this.type
          ? ((this.x2 = t[3] || 0),
            (this.y2 = t[4] || 0),
            (this.x3 = t[5] || 0),
            (this.y3 = t[6] || 0),
            null == t[7]
              ? (this.ratio = { x: 1, y: 1, r: 0, p: 0, f: 0, c: 0, v: 0 })
              : ((this.ratio = {}),
                (this.ratio.x = null == t[7].x ? 1 : t[7].x),
                (this.ratio.y = null == t[7].y ? 1 : t[7].y),
                (this.ratio.r = t[7].r || 0),
                (this.ratio.p = t[7].p || 0),
                (this.ratio.f = t[7].f || 0),
                (this.ratio.c = t[7].c || 0),
                (this.ratio.v = t[7].v || 0)))
          : null == t[3]
          ? (this.ratio = { x: 1, y: 1, r: 0, p: 0, f: 0, c: 0, v: 0 })
          : ((this.ratio = {}),
            (this.ratio.x = null == t[3].x ? 1 : t[3].x),
            (this.ratio.y = null == t[3].y ? 1 : t[3].y),
            (this.ratio.r = t[3].r || 0),
            (this.ratio.p = t[3].p || 0),
            (this.ratio.f = t[3].f || 0),
            (this.ratio.c = t[3].c || 0),
            (this.ratio.v = t[3].v || 0));
    }
    function Z(t, r, e, i) {
      var n = r.range.r * e.x,
        a = (r.range.gx2 - r.range.gx1) * n + r.range.gx1,
        s = (r.range.fr2 - r.range.fr1) * n + r.range.fr1;
      return r.center.x + (t - a) * i.scale * s;
    }
    function $(t, r, e, i) {
      var n = r.range.r * e.y,
        a = (r.range.gy2 - r.range.gy1) * n + r.range.gy1,
        s = (r.range.fr2 - r.range.fr1) * n + r.range.fr1;
      return r.center.y + (t - a) * i.scale * s;
    }
    Object.assign(V.prototype, {
      addRect: function(t) {
        var r = new V(this);
        return (
          (r.x = this.x + t.x),
          (r.y = this.y + t.y),
          (r.x2 = this.x2 + t.x),
          (r.y2 = this.y2 + t.y),
          (r.x3 = this.x3 + t.x),
          (r.y3 = this.y3 + t.y),
          (r.rx = this.rx + t.x),
          (r.ry = this.ry + t.y),
          (r.sx = this.sx + t.x),
          (r.sy = this.sy + t.y),
          r.radius < 0.5 && (r.radius = 0.5),
          r
        );
      },
    }),
      Object.assign(Y.prototype, {
        convert: function(t, r) {
          var e = Z(this.x, t, this.ratio, r),
            i = $(this.y, t, this.ratio, r),
            n = Z(this.x2, t, this.ratio, r),
            a = $(this.y2, t, this.ratio, r),
            s = Z(this.x3, t, this.ratio, r),
            o = $(this.y3, t, this.ratio, r),
            l = (function(t, r, e) {
              var i = 0;
              'a' == t && (i = r.range.cr * e.scale * e.fontRatio);
              return i;
            })(this.type, t, r),
            f = new V(this);
          return (
            (f.x = e),
            (f.y = i),
            (f.x2 = n),
            (f.y2 = a),
            (f.x3 = s),
            (f.y3 = o),
            (f.radius = l),
            f
          );
        },
      });
    var tt = null;
    function rt(t, r, e, i) {
      var n,
        a,
        s,
        o,
        l,
        f = r.pointsLength.lines,
        y = t.scale,
        h = f.length,
        c = [],
        u = [],
        d = [];
      for (n = 0; n < h; n++) (o = f[n]), (tt = null), c.push(et(o, e, y));
      for (h = c.length, n = 0; n < h; n++) {
        for (a = (l = c[n]).length, d = [], s = 0; s < a; s++)
          (o = l[s]).rotation != ft && ((i && o.pat) || d.push(o));
        1 == r.typo.p[n].d && d.reverse(),
          d.length > 0 && ((d[0].start = 1), Array.prototype.push.apply(u, d));
      }
      return u;
    }
    function et(t, r, e) {
      var i,
        n,
        a,
        s,
        o,
        l,
        f,
        y = t.length,
        h = [],
        c = 1,
        u = 1;
      for (r > -1 && (u = b(r, 1, 0, 80, 10) * e), i = 0; i < y; i++)
        if ('a' == (s = t[i]).type)
          h.push(
            new V({
              x: s.x1,
              y: s.y1,
              rotation: 0,
              type: 'a',
              pat: s.pat,
              fix: s.fix,
              radius: s.radius,
            }),
          );
        else if (0 == s.distance)
          null !=
            (f = it(
              (o = new V({
                x: s.x1,
                y: s.y1,
                rotation: s.rotation,
                type: s.type,
                pat: s.pat,
                fix: s.fix,
              })),
              tt,
              s,
              1,
            )) && (c && ((f.type = 'm'), (c = 0)), h.push(f)),
            (tt = new V(o));
        else
          for (
            (a = Math.ceil(s.distance / u)) < 3 && (a = 3),
              s.vt && (a = 2),
              n = 1;
            n < a;
            n++
          )
            (l = n / (a - 1)),
              (o =
                'b' == s.type
                  ? nt(s, l)
                  : new V({
                      x: s.x1 + (s.x2 - s.x1) * l,
                      y: s.y1 + (s.y2 - s.y1) * l,
                      type: s.type,
                    })),
              0 != s.rotation && 1 == l && (o.rotation = s.rotation),
              s.pat && 1 == l && (o.pat = s.pat),
              s.fix && 1 == l && (o.fix = s.fix),
              a > 0 &&
                null != (f = it(o, tt, s, l)) &&
                (c && ((f.type = 'm'), (c = 0)), h.push(f)),
              (tt = new V(o));
      return h;
    }
    function it(t, r, e, i) {
      if (
        ((t.type = e.type),
        (t.distance = e.distance),
        (t.num = i),
        r && null == t.rotation)
      ) {
        var n = t.x - r.x,
          a = t.y - r.y,
          s = Math.atan2(n, a);
        t.rotation = -s;
      } else t.rotation = t.rotation;
      return t.rotation == ft ? null : t;
    }
    function nt(t, r) {
      var e = at(t.x1, t.x2, t.x3, t.x4, r),
        i = at(t.y1, t.y2, t.y3, t.y4, r),
        n = st(t.x1, t.x2, t.x3, t.x4, r),
        a = st(t.y1, t.y2, t.y3, t.y4, r);
      return new V({ x: e, y: i, rotation: -Math.atan2(n, a) });
    }
    function at(t, r, e, i, n) {
      var a = n * n;
      return (
        t +
        (3 * -t + n * (3 * t - t * n)) * n +
        (3 * r + n * (-6 * r + 3 * r * n)) * n +
        (3 * e - 3 * e * n) * a +
        i * (a * n)
      );
    }
    function st(t, r, e, i, n) {
      return (
        3 * n * n * (3 * r - t - 3 * e + i) +
        6 * n * (t - 2 * r + e) +
        3 * (-t + r)
      );
    }
    var ot = (Math.PI / 180) * 180,
      lt = (Math.PI / 180) * 90,
      ft = -100,
      yt = 1.5,
      ht = 'tofu',
      ct = 824;
    function ut(t, r, e, i, n, a, s, o) {
      var l,
        f = [],
        y = o.length;
      for (l = 0; l < y; l++) f.push({ d: o[l].d, v: dt(o[l].v, r, e) });
      return {
        rect: { w: t, h: ct, fw: r, fh: e },
        ratio: { x1: i, x2: n, y1: a, y2: s },
        p: f,
      };
    }
    function dt(t, r, e) {
      var i,
        n,
        a = t.length,
        s = r / 2,
        o = e / 2,
        l = [];
      for (n = 0; n < a; n++)
        ((i = t[n])[1] -= s),
          (i[2] -= o),
          'b' == i[0] && ((i[3] -= s), (i[4] -= o), (i[5] -= s), (i[6] -= o)),
          l.push(new Y(i));
      return l;
    }
    function pt(t, r, e, i) {
      var n = t - e,
        a = r - i;
      return -Math.atan2(n, a);
    }
    function vt(t, r, e, i, n, a, s, o, l) {
      var f = st(t, e, n, s, l),
        y = st(r, i, a, o, l);
      return -Math.atan2(f, y);
    }
    var xt = [
        {
          d: -1,
          v: [
            ['m', 0, 352, { x: 0.55, y: 0.3, r: pt(0, 352, 145 - yt, 0) }],
            ['l', 145 - yt, 0, { r: pt(0, 352, 145 - yt, 0), f: 1 }],
            ['l', 145 + yt, 0, { r: pt(290, 352, 145 + yt, 0), f: 1, v: 1 }],
            ['l', 290, 352, { x: 0.55, y: 0.3, f: 1 }],
          ],
        },
        {
          d: -1,
          v: [
            ['m', 47, 237, { r: lt, p: 1 }],
            ['l', 243, 237, { r: lt, p: 1, f: 1 }],
          ],
        },
      ],
      gt = [
        {
          d: 1,
          v: [
            [
              'm',
              293.1,
              320.1,
              {
                r: vt(293.1, 320.1, 262.2, 345, 222.8, 360, 180, 360, 0),
                f: 1,
              },
            ],
            ['b', 262.2, 345, 222.8, 360, 180, 360],
            ['b', 80.6, 360, 0, 279.4, 0, 180],
            ['b', 0, 80.6, 80.6, 0, 180, 0],
            ['b', 222.8, 0, 262.2, 15, 293.1, 39.9],
          ],
        },
      ],
      bt = [
        {
          d: -1,
          v: [
            ['m', 192, 0, { x: 0, r: lt }],
            ['l', 0, 0, { r: ot, f: 1, x: 0.5 }],
            ['l', 0, 352, { f: 1, x: 0.5 }],
            ['l', 192, 352, { x: 0, r: lt, f: 1 }],
          ],
        },
        {
          d: -1,
          v: [
            ['m', 0, 164, { r: lt, p: 1, x: 0.5 }],
            ['l', 180, 164, { x: 0, r: lt, f: 1 }],
          ],
        },
      ],
      mt = [
        {
          d: 1,
          v: [
            ['m', 202, 180, { r: lt, f: 1 }],
            ['l', 352, 180, { f: 1 }],
            ['b', 352, 279.4, 279.4, 360, 180, 360, { r: lt }],
            ['b', 80.6, 360, 0, 279.4, 0, 180, { r: ot }],
            ['b', 0, 80.6, 80.6, 0, 180, 0, { r: lt }],
            ['b', 222.8, 0, 262.1, 14.9, 293, 39.9],
          ],
        },
      ],
      St = [
        {
          d: -1,
          v: [
            ['m', 0, 0, { y: 0, r: ot }],
            ['l', 0, 352, { y: 0, r: ot, f: 1 }],
          ],
        },
        {
          d: -1,
          v: [
            ['m', 232, 0, { y: 0, r: ot }],
            ['l', 232, 352, { y: 0, r: ot, f: 1 }],
          ],
        },
        {
          d: -1,
          v: [
            ['m', 0, 164, { r: lt, p: 1 }],
            ['l', 232, 164, { r: lt, f: 1, p: 1 }],
          ],
        },
      ],
      _t = [
        {
          d: 1,
          v: [
            ['m', 0, 352, { y: 0, r: ot, f: 1 }],
            ['l', 0, 0, { y: 0, r: ot }],
          ],
        },
      ],
      Ot = [
        {
          d: 1,
          v: [
            [
              'm',
              0,
              311,
              { r: vt(0, 311, 16.2, 341.6, 49.3, 356, 86, 356, 0), f: 1 },
            ],
            ['b', 16.2, 341.6, 49.3, 356, 86, 356, { r: lt }],
            ['b', 133.5, 356, 172, 317.5, 172, 270],
            ['l', 172.5, 0, { y: 0, r: ot }],
          ],
        },
      ],
      Jt = [
        {
          d: -1,
          v: [
            ['m', 0, 352, { y: 0, r: ot }],
            ['l', 0, 0, { r: ot, f: 1 }],
            ['l', 3, 0, { r: ot, p: 1, f: 1, v: 1 }],
            ['l', 247, 351, { r: ot, p: 1, f: 1 }],
            ['l', 250, 351, { r: ot, f: 1, v: 1 }],
            ['l', 250, 0, { y: 0, r: ot, f: 1 }],
          ],
        },
      ],
      Nt = [
        {
          d: 1,
          v: [
            ['m', 360, 180, { r: ot, p: 1, f: 1 }],
            ['b', 360, 279.4, 279.4, 360, 180, 360, { r: lt }],
            ['b', 80.6, 360, 0, 279.4, 0, 180, { r: ot }],
            ['b', 0, 80.6, 80.6, 0, 180, 0, { r: lt }],
            ['b', 279.4, 0, 360, 80.6, 360, 180, { r: ot, c: 1 }],
          ],
        },
      ],
      wt = [
        {
          d: 1,
          v: [
            [
              'm',
              0,
              295.4,
              { r: vt(0, 295.4, 17.6, 332.1, 58.3, 360, 110.3, 360, 0), f: 1 },
            ],
            ['b', 17.6, 332.1, 58.3, 360, 110.3, 360],
            ['b', 173.9, 360, 223.8, 329.6, 224, 271],
            ['b', 224.2, 214.7, 180.7, 189.6, 112.4, 173.3],
            ['b', 47.3, 157.7, 10.9, 130.6, 12, 84.4],
            ['b', 13.3, 29.8, 57.3, 0, 114.8, 0],
            ['b', 158.4, 0, 196.5, 20.5, 212, 51.3],
          ],
        },
      ],
      Pt = [
        {
          d: 1,
          v: [
            ['m', 250, 0, { y: 0, r: ot }],
            ['l', 250, 231, { r: ot }],
            ['b', 250, 300, 194, 356, 125, 356, { r: lt }],
            ['b', 56, 356, 0, 300, 0, 231, { r: ot }],
            ['l', 0, 0, { y: 0, r: ot }],
          ],
        },
      ],
      kt = [
        {
          d: -1,
          v: [
            ['m', 0, 0, { x: 0.6, y: 0.3, r: pt(0, 0, 135, 186) }],
            ['l', 135, 186, { r: ot, f: 1 }],
            ['l', 270, 0, { x: 0.6, y: 0.3, f: 1 }],
          ],
        },
        {
          d: -1,
          v: [
            ['m', 135, 186, { r: ot, p: 1 }],
            ['l', 135, 352, { y: 0, f: 1 }],
          ],
        },
      ],
      Wt = {
        A: ut(620, 290, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(xt))),
        B: ut(596, 209, 352, -10, -10, 0, 0, [
          {
            d: 1,
            v: [
              ['m', 0, 164, { r: lt, p: 1 }],
              ['l', 116, 164, { r: lt, p: 1, f: 1 }],
              ['b', 167.4, 164, 209, 205.6, 209, 257, { r: ot }],
              ['b', 209, 308.4, 167.4, 352, 116, 352, { r: lt }],
              ['l', 0, 352, { r: ot, f: 1 }],
              ['l', 0, 0, { r: ot, f: 1 }],
              ['l', 116, 0, { r: lt }],
              ['b', 161.3, 0, 198, 36.7, 198, 82, { r: ot }],
              ['b', 198, 127.3, 161.3, 164, 116, 164, { r: lt }],
            ],
          },
        ]),
        C: ut(700, 293.1, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(gt))),
        D: ut(721, 270, 352, -10, -10, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 95, 352, { r: lt, f: 1 }],
              ['b', 191.6, 352, 270, 271.6, 270, 175, { r: ot }],
              ['b', 270, 78.4, 191.6, 0, 95, 0, { r: lt }],
              ['l', 0, 0, { r: ot, f: 1 }],
              ['l', 0, 352, { r: ot, f: 1 }],
              ['l', 95, 352, { r: lt, f: 1 }],
            ],
          },
        ]),
        E: ut(520, 192, 352, -5, -80, 0, 0, JSON.parse(JSON.stringify(bt))),
        F: ut(510, 192, 352, -5, -80, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 192, 0, { x: 0, r: lt }],
              ['l', 0, 0, { r: ot, f: 1, x: 0.5 }],
              ['l', 0, 352, { y: 0, f: 1, x: 0.5 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 0, 164, { r: lt, p: 1, x: 0.5 }],
              ['l', 180, 164, { x: 0, r: lt, f: 1 }],
            ],
          },
        ]),
        G: ut(840, 352, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(mt))),
        H: ut(684, 232, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(St))),
        I: ut(249, 0, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(_t))),
        J: ut(
          472,
          172.5,
          355.5,
          10,
          20,
          -2,
          -2,
          JSON.parse(JSON.stringify(Ot)),
        ),
        K: ut(616, 232, 352, -10, -20, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { y: 0, r: ot }],
              ['l', 0, 352, { y: 0, r: ot, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 212, 0, { x: 0.7, y: 0.7, r: pt(212, 0, 0, 164 - yt) }],
              ['l', 0, 164 - yt, { r: lt, p: 1 }],
              ['l', 0, 164 + yt, { r: lt, p: 1, v: 1 }],
              ['l', 232, 352, { x: 0.7, y: 0.7, f: 1 }],
            ],
          },
        ]),
        L: ut(529, 192, 352, -10, -20, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { y: 0 }],
              ['l', 0, 352, { f: 1 }],
              ['l', 192, 352, { x: 0, f: 1 }],
            ],
          },
        ]),
        M: ut(885, 330, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 352, { y: 0, r: ot }],
              ['l', 0, 0, { r: ot, f: 1 }],
              ['l', 3, 0, { r: ot, p: 1, f: 1, v: 1 }],
              [
                'l',
                165 - yt,
                330,
                { r: pt(165 - yt, 330, 165 - yt, 330), f: 1 },
              ],
              [
                'l',
                165 + yt,
                330,
                { r: pt(165 + yt, 330, 327, 0), f: 1, v: 1 },
              ],
              ['l', 327, 0, { r: ot, p: 1, f: 1 }],
              ['l', 330, 0, { r: ot, f: 1, v: 1 }],
              ['l', 330, 352, { y: 0, r: ot, f: 1 }],
            ],
          },
        ]),
        N: ut(721, 250, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Jt))),
        O: ut(850, 360, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(Nt))),
        P: ut(568, 210, 352, -10, -10, -0.5, -0.5, [
          {
            d: 1,
            v: [
              ['m', 0, 352, { y: 0, f: 1 }],
              ['l', 0, 0, { f: 1 }],
              ['l', 117, 0, { r: lt }],
              ['b', 168.4, 0, 210, 41.6, 210, 93, { r: ot }],
              ['b', 210, 144.4, 168.4, 186, 117, 186, { r: lt }],
              ['l', 0, 186, { r: lt, p: 1 }],
            ],
          },
        ]),
        Q: ut(850, 360, 360, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 360, 180, { r: lt, p: 1, f: 1 }],
              ['b', 360, 80.6, 279.4, 0, 180, 0, { r: lt }],
              ['b', 80.6, 0, 0, 80.6, 0, 180, { r: ot }],
              ['b', 0, 279.4, 80.6, 360, 180, 360, { r: lt }],
              ['b', 279.4, 360, 360, 279.4, 360, 180, { r: ot, c: 1, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 222, 222, { x: 0.5, y: 0.5, r: pt(222, 222, 360, 360) }],
              ['l', 360, 360, { x: 0.5, y: 0.5, f: 1 }],
            ],
          },
        ]),
        R: ut(634, 232, 352, -10, -10, -0.5, -0.5, [
          {
            d: -1,
            v: [
              ['m', 0, 186, { r: lt, p: 1 }],
              ['l', 139, 186, { r: lt }],
              ['b', 190.4, 186, 232, 144.4, 232, 93, { r: ot }],
              ['b', 232, 41.6, 190.4, 0, 139, 0, { r: lt }],
              ['l', 0, 0, { r: ot, f: 1 }],
              ['l', 0, 352, { y: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 139, 186, { p: 1, r: pt(139, 186, 232, 352) }],
              ['l', 232, 352, { x: 0.5, y: 0.39, f: 1 }],
            ],
          },
        ]),
        S: ut(560, 224, 360, 0, 0, 0, 0, JSON.parse(JSON.stringify(wt))),
        T: ut(568, 232, 352, 0, 0, -0.5, -0.5, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { x: 0, r: lt }],
              ['l', 232, 0, { x: 0, r: lt, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 116, 0, { r: ot, p: 1 }],
              ['l', 116, 352, { y: 0, r: ot, f: 1 }],
            ],
          },
        ]),
        U: ut(712, 250, 355, 0, 0, -0.5, -0.5, JSON.parse(JSON.stringify(Pt))),
        V: ut(650, 270, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { x: 0.6, y: 0.1, r: pt(0, 0, 135 - yt, 352) }],
              ['l', 135 - yt, 352, { r: pt(0, 0, 135 - yt, 352), f: 1 }],
              [
                'l',
                135 + yt,
                352,
                { r: pt(135 + yt, 352, 270, 0), f: 1, v: 1 },
              ],
              ['l', 270, 0, { x: 0.6, y: 0.1, f: 1 }],
            ],
          },
        ]),
        W: ut(894, 390, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { x: 0.6, y: 0.05, r: pt(0, 0, 86 - yt, 352) }],
              ['l', 86 - yt, 352, { r: pt(0, 0, 86 - yt, 352), f: 1 }],
              [
                'l',
                86 + yt,
                352,
                { r: pt(86 + yt, 352, 195 - yt, 0), f: 1, v: 1 },
              ],
              ['l', 195 - yt, 0, { r: pt(86 + yt, 352, 195 - yt, 0), f: 1 }],
              [
                'l',
                195 + yt,
                0,
                { r: pt(195 + yt, 0, 304 - yt, 352), f: 1, v: 1 },
              ],
              ['l', 304 - yt, 352, { r: pt(195 + yt, 0, 304 - yt, 352), f: 1 }],
              [
                'l',
                304 + yt,
                352,
                { r: pt(304 + yt, 352, 390, 0), f: 1, v: 1 },
              ],
              ['l', 390, 0, { x: 0.6, y: 0.05, f: 1 }],
            ],
          },
        ]),
        X: ut(660, 270, 352, 0, 0, 0, -7, [
          {
            d: -1,
            v: [
              ['m', 10, 0, { x: 0.5, y: 0.3, r: pt(10, 0, 270, 352) }],
              ['l', 270, 352, { x: 0.5, y: 0.5, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 260, 0, { x: 0.5, y: 0.3, r: pt(260, 0, 0, 352) }],
              ['l', 0, 352, { x: 0.5, y: 0.5, f: 1 }],
            ],
          },
        ]),
        Y: ut(673, 270, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(kt))),
        Z: ut(558, 232, 352, 0, -5, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 8, 0, { x: 0, r: lt }],
              ['l', 224, 0, { r: lt, f: 1 }],
              ['l', 224, 3, { r: ot, p: 1, v: 1 }],
              ['l', 0, 349, { r: ot, p: 1 }],
              ['l', 0, 352, { r: lt, f: 1, v: 1 }],
              ['l', 232, 352, { x: 0, r: lt, f: 1 }],
            ],
          },
        ]),
      },
      Dt = [
        {
          d: -1,
          v: [
            ['m', 232, 8, { y: -3.4, r: ot }],
            ['l', 232, 116, { r: ft }],
            ['b', 232, 180.1, 180.1, 232, 116, 232, { r: lt }],
            ['b', 51.9, 232, 0, 180.1, 0, 116, { r: ot }],
            ['b', 0, 51.9, 51.9, 0, 116, 0, { r: lt }],
            ['b', 180.1, 0, 232, 51.9, 232, 116, { r: ot }],
            ['l', 232, 224, { y: -0.1, r: ot, f: 1 }],
          ],
        },
      ],
      Tt = [
        {
          d: 1,
          v: [
            [
              'm',
              212.1,
              182.9,
              {
                r: vt(
                  212.1,
                  182.9,
                  191.1,
                  213.2,
                  156.1,
                  233.1,
                  116.5,
                  233.1,
                  0,
                ),
                f: 1,
              },
            ],
            ['b', 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, { r: lt }],
            ['b', 52.4, 233.1, 0.5, 181.2, 0.5, 117.1, { r: ot }],
            ['b', 0.5, 53, 52.4, 1.1, 116.5, 1.1, { r: lt }],
            ['b', 156.1, 1.1, 191.1, 21, 212.1, 51.3],
          ],
        },
      ],
      It = [
        {
          d: 1,
          v: [
            [
              'm',
              211.6,
              182.9,
              {
                r: vt(
                  211.6,
                  182.9,
                  191.1,
                  213.2,
                  156.1,
                  233.1,
                  116.5,
                  233.1,
                  0,
                ),
                f: 1,
              },
            ],
            ['b', 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, { r: lt }],
            ['b', 52.4, 233.1, 0.5, 181.2, 0.5, 117.1, { r: ot }],
            ['b', 0.5, 53, 52.4, 1.1, 116.5, 1.1, { r: lt }],
            ['b', 176.4, 1.1, 224.9, 47.2, 225.5, 106.1, { r: ot }],
            ['l', 0.5, 106.1, { r: ot, p: 1 }],
          ],
        },
      ],
      Rt = [
        {
          d: -1,
          v: [
            ['m', 232, 5, { y: -2.8 }],
            ['l', 232, 116, { r: ft }],
            ['b', 232, 180.1, 180.1, 232, 116, 232, { r: lt }],
            ['b', 51.9, 232, 0, 180.1, 0, 116, { r: ot }],
            ['b', 0, 51.9, 51.9, 0, 116, 0, { r: lt }],
            ['b', 180.1, 0, 232, 51.9, 232, 116, { r: ot }],
            ['l', 232, 222],
            ['b', 234.5, 300.3, 180.2, 338.5, 116, 338, { y: 0.64, r: lt }],
            ['b', 76.2, 337.7, 36.6, 320.7, 15.7, 290.1, { y: 0.64, f: 1 }],
          ],
        },
      ],
      Ft = [
        {
          d: -1,
          v: [['m', 0, 0, { y: 0, r: ot }], ['l', 0, 352, { y: 0, f: 1 }]],
        },
        {
          d: -1,
          v: [
            ['m', 0, 214, { r: ft }],
            ['b', 0, 163.7, 40.7, 123, 91, 123, { r: lt }],
            ['b', 141.3, 123, 182, 163.7, 182, 214, { r: ot }],
            ['l', 182, 352, { y: 0, f: 1 }],
          ],
        },
      ],
      Mt = [
        {
          d: -1,
          v: [['m', 0, 130, { y: -3.3 }], ['l', 0, 352, { y: 0, f: 1 }]],
        },
        {
          d: -1,
          v: [
            ['m', 0, 214, { y: 0, r: ot, p: 1 }],
            ['b', 0, 163.7, 40.7, 123, 91, 123, { r: lt }],
            ['b', 141.3, 123, 182, 163.7, 182, 214, { r: ot }],
            ['l', 182, 352, { y: 0, f: 1 }],
          ],
        },
      ],
      jt = [
        {
          d: 1,
          v: [
            ['m', 232, 116, { r: ot, p: 1, f: 1 }],
            ['b', 232, 180.1, 180.1, 232, 116, 232, { r: lt }],
            ['b', 51.9, 232, 0, 180.1, 0, 116, { r: ot }],
            ['b', 0, 51.9, 51.9, 0, 116, 0, { r: lt }],
            ['b', 180.1, 0, 232, 51.9, 232, 116, { r: ot, c: 1 }],
          ],
        },
      ],
      Gt = [
        {
          d: 1,
          v: [
            [
              'm',
              0,
              295.4 * 0.642,
              {
                r: vt(
                  0,
                  295.4 * 0.642,
                  11.2992,
                  332.1 * 0.642,
                  58.3 * 0.642,
                  231.12,
                  70.8126,
                  231.12,
                  0,
                ),
                f: 1,
              },
            ],
            [
              'b',
              11.2992,
              332.1 * 0.642,
              58.3 * 0.642,
              231.12,
              70.8126,
              231.12,
            ],
            [
              'b',
              173.9 * 0.642,
              231.12,
              223.8 * 0.642,
              329.6 * 0.642,
              143.808,
              173.982,
            ],
            [
              'b',
              143.9364,
              137.8374,
              116.0094,
              121.7232,
              112.4 * 0.642,
              173.3 * 0.642,
            ],
            [
              'b',
              30.3666,
              101.2434,
              10.9 * 0.642,
              130.6 * 0.642,
              12 * 0.642,
              54.1848,
            ],
            ['b', 8.5386, 29.8 * 0.642, 36.7866, 0, 73.7016, 0],
            ['b', 101.6928, 0, 126.153, 13.161, 136.104, 51.3 * 0.642],
          ],
        },
      ],
      Ct = [
        {
          d: -1,
          v: [
            ['m', 0, 130, { y: -3 }],
            ['l', 0, 265, { r: ot }],
            ['b', 0, 315.3, 40.7, 356, 91, 356, { r: lt }],
            ['b', 141.3, 356, 182, 315.3, 182, 265, { r: ot, p: 1, f: 1 }],
          ],
        },
        {
          d: -1,
          v: [['m', 182, 130, { y: -3 }], ['l', 182, 352, { y: 0, f: 1 }]],
        },
      ],
      Lt = [
        {
          d: -1,
          v: [
            ['m', 225.5, 0, { y: -3, r: pt(225.5, 0, 116.3, 248.8) }],
            ['l', 116.3, 248.8, { x: 0.5, y: 0.64 }],
            [
              'b',
              71.8,
              349.6,
              0,
              331.5,
              0,
              331.5,
              {
                x: 0.5,
                y: 0.64,
                r: vt(0, 331.5, 71.8, 349.6, 116.3, 248.8, 0, 331.5, 0),
                f: 1,
              },
            ],
          ],
        },
        {
          d: -1,
          v: [
            ['m', 3.2, 0, { y: -3, r: pt(3.2, 0, 125.7, 226.6) }],
            ['l', 125.7, 226.6, { p: 1, f: 1 }],
          ],
        },
      ],
      zt = {
        a: ut(600, 232, 232, 10, 2, -64, -64, JSON.parse(JSON.stringify(Dt))),
        b: ut(600, 232, 352, -10, -2, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { y: 0, r: ot }],
              ['l', 0, 239, { r: ft }],
              ['b', 0, 303.1, 51.9, 355, 116, 355, { r: lt }],
              ['b', 180.1, 355, 232, 303.1, 232, 239, { r: ot }],
              ['b', 232, 174.9, 180.1, 123, 116, 123, { r: lt }],
              ['b', 51.9, 123, 0, 174.9, 0, 239, { r: ot }],
              ['l', 0, 352, { y: 0, r: ot, f: 1 }],
            ],
          },
        ]),
        c: ut(
          520,
          212.1,
          233.1,
          2,
          -10,
          -64,
          -64,
          JSON.parse(JSON.stringify(Tt)),
        ),
        d: ut(600, 232, 352, 10, 2, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 232, 0, { y: 0 }],
              ['l', 232, 239, { r: ft }],
              ['b', 232, 303.1, 180.1, 355, 116, 355, { r: lt }],
              ['b', 51.9, 355, 0, 303.1, 0, 239, { r: ot }],
              ['b', 0, 174.9, 51.9, 123, 116, 123, { r: lt }],
              ['b', 180.1, 123, 232, 174.9, 232, 239, { r: ot }],
              ['l', 232, 352, { y: 0, f: 1 }],
            ],
          },
        ]),
        e: ut(
          570,
          225.5,
          233.1,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(It)),
        ),
        f: ut(356, 232, 352, -40, -40, 0, 0, [
          {
            d: -1,
            v: [
              [
                'm',
                166.6,
                33,
                {
                  x: 0.5,
                  r: vt(166.6, 33, 159.3, 13.1, 139.2, 0, 116.9, 0, 0),
                },
              ],
              ['b', 159.3, 13.1, 139.2, 0, 116.9, 0, { r: lt }],
              ['b', 88.2, 0, 65, 23.2, 65, 51.9, { r: ot }],
              ['l', 65, 352, { y: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 0, 130, { x: 0, r: lt }],
              ['l', 154, 130, { x: 0, f: 1 }],
            ],
          },
        ]),
        g: ut(600, 232, 338, 10, 2, -117, -117, JSON.parse(JSON.stringify(Rt))),
        h: ut(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Ft))),
        i: ut(200, 0, 352, 0, 0, 0, 0, [
          { d: 1, v: [['a', 0, 90, { y: -3 }]] },
          {
            d: 1,
            v: [['m', 0, 352, { y: 0, f: 1 }], ['l', 0, 130, { y: -3 }]],
          },
        ]),
        j: ut(220, 115.9, 352, -60, -60, 0, 0, [
          { d: 1, v: [['a', 0, 90, { y: -3 }]] },
          {
            d: 1,
            v: [
              [
                'm',
                -115.9,
                444,
                {
                  x: 0.4,
                  y: 0.63,
                  r: vt(
                    -115.9,
                    444,
                    12.6 - 115.9,
                    454.4,
                    29.6 - 115.9,
                    460.2,
                    -70,
                    461.2,
                    0,
                  ),
                  f: 1,
                },
              ],
              [
                'b',
                12.6 - 115.9,
                454.4,
                29.6 - 115.9,
                460.2,
                -70,
                461.2,
                { x: 0.4, y: 0.63, r: lt },
              ],
              [
                'b',
                84.5 - 115.9,
                463.5,
                0,
                435.1,
                0,
                396.4,
                { x: 0.4, y: 0.63, r: ot },
              ],
              ['l', 0, 130, { y: -3 }],
            ],
          },
        ]),
        k: ut(450, 164, 352, -10, -10, 0, 0, [
          {
            d: -1,
            v: [['m', 0, 0, { y: 0, r: ot }], ['l', 0, 352, { y: 0, f: 1 }]],
          },
          {
            d: -1,
            v: [
              [
                'm',
                160,
                130,
                { x: 0.7, y: 0, r: pt(164, 130, 0, 236 - yt), f: 1 },
              ],
              ['l', 0, 236 - yt, { r: lt, p: 1 }],
              ['l', 0, 236 + yt, { r: lt, p: 1, v: 1 }],
              ['l', 164, 352, { x: 0.7, y: 0.7, f: 1 }],
            ],
          },
        ]),
        l: ut(200, 0, 352, 0, 0, 0, 0, [
          { d: 1, v: [['m', 0, 352, { y: 0, f: 1 }], ['l', 0, 0, { y: 0 }]] },
        ]),
        m: ut(740, 300, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [['m', 0, 130, { y: -3.6 }], ['l', 0, 352, { y: 0, f: 1 }]],
          },
          {
            d: -1,
            v: [
              ['m', 0, 198, { y: 0, r: ot, p: 1 }],
              ['b', 0, 156.6, 33.6, 123, 75, 123, { r: lt }],
              ['b', 116.4, 123, 150, 156.6, 150, 198, { r: ot }],
              ['l', 150, 352, { y: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 150, 198, { y: 0, r: ot, p: 1 }],
              ['b', 150, 156.6, 183.6, 123, 225, 123, { r: lt }],
              ['b', 266.4, 123, 300, 156.6, 300, 198, { r: ot }],
              ['l', 300, 352, { y: 0, f: 1 }],
            ],
          },
        ]),
        n: ut(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Mt))),
        o: ut(580, 232, 232, 0, 0, -64, -64, JSON.parse(JSON.stringify(jt))),
        p: ut(600, 232, 338, -10, -2, -117, -117, [
          {
            d: -1,
            v: [
              ['m', 0, 5, { y: -2.8 }],
              ['l', 0, 116, { r: ft }],
              ['b', 0, 180.1, 51.9, 232, 116, 232, { r: lt }],
              ['b', 180.1, 232, 232, 180.1, 232, 116, { r: ot }],
              ['b', 232, 51.9, 180.1, 0, 116, 0, { r: lt }],
              ['b', 51.9, 0, 0, 51.9, 0, 116, { r: ot }],
              ['l', 0, 338, { y: 0, f: 1 }],
            ],
          },
        ]),
        q: ut(600, 232, 338, 10, 2, -117, -117, [
          {
            d: -1,
            v: [
              ['m', 232, 5, { y: -2.8 }],
              ['l', 232, 116, { r: ft }],
              ['b', 232, 180.1, 180.1, 232, 116, 232, { r: lt }],
              ['b', 51.9, 232, 0, 180.1, 0, 116, { r: ot }],
              ['b', 0, 51.9, 51.9, 0, 116, 0, { r: lt }],
              ['b', 180.1, 0, 232, 51.9, 232, 116, { r: ot }],
              ['l', 232, 338, { y: 0, f: 1 }],
            ],
          },
        ]),
        r: ut(340, 119.2, 352, -20, -20, 0, 0, [
          {
            d: -1,
            v: [['m', 0, 130, { y: -3.3 }], ['l', 0, 352, { y: 0, f: 1 }]],
          },
          {
            d: -1,
            v: [
              ['m', 0, 181, { r: ot, p: 1 }],
              [
                'b',
                0,
                181,
                41.9,
                101.2,
                119.2,
                128.5,
                {
                  x: 0,
                  y: 2,
                  r: vt(119.2, 128.5, 41.9, 101.2, 0, 181, 119.2, 128.5, 0),
                  f: 1,
                },
              ],
            ],
          },
        ]),
        s: ut(
          400,
          143.808,
          231.12,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(Gt)),
        ),
        t: ut(356, 232, 352, -30, -30, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 65, 0, { y: 0 }],
              ['l', 65, 304.2],
              ['b', 65, 332.9, 88.2, 356.1, 116.9, 356.1, { r: lt }],
              ['b', 139.2, 356.1, 159.3, 343, 166.6, 317.1, { x: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 0, 130, { x: 0, r: lt }],
              ['l', 154, 130, { x: 0, f: 1 }],
            ],
          },
        ]),
        u: ut(520, 182, 352, 0, 0, 0, 0, JSON.parse(JSON.stringify(Ct))),
        v: ut(500, 200, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 130, { x: 0.6, y: -3, r: pt(0, 130, 100 - yt, 352) }],
              ['l', 100 - yt, 352, { r: pt(0, 130, 100 - yt, 352), f: 1 }],
              [
                'l',
                100 + yt,
                352,
                { r: pt(100 + yt, 352, 200, 130), f: 1, v: 1 },
              ],
              ['l', 200, 130, { x: 0.6, y: -3, f: 1 }],
            ],
          },
        ]),
        w: ut(700, 310, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 130, { x: 0.6, y: -3, r: pt(0, 130, 78 - yt, 352) }],
              ['l', 78 - yt, 352, { r: pt(0, 130, 78 - yt, 352), f: 1 }],
              [
                'l',
                78 + yt,
                352,
                { r: pt(78 + yt, 352, 155 - yt, 130), f: 1, v: 1 },
              ],
              [
                'l',
                155 - yt,
                130,
                { y: 1, r: pt(78 + yt, 352, 155 - yt, 130), f: 1 },
              ],
              [
                'l',
                155 + yt,
                130,
                { y: 1, r: pt(155 + yt, 130, 233 - yt, 352), f: 1, v: 1 },
              ],
              [
                'l',
                233 - yt,
                352,
                { r: pt(155 + yt, 130, 233 - yt, 352), f: 1 },
              ],
              [
                'l',
                233 + yt,
                352,
                { r: pt(233 + yt, 352, 310, 130), f: 1, v: 1 },
              ],
              ['l', 310, 130, { x: 0.6, y: -3, f: 1 }],
            ],
          },
        ]),
        x: ut(490, 210, 352, 0, 0, 0, -7, [
          {
            d: -1,
            v: [
              ['m', 10, 130, { x: 0.5, y: -1, r: pt(10, 130, 210, 352) }],
              ['l', 210, 352, { x: 0.5, y: 0.5, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 200, 130, { x: 0.5, y: -1, r: pt(200, 130, 0, 352) }],
              ['l', 0, 352, { x: 0.5, y: 0.5, f: 1 }],
            ],
          },
        ]),
        y: ut(
          500,
          225.5,
          331.5,
          10,
          10,
          -119,
          -119,
          JSON.parse(JSON.stringify(Lt)),
        ),
        z: ut(420, 172, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 6, 130, { x: -0.5, y: 1, r: lt }],
              ['l', 166, 130, { x: 1.8, y: 1, r: lt, f: 1 }],
              ['l', 166, 133, { x: 1.8, y: 1, r: ot, p: 1, v: 1 }],
              ['l', 0, 349, { x: 1.7, r: ot, p: 1 }],
              ['l', 0, 352, { x: 1.7, r: lt, f: 1, v: 1 }],
              ['l', 172, 352, { x: -0.4, r: lt, f: 1 }],
            ],
          },
        ]),
      },
      At = {
        0: ut(660, 270, 360, 0, 0, 0, 0, [
          {
            d: 1,
            v: [
              ['m', 270, 180, { r: ot, p: 1, f: 1 }],
              ['b', 270, 279.4, 209.6, 360, 135, 360, { r: lt }],
              ['b', 60.4, 360, 0, 279.4, 0, 180, { r: ot }],
              ['b', 0, 80.6, 60.4, 0, 135, 0, { r: lt }],
              ['b', 209.6, 0, 270, 80.6, 270, 180, { r: ot, c: 1 }],
            ],
          },
        ]),
        1: ut(380, 76, 352, 15, 15, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 51, { x: -2, y: 2, r: pt(0, 51, 73, 0) }],
              ['l', 73, 0, { r: ot, p: 1 }],
              ['l', 76, 0, { r: ot, f: 1, v: 1 }],
              ['l', 76, 352, { y: 0, f: 1 }],
            ],
          },
        ]),
        2: ut(580, 210, 356, 0, 0, 2, 2, [
          {
            d: -1,
            v: [
              [
                'm',
                3.9,
                68.8,
                {
                  x: 1.2,
                  y: 1.2,
                  r: vt(3.9, 68.8, 16.7, 29, 54.2, 3.1, 98.2, 0.2, 0),
                },
              ],
              ['b', 16.7, 29, 54.2, 3.1, 98.2, 0.2],
              ['b', 151.8, -3.3, 208.5, 38.3, 198.9, 100.1],
              ['b', 197.1, 111.8, 196.4, 142.4, 101.5, 235.2],
              ['b', 11.4, 323.2, 0, 353, 0, 353, { r: ft }],
              ['l', 0, 353, { r: lt, p: 1 }],
              ['l', 0, 356, { r: lt, f: 1, v: 1 }],
              ['l', 210, 356, { x: -0.5, f: 1 }],
            ],
          },
        ]),
        3: ut(580, 222.1, 360, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              [
                'm',
                10.7,
                66.3,
                { r: vt(10.7, 66.3, 11.2, 64.8, 11.7, 63.3, 12.3, 61.8, 0) },
              ],
              ['b', 11.2, 64.8, 11.7, 63.3, 12.3, 61.8, { r: ft }],
              ['b', 25.8, 25.9, 64.5, 0, 110.1, 0, { r: lt }],
              ['b', 167, 0, 213.1, 40.3, 213.1, 90, { r: ot }],
              ['b', 213.1, 139.7, 167, 180, 110.1, 179.9, { r: lt, f: 1 }],
              ['l', 100.1, 179.9, { x: -5, y: 1, r: lt, f: 1 }],
              ['l', 110.1, 180, { r: lt, p: 1 }],
              ['b', 172, 180, 222.1, 220.3, 222.1, 270, { r: ot }],
              ['b', 222.1, 319.7, 172, 360, 110.1, 360, { r: lt }],
              ['b', 56.9, 360, 12.4, 330.2, 1, 290.3, { f: 1 }],
            ],
          },
        ]),
        4: ut(596, 236, 352, 0, 0, 0, 0, [
          {
            d: 1,
            v: [
              ['m', 175, 352, { y: 0, f: 1 }],
              ['l', 175, 0, { f: 1 }],
              ['l', 172, 0, { r: lt, p: 1, v: 1 }],
              ['l', 0, 273, { r: ot, p: 1 }],
              ['l', 0, 276, { r: lt, f: 1, v: 1 }],
              ['l', 236, 276, { x: -0.5 }],
            ],
          },
        ]),
        5: ut(596, 208.5, 356, 0, -5, -2, -2, [
          {
            d: 1,
            v: [
              [
                'm',
                0,
                295.7,
                {
                  r: vt(0, 295.7, 15.3, 333.8, 52.2, 356.2, 97.5, 356, 0),
                  f: 1,
                },
              ],
              ['b', 15.3, 333.8, 52.2, 356.2, 97.5, 356, { r: lt }],
              ['b', 159.1, 355.7, 206.1, 306.9, 208.5, 240.8, { r: ot }],
              ['b', 210.9, 173.9, 162.7, 120.8, 97.5, 125.6, { r: lt }],
              ['b', 59.4, 128.4, 25.5, 145.8, 5.6, 176.4, { f: 1 }],
              ['l', 5.6, 176.4, { r: ft }],
              ['l', 5.6 - 3, 176.4, { r: ot, p: 1, v: 1 }],
              ['l', 11.5, 0, { r: lt, f: 1 }],
              ['l', 193.5, 0, { x: -0.5 }],
            ],
          },
        ]),
        6: ut(596, 215.8, 360, 0, -2, 0, 0, [
          {
            d: 1,
            v: [
              ['m', 7.6, 272.3, { r: ot, p: 1, f: 1 }],
              ['b', 6.4, 265.8, 5.8, 259.1, 5.8, 252.2, { r: ot }],
              ['b', 5.8, 192.6, 52.8, 144.2, 110.8, 144.2, { r: lt }],
              ['b', 168.7, 144.2, 215.8, 192.6, 215.8, 252.2, { r: ot }],
              ['b', 215.8, 311.9, 168.7, 360, 110.8, 360, { r: lt }],
              ['b', 59.5, 360, 16.8, 322.4, 7.6, 272.4, { r: ft }],
              ['b', 7.6, 272.4, -44.1, 8.8, 122.2, 0.2],
              ['b', 165.5, -2.1, 193.8, 21, 212.1, 56.4],
            ],
          },
        ]),
        7: ut(540, 213, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { x: 0, r: lt }],
              ['l', 213, 0, { r: lt, f: 1 }],
              ['l', 213, 0.1, { r: ft }],
              ['l', 72.7, 352, { y: 0.1, f: 1 }],
            ],
          },
        ]),
        8: ut(596, 224, 360, 0, 0, 0, 0, [
          {
            d: 1,
            v: [
              ['m', 112, 180, { r: ot, p: 1, f: 1 }],
              ['b', 50.1, 180, 0, 220.3, 0, 270, { r: ot }],
              ['b', 0, 319.7, 50.1, 360, 112, 360, { r: lt }],
              ['b', 173.9, 360, 224, 319.7, 224, 270, { r: ot }],
              ['b', 224, 220.3, 173.9, 180, 112, 180, { r: lt }],
              ['b', 55.1, 180, 9, 139.7, 9, 90, { r: ot }],
              ['b', 9, 40.3, 55.1, 0, 112, 0, { r: lt }],
              ['b', 168.9, 0, 215, 40.3, 215, 90, { r: ot }],
              ['b', 215, 139.7, 168.9, 180, 112, 180, { r: ot, p: 1, f: 1 }],
            ],
          },
        ]),
        9: ut(596, 215.8, 360, 0, -2, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 208.2, 88, { r: ot, p: 1, f: 1 }],
              ['b', 209.4, 94.5, 210, 101.2, 210, 108, { r: ot }],
              ['b', 210, 167.6, 163, 216, 105, 216, { r: lt }],
              ['b', 47, 216, -0, 167.6, 0, 108, { r: ot }],
              ['b', 0, 48.4, 47, -0, 105, 0, { r: lt }],
              ['b', 156.3, 0, 199, 37.8, 208.2, 87.8, { r: ft }],
              ['b', 208.2, 87.8, 259.8, 351.4, 93.5, 360],
              ['b', 50.3, 362.3, 21.9, 339.2, 3.6, 303.8, { f: 1 }],
            ],
          },
        ]),
      },
      Et = {
        ' ': ut(336, 0, 0, 0, 0, 0, 0, [{ d: 1, v: [] }]),
        tofu: ut(672, 232, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { r: ot }],
              ['l', 232, 0, { r: ot, f: 1 }],
              ['l', 232, 352, { r: ot, f: 1 }],
              ['l', 0, 352, { r: ot, f: 1 }],
              ['l', 0, 0, { r: ot, p: 1, f: 1, c: 1 }],
            ],
          },
          {
            d: 1,
            v: [['m', 0, 0, { r: ot, p: 1, f: 1 }], ['l', 232, 352, { r: ft }]],
          },
        ]),
        '?': ut(520, 190.348, 360, 0, -5, 0, 0, [
          { d: 1, v: [['a', 91.174, 356]] },
          {
            d: -1,
            v: [
              ['m', 0, 87.8, { r: vt(0, 87.8, 12, -2.3, 99.1, 0, 0, 87.8, 0) }],
              ['b', 0, 87.8, 12, -2.3, 99.1, 0, { r: lt }],
              ['b', 186.2, 2.4, 204.5, 75.2, 180.9, 121.4],
              ['b', 157.3, 167.6, 119.7, 178.3, 97.4, 223.2],
              ['b', 90.5, 237.1, 88.1, 249.8, 88, 260.8, { r: ot, f: 1 }],
            ],
          },
        ]),
        '!': ut(465, 8, 355, 0, -5, 0, 0, [
          { d: 1, v: [['a', 4, 353.5]] },
          { d: -1, v: [['m', 4, 0, { y: 0 }], ['l', 4, 260.8, { f: 1 }]] },
        ]),
        $: ut(568, 224, 360, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              [
                'm',
                212,
                51.3,
                {
                  r: vt(0, 295.4, 17.6, 332.1, 58.3, 360, 110.3, 360, 0),
                  f: 1,
                },
              ],
              ['b', 196.5, 20.5, 158.4, 0, 114.8, 0],
              ['b', 57.3, 0, 13.3, 29.8, 12, 84.4],
              ['b', 10.9, 130.6, 47.3, 157.7, 112.4, 173.3],
              ['b', 180.7, 189.6, 224.2, 214.7, 224, 271],
              ['b', 223.8, 329.6, 173.9, 360, 110.3, 360],
              ['b', 58.3, 360, 17.6, 332.1, 0, 295.4, { f: 1 }],
            ],
          },
          {
            d: -1,
            v: [['m', 112, -30, { y: 0 }], ['l', 112, 390, { y: 0, f: 1 }]],
          },
        ]),
        '@': ut(820, 343.425, 360, 0, 0, -30, -30, [
          {
            d: -1,
            v: [
              ['m', 251.9, 92.9, { r: pt(251.9, 92.9, 238.5, 181.7) }],
              ['l', 238.5, 181.7, { r: ft }],
              ['b', 227.8, 236, 194.7, 267.2, 143.7, 259.2],
              ['b', 99.1, 252.2, 87.7, 208.5, 90.1, 177.5],
              ['b', 92.5, 148.4, 118.1, 91, 183.3, 99.1],
              ['b', 251, 107.5, 238.5, 181.7, 238.5, 181.7, { r: ft }],
              ['l', 232.5, 221.5],
              ['b', 232.5, 221.5, 227.2, 257.6, 256, 263.6],
              ['b', 284.9, 269.7, 309, 241.3, 309, 241.3, { r: ft }],
              ['b', 309, 241.3, 343.4, 209, 343.4, 146.7],
              ['b', 343.4, 84.3, 297.4, 3.5, 178.6, 0.1],
              ['b', 59.7, -3.4, -5.3, 105.2, 0.3, 203.4],
              ['b', 6.1, 303.7, 93.2, 354.5, 175.5, 359.5],
              ['b', 175.5, 359.5, 246.5, 364.9, 302.7, 339.8, { f: 1 }],
            ],
          },
        ]),
        '#': ut(760, 314, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 117, 0, { y: 0, r: pt(117, 0, 47, 352) }],
              ['l', 47, 352, { y: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 267, 0, { y: 0, r: pt(267, 0, 197, 352) }],
              ['l', 197, 352, { y: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 24, 117, { x: 0, r: lt }],
              ['l', 314, 117, { x: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 0, 235, { x: 0, r: lt }],
              ['l', 290, 235, { x: 0, f: 1 }],
            ],
          },
        ]),
        '%': ut(920, 388, 360, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 307.1, 5.1, { x: 0, y: 0, r: pt(307.1, 5.1, 80.9, 354.9) }],
              ['l', 80.9, 354.9, { x: 0, y: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 146, 73, { r: ot, p: 1 }],
              ['b', 146, 113.3, 113.3, 146, 73, 146, { r: lt }],
              ['b', 32.7, 146, 0, 113.3, 0, 73, { r: ot }],
              ['b', 0, 32.7, 32.7, 0, 73, 0, { r: lt }],
              ['b', 113.3, 0, 146, 32.7, 146, 73, { r: ot, c: 1, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 388, 287, { r: ot, p: 1 }],
              ['b', 388, 327.3, 355.3, 360, 315, 360, { r: lt }],
              ['b', 274.7, 360, 242, 327.3, 242, 287, { r: ot }],
              ['b', 242, 246.7, 274.7, 214, 315, 214, { r: lt }],
              ['b', 355.3, 214, 388, 246.7, 388, 287, { r: ot, c: 1, f: 1 }],
            ],
          },
        ]),
        '^': ut(596, 176, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 150, { r: pt(0, 150, 88 - yt, 0) }],
              ['l', 88 - yt, 0, { r: pt(0, 150, 88 - yt, 0), f: 1 }],
              ['l', 88 + yt, 0, { r: pt(88 + yt, 0, 176, 150), f: 1, v: 1 }],
              ['l', 176, 150, { f: 1 }],
            ],
          },
        ]),
        '&': ut(660, 259.191, 360, 0, 0, 0, 0, [
          {
            d: 1,
            v: [
              [
                'm',
                257.9,
                355,
                { x: 0.5, y: 0.5, r: pt(257.9, 355, 52.8, 135.3), f: 1 },
              ],
              ['l', 52.8, 135.3],
              ['b', 52.8, 135.3, -2.2, 79.5, 46.6, 26.7],
              ['b', 46.6, 26.7, 68.1, 0, 101.8, 0, { r: lt }],
              ['b', 137.2, 0, 174.1, 21.1, 181.2, 65.3],
              ['b', 188.6, 111.7, 142.6, 142.9, 108.9, 162.9],
              ['b', 75.2, 182.8, 40.8, 211.4, 40.8, 211.4, { r: ft }],
              ['b', 35, 217.1, -34.7, 273.7, 22.2, 330.5],
              ['b', 22.2, 330.5, 48.1, 360, 93.4, 360, { r: lt }],
              ['b', 138.6, 360, 212.2, 322, 259.2, 200.5],
            ],
          },
        ]),
        '*': ut(558, 183.597, 212, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 91.8, 0, { x: 0, y: 0 }],
              ['l', 91.8, 212, { x: 0, y: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 0, 53, { x: 0, y: 0, r: pt(0, 53, 183.6, 159) }],
              ['l', 183.6, 159, { x: 0, y: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 0, 159, { x: 0, y: 0, r: pt(0, 159, 183.6, 53) }],
              ['l', 183.6, 53, { x: 0, y: 0, f: 1 }],
            ],
          },
        ]),
        '+': ut(712, 250, 250, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 125, 0, { x: 0, y: 0 }],
              ['l', 125, 250, { x: 0, y: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 0, 125, { x: 0, y: 0, r: lt }],
              ['l', 250, 125, { x: 0, y: 0, f: 1 }],
            ],
          },
        ]),
        '=': ut(712, 216, 86, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { x: 0, y: 0, r: lt }],
              ['l', 216, 0, { x: 0, y: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 0, 86, { x: 0, y: 0, r: lt }],
              ['l', 216, 86, { x: 0, y: 0, f: 1 }],
            ],
          },
        ]),
        '-': ut(712, 188, 0, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { x: 0, y: 0, r: lt }],
              ['l', 188, 0, { x: 0, y: 0, f: 1 }],
            ],
          },
        ]),
        _: ut(481, 235, 400, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 400, { x: 0, y: 0, r: lt }],
              ['l', 235, 400, { x: 0, y: 0, f: 1 }],
            ],
          },
        ]),
        ':': ut(231, 8, 355, 0, 0, 0, 0, [
          { d: 1, v: [['a', 4, 183.5]] },
          { d: 1, v: [['a', 4, 353.5]] },
        ]),
        ';': ut(231, 8, 355, 0, 0, 0, 0, [
          { d: 1, v: [['a', 4, 183.5]] },
          {
            d: -1,
            v: [
              ['m', 4, 350, { x: 0, y: 2, r: pt(4, 350, -6, 430) }],
              ['l', -6, 430, { x: 0, y: 0.5, f: 1 }],
            ],
          },
        ]),
        '.': ut(231, 8, 355, 0, 0, 0, 0, [{ d: 1, v: [['a', 4, 353.5]] }]),
        ',': ut(231, 10, 355, 10, 10, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 10, 350, { x: 0, y: 2, r: pt(10, 350, 0, 430) }],
              ['l', 0, 430, { x: 0, y: 0.5, f: 1 }],
            ],
          },
        ]),
        "'": ut(173, 0, 360, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { x: 0, y: 0 }],
              ['l', 0, 80, { x: 0, y: 0, f: 1 }],
            ],
          },
        ]),
        '"': ut(297, 60, 360, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { x: -1.5, y: 0 }],
              ['l', 0, 80, { x: -1.5, y: 0, f: 1 }],
            ],
          },
          {
            d: -1,
            v: [
              ['m', 60, 0, { x: -1.5, y: 0 }],
              ['l', 60, 80, { x: -1.5, y: 0, f: 1 }],
            ],
          },
        ]),
        '~': ut(731, 199.391, 47.063, 0, 0, 0, 0, [
          {
            d: 1,
            v: [
              [
                'm',
                199.4,
                20.7,
                {
                  x: 0,
                  y: 0,
                  r: vt(199.4, 20.7, 187.6, 36.6, 168.2, 47.1, 148.2, 47.1, 0),
                  f: 1,
                },
              ],
              [
                'b',
                187.6,
                36.6,
                168.2,
                47.1,
                148.2,
                47.1,
                { x: 0, y: 0, r: lt },
              ],
              ['b', 129.1, 47.1, 112.1, 36.6, 95.3, 25.5, { x: 0, y: 0 }],
              ['b', 76.8, 13.2, 59.1, 0, 39.6, 0, { x: 0, y: 0, r: lt }],
              ['b', 22.3, 0, 10.9, 8.9, 0, 20, { x: 0, y: 0 }],
            ],
          },
        ]),
        '(': ut(365, 107.865, 360, 0, 0, 0, 0, [
          {
            d: 1,
            v: [
              [
                'm',
                107.9,
                360,
                {
                  y: 0.8,
                  r: vt(107.9, 360, 39.7, 321.1, 0, 259.8, 0, 182.9, 0),
                  f: 1,
                },
              ],
              ['b', 39.7, 321.1, 0, 259.8, 0, 182.9, { y: 0.8, r: ot }],
              ['b', 0, 100.2, 39.7, 38.9, 107.9, 0, { y: 0.8 }],
            ],
          },
        ]),
        ')': ut(365, 107.865, 360, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              [
                'm',
                0,
                0,
                {
                  y: 0.8,
                  r: vt(0, 0, 68.2, 38.9, 107.9, 100.2, 107.9, 177, 0),
                },
              ],
              ['b', 68.2, 38.9, 107.9, 100.2, 107.9, 177, { y: 0.8, r: ot }],
              ['b', 107.9, 259.8, 68.2, 321.1, 0, 360, { y: 0.8, f: 1 }],
            ],
          },
        ]),
        '{': ut(385, 107.865, 360, 0, 0, 0, 0, [
          {
            d: 1,
            v: [
              ['m', 94.5, 360, { x: -0.5, r: lt }],
              ['l', 77.9, 360, { x: -0.5 }],
              ['b', 57.4, 360, 37, 343, 37, 310.7, { x: -0.5 }],
              ['l', 37, 233.4, { x: -0.5 }],
              ['b', 37, 207.9, 24.3, 183.7, 3.8, 180.7, { x: -0.5, r: lt }],
              ['l', 3.8, 179.8, { x: -0.5, r: lt, p: 1 }],
              ['b', 24.3, 176.8, 37, 153.1, 37, 126.7, { x: -0.5 }],
              ['l', 37, 49.4, { x: -0.5 }],
              ['b', 37, 17.1, 57.4, 0.1, 77.9, 0.1, { x: -0.5 }],
              ['l', 94.5, 0.1, { x: -0.5 }],
            ],
          },
        ]),
        '}': ut(385, 107.865, 360, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 13.4, 0.1, { x: -0.5, r: lt }],
              ['l', 30, 0.1, { x: -0.5 }],
              ['b', 50.4, 0.1, 70.8, 17.1, 70.8, 49.4, { x: -0.5 }],
              ['l', 70.8, 126.7, { x: -0.5 }],
              ['b', 70.8, 153.1, 83.6, 176.8, 104, 179.8, { x: -0.5, r: lt }],
              ['l', 104, 180.7, { x: -0.5, r: lt, p: 1 }],
              ['b', 83.6, 183.7, 70.8, 207.9, 70.8, 233.4, { x: -0.5 }],
              ['l', 70.8, 310.7, { x: -0.5 }],
              ['b', 70.8, 343, 50.4, 360, 30, 360, { x: -0.5 }],
              ['l', 13.4, 360, { x: -0.5 }],
            ],
          },
        ]),
        '[': ut(365, 66, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 66, 0, { x: -1, r: lt }],
              ['l', 0, 0, { r: ot, f: 1 }],
              ['l', 0, 352, { r: ot, f: 1 }],
              ['l', 66, 352, { x: -1, f: 1 }],
            ],
          },
        ]),
        ']': ut(365, 66, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { x: -1, r: lt }],
              ['l', 66, 0, { r: ot, f: 1 }],
              ['l', 66, 352, { r: ot, f: 1 }],
              ['l', 0, 352, { x: -1, f: 1 }],
            ],
          },
        ]),
        '<': ut(423, 90, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 90, 0, { x: -1, y: 0.3, r: pt(90, 0, 0, 176) }],
              ['l', 0, 176, { r: ot, f: 1 }],
              ['l', 90, 352, { x: -1, y: 0.3, f: 1 }],
            ],
          },
        ]),
        '>': ut(423, 90, 352, 0, 0, 0, 0, [
          {
            d: -1,
            v: [
              ['m', 0, 0, { x: -1, y: 0.3, r: pt(0, 0, 90, 176) }],
              ['l', 90, 176, { r: ot, f: 1 }],
              ['l', 0, 352, { x: -1, y: 0.3, f: 1 }],
            ],
          },
        ]),
        '/': ut(433, 130, 352, 0, 0, 0, 0, [
          {
            d: 1,
            v: [
              ['m', 0, 352, { r: pt(0, 352, 130, 0), f: 1, y: 0 }],
              ['l', 130, 0, { y: 0 }],
            ],
          },
        ]),
      };
    function qt(t, r) {
      var e = 140 + t,
        i = -468 + r;
      return [
        {
          d: -1,
          v: [
            [
              'm',
              -40 + e,
              350 + i,
              { x: 0, y: 0, r: pt(-40 + e, 350 + i, 0 + e, 410 + i) },
            ],
            ['l', 0 + e, 410 + i, { x: 0, y: 0, f: 1 }],
          ],
        },
      ];
    }
    function Xt(t, r) {
      var e = 150 + t,
        i = -468 + r;
      return [
        {
          d: -1,
          v: [
            [
              'm',
              40 + e,
              350 + i,
              { x: 0, y: 0, r: pt(40 + e, 350 + i, 0 + e, 410 + i) },
            ],
            ['l', 0 + e, 410 + i, { x: 0, y: 0, f: 1 }],
          ],
        },
      ];
    }
    function Bt(t, r) {
      var e = 77 + t,
        i = -108 + r;
      return [
        {
          d: -1,
          v: [
            [
              'm',
              0 + e,
              50 + i,
              { r: pt(0 + e, 50 + i, 68 - yt + e, 0 + i), y: 0, x: 0 },
            ],
            [
              'l',
              68 - yt + e,
              0 + i,
              { r: pt(0 + e, 50 + i, 68 - yt + e, 0 + i), y: 0, x: 0, f: 1 },
            ],
            [
              'l',
              68 + yt + e,
              0 + i,
              {
                r: pt(68 + yt + e, 0 + i, 136 + e, 50 + i),
                y: 0,
                x: 0,
                f: 1,
                v: 1,
              },
            ],
            ['l', 136 + e, 50 + i, { y: 0, x: 0, f: 1 }],
          ],
        },
      ];
    }
    function Ht(t, r) {
      var e = 65 + t,
        i = -94 + r;
      return [
        {
          d: 1,
          v: [
            [
              'm',
              159.52 + e,
              16.56 + i,
              {
                x: -1,
                y: -0.2,
                r: vt(
                  159.52 + e,
                  16.56 + i,
                  150.08 + e,
                  29.28 + i,
                  134.56 + e,
                  37.68 + i,
                  118.56 + e,
                  37.68 + i,
                  0,
                ),
                f: 1,
              },
            ],
            [
              'b',
              150.08 + e,
              29.28 + i,
              134.56 + e,
              37.68 + i,
              118.56 + e,
              37.68 + i,
              { x: -1, y: -0.2, r: lt },
            ],
            [
              'b',
              103.28 + e,
              37.68 + i,
              89.68 + e,
              29.28 + i,
              76.24 + e,
              25.5 * 0.8 + i,
              { x: -1, y: -0.2 },
            ],
            [
              'b',
              61.44 + e,
              10.56 + i,
              47.28 + e,
              0 + i,
              39.6 * 0.8 + e,
              0 + i,
              { x: -1, y: -0.2, r: lt },
            ],
            [
              'b',
              17.84 + e,
              0 + i,
              8.72 + e,
              8.9 * 0.8 + i,
              0 + e,
              16 + i,
              { x: -1, y: -0.2 },
            ],
          ],
        },
      ];
    }
    function Kt(t, r) {
      return [
        { d: 1, v: [['a', 95 + t, -78 + r, { x: 0, y: 0 }]] },
        { d: 1, v: [['a', 195 + t, -78 + r, { x: 0, y: 0 }]] },
      ];
    }
    function Qt(t, r) {
      var e = t,
        i = r;
      return [
        {
          d: 1,
          v: [
            [
              'm',
              112.7 + e,
              0 + i,
              {
                r: vt(
                  112.7 + e,
                  0 + i + e,
                  10.1 + i,
                  110.1 + e,
                  19.3 + i,
                  105 + e,
                  27.7 + i,
                  0,
                ),
                x: 0,
                y: 0,
                f: 1,
              },
            ],
            [
              'b',
              112.7 + e,
              10.1 + i,
              110.1 + e,
              19.3 + i,
              105 + e,
              27.7 + i,
              { x: 0, y: 0 },
            ],
            [
              'b',
              99.8 + e,
              36.1 + i,
              92.9 + e,
              42.8 + i,
              84.3 + e,
              47.7 + i,
              { x: 0, y: 0 },
            ],
            [
              'b',
              75.7 + e,
              52.6 + i,
              66.7 + e,
              55 + i,
              57.3 + e,
              55 + i,
              { x: 0, y: 0 },
            ],
            [
              'b',
              47.5 + e,
              55 + i,
              38.3 + e,
              52.6 + i,
              29.6 + e,
              47.7 + i,
              { x: 0, y: 0 },
            ],
            [
              'b',
              20.8 + e,
              42.8 + i,
              13.8 + e,
              36.1 + i,
              8.5 + e,
              27.7 + i,
              { x: 0, y: 0 },
            ],
            [
              'b',
              3.2 + e,
              19.3 + i,
              0.5 + e,
              10.1 + i,
              0.5 + e,
              0 + i,
              { x: 0, y: 0 },
            ],
          ],
        },
      ];
    }
    function Ut(t, r) {
      var e = 88 + t,
        i = -116 + r;
      return [
        {
          d: 1,
          v: [
            ['m', 116 + e, 58 + i, { r: ot, p: 1, f: 1 }],
            [
              'b',
              116 + e,
              90.05 + i,
              90.05 + e,
              116 + i,
              58 + e,
              116 + i,
              { r: lt },
            ],
            [
              'b',
              25.95 + e,
              116 + i,
              0 + e,
              90.05 + i,
              0 + e,
              58 + i,
              { r: ot },
            ],
            ['b', 0 + e, 25.95 + i, 25.95 + e, 0 + i, 58 + e, 0 + i, { r: lt }],
            [
              'b',
              90.05 + e,
              0 + i,
              116 + e,
              25.95 + i,
              116 + e,
              58 + i,
              { r: ot, c: 1 },
            ],
          ],
        },
      ];
    }
    var Vt = [
        { d: 1, v: [['m', 0, 352, { y: 0, f: 1 }], ['l', 0, 130, { y: -3 }]] },
      ],
      Yt = [
        {
          d: 1,
          v: [
            [
              'm',
              -115.9,
              444,
              {
                x: 0.4,
                y: 0.63,
                r: vt(
                  -115.9,
                  444,
                  12.6 - 115.9,
                  454.4,
                  29.6 - 115.9,
                  460.2,
                  -70,
                  461.2,
                  0,
                ),
                f: 1,
              },
            ],
            [
              'b',
              12.6 - 115.9,
              454.4,
              29.6 - 115.9,
              460.2,
              -70,
              461.2,
              { x: 0.4, y: 0.63, r: lt },
            ],
            [
              'b',
              84.5 - 115.9,
              463.5,
              0,
              435.1,
              0,
              396.4,
              { x: 0.4, y: 0.63, r: ot },
            ],
            ['l', 0, 130, { y: -3 }],
          ],
        },
      ],
      Zt = {
        À: ut(
          620,
          290,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(xt)).concat(qt(0, 20)),
        ),
        Á: ut(
          620,
          290,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(xt)).concat(Xt(0, 20)),
        ),
        Â: ut(
          620,
          290,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(xt)).concat(Bt(0, 0)),
        ),
        Ã: ut(
          620,
          290,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(xt)).concat(Ht(0, 20)),
        ),
        Ä: ut(
          620,
          290,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(xt)).concat(Kt(0, 20)),
        ),
        Å: ut(
          620,
          290,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(xt)).concat(Ut(0, 0)),
        ),
        à: ut(
          600,
          232,
          232,
          10,
          2,
          -64,
          -64,
          JSON.parse(JSON.stringify(Dt)).concat(qt(-29, -15)),
        ),
        á: ut(
          600,
          232,
          232,
          10,
          2,
          -64,
          -64,
          JSON.parse(JSON.stringify(Dt)).concat(Xt(-29, -15)),
        ),
        â: ut(
          600,
          232,
          232,
          10,
          2,
          -64,
          -64,
          JSON.parse(JSON.stringify(Dt)).concat(Bt(-29, -15)),
        ),
        ã: ut(
          600,
          232,
          232,
          10,
          2,
          -64,
          -64,
          JSON.parse(JSON.stringify(Dt)).concat(Ht(-29, -15)),
        ),
        ä: ut(
          600,
          232,
          232,
          10,
          2,
          -64,
          -64,
          JSON.parse(JSON.stringify(Dt)).concat(Kt(9, -15)),
        ),
        å: ut(
          600,
          232,
          232,
          10,
          2,
          -64,
          -64,
          JSON.parse(JSON.stringify(Dt)).concat(Ut(-30, 0)),
        ),
        È: ut(
          520,
          192,
          352,
          -5,
          -80,
          0,
          0,
          JSON.parse(JSON.stringify(bt)).concat(qt(-40, 0)),
        ),
        É: ut(
          520,
          192,
          352,
          -5,
          -80,
          0,
          0,
          JSON.parse(JSON.stringify(bt)).concat(Xt(-40, 0)),
        ),
        Ê: ut(
          520,
          192,
          352,
          -5,
          -80,
          0,
          0,
          JSON.parse(JSON.stringify(bt)).concat(Bt(-49, 0)),
        ),
        Ë: ut(
          520,
          192,
          352,
          -5,
          -80,
          0,
          0,
          JSON.parse(JSON.stringify(bt)).concat(Kt(-40, 0)),
        ),
        è: ut(
          570,
          225.5,
          233.1,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(It)).concat(qt(-28, -14)),
        ),
        é: ut(
          570,
          225.5,
          233.1,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(It)).concat(Xt(-28, -14)),
        ),
        ê: ut(
          570,
          225.5,
          233.1,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(It)).concat(Bt(-28, -14)),
        ),
        ë: ut(
          570,
          225.5,
          233.1,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(It)).concat(Kt(-28, -14)),
        ),
        Ì: ut(
          249,
          0,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(_t)).concat(qt(-145, 0)),
        ),
        Í: ut(
          249,
          0,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(_t)).concat(Xt(-145, 0)),
        ),
        Î: ut(
          249,
          0,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(_t)).concat(Bt(-145, 0)),
        ),
        Ï: ut(
          249,
          0,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(_t)).concat(Kt(-145, 0)),
        ),
        ì: ut(
          200,
          0,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Vt)).concat(qt(-145, 109)),
        ),
        í: ut(
          200,
          0,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Vt)).concat(Xt(-145, 109)),
        ),
        î: ut(
          200,
          0,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Vt)).concat(Bt(-145, 109)),
        ),
        ï: ut(
          200,
          0,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Vt)).concat(Kt(-145, 109)),
        ),
        Ñ: ut(
          721,
          250,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Jt)).concat(Ht(-20, 0)),
        ),
        ñ: ut(
          520,
          182,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Mt)).concat(Ht(-54, 109)),
        ),
        Ò: ut(
          850,
          360,
          360,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Nt)).concat(qt(35, 4)),
        ),
        Ó: ut(
          850,
          360,
          360,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Nt)).concat(Xt(35, 4)),
        ),
        Ô: ut(
          850,
          360,
          360,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Nt)).concat(Bt(35, 4)),
        ),
        Õ: ut(
          850,
          360,
          360,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Nt)).concat(Ht(35, 4)),
        ),
        Ö: ut(
          850,
          360,
          360,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Nt)).concat(Kt(35, 4)),
        ),
        Ø: ut(
          850,
          360,
          360,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Nt)).concat([
            {
              d: 1,
              v: [
                ['m', 0, 360, { r: pt(0, 360, 360, 0), f: 1, x: 0, y: 1 }],
                ['l', 360, 0, { x: 0, y: 1 }],
              ],
            },
          ]),
        ),
        ò: ut(
          580,
          232,
          232,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(jt)).concat(qt(-29, -15)),
        ),
        ó: ut(
          580,
          232,
          232,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(jt)).concat(Xt(-29, -15)),
        ),
        ô: ut(
          580,
          232,
          232,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(jt)).concat(Bt(-29, -15)),
        ),
        õ: ut(
          580,
          232,
          232,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(jt)).concat(Ht(-29, -15)),
        ),
        ö: ut(
          580,
          232,
          232,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(jt)).concat(Kt(-29, -15)),
        ),
        ø: ut(
          580,
          232,
          232,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(jt)).concat([
            {
              d: 1,
              v: [
                ['m', 0, 232, { r: pt(0, 232, 232, 0), f: 1, x: 0, y: 1 }],
                ['l', 232, 0, { x: 0, y: 1 }],
              ],
            },
          ]),
        ),
        Ù: ut(
          712,
          250,
          355,
          0,
          0,
          -0.5,
          -0.5,
          JSON.parse(JSON.stringify(Pt)).concat(qt(-20, 1)),
        ),
        Ú: ut(
          712,
          250,
          355,
          0,
          0,
          -0.5,
          -0.5,
          JSON.parse(JSON.stringify(Pt)).concat(Xt(-20, 1)),
        ),
        Û: ut(
          712,
          250,
          355,
          0,
          0,
          -0.5,
          -0.5,
          JSON.parse(JSON.stringify(Pt)).concat(Bt(-20, 1)),
        ),
        Ŭ: ut(
          712,
          250,
          355,
          0,
          0,
          -0.5,
          -0.5,
          JSON.parse(JSON.stringify(Pt)).concat(Qt(69, -107)),
        ),
        Ü: ut(
          712,
          250,
          355,
          0,
          0,
          -0.5,
          -0.5,
          JSON.parse(JSON.stringify(Pt)).concat(Kt(-20, 1)),
        ),
        ù: ut(
          520,
          182,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Ct)).concat(qt(-54, 109)),
        ),
        ú: ut(
          520,
          182,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Ct)).concat(Xt(-54, 109)),
        ),
        û: ut(
          520,
          182,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Ct)).concat(Bt(-54, 109)),
        ),
        ŭ: ut(
          520,
          182,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Ct)).concat(Qt(34, 0)),
        ),
        ü: ut(
          520,
          182,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Ct)).concat(Kt(-54, 109)),
        ),
        Ý: ut(
          673,
          270,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(kt)).concat(Xt(-10, 0)),
        ),
        ý: ut(
          500,
          225.5,
          331.5,
          10,
          10,
          -119,
          -119,
          JSON.parse(JSON.stringify(Lt)).concat(Xt(-30, -20)),
        ),
        ÿ: ut(
          500,
          225.5,
          331.5,
          10,
          10,
          -119,
          -119,
          JSON.parse(JSON.stringify(Lt)).concat(Kt(-30, -20)),
        ),
        Ĉ: ut(
          700,
          293.1,
          360,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(gt)).concat(Bt(20, 4)),
        ),
        Ĝ: ut(
          840,
          352,
          360,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(mt)).concat(Bt(30, 4)),
        ),
        Ĥ: ut(
          684,
          232,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(St)).concat(Bt(-29, 0)),
        ),
        Ĵ: ut(
          472,
          172.5,
          355.5,
          10,
          20,
          -2,
          -2,
          JSON.parse(JSON.stringify(Ot)).concat(Bt(-50, 0)),
        ),
        Ŝ: ut(
          560,
          224,
          360,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(wt)).concat(Bt(-30, 4)),
        ),
        ĉ: ut(
          520,
          212.1,
          233.1,
          2,
          -10,
          -64,
          -64,
          JSON.parse(JSON.stringify(Tt)).concat(Bt(-29, -14)),
        ),
        ĝ: ut(
          600,
          232,
          338,
          10,
          2,
          -117,
          -117,
          JSON.parse(JSON.stringify(Rt)).concat(Bt(-29, -15)),
        ),
        ĥ: ut(
          520,
          182,
          352,
          0,
          0,
          0,
          0,
          JSON.parse(JSON.stringify(Ft)).concat(Bt(-52, 9)),
        ),
        ĵ: ut(
          220,
          115.9,
          352,
          -60,
          -60,
          0,
          0,
          JSON.parse(JSON.stringify(Yt)).concat(Bt(-155, 109)),
        ),
        ŝ: ut(
          400,
          143.808,
          231.12,
          0,
          0,
          -64,
          -64,
          JSON.parse(JSON.stringify(Gt)).concat(Bt(-73, -15)),
        ),
      },
      $t = Object.assign({}, Wt, zt, At, Et, Zt);
    function tr(t) {
      var r = $t[t] || $t[ht];
      return (r.v = t), r;
    }
    function rr(t, r, e, i) {
      var n;
      return (
        (n =
          t.indexOf('\n') > 0
            ? t.split('\n')
            : t.indexOf('\\n') > 0
            ? t.split('\\n')
            : [t]),
        0 == e
          ? (function(t) {
              var r,
                e = [],
                i = t.length;
              for (r = 0; r < i; r++) e[r] = t[r].split('');
              return e;
            })(n)
          : i
          ? (function(t, r, e) {
              var i,
                n,
                a,
                s,
                o,
                l,
                f,
                y,
                h = 0,
                c = 0,
                u = [];
              for (a = t.length, n = 0; n < a; n++) {
                for (
                  f = t[n], h = 0, 0, u[c] = [], o = f.length, s = 0;
                  s < o;
                  s++
                )
                  (y = f[s]),
                    (i = tr(y)),
                    (l = v(i, r)),
                    (h += l.w),
                    u[c].push(y),
                    h >= e && ((c += 1), (h = l.w), (u[c] = []));
                c += 1;
              }
              var d = [];
              for (a = u.length, n = 0; n < a; n++)
                (i = u[n]).length > 0 &&
                  (' ' == i[0] && i.shift(),
                  ' ' == i[i.length - 1] && i.pop(),
                  i.length > 0 && d.push(i));
              return d;
            })(n, r, e)
          : (function(t, r, e) {
              var i,
                n,
                a,
                s,
                o,
                l,
                f,
                y,
                h,
                c,
                u = 0,
                d = 0,
                p = 0,
                x = [];
              for (y = t.length, o = 0; o < y; o++) {
                for (
                  i = t[o].split(' '), x[p] = [], h = i.length, l = 0;
                  l < h;
                  l++
                ) {
                  for (d = 0, n = i[l], c = n.length, f = 0; f < c; f++)
                    (a = tr(n[f])), (s = v(a, r)), (d += s.w);
                  (a = tr(' ')),
                    (s = v(a, r)),
                    (d += s.w),
                    (u += d) > e && ((u = d), (x[(p += 1)] = [])),
                    x[p].push(n);
                }
                (p += 1), (u = 0);
              }
              y = x.length;
              var g = [];
              for (o = 0; o < y; o++)
                (a = x[o].join(' ').split('')).length > 0 && g.push(a);
              return g;
            })(n, r, e)
      );
    }
    function er(t, r) {
      return { c: (t - r) / 2, r: t - r, l: 0 };
    }
    function ir(t, r) {
      for (var e = 0; e < r.length; e++) {
        var i = r[e];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    var nr = (function() {
      function t() {
        !(function(t, r) {
          if (!(t instanceof r))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.lineWidth_ = 1),
          (this.drawing_ = []),
          (this.data_ = null),
          (this.paths_ = null),
          (this.lines_ = null),
          (this.rect_ = { x: 0, y: 0, w: 0, h: 0 }),
          (this.align_ = 'left'),
          (this.scale_ = 1),
          (this.fontRatio_ = 1);
      }
      var r, e, i;
      return (
        (r = t),
        (e = [
          {
            key: 'position',
            value: function(t, r) {
              return (
                (this.rect_.x != t || this.rect_.y != r) &&
                ((this.rect_.x = t), (this.rect_.y = r), this.setPosition(), !0)
              );
            },
          },
          {
            key: 'setPosition',
            value: function() {
              var t,
                r,
                e,
                i,
                n = this.data_.length;
              for (t = 0; t < n; t++)
                ((r = this.data_[t]).rect.x =
                  r.originPos.x +
                  this.rect_.x +
                  ((e = this.align_),
                  (i = r.alignGapX),
                  'center' == e ? i.c : 'right' == e ? i.r : i.l)),
                  (r.rect.y = r.originPos.y + this.rect_.y);
            },
          },
          {
            key: 'updateDrawingPaths',
            value: function() {
              var t,
                r,
                e = this.data_.length;
              for (t = 0; t < e; t++)
                (r = this.data_[t]).drawingPaths = S(rt(this, r, -1, !1), r);
            },
          },
          {
            key: 'updatePatternPaths',
            value: function(t) {
              var r,
                e,
                i = this.data_.length;
              for (r = 0; r < i; r++)
                (e = this.data_[r]).rawPaths = rt(this, e, t, !0);
            },
          },
          {
            key: 'updateWavePaths',
            value: function(t) {
              var r,
                e,
                i = this.data_.length;
              for (r = 0; r < i; r++)
                (e = this.data_[r]).rawWavePaths = rt(this, e, t, !1);
            },
          },
          {
            key: 'updateGuide',
            value: function() {
              var t,
                r,
                e = this.data_.length;
              for (t = 0; t < e; t++)
                ((r = this.data_[t]).guide = Q(r.typo, this.scale)),
                  (r.grid = U(r.typo, this.scale));
            },
          },
          {
            key: 'update',
            value: function(t, r, e, i, n, a, u) {
              var d = (function(t) {
                  return ((f - o) / (l - o)) * (t - o) + o;
                })(i),
                p = (function(t) {
                  return (1 / (y - o)) * (t - o);
                })(d),
                b = (function(t) {
                  return (54 / (y - o)) * (t - o) + 4;
                })(d),
                m = (function(t) {
                  return t / s;
                })(n),
                S = (function(t, r) {
                  return 50 * t * r;
                })(a, m),
                _ = (function(t, r) {
                  return 50 * t * r;
                })(u, m),
                O = (function(t) {
                  return (c - h) * t + h;
                })(p);
              (this.fontRatio_ = O),
                (this.scale_ = m),
                (this.lineWidth_ = (function(t, r) {
                  var e = t * r;
                  return e < 1 && (e = 1), e;
                })(d, m));
              var J,
                N,
                w,
                P,
                k,
                W,
                D,
                T,
                I,
                R = rr(t, m, r, e),
                M = R.length,
                j = M - 1,
                G = 0,
                C = 0,
                L = 0,
                z = 0,
                A = 0,
                E = 0,
                q = [];
              for (J = 0; J < M; J++) {
                for (
                  P = (w = (k = R[J]).length) - 1,
                    G = 0,
                    L = 0,
                    q[J] = { tw: 0, arr: [] },
                    N = 0;
                  N < w;
                  N++
                )
                  (G += (T = v((W = tr((D = k[N]))), m)).w),
                    (C = T.h),
                    N < P && (G += S),
                    J < j && (C += _),
                    (T.x = L),
                    (T.y = z),
                    (I = { x: L, y: z }),
                    (q[J].arr[N] = {
                      str: D,
                      typo: W,
                      rect: T,
                      originPos: I,
                      center: x(T.w, T.h, m),
                      range: g(W, p, b),
                    }),
                    (L = G);
                (z += C), (q[J].tw = G), (A = Math.max(A, G)), (E += C);
              }
              (this.rect_.w = A), (this.rect_.h = E), (this.drawing_ = []);
              for (var X, B, H = [], K = 0, Q = q; K < Q.length; K++) {
                var U = Q[K];
                X = er(A, U.tw);
                var V = !0,
                  Y = !1,
                  Z = void 0;
                try {
                  for (
                    var $, tt = U.arr[Symbol.iterator]();
                    !(V = ($ = tt.next()).done);
                    V = !0
                  ) {
                    var rt = $.value;
                    (rt.alignGapX = X),
                      (rt.pointsLength = F(rt, this)),
                      H.push(rt),
                      (B = { value: 1 }),
                      this.drawing_.push(B),
                      (rt.drawing = B);
                    var et = !0,
                      it = !1,
                      nt = void 0;
                    try {
                      for (
                        var at, st = rt.typo.p[Symbol.iterator]();
                        !(et = (at = st.next()).done);
                        et = !0
                      ) {
                        var ot = at.value;
                        ot.cv = [];
                        var lt = !0,
                          ft = !1,
                          yt = void 0;
                        try {
                          for (
                            var ht, ct = ot.v[Symbol.iterator]();
                            !(lt = (ht = ct.next()).done);
                            lt = !0
                          ) {
                            var ut = ht.value;
                            ot.cv.push(ut.convert(rt, this));
                          }
                        } catch (t) {
                          (ft = !0), (yt = t);
                        } finally {
                          try {
                            lt || null == ct.return || ct.return();
                          } finally {
                            if (ft) throw yt;
                          }
                        }
                      }
                    } catch (t) {
                      (it = !0), (nt = t);
                    } finally {
                      try {
                        et || null == st.return || st.return();
                      } finally {
                        if (it) throw nt;
                      }
                    }
                  }
                } catch (t) {
                  (Y = !0), (Z = t);
                } finally {
                  try {
                    V || null == tt.return || tt.return();
                  } finally {
                    if (Y) throw Z;
                  }
                }
              }
              (this.data_ = H), this.setPosition();
            },
          },
          {
            key: 'updatePathsForRect',
            value: function() {
              var t,
                r,
                e = this.data_.length,
                i = [];
              for (t = 0; t < e; t++)
                (r = this.data_[t]).rawWavePaths &&
                  (r.wavePaths = S(r.rawWavePaths, r)),
                  r.rawPaths &&
                    ((r.paths = S(r.rawPaths, r)),
                    Array.prototype.push.apply(i, r.paths));
              this.paths_ = i;
            },
          },
          {
            key: 'updateLinesForRect',
            value: function() {
              var t,
                r,
                e = this.data_.length;
              for (t = 0; t < e; t++) (r = this.data_[t]).lines = m(r);
            },
          },
          {
            key: 'reset',
            value: function() {
              (this.lineWidth_ = 1),
                (this.drawing_ = []),
                (this.data_ = null),
                (this.paths_ = null),
                (this.lines_ = null),
                (this.rect_ = { x: 0, y: 0, w: 0, h: 0 }),
                (this.align_ = 'left'),
                (this.scale_ = 1),
                (this.fontRatio_ = 1);
            },
          },
          {
            key: 'data',
            get: function() {
              return this.data_;
            },
          },
          {
            key: 'paths',
            get: function() {
              return this.paths_;
            },
          },
          {
            key: 'lines',
            get: function() {
              return this.lines_;
            },
            set: function(t) {
              this.lines_ = t;
            },
          },
          {
            key: 'lineWidth',
            get: function() {
              return this.lineWidth_;
            },
          },
          {
            key: 'fontRatio',
            get: function() {
              return this.fontRatio_;
            },
          },
          {
            key: 'scale',
            get: function() {
              return this.scale_;
            },
          },
          {
            key: 'rect',
            get: function() {
              return this.rect_;
            },
          },
          {
            key: 'drawing',
            get: function() {
              return this.drawing_;
            },
          },
          {
            key: 'align',
            set: function(t) {
              this.align_ != t && ((this.align_ = t), this.setPosition());
            },
            get: function() {
              return this.align_;
            },
          },
        ]) && ir(r.prototype, e),
        i && ir(r, i),
        t
      );
    })();
    function ar(t) {
      return (ar =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(t) {
              return typeof t;
            }
          : function(t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function sr(t, r) {
      for (var e = 0; e < r.length; e++) {
        var i = r[e];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function or(t, r) {
      return !r || ('object' !== ar(r) && 'function' != typeof r)
        ? (function(t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t;
          })(t)
        : r;
    }
    function lr(t, r, e) {
      return (lr =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(t, r, e) {
              var i = (function(t, r) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, r) &&
                  null !== (t = fr(t));

                );
                return t;
              })(t, r);
              if (i) {
                var n = Object.getOwnPropertyDescriptor(i, r);
                return n.get ? n.get.call(e) : n.value;
              }
            })(t, r, e || t);
    }
    function fr(t) {
      return (fr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function yr(t, r) {
      return (yr =
        Object.setPrototypeOf ||
        function(t, r) {
          return (t.__proto__ = r), t;
        })(t, r);
    }
    /*!
     * VERSION: 1.6.1
     * DATE: 2019-09-05
     * https://leon-sans.com
     *
     * @license Copyright (c) 2019, Jongmin Kim. All rights reserved.
     **/ e.d(r, 'default', function() {
      return hr;
    });
    var hr = (function(t) {
      function r() {
        var t,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = e.text,
          n = void 0 === i ? '' : i,
          a = e.size,
          s = void 0 === a ? 500 : a,
          l = e.weight,
          f = void 0 === l ? o : l,
          y = e.color,
          h = void 0 === y ? ['#000000'] : y,
          c = e.colorful,
          u =
            void 0 === c
              ? [
                  '#c5d73f',
                  '#9d529c',
                  '#49a9db',
                  '#fec330',
                  '#5eb96e',
                  '#fc5356',
                  '#f38f31',
                ]
              : c,
          d = e.tracking,
          p = void 0 === d ? 0 : d,
          v = e.leading,
          x = void 0 === v ? 0 : v,
          g = e.align,
          b = void 0 === g ? 'left' : g,
          m = e.pathGap,
          S = void 0 === m ? 0.5 : m,
          _ = e.amplitude,
          O = void 0 === _ ? 0.5 : _,
          J = e.width,
          N = void 0 === J ? 0 : J,
          w = e.breakWord,
          P = void 0 !== w && w,
          k = e.fps,
          W = void 0 === k ? 30 : k,
          D = e.isPath,
          T = void 0 !== D && D,
          I = e.isWave,
          R = void 0 !== I && I;
        return (
          (function(t, r) {
            if (!(t instanceof r))
              throw new TypeError('Cannot call a class as a function');
          })(this, r),
          ((t = or(this, fr(r).call(this))).size_ = s),
          (t.weight_ = f),
          (t.color_ = h),
          (t.colorful_ = (function(t) {
            for (var r, e, i = t.slice(), n = i.length, a = n; a--; )
              (r = (Math.random() * n) | 0),
                (e = i[a]),
                (i[a] = i[r]),
                (i[r] = e);
            return i;
          })(u)),
          (t.tracking_ = p),
          (t.leading_ = x),
          (t.pathGap_ = S),
          (t.amplitude_ = O),
          (t.width_ = N),
          (t.breakWord_ = P),
          (t.fps_ = W),
          (t.fpsTime_ = 1e3 / t.fps_),
          (t.isPath_ = T),
          (t.isWave_ = R),
          (t.model = new nr()),
          (t.str_ = null),
          (t.time_ = null),
          (t.isFps_ = !1),
          (t.isForceRander_ = !1),
          (t.updateID_ = 0),
          (t.dPathsID_ = null),
          (t.pPathsID_ = null),
          (t.wPathsID_ = null),
          (t.guideID_ = null),
          (t.text = n),
          (t.model.align = b),
          t
        );
      }
      var e, i, n;
      return (
        (function(t, r) {
          if ('function' != typeof r && null !== r)
            throw new TypeError(
              'Super expression must either be null or a function',
            );
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && yr(t, r);
        })(r, a),
        (e = r),
        (i = [
          {
            key: 'on',
            value: function(t, e) {
              lr(fr(r.prototype), 'on', this).call(this, t, e), this.update();
            },
          },
          {
            key: 'off',
            value: function(t, e) {
              lr(fr(r.prototype), 'off', this).call(this, t, e);
            },
          },
          {
            key: 'position',
            value: function() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              this.model.position(t, r) &&
                (this.updateID_++, this.updateSignal());
            },
          },
          {
            key: 'update',
            value: function() {
              this.updateID_++,
                this.model.update(
                  this.str_,
                  this.width_,
                  this.breakWord_,
                  this.weight_,
                  this.size_,
                  this.tracking_,
                  this.leading_,
                ),
                this.isPath_ || this.isWave_
                  ? (this.updatePatternPaths(), this.updateWavePaths())
                  : this.updateSignal();
            },
          },
          {
            key: 'updateGuide',
            value: function() {
              this.guideID_ != this.updateID_ &&
                ((this.guideID_ = this.updateID_), this.model.updateGuide());
            },
          },
          {
            key: 'updateDrawingPaths',
            value: function() {
              this.dPathsID_ != this.updateID_ &&
                ((this.dPathsID_ = this.updateID_),
                this.model.updateDrawingPaths());
            },
          },
          {
            key: 'updatePatternPaths',
            value: function(t) {
              this.isPath_ &&
                (t || this.pPathsID_ != this.updateID_) &&
                ((this.pPathsID_ = this.updateID_),
                this.model.updatePatternPaths(this.pathGap_),
                (this.isForceRander_ = !0),
                this.updateSignal());
            },
          },
          {
            key: 'updateWavePaths',
            value: function(t) {
              this.isWave_ &&
                (t || this.wPathsID_ != this.updateID_) &&
                ((this.wPathsID_ = this.updateID_),
                this.model.updateWavePaths(this.pathGap_),
                (this.isForceRander_ = !0),
                this.updateSignal());
            },
          },
          {
            key: 'updateSignal',
            value: function() {
              this.model.updateLinesForRect(),
                this.model.updatePathsForRect(),
                this.dispatch('update', this.model);
            },
          },
          {
            key: 'reset',
            value: function() {
              (this.size_ = 500),
                (this.weight_ = o),
                (this.color_ = ['#000000']),
                (this.tracking_ = 0),
                (this.leading_ = 0),
                (this.pathGap_ = 0.5),
                (this.amplitude_ = 0.5),
                (this.width_ = 0),
                (this.breakWord_ = !1),
                (this.fps_ = 30),
                (this.fpsTime_ = 1e3 / this.fps_),
                (this.isPath_ = !1),
                (this.isWave_ = !1),
                (this.str_ = null),
                (this.time_ = null),
                (this.isFps_ = !1),
                (this.isForceRander_ = !1),
                (this.updateID_ = 0),
                (this.dPathsID_ = null),
                (this.pPathsID_ = null),
                (this.wPathsID_ = null),
                (this.guideID_ = null),
                this.model.reset();
            },
          },
          {
            key: 'dispose',
            value: function() {
              this.reset(), (this.model = null);
            },
          },
          {
            key: 'drawPixi',
            value: function(t) {
              var r,
                e,
                i,
                n = this.model.data.length;
              for (r = 0; r < n; r++)
                (e = this.model.data[r]),
                  (i = K(r, 0, this.color_)),
                  X(t, e, this.lineWidth, i);
            },
          },
          {
            key: 'draw',
            value: function(t) {
              t.lineWidth = this.lineWidth;
              var r,
                e,
                i = this.model.data.length;
              for (r = 0; r < i; r++)
                R(t, r, (e = this.model.data[r]), this.color_), _(t, e);
            },
          },
          {
            key: 'drawColorful',
            value: function(t) {
              (t.lineWidth = this.lineWidth),
                (function(t, r, e) {
                  (z = -1), (L = (P = e).length);
                  var i,
                    n,
                    a,
                    s,
                    o,
                    l,
                    f,
                    y,
                    h,
                    c,
                    u = r.data.length;
                  for (i = 0; i < u; i++)
                    for (
                      y = (n = r.data[i]).pointsLength.max,
                        c = 0,
                        s = n.lines.length,
                        f = null,
                        a = 0;
                      a < s;
                      a++
                    )
                      'a' == (l = (o = n.lines[a]).pos).type
                        ? (E(t),
                          t.beginPath(),
                          t.arc(l.x, l.y, l.radius * n.drawing.value, 0, p),
                          t.fill(),
                          t.closePath())
                        : 'm' == l.type
                        ? (f = l)
                        : 'l' == l.type
                        ? ((h = C(f.x, f.y, l.x, l.y)) / r.scale > A &&
                            (E(t),
                            t.beginPath(),
                            f && t.moveTo(f.x, f.y),
                            t.lineTo(l.x, l.y),
                            (c += q(t, o, h, y, n, c))),
                          (f = l))
                        : 'b' == l.type &&
                          ((h = j(f.x, f.y, l.x, l.y, l.x2, l.y2, l.x3, l.y3)) /
                            r.scale >
                            A &&
                            (E(t),
                            t.beginPath(),
                            f && t.moveTo(f.x, f.y),
                            t.bezierCurveTo(l.x, l.y, l.x2, l.y2, l.x3, l.y3),
                            (c += q(t, o, h, y, n, c))),
                          (f = { x: l.x3, y: l.y3 }));
                })(t, this.model, this.colorful_);
            },
          },
          {
            key: 'wave',
            value: function(t, r) {
              (t.lineWidth = this.lineWidth),
                r &&
                  (this.time_ || (this.time_ = r),
                  r - this.time_ > this.fpsTime_ || this.isForceRander_
                    ? ((this.time_ = r), (this.isFps_ = !0))
                    : (this.isFps_ = !1)),
                (this.isForceRander_ = !1);
              var e,
                i,
                n = this.model.data.length;
              for (e = 0; e < n; e++)
                R(t, e, (i = this.model.data[e]), this.color_),
                  T(
                    t,
                    i,
                    this.model.scale,
                    this.amplitude_,
                    this.weight_,
                    this.isFps_,
                  );
            },
          },
          {
            key: 'pattern',
            value: function(t, r, e) {
              var i,
                n = r * this.model.scale,
                a = e * this.model.scale,
                s = this.model.data.length;
              for (i = 0; i < s; i++) I(t, this.model.data[i], n, a);
            },
          },
          {
            key: 'grid',
            value: function(t) {
              this.updateGuide();
              var r,
                e = this.model.data.length;
              for (r = 0; r < e; r++) w(t, this.model.data[r]);
            },
          },
          {
            key: 'point',
            value: function(t) {
              var r,
                e = this.model.data.length;
              for (r = 0; r < e; r++) O(t, this.model.data[r]);
            },
          },
          {
            key: 'box',
            value: function(t) {
              (t.lineWidth = 1),
                t.beginPath(),
                (t.strokeStyle = '#0b90dc'),
                t.rect(
                  this.model.rect.x,
                  this.model.rect.y,
                  this.model.rect.w,
                  this.model.rect.h,
                ),
                t.stroke();
            },
          },
          {
            key: 'text',
            get: function() {
              return this.str_;
            },
            set: function(t) {
              this.str_ != t && ((this.str_ = t), this.update());
            },
          },
          {
            key: 'size',
            get: function() {
              return this.size_;
            },
            set: function(t) {
              this.size_ != t &&
                ((this.size_ = t), this.update(), (this.isForceRander_ = !0));
            },
          },
          {
            key: 'weight',
            get: function() {
              return this.weight_;
            },
            set: function(t) {
              t < o ? (t = o) : t > l && (t = l),
                this.weight_ != t &&
                  ((this.weight_ = t),
                  this.update(),
                  (this.isForceRander_ = !0));
            },
          },
          {
            key: 'color',
            get: function() {
              return this.color_;
            },
            set: function(t) {
              this.color_ != t && (this.color_ = t);
            },
          },
          {
            key: 'tracking',
            get: function() {
              return this.tracking_;
            },
            set: function(t) {
              this.tracking_ != t &&
                ((this.tracking_ = t),
                this.update(),
                (this.isForceRander_ = !0));
            },
          },
          {
            key: 'leading',
            get: function() {
              return this.leading_;
            },
            set: function(t) {
              this.leading_ != t &&
                ((this.leading_ = t),
                this.update(),
                (this.isForceRander_ = !0));
            },
          },
          {
            key: 'align',
            get: function() {
              return this.model.align;
            },
            set: function(t) {
              this.model.align != t &&
                ((this.model.align = t), this.updateID_++, this.updateSignal());
            },
          },
          {
            key: 'pathGap',
            get: function() {
              return this.pathGap_;
            },
            set: function(t) {
              this.pathGap_ != t &&
                ((this.pathGap_ = t),
                this.updatePatternPaths(!0),
                this.updateWavePaths(!0),
                (this.isForceRander_ = !0));
            },
          },
          {
            key: 'amplitude',
            get: function() {
              return this.amplitude_;
            },
            set: function(t) {
              this.amplitude_ = t;
            },
          },
          {
            key: 'rect',
            get: function() {
              return this.model.rect;
            },
          },
          {
            key: 'maxWidth',
            set: function(t) {
              this.width_ != t && ((this.width_ = t), this.update());
            },
            get: function() {
              return this.width_;
            },
          },
          {
            key: 'breakWord',
            set: function(t) {
              this.breakWord_ != t && ((this.breakWord_ = t), this.update());
            },
            get: function() {
              return this.breakWord_;
            },
          },
          {
            key: 'isPath',
            get: function() {
              return this.isPath_;
            },
            set: function(t) {
              (this.isPath_ = t), this.updatePatternPaths(!0);
            },
          },
          {
            key: 'isWave',
            get: function() {
              return this.isWave_;
            },
            set: function(t) {
              (this.isWave_ = t), this.updateWavePaths(!0);
            },
          },
          {
            key: 'fps',
            get: function() {
              return this.fps_;
            },
            set: function(t) {
              (this.fps_ = t), (this.fpsTime_ = 1e3 / this.fps_);
            },
          },
          {
            key: 'lineWidth',
            get: function() {
              return this.model.lineWidth;
            },
          },
          {
            key: 'scale',
            get: function() {
              return this.model.scale;
            },
          },
          {
            key: 'drawing',
            get: function() {
              return this.model.drawing;
            },
          },
          {
            key: 'data',
            get: function() {
              return this.model.data;
            },
          },
          {
            key: 'paths',
            get: function() {
              return this.model.paths;
            },
          },
          {
            key: 'drawingPaths',
            get: function() {
              return this.model.drawingPaths;
            },
          },
          {
            key: 'wavePaths',
            get: function() {
              return this.model.wavePaths;
            },
          },
        ]) && sr(e.prototype, i),
        n && sr(e, n),
        r
      );
    })();
  },
]);
