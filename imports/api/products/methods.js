import { Products } from './products';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertProduct = new ValidatedMethod({
  name: 'products.insert',
  validate: new SimpleSchema({
    description: { type: String },
    image: { type: String },
    name: { type: String },
    price: { type: String },
  }).validator(),
  run(product) {
    console.log(product)
    Products.insert(product);
  },
});

export const updateProduct = new ValidatedMethod({
  name: 'products.update',
  validate: new SimpleSchema({
    _id: { type: String },
    description: { type: String, optional: true },
    image: { type: String, optional: true },
    name: { type: String, optional: true },
    price: { type: Number, optional: true },
  }).validator(),
  run({ _id, description, image, name, price }) {
    Products.update(_id, { $set: { description, image, name, price } })
  },
})

export const removeProduct = new ValidatedMethod({
  name: 'products.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Products.remove(_id);
  },
});

rateLimit({
  methods: [
    insertProduct,
    updateProduct,
    removeProduct,
  ],
  limit: 5,
  timeRange: 1000,
});
