# API Documentation

## Endpoints

### Server Check
- [GET] /app/
  - Description: Checks if the server is running.

### Authentication 👨🏼‍💻
- [POST] /user/login
  - Description: Logs in the user.
- [POST] /user/register
  - Description: Registers a new user.
- [PATCH] /user/profile/update
  - Description: Updates user profile information.

### CRUD Products
- [GET] /api/product
  - Description: Retrieves all products.
- [POST] /api/product
  - Description: Creates a new product.
- [PATCH] /api/product/update/{id}
  - Description: Updates a product by ID.
- [DELETE] /api/product/delete/{id}
  - Description: Deletes a product by ID.

### CRUD Categories
- [GET] /url/category
  - Description: Retrieves all categories.
- [POST] /url/category
  - Description: Creates a new category.
- [PATCH] /url/category/update/{id}
  - Description: Updates a category by ID.
- [DELETE] /url/category/delete/{id}
  - Description: Deletes a category by ID.

## Authentication
For endpoints that require authentication, include an `Authorization` header with a valid JWT token.

## Login/Signup

For login and signup endpoints, the request body should include user credentials.
![Screenshot 2024-04-16 00 05 45](https://github.com/anshukumari181405/arba/assets/146926520/c0659af8-a9c6-4d62-bf74-07d20cc62c51)
![Screenshot 2024-04-16 00 05 55](https://github.com/anshukumari181405/arba/assets/146926520/e0f37178-6281-4471-9367-6aee48b68cde)




