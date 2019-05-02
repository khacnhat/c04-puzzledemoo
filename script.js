let image1Name = 'chim1';
function changeImage1() {
    let image = document.getElementById('my-image1');

    if (image1Name === 'chim1') {
        image1Name = 'ho1';
    } else if (image1Name === 'ho1') {
        image1Name = 'hoa1';
    } else if (image1Name === 'hoa1') {
        image1Name = 'chim1';
    }

    image.src = 'images/' + image1Name + '.png';
}
