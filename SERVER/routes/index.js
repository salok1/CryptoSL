import notebook from '../controllers/notebookController';

export default (app) => {
    app.route('/notes')
        .post(notebook.createNote);
    app.route('/')
        .get(notebook.sendIndex);
};