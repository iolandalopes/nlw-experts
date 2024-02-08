const questions = [
    {
      question: "Qual é a forma correta de declarar uma variável em JavaScript?",
      options: [
        "var myVar;",
        "let myVar;",
        "const myVar;"
      ],
      correct: 2
    },
    {
      question: "O que o operador '===' faz em JavaScript?",
      options: [
        "Verifica se dois valores são iguais em valor e tipo.",
        "Verifica se dois valores são iguais em valor, mas não em tipo.",
        "Verifica se dois valores são iguais em tipo, mas não em valor."
      ],
      correct: 0
    },
    {
      question: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
      options: [
        "push()",
        "add()",
        "append()"
      ],
      correct: 0
    },
    {
      question: "O que o método 'getElementById()' faz em JavaScript?",
      options: [
        "Retorna o primeiro elemento com um ID específico no documento.",
        "Adiciona um ID a um elemento HTML.",
        "Remove um elemento do documento com um ID específico."
      ],
      correct: 0
    },
    {
      question: "O que é o 'DOM' em JavaScript?",
      options: [
        "Document Object Model - é uma interface de programação para documentos HTML e XML.",
        "Data Object Model - é um modelo para armazenar e manipular dados em JavaScript.",
        "Dynamic Object Manipulation - é uma técnica para manipular objetos em tempo de execução em JavaScript."
      ],
      correct: 0
    },
    {
      question: "Qual é a função do operador '&&' em JavaScript?",
      options: [
        "Operador de adição.",
        "Operador de subtração.",
        "Operador lógico AND."
      ],
      correct: 2
    },
    {
      question: "O que é uma função de callback em JavaScript?",
      options: [
        "Uma função que é chamada quando um evento ocorre.",
        "Uma função que é passada como argumento para outra função, para ser chamada posteriormente.",
        "Uma função que retorna um valor para outra função."
      ],
      correct: 1
    },
    {
      question: "Qual é a diferença entre '==' e '===' em JavaScript?",
      options: [
        "'==' verifica igualdade de valor, enquanto '===' verifica igualdade de valor e tipo.",
        "'===' verifica igualdade de valor, enquanto '==' verifica igualdade de valor e tipo.",
        "'==' e '===' são usados de forma intercambiável em JavaScript."
      ],
      correct: 0
    },
    {
      question: "Qual é o resultado de 2 + '2' em JavaScript?",
      options: [
        "'22'",
        "4",
        "'4'"
      ],
      correct: 0
    },
    {
      question: "Como você pode comentar uma única linha de código em JavaScript?",
      options: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->"
      ],
      correct: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const rigthtAnsewers = new Set()
  const totalQuestions = questions.length
  const explainTotal = document.querySelector('#rigthtAnsewers span')
  explainTotal.textContent = rigthtAnsewers.size +  ' de ' + totalQuestions
  
  for(const item of questions) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.question
  
    for(const response of item.options) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = response
        dt.querySelector('input').setAttribute('name', 'questions-' + questions.indexOf(item))
        dt.querySelector('input').value = item.options.indexOf(response)
  
        dt.querySelector('input').onchange = (event) => {
          const isCorrect = event.target.value == item.correct
  
          rigthtAnsewers.delete(item)
          if (isCorrect) {
            rigthtAnsewers.add(item)
          }
  
          explainTotal.textContent = rigthtAnsewers.size +  ' de ' + totalQuestions
        }
  
        quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }
  