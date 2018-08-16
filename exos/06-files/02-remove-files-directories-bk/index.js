//const GarbageCollector = require(`${process.cwd()}/modules/files-garbage-collector`);
const GarbageCollector = require(`${process.cwd()}/modules/recursive-collector-simple`);

GarbageCollector('./');