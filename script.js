document.addEventLisrtener("DOMContentLoaded", ()=>{
    const likeBtn = document.querySelector(".like-btn");
    const postMedia = document.querySelector(".post-media");
    if (!likeBtn) return;

    const likesCountSpan = likeBtn.querySelector(".likes-count");
    const bookmarkBtn = document.querySelector("bookmark-Btn");
    
    let isLiked = false;
    let baseLikes = 0;
    

})