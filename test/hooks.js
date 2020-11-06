import {
  dropTables,
  createTables,
  insertIntoTables,
} from '../src/utils/queryFunctions';

describe('hooks', () => {
  it('Create dummy data', () => {
    before(async () => {
      await createTables();
      await insertIntoTables();
    });
  });
});

describe('hooks', () => {
  it('Create dummy data', () => {
    after(async () => {
      await dropTables();
    });
  });
});
