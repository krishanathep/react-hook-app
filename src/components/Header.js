
export default function Header({user, setUser}) {
  return (
    <>
      <h3>Welcome, {user}!</h3>
      <button onClick={()=>setUser('')}>Logout</button>
    </>
  );
}
