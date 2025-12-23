// شخصية عقل
const aql = document.getElementById("aql");
const box = document.getElementById("aql-box");

const messages = [
  "هل تساءلت يومًا لماذا نؤمن بما نؤمن به؟",
  "الشك ليس ضعفًا، بل أداة فهم.",
  "التفكير الحر يبدأ بسؤال صادق.",
  "لا شيء مقدس أمام العقل.",
  "اسأل قبل أن تصدّق."
];

function showMessage(text) {
  box.innerText = text;
  box.style.display = "block";
  setTimeout(() => box.style.display = "none", 6000);
}

// ترحيب أول مرة فقط
if (!localStorage.getItem("aqlVisited")) {
  setTimeout(() => {
    showMessage("مرحبًا، أنا عقل. مهمتي أن أطرح الأسئلة لا الإجابات.");
    localStorage.setItem("aqlVisited", "true");
  }, 2000);
}

// عند الضغط
aql.addEventListener("click", () => {
  const random = messages[Math.floor(Math.random() * messages.length)];
  showMessage(random);
});

// تتبع العين للمؤشر
const eyes = document.querySelectorAll(".eye");
document.addEventListener("mousemove", e => {
  eyes.forEach(eye => {
    const rect = eye.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x);
    eye.style.transform = `translate(${Math.cos(angle)*3}px, ${Math.sin(angle)*3}px)`;
  });
});
const aiBtn = document.getElementById('ai-btn');
const aiPopup = document.getElementById('ai-popup');
const closeAi = document.getElementById('close-ai');
const sendBtn = document.getElementById('send-btn');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

aiBtn.addEventListener('click', () => aiPopup.style.display = 'block');
closeAi.addEventListener('click', () => aiPopup.style.display = 'none');

sendBtn.addEventListener('click', () => sendMessage());
userInput.addEventListener('keypress', e => {
  if(e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const msg = userInput.value.trim();
  if(msg === '') return;

  addMessage('انت', msg);
  userInput.value = '';

  // الرد البسيط
  let reply = getReply(msg);
  setTimeout(() => addMessage('الذكاء الاصطناعي', reply), 500);
}

function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = `${sender}: ${text}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// نموذج ردود بسيط
function getReply(msg) {
  msg = msg.toLowerCase();
  if(msg.includes('فلسفة')) return 'الفلسفة هي أداة لفهم العالم والعقل البشري.';
  if(msg.includes('دين')) return 'الشك والسؤال جزء طبيعي من التفكير الحر.';
  if(msg.includes('تفكير')) return 'التفكير النقدي يبدأ بالطرح الأسئلة قبل قبول أي شيء.';
  return 'عذرًا، لم أفهم سؤالك، حاول صياغة السؤال بطريقة أخرى.';
}


const aiBtn = document.getElementById('ai-btn');
const aiPopup = document.getElementById('ai-popup');
const closeAi = document.getElementById('close-ai');
const sendBtn = document.getElementById('send-btn');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

aiBtn.addEventListener('click', () => aiPopup.style.display = 'block');
closeAi.addEventListener('click', () => aiPopup.style.display = 'none');

window.addEventListener('click', (e) => {
  if(e.target == aiPopup) aiPopup.style.display = 'none';
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => { if(e.key === 'Enter') sendMessage(); });

function sendMessage() {
  const msg = userInput.value.trim();
  if(msg === '') return;

  addMessage('انت', msg);
  userInput.value = '';

  let reply = getReply(msg);
  setTimeout(() => addMessage('الذكاء الاصطناعي', reply), 500);
}

function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = `${sender}: ${text}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getReply(msg) {
  msg = msg.toLowerCase();
  if(msg.includes('فلسفة')) return 'الفلسفة هي أداة لفهم العالم والعقل البشري.';
  if(msg.includes('دين')) return 'الشك والسؤال جزء طبيعي من التفكير الحر.';
  if(msg.includes('تفكير')) return 'التفكير النقدي يبدأ بالطرح الأسئلة قبل قبول أي شيء.';
  return 'عذرًا، لم أفهم سؤالك، حاول صياغة السؤال بطريقة أخرى.';
}

document.querySelectorAll('.read-more').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // يمنع النزول للصفحة
  });
});

function openPost(postId) {
  alert('هنا يمكنك فتح محتوى المقال: ' + postId);
  // لاحقًا يمكن فتح popup حقيقي
}

function scrollReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;
    if(top < height - 100) el.classList.add('active');
  });
}
window.addEventListener('scroll', scrollReveal);
scrollReveal();
