import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <section
        className="flex flex-nowrap gap-5 max-w-xl 
      overflow-x-auto mx-auto px-9 
      md:mx-auto
      lg:max-w-4xl
      xxl:max-w-4xl"
      >
        {cards}
      </section>
    </div>
  );
}
