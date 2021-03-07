import mongoose from 'mongoose'

const dataSchema = mongoose.Schema(
    {
        point: Number,
    },
    {
        timestamps: true,
    }
)

const schema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        status: {
            type: String,
            enum: ['ON', 'OFF'],
            default: 'OFF',
        },
        data: [dataSchema],
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Device', schema)
