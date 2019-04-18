function multiply(n, o) {
    let prefix = /^\-/.test(n) + /^\-/.test(o) === 1 ? '-' : '';
    let dotIndex = (n.indexOf('.') === -1 ? 0 : (n.length - n.indexOf('.') - 1)) + (o.indexOf('.') === -1 ? 0 : (o.length - o.indexOf('.') - 1));
    o = o.replace(/\-|\./g, '').split('').reverse();
    n = n.replace(/\-|\./g, '').split('').reverse();
    const resArr = [];
    for (let i = 0; i < o.length; i++) {
        for (let j = 0; j < n.length; j++) {
            resArr[i + j] ? resArr[i + j] += o[i] * n[j] : resArr[i + j] = o[i] * n[j];
            resArr[i + j + 1] = Math.floor(resArr[i + j] / 10) + (resArr[i + j + 1] || 0);
            resArr[i + j] = resArr[i + j] % 10;
        }
    }
    let res = resArr.reverse();
    if (dotIndex) res.splice(res.length - dotIndex, 0, '.');
    res = res.join('').replace(/\.(\d*[1-9])?(0+)$/, '.$1').replace(/\.$|^0+/g, '').replace(/^\./, '0.');
    return (res === '0' || !res) ? '0' : prefix + res;
}

// =========================================

const multiply = (x, y) => {
    const [a, b] = [x, y].map(s => s.match(/(\-?)([0-9]+)\.?([0-9]*)$/));

    const m = a[3].length + b[3].length;
    let res = multiplySimple(a[2] + a[3], b[2] + b[3]);

    const zeros = '0'.repeat(Math.max(0, m - res.length));
    if (m) res = (zeros + res).substr(0, res.length - m) + '.' + (zeros + res).substr(-m);
    const r = (a[1] + b[1]).replace(/\-\-/, '') +
        (res.replace(/\.([0-9]*?)0*$/, '.$1').replace(/\.$/, '').replace(/^\./, '0.') || '0');
    return r === '-0' ? '0' : r;
}

const multiplySimple = (a, b) => {
    return a.split('').reduceRight((sum, d, i, arr) => {
        return sumStrings(mul(b, +d) + '0'.repeat(arr.length - i - 1), sum);
    }, '0');
}

const mul = (str, d) => {
    return d.toString(2).split``.reduceRight((obj, b) => {
        let { res, last } = obj;
        if (b == 1) res = sumStrings(res, last);
        last = sumStrings(last, last);
        return { res, last }
    }, { res: '0', last: str }).res;
}

const sumStrings = (x, y) => {
    let a = x.split``.reverse();
    let b = y.split``.reverse();
    let c = 0;
    let r = [];

    for (let i = 0; i < Math.max(a.length, b.length); ++i) {
        let sum = (+a[i] | 0) + (+b[i] | 0) + c;
        if (sum >= 10) {
            r[i] = sum - 10 + '';
            c = 1;
        } else {
            r[i] = sum + '';
            c = 0;
        }
    }
    if (c) r.push('1');
    return r.reverse().join``.replace(/^0*/, '') || '0';
}

// =========================================

function multiply(n, o) {

    var s = '';
    if (n[0] == '-' || o[0] == '-') {
        if (n[0] != o[0]) s = '-';  // sign definition
        if (n[0] == '-') n = n.substring(1);
        if (o[0] == '-') o = o.substring(1);
    }

    var a = n.trim().split('').reverse();
    var b = o.trim().split('').reverse();
    var r = [];

    var d = 0; // decimal places
    if (a.indexOf('.') != -1) { d += a.indexOf('.'); a.splice(a.indexOf('.'), 1); }
    if (b.indexOf('.') != -1) { d += b.indexOf('.'); b.splice(b.indexOf('.'), 1); }

    for (var ai = 0; ai < a.length; ai++) {
        for (var bi = 0; bi < b.length; bi++) {
            var m = a[ai] * b[bi];
            if (!r[ai + bi]) r[ai + bi] = 0;
            r[ai + bi] += m;
            if (r[ai + bi] >= 10) {
                if (!r[ai + bi + 1]) r[ai + bi + 1] = 0;
                r[ai + bi + 1] += Math.floor(r[ai + bi] / 10);
                r[ai + bi] = r[ai + bi] % 10;
            }
        }
    }

    if (d) r.splice(d, 0, '.');
    n = r.reverse().join('');
    n = n.replace(/^0+(?!\.|$)/, ''); // remove leading zeros
    if (d) n = n.replace(/(\.)?0+$/, ''); // remove training zeros
    if (n == 0) return '0';

    return (s + n);

}

// =========================================


function multiply(a, b) {
    let p1 = /\./.test(a) ? a.replace(/^.*\./, '').length : 0;
    let p2 = /\./.test(b) ? b.replace(/^.*\./, '').length : 0;
    let p = p1 + p2;
    a = a.replace(/\./, ''); b = b.replace(/\./, '');
    let s1 = a[0] == '-' ? (a = a.slice(1), 1) : 0;
    let s2 = b[0] == '-' ? (b = b.slice(1), 1) : 0;
    let s = (s1 + s2) % 2;
    a = a.split('');
    b = b.split('');
    let c = Array.from({ length: a.length + b.length - 1 }, (v) => 0);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            c[i + j] += a[i] * b[j];
        }
    }
    for (let i = c.length - 1; i > 0; i--) {
        c[i - 1] += (c[i] / 10 | 0);
        c[i] = c[i] % 10;
    }

    c = c.join('');
    if (p) {
        c = c.slice(0, c.length - p) + '.' + c.slice(c.length - p);
        while (c[c.length - 1] == 0) c = c.slice(0, -1);
    }
    while (c[0] == 0) c = c.slice(1);
    if (c == '' || c == '.') return '0';
    if (c[0] == '.') c = '0' + c;
    if (c[c.length - 1] == '.') c = c.slice(0, -1);
    s ? c = '-' + c : null;
    return c;
}
// =========================================

class BigNumber {
    static toDigitsList(numStr) {
        return numStr
            .replace(/^-/, '') // remove negative mark
            .replace(/\./, '') // fractional separator isn't included to digits list
            .split('')
            .reverse()
            .map(v => parseInt(v))
    }

    static sanitize(numStr) {
        let sanitized = numStr
            .replace(/^(-?)0+(\d+\..+)/, '$1$2') // remove head zeroes in fractional e.g. 00.1 -> 0.1
            .replace(/(\.\d*)([1-9])0+$/, '$1$2') // remove tail zeroes after fractional e.g. 0.100 -> 0.1
            .replace(/\.0*$/g, '') // remove tail zeros e.g. 100.0 -> 100.
            .replace(/\.$/g, '') // remove tail '.' e.g. 100. -> 100

        return sanitized || '0'
    }

    constructor(num) {
        if (num instanceof BigNumber) return num
        if (typeof num === 'number' || num instanceof Number) num = String(num)

        num = BigNumber.sanitize(num)

        this._digits = BigNumber.toDigitsList(num)
        this.isNegative = Boolean(num.match(/^-.*/))
        this.fractionalPosFromEnd = num.includes('.')
            ? num.length - num.indexOf('.') - 1
            : 0
    }

    get length() {
        return this._digits.length
    }

    get equalsZero() {
        return Boolean(this._digits.join('').match(/^0+$/))
    }

    digitAt(index) {
        return this._digits[index]
    }

    multiply(factor) {
        const intermidValues = []

        // multiply each element and write to intermidValues,if intermidValues has a record - add, if not, then overwrite
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < factor.length; j++) {
                const digitsMult = this.digitAt(i) * factor.digitAt(j)

                intermidValues[i + j] = (intermidValues[i + j])
                    ? intermidValues[i + j] + digitsMult
                    : digitsMult;
            }
        }

        // there should be one digit left in the intermidValues cell, and dozens and other orders are transferred to the position above in intermidValues
        for (let i = 0; i < intermidValues.length; i++) {
            const tailDigit = intermidValues[i] % 10
            const carryValue = Math.floor(intermidValues[i] / 10)

            intermidValues[i] = tailDigit

            if (intermidValues[i + 1])
                intermidValues[i + 1] += carryValue;
            else if (carryValue !== 0)
                intermidValues[i + 1] = carryValue;
        }

        const product = new BigNumber(intermidValues.reverse().join(''))

        if (product.equalsZero) return product

        // add fractional if, at least, one of numbers is fractional
        if (this.fractionalPosFromEnd || factor.fractionalPosFromEnd) product.fractionalPosFromEnd =
            (this.fractionalPosFromEnd || 0) + (factor.fractionalPosFromEnd || 0)

        // add zeroes to head if (0 < |value| < 1)
        if (product.fractionalPosFromEnd >= product.length) product._digits.splice(product._digits.length, 0, ...new Array(product.fractionalPosFromEnd - product.length + 1).fill('0'))

        if ((this.isNegative && !factor.isNegative) || (!this.isNegative && factor.isNegative)) product.isNegative = true

        return product
    }

    toString() {
        if (this.equalsZero) return '0'

        let result = ''
        const digits = [...this._digits]
        if (this.fractionalPosFromEnd > 0) digits.splice(this.fractionalPosFromEnd, 0, '.')
        if (this.isNegative) result = result.padStart(1, '-')

        result = result.concat(digits.reverse().join(''))
        result = BigNumber.sanitize(result)

        return result
    }
}

function multiply(n, o) {
    return (new BigNumber(n).multiply(new BigNumber(o))).toString()
}

// =========================================


function multiply(a, b) {
    var asign = a[0] == "-"
    var bsign = b[0] == "-"
    var rSign = asign && !bsign || !asign && bsign ? "-" : ""
    var atokens = [...a.trimLeft("-0").replace(".", "")].reverse()
    var btokens = [...b.trimLeft("-0").replace(".", "")].reverse()
    var result = Array(atokens.length + btokens.length).fill(0)
    var temp = 0
    var alen = atokens.length
    var blen = btokens.length
    for (var i = 0; i < result.length - 1; i++) {
        for (var j = 0; j <= i; j++) {
            if (j < alen && i - j < blen) temp += atokens[j] * btokens[i - j]
        }
        result[i] = temp % 10
        temp = Math.floor(temp / 10)
    }
    result[result.length - 1] = temp
    result = result.reverse()
    var intLen = a.trimLeft("-0").split(".")[0].length + b.trimLeft("-0").split(".")[0].length
    var resL = result.slice(0, intLen).join("").trimLeft("0")
    resL = resL ? rSign + resL : "0"
    var resR = result.slice(intLen).join("").trimRight("0")
    return resR ? resL + "." + resR : resL
}

String.prototype.trimRight = function (charlist) {
    if (charlist === undefined)
        charlist = "\s";
    return this.replace(new RegExp("[" + charlist + "]+$"), "")
}

String.prototype.trimLeft = function (charlist) {
    if (charlist === undefined)
        charlist = "\s";

    return this.replace(new RegExp("^[" + charlist + "]+"), "");
};

// =========================================


BigNumber = function (n, p, r) {
    var o = this, i;
    if (n instanceof BigNumber) {
        for (i in { precision: 0, roundType: 0, _s: 0, _f: 0 }) o[i] = n[i];
        o._d = n._d.slice();
        return;
    }
    o.precision = isNaN(p = Math.abs(p)) ? BigNumber.defaultPrecision : p;
    o.roundType = isNaN(r = Math.abs(r)) ? BigNumber.defaultRoundType : r;
    o._s = (n += "").charAt(0) == "-";
    o._f = ((n = n.replace(/[^\d.]/g, "").split(".", 2))[0] = n[0].replace(/^0+/, "") || "0").length;
    for (i = (n = o._d = (n.join("") || "0").split("")).length; i; n[--i] = +n[i]);
    o.round();
};
with ({ $: BigNumber, o: BigNumber.prototype }) {
    $.ROUND_HALF_EVEN = ($.ROUND_HALF_DOWN = ($.ROUND_HALF_UP = ($.ROUND_FLOOR = ($.ROUND_CEIL = ($.ROUND_DOWN = ($.ROUND_UP = 0) + 1) + 1) + 1) + 1) + 1) + 1;
    $.defaultPrecision = 200;
    $.defaultRoundType = $.ROUND_HALF_UP;
    o.add = function (n) {
        if (this._s != (n = new BigNumber(n))._s)
            return n._s ^= 1, this.subtract(n);
        var o = new BigNumber(this), a = o._d, b = n._d, la = o._f,
            lb = n._f, n = Math.max(la, lb), i, r;
        la != lb && ((lb = la - lb) > 0 ? o._zeroes(b, lb, 1) : o._zeroes(a, -lb, 1));
        i = (la = a.length) == (lb = b.length) ? a.length : ((lb = la - lb) > 0 ? o._zeroes(b, lb) : o._zeroes(a, -lb)).length;
        for (r = 0; i; r = (a[--i] = a[i] + b[i] + r) / 10 >>> 0, a[i] %= 10);
        return r && ++n && a.unshift(r), o._f = n, o.round();
    };
    o.subtract = function (n) {
        if (this._s != (n = new BigNumber(n))._s)
            return n._s ^= 1, this.add(n);
        var o = new BigNumber(this), c = o.abs().compare(n.abs()) + 1, a = c ? o : n, b = c ? n : o, la = a._f, lb = b._f, d = la, i, j;
        a = a._d, b = b._d, la != lb && ((lb = la - lb) > 0 ? o._zeroes(b, lb, 1) : o._zeroes(a, -lb, 1));
        for (i = (la = a.length) == (lb = b.length) ? a.length : ((lb = la - lb) > 0 ? o._zeroes(b, lb) : o._zeroes(a, -lb)).length; i;) {
            if (a[--i] < b[i]) {
                for (j = i; j && !a[--j]; a[j] = 9);
                --a[j], a[i] += 10;
            }
            b[i] = a[i] - b[i];
        }
        return c || (o._s ^= 1), o._f = d, o._d = b, o.round();
    };
    o.multiply = function (n) {
        var o = new BigNumber(this), r = o._d.length >= (n = new BigNumber(n))._d.length, a = (r ? o : n)._d,
            b = (r ? n : o)._d, la = a.length, lb = b.length, x = new BigNumber, i, j, s;
        for (i = lb; i; r && s.unshift(r), x.set(x.add(new BigNumber(s.join("")))))
            for (s = (new Array(lb - --i)).join("0").split(""), r = 0, j = la; j; r += a[--j] * b[i], s.unshift(r % 10), r = (r / 10) >>> 0);
        return o._s = o._s != n._s, o._f = ((r = la + lb - o._f - n._f) >= (j = (o._d = x._d).length) ? this._zeroes(o._d, r - j + 1, 1).length : j) - r, o.round();
    };
    o.divide = function (n) {
        if ((n = new BigNumber(n)) == "0")
            throw new Error("Division by 0");
        else if (this == "0")
            return new BigNumber;
        var o = new BigNumber(this), a = o._d, b = n._d, la = a.length - o._f,
            lb = b.length - n._f, r = new BigNumber, i = 0, j, s, l, f = 1, c = 0, e = 0;
        r._s = o._s != n._s, r.precision = Math.max(o.precision, n.precision),
            r._f = +r._d.pop(), la != lb && o._zeroes(la > lb ? b : a, Math.abs(la - lb));
        n._f = b.length, b = n, b._s = false, b = b.round();
        for (n = new BigNumber; a[0] == "0"; a.shift());
        out:
        do {
            for (l = c = 0, n == "0" && (n._d = [], n._f = 0); i < a.length && n.compare(b) == -1; ++i) {
                (l = i + 1 == a.length, (!f && ++c > 1 || (e = l && n == "0" && a[i] == "0")))
                    && (r._f == r._d.length && ++r._f, r._d.push(0));
                (a[i] == "0" && n == "0") || (n._d.push(a[i]), ++n._f);
                if (e)
                    break out;
                if ((l && n.compare(b) == -1 && (r._f == r._d.length && ++r._f, 1)) || (l = 0))
                    while (r._d.push(0), n._d.push(0), ++n._f, n.compare(b) == -1);
            }
            if (f = 0, n.compare(b) == -1 && !(l = 0))
                while (l ? r._d.push(0) : l = 1, n._d.push(0), ++n._f, n.compare(b) == -1);
            for (s = new BigNumber, j = 0; n.compare(y = s.add(b)) + 1 && ++j; s.set(y));
            n.set(n.subtract(s)), !l && r._f == r._d.length && ++r._f, r._d.push(j);
        }
        while ((i < a.length || n != "0") && (r._d.length - r._f) <= r.precision);
        return r.round();
    };
    o.mod = function (n) {
        return this.subtract(this.divide(n).intPart().multiply(n));
    };
    o.pow = function (n) {
        var o = new BigNumber(this), i;
        if ((n = (new BigNumber(n)).intPart()) == 0) return o.set(1);
        for (i = Math.abs(n); --i; o.set(o.multiply(this)));
        return n < 0 ? o.set((new BigNumber(1)).divide(o)) : o;
    };
    o.set = function (n) {
        return this.constructor(n), this;
    };
    o.compare = function (n) {
        var a = this, la = this._f, b = new BigNumber(n), lb = b._f, r = [-1, 1], i, l;
        if (a._s != b._s)
            return a._s ? -1 : 1;
        if (la != lb)
            return r[(la > lb) ^ a._s];
        for (la = (a = a._d).length, lb = (b = b._d).length, i = -1, l = Math.min(la, lb); ++i < l;)
            if (a[i] != b[i])
                return r[(a[i] > b[i]) ^ a._s];
        return la != lb ? r[(la > lb) ^ a._s] : 0;
    };
    o.negate = function () {
        var n = new BigNumber(this); return n._s ^= 1, n;
    };
    o.abs = function () {
        var n = new BigNumber(this); return n._s = 0, n;
    };
    o.intPart = function () {
        return new BigNumber((this._s ? "-" : "") + (this._d.slice(0, this._f).join("") || "0"));
    };
    o.valueOf = o.toString = function () {
        var o = this;
        return (o._s ? "-" : "") + (o._d.slice(0, o._f).join("") || "0") + (o._f != o._d.length ? "." + o._d.slice(o._f).join("") : "");
    };
    o._zeroes = function (n, l, t) {
        var s = ["push", "unshift"][t || 0];
        for (++l; --l; n[s](0));
        return n;
    };
    o.round = function () {
        if ("_rounding" in this) return this;
        var $ = BigNumber, r = this.roundType, b = this._d, d, p, n, x;
        for (this._rounding = true; this._f > 1 && !b[0]; --this._f, b.shift());
        for (d = this._f, p = this.precision + d, n = b[p]; b.length > d && !b[b.length - 1]; b.pop());
        x = (this._s ? "-" : "") + (p - d ? "0." + this._zeroes([], p - d - 1).join("") : "") + 1;
        if (b.length > p) {
            n && (r == $.DOWN ? false : r == $.UP ? true : r == $.CEIL ? !this._s
                : r == $.FLOOR ? this._s : r == $.HALF_UP ? n >= 5 : r == $.HALF_DOWN ? n > 5
                    : r == $.HALF_EVEN ? n >= 5 && b[p - 1] & 1 : false) && this.add(x);
            b.splice(p, b.length - p);
        }
        return delete this._rounding, this;
    };
}

function multiply(a, b) {
    if (a === "") {
        a = "0";
    } else if (b === "") {
        b = "0";
    };
    if (Number(b) == 0) {
        return '0'
    }
    var result = new BigNumber(a).multiply(b);

    return result.toString();
}
// =========================================
// =========================================
// =========================================
// =========================================
// =========================================