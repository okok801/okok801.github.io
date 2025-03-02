console.clear();

function $(s) {
  return document.querySelector(s);
}

const textbox = $(".result-textbox");
const copyButton = $(".copy-button");
const deeplButton = $(".deepl-button");
const baiduButton = $(".baidu-button");

const deeplLink = "https://www.deepl.com/translator#en/zh/";
const baiduLink = "https://fanyi.baidu.com/#en/zh/";

function noNewLine(s) {
  return s.trim().replaceAll(/(\r\n|\n|\r)/gm, " ");
}

textbox.addEventListener("paste", (event) => {
  event.preventDefault();
  let pasted = event.clipboardData.getData("text");

  textbox.value = noNewLine(textbox.value);
  textbox.value += noNewLine(pasted);
});

copyButton.addEventListener("click", (event) => {
  textbox.value = noNewLine(textbox.value);
  navigator.clipboard.writeText(textbox.value);
});

deeplButton.addEventListener("click", (event) => {
  textbox.value = noNewLine(textbox.value);
  window.open(deeplLink + encodeURIComponent(textbox.value));
});

baiduButton.addEventListener("click", (event) => {
  textbox.value = noNewLine(textbox.value);
  window.open(baiduLink + encodeURIComponent(textbox.value));
});
/*
setInterval(() => {
  console.log(textbox.value);
  textbox.value = "pasted";
}, 100);


*/
