import Input from './Input'
export default function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.isRegistred && (
        <Input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{props.isRegistred ? 'Login' : 'Register'}</button>
    </form>
  )
}
