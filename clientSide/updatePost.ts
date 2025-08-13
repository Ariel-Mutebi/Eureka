function setUpAuthForm(itemPK: string){
  const authForm = document.getElementById("authForm") as HTMLFormElement;
  const updateForm = document.getElementById("postCreationForm") as HTMLFormElement;
  const wrongPasswordParagraph = document.getElementById("wrongPassword") as HTMLParagraphElement;

  updateForm.style.visibility = "hidden";

  authForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const authFormData = new FormData(authForm);
    const response = await fetch(`${itemPK}/getAuthToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: authFormData.get("password"),
      }),
    });

    if (response.status !== 200) {
      wrongPasswordParagraph.innerText = "Wrong password.";
      return;
    }

    const authToken = await response.text();
    updateForm.action = `${itemPK}/${authToken}`;

    wrongPasswordParagraph.innerText = "";
    updateForm.style.visibility = "visible";
  });
}

export { setUpAuthForm };