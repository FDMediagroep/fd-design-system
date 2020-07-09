export const wordCount = (text: string) => {
    return text == null || text.length == 0
        ? 0
        : text.trim().match(/\S+/g)?.length ?? 0;
};
