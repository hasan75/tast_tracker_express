# Task Tracker API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

A lightweight REST API for task management with in-memory storage.

## Table of Contents
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- ✅ CRUD operations for tasks
- 🔄 Toggle task completion status
- 🆔 Automatic UUID generation
- 🔒 CORS enabled
- 🚀 Zero-database architecture

## API Endpoints

### `GET /tasks`
**Description**: Retrieve all tasks  
**Response**:
```json
[
  {
    "id": "uuid-string",
    "title": "Task name",
    "completed": false
  }
]
```

### `POST /tasks`
**Description**: Create new task  
**Request Body**:
```json
{
  "title": "New task"
}
```

### `PUT /tasks/:id/complete`
**Description**: Toggle completion status  
**Response**: Updated task

### `DELETE /tasks/:id`
**Description**: Remove a task  
**Response**: 204 No Content

## Getting Started

### Prerequisites
- Node.js ≥18.x
- npm ≥9.x

### Installation
1. Clone repository:
   ```bash
   git clone https://github.com/hasan75/tast_tracker_express.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment:
   ```bash
   echo "PORT=5000" > .env
   ```

## Usage

**Development mode** (with hot-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

Verify it's running:
```bash
curl http://localhost:5000/tasks
```