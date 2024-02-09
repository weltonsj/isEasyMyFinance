/* API GET */
async function getFinances() {
  const finances = await fetch("https://raw.githubusercontent.com/weltonsj/isEasyMyFinance/main/db.json");
  return finances.json();
};

/* API POST */
async function responsePOST(objectInput) {
  await (await fetch("https://raw.githubusercontent.com/weltonsj/isEasyMyFinance/main/db.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objectInput)
  })).json();
};

/* API PUT */
async function responsePUT(objectId, objectInput) {
  await (await fetch(`https://raw.githubusercontent.com/weltonsj/isEasyMyFinance/main/db.json/${objectId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objectInput)
  })).json()
};

/* API DELETE */
async function responseDELETE(objectId) {
  await (await fetch(`https://raw.githubusercontent.com/weltonsj/isEasyMyFinance/main/db.json/${objectId}`, {
    method: "DELETE"
  })).json()
};

export { getFinances, responsePOST, responsePUT, responseDELETE };
