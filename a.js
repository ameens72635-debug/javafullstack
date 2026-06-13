document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("details");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not selected";
    const phone = document.getElementById("phone").value;
    const country = document.getElementById("country").value;
    const address = document.getElementById("address").value;
    const photoInput = document.getElementById("photo");
    const photoFile = photoInput.files[0];
    const photoName = photoFile?.name || "No photo selected";
    const submittedAt = new Date().toLocaleString();

    function saveMember(photoDataUrl) {
      const newMember = {
        submittedAt,
        name,
        age,
        email,
        gender,
        phone,
        country,
        address,
        photoName,
        photoDataUrl
      };

      const stored = localStorage.getItem("appliedMembers");
      const members = stored ? JSON.parse(stored) : [];
      members.push(newMember);
      localStorage.setItem("appliedMembers", JSON.stringify(members));

      window.open("details.html", "_blank");
      form.reset();
    }

    if (photoFile) {
      const reader = new FileReader();
      reader.onload = function() {
        saveMember(reader.result);
      };
      reader.readAsDataURL(photoFile);
    } else {
      saveMember("");
    }
  });
});