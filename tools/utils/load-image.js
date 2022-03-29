const {promises: fs} = require('fs');
const sizeOf = require('image-size');
const nodeCanvas = require('canvas');

const SIZE = 1024;
const context = nodeCanvas.createCanvas(SIZE, SIZE).getContext('2d');
const image = new nodeCanvas.Image();

module.exports = async function (fileName) {
    const data = await fs.readFile(fileName, 'base64');
    const dimensions = sizeOf(fileName);

    image.src = `data:image/png;base64,${data}`;
    context.clearRect(0, 0, SIZE, SIZE);
    context.drawImage(image, 0, 0, dimensions.width, dimensions.height);
    const imageData = context.getImageData(
        0,
        0,
        dimensions.width,
        dimensions.height,
    );

    return {
        fileName,
        data: Array.from(imageData.data),
        url: `data:image/png;base64,${data}`,
        width: dimensions.width,
        height: dimensions.height,
    };
}