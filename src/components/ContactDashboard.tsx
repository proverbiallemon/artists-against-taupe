import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();

interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const ContactDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [reply, setReply] = useState('');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data } = await client.models.ContactSubmission.list({});
      setSubmissions(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  const handleReply = async () => {
    if (!selectedSubmission) return;

    try {
      // You'll need to implement this API endpoint in your backend
      await client.post('/reply', {
        body: {
          to: selectedSubmission.email,
          message: reply
        }
      });
      setReply('');
      // Optionally, update the submission status or remove it from the list
      fetchSubmissions(); // Refresh the list after reply
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  return (
    <div className="contact-dashboard">
      <div className="submission-list">
        {submissions.map(submission => (
          <div key={submission.id} onClick={() => setSelectedSubmission(submission)}>
            <h3>{submission.name}</h3>
            <p>{submission.email}</p>
            <p>{new Date(submission.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
      {selectedSubmission && (
        <div className="submission-detail">
          <h2>{selectedSubmission.name}</h2>
          <p>{selectedSubmission.email}</p>
          <p>{selectedSubmission.message}</p>
          <textarea 
            value={reply} 
            onChange={(e) => setReply(e.target.value)}
            placeholder="Type your reply here"
          />
          <button onClick={handleReply}>Send Reply</button>
        </div>
      )}
    </div>
  );
};

export default ContactDashboard;