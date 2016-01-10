A responsive grid
====

## How to use?
Load grid.css (in dist folder) or use bower to install it. Then update your markup by adding class "grid" to your wrapper element and "grid__cell" to elements that you want to act as grid cells. To set number of grid columns for different resolutions add classes in format "grid--[resolution]_[columnCount]" (for example grid--768_3) to .grid wrapper. Supported breakpoints are 320, 480, 768, 1024, and 1280 and columns count can be between 2 and 6. Feel free to update css or sass file to support other breakpoints and column counts.

##Demo
Resize browser window to see how demo grid works, view source to see how markup is setup:

http://smohadjer.github.io/grid/demo/demo.html
