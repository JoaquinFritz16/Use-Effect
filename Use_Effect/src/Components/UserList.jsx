import React, { useState, useEffect } from "react";
const users = ["Alice", "Bob", "Charlie", "David", "Carlos"];
function UserList() {
	const [filteredUsers, setFilteredUsers] = useState(users);
	const [keyword, setKeyword] = useState("");
	useEffect(() => {
		setFilteredUsers(users.filter((user) => user.includes(keyword)));
	}, [keyword]);
	return (
		<div>
			<input
				type="text"
				placeholder="Filtrar usuarios"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<ul>
				{filteredUsers.map((user, index) => (
					<li key={index}>{user}</li>
				))}
			</ul>
		</div>
	);
}
export default UserList;
