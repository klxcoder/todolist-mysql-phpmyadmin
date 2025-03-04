# Build

```bash
docker compose build
```

# Up --watch

```bash
docker compose up --watch
```

# Open phpMyAdmin

```
http://localhost:8080
```

# Enter credentials

```
username: root
password: root
```

# Create database `todos`

# Create table `todos`

```sql
CREATE TABLE todos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(255) NOT NULL,
  done BOOLEAN NOT NULL DEFAULT FALSE
);
```
# Open todo list app

```
http://localhost:5173
```

# Clean up

```bash
docker compose down
```