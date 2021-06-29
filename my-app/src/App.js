import './App.css';

function App() {
  return (
    <div className="App">
  <script>
    document.body.classList.add('fade-out')

    window.addEventListener('DOMContentLoaded', () {
    document.body.classList.remove('fade-out')
})
</script>
    </div>
  );
}
document.body.classList.add('fade-out');

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
})

function validateForm() {
    let x = document.forms["myForm"]["fname"]["lname"].value;
    if (x == "") {
        alert("Name must be filled out to submit");
        return false;
    }
    else (x !== "") 
        alert("Thank you for submitting")
        return true;
    } 



export default App;
