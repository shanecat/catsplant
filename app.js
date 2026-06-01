const qaItems = [
  {
    question: "空氣植物要種在土裡嗎？",
    answer: "不需要。空氣植物主要由葉片吸收水分與養分，適合固定在木頭或吊掛展示，重點是保持通風、乾透與斜射光環境。",
  },
  {
    question: "多久澆一次水比較適合？",
    answer: "夏天約 1-3 天傍晚天氣涼水後噴水，冬天約 3-5 天清晨或下午一次；實際仍要依照環境濕度、通風與植株狀態調整，寒流來時建議停止澆水。",
  },
  {
    question: "空氣鳳梨可以用「泡水」的方式來澆水嗎？",
    answer: "可以，但泡水需要格外謹慎。時間建議控制在數分鐘至半小時內，不宜久泡；泡水後務必將植株倒掛或輕甩，徹底去除葉心積水，並在通風處完全乾透後再移回。對於剛接觸空鳳的新手，建議先採取「霧狀噴濕葉面」的澆水方式最為安全。",
  },
  {
    question: "空氣植物（空氣鳳梨）需要施肥嗎？",
    answer: "肥料並非必需品，光照、通風與水分才是關鍵。若想讓植株長得更壯，可在春、夏兩季的生長旺盛期，每月定期補充 1 次高度稀釋的液態肥料（建議稀釋倍數比一般植物再淡一倍）；切記「寧淡勿濃」，少量即可，以免造成肥傷。",
  },
  {
    question: "室內可以養空氣鳳梨嗎？",
    answer: "可以，但並不十分推薦。如果一定要養在室內，請務必嚴格把關「光線」與「通風」：建議放置在明亮的散射光處，並避免長時間處於陰暗悶熱的環境；若室內氣流不暢，澆水後可定時移至室外通風處晾乾，或利用小風扇帶動空氣循環",
  },
    {
    question: "為什麼我收到的電捲或霸王，屁股黑黑的？是爛心了嗎？",
    answer: "別緊張！有些空氣鳳梨（如電捲、霸王）的木質化基部天生就帶有暗褐色或黑色，這通常是正常的。如果擔心，可以先輕輕搖晃葉子看是否穩固，並請「千萬不要」動手拔除葉子，歡迎直接拍照私訊我們幫您確認喔！",
  },
    {
    question: "我是新手，有推薦先從什麼品種入手嗎？",
    answer: "首推「小精靈系列」！它是公認的超級入門款，不僅價格親民、適應力強，而且非常容易開花和長側芽，絕對能讓你成就感爆棚！",
  },  
      {
    question: "怎麼樣的環境才算「通風」呢？",
    answer: "最簡單的判斷標準：澆水過後，植株能在 1~2 小時內自然風乾，就代表通風良好囉！。",
  }, 
      {
    question: "空氣植物的栽種三要素是什麼？",
    answer: "只要掌握三大基礎：陽光（柔和斜射光）、空氣（環境通風）、水（適度噴灑），就能輕鬆養活！",
  }, 
      {
    question: "開花後是不是會死？",
    answer: "空氣鳳梨是多年生的草本植物，一生只綻放一次美麗。花期過後，母株便會開始孕育新生命、萌發側芽。雖然母株在功成身退後會逐漸枯萎，但枯萎的時間長短取決於它的健康狀況；若是母株身強體壯，甚至能一口氣產下超過10顆強健的側芽寶寶呢！",
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
