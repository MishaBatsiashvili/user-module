module.exports = function (api) {
    /*
    ? Link: https://babeljs.io/docs/en/config-files#apicache

    By default, Babel will evaluate configuration each time it processes a new file.
    It is possible to optimize the build process performance by caching config function execution result.
    api.cache(true) does exactly that. When the cache is enabled this way,
    config function will be called only once.
    */
    api.cache(true);
    // /.

    return {
        presets: ["next/babel"],
        plugins: ["macros"],
    };
};
