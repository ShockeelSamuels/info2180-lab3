let addBoardClass= () => {
    let entireBoard= document.getElementById('board');
    let cells=entireBoard.children;

    for (i=0; i< cells.length; i++){
        cells[i].classList.add('square');
    }

    for (let j=0; j < cells.length; j++){
        cells[j].onmouseover = function(){cells[j].classList.toggle("hover",true)}
        cells[j].onmouseout = function(){cells[j].classList.toggle("hover",false)}
    }

    for (let i=0; i<cells.length; i++){
        cells[i].addEventListener("click",function(){

            if(gameState.length==0 && cells[i].textContent=== ""){
                cells[i].classList.add("X");
                cells[i].textContent=("X");
                gameState.push("X");
                checkWinner(cells);
            }else{
                if (gameState[gameState.length - 1]== 'X' && cells[i].textContent=== ""){
                    cells[i].classList.add("O");
                    cells[i].textContent=("O");
                    gameState.push("O");
                    checkWinner(cells);

                }else if (cells[i].textContent=== ""){
                    cells[i].classList.add("X");
                    cells[i].textContent=("X");
                    gameState.push("X");
                    checkWinner(cells);
                }
            }
        });
    }

    document.getElementsByClassName("btn")[0].addEventListener("click",function(){

        gameState.length= 0;
        
        for(let i = 0; i < cells.length; i++){
            cells[i].innerHTML=("");
        }

        document.getElementById("status").textContent = 
        "Move your mouse over a square and click to play an X or an O.";
        document.getElementById("status").classList.remove("you-won");
        
    });

    for (let k=0; k < cells.length; k++){
        cells[k].setAttribute("unSelectable", "on");
    }
}

document.addEventListener('DOMContentLoaded', addBoardClass);

var gameState=[]; 

var checkWinner= (cells) => {

    if (cells[0].textContent !== "" && cells[0].textContent === cells[1].textContent && cells[0].textContent === cells[2].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent=   "Congratulations! "+ cells[0].textContent + " is the Winner!"
     }
     else if (cells[3].textContent !== "" && cells[3].textContent === cells[4].textContent && cells[3].textContent === cells[5].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[3].textContent + " is the Winner!"
     }
     else if (cells[6].textContent !== "" && cells[6].textContent === cells[7].textContent && cells[6].textContent === cells[8].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[6].textContent + " is the Winner!"
     }
     else if (cells[0].textContent !== "" && cells[0].textContent === cells[3].textContent && cells[0].textContent === cells[6].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[0].textContent + " is the Winner!"
     }
     else if (cells[1].textContent !== "" && cells[1].textContent === cells[4].textContent && cells[1].textContent === cells[7].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[1].textContent + " is the Winner!"

     }else if (cells[2].textContent !== "" && cells[2].textContent === cells[5].textContent && cells[2].textContent === cells[8].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[2].textContent + " is the Winner!"

     }else if (cells[6].textContent !== "" && cells[6].textContent === cells[4].textContent && cells[6].textContent === cells[2].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent =  "Congratulations! "+ cells[6].textContent + " is the Winner!"
     }
     else if (cells[0].textContent !== "" && cells[0].textContent === cells[4].textContent && cells[0].textContent === cells[8].textContent){
        document.getElementById('status').classList.add("you-won");
        document.getElementById('status').textContent = "Congratulations! "+ cells[0].textContent + " is the Winner!"
     }
  
     
}
