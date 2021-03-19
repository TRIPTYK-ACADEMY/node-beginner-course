/**
 * Faites un programme qui lit 'cat.png' et la tourne de 180 degrés et lui applique une dimension de 200 pixels.
 * Sauvegardez ensuite l'image sous 'cat.png'
 */

const { Image } = require('image-js');

const execute = async () => {
    let image = await Image.load('cat.jpg');
    let grey = image
        .resize({ width: 200 }) 
        .rotate(180); 
    await grey.save('cat.png');
}

execute().catch(console.error);
