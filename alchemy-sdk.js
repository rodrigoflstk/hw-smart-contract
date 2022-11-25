// Setup: npm install alchemy-sdk
// Github: https://github.com/alchemyplatform/alchemy-sdk-js
// import { Network, Alchemy } from "alchemy-sdk";
const alchemySdk = require("alchemy-sdk");
require("dotenv").config();

// Optional config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.API_KEY, // Replace with your Alchemy API Key.
  network: alchemySdk.Network.ETH_GOERLI, // Replace with your network.
};
const alchemy = new alchemySdk.Alchemy(settings);

alchemy.core.getBalance("vitalik.eth", "latest").then(console.log);
