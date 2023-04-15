
let rangeBtn=document.querySelector('#range');
const radioBtn=document.querySelectorAll('input[type="radio"]');
const modalBox=document.querySelectorAll('.modal--box');
const modalFooter=document.querySelectorAll('.modal--box-footer');
const priceBtn=document.querySelectorAll('#price-btn');
const support=document.querySelector('.support');


radioBtn.forEach((btn,i)=>{
    btn.addEventListener('change', ()=>{
       let current=modalBox[i];
        let currentItem=modalFooter[i];
        current.classList.toggle('outline-change');
        currentItem.classList.toggle('active');
        let currentValue=i;
       
        priceBtn.forEach(btn=>{
          if (currentValue===0){
            /*console.log(rangeBtn);*/
            rangeBtn.setAttribute("value", 25);
        };
          if (currentValue===1){
            rangeBtn.setAttribute("value", 50);
    };
        
          if (currentValue===2){
            rangeBtn.setAttribute("value", 75);
          };
          support.classList.add('active');
          modal.classList.remove('active');
        })
        
        btn.addEventListener('mouseout', ()=>{
            currentItem.classList.remove('active')
        })
        
    })
})

/* support */
const supportBtn=document.querySelector('.support a');
supportBtn.addEventListener('click', ()=>{
    support.classList.remove('active');
     modal.classList.remove('active');
     document.querySelector('body').classList.remove('overlay');
})

const selectBtn=document.getElementById('btn');
const modal=document.querySelector('.modal');
const closeBtn=document.querySelector('.close-btn img');

selectBtn.addEventListener('click',()=>{
        modal.classList.add('active');
        console.log('clicked');
     document.querySelector('body').classList.add('overlay');
});


closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('active');
});

