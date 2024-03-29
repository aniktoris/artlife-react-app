export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (!state.favorites.includes(action.payload)) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
      return state;

    case 'DELETE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (favoriteId) => favoriteId !== action.payload,
        ),
      };

    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};
