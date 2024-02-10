export const deleteItem = (divId) => {
    document.getElementById(divId).style.display = 'none';
}
export const moreInfo = (id ,set) => {
    set(id)
}
export const goBack = (set) => {
    set(false);
}