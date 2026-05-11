document.addEventListener("DOMContentLoaded", () => {

    const editBtn = document.getElementById("editBtn");

    const inputs = document.querySelectorAll(".profile-field input");

    let editing = false;

    // CONTADOR
    let changesCount = 0;

    // LÍMITE
    const maxChanges = 2;

    editBtn.addEventListener("click", () => {

        // SI YA ALCANZÓ EL LÍMITE
        if (changesCount >= maxChanges && !editing) {

            alert("Has alcanzado el límite máximo de cambios permitidos. Tendrás que esperar 30 días para volver a editar los datos.");

            return;
        }

        editing = !editing;

        inputs.forEach(input => {
            input.disabled = !editing;
        });

        if (editing) {

            editBtn.textContent = "Guardar Cambios";

            editBtn.classList.add("save-mode");

        } else {

            // CUANDO GUARDA
            changesCount++;

            alert(`Cambios guardados correctamente.\nTe quedan ${maxChanges - changesCount} cambios.`);

            editBtn.textContent = "Editar Perfil";

            editBtn.classList.remove("save-mode");

            // CAMBIO VISUAL AL LLEGAR AL LÍMITE
            if (changesCount >= maxChanges) {

                editBtn.classList.add("disabled-mode");

                editBtn.textContent = "Editar Perfil";
            }
        }

    });

});