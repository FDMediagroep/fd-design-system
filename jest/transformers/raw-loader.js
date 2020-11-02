module.exports = {
    process: (content, filePath) => {
        console.log('raw-loader', filePath);
        const val = JSON.stringify(content)
            .replace(/\u2028/g, '\\u2028')
            .replace(/\u2029/g, '\\u2029');
        return 'module.exports = ' + val + ';';
    },
};
