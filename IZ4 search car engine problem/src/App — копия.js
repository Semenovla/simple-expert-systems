import './App.css';
import { useState } from 'react'

function App() {
  var is_name = 'Поиск причины поломки авто';
var result31 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблемы с генератором",
    desc: "",
    nodes: [
    ]
  }
var result30 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблемы с ремнем генератора",
    desc: "",
    nodes: [
    ]
  }
var result29 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблема с предохранителями",
    desc: "",
    nodes: [
    ]
  }
var result28 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Мы не знаем в чем причина поломки",
    desc: "",
    nodes: [
    ]
  }

var result27 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблемы с втягивающим реле стартера",
    desc: "",
    nodes: [
    ]
  }

var result26 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблемы с бендексом стартера",
    desc: "",
    nodes: [
    ]
  }

var result25 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Проблемы с генератором",
    desc: "",
    nodes: [
    ]
  }

var result24 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблемы с предохранителем или реле",
    desc: "",
    nodes: [
    ]
  }

var result23 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Проблемы с генератором",
    desc: "",
    nodes: [
    ]
  }

var result22 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Блокировка рулевого колеса",
    desc: "",
    nodes: [
    ]
  }

var result21 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Проблемы с двигателем",
    desc: "",
    nodes: [
    ]
  }

var result20 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблемы с топливным насосом",
    desc: "",
    nodes: [
    ]
  }

var result19 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Загрязнен топливный фильтр",
    desc: "",
    nodes: [
    ]
  }

var result18 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Проблемы с катушкой зажигания",
    desc: "",
    nodes: [
    ]
  }

var result17 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблемы с генератором",
    desc: "",
    nodes: [
    ]
  }

var result16 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблемы с ремнем генератора",
    desc: "",
    nodes: [
    ]
  }

var result15 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Проблемы с генератором",
    desc: "",
    nodes: [
    ]
  }

var result14 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Проблема с катушкой зажигания",
    desc: "",
    nodes: [
    ]
  }

var result13 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Проблема с проводами зажигания",
    desc: "",
    nodes: [
    ]
  }

var result12 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Проблема с катушкой зажигания",
    desc: "",
    nodes: [
    ]
  }

var result11 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблема с форсунками",
    desc: "",
    nodes: [
    ]
  }

var result10 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблема с топливной рампой",
    desc: "",
    nodes: [
    ]
  }

var result9 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Проблема с форсунками",
    desc: "",
    nodes: [
    ]
  }

var result8 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Пробелмы с проводкой ЭБУ",
    desc: "",
    nodes: [
    ]
  }

var result7 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблемы с датчиком положения коленвала",
    desc: "",
    nodes: [
    ]
  }

var result6 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Проблемы с двигателем",
    desc: "",
    nodes: [
    ]
  }

var result5 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблемы с глушителем",
    desc: "",
    nodes: [
    ]
  }

var result4 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Автомобиль исправен",
    desc: "",
    nodes: [
    ]
  }

var result3 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Забит каталитический нейтрализатор ",
    desc: "",
    nodes: [
    ]
  }

var result2 ={
    answer: "Нет",
    is_leaf: true,
    img: "",
    result: "Проблемы с выхлопной системой",
    desc: "",
    nodes: [
    ]
  }

var result1 ={
    answer: "Да",
    is_leaf: true,
    img: "",
    result: "Автомобиль исправен",
    desc: "",
    nodes: [
    ]
  }

 var node30 = {
    answer: "Да",
    question: 'Предохранители исправны?',
    is_leaf: false,
    img: "",
    nodes: [
      result28,
      result29
    ],
  }

  var node29 = {
    answer: "Да", 
    question: 'Ремень генератора в порядке?',
    is_leaf: false,
    img: "",
    nodes: [
      node30,
      result30
    ],
  }

  var node28 = {
    answer: "Да",
    question: 'Бендекс стартера исправен?',
    is_leaf: false,
    img: "",
    nodes: [
      result25,
      result26
    ],
  }

  var node27 = {
    answer: "Нет",
    question: 'Предохранители реле впорядке?',
    is_leaf: false,
    img: "",
    nodes: [
      result23,
      result24
    ],
  }

  var node26 = {
    answer: "Нет",
    question: 'Втягивающее реле стартера исправно?',
    is_leaf: false,
    img: "",
    nodes: [
      node28,
      result27
    ],
  }

  var node25 = {
    answer: "Нет",
    question: 'Генератор исправен?',
    is_leaf: false,
    img: "",
    nodes: [
      node29,
      result31
    ],
  }

  var node24 = {
    answer: "Да",
    question: 'Датчик положения коленвала исправен?',
    is_leaf: false,
    img: "",
    nodes: [
      result6,
      result7
    ],
  }

  var node23 = {
    answer: "Нет",
    question: 'Провода ЭБУ в порядке?',
    is_leaf: false,
    img: "",
    nodes: [
      node24,
      result8
    ],
  }

  var node22 = {
    answer: "Да",
    question: 'Топливная рампа исправна?',
    is_leaf: false,
    img: "",
    nodes: [
      result9,
      result10
    ],
  }

  var node21 = {
    answer: "Нет",
    question: 'Форсунки исправны?',
    is_leaf: false,
    img: "",
    nodes: [
      node22,
      result11
    ],
  }

  var node20 = {
    answer: "Да",
    question: 'Провода зажигания исправны?',
    is_leaf: false,
    img: "",
    nodes: [
      result12,
      result13
    ],
  }

  var node19 = {
    answer: "Нет",
    question: 'Катушка зажигания исправна?',
    is_leaf: false,
    img: "",
    nodes: [
      node20,
      result14
    ],
  }

  var node18 = {
    answer: "Да",
    question: 'Ремень генератора в порядке?',
    is_leaf: false,
    img: "",
    nodes: [
      result15,
      result16
    ],
  }

  var node17 = {
    answer: "Нет",
    question: 'Генератор исправен?',
    is_leaf: false,
    img: "",
    nodes: [
      node18,
      result17
    ],
  }

  var node16 = {
    answer: "Да",
    question: 'Топливный фильтр чистый?',
    is_leaf: false,
    img: "",
    nodes: [
      result18,
      result19
    ],
  }

  var node15 = {
    answer: "Нет",
    question: 'Топливный насос исправен?',
    is_leaf: false,
    img: "",
    nodes: [
      node16,
      result20
    ],
  }

  var node14 = {
    answer: "Да",
    question: 'Блокировка рулевого колеса снята?',
    is_leaf: false,
    img: "",
    nodes: [
      result21,
      result22
    ],
  }

  var node13 = {
    answer: "Да",
    question: 'Соединение проводов в порядке?',
    is_leaf: false,
    img: "",
    nodes: [
      node14,
      result27
    ],
  }

  var node12 = {
    answer: "Да",
    question: 'Стартер исправен?',
    is_leaf: false,
    img: "",
    nodes: [
      node13,
      result26
    ],
  }

  var node11 = {
    answer: "Нет",
    question: 'Аккумулятор заряжен?',
    is_leaf: false,
    img: "",
    nodes: [
      node12,
      node25
    ],
  }

  var node10 = {
    answer: "Нет",
    question: 'Глушитель исправен?',
    is_leaf: false,
    img: "",
    nodes: [
      result4,
      result5
    ],
  }

  var node9 = {
    answer: "Нет",
    question: 'Каталитический нейтрализатор забит?',
    is_leaf: false,
    img: "",
    nodes: [
      result3,
      node10
    ],
  }

  var node8 = {
    answer: "Да",
    question: 'Выхлопная система исправна?',
    is_leaf: false,
    img: "",
    nodes: [
      result1,
      result2
    ],
  }

  var node7 = {
    answer: "Да",
    question: 'Датчики двигателя исправны?',
    is_leaf: false,
    img: "",
    nodes: [
      node8,
      node9
    ],
  }

  var node6 = {
    answer: "Да",
    question: 'Компрессия в цилиндрах нормальная?',
    is_leaf: false,
    img: "",
    nodes: [
      node7,
      node23
    ],
  }
var node5 = {
answer: "Да",
question: 'топливо поступает в двигатель?',
is_leaf: false,
img: "",
nodes: [
node6,
node21
],
}
var node4 = {
answer: "Да",
question: 'Есть ли искра в свечах зажигания?',
is_leaf: false,
img: "",
nodes: [
node5,
node19
],
}
var node3 = {
answer: "Да",
question: 'Аккумулятор заряжен?',
is_leaf: false,
img: "",
nodes: [
node4,
node17
],
}
var node2 = {
answer: "Да",
question: 'Уровень топлива нормальный?',
is_leaf: false,
img: "",
nodes: [
node3,
node15
],
}
var node1 = {
question: 'Двигатель запускается?',
is_leaf: false,
img: "",
nodes: [
node2,
node11
],
}


  var tree = node1

  var nodes = [node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23, node24, node25, node26, node27, node28, node29, node30]

 const [cur, setCur] = useState(tree);

  const handleAnswerClick = (node) => {
    setCur(node);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="name">{is_name}</div>
        <div className="is-name">Инженерия знаний 4 лаба</div>
        <div className="restart" onClick={(e) => setCur(tree)}>Начать сначала</div>
      </div>
      <div className="body">
        <div className="question-container">
          {!cur.is_leaf && (
            <div className="cont">
              <div>
                <div
                  className="qimage"
                  style={{
                    backgroundImage: `url(${cur.img})`,
                  }}
                ></div>
              </div>
              <div className="question">{cur.question}</div>
              <div>
                {cur.nodes.map((node, index) => (
                  <div
                    className="button"
                    key={index}
                    onClick={() => handleAnswerClick(node)}
                  >
                    {index + 1}. {node.answer}
                  </div>
                ))}
              </div>
            </div>
          )}
          {cur.is_leaf && (
            <div className="cont">
              <div>
                <img className="qimage" src={cur.img} alt="" />
              </div>
              <div className="question">Вам подойдет: {cur.result}</div>
              <div className="question1">Описание: {cur.desc}</div>
            </div>
          )}
        </div>
        <div className="list-container">
          {nodes.map((node, index) => (
            <div
              className="list"
              key={index}
              onClick={() => {
                setCur(node);
              }}
            >
              {index + 1}. {node.question}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;