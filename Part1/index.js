
let board = [];

function play(clickedID){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedID)

    if (clickedElement.innerText === ''){

    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedID] = 'X'
    }else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedID] = 'O'
    }
  }
     
    console.log(board)


 const  topRight = board[0]
 const  topCenter = board[1]
 const  topLeft = board[2]
 const  middleLeft = board[3]
 const  middleCenter = board[4]
 const  middleRight = board[5]
 const  bottomLeft = board[6]
 const  bottomCenter = board[7]
 const  bottomRight = board[8]

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(topLeft + ' is the winner')
    clear()
    return
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert( middleLeft + ' is the winner')
    clear()
    return
}
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(bottomLeft + ' is the winner')
    clear()
    return
}
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(topLeft + ' is the winner')
    clear()
    return
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(topCenter + ' is the winner')
    clear()
    return
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(topRight + ' is the winner')
    clear()
    return
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(topLeft + ' is the winner')
    clear()
    return
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(bottomLeft + ' is the winner')
    clear()
    return
  }

let boardFull = true

for(i = 0; i <= 8; i++){
    if(board[i] === undefined){
        boardFull = false
    }
}

if(boardFull === true){
    alert('It was a cats game')
    clear()
}

}
function clear(){

  const box = document.getElementsByTagName('td');
  
  for(i = 0; i <= 8; i++){
    box[i].innerText = ''
    board[i] = undefined
  }
  return 
}

const btn = document.querySelector('#bttn')

btn.addEventListener('click', clear)