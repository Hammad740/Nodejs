Certainly! Here’s a MongoDB cheat sheet for CRUD operations on documents:

### MongoDB CRUD Operations Cheat Sheet

#### **1. Connect to MongoDB**

```bash
mongo
```

#### **2. Switch to a Database**

```javascript
use('databaseName');
```

#### **3. Create a Collection**

```javascript
db.createCollection('collectionName');
```

### **Create (Insert) Operations**

#### **Insert a Single Document**

```javascript
db.collectionName.insertOne({
  key1: 'value1',
  key2: 'value2',
  ...
});
```

#### **Insert Multiple Documents**

```javascript
db.collectionName.insertMany([
  { key1: 'value1', key2: 'value2', ... },
  { key1: 'value3', key2: 'value4', ... },
  ...
]);
```

### **Read (Query) Operations**

#### **Find All Documents**

```javascript
db.collectionName.find({});
```

#### **Find with a Query**

```javascript
db.collectionName.find({ key: 'value' });
```

#### **Find One Document**

```javascript
db.collectionName.findOne({ key: 'value' });
```

#### **Find with Projection (Only specific fields)**

```javascript
db.collectionName.find({ key: 'value' }, { field1: 1, field2: 1 });
```

#### **Count Documents**

```javascript
db.collectionName.countDocuments({ key: 'value' });
```

### **Update Operations**

#### **Update One Document**

```javascript
db.collectionName.updateOne(
  { key: 'value' },
  { $set: { key1: 'newValue1' }, $currentDate: { lastModified: true } }
);
```

#### **Update Many Documents**

```javascript
db.collectionName.updateMany(
  { key: 'value' },
  { $set: { key1: 'newValue1' }, $currentDate: { lastModified: true } }
);
```

### **Delete Operations**

#### **Delete One Document**

```javascript
db.collectionName.deleteOne({ key: 'value' });
```

#### **Delete Many Documents**

```javascript
db.collectionName.deleteMany({ key: 'value' });
```

### **Additional Useful Commands**

#### **List Databases**

```javascript
show dbs;
```

#### **List Collections in a Database**

```javascript
show collections;
```

#### **Drop a Collection**

```javascript
db.collectionName.drop();
```

#### **Drop a Database**

```javascript
db.dropDatabase();
```

### **Examples**

#### **Example: Insert Documents**

```javascript
db.users.insertOne({ name: 'John Doe', age: 30 });
db.users.insertMany([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 22 },
]);
```

#### **Example: Find Documents**

```javascript
db.users.find({ age: { $gt: 20 } }); // Find users older than 20
db.users.findOne({ name: 'Alice' }); // Find a user named Alice
```

#### **Example: Update Documents**

```javascript
db.users.updateOne(
  { name: 'John Doe' },
  { $set: { age: 31 }, $currentDate: { lastModified: true } }
);
db.users.updateMany(
  { age: { $lt: 30 } },
  { $set: { isUnder30: true }, $currentDate: { lastModified: true } }
);
```

#### **Example: Delete Documents**

```javascript
db.users.deleteOne({ name: 'Bob' });
db.users.deleteMany({ age: { $lt: 25 } }); // Delete users younger than 25
```

This cheat sheet should help you quickly reference common MongoDB CRUD operations!
