/* API GET */
async function getFinances() {
  const finances = await fetch("http://localhost:3000/finances");
  return finances.json();
};

/* API POST */
async function responsePOST(objectInput) {
  await (await fetch("http://localhost:3000/finances", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objectInput)
  })).json();
};

/* API PUT */
async function responsePUT(objectId, objectInput) {
  await (await fetch(`http://localhost:3000/finances/${objectId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objectInput)
  })).json()
};

/* API DELETE */
async function responseDELETE(objectId) {
  await (await fetch(`http://localhost:3000/finances/${objectId}`, {
    method: "DELETE"
  })).json()
};

export { getFinances, responsePOST, responsePUT, responseDELETE };