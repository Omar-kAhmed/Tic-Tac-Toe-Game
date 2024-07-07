let title = document.getElementById('title');
let squares = [];
let turn ="x";


function game(id){
     let element = document.getElementById("box"+id);

    if (turn ==="x" && element.innerHTML==""){
        element.innerHTML="x";
        turn="o"
        title.innerHTML="Player O Turn";
    }

    if (turn==="o" && element.innerHTML==""){
        element.innerHTML="o";
        turn="x"
        title.innerHTML="Player X turn";

    }
    test();  
}


function test(){

    for (let i=1; i<10; i++){
        squares[i]= document.getElementById("box"+ i).innerHTML;
    }
    if(squares[1]==squares[2]&&squares[2]==squares[3]&&squares[1]!=""){
        end(1,2,3);
    }
    if(squares[4]==squares[5]&&squares[5]==squares[6]&&squares[4]!=""){
        end(4,5,6);
    }
    if(squares[7]==squares[8]&&squares[8]==squares[9]&&squares[7]!=""){
        end(7,8,9);
    }
    if(squares[1]==squares[4]&&squares[4]==squares[7]&&squares[1]!=""){
        end(1,4,7);
    }
    if(squares[2]==squares[5]&&squares[5]==squares[8]&&squares[2]!=""){
        end(2,5,8);
    }
    if(squares[3]==squares[6]&&squares[6]==squares[9]&&squares[3]!=""){
        end(3,6,9);
    }
    if(squares[1]==squares[5]&&squares[5]==squares[9]&&squares[1]!=""){
        end(1,5,9);
    }
    if(squares[3]==squares[5]&&squares[5]==squares[7]&&squares[3]!=""){
        end(3,5,7);
    }

}




function end(num1,num2,num3){

    title.innerHTML = `Player ${squares[num1]} Wins!`;
    document.getElementById("box"+num1).style.backgroundColor="lightgreen";
    document.getElementById("box"+num2).style.backgroundColor="lightgreen";
    document.getElementById("box"+num3).style.backgroundColor="lightgreen";

    setInterval(function(){
        title.innerHTML+=".",1000},1000
    );

    setTimeout(function(){
        location.reload()},4000
    )
    for (let i = 1; i < 10; i++) {
        document.getElementById("box" + i).onclick = null;
    }
}