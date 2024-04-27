import PageItem from "../../components/PageItem";
function HomePage() {
  return <div className="flex flex-col space-y-10">
    <PageItem title="characters" image="/images/characters.jpg" color="#E73938" link="/characters"/>
    <PageItem title="planets" image="/images/planets.jpg" color="#F8E850" link="/planets"/>
    <PageItem title="starships" image="/images/starships.jpg" color="#8EC9F7" link="/starships"/>
  </div>;
}

export default HomePage;
