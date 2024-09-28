import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MementoModule = buildModule("MementoModule", (m) => {
  const memento = m.contract("Memento");
  return { memento };
});

export default MementoModule;