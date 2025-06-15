document.addEventListener("DOMContentLoaded", () => {
  const checklist = document.getElementById("checklist");
  const addItemForm = document.getElementById("addItemForm");
  const newItemInput = document.getElementById("newItemInput");
  const listSelect = document.getElementById("listSelect");
  const newListNameInput = document.getElementById("newListName");
  const createListBtn = document.getElementById("createListBtn");

  function getCurrentListName() {
    return listSelect.value;
  }

  function createChecklistItem(id, text, checked) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;
    checkbox.addEventListener("change", () => toggleItem(id, checkbox.checked));

    const label = document.createElement("label");
    label.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => deleteItem(id));

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);

    return li;
  }

  async function loadChecklist() {
    const listName = getCurrentListName();
    try {
      const response = await fetch(`api/get_checklist.php?list_name=${encodeURIComponent(listName)}`);
      const items = await response.json();

      checklist.innerHTML = "";
      items.forEach((item) => {
        const li = createChecklistItem(item.id, item.item_text, item.checked);
        checklist.appendChild(li);
      });
    } catch (err) {
      console.error("Fehler beim Laden:", err);
    }
  }

  async function loadListNames() {
    try {
      const response = await fetch("api/get_lists.php");
      const lists = await response.json();

      listSelect.innerHTML = "";
      lists.forEach((name) => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        listSelect.appendChild(option);
      });

      if (lists.length > 0) {
        listSelect.value = lists[0];
        loadChecklist();
      }
    } catch (err) {
      console.error("Fehler beim Laden der Listen:", err);
    }
  }

  addItemForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const itemText = newItemInput.value.trim();
    const listName = getCurrentListName();
    if (!itemText) return;

    try {
      const response = await fetch("api/add_checklist_item.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ item_text: itemText, list_name: listName }),
      });

      const result = await response.json();
      if (result.success) {
        newItemInput.value = "";
        loadChecklist();
      } else {
        alert(result.message || "Fehler beim Hinzufügen");
      }
    } catch (err) {
      console.error("Fehler beim Speichern:", err);
    }
  });

  async function toggleItem(id, checked) {
    try {
      await fetch("api/update_checklist_item.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ id, checked: checked ? 1 : 0 }),
      });
    } catch (err) {
      console.error("Fehler beim Aktualisieren:", err);
    }
  }

  async function deleteItem(id) {
    if (!confirm("Eintrag wirklich löschen?")) return;
    try {
      await fetch("api/delete_checklist_item.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ id }),
      });
      loadChecklist();
    } catch (err) {
      console.error("Fehler beim Löschen:", err);
    }
  }

  createListBtn.addEventListener("click", () => {
    const newList = newListNameInput.value.trim();
    if (!newList) return alert("Bitte einen Namen für die neue Liste eingeben.");
    const option = document.createElement("option");
    option.value = newList;
    option.textContent = newList;
    listSelect.appendChild(option);
    listSelect.value = newList;
    newListNameInput.value = "";
    loadChecklist();
  });

  listSelect.addEventListener("change", loadChecklist);

  loadListNames();
});
