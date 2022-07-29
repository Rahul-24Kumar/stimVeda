const habit = require('../models/habit');

const create = async function(req, res) {
    try {
        const habitdata = req.body;
        let userHabitData = await habit.create(habitdata);
        res.status(201).send({ status: true, data: {userHabitData}})
    } catch (err) {
        res.status(500).send({ status: false, msg: err});
    }
}

module.exports.create = create;


/* module.exports.create = function (req, res) {
    Habit.create({
        habit: req.body.habit,
        day: req.body.day,
        frequency: req.body.frequency,
        user: req.user._id
    },
        function (err, Habit) {
            if (err) {
                console.log('err in creating a post');
            }
            return res.redirect('back');
        })
}     */