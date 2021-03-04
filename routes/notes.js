export const index = (req, res) => {
  const { sort } = req.query;
  sort ? console.log(`GET query is ${sort}`) : console.log('Not query param');
  res.json([]);
};

export const create = (req, res) => {
  const { title, body } = req.body;
  res.json({ message: 'OK', title, body } );
};

export const show = (req, res) => {
  const { id } = req.params;
  res.json({ id, title: 'A sample title', body: 'This is my note'});
};

export const update = (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  res.json({ message: 'OK', id, title, body });
};

export const deleteNote = (req, res) => {
  const { id } = req.params;
  res.json({ message: 'OK', id, message: 'Deleted' });
};