# Documentación API G11V - Gestión de Clubes

## Descripción General
API RESTful basada en NestJS para la gestión integral de clubes de fútbol de G11V asociado a VERA FUTBOL CLUB. Permite gestionar roles, usuarios, información personal y datos de jugadores.

## Información del Servidor
- **URL Base Local:** `http://localhost:3000/api`
- **URL Documentación Swagger:** `http://localhost:3000/api-docs`
- **Versión API:** 1.0.0
- **Prefijo de rutas:** `/api`

## Configuración Swagger
- Documentación interactiva disponible en `/api-docs`
- Soporte para pruebas de endpoints directamente desde la interfaz
- Esquemas de respuesta completos con ejemplos

---

## Módulos de la API

### 1. **Roles** - Gestión de roles del sistema

#### Endpoints

| Método | Ruta | Descripción | Parámetros |
|--------|------|-------------|-----------|
| GET | `/api/roles` | Obtener todos los roles | - |
| GET | `/api/roles/id/:id` | Obtener un rol por ID | `id` (number) |
| GET | `/api/roles/code` | Buscar rol por código | `code` (query string) |
| GET | `/api/roles/name` | Buscar rol por nombre | `name` (query string) |
| POST | `/api/roles` | Crear nuevo rol | `CreateRoleDto` |
| PUT | `/api/roles/id/:id` | Actualizar rol | `id`, `UpdateRoleDto` |
| DELETE | `/api/roles/id/:id` | Eliminar rol | `id` (number) |

#### DTOs

**CreateRoleDto**
```typescript
{
  name: string,        // Requerido, máx 50 caracteres
  code: string         // Requerido, máx 10 caracteres, único
}
```

**UpdateRoleDto**
```typescript
{
  name?: string,       // Opcional
  code?: string        // Opcional
}
```

**ResponseRoleDto**
```typescript
{
  id_role: number,
  name: string,
  code: string
}
```

#### Ejemplos de Respuesta

**Crear Rol (POST /api/roles)**
```json
Request Body:
{
  "name": "Administrador",
  "code": "ADMIN"
}

Response (201):
{
  "id_role": 1,
  "name": "Administrador",
  "code": "ADMIN"
}
```

---

### 2. **Users** - Gestión de usuarios del sistema

#### Endpoints

| Método | Ruta | Descripción | Parámetros |
|--------|------|-------------|-----------|
| GET | `/api/users` | Obtener todos los usuarios | - |
| GET | `/api/users/id/:id` | Obtener usuario por ID | `id` (number) |
| GET | `/api/users/name` | Buscar usuario por nombre | `name` (query string) |
| GET | `/api/users/lastname` | Buscar usuario por apellido | `lastname` (query string) |
| GET | `/api/users/email` | Buscar usuario por email | `email` (query string) |
| GET | `/api/users/document` | Buscar usuario por documento | `document` (query string) |
| POST | `/api/users` | Crear nuevo usuario | `CreateUserDto` |
| PUT | `/api/users/id/:id` | Actualizar usuario | `id`, `UpdateUserDto` |
| DELETE | `/api/users/id/:id` | Eliminar usuario | `id` (number) |

#### DTOs

**CreateUserDto**
```typescript
{
  id_role: number,           // Requerido, ID del rol
  name: string,              // Requerido, 2-100 caracteres
  lastname: string,          // Requerido, 2-100 caracteres
  email: string,             // Requerido, 10-100 caracteres
  password: string,          // Requerido, mínimo 6 caracteres
  document: string           // Requerido, 7-10 caracteres
}
```

**UpdateUserDto**
```typescript
{
  id_role?: number,
  name?: string,
  lastname?: string,
  email?: string,
  password?: string,
  document?: string
}
```

**ResponseUserDto**
```typescript
{
  id_user: number,
  id_role: number,
  role_name: string,
  role_code: string,
  name: string,
  lastname: string,
  email: string,
  document: string,
  created_at: Date,
  updated_at: Date
}
```

#### Ejemplos de Respuesta

**Crear Usuario (POST /api/users)**
```json
Request Body:
{
  "id_role": 1,
  "name": "Juan",
  "lastname": "Pérez",
  "email": "juan@example.com",
  "password": "Password123",
  "document": "1234567"
}

Response (201):
{
  "id_user": 1,
  "id_role": 1,
  "role_name": "Administrador",
  "role_code": "ADMIN",
  "name": "Juan",
  "lastname": "Pérez",
  "email": "juan@example.com",
  "document": "1234567",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

---

### 3. **Personal Informations** - Gestión de información personal

#### Endpoints

| Método | Ruta | Descripción | Parámetros |
|--------|------|-------------|-----------|
| GET | `/api/personal-informations` | Obtener toda la información personal | - |
| GET | `/api/personal-informations/id/:id` | Obtener por ID | `id` (number) |
| GET | `/api/personal-informations/user/name` | Buscar por nombre de usuario | `name` (query string) |
| GET | `/api/personal-informations/user/lastname` | Buscar por apellido de usuario | `lastname` (query string) |
| POST | `/api/personal-informations` | Crear información personal | `CreatePersonalInformationDto` |
| PUT | `/api/personal-informations/id/:id` | Actualizar información | `id`, `UpdatePersonalInformationDto` |
| DELETE | `/api/personal-informations/id/:id` | Eliminar información | `id` (number) |

#### DTOs

**CreatePersonalInformationDto**
```typescript
{
  id_user: number,           // Requerido
  country: string,           // Requerido, 2-100 caracteres
  deparment: string,         // Requerido, 2-100 caracteres
  city: string,              // Requerido, 2-100 caracteres
  address: string,           // Requerido, 2-100 caracteres
  brothers: number,          // Requerido
  father: boolean,           // Requerido
  mother: boolean            // Requerido
}
```

**UpdatePersonalInformationDto**
```typescript
{
  id_user?: number,
  country?: string,
  deparment?: string,
  city?: string,
  address?: string,
  brothers?: number,
  father?: boolean,
  mother?: boolean
}
```

**ResponsePersonalInformationDto**
```typescript
{
  id_per_inf: number,
  id_user: number,
  user_name: string,
  user_lastname: string,
  country: string,
  deparment: string,
  city: string,
  address: string,
  brothers: number,
  father: boolean,
  mother: boolean,
  created_at: Date,
  updated_at: Date
}
```

#### Ejemplos de Respuesta

**Crear Información Personal (POST /api/personal-informations)**
```json
Request Body:
{
  "id_user": 1,
  "country": "Colombia",
  "deparment": "Bogotá",
  "city": "Bogotá D.C.",
  "address": "Calle 1 #2-3",
  "brothers": 2,
  "father": true,
  "mother": true
}

Response (201):
{
  "id_per_inf": 1,
  "id_user": 1,
  "user_name": "Juan",
  "user_lastname": "Pérez",
  "country": "Colombia",
  "deparment": "Bogotá",
  "city": "Bogotá D.C.",
  "address": "Calle 1 #2-3",
  "brothers": 2,
  "father": true,
  "mother": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

---

### 4. **Players** - Gestión de jugadores de fútbol

#### Endpoints

| Método | Ruta | Descripción | Parámetros |
|--------|------|-------------|-----------|
| GET | `/api/players` | Obtener todos los jugadores | - |
| GET | `/api/players/id/:id` | Obtener jugador por ID | `id` (number) |
| GET | `/api/players/user/name` | Buscar jugadores por nombre | `name` (query string) |
| GET | `/api/players/user/lastname` | Buscar jugadores por apellido | `lastname` (query string) |
| POST | `/api/players` | Crear nuevo jugador | `CreatePlayerDto` |
| PUT | `/api/players/id/:id` | Actualizar jugador | `id`, `UpdatePlayerDto` |
| DELETE | `/api/players/id/:id` | Eliminar jugador | `id` (number) |

#### DTOs

**CreatePlayerDto**
```typescript
{
  id_user: number,           // Requerido
  birth_date: Date,          // Requerido, formato ISO 8601
  nationality: string,       // Requerido
  foot: string,              // Requerido, máx 10 caracteres (Derecho/Izquierdo)
  hand: string,              // Requerido, máx 10 caracteres (Derecho/Izquierdo)
  main_position: string,     // Requerido, máx 50 caracteres
  discipline: string,        // Requerido, máx 100 caracteres
  status: string             // Requerido, máx 10 caracteres (Activo/Inactivo)
}
```

**UpdatePlayerDto**
```typescript
{
  id_user?: number,
  birth_date?: Date,
  nationality?: string,
  foot?: string,
  hand?: string,
  main_position?: string,
  discipline?: string,
  status?: string
}
```

**ResponsePlayerDto**
```typescript
{
  id_player: number,
  id_user: number,
  birth_date: Date,
  nationality: string,
  foot: string,
  hand: string,
  main_position: string,
  discipline: string,
  status: string,
  user_name: string,
  user_lastname: string,
  user_document: string
}
```

#### Ejemplos de Respuesta

**Crear Jugador (POST /api/players)**
```json
Request Body:
{
  "id_user": 1,
  "birth_date": "2005-05-15T00:00:00Z",
  "nationality": "Colombiana",
  "foot": "Derecho",
  "hand": "Derecho",
  "main_position": "Delantero",
  "discipline": "Fútbol",
  "status": "Activo"
}

Response (201):
{
  "id_player": 1,
  "id_user": 1,
  "birth_date": "2005-05-15T00:00:00Z",
  "nationality": "Colombiana",
  "foot": "Derecho",
  "hand": "Derecho",
  "main_position": "Delantero",
  "discipline": "Fútbol",
  "status": "Activo",
  "user_name": "Juan",
  "user_lastname": "Pérez",
  "user_document": "1234567"
}
```

---

## Códigos de Respuesta HTTP

| Código | Descripción |
|--------|-------------|
| 200 | OK - Solicitud exitosa |
| 201 | Created - Recurso creado exitosamente |
| 400 | Bad Request - Datos inválidos |
| 404 | Not Found - Recurso no encontrado |
| 500 | Internal Server Error - Error del servidor |

## Validaciones Comunes

### Errores de Validación (400)
```json
{
  "statusCode": 400,
  "message": [
    "El campo es requerido",
    "El campo debe cumplir con el formato especificado"
  ],
  "error": "Bad Request"
}
```

---

## Notas Importantes

1. **Contraseñas:** Las contraseñas se almacenan encriptadas. No se retornan en las respuestas.
2. **Documentos:** Deben ser únicos en el sistema.
3. **Correos:** Deben ser únicos en el sistema y tener formato válido.
4. **Fechas:** Se utilizan formatos ISO 8601 (YYYY-MM-DDTHH:mm:ssZ)
5. **Validación Global:** Se aplica ValidationPipe con whitelist y forbidNonWhitelisted para prevenir inyección de datos.

---

## Pruebas de la API

Puedes probar todos los endpoints de manera interactiva en:
```
http://localhost:3000/api-docs
```

La interfaz de Swagger permite:
- Ver documentación completa de cada endpoint
- Probar endpoints directamente
- Ver ejemplos de respuesta
- Visualizar esquemas de DTOs

---

## Estructura del Proyecto

```
src/
├── main.ts                          # Configuración principal y Swagger
├── app.module.ts                    # Módulo raíz
├── roles/
│   ├── roles.controller.ts
│   ├── roles.service.ts
│   ├── roles.module.ts
│   ├── entities/
│   │   └── role.entity.ts
│   └── dto/
│       ├── index.ts
│       ├── create-role.dto.ts
│       ├── update-role.dto.ts
│       └── response/
│           └── response-role.dto.ts
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.module.ts
│   ├── entities/
│   │   └── user.entity.ts
│   └── dto/
│       ├── index.ts
│       ├── create-user.dto.ts
│       ├── update-user.dto.ts
│       └── response/
│           └── response-user.dto.ts
├── personal_informations/
│   ├── personal_informations.controller.ts
│   ├── personal_informations.service.ts
│   ├── personal_informations.module.ts
│   ├── entities/
│   │   └── personal_information.entity.ts
│   └── dto/
│       ├── index.ts
│       ├── create-personal_information.dto.ts
│       ├── update-personal_information.dto.ts
│       └── response/
│           └── response-personal_information.dto.ts
└── players/
    ├── players.controller.ts
    ├── players.service.ts
    ├── players.module.ts
    ├── entities/
    │   └── player.entity.ts
    └── dto/
        ├── create-player.dto.ts
        ├── update-player.dto.ts
        └── response/
            └── response-player.dto.ts
```

---

## Autores y Contacto

- **Proyecto:** G11V - Gestor de Clubes
- **Asociado:** VERA FUTBOL CLUB
- **Contacto:** support@g11v.com
- **Versión:** 1.0.0
- **Licencia:** MIT
