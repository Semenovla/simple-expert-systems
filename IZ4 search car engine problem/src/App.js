import './App.css';
import { useState } from 'react'

function App() {
  var is_name = 'Поиск причины поломки авто';
var result31 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://story-fr.ru/wp-content/uploads/9/e/0/9e0ebf98169b9555af9df3044f9a539e.jpeg",
    result: "Проблемы с генератором",
    desc: "Возможно, у автомобиля есть проблемы с генератором",
    nodes: [
    ]
  }
var result30 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5e934df2790c262edeb34342_5e9350dd794a123cf3104820/scale_1200",
    result: "Проблемы с ремнем генератора",
    desc: "Возможно, у автомобиля есть проблемы с ремнем генератора, требуется дополнительная диагностика и возможная замена.",
    nodes: [
    ]
  }
var result29 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://ae01.alicdn.com/kf/HTB16h31gDmWBKNjSZFBq6xxUFXap.jpg",
    result: "Проблема с предохранителями",
    desc: "Возможно, у автомобиля есть проблема с предохранителями, требуется дополнительная диагностика и возможный ремонт.",
    nodes: [
    ]
  }
var result28 ={
    answer: "Да",
    is_leaf: true,
    img: "https://i.ytimg.com/vi/xF5HfQFWGkA/maxresdefault.jpg",
    result: "Мы не знаем в чем причина поломки",
    desc: "Требуется более детальная диагностика для определения причины поломки автомобиля.",
    nodes: [
    ]
  }

var result27 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://www.autoezda.com/images/stories/zag/utroistvo-vtiagivauschego-rele.jpg",
    result: "Проблемы с втягивающим реле стартера",
    desc: "Возможно, у автомобиля есть проблемы с втягивающим реле стартера, требуется дополнительная диагностика и возможный ремонт.",
    nodes: [
    ]
  }

var result26 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://carservic.ru/wp-content/uploads/2023/03/konstruktsiya-mufty-svobodnogo-hoda-bendiksa-startera.jpg",
    result: "Проблемы с бендексом стартера",
    desc: "Возможно, у автомобиля есть проблемы с бендексом стартера, требуется дополнительная диагностика и возможный ремонт.",
    nodes: [
    ]
  }

var result25 ={
    answer: "Да",
    is_leaf: true,
    img: "https://a.d-cd.net/vxAAAgDPsuA-960.jpg",
    result: "Проблемы с генератором",
    desc: "Предположительно, есть проблемы с генератором, требуется дополнительная диагностика и возможный ремонт.",
    nodes: [
    ]
  }

var result24 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://a.d-cd.net/9MbJ0Qu7V-F0g030vvv7MUA7eO0-1920.jpg",
    result: "Проблемы с предохранителем или реле",
    desc: "Возможно, у автомобиля есть проблемы с предохранителем или реле, требуется дополнительная диагностика и возможный ремонт.",
    nodes: [
    ]
  }

var result23 ={
    answer: "Да",
    is_leaf: true,
    img: "https://avatars.mds.yandex.net/i?id=dd78662ae7927dadc20604fa2b426ad63c130354_l-9221377-images-thumbs&n=13",
    result: "Проблемы с генератором",
    desc: "Предположительно, есть проблемы с генератором, требуется дополнительная диагностика и возможный ремонт.",
    nodes: [
    ]
  }

var result22 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://vladimirpost.ru/wp-content/uploads/d/d/6/dd6663e21b42e86623b517e00ac88655.jpeg",
    result: "Блокировка рулевого колеса",
    desc: "Возможно, у автомобиля есть проблемы с блокировкой рулевого колеса, требуется дополнительная диагностика и ремонт.",
    nodes: [
    ]
  }

var result21 ={
    answer: "Да",
    is_leaf: true,
    img: "https://as-152.ru/wp-content/uploads/0/3/0/03018132b7f6e7b3366fd88da21d63f5.jpeg",
    result: "Проблемы с двигателем",
    desc: "Предположительно, есть проблемы с двигателем, требуется дополнительная диагностика и ремонт.",
    nodes: [
    ]
  }

var result20 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://replicadisk.ru/wp-content/uploads/f/9/e/f9eaeb107fea6111afc8a1470cba2f12.jpeg",
    result: "Проблемы с топливным насосом",
    desc: "Возможно, у автомобиля есть проблемы с топливным насосом, требуется дополнительная диагностика и возможная замена.",
    nodes: [
    ]
  }

var result19 ={
    answer: "Нет",
    is_leaf: true,
    img: "Загрязнен топливный фильтр",
    result: "Загрязнен топливный фильтр",
    desc: "Возможно, у автомобиля загрязнен топливный фильтр, требуется его замена.",
    nodes: [
    ]
  }

var result18 ={
    answer: "Да",
    is_leaf: true,
    img: "http://raceportal.ru/images/pages/tech-theory/NGK/kz/ngk_kerzenschachtspule_querschnitt_ru.jpg",
    result: "Проблемы с катушкой зажигания",
    desc: "Предположительно, есть проблемы с катушкой зажигания, требуется дополнительная диагностика и возможная замена.",
    nodes: [
    ]
  }

var result17 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://taksi007.ru/wp-content/uploads/a/3/d/a3d2548f3f0642651a8378f681240025.png",
    result: "Проблемы с генератором",
    desc: "Возможно, у автомобиля есть проблемы с генератором, требуется дополнительная диагностика и возможный ремонт.",
    nodes: [
    ]
  }

var result16 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://avtodozorshop.ru/wp-content/uploads/c/f/e/cfecda4d8b39cacf57a137a10c5ef01a.jpeg",
    result: "Проблемы с ремнем генератора",
    desc: "Возможно, у автомобиля есть проблемы с ремнем генератора, требуется дополнительная диагностика и возможная замена.",
    nodes: [
    ]
  }

var result15 ={
    answer: "Да",
    is_leaf: true,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/8074369/pub_6471825d8dcfc23d8d1bd8da_6471827c3ee13d1da20420b4/smart_crop_516x290",
    result: "Проблемы с генератором",
    desc: "Предположительно, есть проблемы с генератором, требуется дополнительная диагностика и возможный ремонт.",
    nodes: [
    ]
  }

var result14 ={
    answer: "Да",
    is_leaf: true,
    img: "https://dvd-auto.ru/800/600/https/theslide.ru/img/thumbs/4ef05d37c3ec5d4027aa7be15fba64b6-800x.jpg",
    result: "Проблема с катушкой зажигания",
    desc: "Предположительно, есть проблемы с катушкой зажигания, требуется дополнительная диагностика и возможная замена.",
    nodes: [
    ]
  }

var result13 ={
    answer: "Да",
    is_leaf: true,
    img: "https://avtodozorshop.ru/wp-content/uploads/f/d/5/fd575e68e083c70d3eb59200f729f97d.jpeg",
    result: "Проблема с проводами зажигания",
    desc: "Предположительно, есть проблемы с проводами зажигания, требуется дополнительная диагностика и возможная замена.",
    nodes: [
    ]
  }

var result12 ={
    answer: "Да",
    is_leaf: true,
    img: "https://a.d-cd.net/59c261cs-960.jpg",
    result: "Проблема с катушкой зажигания",
    desc: "Предположительно, есть проблемы с катушкой зажигания, требуется дополнительная диагностика и возможная замена.",
    nodes: [
    ]
  }

var result11 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://avtodozorshop.ru/wp-content/uploads/0/f/d/0fd0178fae6d940cb3d4629907deb1ca.jpeg",
    result: "Проблема с форсунками",
    desc: "Возможно, у автомобиля есть проблемы с форсунками, требуется дополнительная диагностика.",
    nodes: [
    ]
  }

var result10 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://avtohelpeer.ru/wp-content/uploads/2021/01/neispravnosti_RDT_princip.jpg",
    result: "Проблема с топливной рампой",
    desc: "Возможно, у автомобиля есть проблемы с топливной рампой, требуется дополнительная диагностика.",
    nodes: [
    ]
  }

var result9 ={
    answer: "Да",
    is_leaf: true,
    img: "https://a.d-cd.net/C4ygvwxq8uvWOhqsKvEM4tvR8gc-1920.jpg",
    result: "Проблема с форсунками",
    desc: "Предположительно, есть проблемы с форсунками, требуется дополнительная диагностика и возможная замена.",
    nodes: [
    ]
  }

var result8 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://m-polo.ru/wp-content/uploads/2/6/1/2613f5caea7eee20394b1fe3f996bd95.jpeg",
    result: "Пробелмы с проводкой ЭБУ",
    desc: "Возможно, у автомобиля есть проблемы с проводкой ЭБУ, требуется дополнительная диагностика.",
    nodes: [
    ]
  }

var result7 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://topavtoreg.ru/wp-content/uploads/5/0/7/507cdbca73b4e2a3ec25dd1822a58bae.jpeg",
    result: "Проблемы с датчиком положения коленвала",
    desc: "Возможно, у автомобиля есть проблемы с датчиком положения коленвала, требуется дополнительная диагностика.",
    nodes: [
    ]
  }

var result6 ={
    answer: "Да",
    is_leaf: true,
    img: "https://avtodozorshop.ru/wp-content/uploads/1/a/d/1ad51736377ab02c98941d227227ab3e.jpeg",
    result: "Проблемы с двигателем",
    desc: "Предположительно, есть проблемы с двигателем, требуется дополнительная диагностика и ремонт.",
    nodes: [
    ]
  }

var result5 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://avtodozorshop.ru/wp-content/uploads/6/3/e/63ea6a5ab74fe8df3fe85e3fe1b536a8.jpeg",
    result: "Проблемы с глушителем",
    desc: "Возможно, у автомобиля есть проблемы с глушителем, требуется дополнительная диагностика.",
    nodes: [
    ]
  }

var result4 ={
    answer: "Да",
    is_leaf: true,
    img: "https://www.6467878.ru/static/files/image/c8814751554fe6fa050d109f48e8f4b9.jpg",
    result: "Автомобиль исправен",
    desc: "Автомобиль в хорошем состоянии, нет обнаруженных проблем",
    nodes: [
    ]
  }

var result3 ={
    answer: "Да",
    is_leaf: true,
    img: "https://pkfst.ru/800/600/https/i.ytimg.com/vi/DkaIBaHXXCQ/maxresdefault.jpg",
    result: "Забит каталитический нейтрализатор",
    desc: "Предположительно, каталитический нейтрализатор забит и требует замены или чистки.",
    nodes: [
    ]
  }

var result2 ={
    answer: "Нет",
    is_leaf: true,
    img: "https://steelcircle.ru/imagesa/pic_2702.jpg",
    result: "Проблемы с выхлопной системой",
    desc: "Возможно, у автомобиля есть проблемы с выхлопной системой, требуется дополнительная диагностика.",
    nodes: [
    ]
  }

var result1 ={
    answer: "Да",
    is_leaf: true,
    img: "https://www.maib.md/storage/media/2020/1/20/maib-finanteaza-afacerile-tinerilor-antreprenori-prin-programul-facilitatea-de-creditare-a-tinerilor/maib-finanteaza-afacerile-tinerilor-antreprenori-prin-programul-facilitatea-de-creditare-a-tinerilor.png",
    result: "Автомобиль исправен",
    desc: "Автомобиль в хорошем состоянии, нет обнаруженных проблем.",
    nodes: [
    ]
  }

 var node30 = {
    answer: "Да",
    question: 'Предохранители исправны?',
    is_leaf: false,
    img: "https://vesta-lada.ru/wp-content/uploads/2018/01/avtopredohraniteli.jpg",
desc: "Проверьте все предохранители, связанные с системой запуска, на наличие перегорания.",
    nodes: [
      result28,
      result29
    ],
  }

  var node29 = {
    answer: "Да", 
    question: 'Ремень генератора в порядке?',
    is_leaf: false,
    img: "https://a.d-cd.net/l1URdsqJ08FIi1O7fw_jHvTNfxs-960.jpg",
desc: "Проверьте натяжение ремня генератора. Изношенный или ослабленный ремень может привести к неисправности генератора.",
    nodes: [
      node30,
      result30
    ],
  }

  var node28 = {
    answer: "Да",
    question: 'Бендекс стартера исправен?',
    is_leaf: false,
    img: "https://simaxauto.ru/wp-content/uploads/a/a/0/aa09c842c29ff18428c9b5b6548b5c70.jpeg",
desc: "Проверьте, зацепляется ли бендекс стартера с маховиком при запуске.	 Неисправный бендекс может привести к проскальзыванию стартера.",
    nodes: [
      result25,
      result26
    ],
  }

  var node27 = {
    answer: "Нет",
    question: 'Предохранители реле впорядке?',
    is_leaf: false,
    img: "https://armand-auto.ru/wp-content/uploads/b/b/7/bb7e8f6ab342cb0e51521a55208ec191.jpeg",
desc: "ППроверьте предохранители и реле, связанные с системой запуска, на наличие перегорания.",
    nodes: [
      result23,
      result24
    ],
  }

  var node26 = {
    answer: "Нет",
    question: 'Втягивающее реле стартера исправно?',
    is_leaf: false,
    img: "https://etrp-crmp.ru/wp-content/uploads/0/f/0/0f0a171251d775c14429a22293a43789.jpg",
desc: "Проверьте работу втягивающего реле, послушав щелчок при включении зажигания. Неисправное реле не позволит стартеру вращаться.",
    nodes: [
      node28,
      result27
    ],
  }

  var node25 = {
    answer: "Нет",
    question: 'Генератор исправен?',
    is_leaf: false,
    img: "https://a.d-cd.net/jQAAAgNP8-A-960.jpg",
desc: "Проверьте напряжение генератора с помощью мультиметра при работающем двигателе. Неисправный генератор может разрядить аккумулятор.",
    nodes: [
      node29,
      result31
    ],
  }

  var node24 = {
    answer: "Да",
    question: 'Датчик положения коленвала исправен?',
    is_leaf: false,
    img: "https://armand-auto.ru/wp-content/uploads/0/3/8/0383daa3149ada8271e6f979f9675654.jpeg",
desc: "Проверьте датчик положения коленвала с помощью диагностического сканера. Неисправный датчик может не давать сигнала о положении коленвала, что приведет к проблемам с запуском.",
    nodes: [
      result6,
      result7
    ],
  }

  var node23 = {
    answer: "Нет",
    question: 'Провода ЭБУ в порядке?',
    is_leaf: false,
    img: "https://ligkaskad.ru/wp-content/uploads/b/e/0/be064410f56b564d1053c640361277b3.jpeg",
desc: "Проверьте все соединения проводов ЭБУ на наличие коррозии или ослабления.",
    nodes: [
      node24,
      result8
    ],
  }

  var node22 = {
    answer: "Да",
    question: 'Топливная рампа исправна?',
    is_leaf: false,
    img: "https://precizika.ru/upload/phoenix/022/987t4elbodqu8gimyzds3ot1jhf6p9gs/34p.jpg",
desc: "Проверьте топливную рампу на наличие утечек. Неисправная топливная рампа может привести к падению давления топлива.",
    nodes: [
      result9,
      result10
    ],
  }

  var node21 = {
    answer: "Нет",
    question: 'Форсунки исправны?',
    is_leaf: false,
    img: "https://nb-tomsk.ru/wp-content/uploads/0/6/1/06178a37bc9b74f48dc9ed57ce281fdf.jpeg",
desc: "Проверьте форсунки с помощью диагностического сканера. Неисправные форсунки могут не подавать топливо в двигатель.",
    nodes: [
      node22,
      result11
    ],
  }

  var node20 = {
    answer: "Да",
    question: 'Провода зажигания исправны?',
    is_leaf: false,
    img: "https://avtodozorshop.ru/wp-content/uploads/0/3/a/03af6ea50e3d66d860b0a776a3624d21.jpeg",
desc: "Проверьте провода зажигания на наличие повреждений, трещин или пробоев. Неисправные провода могут препятствовать прохождению искры.",
    nodes: [
      result12,
      result13
    ],
  }

  var node19 = {
    answer: "Нет",
    question: 'Катушка зажигания исправна??',
desc: "Проверьте катушку зажигания с помощью диагностического сканера или мультиметра. Неисправная катушка может не давать искры.",
    is_leaf: false,
    img: "https://avatars.dzeninfra.ru/get-zen_doc/1779163/pub_5e4cf38cfc020165b28c3e84_5e4cf68edf21a67d43583fc6/scale_1200",
    nodes: [
      node20,
      result14
    ],
  }

  var node18 = {
    answer: "Да",
    question: 'Ремень генератора в порядке?',
desc: "Проверьте натяжение ремня генератора. Изношенный или ослабленный ремень может привести к неисправности генератора.",
    is_leaf: false,
    img: "https://a.d-cd.net/918a791s-960.jpg",
    nodes: [
      result15,
      result16
    ],
  }

  var node17 = {
    answer: "Нет",
    question: 'Генератор исправен?',
    is_leaf: false,
    img: "Генератор исправен?",
desc: "Проверьте напряжение генератора с помощью мультиметра при работающем двигателе.Неисправный генератор может разрядить аккумулятор.",
    nodes: [
      node18,
      result17
    ],
  }

  var node16 = {
    answer: "Да",
    question: 'Топливный фильтр чистый?',
    is_leaf: false,
    img: "https://akb-servis.ru/upload/medialibrary/25f/25f54e300e7e727628cff45b91ab6cda.jpg",
desc: " Загрязненный фильтр может препятствовать прохождению топлива.",
    nodes: [
      result18,
      result19
    ],
  }

  var node15 = {
    answer: "Нет",
    question: 'Топливный насос исправен?',
    is_leaf: false,
    img: "https://spb.wilgood.ru/simage/1/spb/tekhobsluzhivanie/reglamentnoe-to/zamena-toplivnogo-filtra/great-wall/img.png",
desc: "Проверьте работу топливного насоса, послушав его звук при включении зажигания. Используйте манометр, чтобы проверить давление в топливной рампе.",
    nodes: [
      node16,
      result20
    ],
  }

  var node14 = {
    answer: "Да",
    question: 'Блокировка рулевого колеса снята?',
    is_leaf: false,
    img: "https://img.youtube.com/vi/vAZcg9dkouA/maxresdefault.jpg",
desc: "Убедитесь, что рулевое колесо не заблокировано, так как это может помешать запуску.",
    nodes: [
      result21,
      result22
    ],
  }

  var node13 = {
    answer: "Да",
    question: 'Соединение проводов в порядке?',
    is_leaf: false,
    img: "https://i-a.d-cd.net/D4DzpxKTWulROWAhNAJsHkS0j8c-1920.jpg",
desc: "Проверьте все соединения проводов на наличие коррозии или ослабления.",
    nodes: [
      node14,
      result27
    ],
  }

  var node12 = {
    answer: "Да",
    question: 'Стартер исправен?',
    is_leaf: false,
    img: "https://autoisauto.ru/wp-content/uploads/2018/02/starter.jpg",
desc: "Проверьте, вращается ли стартер при включении зажигания. Проверьте его звук на наличие шума или скрежета.",
    nodes: [
      node13,
      result26
    ],
  }

  var node11 = {
    answer: "Нет",
    question: 'Аккумулятор заряжен?',
    is_leaf: false,
    img: "https://centr-akb.ru/wp-content/uploads/2021/09/Kak-zaryazhat-akkumulyator.jpg",
desc: "Проверьте напряжение аккумулятора с помощью мультиметра. Если напряжение низкое, аккумулятор нужно зарядить.",
    nodes: [
      node12,
      node25
    ],
  }

  var node10 = {
    answer: "Нет",
    question: 'Глушитель исправен?',
    is_leaf: false,
    img: "https://avszapad.ru/images/slide/slide2/1.jpg",
desc: "Проверьте глушитель на наличие повреждений или отверстий. Неисправный глушитель может привести к утечке выхлопных газов.",
    nodes: [
      result4,
      result5
    ],
  }

  var node9 = {
    answer: "Нет",
    question: 'Каталитический нейтрализатор забит?',
    is_leaf: false,
    img: "https://avatars.mds.yandex.net/get-vertis-journal/4466156/2.jpg_1674645928225/orig",
desc: "Проверьте, нет ли засорения каталитического нейтрализатора, используя диагностический сканер. Забитый катализатор может вызвать проблемы с запуском.",
    nodes: [
      result3,
      node10
    ],
  }

  var node8 = {
    answer: "Да",
    question: 'Выхлопная система исправна?',
    is_leaf: false,
    img: "https://razbor116.ru/wp-content/uploads/2023/02/2023-02-12-21-54-30.jpg",
desc: "Проверьте наличие засоров или повреждений в выхлопной системе. Обратите внимание на цвет и запах выхлопных газов.",
    nodes: [
      result1,
      result2
    ],
  }

  var node7 = {
    answer: "Да",
    question: 'Датчики двигателя исправны?',
    is_leaf: false,
    img: "https://s3.thingpic.com/images/ae/BE4SxDiCL9uSaLfkgJzgRFN9.jpeg",
desc: "Проверьте работу датчиков с помощью диагностического сканера. Некоторые датчики можно проверить с помощью мультиметра.",
    nodes: [
      node8,
      node9
    ],
  }

  var node6 = {
    answer: "Да",
    question: 'Компрессия в цилиндрах нормальная?',
    is_leaf: false,
    img: "https://yurymerkulov.ru/wp-content/uploads/6/0/e/60eb258b89ea62679e87ad8805797f43.jpeg",
desc: "Измерьте компрессию в каждом цилиндре с помощью компрессометра.",
    nodes: [
      node7,
      node23
    ],
  }
var node5 = {
answer: "Да",
question: 'топливо поступает в двигатель?',
is_leaf: false,
img: "https://dtmto.ru/wp-content/uploads/4/f/8/4f854bdced0ef7ee4ef40a8d1ca6c53d.jpeg",
desc: "Проверьте, есть ли топливо в топливной рампе, используя манометр. Проверьте работу топливного насоса, послушав его звук при включении зажигания.",
nodes: [
node6,
node21
],
}
var node4 = {
answer: "Да",
question: 'Есть ли искра в свечах зажигания?',
is_leaf: false,
img: "https://armand-auto.ru/wp-content/uploads/b/e/b/beb28a717eebbd434a494b908d2a6ebb.jpeg",
desc: "Отключите свечу зажигания и проверьте наличие искры при попытке запуска.",
nodes: [
node5,
node19
],
}
var node3 = {
answer: "Да",
question: 'Аккумулятор заряжен?',
is_leaf: false,
img: "https://centr-to.ru/storage/uploads/blog/Articles/kak-zaryajat-gelevyi-akkumulyator/3.jpg",
desc: "Проверьте напряжение аккумулятора с помощью мультиметра. Если напряжение низкое, аккумулятор нужно зарядить.",
nodes: [
node4,
node17
],
}
var node2 = {
answer: "Да",
question: 'Уровень топлива нормальный?',
is_leaf: false,
img: "https://supersto.by/wp-content/uploads/2020/02/1561848883193416625.jpg",
desc: "Убедитесь, что в баке достаточно топлива.",
nodes: [
node3,
node15
],
}
var node1 = {
question: 'Двигатель запускается?',
is_leaf: false,
img: "https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-1be6865d-c244-4cc9-b8f3-3e4c1f21a3e1",
desc: "Проверьте, вращается ли стартер и пытается ли завести двигатель.",
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
<		div className="question1">Описание: {cur.desc}</div>
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
              <div className="question1"> {cur.desc}</div>
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