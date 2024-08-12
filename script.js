const groups = {
    "Group A": [1, 2, 3, 4, 5, 6],
    "Group B": [7, 8, 9, 10, 11, 12],
    "Group C": [13, 14, 15, 16, 17, 18],
    "Group D": [19, 20, 21, 22, 23, 24],
    "Group E": [25, 26, 27, 28, 29, 30],
    "Group F": [31, 32, 33, 34, 35, 36]
};

function initializeTable() {
    const table = document.getElementById("groupTable");

    for (const group in groups) {
        const row = document.createElement("tr");

        const cellGroup = document.createElement("td");
        cellGroup.textContent = group;

        const cellNumbers = document.createElement("td");
        cellNumbers.textContent = groups[group].join(", ");

        const cellCount = document.createElement("td");
        cellCount.textContent = "0";

        row.appendChild(cellGroup);
        row.appendChild(cellNumbers);
        row.appendChild(cellCount);

        table.appendChild(row);
    }
}

function countNumbersByGroup(numbers) {
    const count = {};

    for (const group in groups) {
        count[group] = 0;

        groups[group].forEach(number => {
            if (numbers.includes(number)) {
                count[group]++;
            }
        });
    }

    return count;
}

function updateTable(count) {
    const table = document.getElementById("groupTable");
    const rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
        const group = rows[i].cells[0].textContent;
        rows[i].cells[2].textContent = count[group];
    }
}

function findGroupWithFewestNumbers(count) {
    let groupWithFewestNumbers = null;
    let fewestCount = Infinity;

    for (const group in count) {
        if (count[group] < fewestCount) {
            fewestCount = count[group];
            groupWithFewestNumbers = group;
        }
    }

    return groupWithFewestNumbers;
}

function displayResult(groupWithFewestNumbers) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `The group with the fewest passed numbers is: ${groupWithFewestNumbers}`;
}

function processNumbers() {
    const numbersInput = document.getElementById("numbersInput").value;
    const numbers = numbersInput.split(",").map(Number).filter(Boolean);

    const count = countNumbersByGroup(numbers);
    updateTable(count);
    const groupWithFewestNumbers = findGroupWithFewestNumbers(count);
    displayResult(groupWithFewestNumbers);
}

// Initialize the table with groups and numbers on page load
initializeTable();
