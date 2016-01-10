A responsive grid
====

## Usage
Load grid.css or grid.min.css from dist folder in your HTML. Then update your HTML by adding class "grid" to your wrapper element and "grid__cell" to elements that you want to act as grid cells. To set number of grid columns for different resolutions add classes in format "grid--[resolution]_[columnCount]" (for example grid--768_3) to .grid wrapper. Supported breakpoints are 320, 480, 768, 1024, and 1280 and columns count can vary from two to six. Feel free to update css or sass file to support other breakpoints/column counts.

##Demo
Resize browser window to see how demo grid works, view source to see how markup is setup:

http://smohadjer.github.io/grid/demo/demo.html
