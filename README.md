# @asymmetrik/ngx-leaflet-tutorial-plugins

> Collection of ngx-leaflet tutorials focused on Leaflet plugin integration


## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)


## Overview

Angular CLI uses Webpack to manage dependency resolution and bundling.
Things can get a little complicated when you mix libraries that use different module systems.
Leaflet is tricky because they recently migrated to using ES6 modules, but historically used an IIFE that exposed the library under the global variable ```L```.
This means that extensions for Leaflet vary in how they package their own modules and require subtly different approaches to integrating with your project.

With most of these examples, there is more than one way to get things working, and I'm no Webpack expert.
So, if there are obvious improvements that can be made, feel free to submit an issue or a pull request.

The following is a list of projects that demonstrate how to integrate specific Leaflet plugins with @asymmetrik/ngx-leaflet and @angular/cli. 

### Leaflet.Coordinates
Demonstrates how to use Leaflet.Coordinates with @asymmetrik/ngx-leaflet and @angular/cli.
[Leaflet.Coordinates on GitHub](https://github.com/MrMufflon/Leaflet.Coordinates).

### Leaflet.Path.Transform
Demonstrates how to use Leaflet.Path.Transform and Leaflet.Path.Drag with @asymmetrik/ngx-leaflet and @angular/cli.
[Leaflet.Path.Transform on GitHub](https://github.com/w8r/Leaflet.Path.Transform).

### Leaflet.TimeDimension
Demonstrates how to use Leaflet.TimeDimension with @asymmetrik/ngx-leaflet and @angular/cli.
[Leaflet.TimeDimension on GitHub](https://github.com/socib/Leaflet.TimeDimension).

### heatmap.js
Demonstrates how to use heatmap.js and the HeatmapOverlay layer with @asymmetrik/ngx-leaflet and @angular/cli.
[heatmap.js on GitHub](https://github.com/pa7/heatmap.js)

## Usage
Clone this repo and then go into each subdirectory for a self-contained @angular/cli project.
See the specific README.md for details.


## Contributing
If you find an issue with the tutorial, feel free to submit an issue.
PRs are welcome and encouraged.


## License
See LICENSE in repository for details.


## Credits
**[Leaflet](http://leafletjs.com/)** Is an awesome mapping package.
