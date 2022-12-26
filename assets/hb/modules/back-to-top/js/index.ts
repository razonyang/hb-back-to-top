(() => {
    'use strict'

    const show = (btn) => {
        btn.classList.remove('opacity-0')
        btn.style = 'z-index: 1080'
    }

    const hide = (btn) => {
        btn.classList.add('opacity-0')
        btn.style = ''
    }

    window.addEventListener('DOMContentLoaded', () => {
        const btn = document.querySelector('.hb-back-to-top');

        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                show(btn);
            } else {
                hide(btn);
            }
        });

        btn?.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
        })
    })
})()