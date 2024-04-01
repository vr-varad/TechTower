type keyInputs = 'up' | 'down' | 'left' | 'right';

enum keyInputsEnum {
    Up,Down,Right,left
}

function move(key: keyInputsEnum) {
    if(key===keyInputsEnum.Up){
        // console.log('up')
    }
}

move(keyInputsEnum.Up); // up
move(keyInputsEnum.Down); // down
console.log(keyInputsEnum.Up); // 0
console.log(keyInputsEnum.Down); // 1
