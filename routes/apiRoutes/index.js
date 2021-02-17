//middleware file so that our app knows about the noteRoutes

//installing requirements
const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes');

router.use(noteRoutes);

module.exports = router;