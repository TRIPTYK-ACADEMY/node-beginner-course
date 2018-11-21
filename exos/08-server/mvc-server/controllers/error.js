const ViewBuilder = require(`${process.cwd()}/helpers/view-builder`);

module.exports = (req,res) => {
  req.url = '/error.html';
  ViewBuilder(req, res, 404);
};