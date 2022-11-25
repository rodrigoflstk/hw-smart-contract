const hardhat = require("hardhat");

async function main() {
  const HelloWorldContract = await hardhat.ethers.getContractFactory(
    "HelloWorld"
  );

  const deploy = await HelloWorldContract.deploy("Hello world!");
  // const deploy = await helloWorldResult.deployed();
  console.log(`Contract Deployd at address: ${deploy.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
