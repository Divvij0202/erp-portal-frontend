import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

/**
 * Logs a system action to the Firestore audit_logs collection.
 * 
 * @param {string} action - The action performed (e.g., 'UPDATE_ROLE', 'GRADE_ASSIGNMENT')
 * @param {string} collectionName - Which collection was affected (e.g., 'users', 'submissions')
 * @param {string} docId - The ID of the document that was changed
 * @param {object} details - Additional metadata about the change
 */
export const logAction = async (action, collectionName, docId, details = {}) => {
  try {
    const user = auth.currentUser;
    if (!user) return;

    await addDoc(collection(db, 'audit_logs'), {
      action,
      collection: collectionName,
      docId,
      userId: user.uid,
      timestamp: serverTimestamp(),
      details,
    });
  } catch (error) {
    console.error("Failed to log action:", error);
  }
};
