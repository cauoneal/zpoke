sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ZPOKE.ZPOKE.controller.V0", {

		onInit: function () {

			let pokeURL = "https://pokeapi-215911.firebaseapp.com/api/v2/pokemon?offset=0&limit=19";

			let dados;
			let that = this;
			$.getJSON({
				url: pokeURL,
				async: false,
				success: function (data) {
					that.dados = data;
				}
			});

			var oModel = new sap.ui.model.json.JSONModel(that.dados.results);
			this.getView().setModel(oModel);
		},

		onVisualizar: function (oEvent) {
			debugger;
			var url = oEvent.oSource.mProperties.description;
			let dados;
			let that = this;
			$.getJSON({
				url: url,
				async: false,
				success: function (data) {
					that.dados = data;
				}
			});

			var oModelDetail = new sap.ui.model.json.JSONModel(that.dados);
			this.getView().setModel(oModelDetail, "detail");

		},

	});

});