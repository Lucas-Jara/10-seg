const seconds = document.getElementById('seconds');
const miliseconds = document.getElementById('miliseconds');


const btns = document.querySelectorAll('.btn');




let cronometro = false;

btns.forEach(btn => {
    btn.addEventListener('click', verificar)
})


function verificar(e) {
    if (e.target.id === 'start' && !cronometro) {
        
        seconds.innerHTML = 0;
        miliseconds.innerHTML = 0;
        document.getElementById('numbers').classList.remove('active')


        btns[0].style.display = 'none';
        btns[1].style.display = 'block';
        cronometro = true;
        iniciar = setInterval(() => {
            +miliseconds.innerHTML++;
            if (miliseconds.innerHTML > 99) {
                miliseconds.innerHTML = 0;
                +seconds.innerHTML++;
            }else if (seconds.innerHTML == '15') {
                clearInterval(iniciar);
                seconds.innerHTML = 0;
                miliseconds.innerHTML = 0;
                setTimeout(() => {
                    alert('perdiste');
                }, 100);
            }

            if (seconds.innerHTML === '10') {
                btns[1].click();
            }
             
        }, 10);

        
    } else if (e.target.id === 'stop' && cronometro) {
        cronometro = false;
        clearInterval(iniciar);
        
        if (seconds.innerHTML == '10' && miliseconds.innerHTML == '0') {
            document.getElementById('numbers').classList.add('active')
            btns[1].style.display = 'none';
            btns[0].style.display = 'block';
        }else{
            setTimeout(() => {
                seconds.innerHTML = 0;
                miliseconds.innerHTML = 0;
                alert('perdiste');
                btns[1].style.display = 'none';
                btns[0].style.display = 'block';
            }, 100);
        }


    }
}