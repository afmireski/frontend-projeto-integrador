import { getIronSession } from "iron-session";
import { sessionOptions } from "../lib/session";

export default function HomePage({ user }) {
  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <div>Welcome, {user.accessToken}</div>
      ) : (
        <div>Please log in</div>
      )}
    </div>
  );
}

