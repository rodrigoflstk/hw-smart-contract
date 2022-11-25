const ethers = require("ethers");
const usdtABI = require("../usdt.json");
require("dotenv").config();

const { CONTRACT_ADDRESS, ALCHEMY_WEBSOCKET } = process.env;

async function main() {
  const usdtAddress = CONTRACT_ADDRESS;
  const provider = new ethers.providers.WebSocketProvider(
    `wss://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_WEBSOCKET}`
  );

  const contract = new ethers.Contract(usdtAddress, usdtABI, provider);

  contract.on("Transfer", (from, to, value, event) => {
    let info = {
      from: from,
      to: to,
      value: ethers.utils.formatUnits(value, 6),
      data: event,
    };
    console.log(JSON.stringify(info, null, 4));
  });
}

main();
