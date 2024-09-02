import React, { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/api";
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { type Schema } from "../amplify/data/resource";

const client = generateClient<Schema>();

function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [submissions, setSubmissions] = useState<Schema['ContactSubmission']['type'][]>([]);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const userData = await getCurrentUser();
      setUser(userData);
      if (userData) {
        fetchSubmissions();
      }
    } catch (error) {
      console.log('No authenticated user');
    }
  }

  async function fetchSubmissions() {
    try {
      const { data } = await client.models.ContactSubmission.list({});
      setSubmissions(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  }

  const handleUpdateStatus = async (id: string, newStatus: 'NEW' | 'REPLIED') => {
    try {
      await client.models.ContactSubmission.update({
        id,
        status: newStatus,
      });
      fetchSubmissions();
    } catch (error) {
      console.error('Error updating submission:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return null; // Don't render anything if there's no authenticated user
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleSignOut}>Sign out</button>
      <h2>Contact Submissions</h2>
      {submissions.map((submission) => (
        <div key={submission.id}>
          <h3>{submission.name}</h3>
          <p>Email: {submission.email}</p>
          <p>Message: {submission.message}</p>
          <p>Status: {submission.status}</p>
          <button onClick={() => handleUpdateStatus(submission.id, 'REPLIED')}>
            Mark as Replied
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;