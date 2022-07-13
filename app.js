

let add=document.querySelector('button');
let inp=document.querySelector('input');

inp.addEventListener('keypress',(e)=>{

        if(e.key=='Enter'){
            let content=document.querySelector('input').value;

            if(content==''){
                document.querySelector('input').value="Please Enter Something";
                document.querySelector('input').style.color="yellow";
                setTimeout(() => {
                    document.querySelector('input').value="";
                }, 250);
                
            }else{
                let curr=document.querySelector('ul');
                let toAdd=document.createElement('li'); 
                toAdd.textContent=content;


                // let a=document.createElement('a'); 
                // a.textContent="x";
                // a.className="remove";
                // toAdd.appendChild(a);

                
                curr.appendChild(toAdd); 

                document.querySelector('input').value="";
            }
        }
})

// let btn=document.querySelector('ul');
// btn.addEventListener('click',function(e){
//     let b=document.getElementById('box');
//     let li=e.target.parentNode;
//     b.remove(li);
// })
