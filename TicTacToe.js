let turn = "X"
let over=new Audio("gameover.mp3")
let gameover = false;
let move=new Audio("move.mp3")

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
const win = ()=>{
    let text = document.getElementsByClassName('text');
    let wins=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        if((text[e[0]].innerText===text[e[1]].innerText)&&(text[e[2]].innerText===text[e[1]].innerText)&&(text[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = text[e[0]].innerText + " Won"
            gameover=true
            document.querySelector('.celebrationimg').getElementsByTagName('img')[0].style.width="250px"
            over.play()
        }
    })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let text=element.querySelector('.text')
    element.addEventListener('click', ()=>{
        if(text.innerText === ''){
            text.innerText = turn;
            turn = changeTurn();
            win();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                move.play()
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let texts=document.querySelectorAll('.text');
    Array.from(texts).forEach(element =>{
        element.innerText=""
    });
    turn="X";
    gameover=false
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    move.play()
    document.querySelector('.celebrationimg').getElementsByTagName('img')[0].style.width="0px"
})

