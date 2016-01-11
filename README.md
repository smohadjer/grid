Responsive CSS grid
====

## Usage
Load "grid.css" or "grid.min.css" from dist folder in your HTML or past below CDN link: 

```html
<link href="https://rawgit.com/smohadjer/grid/master/dist/grid.min.css" />
```

Then update your HTML by adding class "grid" to your wrapper element and "grid__cell" to elements that you want to act as grid cells. To set number of grid columns for different resolutions add classes using syntax "grid--[resolution]_[columnCount]" (grid--768_2, grid--1024_3, and so on) to .grid wrapper.

## Supported breakpoints and columns count
Supported breakpoints: 320, 480, 600, 768, 1024, 1280

Supported layout: 2 to 6 columns

##Demo
Resize browser window to see how demo grid works, view source to see how markup is setup:

http://smohadjer.github.io/grid/demo/demo.html
