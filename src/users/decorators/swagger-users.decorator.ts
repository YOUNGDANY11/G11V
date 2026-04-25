import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiBody } from '@nestjs/swagger';

export function ApiGetAllUsers() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener todos los usuarios',
      description: 'Retorna una lista de todos los usuarios registrados con sus datos completos'
    }),
    ApiResponse({
      status: 200,
      description: 'Lista de usuarios obtenida exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          users: [
            {
              id_user: 1,
              id_role: 1,
              role_name: 'Administrador',
              role_code: 'ADMIN',
              name: 'Juan',
              lastname: 'Pérez',
              email: 'juan@example.com',
              document: '1234567',
              created_at: '2024-01-15T10:30:00Z',
              updated_at: '2024-01-20T15:45:00Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No hay usuarios registrados',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No hay usuarios registrados'
        }
      }
    })
  );
}

export function ApiGetUserById() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener usuario por ID',
      description: 'Obtiene los datos de un usuario específico utilizando su ID'
    }),
    ApiParam({ name: 'id', description: 'ID del usuario', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Usuario obtenido exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          user: {
            id_user: 1,
            id_role: 1,
            role_name: 'Administrador',
            role_code: 'ADMIN',
            name: 'Juan',
            lastname: 'Pérez',
            email: 'juan@example.com',
            document: '1234567',
            created_at: '2024-01-15T10:30:00Z',
            updated_at: '2024-01-20T15:45:00Z'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Usuario no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este usuario'
        }
      }
    })
  );
}

export function ApiGetUserByName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener usuarios por nombre',
      description: 'Busca usuarios por su nombre (búsqueda parcial)'
    }),
    ApiQuery({ name: 'name', description: 'Nombre del usuario', example: 'Juan' }),
    ApiResponse({
      status: 200,
      description: 'Usuarios encontrados exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          user: [
            {
              id_user: 1,
              id_role: 1,
              role_name: 'Administrador',
              role_code: 'ADMIN',
              name: 'Juan',
              lastname: 'Pérez',
              email: 'juan@example.com',
              document: '1234567',
              created_at: '2024-01-15T10:30:00Z',
              updated_at: '2024-01-20T15:45:00Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe usuario con este nombre',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe un usuario con este nombre'
        }
      }
    })
  );
}

export function ApiGetUserByLastName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener usuarios por apellido',
      description: 'Busca usuarios por su apellido (búsqueda parcial)'
    }),
    ApiQuery({ name: 'lastname', description: 'Apellido del usuario', example: 'Pérez' }),
    ApiResponse({
      status: 200,
      description: 'Usuarios encontrados exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          user: [
            {
              id_user: 1,
              id_role: 1,
              role_name: 'Administrador',
              role_code: 'ADMIN',
              name: 'Juan',
              lastname: 'Pérez',
              email: 'juan@example.com',
              document: '1234567',
              created_at: '2024-01-15T10:30:00Z',
              updated_at: '2024-01-20T15:45:00Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe usuario con este apellido',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe un usuario con este apellido'
        }
      }
    })
  );
}

export function ApiGetUserByEmail() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener usuarios por correo electrónico',
      description: 'Busca usuarios por su correo electrónico (búsqueda parcial)'
    }),
    ApiQuery({ name: 'email', description: 'Correo del usuario', example: 'juan@example.com' }),
    ApiResponse({
      status: 200,
      description: 'Usuarios encontrados exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          user: [
            {
              id_user: 1,
              id_role: 1,
              role_name: 'Administrador',
              role_code: 'ADMIN',
              name: 'Juan',
              lastname: 'Pérez',
              email: 'juan@example.com',
              document: '1234567',
              created_at: '2024-01-15T10:30:00Z',
              updated_at: '2024-01-20T15:45:00Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe usuario con este correo',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe un usuario con este correo'
        }
      }
    })
  );
}

export function ApiGetUserByDocument() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener usuarios por número de documento',
      description: 'Busca usuarios por su número de documento (búsqueda parcial)'
    }),
    ApiQuery({ name: 'document', description: 'Número de documento', example: '1234567' }),
    ApiResponse({
      status: 200,
      description: 'Usuarios encontrados exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          user: [
            {
              id_user: 1,
              id_role: 1,
              role_name: 'Administrador',
              role_code: 'ADMIN',
              name: 'Juan',
              lastname: 'Pérez',
              email: 'juan@example.com',
              document: '1234567',
              created_at: '2024-01-15T10:30:00Z',
              updated_at: '2024-01-20T15:45:00Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe usuario con este documento',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe un usuario con este documento'
        }
      }
    })
  );
}

export function ApiCreateUser() {
  return applyDecorators(
    ApiOperation({
      summary: 'Crear un nuevo usuario',
      description: 'Crea un nuevo usuario con los datos proporcionados. La contraseña será cifrada automáticamente.'
    }),
    ApiBody({
      description: 'Datos requeridos para crear un nuevo usuario',
      examples: {
        example1: {
          value: {
            id_role: 1,
            name: 'Juan',
            lastname: 'Pérez',
            email: 'juan@example.com',
            password: 'Password123!',
            document: '1234567'
          }
        }
      }
    }),
    ApiResponse({
      status: 201,
      description: 'Usuario creado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Usuario creado con exito',
          user: {
            id_user: 1,
            id_role: 1,
            role_name: 'Administrador',
            role_code: 'ADMIN',
            name: 'Juan',
            lastname: 'Pérez',
            email: 'juan@example.com',
            document: '1234567',
            created_at: '2024-01-15T10:30:00Z',
            updated_at: '2024-01-15T10:30:00Z'
          }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error en la creación - Correo o documento duplicado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'Este correo ya esta registrado por otro usuario'
        }
      }
    })
  );
}

export function ApiUpdateUser() {
  return applyDecorators(
    ApiOperation({
      summary: 'Actualizar usuario',
      description: 'Actualiza los datos de un usuario existente. Si proporciona una nueva contraseña, será cifrada automáticamente.'
    }),
    ApiParam({ name: 'id', description: 'ID del usuario a actualizar', example: 1 }),
    ApiBody({
      description: 'Datos a actualizar del usuario',
      examples: {
        example1: {
          value: {
            name: 'Juan',
            lastname: 'Pérez García',
            email: 'juan.perez@example.com',
            password: 'NewPassword123!',
            document: '1234567'
          }
        }
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Usuario actualizado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Usuario actualizado con exito',
          user: {
            id_user: 1,
            id_role: 1,
            role_name: 'Administrador',
            role_code: 'ADMIN',
            name: 'Juan',
            lastname: 'Pérez García',
            email: 'juan.perez@example.com',
            document: '1234567',
            created_at: '2024-01-15T10:30:00Z',
            updated_at: '2024-01-20T15:45:00Z'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Usuario no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este usuario'
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error - Correo o documento duplicado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'Correo en uso por otro usuario'
        }
      }
    })
  );
}

export function ApiDeleteUser() {
  return applyDecorators(
    ApiOperation({
      summary: 'Eliminar usuario',
      description: 'Elimina un usuario del sistema'
    }),
    ApiParam({ name: 'id', description: 'ID del usuario a eliminar', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Usuario eliminado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Usuario eliminado con exito'
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Usuario no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este usuario'
        }
      }
    })
  );
}
