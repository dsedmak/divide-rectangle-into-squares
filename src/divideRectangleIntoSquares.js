function* divideRectangleIntoSquares(rectangle) {

    if (rectangle == null || !("x" in rectangle && "y" in rectangle && "width" in rectangle && "height" in rectangle)) {
        throw new Error("The parameter 'rectangle' should be an object with properties x, y, width and height.");
    }

    if (!Number.isInteger(rectangle.x) || !Number.isInteger(rectangle.y) || !Number.isInteger(rectangle.width) || !Number.isInteger(rectangle.height)) {
        throw new Error("All properties of the rectangle parameter should be integers.")
    }

    rectangle = { ...rectangle }; // copy object to prevent modification of data passed to the function

    while (true) {
        if (rectangle.width < 2 || rectangle.height < 2) {
            return;
        } else if (rectangle.width <= rectangle.height) {
            yield {
                x: rectangle.x,
                y: rectangle.y,
                side: rectangle.width,
            };

            // the new rectangle is below the old one
            rectangle.y += rectangle.width;
            rectangle.height -= rectangle.width;
        } else {
            yield {
                x: rectangle.x,
                y: rectangle.y,
                side: rectangle.height,
            };

            // the new rectangle is to the right of the old one
            rectangle.x += rectangle.height;
            rectangle.width -= rectangle.height;
        }
    }
}

module.exports = divideRectangleIntoSquares;