const formatDate = (date: Date): string => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
};

const formatTweetContent = (content: string): string => {
    // Replace URLs with clickable links
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return content.replace(urlPattern, '<a href="$1">$1</a>');
};

export { formatDate, formatTweetContent };