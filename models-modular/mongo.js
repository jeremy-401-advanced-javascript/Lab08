'use strict';

/** Class representing a generic mongo model. */
class Model {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    console.log(this.schema);
    if (_id) {
      return this.schema.find({_id});
    } else {
      return this.schema.find({});
    }
  }

  create(record) {
    let newRecord = new this.schema(record);
    // console.log(newRecord.save());
    return newRecord.save();
  }

  update(_id, record) {
    let query = {_id}
     return this.schema.findByIdAndUpdate(query, record, { new: true });
  }

  delete(_id) {
    let query = {_id}
    return this.schema.findOneAndDelete(query);
  }

}

module.exports = Model;
