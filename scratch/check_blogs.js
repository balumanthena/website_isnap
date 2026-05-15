const { db } = require('./lib/firebase');
const { collection, getDocs } = require('firebase/firestore');

async function checkBlogs() {
  try {
    const snapshot = await getDocs(collection(db, 'blogs'));
    console.log('Total blogs:', snapshot.size);
    snapshot.forEach(doc => {
      console.log('ID:', doc.id, 'Data:', JSON.stringify(doc.data(), null, 2));
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
}

checkBlogs();
