export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "メートル", base: 1 },
    { name: "キロメートル", base: 1000 },
    { name: "センチメートル", base: 0.01 },
    { name: "ミリメートル", base: 0.001 },
    { name: "インチ", base: 0.0254 },
    { name: "フィート", base: 0.3048 },
    { name: "ヤード", base: 0.9144 },
    { name: "マイル", base: 1609.344 },
  ];

  converterFrom.innerHTML = "";
  converterTo.innerHTML = "";

  for (const unit of lengthUnit) {
    converterFrom.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
    converterTo.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
  }

  // 最初のオプションを選択
  if (converterFrom.options.length > 0) {
    converterFrom.selectedIndex = 0;
  }
  if (converterTo.options.length > 0) {
    converterTo.selectedIndex = 1;
  }
  // 変換を実行
  function convert() {
    const value = parseFloat(converterInput.value);

    if (isNaN(value)) {
      converterResult.textContent = "数値を入力してください";
      return;
    }

    const fromBase = converterFrom.value;
    const toBase = converterTo.value;
    const converted = (value * fromBase) / toBase;

    // 結果を3桁まで丸める
    converterResult.textContent = `${value} ${lengthUnit[converterFrom.selectedIndex].name} = ${converted.toFixed(3)} ${lengthUnit[converterTo.selectedIndex].name}`;
  }

  converterForm.addEventListener("input", convert);

  // 初期化
  convert(); // 初期値で変換を実行
}
