import Form from './Form'
var isUserRegistred = true

function App() {
  return (
    <div className="container">
      {
        <Form isRegistred={isUserRegistred} />

        /* {
        isLoggedIn ? <h1>Hello</h1> : <Login />
        currentHour > 12 && <h1>Why are you still working?</h1>
      } */
      }
    </div>
  )
}

export default App
