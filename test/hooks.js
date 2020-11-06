import {
  dropTables,
  createTables,
  insertIntoTables,
} from '../src/utils/queryFunctions';

before(async (done) => {
  await createTables();
  await insertIntoTables();
  done();
});

after(async (done) => {
  await dropTables();
  done();
});
