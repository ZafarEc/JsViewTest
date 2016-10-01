var VSUtils = {};

VSUtils.LazyGetTemplate = function (name) {
    var deferred = $.Deferred();
    if ($.templates[name]) {
        deferred.resolve();
    } else {
        $.getScript(
                "../Scripts/VS/VS.View.js")
            .then(function() {
                if ($.templates[name]) {
                    deferred.resolve();
                } else {
                    alert("Script: \"VS.View.js\" failed to load");
                    deferred.reject();
                }
            });
    }
    return deferred.promise();
};
