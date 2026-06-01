const qaItems = [
  {
    question: "空氣植物一定要種在土裡嗎？",
    answer: "不需要。空氣植物主要由葉片吸收水分與養分，適合固定在木頭、石頭、玻璃器皿或吊掛展示，重點是保持通風與乾透。",
  },
  {
    question: "多久澆一次水比較適合？",
    answer: "夏天約 1-3 天傍晚天氣涼水後噴水，冬天約 3-5 天清晨或下午一次；實際仍要依照環境濕度、通風與植株狀態調整，寒流來時建議停止澆水。",
  },
  {
    question: "可以用泡水的方式照顧嗎？",
    answer: "可以，但泡水需謹慎，時間不宜過久。泡後請倒掛或輕甩去除葉心積水，等完全乾透後再放回通風處。",
  },
  {
    question: "空氣植物需要施肥嗎？",
    answer: "肥料非必要。若想補充，春夏生長季可每月 1 次使用稀釋液肥，濃度要淡，少量即可。",
  },
  {
    question: "室內可以養空氣植物嗎？",
    answer: "可以，但要留意光線與通風。建議放在明亮散射光處，避免悶濕與長時間陰暗；若室內通風不足，可定期移到通風處讓植株乾透。",
  },
    {
    question: "ABC？",
    answer: "不透。",
  },
];

const qaList = document.querySelector("#qa-list");

function renderQaItems(items) {
  if (!qaList) return;

  qaList.innerHTML = "";

  items.forEach((item, index) => {
    const qaItem = document.createElement("article");
    qaItem.className = "qa-item";

    const button = document.createElement("button");
    button.className = "qa-question";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `qa-answer-${index}`);

    const questionText = document.createElement("span");
    questionText.textContent = item.question;

    const icon = document.createElement("span");
    icon.className = "qa-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "+";

    const answer = document.createElement("div");
    answer.className = "qa-answer";
    answer.id = `qa-answer-${index}`;
    answer.hidden = true;

    const answerText = document.createElement("p");
    answerText.textContent = item.answer;

    button.append(questionText, icon);
    answer.append(answerText);
    qaItem.append(button, answer);
    qaList.append(qaItem);

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      closeAllQaItems();

      if (!isOpen) {
        button.setAttribute("aria-expanded", "true");
        icon.textContent = "-";
        answer.hidden = false;
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

function closeAllQaItems() {
  qaList.querySelectorAll(".qa-item").forEach((item) => {
    const button = item.querySelector(".qa-question");
    const icon = item.querySelector(".qa-icon");
    const answer = item.querySelector(".qa-answer");

    button.setAttribute("aria-expanded", "false");
    icon.textContent = "+";
    answer.style.maxHeight = "0px";

    window.setTimeout(() => {
      if (button.getAttribute("aria-expanded") === "false") {
        answer.hidden = true;
      }
    }, 220);
  });
}

renderQaItems(qaItems);
