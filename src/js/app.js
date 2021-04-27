export default function sortingHealth(characters) {
  return characters.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    }

    if (a.health > b.health) {
      return -1;
    }

    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}