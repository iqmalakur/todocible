import Button from "../common/Button";

/**
 * @returns {React.JSX}
 */
function Hero() {
  return (
    <header className="flex justify-center items-center mt-7">
      <div className="content">
        <h1 className="text-white text-6xl text-center font-bold">
          <span className="block">Organize Your Tasks</span>
          <span className="block mt-6">With The Easy Way</span>
        </h1>
        <h3 className="text-slate-400 text-lg text-center font-bold mt-10">
          <span className="block leading-6">Focus on your current task</span>
          <span className="block leading-6">
            without fear of forgetting your other tasks
          </span>
          <span className="block leading-6">with ToDocible.</span>
        </h3>
        <div className="text-center mt-10">
          <Button align="center">Start for free</Button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
