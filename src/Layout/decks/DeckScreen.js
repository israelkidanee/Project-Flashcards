import React, { useEffect, useState } from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api/index";

import DeckScreenBreadcrumbNavBar from "./DeckScreenBreadcrumbNavBar";
import DeckInfo from "./DeckInfo";

function DeckScreen() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);

  const deckId = useParams().deckId;
  const { url } = useRouteMatch();

  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
      setCards(deckFromAPI.cards);
    }
    loadDeck();
  }, [deckId]);

  if (deck.name) {
    return (
      <div>
        <DeckScreenBreadcrumbNavBar deckName={deck.name} />
        <Route path={url}>
          <DeckInfo
            deckName={deck.name}
            deckDescription={deck.description}
            deckId={deckId}
            cards={cards}
            url={url}
          />
        </Route>
      </div>
    );
  }
  return "Loading...";
}

export default DeckScreen;
