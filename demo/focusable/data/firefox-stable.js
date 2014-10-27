define(function defineDemoFocusableFirefox(require) {
  'use strict';

  // The contents of this file have been collected by running focusable/index.html

  return {
    "platform": {
      "description": "Firefox 33.0 on OS X 10.8",
      "layout": "Gecko",
      "manufacturer": null,
      "name": "Firefox",
      "prerelease": null,
      "product": null,
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:33.0) Gecko/20100101 Firefox/33.0",
      "version": "33.0",
      "os": {
        "architecture": 32,
        "family": "OS X",
        "version": "10.8"
      }
    },
    "focusable": [
      "BODY",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=radio]",
      "select",
      "textarea",
      "button[type=button]",
      "input[type=text]",
      "via(label[for=\"label-target\"]): input[type=text]",
      "a[href]",
      "a[href=\"\"]",
      "a:has([ismap])",
      "audio[controls]",
      "video",
      "video[controls]",
      "embed",
      "keygen",
      "[contenteditable]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=\"\"]",
      "[tabindex=hello]",
      "[tabindex=3 ]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tr td a",
      "table tr{collapse} td a{visible}"
    ],
    "tabOrder": [
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=radio]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "audio[controls]",
      "video",
      "video[controls]",
      "keygen",
      "svg a[xlink|href]",
      "[contenteditable]",
      "[tabindex=0]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tr td a",
      "table tr{collapse} td a{visible}"
    ],
    "a11y": {
      "focusable": [
        "BODY",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=radio]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "a:has([ismap])",
        "iframe",
        "embed",
        "keygen",
        "svg a[xlink|href]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=hello]",
        "[tabindex=3 ]",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tr td a",
        "table tr{collapse} td a{visible}"
      ],
      "tabOrder": null
    },
    "jquery": {
      "focusable": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=radio]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "a:has([ismap])",
        "object",
        "object[usemap]",
        "keygen",
        "svg a[xlink|href]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "table tr td a",
        "table tr{collapse} td a",
        "table tr{collapse} td a{visible}"
      ],
      "tabOrder": null
    }
  };
});