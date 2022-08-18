import mongoose from 'mongoose';

const Customer = new mongoose.Schema(
    {
        username:{type: String, required: true},
        email:{type: String, required: true},
        password:{type: String, required: true}
    },
    {collection:'customers'}
)

const model = mongoose.model('CustomerData',Customer);

export default model