const express = require('express');
const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// start server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});