/**
 * Faites un programme qui lit 'cat.png' et la tourne de 180 degrés et lui applique une dimension de 200 pixels.
 * Sauvegardez ensuite l'image sous 'cat.png'
 */

const { Image } = require('image-js');

const execute = async () => {
    let image = await Image.load('cat.jpg');
    let grey = image
        .resize({ width: 200 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
        .rotate(180); // rotate the image clockwise by 30 degrees.
    return grey.save('cat.png');
}

execute().catch(console.error);
