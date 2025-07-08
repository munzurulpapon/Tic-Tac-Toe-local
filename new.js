let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");



let turn0=true;
let count=0;

const winpatterns=
[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

];
 const resetGame = ()=>
    {
    turn0=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
      
    }




boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{

     
        if(turn0)
        {
            box.innerText="0";
            turn0=false;
      }
      else
      {
        box.innerText="X";
        turn0=true;
        
      }
      box.disabled=true;
      count++;

      let  isWinner=  checkwin();
      
      if(count==9 && !isWinner)
      {
        gamedraw();
      }





    })

})


const gamedraw=()=>

  {
   msg.innerText="Game Draw";
    msgcontainer.classList.remove("hide");
    disableboxes();



  }






    const disableboxes=()=>
    {
      for(let i of boxes)
      {
        i.disabled=true;
      }



    }


      const enableboxes=()=>
    {
      for(let i of boxes)
      {
        i.disabled=false;
        i.innerText="";
      }



    }




    
    const showWinner=(winner)=>
    {
      msg.innerText=`${winner} is the winner`;
      msgcontainer.classList.remove("hide");
      disableboxes();





    }






    const checkwin=()=>
    {
      for(let i of winpatterns)
      {
        let pos1=boxes[i[0]].innerText;
        let pos2=boxes[i[1]].innerText;
        let pos3=boxes[i[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
          if(pos1==pos2 && pos2==pos3)
          {
            console.log("winner",pos1);
            showWinner(pos1);
            return true;
          }
        }
       

      }
      return false;


    };


   newbtn.addEventListener("click",resetGame);
    resetbtn.addEventListener("click",resetGame);




