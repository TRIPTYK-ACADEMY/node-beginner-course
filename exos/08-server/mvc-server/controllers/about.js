const ViewBuilder = require(`${process.cwd()}/helpers/view-builder`);

module.exports = (req,res) => {
  ViewBuilder(req, res, 200);
};