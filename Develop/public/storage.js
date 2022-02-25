const storageName = "localTransactions";

function addToStore ({ name, value, date }) {
    const data = getFromStore();
    data.push({ name, value, date });
    localStorage.setItem(storageName, JSON.stringify(data));
}

function emptyStore () {
    localStorage.removeItem(storageName);
}

function getFromStore () {
    const data = localStorage.getItem(storageName);
    if (data) {
        return JSON.parse(data);
    }
    else {
        return [];
    }
}