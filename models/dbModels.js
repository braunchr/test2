var mongoose = require("mongoose");

const splitSchema = new mongoose.Schema({
    splitAmt: Number,
    exIndex: Number,
    oldSplitAmt: Number,
});

const exASchema = new mongoose.Schema(
    {
        amt: Number,
        mingledAmt: Number,
        seq: [Number],
        oldMingledAmt: Number,
    }
);

const placeASchema = new mongoose.Schema(
    {
        amt: Number,
        splitA: [splitSchema]
    }
);

const winASchema = new mongoose.Schema(
    {
        amt: Number,
        splitA: [splitSchema]
    }
);


var betASchema = new mongoose.Schema({
    exA: [exASchema], 
    winA: [winASchema],
    placeA: [placeASchema]
});

module.exports = {
    exA: mongoose.model('exA', exASchema),
    winA: mongoose.model('winA', winASchema),
    placeA: mongoose.model('placeA', placeASchema),
    betA: mongoose.model('betA', betASchema),

}
