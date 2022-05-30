const url = 'https://crudcrud.com/api/7fd0ce93ec6b44eeb6095d7f93b58e74/comics';

export async function get() {
  const data = await fetch(`${url}`);
  return data.json();
}

export async function create(comic) {
  await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comic)
  });
}

export async function update(comic) {
  await fetch(`${url}/${comic._id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comic)
  });
}

export async function remove(id) {
  try {
    await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch(e) {
    console.log('omg err', e);
  }
}