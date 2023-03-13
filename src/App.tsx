import { useEffect, useState } from "react";
import HeroItem from "./components/Hero";
import { Hero } from "./types";
import "./App.css";
import { debounce } from "lodash-es";

function App() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [displayedHeroes, setDisplayedHeroes] = useState<Hero[]>([]);
  const [keyword, setKeyword] = useState("");

  async function fetchData() {
    const res = await fetch(
      "https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=2797816"
    );
    const resJson = await res.json();
    setHeroes(resJson.hero);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (keyword) {
      setDisplayedHeroes(
        heroes.filter((item) => item.keywords.includes(keyword))
      );
    }
  }, [keyword]);

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value.trim());
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
        {(!!keyword ? displayedHeroes : heroes).map((item) => (
          <HeroItem key={item.instance_id} {...item} />
        ))}
      </div>
    </>
  );
}

export default App;
