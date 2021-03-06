const mongoose = require("mongoose");

const advertSchema = mongoose.Schema(
  {
    type: {
      type: Number,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    genderMixType: {
      type: Number,
    },
    numberOfMan: {
      type: Number,
    },
    numberOfWoman: {
      type: Number,
    },
    advertTitle: {
      type: String,
    },
    advertAbout: {
      type: String,
    },
    advertOther: {
      type: String,
    },
    locationId: {
      type: {
        type: Number,
      },
    },
    loc: {
      id: { type: String },
      type: { type: String },
      coordinates: [Number],
    },
    address: {
      place: { type: String },
      fullAdress: { type: String },
      coordinates: [Number],
    },
    rent: {
      type: Number,
    },
    area: {
      type: Number,
    },
    currency: {
      type: String,
    },
    deposit: {
      type: Number,
    },
    dateSoonest: {
      type: Date,
    },
    isShort: {
      type: Boolean,
    },
    isLong: {
      type: Boolean,
    },
    pictures: [{ type: String }],
  },
  { timestamps: true }
);

const Advert = mongoose.model("Advert", advertSchema);

module.exports = Advert;
