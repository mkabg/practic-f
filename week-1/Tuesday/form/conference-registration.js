document.addEventListener("DOMContentLoaded", () => {
  const otherRadio = document.getElementById("diet-other");
  const otherDetails = document.getElementById("diet-other-details");
  const otherText = document.getElementById("diet-other-text");

  if (!otherRadio || !otherDetails || !otherText) return;

  otherRadio.addEventListener("change", () => {
    if (otherRadio.checked) {
      otherDetails.style.display = "block";
      otherText.required = true;
    }
  });

  document.querySelectorAll('input[name="diet"]').forEach((radio) => {
    if (radio !== otherRadio) {
      radio.addEventListener("change", () => {
        otherDetails.style.display = "none";
        otherText.required = false;
        otherText.value = "";
      });
    }
  });
});
