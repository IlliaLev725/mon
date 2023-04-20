function reloadPage() {
  coinToUsd(coinSend, 1), coinToUsd(coinReceive, 2);
}
function load(e = 2e3) {
  console.log("loading");
  var t = document.getElementById("loader");
  let n;
  (t.style.display = "flex"),
    (n = setTimeout(() => {
      t.style.display = "none";
    }, e));
}
function coinToUsd(e, t) {
  var n = new XMLHttpRequest();
  (n.onreadystatechange = function () {
    4 == this.readyState &&
      200 == this.status &&
      ((res = n.responseText),
      (res = JSON.parse(res)),
      1 == t
        ? (sendUsd = +res.data.market_data.price_usd)
        : (receiveUsd = +res.data.market_data.price_usd),
      inputAmountSet());
  }),
    customCoins[e]
      ? (1 == t ? (sendUsd = customCoins[e]) : (receiveUsd = customCoins[e]),
        inputAmountSet())
      : (n.open(
          "GET",
          "https://data.messari.io/api/v1/assets/" + e + "/metrics",
          !0
        ),
        n.setRequestHeader("x-messari-api-key", apiKey),
        n.send());
}
function chooseCoin(e, t, n = "-") {
  (tn = 1 == t ? 2 : 1),
    1 == t ? (coinSend = e) : (coinReceive = e),
    (inTextEN = 1 == t ? "Changing " + e : "To " + e),
    (inTextRU = 1 == t ? "Меняем " + e : "На " + e),
    (document.getElementById(
      1 == t ? "sendCoinInfo" : "receiveCoinInfo"
    ).innerHTML =
      "ru" == localStorage.getItem("language") ? inTextRU : inTextEN),
    console.log("url(../assets/coins/" + e + ".png)"),
    1 == t
      ? (document.getElementById("mobileSend").style.backgroundImage =
          "url('../images/" + e + ".svg')")
      : (document.getElementById("mobileReceive").style.backgroundImage =
          "url('../images/" + e + ".svg')"),
    1 == t
      ? document.getElementById("sendCoins").classList.add("mobileHide")
      : document.getElementById("receiveCoins").classList.add("mobileHide");
  const o = document.querySelectorAll(".coin-" + (1 == t ? 2 : 1)),
    s = document.querySelectorAll(".coin-" + (1 == t ? 1 : 2));
  o.forEach((e) => {
    e.style.display = "flex";
  }),
    s.forEach((e) => {
      e.style.background = "white";
    });
  var i = document.getElementById(`${n}-1`),
    d = document.getElementById(`${n}-2`);
  if (1 == t) {
    if (("-" != n && (sendCoinName = n), d)) {
      if (document.getElementsByClassName("hide_element").length > 0) {
        let e = document.getElementsByClassName("hide_element");
        for (let t = 0; t < e.length; t++)
          e[t].classList.remove("hide_element");
      }
      document.getElementById(`${n}-2`).classList.add("hide_element");
    }
    if (i) {
      if (document.getElementsByClassName("focus_element").length > 0) {
        let e = document.getElementsByClassName("focus_element");
        for (let t = 0; t < e.length; t++)
          e[t].classList.remove("focus_element");
      }
      document.getElementById(`${n}-1`).classList.add("focus_element");
    }
  } else {
    if (("-" != n && (receiveCoinName = n), d)) {
      if (document.getElementsByClassName("hide_element").length > 0) {
        let e = document.getElementsByClassName("hide_element");
        for (let t = 0; t < e.length; t++)
          e[t].classList.remove("hide_element");
      }
      document.getElementById(`${n}-1`).classList.add("hide_element");
    }
    if (i) {
      if (document.getElementsByClassName("focus_element").length > 0) {
        let e = document.getElementsByClassName("focus_element");
        for (let t = 0; t < e.length; t++)
          e[t].classList.remove("focus_element");
      }
      document.getElementById(`${n}-2`).classList.add("focus_element");
    }
  }
  coinToUsd(e, t);
}
function rotate() {
  load();
  var e = document.getElementById("switchBtn");
  rotated ? (e.className = "switchBtn") : (e.className = "switchBtn rotate"),
    (rotated = !rotated);
  var t = coinReceive;
  chooseCoin(coinSend, 2), chooseCoin(t, 1);
}
function debounce(e, t = 2e3) {
  let n;
  return (...o) => {
    clearTimeout(n),
      (n = setTimeout(() => {
        e.apply(this, o);
      }, t));
  };
}

const BNB = 325.42;
const BTC = 28716.50;
const ETH = 1964.55;
const DOGE = 0.087;
const ADA = 0.41;
const SHIB = 0.000011;
const SQL = 0.06311;
const TRX = 0.066;
const XRP = 0.49;
const USDT = 1.00;
const XLM = 0.097;
const LTC = 28599.80;

const EUR = 1.07;

function inputAmountSet() {
  //   (pairValue = 0),
  //     pairs[coinSend + coinReceive]
  //       ? (pairValue =
  //           sendUsd / receiveUsd +
  //           ((sendUsd / receiveUsd) * pairs[coinSend + coinReceive]) / 100)
  //       : 1 == addPercentage
  //       ? (pairValue =
  //           sendUsd / receiveUsd + ((sendUsd / receiveUsd) * percentage) / 100)
  //       : (pairValue =
  //           sendUsd / receiveUsd - ((sendUsd / receiveUsd) * percentage) / 100),
  //     console.log(pairValue),
  let pairValue = 0;

  if (coinSend === "BTC" && coinReceive === "BNB") {
    pairValue = BTC / BNB + ((BTC / BNB) * 1) / 100;
  }
  if (coinSend === "BTC" && coinReceive === "ETH") {
    pairValue = BTC / ETH + ((BTC / ETH) * 1) / 100;
  }
  if (coinSend === "BTC" && coinReceive === "DOGE") {
    pairValue = BTC / DOGE + ((BTC / DOGE) * 1) / 100;
  }
  if (coinSend === "BTC" && coinReceive === "ADA") {
    pairValue = BTC / ADA + ((BTC / ADA) * 1) / 100;
  }
  if (coinSend === "BTC" && coinReceive === "SHIB") {
    pairValue = BTC / SHIB + ((BTC / SHIB) * 1) / 100;
  }
  if (coinSend === "BTC" && coinReceive === "SQL") {
    pairValue = BTC / SQL + ((BTC / SQL) * 1) / 100;
  }
  if (coinSend === "BTC" && coinReceive === "TRX") {
    pairValue = BTC / TRX + ((BTC / TRX) * 1) / 100;
  }
  if (coinSend === "BTC" && coinReceive === "XRP") {
    pairValue = BTC / XRP + ((BTC / XRP) * 1) / 100;
  }
  if (coinSend === "BTC" && coinReceive === "USDT") {
    pairValue = BTC / USDT + ((BTC / USDT) * 1) / 100;
  }
  if (coinSend === "BTC" && coinReceive === "XLM") {
    pairValue = BTC / XLM + ((BTC / XLM) * 1) / 100;
  }
  if (coinSend === "BTC" && coinReceive === "LTC") {
    pairValue = BTC / LTC + ((BTC / LTC) * 1) / 100;
  }
  if (coinSend === "BTC" && coinReceive === "CARD(EUR)") {
    pairValue = BTC * EUR;
  }
  if (coinSend === "BTC" && coinReceive === "CARD(USD)") {
    pairValue = BTC
  }

  if (coinSend === "BNB" && coinReceive === "BTC") {
    pairValue = BNB / BTC + ((BNB / BTC) * 1) / 100;
  }
  if (coinSend === "BNB" && coinReceive === "ETH") {
    pairValue = BNB / ETH + ((BNB / ETH) * 1) / 100;
  }
  if (coinSend === "BNB" && coinReceive === "DOGE") {
    pairValue = BNB / DOGE + ((BNB / DOGE) * 1) / 100;
  }
  if (coinSend === "BNB" && coinReceive === "ADA") {
    pairValue = BNB / ADA + ((BNB / ADA) * 1) / 100;
  }
  if (coinSend === "BNB" && coinReceive === "SHIB") {
    pairValue = BNB / SHIB + ((BNB / SHIB) * 1) / 100;
  }
  if (coinSend === "BNB" && coinReceive === "SQL") {
    pairValue = BNB / SQL + ((BNB / SQL) * 1) / 100;
  }
  if (coinSend === "BNB" && coinReceive === "TRX") {
    pairValue = BNB / TRX + ((BNB / TRX) * 1) / 100;
  }
  if (coinSend === "BNB" && coinReceive === "XRP") {
    pairValue = BNB / XRP + ((BNB / XRP) * 1) / 100;
  }
  if (coinSend === "BNB" && coinReceive === "USDT") {
    pairValue = BNB / USDT + ((BNB / USDT) * 1) / 100;
  }
  if (coinSend === "BNB" && coinReceive === "XLM") {
    pairValue = BNB / XLM + ((BNB / XLM) * 1) / 100;
  }
  if (coinSend === "BNB" && coinReceive === "LTC") {
    pairValue = BNB / LTC + ((BNB / LTC) * 1) / 100;
  }
  if (coinSend === "BNB" && coinReceive === "CARD(EUR)") {
    pairValue = BNB * EUR;
  }
  if (coinSend === "BNB" && coinReceive === "CARD(USD)") {
    pairValue = BNB
  }

  if (coinSend === "ETH" && coinReceive === "BTC") {
    pairValue = ETH / BTC + ((ETH / BTC) * 1) / 100;
  }
  if (coinSend === "ETH" && coinReceive === "BNB") {
    pairValue = ETH / BNB + ((ETH / BNB) * 1) / 100;
  }
  if (coinSend === "ETH" && coinReceive === "DOGE") {
    pairValue = ETH / DOGE + ((ETH / DOGE) * 1) / 100;
  }
  if (coinSend === "ETH" && coinReceive === "ADA") {
    pairValue = ETH / ADA + ((ETH / ADA) * 1) / 100;
  }
  if (coinSend === "ETH" && coinReceive === "SHIB") {
    pairValue = ETH / SHIB + ((ETH / SHIB) * 1) / 100;
  }
  if (coinSend === "ETH" && coinReceive === "SQL") {
    pairValue = ETH / SQL + ((ETH / SQL) * 1) / 100;
  }
  if (coinSend === "ETH" && coinReceive === "TRX") {
    pairValue = ETH / TRX + ((ETH / TRX) * 1) / 100;
  }
  if (coinSend === "ETH" && coinReceive === "XRP") {
    pairValue = ETH / XRP + ((ETH / XRP) * 1) / 100;
  }
  if (coinSend === "ETH" && coinReceive === "USDT") {
    pairValue = ETH / USDT + ((ETH / USDT) * 1) / 100;
  }
  if (coinSend === "ETH" && coinReceive === "XLM") {
    pairValue = ETH / XLM + ((ETH / XLM) * 1) / 100;
  }
  if (coinSend === "ETH" && coinReceive === "LTC") {
    pairValue = ETH / LTC + ((ETH / LTC) * 1) / 100;
  }
  if (coinSend === "ETH" && coinReceive === "CARD(EUR)") {
    pairValue = ETH * EUR;
  }
  if (coinSend === "ETH" && coinReceive === "CARD(USD)") {
    pairValue = ETH
  }

  if (coinSend === "DOGE" && coinReceive === "BTC") {
    pairValue = DOGE / BTC + ((DOGE / BTC) * 1) / 100;
  }
  if (coinSend === "DOGE" && coinReceive === "BNB") {
    pairValue = DOGE / BNB + ((DOGE / BNB) * 1) / 100;
  }
  if (coinSend === "DOGE" && coinReceive === "ETH") {
    pairValue = DOGE / ETH + ((DOGE / ETH) * 1) / 100;
  }
  if (coinSend === "DOGE" && coinReceive === "ADA") {
    pairValue = DOGE / ADA + ((DOGE / ADA) * 1) / 100;
  }
  if (coinSend === "DOGE" && coinReceive === "SHIB") {
    pairValue = DOGE / SHIB + ((DOGE / SHIB) * 1) / 100;
  }
  if (coinSend === "DOGE" && coinReceive === "SQL") {
    pairValue = DOGE / SQL + ((DOGE / SQL) * 1) / 100;
  }
  if (coinSend === "DOGE" && coinReceive === "TRX") {
    pairValue = DOGE / TRX + ((DOGE / TRX) * 1) / 100;
  }
  if (coinSend === "DOGE" && coinReceive === "XRP") {
    pairValue = DOGE / XRP + ((DOGE / XRP) * 1) / 100;
  }
  if (coinSend === "DOGE" && coinReceive === "USDT") {
    pairValue = DOGE / USDT + ((DOGE / USDT) * 1) / 100;
  }
  if (coinSend === "DOGE" && coinReceive === "XLM") {
    pairValue = DOGE / XLM + ((DOGE / XLM) * 1) / 100;
  }
  if (coinSend === "DOGE" && coinReceive === "LTC") {
    pairValue = DOGE / LTC + ((DOGE / LTC) * 1) / 100;
  }
  if (coinSend === "DOGE" && coinReceive === "CARD(EUR)") {
    pairValue = DOGE * EUR;
  }
  if (coinSend === "DOGE" && coinReceive === "CARD(USD)") {
    pairValue = DOGE
  }

  if (coinSend === "ADA" && coinReceive === "BTC") {
    pairValue = ADA / BTC + ((ADA / BTC) * 1) / 100;
  }
  if (coinSend === "ADA" && coinReceive === "BNB") {
    pairValue = ADA / BNB + ((ADA / BNB) * 1) / 100;
  }
  if (coinSend === "ADA" && coinReceive === "ETH") {
    pairValue = ADA / ETH + ((ADA / ETH) * 1) / 100;
  }
  if (coinSend === "ADA" && coinReceive === "DOGE") {
    pairValue = ADA / DOGE + ((ADA / DOGE) * 1) / 100;
  }
  if (coinSend === "ADA" && coinReceive === "SHIB") {
    pairValue = ADA / SHIB + ((ADA / SHIB) * 1) / 100;
  }
  if (coinSend === "ADA" && coinReceive === "SQL") {
    pairValue = ADA / SQL + ((ADA / SQL) * 1) / 100;
  }
  if (coinSend === "ADA" && coinReceive === "TRX") {
    pairValue = ADA / TRX + ((ADA / TRX) * 1) / 100;
  }
  if (coinSend === "ADA" && coinReceive === "XRP") {
    pairValue = ADA / XRP + ((ADA / XRP) * 1) / 100;
  }
  if (coinSend === "ADA" && coinReceive === "USDT") {
    pairValue = ADA / USDT + ((ADA / USDT) * 1) / 100;
  }
  if (coinSend === "ADA" && coinReceive === "XLM") {
    pairValue = ADA / XLM + ((ADA / XLM) * 1) / 100;
  }
  if (coinSend === "ADA" && coinReceive === "LTC") {
    pairValue = ADA / LTC + ((ADA / LTC) * 1) / 100;
  }
  if (coinSend === "ADA" && coinReceive === "CARD(EUR)") {
    pairValue = ADA * EUR;
  }
  if (coinSend === "ADA" && coinReceive === "CARD(USD)") {
    pairValue = ADA
  }

  if (coinSend === "SHIB" && coinReceive === "BTC") {
    pairValue = SHIB / BTC + ((SHIB / BTC) * 1) / 100;
  }
  if (coinSend === "SHIB" && coinReceive === "BNB") {
    pairValue = SHIB / BNB + ((SHIB / BNB) * 1) / 100;
  }
  if (coinSend === "SHIB" && coinReceive === "ETH") {
    pairValue = SHIB / ETH + ((SHIB / ETH) * 1) / 100;
  }
  if (coinSend === "SHIB" && coinReceive === "DOGE") {
    pairValue = SHIB / DOGE + ((SHIB / DOGE) * 1) / 100;
  }
  if (coinSend === "SHIB" && coinReceive === "ADA") {
    pairValue = SHIB / ADA + ((SHIB / ADA) * 1) / 100;
  }
  if (coinSend === "SHIB" && coinReceive === "SQL") {
    pairValue = SHIB / SQL + ((SHIB / SQL) * 1) / 100;
  }
  if (coinSend === "SHIB" && coinReceive === "TRX") {
    pairValue = SHIB / TRX + ((SHIB / TRX) * 1) / 100;
  }
  if (coinSend === "SHIB" && coinReceive === "XRP") {
    pairValue = SHIB / XRP + ((SHIB / XRP) * 1) / 100;
  }
  if (coinSend === "SHIB" && coinReceive === "USDT") {
    pairValue = SHIB / USDT + ((SHIB / USDT) * 1) / 100;
  }
  if (coinSend === "SHIB" && coinReceive === "XLM") {
    pairValue = SHIB / XLM + ((SHIB / XLM) * 1) / 100;
  }
  if (coinSend === "SHIB" && coinReceive === "LTC") {
    pairValue = SHIB / LTC + ((SHIB / LTC) * 1) / 100;
  }
  if (coinSend === "SHIB" && coinReceive === "CARD(EUR)") {
    pairValue = SHIB * EUR;
  }
  if (coinSend === "SHIB" && coinReceive === "CARD(USD)") {
    pairValue = SHIB
  }
  

  if (coinSend === "SQL" && coinReceive === "BTC") {
    pairValue = SQL / BTC + ((SQL / BTC) * 1) / 100;
  }
  if (coinSend === "SQL" && coinReceive === "BNB") {
    pairValue = SQL / BNB + ((SQL / BNB) * 1) / 100;
  }
  if (coinSend === "SQL" && coinReceive === "ETH") {
    pairValue = SQL / ETH + ((SQL / ETH) * 1) / 100;
  }
  if (coinSend === "SQL" && coinReceive === "DOGE") {
    pairValue = SQL / DOGE + ((SQL / DOGE) * 1) / 100;
  }
  if (coinSend === "SQL" && coinReceive === "ADA") {
    pairValue = SQL / ADA + ((SQL / ADA) * 1) / 100;
  }
  if (coinSend === "SQL" && coinReceive === "SHIB") {
    pairValue = SQL / SHIB + ((SQL / SHIB) * 1) / 100;
  }
  if (coinSend === "SQL" && coinReceive === "TRX") {
    pairValue = SQL / TRX + ((SQL / TRX) * 1) / 100;
  }
  if (coinSend === "SQL" && coinReceive === "XRP") {
    pairValue = SQL / XRP + ((SQL / XRP) * 1) / 100;
  }
  if (coinSend === "SQL" && coinReceive === "USDT") {
    pairValue = SQL / USDT + ((SQL / USDT) * 1) / 100;
  }
  if (coinSend === "SQL" && coinReceive === "XLM") {
    pairValue = SQL / XLM + ((SQL / XLM) * 1) / 100;
  }
  if (coinSend === "SQL" && coinReceive === "LTC") {
    pairValue = SQL / LTC + ((SQL / LTC) * 1) / 100;
  }
  if (coinSend === "SQL" && coinReceive === "CARD(EUR)") {
    pairValue = SQL * EUR;
  }
  if (coinSend === "SQL" && coinReceive === "CARD(USD)") {
    pairValue = SQL
  }

  if (coinSend === "TRX" && coinReceive === "BTC") {
    pairValue = TRX / BTC + ((TRX / BTC) * 1) / 100;
  }
  if (coinSend === "TRX" && coinReceive === "BNB") {
    pairValue = TRX / BNB + ((TRX / BNB) * 1) / 100;
  }
  if (coinSend === "TRX" && coinReceive === "ETH") {
    pairValue = TRX / ETH + ((TRX / ETH) * 1) / 100;
  }
  if (coinSend === "TRX" && coinReceive === "DOGE") {
    pairValue = TRX / DOGE + ((TRX / DOGE) * 1) / 100;
  }
  if (coinSend === "TRX" && coinReceive === "ADA") {
    pairValue = TRX / ADA + ((TRX / ADA) * 1) / 100;
  }
  if (coinSend === "TRX" && coinReceive === "SHIB") {
    pairValue = TRX / SHIB + ((TRX / SHIB) * 1) / 100;
  }
  if (coinSend === "TRX" && coinReceive === "SQL") {
    pairValue = TRX / SQL + ((TRX / SQL) * 1) / 100;
  }
  if (coinSend === "TRX" && coinReceive === "XRP") {
    pairValue = TRX / XRP + ((TRX / XRP) * 1) / 100;
  }
  if (coinSend === "TRX" && coinReceive === "USDT") {
    pairValue = TRX / USDT + ((TRX / USDT) * 1) / 100;
  }
  if (coinSend === "TRX" && coinReceive === "XLM") {
    pairValue = TRX / XLM + ((TRX / XLM) * 1) / 100;
  }
  if (coinSend === "TRX" && coinReceive === "LTC") {
    pairValue = TRX / LTC + ((TRX / LTC) * 1) / 100;
  }
  if (coinSend === "TRX" && coinReceive === "CARD(EUR)") {
    pairValue = TRX * EUR;
  }
  if (coinSend === "TRX" && coinReceive === "CARD(USD)") {
    pairValue = TRX
  }

  if (coinSend === "XRP" && coinReceive === "BTC") {
    pairValue = XRP / BTC + ((XRP / BTC) * 1) / 100;
  }
  if (coinSend === "XRP" && coinReceive === "BNB") {
    pairValue = XRP / BNB + ((XRP / BNB) * 1) / 100;
  }
  if (coinSend === "XRP" && coinReceive === "ETH") {
    pairValue = XRP / ETH + ((XRP / ETH) * 1) / 100;
  }
  if (coinSend === "XRP" && coinReceive === "DOGE") {
    pairValue = XRP / DOGE + ((XRP / DOGE) * 1) / 100;
  }
  if (coinSend === "XRP" && coinReceive === "ADA") {
    pairValue = XRP / ADA + ((XRP / ADA) * 1) / 100;
  }
  if (coinSend === "XRP" && coinReceive === "SHIB") {
    pairValue = XRP / SHIB + ((XRP / SHIB) * 1) / 100;
  }
  if (coinSend === "XRP" && coinReceive === "SQL") {
    pairValue = XRP / SQL + ((XRP / SQL) * 1) / 100;
  }
  if (coinSend === "XRP" && coinReceive === "TRX") {
    pairValue = XRP / TRX + ((XRP / TRX) * 1) / 100;
  }
  if (coinSend === "XRP" && coinReceive === "USDT") {
    pairValue = XRP / USDT + ((XRP / USDT) * 1) / 100;
  }
  if (coinSend === "XRP" && coinReceive === "XLM") {
    pairValue = XRP / XLM + ((XRP / XLM) * 1) / 100;
  }
  if (coinSend === "XRP" && coinReceive === "LTC") {
    pairValue = XRP / LTC + ((XRP / LTC) * 1) / 100;
  }
  if (coinSend === "XRP" && coinReceive === "CARD(EUR)") {
    pairValue = XRP * EUR;
  }
  if (coinSend === "XRP" && coinReceive === "CARD(USD)") {
    pairValue = XRP
  }

  if (coinSend === "USDT" && coinReceive === "BTC") {
    pairValue = USDT / BTC + ((USDT / BTC) * 1) / 100;
  }
  if (coinSend === "USDT" && coinReceive === "BNB") {
    pairValue = USDT / BNB + ((USDT / BNB) * 1) / 100;
  }
  if (coinSend === "USDT" && coinReceive === "ETH") {
    pairValue = USDT / ETH + ((USDT / ETH) * 1) / 100;
  }
  if (coinSend === "USDT" && coinReceive === "DOGE") {
    pairValue = USDT / DOGE + ((USDT / DOGE) * 1) / 100;
  }
  if (coinSend === "USDT" && coinReceive === "ADA") {
    pairValue = USDT / ADA + ((USDT / ADA) * 1) / 100;
  }
  if (coinSend === "USDT" && coinReceive === "SHIB") {
    pairValue = USDT / SHIB + ((USDT / SHIB) * 1) / 100;
  }
  if (coinSend === "USDT" && coinReceive === "SQL") {
    pairValue = USDT / SQL + ((USDT / SQL) * 1) / 100;
  }
  if (coinSend === "USDT" && coinReceive === "TRX") {
    pairValue = USDT / TRX + ((USDT / TRX) * 1) / 100;
  }
  if (coinSend === "USDT" && coinReceive === "XRP") {
    pairValue = USDT / XRP + ((USDT / XRP) * 1) / 100;
  }
  if (coinSend === "USDT" && coinReceive === "XLM") {
    pairValue = USDT / XLM + ((USDT / XLM) * 1) / 100;
  }
  if (coinSend === "USDT" && coinReceive === "LTC") {
    pairValue = USDT / LTC + ((USDT / LTC) * 1) / 100;
  }
  if (coinSend === "USDT" && coinReceive === "CARD(EUR)") {
    pairValue = USDT * EUR;
  }
  if (coinSend === "USDT" && coinReceive === "CARD(USD)") {
    pairValue = USDT
  }

  if (coinSend === "XLM" && coinReceive === "BTC") {
    pairValue = XLM / BTC + ((XLM / BTC) * 1) / 100;
  }
  if (coinSend === "XLM" && coinReceive === "BNB") {
    pairValue = XLM / BNB + ((XLM / BNB) * 1) / 100;
  }
  if (coinSend === "XLM" && coinReceive === "ETH") {
    pairValue = XLM / ETH + ((XLM / ETH) * 1) / 100;
  }
  if (coinSend === "XLM" && coinReceive === "DOGE") {
    pairValue = XLM / DOGE + ((XLM / DOGE) * 1) / 100;
  }
  if (coinSend === "XLM" && coinReceive === "ADA") {
    pairValue = XLM / ADA + ((XLM / ADA) * 1) / 100;
  }
  if (coinSend === "XLM" && coinReceive === "SHIB") {
    pairValue = XLM / SHIB + ((XLM / SHIB) * 1) / 100;
  }
  if (coinSend === "XLM" && coinReceive === "SQL") {
    pairValue = XLM / SQL + ((XLM / SQL) * 1) / 100;
  }
  if (coinSend === "XLM" && coinReceive === "TRX") {
    pairValue = XLM / TRX + ((XLM / TRX) * 1) / 100;
  }
  if (coinSend === "XLM" && coinReceive === "XRP") {
    pairValue = XLM / XRP + ((XLM / XRP) * 1) / 100;
  }
  if (coinSend === "XLM" && coinReceive === "USDT") {
    pairValue = XLM / USDT + ((XLM / USDT) * 1) / 100;
  }
  if (coinSend === "XLM" && coinReceive === "LTC") {
    pairValue = XLM / LTC + ((XLM / LTC) * 1) / 100;
  }
  if (coinSend === "XLM" && coinReceive === "CARD(EUR)") {
    pairValue = XLM * EUR;
  }
  if (coinSend === "XLM" && coinReceive === "CARD(USD)") {
    pairValue = XLM
  }
  
  if (coinSend === "LTC" && coinReceive === "BTC") {
    pairValue = LTC / BTC + ((LTC / BTC) * 1) / 100;
  }
  if (coinSend === "LTC" && coinReceive === "BNB") {
    pairValue = LTC / BNB + ((LTC / BNB) * 1) / 100;
  }
  if (coinSend === "LTC" && coinReceive === "ETH") {
    pairValue = LTC / ETH + ((LTC / ETH) * 1) / 100;
  }
  if (coinSend === "LTC" && coinReceive === "DOGE") {
    pairValue = LTC / DOGE + ((LTC / DOGE) * 1) / 100;
  }
  if (coinSend === "LTC" && coinReceive === "ADA") {
    pairValue = LTC / ADA + ((LTC / ADA) * 1) / 100;
  }
  if (coinSend === "LTC" && coinReceive === "SHIB") {
    pairValue = LTC / SHIB + ((LTC / SHIB) * 1) / 100;
  }
  if (coinSend === "LTC" && coinReceive === "SQL") {
    pairValue = LTC / SQL + ((LTC / SQL) * 1) / 100;
  }
  if (coinSend === "LTC" && coinReceive === "TRX") {
    pairValue = LTC / TRX + ((LTC / TRX) * 1) / 100;
  }
  if (coinSend === "LTC" && coinReceive === "XRP") {
    pairValue = LTC / XRP + ((LTC / XRP) * 1) / 100;
  }
  if (coinSend === "LTC" && coinReceive === "USDT") {
    pairValue = LTC / USDT + ((LTC / USDT) * 1) / 100;
  }
  if (coinSend === "LTC" && coinReceive === "XLM") {
    pairValue = LTC / XLM + ((LTC / XLM) * 1) / 100;
  }
  if (coinSend === "LTC" && coinReceive === "CARD(EUR)") {
    pairValue = LTC * EUR;
  }
  if (coinSend === "LTC" && coinReceive === "CARD(USD)") {
    pairValue = LTC
  }

  // (rateText = pairValue + ""),
  // (rateText = rateText.substr(0, rateText.indexOf(".") + 6)),
  document.getElementById("rate_p").innerHTML =
    "1 " + coinSend + " ~ " + pairValue.toFixed(6) + " " + coinReceive;

  // (rateText = pairValue + ""),
  // (rateText = rateText.substr(0, rateText.indexOf(".") + 6)),
  // (document.getElementById("rate_p").innerText =
  //   "1 " + coinSend + " ~ " + rateText + "12345 " + coinReceive),
  // (document.getElementById("error").style.display = "none"),
  load(),
    (inputAmount = document.getElementById("inputAmount").value),
    compare();
}
chooseCoin(coinSend, 1, sendCoinName),
  chooseCoin(coinReceive, 2, receiveCoinName),
  (rotated = !1);
const processChange = debounce(() => inputAmountSet(), 1500),
  debounceRotate = debounce(() => rotate(), 500);
function compare() {
//   pairs[coinSend + coinReceive]
//     ? (receiveAmount =
//         (inputAmount * sendUsd) / receiveUsd +
//         (((inputAmount * sendUsd) / receiveUsd) *
//           pairs[coinSend + coinReceive]) /
//           100)
//     : 1 == addPercentage
//     ? (receiveAmount =
//         (inputAmount * sendUsd) / receiveUsd +
//         (((inputAmount * sendUsd) / receiveUsd) * percentage) / 100)
//     : (receiveAmount =
//         (inputAmount * sendUsd) / receiveUsd -
//         (((inputAmount * sendUsd) / receiveUsd) * percentage) / 100);
//   var e = receiveAmount + "";
//   (e = e.substr(0, e.indexOf(".") + 6)),
//     (receiveAmount = +e),
//     (receiveAmount += (receiveAmount * bonus) / 100),

let receiveAmount = 0;

if (coinSend === "BTC" && coinReceive === "BNB") {
    receiveAmount = (inputAmount * BTC) / BNB + (((inputAmount * BTC) / BNB * 1) / 100);
  }
  if (coinSend === "BTC" && coinReceive === "ETH") {
    receiveAmount = (inputAmount * BTC) / ETH + (((inputAmount * BTC) / ETH * 1) / 100);
  }
  if (coinSend === "BTC" && coinReceive === "DOGE") {
    receiveAmount = (inputAmount * BTC) / DOGE + (((inputAmount * BTC) / DOGE * 1) / 100);
  }
  if (coinSend === "BTC" && coinReceive === "ADA") {
    receiveAmount = (inputAmount * BTC) / ADA + (((inputAmount * BTC) / ADA * 1) / 100);
  }
  if (coinSend === "BTC" && coinReceive === "SHIB") {
    receiveAmount = (inputAmount * BTC) / SHIB + (((inputAmount * BTC) / SHIB * 1) / 100);
  }
  if (coinSend === "BTC" && coinReceive === "SQL") {
    receiveAmount = (inputAmount * BTC) / SQL + (((inputAmount * BTC) / SQL * 1) / 100);
  }
  if (coinSend === "BTC" && coinReceive === "TRX") {
    receiveAmount = (inputAmount * BTC) / TRX + (((inputAmount * BTC) / TRX * 1) / 100);
  }
  if (coinSend === "BTC" && coinReceive === "XRP") {
    receiveAmount = (inputAmount * BTC) / XRP + (((inputAmount * BTC) / XRP * 1) / 100);
  }
  if (coinSend === "BTC" && coinReceive === "USDT") {
    receiveAmount = (inputAmount * BTC) / USDT + (((inputAmount * BTC) / USDT * 1) / 100);
  }
  if (coinSend === "BTC" && coinReceive === "XLM") {
    receiveAmount = (inputAmount * BTC) / XLM + (((inputAmount * BTC) / XLM * 1) / 100);
  }
  if (coinSend === "BTC" && coinReceive === "LTC") {
    receiveAmount = (inputAmount * BTC) / LTC + (((inputAmount * BTC) / LTC * 1) / 100);
  }
  if (coinSend === "BTC" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (BTC * EUR)
  }
  if (coinSend === "BTC" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * BTC
  }

  if (coinSend === "BNB" && coinReceive === "BTC") {
    receiveAmount = (inputAmount * BNB) / BTC + (((inputAmount * BNB) / BTC * 1) / 100);
  }
  if (coinSend === "BNB" && coinReceive === "ETH") {
    receiveAmount = (inputAmount * BNB) / ETH + (((inputAmount * BNB) / ETH * 1) / 100);
  }
  if (coinSend === "BNB" && coinReceive === "DOGE") {
    receiveAmount = (inputAmount * BNB) / DOGE + (((inputAmount * BNB) / DOGE * 1) / 100);
  }
  if (coinSend === "BNB" && coinReceive === "ADA") {
    receiveAmount = (inputAmount * BNB) / ADA + (((inputAmount * BNB) / ADA * 1) / 100);
  }
  if (coinSend === "BNB" && coinReceive === "SHIB") {
    receiveAmount = (inputAmount * BNB) / SHIB + (((inputAmount * BNB) / SHIB * 1) / 100);
  }
  if (coinSend === "BNB" && coinReceive === "SQL") {
    receiveAmount = (inputAmount * BNB) / SQL + (((inputAmount * BNB) / SQL * 1) / 100);
  }
  if (coinSend === "BNB" && coinReceive === "TRX") {
    receiveAmount = (inputAmount * BNB) / TRX + (((inputAmount * BNB) / TRX * 1) / 100);
  }
  if (coinSend === "BNB" && coinReceive === "XRP") {
    receiveAmount = (inputAmount * BNB) / XRP + (((inputAmount * BNB) / XRP * 1) / 100);
  }
  if (coinSend === "BNB" && coinReceive === "USDT") {
    receiveAmount = (inputAmount * BNB) / USDT + (((inputAmount * BNB) / USDT * 1) / 100);
  }
  if (coinSend === "BNB" && coinReceive === "XLM") {
    receiveAmount = (inputAmount * BNB) / XLM + (((inputAmount * BNB) / XLM * 1) / 100);
  }
  if (coinSend === "BNB" && coinReceive === "LTC") {
    receiveAmount = (inputAmount * BNB) / LTC + (((inputAmount * BNB) / LTC * 1) / 100);
  }
  if (coinSend === "BNB" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (BNB * EUR)
  }
  if (coinSend === "BNB" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * BNB
  }

  if (coinSend === "ETH" && coinReceive === "BTC") {
    receiveAmount = (inputAmount * ETH) / BTC + (((inputAmount * ETH) / BTC * 1) / 100);
  }
  if (coinSend === "ETH" && coinReceive === "BNB") {
    receiveAmount = (inputAmount * ETH) / BNB + (((inputAmount * ETH) / BNB * 1) / 100);
  }
  if (coinSend === "ETH" && coinReceive === "DOGE") {
    receiveAmount = (inputAmount * ETH) / DOGE + (((inputAmount * ETH) / DOGE * 1) / 100);
  }
  if (coinSend === "ETH" && coinReceive === "ADA") {
    receiveAmount = (inputAmount * ETH) / ADA + (((inputAmount * ETH) / ADA * 1) / 100);
  }
  if (coinSend === "ETH" && coinReceive === "SHIB") {
    receiveAmount = (inputAmount * ETH) / SHIB + (((inputAmount * ETH) / SHIB * 1) / 100);
  }
  if (coinSend === "ETH" && coinReceive === "SQL") {
    receiveAmount = (inputAmount * ETH) / SQL + (((inputAmount * ETH) / SQL * 1) / 100);
  }
  if (coinSend === "ETH" && coinReceive === "TRX") {
    receiveAmount = (inputAmount * ETH) / TRX + (((inputAmount * ETH) / TRX * 1) / 100);
  }
  if (coinSend === "ETH" && coinReceive === "XRP") {
    receiveAmount = (inputAmount * ETH) / XRP + (((inputAmount * ETH) / XRP * 1) / 100);
  }
  if (coinSend === "ETH" && coinReceive === "USDT") {
    receiveAmount = (inputAmount * ETH) / USDT + (((inputAmount * ETH) / USDT * 1) / 100);
  }
  if (coinSend === "ETH" && coinReceive === "XLM") {
    receiveAmount = (inputAmount * ETH) / XLM + (((inputAmount * ETH) / XLM * 1) / 100);
  }
  if (coinSend === "ETH" && coinReceive === "LTC") {
    receiveAmount = (inputAmount * ETH) / LTC + (((inputAmount * ETH) / LTC * 1) / 100);
  }
  if (coinSend === "ETH" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (ETH * EUR)
  }
  if (coinSend === "ETH" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * ETH
  }

  if (coinSend === "DOGE" && coinReceive === "BTC") {
    receiveAmount = (inputAmount * DOGE) / BTC + (((inputAmount * DOGE) / BTC * 1) / 100);
  }
  if (coinSend === "DOGE" && coinReceive === "BNB") {
    receiveAmount = (inputAmount * DOGE) / BNB + (((inputAmount * DOGE) / BNB * 1) / 100);
  }
  if (coinSend === "DOGE" && coinReceive === "ETH") {
    receiveAmount = (inputAmount * DOGE) / ETH + (((inputAmount * DOGE) / ETH * 1) / 100);
  }
  if (coinSend === "DOGE" && coinReceive === "ADA") {
    receiveAmount = (inputAmount * DOGE) / ADA + (((inputAmount * DOGE) / ADA * 1) / 100);
  }
  if (coinSend === "DOGE" && coinReceive === "SHIB") {
    receiveAmount = (inputAmount * DOGE) / SHIB + (((inputAmount * DOGE) / SHIB * 1) / 100);
  }
  if (coinSend === "DOGE" && coinReceive === "SQL") {
    receiveAmount = (inputAmount * DOGE) / SQL + (((inputAmount * DOGE) / SQL * 1) / 100);
  }
  if (coinSend === "DOGE" && coinReceive === "TRX") {
    receiveAmount = (inputAmount * DOGE) / TRX + (((inputAmount * DOGE) / TRX * 1) / 100);
  }
  if (coinSend === "DOGE" && coinReceive === "XRP") {
    receiveAmount = (inputAmount * DOGE) / XRP + (((inputAmount * DOGE) / XRP * 1) / 100);
  }
  if (coinSend === "DOGE" && coinReceive === "USDT") {
    receiveAmount = (inputAmount * DOGE) / USDT + (((inputAmount * DOGE) / USDT * 1) / 100);
  }
  if (coinSend === "DOGE" && coinReceive === "XLM") {
    receiveAmount = (inputAmount * DOGE) / XLM + (((inputAmount * DOGE) / XLM * 1) / 100);
  }
  if (coinSend === "DOGE" && coinReceive === "LTC") {
    receiveAmount = (inputAmount * DOGE) / LTC + (((inputAmount * DOGE) / LTC * 1) / 100);
  }
  if (coinSend === "DOGE" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (DOGE * EUR)
  }
  if (coinSend === "DOGE" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * DOGE
  }

  if (coinSend === "ADA" && coinReceive === "BTC") {
    receiveAmount = (inputAmount * ADA) / BTC + (((inputAmount * ADA) / BTC * 1) / 100);
  }
  if (coinSend === "ADA" && coinReceive === "BNB") {
    receiveAmount = (inputAmount * ADA) / BNB + (((inputAmount * ADA) / BNB * 1) / 100);
  }
  if (coinSend === "ADA" && coinReceive === "ETH") {
    receiveAmount = (inputAmount * ADA) / ETH + (((inputAmount * ADA) / ETH * 1) / 100);
  }
  if (coinSend === "ADA" && coinReceive === "DOGE") {
    receiveAmount = (inputAmount * ADA) / DOGE + (((inputAmount * ADA) / DOGE * 1) / 100);
  }
  if (coinSend === "ADA" && coinReceive === "SHIB") {
    receiveAmount = (inputAmount * ADA) / SHIB + (((inputAmount * ADA) / SHIB * 1) / 100);
  }
  if (coinSend === "ADA" && coinReceive === "SQL") {
    receiveAmount = (inputAmount * ADA) / SQL + (((inputAmount * ADA) / SQL * 1) / 100);
  }
  if (coinSend === "ADA" && coinReceive === "TRX") {
    receiveAmount = (inputAmount * ADA) / TRX + (((inputAmount * ADA) / TRX * 1) / 100);
  }
  if (coinSend === "ADA" && coinReceive === "XRP") {
    receiveAmount = (inputAmount * ADA) / XRP + (((inputAmount * ADA) / XRP * 1) / 100);
  }
  if (coinSend === "ADA" && coinReceive === "USDT") {
    receiveAmount = (inputAmount * ADA) / USDT + (((inputAmount * ADA) / USDT * 1) / 100);
  }
  if (coinSend === "ADA" && coinReceive === "XLM") {
    receiveAmount = (inputAmount * ADA) / XLM + (((inputAmount * ADA) / XLM * 1) / 100);
  }
  if (coinSend === "ADA" && coinReceive === "LTC") {
    receiveAmount = (inputAmount * ADA) / LTC + (((inputAmount * ADA) / LTC * 1) / 100);
  }
  if (coinSend === "ADA" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (ADA * EUR)
  }
  if (coinSend === "ADA" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * ADA
  }

  if (coinSend === "SHIB" && coinReceive === "BTC") {
    receiveAmount = (inputAmount * SHIB) / BTC + (((inputAmount * SHIB) / BTC * 1) / 100);
  }
  if (coinSend === "SHIB" && coinReceive === "BNB") {
    receiveAmount = (inputAmount * SHIB) / BNB + (((inputAmount * SHIB) / BNB * 1) / 100);
  }
  if (coinSend === "SHIB" && coinReceive === "ETH") {
    receiveAmount = (inputAmount * SHIB) / ETH + (((inputAmount * SHIB) / ETH * 1) / 100);
  }
  if (coinSend === "SHIB" && coinReceive === "DOGE") {
    receiveAmount = (inputAmount * SHIB) / DOGE + (((inputAmount * SHIB) / DOGE * 1) / 100);
  }
  if (coinSend === "SHIB" && coinReceive === "ADA") {
    receiveAmount = (inputAmount * SHIB) / ADA + (((inputAmount * SHIB) / ADA * 1) / 100);
  }
  if (coinSend === "SHIB" && coinReceive === "SQL") {
    receiveAmount = (inputAmount * SHIB) / SQL + (((inputAmount * SHIB) / SQL * 1) / 100);
  }
  if (coinSend === "SHIB" && coinReceive === "TRX") {
    receiveAmount = (inputAmount * SHIB) / TRX + (((inputAmount * SHIB) / TRX * 1) / 100);
  }
  if (coinSend === "SHIB" && coinReceive === "XRP") {
    receiveAmount = (inputAmount * SHIB) / XRP + (((inputAmount * SHIB) / XRP * 1) / 100);
  }
  if (coinSend === "SHIB" && coinReceive === "USDT") {
    receiveAmount = (inputAmount * SHIB) / USDT + (((inputAmount * SHIB) / USDT * 1) / 100);
  }
  if (coinSend === "SHIB" && coinReceive === "XLM") {
    receiveAmount = (inputAmount * SHIB) / XLM + (((inputAmount * SHIB) / XLM * 1) / 100);
  }
  if (coinSend === "SHIB" && coinReceive === "LTC") {
    receiveAmount = (inputAmount * SHIB) / LTC + (((inputAmount * SHIB) / LTC * 1) / 100);
  }
  if (coinSend === "SHIB" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (SHIB * EUR)
  }
  if (coinSend === "SHIB" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * SHIB
  }

  if (coinSend === "SQL" && coinReceive === "BTC") {
    receiveAmount = (inputAmount * SQL) / BTC + (((inputAmount * SQL) / BTC * 1) / 100);
  }
  if (coinSend === "SQL" && coinReceive === "BNB") {
    receiveAmount = (inputAmount * SQL) / BNB + (((inputAmount * SQL) / BNB * 1) / 100);
  }
  if (coinSend === "SQL" && coinReceive === "ETH") {
    receiveAmount = (inputAmount * SQL) / ETH + (((inputAmount * SQL) / ETH * 1) / 100);
  }
  if (coinSend === "SQL" && coinReceive === "DOGE") {
    receiveAmount = (inputAmount * SQL) / DOGE + (((inputAmount * SQL) / DOGE * 1) / 100);
  }
  if (coinSend === "SQL" && coinReceive === "ADA") {
    receiveAmount = (inputAmount * SQL) / ADA + (((inputAmount * SQL) / ADA * 1) / 100);
  }
  if (coinSend === "SQL" && coinReceive === "SHIB") {
    receiveAmount = (inputAmount * SQL) / SHIB + (((inputAmount * SQL) / SHIB * 1) / 100);
  }
  if (coinSend === "SQL" && coinReceive === "TRX") {
    receiveAmount = (inputAmount * SQL) / TRX + (((inputAmount * SQL) / TRX * 1) / 100);
  }
  if (coinSend === "SQL" && coinReceive === "XRP") {
    receiveAmount = (inputAmount * SQL) / XRP + (((inputAmount * SQL) / XRP * 1) / 100);
  }
  if (coinSend === "SQL" && coinReceive === "USDT") {
    receiveAmount = (inputAmount * SQL) / USDT + (((inputAmount * SQL) / USDT * 1) / 100);
  }
  if (coinSend === "SQL" && coinReceive === "XLM") {
    receiveAmount = (inputAmount * SQL) / XLM + (((inputAmount * SQL) / XLM * 1) / 100);
  }
  if (coinSend === "SQL" && coinReceive === "LTC") {
    receiveAmount = (inputAmount * SQL) / LTC + (((inputAmount * SQL) / LTC * 1) / 100);
  }
  if (coinSend === "SQL" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (SQL * EUR)
  }
  if (coinSend === "SQL" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * SQL
  }
  
  if (coinSend === "TRX" && coinReceive === "BTC") {
    receiveAmount = (inputAmount * TRX) / BTC + (((inputAmount * TRX) / BTC * 1) / 100);
  }
  if (coinSend === "TRX" && coinReceive === "BNB") {
    receiveAmount = (inputAmount * TRX) / BNB + (((inputAmount * TRX) / BNB * 1) / 100);
  }
  if (coinSend === "TRX" && coinReceive === "ETH") {
    receiveAmount = (inputAmount * TRX) / ETH + (((inputAmount * TRX) / ETH * 1) / 100);
  }
  if (coinSend === "TRX" && coinReceive === "DOGE") {
    receiveAmount = (inputAmount * TRX) / DOGE + (((inputAmount * TRX) / DOGE * 1) / 100);
  }
  if (coinSend === "TRX" && coinReceive === "ADA") {
    receiveAmount = (inputAmount * TRX) / ADA + (((inputAmount * TRX) / ADA * 1) / 100);
  }
  if (coinSend === "TRX" && coinReceive === "SHIB") {
    receiveAmount = (inputAmount * TRX) / SHIB + (((inputAmount * TRX) / SHIB * 1) / 100);
  }
  if (coinSend === "TRX" && coinReceive === "SQL") {
    receiveAmount = (inputAmount * TRX) / SQL + (((inputAmount * TRX) / SQL * 1) / 100);
  }
  if (coinSend === "TRX" && coinReceive === "XRP") {
    receiveAmount = (inputAmount * TRX) / XRP + (((inputAmount * TRX) / XRP * 1) / 100);
  }
  if (coinSend === "TRX" && coinReceive === "USDT") {
    receiveAmount = (inputAmount * TRX) / USDT + (((inputAmount * TRX) / USDT * 1) / 100);
  }
  if (coinSend === "TRX" && coinReceive === "XLM") {
    receiveAmount = (inputAmount * TRX) / XLM + (((inputAmount * TRX) / XLM * 1) / 100);
  }
  if (coinSend === "TRX" && coinReceive === "LTC") {
    receiveAmount = (inputAmount * TRX) / LTC + (((inputAmount * TRX) / LTC * 1) / 100);
  }
  if (coinSend === "TRX" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (TRX * EUR)
  }
  if (coinSend === "TRX" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * TRX
  }

  if (coinSend === "XRP" && coinReceive === "BTC") {
    receiveAmount = (inputAmount * XRP) / BTC + (((inputAmount * XRP) / BTC * 1) / 100);
  }
  if (coinSend === "XRP" && coinReceive === "BNB") {
    receiveAmount = (inputAmount * XRP) / BNB + (((inputAmount * XRP) / BNB * 1) / 100);
  }
  if (coinSend === "XRP" && coinReceive === "ETH") {
    receiveAmount = (inputAmount * XRP) / ETH + (((inputAmount * XRP) / ETH * 1) / 100);
  }
  if (coinSend === "XRP" && coinReceive === "DOGE") {
    receiveAmount = (inputAmount * XRP) / DOGE + (((inputAmount * XRP) / DOGE * 1) / 100);
  }
  if (coinSend === "XRP" && coinReceive === "ADA") {
    receiveAmount = (inputAmount * XRP) / ADA + (((inputAmount * XRP) / ADA * 1) / 100);
  }
  if (coinSend === "XRP" && coinReceive === "SHIB") {
    receiveAmount = (inputAmount * XRP) / SHIB + (((inputAmount * XRP) / SHIB * 1) / 100);
  }
  if (coinSend === "XRP" && coinReceive === "SQL") {
    receiveAmount = (inputAmount * XRP) / SQL + (((inputAmount * XRP) / SQL * 1) / 100);
  }
  if (coinSend === "XRP" && coinReceive === "TRX") {
    receiveAmount = (inputAmount * XRP) / TRX + (((inputAmount * XRP) / TRX * 1) / 100);
  }
  if (coinSend === "XRP" && coinReceive === "USDT") {
    receiveAmount = (inputAmount * XRP) / USDT + (((inputAmount * XRP) / USDT * 1) / 100);
  }
  if (coinSend === "XRP" && coinReceive === "XLM") {
    receiveAmount = (inputAmount * XRP) / XLM + (((inputAmount * XRP) / XLM * 1) / 100);
  }
  if (coinSend === "XRP" && coinReceive === "LTC") {
    receiveAmount = (inputAmount * XRP) / LTC + (((inputAmount * XRP) / LTC * 1) / 100);
  }
  if (coinSend === "XRP" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (XRP * EUR)
  }
  if (coinSend === "XRP" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * XRP
  }

  if (coinSend === "USDT" && coinReceive === "BTC") {
    receiveAmount = (inputAmount * XRP) / BTC + (((inputAmount * USDT) / BTC * 1) / 100);
  }
  if (coinSend === "USDT" && coinReceive === "BNB") {
    receiveAmount = (inputAmount * USDT) / BNB + (((inputAmount * USDT) / BNB * 1) / 100);
  }
  if (coinSend === "USDT" && coinReceive === "ETH") {
    receiveAmount = (inputAmount * USDT) / ETH + (((inputAmount * USDT) / ETH * 1) / 100);
  }
  if (coinSend === "USDT" && coinReceive === "DOGE") {
    receiveAmount = (inputAmount * USDT) / DOGE + (((inputAmount * USDT) / DOGE * 1) / 100);
  }
  if (coinSend === "USDT" && coinReceive === "ADA") {
    receiveAmount = (inputAmount * USDT) / ADA + (((inputAmount * USDT) / ADA * 1) / 100);
  }
  if (coinSend === "USDT" && coinReceive === "SHIB") {
    receiveAmount = (inputAmount * USDT) / SHIB + (((inputAmount * USDT) / SHIB * 1) / 100);
  }
  if (coinSend === "USDT" && coinReceive === "SQL") {
    receiveAmount = (inputAmount * USDT) / SQL + (((inputAmount * USDT) / SQL * 1) / 100);
  }
  if (coinSend === "USDT" && coinReceive === "TRX") {
    receiveAmount = (inputAmount * USDT) / TRX + (((inputAmount * USDT) / TRX * 1) / 100);
  }
  if (coinSend === "USDT" && coinReceive === "XRP") {
    receiveAmount = (inputAmount * USDT) / XRP + (((inputAmount * USDT) / XRP * 1) / 100);
  }
  if (coinSend === "USDT" && coinReceive === "XLM") {
    receiveAmount = (inputAmount * USDT) / XLM + (((inputAmount * USDT) / XLM * 1) / 100);
  }
  if (coinSend === "USDT" && coinReceive === "LTC") {
    receiveAmount = (inputAmount * USDT) / LTC + (((inputAmount * USDT) / LTC * 1) / 100);
  }
  if (coinSend === "USDT" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (USDT * EUR)
  }
  if (coinSend === "USDT" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * USDT
  }

  if (coinSend === "XLM" && coinReceive === "BTC") {
    receiveAmount = (inputAmount * XLM) / BTC + (((inputAmount * XLM) / BTC * 1) / 100);
  }
  if (coinSend === "XLM" && coinReceive === "BNB") {
    receiveAmount = (inputAmount * XLM) / BNB + (((inputAmount * XLM) / BNB * 1) / 100);
  }
  if (coinSend === "XLM" && coinReceive === "ETH") {
    receiveAmount = (inputAmount * XLM) / ETH + (((inputAmount * XLM) / ETH * 1) / 100);
  }
  if (coinSend === "XLM" && coinReceive === "DOGE") {
    receiveAmount = (inputAmount * XLM) / DOGE + (((inputAmount * XLM) / DOGE * 1) / 100);
  }
  if (coinSend === "XLM" && coinReceive === "ADA") {
    receiveAmount = (inputAmount * XLM) / ADA + (((inputAmount * XLM) / ADA * 1) / 100);
  }
  if (coinSend === "XLM" && coinReceive === "SHIB") {
    receiveAmount = (inputAmount * XLM) / SHIB + (((inputAmount * XLM) / SHIB * 1) / 100);
  }
  if (coinSend === "XLM" && coinReceive === "SQL") {
    receiveAmount = (inputAmount * XLM) / SQL + (((inputAmount * XLM) / SQL * 1) / 100);
  }
  if (coinSend === "XLM" && coinReceive === "TRX") {
    receiveAmount = (inputAmount * XLM) / TRX + (((inputAmount * XLM) / TRX * 1) / 100);
  }
  if (coinSend === "XLM" && coinReceive === "XRP") {
    receiveAmount = (inputAmount * XLM) / XRP + (((inputAmount * XLM) / XRP * 1) / 100);
  }
  if (coinSend === "XLM" && coinReceive === "USDT") {
    receiveAmount = (inputAmount * XLM) / USDT + (((inputAmount * XLM) / USDT * 1) / 100);
  }
  if (coinSend === "XLM" && coinReceive === "LTC") {
    receiveAmount = (inputAmount * XLM) / LTC + (((inputAmount * XLM) / LTC * 1) / 100);
  }
  if (coinSend === "XLM" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (XLM * EUR)
  }
  if (coinSend === "XLM" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * XLM
  }

  if (coinSend === "LTC" && coinReceive === "BTC") {
    receiveAmount = (inputAmount * LTC) / BTC + (((inputAmount * LTC) / BTC * 1) / 100);
  }
  if (coinSend === "LTC" && coinReceive === "BNB") {
    receiveAmount = (inputAmount * LTC) / BNB + (((inputAmount * LTC) / BNB * 1) / 100);
  }
  if (coinSend === "LTC" && coinReceive === "ETH") {
    receiveAmount = (inputAmount * LTC) / ETH + (((inputAmount * LTC) / ETH * 1) / 100);
  }
  if (coinSend === "LTC" && coinReceive === "DOGE") {
    receiveAmount = (inputAmount * LTC) / DOGE + (((inputAmount * LTC) / DOGE * 1) / 100);
  }
  if (coinSend === "LTC" && coinReceive === "ADA") {
    receiveAmount = (inputAmount * LTC) / ADA + (((inputAmount * LTC) / ADA * 1) / 100);
  }
  if (coinSend === "LTC" && coinReceive === "SHIB") {
    receiveAmount = (inputAmount * LTC) / SHIB + (((inputAmount * LTC) / SHIB * 1) / 100);
  }
  if (coinSend === "LTC" && coinReceive === "SQL") {
    receiveAmount = (inputAmount * LTC) / SQL + (((inputAmount * LTC) / SQL * 1) / 100);
  }
  if (coinSend === "LTC" && coinReceive === "TRX") {
    receiveAmount = (inputAmount * LTC) / TRX + (((inputAmount * LTC) / TRX * 1) / 100);
  }
  if (coinSend === "LTC" && coinReceive === "XRP") {
    receiveAmount = (inputAmount * LTC) / XRP + (((inputAmount * LTC) / XRP * 1) / 100);
  }
  if (coinSend === "LTC" && coinReceive === "USDT") {
    receiveAmount = (inputAmount * LTC) / USDT + (((inputAmount * LTC) / USDT * 1) / 100);
  }
  if (coinSend === "LTC" && coinReceive === "XLM") {
    receiveAmount = (inputAmount * LTC) / XLM + (((inputAmount * LTC) / XLM * 1) / 100);
  }
  if (coinSend === "LTC" && coinReceive === "CARD(EUR)") {
    receiveAmount = inputAmount * (LTC * EUR)
  }
  if (coinSend === "LTC" && coinReceive === "CARD(USD)") {
    receiveAmount = inputAmount * LTC
  }
    (document.getElementById("receiveInput").value = receiveAmount.toFixed(6)),
    storeItems();
}
function exchange() {
  inputAmount * sendUsd < minAmount
    ? ((document.getElementById("error").style.display = "block"),
      (document.getElementById("error").innerHTML =
        "ru" == localStorage.getItem("language")
          ? langArr.min.ru + minAmount + "$"
          : langArr.min.en + minAmount + "$"))
    : inputAmount * sendUsd > maxAmount
    ? ((document.getElementById("error").style.display = "block"),
      (document.getElementById("error").innerHTML =
        "ru" == localStorage.getItem("language")
          ? langArr.max.ru + maxAmount + "$"
          : langArr.max.en + maxAmount + "$"))
    : (storeItems(), nextStep());
}
function store(e, t) {
  localStorage.setItem(e, t);
}
function storeItems() {
  store("coinSend", coinSend),
    store("coinReceive", coinReceive),
    store("inputAmount", inputAmount),
    store("sendUsd", sendUsd),
    store("receiveUsd", receiveUsd),
    store("sendCoinName", sendCoinName),
    store("receiveInput", receiveAmount),
    store("receiveCoinName", receiveCoinName),
    store("usedPromo", usedPromo);
}
