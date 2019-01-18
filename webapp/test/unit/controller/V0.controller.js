/*global QUnit*/

sap.ui.define([
	"ZPOKE/ZPOKE/controller/V0.controller"
], function (oController) {
	"use strict";

	QUnit.module("V0 Controller");

	QUnit.test("I should test the V0 controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});