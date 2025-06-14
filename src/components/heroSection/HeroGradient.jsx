const HeroGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="shadow-electricBlueGlow absolute top-0 right-[400px] animate-pulse opacity-60" />
      <div className="shadow-softBlueGlow absolute top-[10%] left-0 opacity-30" />
      <div className="shadow-deepNavyGlow absolute top-0 right-0 opacity-40" />
      <div className="shadow-softBlueGlow absolute bottom-[5%] left-[10%] opacity-25" />
    </div>
  );
};

export default HeroGradient;
