export function Greeting() {
  const condicional = false;
  return <h1 > {
    condicional ? "Hello my people :D" : "Negativo pareja"
  } </h1>;
}

export function UserCard() {
  return <h1>User Card: 123-123</h1>
}