import Card from "./card";

function Hero() {
  return (
    <section className="flex justify-around p-5">
      <Card Hero="john" />
      <Card Hero="obi" />
      <Card Hero="mikel" />
    </section>
  );
}

export default Hero;
