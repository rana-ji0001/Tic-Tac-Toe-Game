let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".resetbtn");
let newg = document.querySelector(".newbtn");
let win = document.querySelector(".win");
let msg = document.querySelector(".msg");
let turn0 = true; //player x and player Y
let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
function reset() {
    turn0 = true;
    enableBox();
    win.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })

});
const enableBox = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}
const disableBox = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`
    win.classList.remove("hide");
    disableBox();
}
const checkWinner = () => {
    for(pattern of winningPattern){
        let pst1val = boxes[pattern[0]].innerText;
        let pst2val = boxes[pattern[1]].innerText;
        let pst3val = boxes[pattern[2]].innerText;
        // console.log(pst1val);

        if(pst1val != "" && pst2val != "" && pst3val != ""){
            if(pst1val === pst2val && pst2val === pst3val){
                console.log('winner',pst1val);
                showWinner(pst1val);
            }
        }
    }
}
newg.addEventListener("click",reset);
rstbtn.addEventListener("click",reset);

