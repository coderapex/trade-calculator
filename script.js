let submit = document.getElementById("submit-button");

let showAdvanced = false;

let calculate = () => {
  // render CMP
  let price = parseFloat(document.getElementById("price-value").value);
  document.getElementById("cmp-at").innerHTML = price.toFixed(2);

  // calculate buy and sell price
  let percentage = parseFloat(
    document.getElementById("percentage-value").value
  );
  let delta = parseFloat(price * (percentage / 100));
  let buy = price - delta;
  let sell = price + delta;

  // render buy and sell prices
  document.getElementById("buy-at").innerHTML = buy.toFixed(2);
  document.getElementById("sell-at").innerHTML = sell.toFixed(2);

  // calculate leverage
  let capital = parseFloat(document.getElementById("capital-value").value);
  let leverage = parseFloat(document.getElementById("leverage-value").value);

  let withoutLeverage = Math.floor(capital / price);
  let withLeverage = Math.floor((capital * leverage) / price);

  // render leverage values
  document.getElementById("without-leverage-value").innerHTML = withoutLeverage;
  document.getElementById("with-leverage-value").innerHTML = withLeverage;

  // calculating advanced purchase prices
  // 0.1 0.2 0.3 0.4 0.5
  let ratesArr = [0.1, 0.2, 0.3, 0.4, 0.5];

  let newBuyArr = [];
  let newSellArr = [];

  for (let i = 0; i < ratesArr.length; i++) {
    newBuyArr.push(
      (price + parseFloat(price * (ratesArr[i] / 100))).toFixed(2)
    );
    newSellArr.push(
      (price - parseFloat(price * (ratesArr[i] / 100))).toFixed(2)
    );
  }

  console.log(newBuyArr);
  console.log(newSellArr);

  // render advanced buy prices
  document.getElementById("buy1").firstChild.innerHTML = newBuyArr[0];
  document.getElementById("buy2").firstChild.innerHTML = newBuyArr[1];
  document.getElementById("buy3").firstChild.innerHTML = newBuyArr[2];
  document.getElementById("buy4").firstChild.innerHTML = newBuyArr[3];
  document.getElementById("buy5").firstChild.innerHTML = newBuyArr[4];

  // render advanced sell prices
  document.getElementById("sell1").firstChild.innerHTML = newSellArr[0];
  document.getElementById("sell2").firstChild.innerHTML = newSellArr[1];
  document.getElementById("sell3").firstChild.innerHTML = newSellArr[2];
  document.getElementById("sell4").firstChild.innerHTML = newSellArr[3];
  document.getElementById("sell5").firstChild.innerHTML = newSellArr[4];

  // calculating advanced leverage rates
  // 3x 5x 8x 10x 15x
};

submit.addEventListener("click", calculate);
