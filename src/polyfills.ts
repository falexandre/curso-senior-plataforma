import "babel-polyfill"; // Run `npm install --save babel-polyfill`.
import "classlist.js"; // Run `npm install --save classlist.js`.
import "core-js/es6/array";
import "core-js/es6/date";
import "core-js/es6/function";
import "core-js/es6/map";
import "core-js/es6/math";
import "core-js/es6/number";
import "core-js/es6/object";
import "core-js/es6/parse-float";
import "core-js/es6/parse-int";
import "core-js/es6/reflect";
import "core-js/es6/regexp";
import "core-js/es6/set";
import "core-js/es6/string";
import "core-js/es6/symbol";
import "core-js/es6/weak-map";
import "core-js/es7/reflect";
import "web-animations-js"; // Run `npm install --save web-animations-js`.
import "zone.js/dist/zone"; // Included with Angular CLI.

if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (obj, proto) => {
    obj.__proto__ = proto;
    return obj;
  };
}

if (!String.prototype.normalize) {
  String.prototype.normalize = function () {
    const translate = {
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        æ: "a",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        ý: "y",
        þ: "b",
        ß: "s",
        ÿ: "y",
        ŕ: "r",
      },
      translate_re = /[àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþßàáâãäåæçèéêëìíîïðñòóôõöøùúûýýþÿŕŕ]/gim;
    return this.replace(translate_re, (match: string) => {
      return translate[match];
    });
  };
}

(window as any).globalThis = window;
