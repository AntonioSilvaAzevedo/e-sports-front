import "./styles/main.css";

import logo from "./assets/Logo.svg";

export function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game1.png" alt="" />

          <div className="w-full pt-16  pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legis
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game2.png" alt="" />

          <div className="w-full pt-16  pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legis
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game3.png" alt="" />

          <div className="w-full pt-16  pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legis
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game4.png" alt="" />

          <div className="w-full pt-16  pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legis
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game5.png" alt="" />

          <div className="w-full pt-16  pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legis
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game1.png" alt="" />

          <div className="w-full pt-16  pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of legis
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>
    </div>
  );
}
