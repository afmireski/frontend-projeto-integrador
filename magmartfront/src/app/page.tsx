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

export async function getServerSideProps(context) {
  const session = await getIronSession(context.req, context.res, sessionOptions);

  return {
    props: {
      user: session.user || null,
    },
  };
}
