import Button from "../components/Button";

export default function LogIn() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Usuario"/>
      </div>
      <div>
        <input type="text" placeholder="Senha"/>
      </div>
      <div>
        <Button cor="green" className="mb-4">Entrar</Button>
      </div>
    </div>
  )
}