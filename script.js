const skillsRating = [4,3,3,3,2,4,4,3,4,5,4,3];
const personalSkillsRating = [4,5,5,4,4];

const ratings = document.getElementsByClassName("skillRate");
const personalRatings = document.getElementsByClassName("personalSkillRate");

skillsRating.forEach((item, index) => {
    const ratingStars = ratings[index].children;

    for(let x = 0; x < ratingStars.length; x++){
        if(x < item){
            console.log("to aqui");
            ratingStars[x].setAttribute("style", "background-color: #018cb7");
        }
    }

})

personalSkillsRating.forEach((item, index) => {
    const ratingStars = personalRatings[index].children;

    for(let x = 0; x < ratingStars.length; x++){
        if(x < item){
            console.log("to aqui");
            ratingStars[x].setAttribute("style", "background-color: #018cb7");
        }
    }
})