# @ahmerhh/geometry-plane

Plane geometry, extracted from three.js

## Installation

```
$ npm install --save @ahmerhh/geometry-plane
```

## Usage

```js
import getPlaneGeometry from '@ahmerhh/geometry-plane';

const { verts, uvs, faces } = getPlaneGeometry(1, 1, 2, 2);

// create buffers
```

## API

#### `geo = getPlaneGeometry(w, h, dx, dy)`

Returns a new geometry with:
- `verts` is an float32 array of coordinates (by group of 3).
- `uvs` is an float32 array of uvs (by group of 2).
- `faces` is an uint16/32 array of the faces.

and where:
- `w` is the width of the plane (default is 1).
- `h` is the height of the plane (default is 1).
- `dx` is the number of divisions on the width (default is 1).
- `dy` is the number of divisions on the height (default is 1).

## License

MIT, see [LICENSE.md](https://github.com/ahmerhh/geometry-plane/blob/master/LICENSE.md) for more details.

## Credits

Thanks to [three.js](http://threejs.org/) for the code.