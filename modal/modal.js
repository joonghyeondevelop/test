const blackBgHide = document.querySelector('.hide');
const blackBg = document.querySelector('.black-bg')
const imgClick1 = document.querySelectorAll('.img1');
const modalBg = document.querySelectorAll('.modal-bg');

for(let i = 0; i < imgClick1.length; i++){
    let imgClick = document.querySelectorAll('img');
    imgClick[i].addEventListener('click', () => {
        blackBgHide.style.visibility = "visible";
        modalBg[i].classList.remove('modalhide');
        blackBg.addEventListener('click', (e)=>{
            if(e.target !== blackBg){
                blackBgHide.style.visibility = "visible";
            }else{
                blackBgHide.style.visibility = "hidden";
                modalBg[i].classList.add('modalhide');
            }
        })
    })
}