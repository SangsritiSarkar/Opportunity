const express = require('express');
const oppurtunityController = require("./../controllers/oppurtunityController");
const authController = require('../controllers/authController');

const Router = express.Router();

Router.route('/upload').post(
    // authController.protect,
    // authController.restrictTo('admin'),
    oppurtunityController.createMultipleOppurtunity
);

Router.route('/fixData').get(oppurtunityController.fixData);
Router.route('/checkDeadline').get(oppurtunityController.checkDeadline);

Router.route('/:id')
    .get(
        oppurtunityController.getOppurtunity
    )
    .patch(
        authController.protect,
        authController.restrictTo('admin'),
        oppurtunityController.updateOppurtunity
    )
    .delete(
        authController.protect,
        authController.restrictTo('admin'),
        oppurtunityController.deleteOppurtunity
);
	
Router.route('/')
	.get(
		oppurtunityController.getAllOppurtunity
	)
	.post(

		oppurtunityController.createOppurtunity
);

module.exports = Router;