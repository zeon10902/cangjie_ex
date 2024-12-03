// import fs from 'fs/promises'
const content = [
  {
    title: "滕王閣序",
    author: "王勃",
    content:
      "南昌故郡，洪都新府，星分翼軫，地接衡廬，襟三江而帶五湖，控蠻荊而引甌越。物華天寶，龍光射牛斗之墟；人傑地靈，徐孺下陳蕃之榻。雄州霧列，俊彩星馳，臺隍枕夷夏之交，賓主盡東南之美。都督閻公之雅望，棨戟遙臨；宇文新州之懿範，襜帷暫駐。十旬休暇，勝友如雲；千里逢迎，高朋滿座。騰蛟起鳳，孟學士之詞宗；紫電青霜，王將軍之武庫。家君作宰，路出名區；童子何知，躬逢勝餞。時維九月，序屬三秋。潦水盡而寒潭清，煙光凝而暮山紫。儼驂騑於上路，訪風景於崇阿；臨帝子之長洲，得仙人之舊館。層臺聳翠，上出重霄；飛閣翔丹，下臨無地。鶴汀鳧渚，窮島嶼之縈迴；桂殿蘭宮，即岡巒之體勢。披繡闥，俯雕甍，山原曠其盈視，川澤盱其駭矚。閭閻撲地，鐘鳴鼎食之家；舸艦彌津，青雀黃龍之軸。虹銷雨霽，彩徹雲衢。落霞與孤鶩齊飛，秋水共長天一色。漁舟唱晚，響窮彭蠡之濱；雁陣驚寒，聲斷衡陽之浦。遙吟甫暢，逸興遄飛。爽籟發而清風生，纖歌凝而白雲遏。睢園綠竹，氣凌彭澤之樽；鄴水朱華，光照臨川之筆。四美具，二難并。窮睇眄於中天，極娛遊於暇日。天高地迥，覺宇宙之無窮；興盡悲來，識盈虛之有數。望長安於日下，指吳會於雲間。地勢極而南溟深，天柱高而北辰遠。關山難越，誰悲失路之人？萍水相逢，盡是他鄉之客。懷帝閽而不見，奉宣室以何年？嗟乎！時運不齊，命途多舛；馮唐易老，李廣難封。屈賈誼於長沙，非無聖主；竄梁鴻於海曲，豈乏明時？所賴君子安貧，達人知命。老當益壯，寧移白首之心？窮且益堅，不墜青雲之志。酌貪泉而覺爽，處涸轍以猶歡。北海雖賒，扶搖可接；東隅已逝，桑榆非晚。孟嘗高潔，空餘報國之心；阮籍猖狂，豈效窮途之哭？勃三尺微命，一介書生，無路請纓，等終軍之弱冠；有懷投筆，慕宗慤之長風。捨簪笏於百齡，奉晨昬於萬里。非謝家之寶樹，接孟氏之芳鄰。他日趨庭，叨陪鯉對。今茲捧袂，喜託龍門。楊意不逢，撫凌雲而自惜；鍾期既遇，奏流水以何慚！嗚呼！勝地不常，盛筵難再；蘭亭已矣，梓澤丘墟。臨別贈言，幸承恩於偉餞；登高作賦，是所望於羣公。敢竭鄙誠，恭疏短引，一言均賦，四韻俱成。請灑潘江，各傾陸海云爾。",
    link: "https://www.edb.gov.hk/attachment/tc/curriculum-development/kla/chi-edu/resources/secondary-edu/lang/chi_chapter/P127.pdf",
  },
  {
    title: "蘭亭集序",
    author: "王羲之",
    content:
      "永和九年，歲在癸丑，暮春之初，會于會稽山陰之蘭亭，修禊事也。羣賢畢至，少長咸集。此地有崇山峻嶺，茂林修竹；又有清流激湍，映帶左右。引以為流觴曲水，列坐其次；雖無絲竹管絃之盛，一觴一詠，亦足以暢敍幽情。是日也，天朗氣清，惠風和暢；仰觀宇宙之大，俯察品類之盛，所以游目騁懷，足以極視聽之娛，信可樂也！夫人之相與，俯仰一世，或取諸懷抱，晤言一室之內；或因寄所託，放浪形骸之外。雖趨舍萬殊，靜躁不同；當其欣于所遇，暫得于己，快然自足，不知老之將至。及其所之既倦，情隨事遷，感慨係之矣。向之所欣，俛仰之間，以為陳迹，猶不能不以之興懷；況修短隨化，終期于盡。古人云︰「死生亦大矣」，豈不痛哉！每覽昔人興感之由，若合一契；未嘗不臨文嗟悼，不能喻之于懷。固知一死生為虛誕，齊彭殤為妄作。後之視今，亦猶今之視昔，悲夫！故列敍時人，錄其所述。雖世殊事異，所以興懷，其致一也。後之覽者，亦將有感於斯文。",
    link: "https://www.edb.gov.hk/attachment/tc/curriculum-development/kla/chi-edu/resources/secondary-edu/lang/chi_chapter/P122_202306.pdf",
  },
  {
    title: "將進酒",
    author: "李白",
    content:
      "君不見黃河之水天上來，奔流到海不復回！君不見高堂明鏡悲白髮，朝如青絲暮成雪。人生得意須盡歡，莫使金樽空對月！天生我材必有用，千金散盡還復來。烹羊宰牛且為樂，會須一飲三百杯。岑夫子，丹邱生，將進酒，君莫停！與君歌一曲，請君為我傾耳聽！鐘鼓饌玉不足貴，但願長醉不用醒！古來聖賢皆寂寞，唯有飲者留其名。陳王昔時宴平樂，斗酒十千恣歡謔。主人何為言少錢，徑須沽取對君酌！五花馬，千金裘，呼兒將出換美酒，與爾同銷萬古愁！",
    link: "https://www.edb.gov.hk/attachment/tc/curriculum-development/kla/chi-edu/resources/secondary-edu/lang/chi_chapter/P024_201704.pdf",
  },
];


function init_content() {
  try {
    const randomNumber = Math.floor(Math.random() * 3);
    choosenContent = content[randomNumber];

    document.getElementById("title").textContent = choosenContent.title;
    document.getElementById("author").textContent = choosenContent.author;
    document.getElementById("content").textContent = choosenContent.content;
    document.getElementById("link").href = choosenContent.link;
  } catch (err) {
    console.error("Error occurs when initializing content:", err);
  }
}

init_content();

const chart = {
    q : '手',
    w : '田',
    e : '水',
    r : '口',
    t : '廿',
    y : '卜',
    u : '山',
    i : '戈',
    o : '人',
    p : '心',
    a : '日',
    s : '尸',
    d : '木',
    f : '火',
    g : '土',
    h : '竹',
    j : '十',
    k : '大',
    l : '中',
    z : 'Z',
    x : '難',
    c : '金',
    v : '女',
    b : '月',
    n : '弓',
    m : '一'
}

function handleEvent(event) {
  if (event.data.length > sessionStorage.getItem("prev")) {
    sessionStorage.setItem("prev", event.data.length);
    // console.log('>', sessionStorage.getItem('prev'));
  } else {
    sessionStorage.setItem("prev", event.data.length);
    // console.log('< or =', sessionStorage.getItem('prev'));
    return;
  }

  const lastCharacter = event.data[event.data.length - 1];
  const pressedKey = Object.keys(chart).find(
    (key) => chart[key] === lastCharacter
  );
  const virtualKey = document.querySelector(`[data-key="${pressedKey}"]`);
  if (virtualKey) {
    virtualKey.classList.add("pressed");
    setTimeout(() => {
      virtualKey.classList.remove("pressed");
    }, 100);
  }
}

const inputElement = document.getElementById("inputBox");
inputElement.addEventListener("compositionstart", handleEvent);
inputElement.addEventListener("compositionupdate", handleEvent);
inputElement.addEventListener("compositionend", handleEvent);

// document.addEventListener("compositionupdate", (event) => {
//   if (event.data.length > sessionStorage.getItem("prev")) {
//     sessionStorage.setItem("prev", event.data.length);
//     // console.log('>', sessionStorage.getItem('prev'));
//   } else {
//     sessionStorage.setItem("prev", event.data.length);
//     // console.log('< or =', sessionStorage.getItem('prev'));
//     return;
//   }

//   const lastCharacter = event.data[event.data.length - 1];
//   const pressedKey = Object.keys(chart).find(
//     (key) => chart[key] === lastCharacter
//   );
//   const virtualKey = document.querySelector(`[data-key="${pressedKey}"]`);
//   if (virtualKey) {
//     virtualKey.classList.add("pressed");
//     setTimeout(() => {
//       virtualKey.classList.remove("pressed");
//     }, 100);
//   }
// });

// inputBox.addEventListener("keyup", (event) => {
//   if (event.key === "Enter") {
//     check();
//   }
// });

// revealButton.addEventListener('click', () => {
//     answer.innerText = database[randomCharacter].split('').map(letter => chart[letter]).join('');
//     answer.style.display === 'none'
//     ?
//     answer.style.display = 'block'
//     :
//     answer.style.display = 'none';
// })

// function check() {
//     if (inputBox.value === character.innerText) {
//         generator();
//         inputBox.value = '';
//         answer.style.display = 'none';
//     }
// }

// function generator() {
//    randomCharacter = characters[Math.floor(Math.random() * characters.length)];
//    character.innerText = randomCharacter;
// }

// generator();

// function setDynamicVH() {
//   const vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// }

// window.addEventListener('resize', setDynamicVH);
// setDynamicVH();
