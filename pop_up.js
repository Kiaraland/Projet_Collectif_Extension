if (document.querySelector(".pop_up")) {
  const button = document.querySelector(".button");
  const circle = document.querySelector(".circle");
  let buttonOn = false;
  button.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (!buttonOn) {
        buttonOn = true;
        circle.style.animation = "moveCircleRight 0.3s forwards";
        button.style.animation = "backgroundYellow 0.3s forwards";
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["appOn.js"],
        });
      } else {
        buttonOn = false;
        circle.style.animation = "moveCircleLeft 0.3s forwards";
        button.style.animation = "backgroundBlue 0.3s forwards";
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["appOff.js"],
        });
      }
    });
  });
}
