import React, { useState, useEffect } from 'react';
import LiveKit from 'livekit-client';

const VideoSession = () => {
  const [room, setRoom] = useState(null);
  const [localParticipant, setLocalParticipant] = useState(null);
  const [remoteParticipants, setRemoteParticipants] = useState([]);

  useEffect(() => {
    async function connectToRoom() {
      // Replace the following values with your LiveKit server URL, API key, and token
      const serverUrl = 'wss://192.168.43.171:7880/';
      const apiKey = 'dvekey';
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI5OTk1MTgsImlzcyI6ImRldmtleSIsIm5hbWUiOiJBbGkiLCJuYmYiOjE2ODI5MTMxMTgsInN1YiI6IkFsaSIsInZpZGVvIjp7InJvb20iOiJoYWtlZW1RIiwicm9vbUNyZWF0ZSI6dHJ1ZSwicm9vbUpvaW4iOnRydWV9fQ.0kFW-lo8CEQeLwEF-qMLoLrEs_9xXcDQ66UIm_RHBnE';
      const roomName = 'hakeemQ';

      try {
        // Connect to the LiveKit server and join a room
        const livekitRoom = await LiveKit.connect(serverUrl, apiKey, token, {
          name: roomName,
        });

        // Set the room state
        setRoom(livekitRoom);

        // Set the local participant state
        setLocalParticipant(livekitRoom.localParticipant);

        // Set up event listeners for remote participants joining and leaving the room
        livekitRoom.on('participantConnected', participant => {
          setRemoteParticipants(prevParticipants => [...prevParticipants, participant]);
        });

        livekitRoom.on('participantDisconnected', participant => {
          setRemoteParticipants(prevParticipants => prevParticipants.filter(p => p !== participant));
        });
      } catch (error) {
        console.error('Failed to connect to LiveKit room', error);
      }
    }

    connectToRoom();
  }, []);

  return (
    <div>
      {localParticipant && <p>You are connected as {localParticipant.identity}</p>}
      <ul>
        {remoteParticipants.map(participant => (
          <li key={participant.sid}>{participant.identity} is in the room</li>
        ))}
      </ul>
    </div>
  );
}

export default VideoSession;