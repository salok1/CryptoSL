import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for notes
 */
const NoteScheme = new Schema({
    email: {
        type: String,
        required: "Mail of this note"
    },
    pass: {
        type: String,
        required: "Pass of this note"
    }
});

export default mongoose.model('note', NoteScheme);