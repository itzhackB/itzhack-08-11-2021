
export const loadFavorites = () => {
    
    try {
        const favoriteLocalStorage = localStorage.getItem('favorites')
        if (favoriteLocalStorage === null) {
            return []
        }
        return JSON.parse(favoriteLocalStorage)
    } catch (err) {
        return undefined
    }
}

export const saveFavorites = (state) => {
    
    try {
        const favoriteLocalStorage = JSON.stringify(state)
        localStorage.setItem('favorites', favoriteLocalStorage)
    } catch (err) {
        throw err
    }
}

