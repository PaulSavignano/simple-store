import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Products = new Mongo.Collection('Products');

Products.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Products.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Products.schema = new SimpleSchema({
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
});

Products.attachSchema(Documents.schema);
