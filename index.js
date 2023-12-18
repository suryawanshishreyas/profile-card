const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const follow = document.querySelector('.btn-follow');

// modal function
const openModal=()=>{
    console.log('modal is open');
    modal.classList.add('modalactive');
    overlay.classList.add('overlayactive');
}

// modal close function
const closeModal =()=>{
    modal.classList.remove('modalactive');
    overlay.classList.remove('overlayactive');
}

const changeFollow = () =>{
    follow.classList.add('btn-followed');
    follow.innerText='';
    follow.innerText = 'Following';
}

const unfollow = () =>{
    follow.classList.remove('btn-followed');
    follow.innerText=' ';
    follow.innerText='Follow';

}

const hackSentence = {
    1:['String.length'],
    2:['String.slice()'],
    3:['String.substring()'],
    4:['String.substr()'],
    5:['String.split()'],
    6:['String.charCodeAt()'],
    7:['String.charAt()'],
    8:['String.padEnd()'],
    9:['String.trimEnd()'],
    10:['String.concat()'],
    11:['String.replaceAll()']
}

const hack1 = document.querySelector('.hack1');
const hack2 = document.querySelector('.hack2');
const hack3 = document.querySelector('.hack3');
const hack4 = document.querySelector('.hack4');

hack1.innerText = hack1.innerText.concat(hack2.innerText);
hack2.innerText= ' ';
hack3.innerText = hack1.innerText.concat(hack3.innerText);
hack4.innerText= ' ';

const hackLoop = () =>{
    hack1.innerText = ' ';
    hack2.innerText = ' ';
    hack3.innerText = ' ';
    hack4.innerText = ' ';
    
    let p = setInterval(()=>{
        for(i=0;i<=10;i++){
            function getRandomInt(min,max){
                min = Math.ceil(min);
                max = Math.floor(max);
                return  Math.floor(Math.random() * (max - min) + min);
            }
            let randomNum = getRandomInt(0,10);
            console.log(randomNum);
            hack1.innerText=hackSentence[randomNum] + hackSentence[11-randomNum];
            hack3.innerText=hackSentence[randomNum] + hackSentence[11-randomNum];

        }
    },100);

}

hackLoop();