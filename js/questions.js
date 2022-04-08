(function(){
  const titlequestion = [...document.querySelectorAll(".box-head")]

  console.log(titlequestion);

  titlequestion.forEach( question => {
    question.addEventListener('click',() => {
      let height=0;
      let answer = question.nextElementSibling;
      let addPadding = question.parentElement;

      addPadding.classList.toggle('question-padding-add')
      question.children[1].classList.toggle('dropdown--rotate');

      if(answer.clientHeight === 0){
        height = answer.scrollHeight;
      }

      answer.style.height = `${height}px`;

    })
  } )
}
)();