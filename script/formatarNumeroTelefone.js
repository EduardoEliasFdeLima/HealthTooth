   
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (e) => {
  const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
  const formattedValue = formatPhoneNumber(value);
  e.target.value = formattedValue;
});

function formatPhoneNumber(value) {
  if (value.length <= 2) {
    return `(${value}`; // Formato inicial: (XX
  } else if (value.length <= 7) {
    return `(${value.slice(0, 2)}) ${value.slice(2)}`; // Formato: (XX) XXXXX
  } else {
    return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`; // Formato: (XX) XXXXX-XXXX
  }
}