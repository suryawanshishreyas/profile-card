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