# Stones API

A RESTful Express.js API for managing stones with full CRUD operations.

## Features
- **GET /** — API welcome message with version info
- **GET /stones** — List all stones  
- **GET /stones/:id** — Get a specific stone by ID
- **POST /stones** — Add a new stone (expects JSON body with `name`, `color`, optional: `type`, `weight`, `origin`)  
- **PATCH /stones/:id** — Update an existing stone
- **DELETE /stones/:id** — Delete a stone by ID
- Input validation and error handling
- Proper HTTP status codes (200, 201, 400, 404, 500)
- Consistent JSON response format

## Tech Stack
- Node.js, Express 5, uuid
- nodemon (for development)

## Getting Started
### Prerequisites
- Node.js (v14 or higher) and npm installed

### Installation
```bash
git clone https://github.com/defnotkai/stones-api.git
cd stones-api
npm install
```

### Running the Server
```bash
npm start
```
The server will start on `http://localhost:5000`

## API Endpoints

### 1. Get API Info
```bash
GET /
```
**Response:**
```json
{
  "message": "Welcome to Stones API",
  "version": "1.0.0"
}
```

### 2. List All Stones
```bash
GET /stones
```
**Response:** Array of stone objects

### 3. Get Stone by ID
```bash
GET /stones/:id
```
**Response:** Stone object or 404 error

### 4. Create New Stone
```bash
POST /stones
Content-Type: application/json

{
  "name": "Ruby",
  "color": "Red",
  "type": "Precious",
  "weight": 5,
  "origin": "Myanmar"
}
```
**Response (201):**
```json
{
  "message": "Stone with the name Ruby added to the database!",
  "stone": {
    "name": "Ruby",
    "color": "Red",
    "type": "Precious",
    "weight": 5,
    "origin": "Myanmar",
    "id": "uuid-here"
  }
}
```

### 5. Update Stone
```bash
PATCH /stones/:id
Content-Type: application/json

{
  "weight": 6,
  "origin": "Thailand"
}
```
**Response:** Updated stone object or 404 error

### 6. Delete Stone
```bash
DELETE /stones/:id
```
**Response:** Success message or 404 error

## Error Handling
The API returns appropriate HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Internal Server Error

All error responses follow this format:
```json
{
  "error": "Error message here"
}
```

## Improvements Made
- ✅ Fixed duplicate UUID generation bug
- ✅ Added input validation for required fields
- ✅ Added proper error handling and 404 responses
- ✅ Fixed strict equality operators
- ✅ Fixed typo in PATCH response ("User" → "Stone")
- ✅ Consistent JSON response format across all endpoints
- ✅ Proper HTTP status codes
- ✅ Removed deprecated body-parser (using Express 5 built-in JSON parser)
- ✅ Added global error handling middleware
- ✅ Added .gitignore file
