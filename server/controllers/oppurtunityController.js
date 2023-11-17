const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Oppurtunity = require('./../models/oppurtunityModel');
const User = require('../models/userModel');
const Email = require('./../utils/email');
const dayjs = require('dayjs');

exports.getAllOppurtunity = catchAsync(async (req, res, next) => {
    const oppurtunities = await Oppurtunity.find();

    res.status(200).json({
        message: 'success',
        data: {
            oppurtunities,
        },
    });
});

exports.getOppurtunity = catchAsync(async (req, res, next) => {});

exports.createOppurtunity = catchAsync(async (req, res, next) => {
    const data = req.body;
    console.log(data);

    const newData = await Oppurtunity.create({
        name: data.name || data.title,
        org: data.org,
        deadline: data.deadline,
        description: data.description,
        tags: data.tags,
        stipend: data.stipend || data.paid,
        link: data.link,
        location: data.location || data.country,
        type: data.type,
    });

    res.status(201).json({
        message: 'success',
        data: {
            newData,
        },
    });
});
exports.createMultipleOppurtunity = catchAsync(async (req, res, next) => {
    const data = req.body;
    console.log(data);

    const newData = await Oppurtunity.create(data);

    res.status(201).json({
        message: 'success',
        data: {
            newData,
        },
    });
});
exports.updateOppurtunity = catchAsync(async (req, res, next) => {});
exports.deleteOppurtunity = catchAsync(async (req, res, next) => {});

exports.checkDeadline = catchAsync(async (req, res, next) => {
    const users = await User.find().populate({path: 'selected'});

    await users.forEach(async (user) => {
        await user.selected.forEach(async (item) => {

            if (
                dayjs(item.lastDate).diff(dayjs(), 'day') <= 7 &&
                dayjs(item.lastDate).diff(dayjs(), 'day') >= 0
            ) {
                // console.log(item.name, item.lastDate);
                try {
                    const url = item.link;
                    console.log(
                        'Sending Reminder email to -> ',
                        user.name,
                        'for ',
                        item.name
                    );
                    await new Email(user, url, item).sendReminder();
                } catch (err) {
                    return next(
                        new AppError('There was a error sending reminder email')
                    );
                }
            }
        });
    });

    res.status(200).json({
        message: 'success',
    });
});

exports.fixData = catchAsync(async (req, res, next) => {
    let data = await Oppurtunity.find();

    // removing duplicates
    // const cleanData = [...new Set(data)];
    // const cleanData = [];
    // const duplicateData = [];
    // const dirtyData = [];
    // data.sort((a, b) => {
    //     return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0
    // })
    // data.forEach((item, i) => {
    //     // console.log(item);
    //     // console.log(i);
    //     if (i == 0) cleanData.push(item);
    //     else {

    //         if (!item.name) dirtyData.push(item);
    //         else {
    //             if (cleanData[cleanData.length - 1].name === item.name) duplicateData.push(item);
    //             else cleanData.push(item);
    //         }

    //     }
    // });
    // var customParseFormat = require('dayjs/plugin/customParseFormat');
    // dayjs.extend(customParseFormat);
    // // console.log(dayjs('23/06/2023', 'DD/MM/YYYY').toISOString());

    // for (const item of data) {
    //     // console.log(item.deadline);
    //     item.lastDate = item.deadline && dayjs(item.deadline, 'DD/MM/YYYY').toISOString();
    //     // delete item.deadline;
    //     console.log(item.lastDate);

    //     await Oppurtunity.findByIdAndUpdate(item.id, item, {
    //         runValidators: true
    //     });
    // }

    // for (const item of duplicateData) {
    //     await Oppurtunity.findByIdAndDelete(item.id);
    // }
    res.status(200).json({
        message: 'success',
        data: {},
    });
});
