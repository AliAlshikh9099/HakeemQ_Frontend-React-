import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "./style.css";

function SessionRoom(props) {
  localStorage.setItem(
    "session-token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI2Mjc2NTksImlzcyI6IkFQSTNGUlF1NUc0clp4diIsIm5iZiI6MTY5MjYyNjc1OSwic3ViIjoiT21hciIsInZpZGVvIjp7ImNhblB1Ymxpc2giOnRydWUsImNhblB1Ymxpc2hEYXRhIjp0cnVlLCJjYW5TdWJzY3JpYmUiOnRydWUsInJvb20iOiJIYWtlZW1RIFNlc3Npb24iLCJyb29tSm9pbiI6dHJ1ZX19.GQ0DkKBo1IMaLL9F-QytuvrWo8MAX5txcnJGRn8oOYM"
  );

  return (
    <main data-lk-theme="default">
      <LiveKitRoom
        token={localStorage.getItem("session-token")}
        serverUrl="wss://hakeem-n5ltiqr5.livekit.cloud"
        connect={true}
      >
        <VideoConference />
      </LiveKitRoom>
    </main>
  );
}

export default SessionRoom;
