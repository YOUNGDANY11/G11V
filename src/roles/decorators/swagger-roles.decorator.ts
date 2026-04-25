import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiBody } from '@nestjs/swagger';

export function ApiGetAllRoles() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener todos los roles',
      description: 'Retorna una lista de todos los roles registrados'
    }),
    ApiResponse({
      status: 200,
      description: 'Lista de roles obtenida exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          roles: [
            {
              id_role: 1,
              name: 'Administrador',
              code: 'ADMIN'
            },
            {
              id_role: 2,
              name: 'Usuario',
              code: 'USER'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No hay roles registrados',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No hay roles registrados'
        }
      }
    })
  );
}

export function ApiGetRoleById() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener rol por ID',
      description: 'Obtiene los datos de un rol específico utilizando su ID'
    }),
    ApiParam({ name: 'id', description: 'ID del rol', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Rol obtenido exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          role: {
            id_role: 1,
            name: 'Administrador',
            code: 'ADMIN'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Rol no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este rol'
        }
      }
    })
  );
}

export function ApiGetRoleByCode() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener rol por código',
      description: 'Busca un rol por su código único'
    }),
    ApiQuery({ name: 'code', description: 'Código del rol', example: 'ADMIN' }),
    ApiResponse({
      status: 200,
      description: 'Rol encontrado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          role: {
            id_role: 1,
            name: 'Administrador',
            code: 'ADMIN'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Rol no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este rol'
        }
      }
    })
  );
}

export function ApiGetRoleByName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener roles por nombre',
      description: 'Busca roles por su nombre (búsqueda parcial)'
    }),
    ApiQuery({ name: 'name', description: 'Nombre del rol', example: 'Administrador' }),
    ApiResponse({
      status: 200,
      description: 'Roles encontrados exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          role: [
            {
              id_role: 1,
              name: 'Administrador',
              code: 'ADMIN'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Rol no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este rol'
        }
      }
    })
  );
}

export function ApiCreateRole() {
  return applyDecorators(
    ApiOperation({
      summary: 'Crear un nuevo rol',
      description: 'Crea un nuevo rol con un código único'
    }),
    ApiBody({
      description: 'Datos requeridos para crear un nuevo rol',
      examples: {
        example1: {
          value: {
            name: 'Administrador',
            code: 'ADMIN'
          }
        }
      }
    }),
    ApiResponse({
      status: 201,
      description: 'Rol creado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Rol creado con exito',
          role: {
            id_role: 1,
            name: 'Administrador',
            code: 'ADMIN'
          }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error en la creación - Código duplicado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'Ya existe un rol con este codigo'
        }
      }
    })
  );
}

export function ApiUpdateRole() {
  return applyDecorators(
    ApiOperation({
      summary: 'Actualizar rol',
      description: 'Actualiza los datos de un rol existente'
    }),
    ApiParam({ name: 'id', description: 'ID del rol a actualizar', example: 1 }),
    ApiBody({
      description: 'Datos a actualizar del rol',
      examples: {
        example1: {
          value: {
            name: 'Administrador General',
            code: 'ADMIN'
          }
        }
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Rol actualizado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Rol actualizado con exito',
          role: {
            id_role: 1,
            name: 'Administrador General',
            code: 'ADMIN'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Rol no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este rol'
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error - Código duplicado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'Ya existe un rol con este codigo'
        }
      }
    })
  );
}

export function ApiDeleteRole() {
  return applyDecorators(
    ApiOperation({
      summary: 'Eliminar rol',
      description: 'Elimina un rol del sistema'
    }),
    ApiParam({ name: 'id', description: 'ID del rol a eliminar', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Rol eliminado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Rol eliminado con exito'
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Rol no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este rol'
        }
      }
    })
  );
}
