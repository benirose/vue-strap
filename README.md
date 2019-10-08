# vue2-strap3
Bootstrap 3 components built with Vue.js 2.0.

This repository contains a set of native Vue.js components based on Bootstrap's markup and CSS. As a result no dependency on jQuery or Bootstrap's JavaScript is required. The only required dependencies are:

* [Vue.js](http://vuejs.org/) (required ^v2.x.x, test with v2.0.3).
* [Bootstrap CSS](http://getbootstrap.com/) (required 3.x.x, test with 3.3.6). VueStrap doesn't depend on a very precise version of Bootstrap.

**Note: Because this repo has been forked several times and there are now several version of both Vue _and_ Bootstrap being used in production, this _module_ has been renamed Vue2-Strap3 to reflect the support versions, but the library remains named VueStrap**

## Installation

### NPM

```bash
$ npm install @waytohealth/vue2-strap3 --save
```

### CommonJS
```js
var alert = require('@waytohealth/vue2-strap3/src/alert');
// or
var alert = require('@waytohealth/vue2-strap3').alert;

new Vue({
  components: {
    'alert': alert
  }
})
```

### ES6
```js
import alert from '@waytohealth/vue2-strap3/src/alert'
// or
import { alert } from '@waytohealth/vue2-strap3'

new Vue({
  components: {
    alert
  }
})
```

### AMD
```js
$ bower install vue2-strap3 // not yet sorry!

define(['vue2-strap3'], function(VueStrap) { var alert = VueStrap.alert; ... });
```

### Browser globals
The `dist` folder contains `vue2-strap3.js` and `vue2-strap3.min.js` with all components exported in the <code>window.VueStrap</code> object. ~~These bundles are also available in [CDNJS](https://cdnjs.com/libraries/vue-strap)~~,
and on ~~both the Bower~~ and NPM packages.

```html
<script src="path/to/vue.js"></script>
<script src="path/to/vue2-strap3.js"></script>
<script>
    var vm = new Vue({
        components: {
            alert: VueStrap.alert
        },
        el: "#app",
        data: {
            showRight: false,
            showTop: false
        }
    })
</script>
```

## Docs
See the [documentation](https://waytohealth.github.io/vue2-strap3/) with live editable examples.

## Local Setup
* Run the docs site in development mode with `npm run docs`. This will watch for file changes as you work.
* Build with `npm run build`.

## License
vue2-strap3 is licensed under [The MIT License](LICENSE).
