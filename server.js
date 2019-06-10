const express = require('express');
const db = require('./models');

const PORT = process.env.PORT || 8000;
const app = express();

db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log(`We are live at https://localhost:${PORT}`);
    });
});