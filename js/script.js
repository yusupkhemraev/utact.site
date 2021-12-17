const btns = document.querySelectorAll('.con-social-btns .mediaBtn')

    btns.forEach((item) => {
        item.addEventListener('mousemove', (evt) => {
            const x = evt.layerX - 60
            const y = evt.layerY - 60
            const bg = evt.target.querySelector('.bg')
            const i = evt.target.querySelector('i.fa')
            bg.style.transform = `translate(${x / 8}px, ${y / 8}px)`
            i.style.transform = `translate(${x / 4}px, ${y / 4}px)`
        })

        item.addEventListener('mouseenter', (evt) => {
            const bg = evt.target.querySelector('.bg')
            const i = evt.target.querySelector('i.fa')
            bg.style.transition = 'all .15s ease'
            i.style.transition = 'all .15s ease'
            setTimeout(() => {
                bg.style.transition = ''
                i.style.transition = ''
            }, 150);
        })

        item.addEventListener('mouseleave', (evt) => {
            const bg = evt.target.querySelector('.bg')
            const i = evt.target.querySelector('i.fa')
            bg.style.transition = 'all .25s ease'
            i.style.transition = 'all .25s ease'
            bg.style.transform = `translate(${0}px, ${0}px)`
            i.style.transform = `translate(${0}px, ${0}px)`

            setTimeout(() => {
                bg.style.transition = ''
                i.style.transition = ''
            }, 250);
        })
    })

let btn = document.querySelector('.download_btn');
let second_btn = document.querySelector('.download_btn_second');

if (navigator.userAgent.includes('YaBrowser') || navigator.userAgent.includes('Chrome') || navigator.userAgent.includes('Firefox')) {
    btn.style.display = 'block';
    second_btn.style.display = 'none';
} else if (navigator.userAgent.includes('Safari')) {
    btn.style.display = 'none';
    second_btn.style.display = 'block';
}