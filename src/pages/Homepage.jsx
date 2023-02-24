import MemoProvider from "../context/MemoProvider";
import Container from "../components/Container";
import LayoutMemo from "../components/memotest/LayoutMemo";
import List from "../components/list-pokemon/List";
import PokemonFocus from "../components/list-pokemon/PokemonFocus";

import "../App.css";
import TimerProvider from "../reducer/TimerProvider";

const Homepage = () => {
  return (
    <>
      <Container item={"memo"}>
        <TimerProvider>
          <MemoProvider>
            <LayoutMemo />
          </MemoProvider>
        </TimerProvider>
      </Container>
      <PokemonFocus />
      <List />
    </>
  );
};

export default Homepage;
