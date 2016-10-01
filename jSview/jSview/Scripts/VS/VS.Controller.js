var VSController = {};

VSController.getVSdata = function () {
	var blah = VSModel.DashboardHeader();
	console.log(blah);
	$.when(
            VSUtils.LazyGetTemplate("lia")
        )
        .done(function () {
        	$.templates.lia.link("#VSdata", blah);
        })
};

