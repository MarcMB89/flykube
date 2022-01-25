
const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.inputbox.value;
    console.log(inputValue);
  }

export default handleSubmit;