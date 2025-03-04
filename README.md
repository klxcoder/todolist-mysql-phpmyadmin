```
docker compose build
```

```
docker compose up
```

```
docker compose down
```

```
http://localhost:8080
```

```
username: root
password: root
```

# Note

```bash
(base) ┌──(klx㉿kali)-[~/todolist-mysql-phpmyadmin/backend] (main)
└─$ docker exec -it todolist-mysql-phpmyadmin-backend-1 curl backend:3000
{"message":"Hello from MySQL 9.2.0"}

(base) ┌──(klx㉿kali)-[~/todolist-mysql-phpmyadmin/backend] (main)
└─$ 
```

# database: `tododb`

### Create table `todos`

```sql
CREATE TABLE todos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(255) NOT NULL,
  done BOOLEAN NOT NULL DEFAULT FALSE
);
```