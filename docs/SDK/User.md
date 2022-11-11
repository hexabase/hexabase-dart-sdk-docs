## Login by email and password

```dart
var client = Hexabase();
client.persistence = Hexabase.persistenceLocal;
await client.login('you@example.com', 'password');
```

## Login with Auth0

```dart
// Prepared token by Auth0
await client.loginAuth0('AUTH0_TOKEN');
```

## Save token to local storage

```dart
// Don't save
client.persistence = Hexabase.persistenceNone;

// Save token
client.persistence = Hexabase.persistenceLocal;
```

Next time, you can restore the token with `isLogin` method.

## Check login status

If your token is invalid, the client will be log out automatically.

```dart
if (await client.isLogin()) {
	// Login
	var user = await client.getCurrentUser();
} else {
	// Not login, or invalid token
}
```

