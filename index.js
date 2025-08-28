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


const inputElement = document.getElementById("inputBox");
// Flag to track composition end
let compositionEnded = false;


function handleEvent(event) {
  // Set flag when composition ends
  if (event.type === 'compositionend') {
    compositionEnded = true;
  }

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

inputElement.addEventListener("compositionstart", handleEvent);
inputElement.addEventListener("compositionupdate", handleEvent);
inputElement.addEventListener("compositionend", handleEvent);



const character = document.getElementById('character');


// Generate from curated traditional character list (optimal for extended practice)
function generateFromCuratedList() {
  // Carefully curated list of 500+ traditional Chinese characters
  // Organized by categories for comprehensive CangJie practice
  const traditionalChineseCharacters = [
    // Most common basic characters (50)
    '人', '大', '小', '日', '月', '山', '水', '火', '土', '木',
    '金', '心', '手', '口', '目', '田', '中', '上', '下', '左',
    '右', '前', '後', '東', '西', '南', '北', '好', '不', '來',
    '去', '看', '聽', '說', '寫', '讀', '學', '教', '工', '作',
    '生', '活', '年', '天', '今', '明', '昨', '星', '期', '週',
    
    // Essential traditional characters (50) 
    '個', '們', '這', '那', '裡', '時', '間', '現', '在', '過',
    '國', '語', '文', '字', '書', '話', '問', '答', '愛', '歡',
    '喜', '樂', '開', '關', '進', '出', '入', '內', '外', '裏',
    '邊', '旁', '側', '附', '近', '遠', '離', '到', '達', '往',
    '返', '回', '歸', '續', '停', '始', '終', '完', '成', '做',
    
    // Traditional complex forms (50)
    '傳', '統', '漢', '繁', '體', '簡', '化', '變', '換', '電',
    '腦', '網', '路', '資', '訊', '科', '技', '發', '展', '社',
    '會', '經', '濟', '政', '治', '文', '化', '教', '育', '進',
    '步', '建', '設', '構', '造', '製', '產', '業', '商', '貿',
    '易', '買', '賣', '購', '物', '價', '值', '錢', '財', '富',
    
    // Numbers and time (50)
    '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
    '百', '千', '萬', '億', '兆', '零', '半', '雙', '對', '次',
    '第', '初', '末', '終', '始', '早', '晚', '遲', '快', '慢',
    '急', '緩', '速', '度', '率', '頻', '常', '時', '刻', '分',
    '秒', '瞬', '久', '長', '短', '暫', '永', '臨', '即', '將',
    
    // Daily life and actions (50)
    '動', '靜', '行', '走', '跑', '跳', '坐', '站', '躺', '睡',
    '醒', '起', '床', '洗', '刷', '梳', '穿', '脫', '換', '戴',
    '拿', '放', '提', '抱', '推', '拉', '打', '擊', '敲', '按',
    '壓', '捏', '握', '抓', '撿', '丟', '扔', '投', '接', '給',
    '送', '收', '取', '得', '失', '找', '尋', '搜', '查', '檢',
    
    // Family and relationships (50)
    '父', '母', '兒', '女', '男', '老', '少', '朋', '友', '家',
    '庭', '親', '戚', '夫', '妻', '兄', '弟', '姐', '妹', '祖',
    '孫', '叔', '嬸', '姨', '舅', '姑', '婆', '爺', '奶', '外',
    '公', '婆', '岳', '丈', '媳', '婿', '侄', '甥', '表', '堂',
    '族', '宗', '血', '緣', '關', '係', '情', '感', '愛', '恨',
    
    // Colors and descriptions (50)
    '白', '黑', '紅', '藍', '綠', '黃', '紫', '橙', '粉', '灰',
    '美', '醜', '強', '弱', '聰', '明', '智', '慧', '勇', '敢',
    '善', '惡', '真', '假', '對', '錯', '輕', '重', '厚', '薄',
    '高', '矮', '胖', '瘦', '肥', '瘦', '寬', '窄', '深', '淺',
    '亮', '暗', '清', '濁', '乾', '濕', '熱', '冷', '溫', '涼',
    
    // Body parts and health (50)
    '頭', '髮', '臉', '眼', '鼻', '嘴', '耳', '手', '腳', '身',
    '體', '肩', '背', '胸', '腰', '腿', '膝', '腕', '指', '趾',
    '皮', '肉', '骨', '血', '筋', '脈', '腦', '心', '肺', '肝',
    '腎', '胃', '腸', '齒', '舌', '喉', '頸', '病', '痛', '傷',
    '藥', '醫', '治', '療', '癒', '健', '康', '壯', '弱', '累',
    
    // Nature and weather (50)
    '天', '地', '空', '雲', '雨', '雪', '風', '雷', '電', '陽',
    '陰', '光', '影', '暗', '亮', '星', '月', '日', '夜', '晨',
    '昏', '春', '夏', '秋', '冬', '季', '節', '氣', '候', '溫',
    '熱', '涼', '寒', '暖', '乾', '濕', '潮', '燥', '清', '濁',
    '淨', '髒', '新', '舊', '鮮', '腐', '香', '臭', '甜', '苦',
    
    // Places and buildings (50)
    '國', '省', '市', '縣', '鄉', '鎮', '村', '里', '街', '路',
    '巷', '弄', '號', '樓', '層', '室', '廳', '房', '間', '屋',
    '家', '店', '場', '館', '院', '園', '公', '司', '廠', '校',
    '院', '醫', '銀', '郵', '局', '站', '港', '機', '場', '橋',
    '山', '河', '湖', '海', '島', '洲', '灣', '港', '碼', '頭'
  ];
  
  // Select random character from curated list
  const randomIndex = Math.floor(Math.random() * traditionalChineseCharacters.length);
  const selectedChar = traditionalChineseCharacters[randomIndex];
  
  character.textContent = selectedChar;
  return selectedChar;
}


// Function to check if user input matches displayed character
function checkCharacterMatch() {
  const userInput = inputElement.value.trim();
  const displayedCharacter = character.textContent.trim();
    
  // Check if user input matches the displayed character
  if (userInput === displayedCharacter && compositionEnded == true) {
    inputElement.value = ''; // Clear input
    generateFromCuratedList(); // Generate new character
    compositionEnded = false;
  } 
}


// Add event listener for space key
document.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    checkCharacterMatch();
  }
});



// Initialize the page with a random character
generateFromCuratedList();



