import React from "react";
import Image from "next/image";
import "./gameButtons.css";
import { useDojo } from "../../../DojoContext";

interface GameButtonsProps {
  resetBets: () => void; // Define el tipo de resetBets como una función que no devuelve nada
}


function GameButtons({ resetBets }: GameButtonsProps) {
  const {
    setup: {
      systemCalls: { mint },
      components,
      entityUpdates,
      network: { contractComponents, graphClient },
    },
    account: { create, list, select, account, isDeploying, clear },
  } = useDojo();

  const handleEraseClick = () => {
    const shouldErase = window.confirm("Do you want to erase your bets?");

    if (shouldErase) {
      resetBets();
    }
  };

  const handleMintClick = () => {
    const isConfirmed = window.confirm(`Are you sure you want to mint 10000000 m_USD?`);

    if (isConfirmed) {
      mint(account);
      // Puedes agregar lógica adicional después de realizar la acción de mint, si es necesario.
    }
  };

  const handleCreateClick = () => {
    const isConfirmed = window.confirm(`Are you sure you want to create a new burner?`);

    if (isConfirmed) {
      create();
      // Puedes agregar lógica adicional después de realizar la acción de create, si es necesario.
    }
  };


  return (
    <div className="flex gap-10">
         <button onClick={handleCreateClick} className="py-4 px-20 border border-solid border-[#A962FF] bg-[#111] rounded-[15px]">
        CREATE
      </button>

      <button onClick={handleEraseClick} className="py-4 px-20 border border-solid border-[#A962FF] bg-[#111] rounded-[15px] button-eraser">
        <Image
          src="/images/eraser.png"
          alt="eraser"
          width={29}
          height={29}
        ></Image>
        ERASE
      </button>
      <button onClick={handleMintClick} className="py-4 px-20 border border-solid border-[#A962FF] bg-[#111] rounded-[15px]">
MINT
</button>
    </div>
  );
}

export default GameButtons;
