import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Carts = new Mongo.Collection('Carts');

Carts.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
})

Carts.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

Carts.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'The name of the product.',
  },
  image: {
    type: String,
    label: 'The image of the product.',
  },
  desc: {
    type: String,
    label: 'The description of the product.',
  },
  price: {
    type: Number,
    label: 'The price of the product.',
  },
  status: {
    type: String,
    label: 'The status of the product.',
  },
})

Carts.attachSchema(Carts.schema)
