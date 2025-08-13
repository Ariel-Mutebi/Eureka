// clientSide/updatePost.ts
function setUpAuthForm(itemPK) {
  const authForm = document.getElementById("authForm");
  const updateForm = document.getElementById("postCreationForm");
  const wrongPasswordParagraph = document.getElementById("wrongPassword");
  updateForm.style.visibility = "hidden";
  authForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const authFormData = new FormData(authForm);
    const response = await fetch(`${itemPK}/getAuthToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        password: authFormData.get("password")
      })
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
export {
  setUpAuthForm
};
