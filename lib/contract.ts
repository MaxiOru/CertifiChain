import { ethers } from "ethers";
import abi from "../abi.json";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const contractAddress = "0x8E88F5c5c8d5B356c611B87ecE1b6e4d7449Ca43"; // Reemplaza por tu address real
const alchemyUrl = process.env.NEXT_PUBLIC_ALCHEMY_URL as string;

// Solo lectura (consultas públicas)
export function getReadContract() {
  const provider = new ethers.JsonRpcProvider(alchemyUrl);
  return new ethers.Contract(contractAddress, abi, provider);
}

// Escritura (requiere MetaMask)
export async function getWriteContract() {
  if (typeof window === "undefined" || !window.ethereum) throw new Error("MetaMask no detectado");
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(contractAddress, abi, signer);
}