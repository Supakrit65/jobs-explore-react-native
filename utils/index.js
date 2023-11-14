export const checkImageUrl = (url) => {
    if (!url) return false;
    else {
        const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;
        return imageUrlRegex.test(url);
    }
};