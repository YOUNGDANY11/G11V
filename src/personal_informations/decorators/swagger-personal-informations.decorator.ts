import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiBody } from '@nestjs/swagger';

export function ApiGetAllPersonalInformations() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener toda la información personal registrada',
      description: 'Retorna una lista de toda la información personal registrada con sus datos completos'
    }),
    ApiResponse({
      status: 200,
      description: 'Lista de información personal obtenida exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          personal_information: [
            {
              id_per_inf: 1,
              id_user: 1,
              user_name: 'Juan',
              user_lastname: 'Pérez',
              country: 'Colombia',
              deparment: 'Bogotá',
              city: 'Bogotá D.C.',
              address: 'Calle 1 #2-3',
              brothers: 2,
              father: true,
              mother: true,
              created_at: '2024-01-15T10:30:00Z',
              updated_at: '2024-01-20T15:45:00Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No hay información personal registrada',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No hay informacion personal registrada'
        }
      }
    })
  );
}

export function ApiGetPersonalInformationById() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener información personal por ID',
      description: 'Obtiene los datos de una información personal específica utilizando su ID'
    }),
    ApiParam({ name: 'id', description: 'ID de la información personal', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Información personal obtenida exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          personal_information: {
            id_per_inf: 1,
            id_user: 1,
            user_name: 'Juan',
            user_lastname: 'Pérez',
            country: 'Colombia',
            deparment: 'Bogotá',
            city: 'Bogotá D.C.',
            address: 'Calle 1 #2-3',
            brothers: 2,
            father: true,
            mother: true,
            created_at: '2024-01-15T10:30:00Z',
            updated_at: '2024-01-20T15:45:00Z'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Información personal no encontrada',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe esta informacion personal'
        }
      }
    })
  );
}

export function ApiGetPersonalInformationByUserName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener información personal por nombre de usuario',
      description: 'Busca la información personal por el nombre del usuario asociado'
    }),
    ApiQuery({ name: 'name', description: 'Nombre del usuario', example: 'Juan' }),
    ApiResponse({
      status: 200,
      description: 'Información personal encontrada exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          personal_information: [
            {
              id_per_inf: 1,
              id_user: 1,
              user_name: 'Juan',
              user_lastname: 'Pérez',
              country: 'Colombia',
              deparment: 'Bogotá',
              city: 'Bogotá D.C.',
              address: 'Calle 1 #2-3',
              brothers: 2,
              father: true,
              mother: true,
              created_at: '2024-01-15T10:30:00Z',
              updated_at: '2024-01-20T15:45:00Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro de información personal para este usuario',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe registro de este usuario con informacion personal o usuario inexistente'
        }
      }
    })
  );
}

export function ApiGetPersonalInformationByUserLastName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener información personal por apellido de usuario',
      description: 'Busca la información personal por el apellido del usuario asociado'
    }),
    ApiQuery({ name: 'lastname', description: 'Apellido del usuario', example: 'Pérez' }),
    ApiResponse({
      status: 200,
      description: 'Información personal encontrada exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          personal_information: [
            {
              id_per_inf: 1,
              id_user: 1,
              user_name: 'Juan',
              user_lastname: 'Pérez',
              country: 'Colombia',
              deparment: 'Bogotá',
              city: 'Bogotá D.C.',
              address: 'Calle 1 #2-3',
              brothers: 2,
              father: true,
              mother: true,
              created_at: '2024-01-15T10:30:00Z',
              updated_at: '2024-01-20T15:45:00Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro de información personal para este usuario',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe registro de este usuario con informacion personal o usuario inexistente'
        }
      }
    })
  );
}

export function ApiCreatePersonalInformation() {
  return applyDecorators(
    ApiOperation({
      summary: 'Crear nueva información personal',
      description: 'Crea un nuevo registro de información personal asociado a un usuario'
    }),
    ApiBody({
      description: 'Datos requeridos para crear información personal',
      examples: {
        example1: {
          value: {
            id_user: 1,
            country: 'Colombia',
            deparment: 'Bogotá',
            city: 'Bogotá D.C.',
            address: 'Calle 1 #2-3',
            brothers: 2,
            father: true,
            mother: true
          }
        }
      }
    }),
    ApiResponse({
      status: 201,
      description: 'Información personal creada exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Informacion personal creada con exito',
          personal_information: {
            id_per_inf: 1,
            id_user: 1,
            user_name: 'Juan',
            user_lastname: 'Pérez',
            country: 'Colombia',
            deparment: 'Bogotá',
            city: 'Bogotá D.C.',
            address: 'Calle 1 #2-3',
            brothers: 2,
            father: true,
            mother: true,
            created_at: '2024-01-15T10:30:00Z',
            updated_at: '2024-01-15T10:30:00Z'
          }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error en la creación - Usuario ya tiene información personal',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'Ya existe informacion personal creada por parte de este usuario'
        }
      }
    })
  );
}

export function ApiUpdatePersonalInformation() {
  return applyDecorators(
    ApiOperation({
      summary: 'Actualizar información personal',
      description: 'Actualiza los datos de una información personal existente. No se puede cambiar el ID del usuario.'
    }),
    ApiParam({ name: 'id', description: 'ID de la información personal a actualizar', example: 1 }),
    ApiBody({
      description: 'Datos a actualizar de la información personal',
      examples: {
        example1: {
          value: {
            country: 'Colombia',
            deparment: 'Medellín',
            city: 'Medellín',
            address: 'Carrera 1 #2-3',
            brothers: 3,
            father: true,
            mother: true
          }
        }
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Información personal actualizada exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Informacion personal actualizada con exito',
          personal_information: {
            id_per_inf: 1,
            id_user: 1,
            user_name: 'Juan',
            user_lastname: 'Pérez',
            country: 'Colombia',
            deparment: 'Medellín',
            city: 'Medellín',
            address: 'Carrera 1 #2-3',
            brothers: 3,
            father: true,
            mother: true,
            created_at: '2024-01-15T10:30:00Z',
            updated_at: '2024-01-20T15:45:00Z'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Información personal no encontrada',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este registro de informacion personal'
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error - Intento de cambiar ID de usuario',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No se puede cambiar el id de usuario'
        }
      }
    })
  );
}

export function ApiDeletePersonalInformation() {
  return applyDecorators(
    ApiOperation({
      summary: 'Eliminar información personal',
      description: 'Elimina un registro de información personal del sistema'
    }),
    ApiParam({ name: 'id', description: 'ID de la información personal a eliminar', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Información personal eliminada exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Informacion personal eliminada con exito'
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Información personal no encontrada',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este registro de informacion personal'
        }
      }
    })
  );
}
