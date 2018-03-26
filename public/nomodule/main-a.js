System.register(['./chunk1.js'], function (exports, module) {
	'use strict';
	var usedByBoth;
	return {
		setters: [function (module) {
			usedByBoth = module.default;
		}],
		execute: function () {

			var usedByA = {
				color: 'darkslategray',
				message: 'this is only used by the main-a.js entry point, so will be bundled with it'
			};

			module.import("./apply-color-and-message.js").then(({ default: apply }) => {
				apply('#a [data-used-by="a"]', usedByA);
				apply('#a [data-used-by="both"]', usedByBoth);
			});

			module.import("./Widget.html.js").then(({ default: Widget }) => {
				new Widget({
					target: document.querySelector('#widget-container')
				});
			});

		}
	};
});
//# sourceMappingURL=./main-a.js.map
