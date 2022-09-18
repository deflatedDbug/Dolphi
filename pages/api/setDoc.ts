export async function updateDoc(body: string): Promise<string> {
	return fetch("http://35.232.11.213:8000/api/v1/UMD/MATH/140/fall2022/1/update", {
		method: 'PUT',
		body: JSON.stringify({data: "2022-05-22", body: body}),
	}).then(
		await fetch("http://35.232.11.213:8000/api/v1/UMD/MATH/140/fall2022/1/update")
		.then((response) => response.json())
		.then((data) => data.body)
)}
