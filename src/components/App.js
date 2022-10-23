import Login from './Login'

var isLoggedIn = false

const currentHour = new Date().getHours()
console.log(currentHour)

function App() {
  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        currentHour > 12 && <h1>Why are you still working?</h1>
      }
    </div>
  )
}

export default App
