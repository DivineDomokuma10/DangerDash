
const SaveUser = (inpt,pTag,modal,btn) =>{
    let err = document.querySelector(`.${pTag}`);
    let name = document.querySelector(`.${inpt}`);
    let startBtn = document.querySelector(`.${btn}`);
    let modaWindow = document.querySelector(`.${modal}`);

    if(localStorage.getItem('user') !== null){
        
    }

    startBtn.addEventListener('click',()=>{
        if(name.value === ''){
            err.textContent = 'Please Enter Your Name To Start The Game'
        }
        else{
            localStorage.setItem('user',`${name.value}`);
            setTimeout(()=> modaWindow.style.display = 'none', 700)
        }
    })

}

export default SaveUser