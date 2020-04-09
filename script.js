let submit = document.getElementById("submit-button");

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
};

submit.addEventListener("click", calculate);
