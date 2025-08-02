<script setup>
const nameInput = ref('')
const emailInput = ref('')
const users = ref([])

users.value = await $fetch('/api/listUsers').catch((err) => {
	// Handle error if the API call fails
	console.error('Failed to fetch users', err)
	return []
})

const handleSubmit = () => {
	if (!nameInput.value || !emailInput.value) {
		nameInput.value = ''
		emailInput.value = ''
		return
	}

	$fetch('/api/addUser', {
		method: 'POST',
		body: {
			name: nameInput.value,
			email: emailInput.value,
		},
	}).then(async () => {
		// Refresh the user list after adding a new user
		users.value = await $fetch('/api/listUsers')
	})

	nameInput.value = ''
	emailInput.value = ''
}
</script>

<template>
	<div class="wrapper">
		<div class="info">
			<div class="name">
				<label for="name" />
				<input
					id="name"
					v-model="nameInput"
					type="text"
					placeholder="Name"
					autocomplete="off"
				>
			</div>
			<div class="email">
				<label for="email" />
				<input
					id="email"
					v-model="emailInput"
					type="email"
					placeholder="Email"
					autocomplete="off"
				>
			</div>
			<button
				type="submit"
				class="btn"
				@click.prevent="handleSubmit"
			>
				Submit
			</button>
			<ul
				v-if="users.length"
				class="users"
			>
				<li
					v-for="user in users"
					:key="user.id"
				>
					{{ user.Name }} - {{ user.Email }}
				</li>
			</ul>
			<p v-else>
				No users found.
			</p>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
  max-width: 1280px;
  margin-inline: auto;
}

.info {
  margin-block: 4rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}

.name,
.email {
  margin-inline: auto;
  width: 100%;
}

.name input,
.email input {
  width: 100%;
  padding: 0.5rem;
}

.btn {
  width: 10%;
  padding: 0.5rem 1rem;
  margin-right: auto;
}

.users {
  list-style: none;
  padding: 0;
	margin-right: auto;
	width: 100%;
}

.users li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #490f0f;
}
</style>
