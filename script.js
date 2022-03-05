var contentArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

document.getElementById("save-card").addEventListener("click", () => {
  addFlashcard();
});

document.getElementById("delete").addEventListener("click", () => {
  localStorage.clear();
  flashcards.innerHTML = "";
  contentArray = [];
});

document.getElementById("show").addEventListener("click", () => {
  document.getElementById("create-card").style.display = "block";
});

document.getElementById("close-card-box").addEventListener("click", () => {
  document.getElementById("create-card").style.display = "none";
});

flashcardMaker = (text) => {
  const flashcard = document.createElement("div");
  const question = document.createElement("h2");
  const answer = document.createElement("h2");

  flashcard.className = "flashcard";

  question.setAttribute(
    "style",
    "border-top:1px solid red; padding: 15px; margin-top:30px"
  );
  question.textContent = text.my_question;

  answer.setAttribute("style", "text-align:center; display:none; color:red");
  answer.textContent = text.my_answer;

  flashcard.appendChild(question);
  flashcard.appendChild(answer);

  flashcard.addEventListener("click", () => {
    if (answer.style.display == "none") answer.style.display = "block";
    else answer.style.display = "none";
  });

  document.querySelector("#flashcards").appendChild(flashcard);
};

contentArray.forEach(flashcardMaker);

addFlashcard = () => {
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");

  let flashcard_info = {
    my_question: question.value,
    my_answer: answer.value,
  };

  contentArray.push(flashcard_info);
  localStorage.setItem("items", JSON.stringify(contentArray));
  flashcardMaker(contentArray[contentArray.length - 1]);
  question.value = "";
  answer.value = "";
};