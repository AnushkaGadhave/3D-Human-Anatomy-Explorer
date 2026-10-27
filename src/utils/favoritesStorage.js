// Utility for managing favorites in localStorage with custom event dispatching
const FAVORITES_KEY = 'anatomy_explorer_favorites';

export function getFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to parse favorites from localStorage', e);
    return [];
  }
}

export function isFavorite(id) {
  const favorites = getFavorites();
  return favorites.some(item => item.id === id);
}

export function addFavorite(item) {
  const favorites = getFavorites();
  if (!favorites.some(fav => fav.id === item.id)) {
    const updated = [...favorites, { ...item, savedAt: new Date().toISOString() }];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('favorites-updated'));
    return true;
  }
  return false;
}

export function removeFavorite(id) {
  const favorites = getFavorites();
  const updated = favorites.filter(fav => fav.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('favorites-updated'));
}

export function toggleFavorite(item) {
  if (isFavorite(item.id)) {
    removeFavorite(item.id);
    return false;
  } else {
    addFavorite(item);
    return true;
  }
}
