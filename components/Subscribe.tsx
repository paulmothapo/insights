'use client'

import React, { useState } from 'react';
import axios from 'axios';

const MAILER_API =  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNDZlYmI2ODQ2YmM1YTZkMThkYjlhNWM1ODgxZjljMzk5ZDEwOTIyZTAwMmFhMmFlN2IzMGJkMTg4MTg1YzU1OGIyYzUwZTQ1YTgwMWZhMTkiLCJpYXQiOjE3MDY4NTgyNzYuMTE3ODY3LCJuYmYiOjE3MDY4NTgyNzYuMTE3ODY5LCJleHAiOjQ4NjI1MzE4NzYuMTE0NTUyLCJzdWIiOiI4MjI2MjMiLCJzY29wZXMiOltdfQ.X_TlHIBjK0fOVjtHniVVM4DK6SiWtlbubYiwFNOT74iwnLhFAAvxa6sbHaAS9pSJFrDPYufvB_qrCzvur9uJbhaL716jr4PbTqsgIzMukb1OmjSOD2smV9fw9MVqE7EfdMOrglqrqh0C4WAxETREINp9lbu6LncuHpMH1iWS5D3THPlBzoqBzvK_gUkpfvR4jFEhFwnKltA6r_8Ww0asCRmJE8zhNYp-G9_2_Vi8DhF3b__ghxhr2Bm_74ZUAqu3X36wmt98YgeWfHg4ihQjF_RBSaLg0WSNfT1ky_AkUb2DUiZ2tXTN-CZSYH61cMvHKtBCx5JOFUfG6JjkB1GxJBrKonnU7a-zGjJOLhiqN0zaWL0KYKms1yrtseBvOjABaTndBTKMsqqVp3WeJLo78cQPSeDvWd5pnShsrzZSm5YK_8zWc2eoMezEK7wCPE3lpPVwoOdzQ_wjiv4aRfesF9dO1Sgu3ZYwEZDf2JXRsOis0Rr2HeUY59g4xeCgs2TWupKRmRUdnQ3dgZewQts5d7Wcrn1-h8tdLSPl8k5k4Fnwap2ak3LFfUuQsWiRyh_9RPXQ7M8EdJU7lzKk3pkCaDod7KYj9o9sWqlu8WHW_Yb8qYY5cdftbxScv7q7mGGqxPVb-AWkjEBrDSIcmHWGJuzfxy6LkhJIz8UaoOkxBkg';


const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email');
      return;
    }

    try {
      await axios.post(
        'https://api.mailerlite.com/api/v2/subscribers',
        {
          email,
          name: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey': MAILER_API
            ,
          },
        }
      );

      setSuccess(true);
      setError('');
    } catch (err) {
      setError('Error subscribing. Please try again.');
    }
  };

  return (
    <div>
      <h2 className='mb-2 font-bold text-lg'>Subscribe</h2>
      <p>Stay ahead with our latest Thinking.</p>
      {success ? (
        <p>Success! Check your email for a confirmation link.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='p-2 text-ideablack border border-ideablack/75 hover:border-mildgreen mr-2'
          />
          <button className='bg-lightgreen text-ideablack hover:text-mildgreen hover:bg-white hover:border-2 hover:border-mildgreen font p-2' type="submit">Subscribe</button>
        </form>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Subscribe;