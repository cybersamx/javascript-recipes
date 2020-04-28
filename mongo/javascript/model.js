import mongoose from 'mongoose';

const EmployeeSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 65,
  },
  team: {
    type: String,
    required: true,
    enum: ['Engineering', 'Finance', 'Product', 'Marketing', 'Operations'],
  },
});

EmployeeSchema.virtual('fullName').get(function () {
  return this.firstName + (this.lastName ? ` ${this.lastName}` : '');
});

export default mongoose.model('Employee', EmployeeSchema);