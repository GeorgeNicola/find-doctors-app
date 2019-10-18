
let singleOptionAnswer = document.querySelectorAll(".single-option-answer");
for(i=0;i<singleOptionAnswer.length;i++){
    singleOptionAnswer[i].addEventListener("click", function selectAnswerSingle(){
        for(i=0;i<singleOptionAnswer.length;i++){
            singleOptionAnswer[i].classList.remove("single-option-answer-selected");
        }
        this.classList.add("single-option-answer-selected");
    })
}

let simptomSearchBtn = document.querySelector(".cauta-simptom-btn");
let hartaBtn = document.querySelector(".harta-corpului-btn");

simptomSearchBtn.addEventListener("click", function showSimptomsSearch(){
    document.querySelector(".search-container").style.display = "block";
    document.querySelector(".map-container").style.display = "none";
    simptomSearchBtn.classList.add("search-simptoms-selected");
    hartaBtn.classList.remove("search-simptoms-selected");
});

hartaBtn.addEventListener("click", function showHartaCorp(){
    document.querySelector(".map-container").style.display = "block";
    document.querySelector(".search-container").style.display = "none";
    hartaBtn.classList.add("search-simptoms-selected");
    simptomSearchBtn.classList.remove("search-simptoms-selected");
}); 