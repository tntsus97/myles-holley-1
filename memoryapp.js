
document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'clown',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheavy.com%2Fwp-content%2Fuploads%2F2016%2F10%2Fgettyimages-494980596-e1475624206705.jpg%3Fquality%3D65%26strip%3Dall&f=1&nofb=1'
    },
    {
      name: 'duck',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Mallard2.jpg'
    },
    {
      name: 'lemonade ',
      img: 'https://www.simplyrecipes.com/thmb/EpcrvdO75skao1yGZEqwLbbuEbE=/569x427/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__06__lemonade-640-2-dm-52003f61e7944b38a6ad6a7f8a366826.jpg'
    },
    {
      name: 'joe',
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Joe_Exotic_%28Santa_Rose_County_Jail%29.png'
    },
    {
      name: 'mama',
      img: 'https://pbs.twimg.com/media/EEBhMsSXYAEG1Rw.jpg'
    },
    {
      name: 'ninja',
      img: 'https://images.firstpost.com/wp-content/uploads/2019/08/ninja-streamer.jpg'
    },
    {
      name: 'clown',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheavy.com%2Fwp-content%2Fuploads%2F2016%2F10%2Fgettyimages-494980596-e1475624206705.jpg%3Fquality%3D65%26strip%3Dall&f=1&nofb=1'
      
    },
    {
      name: 'duck',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Mallard2.jpg'
      
    },
    {
      name: 'lemonade',
      img: 'https://www.simplyrecipes.com/thmb/EpcrvdO75skao1yGZEqwLbbuEbE=/569x427/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__06__lemonade-640-2-dm-52003f61e7944b38a6ad6a7f8a366826.jpg'
     
    },
    {
      name: 'joe',
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Joe_Exotic_%28Santa_Rose_County_Jail%29.png'
     
    },
    {
      name: 'mama',
      img: 'https://pbs.twimg.com/media/EEBhMsSXYAEG1Rw.jpg'
  
    },
    {
      name: 'ninja',
      img: 'https://images.firstpost.com/wp-content/uploads/2019/08/ninja-streamer.jpg'
    
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})