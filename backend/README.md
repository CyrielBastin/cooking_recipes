# Routes
- [/api/articles](#Articles)
- [/api/categories](#Categories)
- [/api/countries](#Countries)
- [/api/ingredients](#Ingredients)
- [/api/kitchenwares](#Kitchenwares)
- [/api/measures](#Measures)
- /api/recipes

---

# Articles
`Articles` returned will have the form:

```
Article {
id: int
title: string
image: string
content: string
user_id: int
created_at: string
updated_at: string
user: {
  id: int
  email: string
  }
}
```

When creating or updating an `article` it must a have the form:

```
Article {
title: string - [max: 150 chars]
image: string
content: string
user_id: int
}
```

### GET `/api/articles`
- Retrieves All `articles`
  - Response: 200 `Ok`
### GET `/api/articles/{id}`
- Retrieves `article` with id `{id}`
  - Response: 200 `Ok`
  - Response: 404 `Not Found`

> GET '/api/articles/1'
>
> returns: 200

```json
{
  "id": 1,
  "title": "My first Article",
  "image": "corndog_and_chips.png",
  "content": "Corndogs and Chips",
  "user_id": 1,
  "created_at": "2024-05-17 14:00:00",
  "updated_at": "2024-05-17 14:00:00",
  "user": {
    "id": 1,
    "email": "toto@example.com"
  }
}
```

### POST `/api/articles`
- Creates a new `article`
  - Response: 201 `Created`
  - Response: 204 `No Content` - if validations fail

> POST '/api/articles'

```json
{
  "article": {
    "title": "Awesome Title",
    "image": "new_article_123456.png",
    "content": "My new Awesome Article",
    "user_id": 45
  }
}
```

> returns: 201

```json
{
  "id": 2,
  "title": "Awesome Title",
  "image": "new_article_123456.png",
  "content": "My new Awesome Article",
  "user_id": 45,
  "created_at": "2024-05-18 23:34:45",
  "updated_at": "2024-05-18 23:34:45",
  "user": {
    "id": 45,
    "email": "jane@doe.net"
  }
}
```

### PUT `/api/articles/{id}`
- Updates `article` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PUT '/api/articles/2'

```json
{
  "article": {
    "title": "Updated Title",
    "image": "new_article_123456.png",
    "content": "My new Awesome Article",
    "user_id": 45
  }
}
```

> returns: 200

```json
{
  "id": 2,
  "title": "Updated Title",
  "image": "new_article_123456.png",
  "content": "My new Awesome Article",
  "user_id": 45,
  "created_at": "2024-05-18 23:34:45",
  "updated_at": "2024-05-29 15:37:21",
  "user": {
    "id": 45,
    "email": "jane@doe.net"
  }
}
```


### PATCH `/api/articles/{id}`
- Updates `article` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PATCH '/api/articles/2'

```json
{
  "article": {
    "content": "Updated content"
  }
}
```

> returns: 200

```json
{
  "id": 2,
  "title": "Updated Title",
  "image": "new_article_123456.png",
  "content": "Updated content",
  "user_id": 45,
  "created_at": "2024-05-18 23:34:45",
  "updated_at": "2024-05-30 00:00:12",
  "user": {
    "id": 45,
    "email": "jane@doe.net"
  }
}
```

### DELETE `/api/articles/{id}`
- Deletes `article` with id `{id}`
  - Response: 204 `No Content` - if success
  - Response: 404 `Not Found`
---

# Categories
`Categories` returned will have the form:

```
Category {
  id: int
  name: string
  parent_id: int | null
}
```

When creating or updating a `category` it must a have the form:

```
Category {
  name: string - [Unique, max: 30 chars]
  parent_id: int | null
}
```

### GET `/api/categories`
- Retrieves All `categories`
  - Response: 200 `Ok`
### GET `/api/categories/{id}`
- Retrieves `category` with id `{id}`
  - Response: 200 `Ok`
  - Response: 404 `Not Found`

> GET '/api/categories/6'
>
> returns: 200

```json
{
  "id": 6,
  "name": "Hot Sauces",
  "parent_id": 5
}
```

### POST `/api/categories`
- Creates a new `category`
  - Response: 201 `Created`
  - Response: 204 `No Content` - if validations fail

> POST '/api/categories'

```json
{
  "category": {
    "name": "Unique Tomato Sauce",
    "parent_id": null
  }
}
```

> returns: 201

```json
{
  "id": 10,
  "name": "Unique Tomato Sauce",
  "parent_id": null
}
```

### PUT `/api/categories/{id}`
- Updates `category` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PUT '/api/categories/10'

```json
{
  "category": {
    "name": "Tomato Sauces",
    "parent_id": null
  }
}
```

> returns: 200

```json
{
  "id": 10,
  "name": "Tomato Sauces",
  "parent_id": null
}
```

### PATCH `/api/categories/{id}`
- Updates `category` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PATCH '/api/categories/10'

```json
{
  "category": {
    "parent_id": 5
  }
}
```

> returns: 200

```json
{
  "id": 10,
  "name": "Tomato Sauces",
  "parent_id": 5
}
```

### DELETE `/api/categories/{id}`
- Deletes `category` with id `{id}`
  - Response: 204 `No Content` - if success
  - Response: 404 `Not Found`
---

# Countries
`Countries` returned will have the form:

```
Country {
  id: int
  image: string | null
  name: string
}
```

When creating or updating a `country` it must a have the form:

```
Country {
  image: string | null
  name: string - [Unique, max: 100 chars]
}
```

### GET `/api/countries`
- Retrieves All `countries`
  - Response: 200 `Ok`
### GET `/api/countries/{id}`
- Retrieves `country` with id `{id}`
  - Response: 200 `Ok`
  - Response: 404 `Not Found`

> GET '/api/countries/1'
>
> returns: 200

```json
{
  "id": 1,
  "image": "france.png",
  "name": "France"
}
```

### POST `/api/countries`
- Creates a new `country`
  - Response: 201 `Created`
  - Response: 204 `No Content` - if validations fail

> POST '/api/countries'

```json
{
  "country": {
    "image": null,
    "name": "Belgium"
  }
}
```

> returns: 201

```json
{
  "id": 9,
  "image": null,
  "name": "Belgium"
}
```

### PUT `/api/countries/{id}`
- Updates `country` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PUT '/api/countries/9'

```json
{
  "country": {
    "image": "belgium_flag.png",
    "name": "Belgium"
  }
}
```

> returns: 200

```json
{
  "id": 9,
  "image": "belgium_flag.png",
  "name": "Belgium"
}
```

### PATCH `/api/countries/{id}`
- Updates `country` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PATCH '/api/countries/9'

```json
{
  "country": {
    "image": "belgium.webp"
  }
}
```

> returns: 200

```json
{
  "id": 9,
  "image": "belgium.webp",
  "name": "Belgium"
}
```

### DELETE `/api/countries/{id}`
- Deletes `country` with id `{id}`
  - Response: 204 `No Content` - if success
  - Response: 404 `Not Found`
---

# Ingredients
`Ingredients` returned will have the form:

```
Ingredient {
  id: int
  image: string | null
  name: string
}
```

When creating or updating an `ingredient` it must a have the form:

```
Ingredient {
  image: string | null
  name: string - [Unique, max: 50 chars]
}
```

### GET `/api/ingredients`
- Retrieves All `ingredients`
  - Response: 200 `Ok`
### GET `/api/ingredients/{id}`
- Retrieves `ingredient` with id `{id}`
  - Response: 200 `Ok`
  - Response: 404 `Not Found`

> GET '/api/ingredients/33'
>
> returns: 200

```json
{
  "id": 33,
  "image": "parsley.png",
  "name": "Parsley"
}
```

### POST `/api/ingredients`
- Creates a new `ingredient`
  - Response: 201 `Created`
  - Response: 204 `No Content` - if validations fail

> POST '/api/ingredients'

```json
{
  "ingredient": {
    "image": null,
    "name": "Cabbage"
  }
}
```

> returns: 201

```json
{
  "id": 50,
  "image": null,
  "name": "Cabbage"
}
```

### PUT `/api/ingredients/{id}`
- Updates `ingredient` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PUT '/api/ingredients/50'

```json
{
  "ingredient": {
    "image": null,
    "name": "Red Cabbage"
  }
}
```

> returns: 200

```json
{
  "id": 50,
  "image": null,
  "name": "Red Cabbage"
}
```

### PATCH `/api/ingredients/{id}`
- Updates `ingredient` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PATCH '/api/ingredients/50'

```json
{
  "ingredient": {
    "image": "red_cabbage.webp"
  }
}
```

> returns: 200

```json
{
  "id": 50,
  "image": "red_cabbage.webp",
  "name": "Red Cabbage"
}
```

### DELETE `/api/ingredients/{id}`
- Deletes `ingredient` with id `{id}`
  - Response: 204 `No Content` - if success
  - Response: 404 `Not Found`
---

# Kitchenwares
`Kitchenwares` returned will have the form:

```
Kitchenware {
  id: int
  image: string | null
  name: string
}
```

When creating or updating a `kitchenware` it must a have the form:

```
Kitchenware {
  image: string | null
  name: string - [Unique, max: 50 chars]
}
```

### GET `/api/kitchenwares`
- Retrieves All `kitchenwares`
  - Response: 200 `Ok`
### GET `/api/kitchenwares/{id}`
- Retrieves `kitchenware` with id `{id}`
  - Response: 200 `Ok`
  - Response: 404 `Not Found`

> GET '/api/kitchenwares/1'
>
> returns: 200

```json
{
  "id": 1,
  "image": "pan.png",
  "name": "Pan"
}
```

### POST `/api/kitchenwares`
- Creates a new `kitchenware`
  - Response: 201 `Created`
  - Response: 204 `No Content` - if validations fail

> POST '/api/kitchenwares'

```json
{
  "kitchenware": {
    "image": null,
    "name": "Visk"
  }
}
```

> returns: 201

```json
{
  "id": 15,
  "image": null,
  "name": "Visk"
}
```

### PUT `/api/kitchenwares/{id}`
- Updates `kitchenware` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PUT '/api/kitchenwares/15'

```json
{
  "kitchenware": {
    "image": null,
    "name": "Whisk"
  }
}
```

> returns: 200

```json
{
  "id": 15,
  "image": null,
  "name": "Whisk"
}
```

### PATCH `/api/kitchenwares/{id}`
- Updates `kitchenware` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PATCH '/api/kitchenwares/15'

```json
{
  "kitchenware": {
    "image": "whisk.webp"
  }
}
```

> returns: 200

```json
{
  "id": 15,
  "image": "whisk.webp",
  "name": "Whisk"
}
```

### DELETE `/api/kitchenwares/{id}`
- Deletes `kitchenware` with id `{id}`
  - Response: 204 `No Content` - if success
  - Response: 404 `Not Found`
---

# Measures
`Measures` returned will have the form:

```
Measure {
  id: int
  name: string
}
```

When creating or updating a `measure` it must a have the form:

```
Measure {
  name: string - [Unique, max: 30 chars]
}
```

### GET `/api/measures`
- Retrieves All `measures`
  - Response: 200 `Ok`
### GET `/api/measures/{id}`
- Retrieves `measure` with id `{id}`
  - Response: 200 `Ok`
  - Response: 404 `Not Found`

> GET '/api/measures/1'
>
> returns: 200

```json
{
  "id": 1,
  "name": "Cup"
}
```

### POST `/api/measures`
- Creates a new `measure`
  - Response: 201 `Created`
  - Response: 204 `No Content` - if validations fail

> POST '/api/measures'

```json
{
  "measure": {
    "name": "Tablespoon"
  }
}
```

> returns: 201

```json
{
  "id": 10,
  "name": "Tablespoon"
}
```

### PUT `/api/measures/{id}`
- Updates `measure` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PUT '/api/measures/10'

```json
{
  "measure": {
    "name": "Super Tablespoon"
  }
}
```

> returns: 200

```json
{
  "id": 10,
  "name": "Super Tablespoon"
}
```

### PATCH `/api/measures/{id}`
- Updates `measure` with id `{id}`
  - Response: 200 `Ok`
  - Response: 204 `No Content` - if validations fail

> PATCH '/api/measures/10'

```json
{
  "measure": {
    "name": "Tablespoon"
  }
}
```

> returns: 200

```json
{
  "id": 10,
  "name": "Tablespoon"
}
```

### DELETE `/api/measures/{id}`
- Deletes `measure` with id `{id}`
  - Response: 204 `No Content` - if success
  - Response: 404 `Not Found`
---
