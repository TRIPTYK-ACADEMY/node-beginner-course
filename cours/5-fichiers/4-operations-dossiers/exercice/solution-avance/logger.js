const fs = require("fs/promises");

const getDirectoryStructureForDate = (date) => {
  return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
};

const directoryExistsForDate = async (date) => {
  const structure = getDirectoryStructureForDate(date);
  try {
    await fs.opendir(structure);
    return true;
  } catch (e) {
    return false;
  }
};

const generateDirectoryForDate = async (date) => {
  const structure = getDirectoryStructureForDate(date);

  if (await directoryExistsForDate(date)) {
    return false;
  }

  await fs.mkdir(structure, {
    recursive: true,
  });

  return structure;
};

exports.log = async (type, message) => {
  const date = new Date();
  const structure = getDirectoryStructureForDate(date);
  await generateDirectoryForDate(date);
  const fileName = `${date.getHours()}.log`;
  await fs.appendFile(
    `${structure}/${fileName}`,
    `[${type}] ${message}\n`
  );
};

exports.removeLogs = async () => {
  const date = new Date();
  const structure = getDirectoryStructureForDate(date);
  await generateDirectoryForDate(date);
  const fileName = `${date.getHours()}.log`;
  await fs.writeFile(`${structure}/${fileName}`, ``);
};
