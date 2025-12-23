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
