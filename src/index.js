/* import './style/scss.scss'

import image from './images/img.png'


const img = new Image();
img.src = image
const div = document.getElementById('key')

document.body.appendChild(img); */

function timer(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(value ** 2)
        }, 500);
    })
}

async function func() {
    const reuslt = await timer(8)
    console.log(reuslt);
}

func()