let namasteyBtn = document.querySelector('button');
namasteyBtn.addEventListener('click',inputNum);

function showMsg(){
    alert("Namastey");
}

function inputNum(){
    let name = prompt('Enter Name Of Student');
    namasteyBtn.textContent='Roll No. 1:'+name;
}