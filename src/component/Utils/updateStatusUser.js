export const updateStatusUser = (items, userId, search, object) => {
    return items.map(element => {
        if (element[search] === userId) {
            return { ...element, ...object }
        }
        return element;
})
}