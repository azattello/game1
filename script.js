function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


let number = Math.round(getRandomArbitrary(1, 100));

number = Number(number)
console.log(number)

function functionClick(){
    let input = document.querySelector('.input').value;
    input = Number(input);
    
    let status = document.querySelector('.status');

    if (number === input) {
        status.innerHTML = ('Вы угадали!');
        
    }else if (number > input) {
        status.innerHTML = ('Меньше');
    }else if (number < input) {
        status.innerHTML = ('Больше');
    }
    

} 
