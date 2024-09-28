import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition"
import dotenv from "dotenv"
dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    scrollSepolia: {
      url: process.env.PROVIDER_URL,
      accounts: process.env.PRIVATE_KEY !== undefined ? [`0$[process.env.PRIVATE_KEY]`] : [],
    },
  },

};

export default config;
