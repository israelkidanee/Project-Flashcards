import React from "react";
import { deleteDeck } from "../../utils/api/index";

// If delete is clicked a warning message is shown and when clicked "OK", the deck will be no longer shown on the Home screen

function DeleteDeckButton({ deck }) {
  const handleTrashClick = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deck.id);
    }
  };
  // using a href (anchor) it will trigger the page to refresh after deleting.
  return (
    <button type="button" className="btn btn-danger" onClick={handleTrashClick}>
      <a href="/" className="text-white">
        <span className="oi oi-trash" />
      </a>
    </button>
  );
}

export default DeleteDeckButton;
