var likes = {
    neil: 9,
    nichole: 12,
    jim:9
}

function ilike(value){
    if(value != null && value in likes ){
        likes[value] = likes[value] + 1;
        document.querySelector("#like_"+value).innerHTML = likes[value];
    }
}