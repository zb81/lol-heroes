import { useDeferredValue, useEffect, useState } from "react";
import HeroItem from "./components/Hero";
import { Hero } from "./types";
import "./App.css";
import { debounce } from "lodash-es";

function App() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [displayedHeroes, setDisplayedHeroes] = useState<Hero[]>([]);
  const deferredHeroes = useDeferredValue(displayedHeroes);

  async function fetchData() {
    const res = await fetch(
      "https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=2797816"
    );
    const resJson = await res.json();
    setHeroes(resJson.hero);
    setDisplayedHeroes(resJson.hero)
  }

  useEffect(() => {
    fetchData();
  }, []);

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setDisplayedHeroes(
      heroes.filter((item) => item.keywords.includes(e.target.value.trim()))
    );
  }

  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={debounce(onSearch, 250)}
      />
      <div className="list">
        {deferredHeroes.map((item) => (
          <HeroItem key={item.instance_id} {...item} />
        ))}
      </div>
    </>
  );
}

export default App;
