// // //// create a database
// // use('CrudDb');
// // console.log(db);

// // //// create a collection
// // db.createCollection('courses');

// // //// create a collection
// // db.courses.insertOne({
// //   name: 'Web Development',
// //   price: '$15',
// //   assignments: 12,
// //   projects: 10,
// // });
// // //// create many collection at a time
// // db.courses.insertMany([
// //   {
// //     name: 'Machine Learning',
// //     price: '$25',
// //     assignments: 10,
// //     projects: 5,
// //     duration: '3 months',
// //     instructor: {
// //       name: 'Dr. Emily White',
// //       experience: '8 years',
// //     },
// //     syllabus: [
// //       {
// //         week: 1,
// //         topics: ['Introduction to Machine Learning', 'Supervised Learning'],
// //       },
// //       {
// //         week: 2,
// //         topics: ['Unsupervised Learning', 'Dimensionality Reduction'],
// //       },
// //       {
// //         week: 3,
// //         topics: ['Neural Networks', 'Deep Learning'],
// //       },
// //     ],
// //     reviews: [
// //       {
// //         student: 'Anna Smith',
// //         rating: 5,
// //         comment: 'Very well structured and detailed.',
// //       },
// //       {
// //         student: 'David Lee',
// //         rating: 4,
// //         comment: 'Learned a lot, highly recommend.',
// //       },
// //     ],
// //     prerequisites: ['Data Science', 'Linear Algebra'],
// //   },
// //   {
// //     name: 'Cybersecurity',
// //     price: '$40',
// //     assignments: 18,
// //     projects: 10,
// //     duration: '5 months',
// //     instructor: {
// //       name: 'Sophia Davis',
// //       experience: '7 years',
// //     },
// //     syllabus: [
// //       {
// //         week: 1,
// //         topics: ['Introduction to Cybersecurity', 'Network Security'],
// //       },
// //       {
// //         week: 2,
// //         topics: ['Cryptography', 'Cyber Attacks and Defense'],
// //       },
// //       {
// //         week: 3,
// //         topics: ['Security in Cloud Computing', 'Incident Response'],
// //       },
// //     ],
// //     reviews: [
// //       {
// //         student: 'Tom Harris',
// //         rating: 5,
// //         comment: 'Highly informative and practical.',
// //       },
// //       {
// //         student: 'Emily Brown',
// //         rating: 4,
// //         comment: 'Great content and teaching.',
// //       },
// //     ],
// //     prerequisites: ['Basic Networking', 'Computer Science Fundamentals'],
// //   },
// //   {
// //     name: 'Data Science',
// //     price: '$20',
// //     assignments: 15,
// //     projects: 8,
// //     duration: '4 months',
// //     instructor: {
// //       name: 'Dr. John Doe',
// //       experience: '12 years',
// //     },
// //     syllabus: [
// //       {
// //         week: 1,
// //         topics: ['Introduction to Data Science', 'Python for Data Science'],
// //       },
// //       {
// //         week: 2,
// //         topics: ['Statistics Fundamentals', 'Data Wrangling'],
// //       },
// //       {
// //         week: 3,
// //         topics: ['Data Visualization', 'Matplotlib & Seaborn'],
// //       },
// //     ],
// //     reviews: [
// //       {
// //         student: 'Michael Brown',
// //         rating: 5,
// //         comment: 'Comprehensive and insightful.',
// //       },
// //       {
// //         student: 'Sara Wilson',
// //         rating: 4,
// //         comment: 'Great course with practical examples.',
// //       },
// //     ],
// //     prerequisites: ['Basic Python knowledge', 'Basic Statistics'],
// //   },
// //   {
// //     name: 'Graphic Design',
// //     price: '$35',
// //     assignments: 14,
// //     projects: 7,
// //     duration: '4 months',
// //     instructor: {
// //       name: 'Lucas Miller',
// //       experience: '9 years',
// //     },
// //     syllabus: [
// //       {
// //         week: 1,
// //         topics: ['Introduction to Graphic Design', 'Adobe Photoshop Basics'],
// //       },
// //       {
// //         week: 2,
// //         topics: ['Illustrator Techniques', 'Typography'],
// //       },
// //       {
// //         week: 3,
// //         topics: ['Advanced Design Principles', 'Portfolio Development'],
// //       },
// //     ],
// //     reviews: [
// //       {
// //         student: 'Sophia Wilson',
// //         rating: 5,
// //         comment: 'Amazing course with practical skills.',
// //       },
// //       {
// //         student: 'John Roberts',
// //         rating: 4,
// //         comment: 'Very helpful for budding designers.',
// //       },
// //     ],
// //     prerequisites: ['Basic Computer Skills'],
// //   },
// // ]);

// // //// read or query documents
// // let price = db.courses.find({ price: '$40' });
// // console.log(price);

// // console.log(
// //   price.forEach((element) => {
// //     console.log(element);
// //   })
// // );
// // //// use findOne for single document

// // db.courses.updateOne(
// //   { price: '$40' },
// //   {
// //     $set: { price: '$30' },
// //     $currentDate: {
// //       lastModified: true,
// //     },
// //   }
// // );

// // db.courses.updateMany(
// //   { price: '$40' },
// //   {
// //     $set: { price: '$10' },
// //     $currentDate: { lastModified: true },
// //   }
// // );
// //// Switch to the database
// //// Switch to the database
// use('CrudDb');

// //// Insert a single document into the collection
// db.courses.insertOne({
//   name: 'Web Development',
//   price: '$15',
//   assignments: 12,
//   projects: 10,
// });

// //// Insert multiple documents into the collection
// db.courses.insertMany([
//   {
//     name: 'Machine Learning',
//     price: '$25',
//     assignments: 10,
//     projects: 5,
//     duration: '3 months',
//     instructor: {
//       name: 'Dr. Emily White',
//       experience: '8 years',
//     },
//     syllabus: [
//       {
//         week: 1,
//         topics: ['Introduction to Machine Learning', 'Supervised Learning'],
//       },
//       {
//         week: 2,
//         topics: ['Unsupervised Learning', 'Dimensionality Reduction'],
//       },
//       {
//         week: 3,
//         topics: ['Neural Networks', 'Deep Learning'],
//       },
//     ],
//     reviews: [
//       {
//         student: 'Anna Smith',
//         rating: 5,
//         comment: 'Very well structured and detailed.',
//       },
//       {
//         student: 'David Lee',
//         rating: 4,
//         comment: 'Learned a lot, highly recommend.',
//       },
//     ],
//     prerequisites: ['Data Science', 'Linear Algebra'],
//   },
//   {
//     name: 'Cybersecurity',
//     price: '$40',
//     assignments: 18,
//     projects: 10,
//     duration: '5 months',
//     instructor: {
//       name: 'Sophia Davis',
//       experience: '7 years',
//     },
//     syllabus: [
//       {
//         week: 1,
//         topics: ['Introduction to Cybersecurity', 'Network Security'],
//       },
//       {
//         week: 2,
//         topics: ['Cryptography', 'Cyber Attacks and Defense'],
//       },
//       {
//         week: 3,
//         topics: ['Security in Cloud Computing', 'Incident Response'],
//       },
//     ],
//     reviews: [
//       {
//         student: 'Tom Harris',
//         rating: 5,
//         comment: 'Highly informative and practical.',
//       },
//       {
//         student: 'Emily Brown',
//         rating: 4,
//         comment: 'Great content and teaching.',
//       },
//     ],
//     prerequisites: ['Basic Networking', 'Computer Science Fundamentals'],
//   },
//   {
//     name: 'Data Science',
//     price: '$20',
//     assignments: 15,
//     projects: 8,
//     duration: '4 months',
//     instructor: {
//       name: 'Dr. John Doe',
//       experience: '12 years',
//     },
//     syllabus: [
//       {
//         week: 1,
//         topics: ['Introduction to Data Science', 'Python for Data Science'],
//       },
//       {
//         week: 2,
//         topics: ['Statistics Fundamentals', 'Data Wrangling'],
//       },
//       {
//         week: 3,
//         topics: ['Data Visualization', 'Matplotlib & Seaborn'],
//       },
//     ],
//     reviews: [
//       {
//         student: 'Michael Brown',
//         rating: 5,
//         comment: 'Comprehensive and insightful.',
//       },
//       {
//         student: 'Sara Wilson',
//         rating: 4,
//         comment: 'Great course with practical examples.',
//       },
//     ],
//     prerequisites: ['Basic Python knowledge', 'Basic Statistics'],
//   },
//   {
//     name: 'Graphic Design',
//     price: '$35',
//     assignments: 14,
//     projects: 7,
//     duration: '4 months',
//     instructor: {
//       name: 'Lucas Miller',
//       experience: '9 years',
//     },
//     syllabus: [
//       {
//         week: 1,
//         topics: ['Introduction to Graphic Design', 'Adobe Photoshop Basics'],
//       },
//       {
//         week: 2,
//         topics: ['Illustrator Techniques', 'Typography'],
//       },
//       {
//         week: 3,
//         topics: ['Advanced Design Principles', 'Portfolio Development'],
//       },
//     ],
//     reviews: [
//       {
//         student: 'Sophia Wilson',
//         rating: 5,
//         comment: 'Amazing course with practical skills.',
//       },
//       {
//         student: 'John Roberts',
//         rating: 4,
//         comment: 'Very helpful for budding designers.',
//       },
//     ],
//     prerequisites: ['Basic Computer Skills'],
//   },
// ]);

// //// Update the documents with price '$40' to price '$10'
// db.courses.updateMany(
//   { price: '$40' },
//   {
//     $set: { price: '$10' },
//     $currentDate: { lastModified: true },
//   }
// );

// //// Verify the update
// let updatedCourses = db.courses.find({ price: '$10' });
// updatedCourses.forEach((course) => console.log(course));

// //// Delete a single document with price '$10'
// db.courses.deleteOne({ price: '$10' });

// //// Delete multiple documents with price '$10'
// db.courses.deleteMany({ price: '$10' });

// //// Verify the deletions
// let remainingCourses = db.courses.find({});
// remainingCourses.forEach((course) => console.log(course));

use('urlShortener');
show collections()