const form = document.querySelector('.bot__form form')
const db = {
  'Привет':'Приветствую вас. Можете задать мне несколько вопросов! Перед этим, спросите у меня - "Что ты можешь?"',
  'Что ты можешь?':'Я вопрос-бот, я не могу отвечать на большое количество вопросов, но Вы можете спросить у меня - "Как дела?"',
  'Как дела?':'Прекрасно. Наслаждаюсь вашим общением.',
  'Как тебя зовут?': 'Можете называть меня "Незнайка". Я только учусь',
  'Пока': 'Жду вас в другой раз! Было приятно познакомиться.'
}

const botAnswer = document.getElementById('bot__answer')
const animationType = 'animate__pulse'

// When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      botAnswer.classList.remove(animationType);
    }


form.addEventListener('submit',(e) =>{
  e.preventDefault()
  const  value = e.target.bottext.value

  if(value){
    const answer = db[value]

    if(answer !== undefined){
      botAnswer.innerText = answer
    }
    else{
      botAnswer.innerText = 'К сожалению, я не знаю ответа на этот вопрос! Можете узнать моё имя вопросом "Как тебя зовут?"'
    }
    
  
    botAnswer.classList.add(animationType)
    botAnswer.addEventListener('animationend', handleAnimationEnd, {once: true});
  }

})
