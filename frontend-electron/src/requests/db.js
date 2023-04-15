import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  gisData: '++id, name, type, group, featureId', // Primary key and indexed props
});