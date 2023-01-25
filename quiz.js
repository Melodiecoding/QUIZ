
fetch("quiz.json")
.then(res => res.json())
.then(result => { console.table(result.qcm);
  
    
    const choixQuestion = Math.floor(Math.random() * result.qcm.length);
    const indexTab = result.qcm[choixQuestion];
    console.log(indexTab);

    const questions = document.querySelector("#question");
    questions.textContent = JSON.stringify(result.qcm[choixQuestion].question);
    const answer0 = document.querySelector("#answer1");
    answer0.textContent = JSON.stringify(result.qcm[choixQuestion].answers[0]);
    const answer1 = document.querySelector("#answer2");
    answer1.textContent = JSON.stringify(result.qcm[choixQuestion].answers[1]);
    const answer2 = document.querySelector("#answer3");
    answer2.textContent = JSON.stringify(result.qcm[choixQuestion].answers[2]);
    const answer3 = document.querySelector("#answer4");
    answer3.textContent = JSON.stringify(result.qcm[choixQuestion].answers[3]);

    function getRandomQuestion() {
        
        return choixQuestion;
    }
    getRandomQuestion();
    console.log(getRandomQuestion());

    indexTab.classList.add('hidden');
    
});

    
const nameOk = document.querySelector(".saisie_name");
const barreSaisie = document.getElementById("barre-saisie");
const validationName = document.getElementById("name_valid");
const messageElt = document.querySelector(".message");
const namesArray = [""];
const validBtn = document.querySelector(".validation_Btn");
const nextBtn = document.querySelector(".next_Btn");
const resultat = document.getElementById("note");


             
validationName.addEventListener('click', addName);
        
    function addName(event) {
        event.preventDefault();
            
        const newName = barreSaisie.value;
            
        messageElt.innerHTML = "C'est parti "+ newName +" !";

        nameOk.classList.add('hidden');
            
        // Stocker les nouveaux noms dans un tableau
        namesArray.push(newName);
        console.log(namesArray);

        function calculer() {
            let score = 0;
        }
    }
    
    
        validBtn.addEventListener('click', validAnswerScore);
        
        function validAnswerScore(event){
            event.preventDefault();
            
            validBtn.classList.add('hidden');
            
    }
    
