import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiBody } from '@nestjs/swagger';

export function ApiGetAllPlayers() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener todos los deportistas',
      description: 'Retorna una lista de todos los deportistas registrados con sus datos completos'
    }),
    ApiResponse({
      status: 200,
      description: 'Lista de deportistas obtenida exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          players: [
            {
              id_player: 1,
              id_user: 1,
              birth_date: '2005-05-15T00:00:00.000Z',
              nationality: 'Colombiana',
              foot: 'Derecho',
              hand: 'Derecho',
              main_position: 'Delantero',
              discipline: 'Fútbol',
              status: 'Activo',
              user_name: 'Juan',
              user_lastname: 'Pérez',
              user_document: '1234567'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No hay deportistas registrados',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No hay deportistas registrados'
        }
      }
    })
  );
}

export function ApiGetPlayerById() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener deportista por ID',
      description: 'Obtiene los datos de un deportista específico utilizando su ID'
    }),
    ApiParam({ name: 'id', description: 'ID del deportista', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Deportista obtenido exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          player: {
            id_player: 1,
            id_user: 1,
            birth_date: '2005-05-15T00:00:00.000Z',
            nationality: 'Colombiana',
            foot: 'Derecho',
            hand: 'Derecho',
            main_position: 'Delantero',
            discipline: 'Fútbol',
            status: 'Activo',
            user_name: 'Juan',
            user_lastname: 'Pérez',
            user_document: '1234567'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Deportista no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este deportista'
        }
      }
    })
  );
}

export function ApiGetPlayerByName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener deportistas por nombre de usuario',
      description: 'Busca deportistas por el nombre del usuario asociado'
    }),
    ApiQuery({ name: 'name', description: 'Nombre del usuario', example: 'Juan' }),
    ApiResponse({
      status: 200,
      description: 'Deportistas encontrados exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          player: [
            {
              id_player: 1,
              id_user: 1,
              birth_date: '2005-05-15T00:00:00.000Z',
              nationality: 'Colombiana',
              foot: 'Derecho',
              hand: 'Derecho',
              main_position: 'Delantero',
              discipline: 'Fútbol',
              status: 'Activo',
              user_name: 'Juan',
              user_lastname: 'Pérez',
              user_document: '1234567'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe deportista con este nombre',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este deportista'
        }
      }
    })
  );
}

export function ApiGetPlayerByLastName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener deportistas por apellido de usuario',
      description: 'Busca deportistas por el apellido del usuario asociado'
    }),
    ApiQuery({ name: 'lastname', description: 'Apellido del usuario', example: 'Pérez' }),
    ApiResponse({
      status: 200,
      description: 'Deportistas encontrados exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          player: [
            {
              id_player: 1,
              id_user: 1,
              birth_date: '2005-05-15T00:00:00.000Z',
              nationality: 'Colombiana',
              foot: 'Derecho',
              hand: 'Derecho',
              main_position: 'Delantero',
              discipline: 'Fútbol',
              status: 'Activo',
              user_name: 'Juan',
              user_lastname: 'Pérez',
              user_document: '1234567'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe deportista con este apellido',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este deportista'
        }
      }
    })
  );
}

export function ApiCreatePlayer() {
  return applyDecorators(
    ApiOperation({
      summary: 'Crear un nuevo deportista',
      description: 'Crea un nuevo registro de deportista asociado a un usuario existente'
    }),
    ApiBody({
      description: 'Datos requeridos para crear un nuevo deportista',
      examples: {
        example1: {
          value: {
            id_user: 1,
            birth_date: '2005-05-15',
            nationality: 'Colombiana',
            foot: 'Derecho',
            hand: 'Derecho',
            main_position: 'Delantero',
            discipline: 'Fútbol',
            status: 'Activo'
          }
        }
      }
    }),
    ApiResponse({
      status: 201,
      description: 'Deportista creado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Deportista creado con exito',
          player: {
            id_player: 1,
            id_user: 1,
            birth_date: '2005-05-15T00:00:00.000Z',
            nationality: 'Colombiana',
            foot: 'Derecho',
            hand: 'Derecho',
            main_position: 'Delantero',
            discipline: 'Fútbol',
            status: 'Activo',
            user_name: 'Juan',
            user_lastname: 'Pérez',
            user_document: '1234567'
          }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error en la creación - Usuario no existe o deportista ya existe',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'Este deportista ya esta registrado'
        }
      }
    })
  );
}

export function ApiUpdatePlayer() {
  return applyDecorators(
    ApiOperation({
      summary: 'Actualizar deportista',
      description: 'Actualiza los datos de un deportista existente. No se puede cambiar el ID del usuario.'
    }),
    ApiParam({ name: 'id', description: 'ID del deportista a actualizar', example: 1 }),
    ApiBody({
      description: 'Datos a actualizar del deportista',
      examples: {
        example1: {
          value: {
            birth_date: '2005-05-15',
            nationality: 'Colombiana',
            foot: 'Izquierdo',
            hand: 'Derecho',
            main_position: 'Mediocampista',
            discipline: 'Fútbol',
            status: 'Activo'
          }
        }
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Deportista actualizado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Deportista actualizado con exito',
          player: {
            id_player: 1,
            id_user: 1,
            birth_date: '2005-05-15T00:00:00.000Z',
            nationality: 'Colombiana',
            foot: 'Izquierdo',
            hand: 'Derecho',
            main_position: 'Mediocampista',
            discipline: 'Fútbol',
            status: 'Activo',
            user_name: 'Juan',
            user_lastname: 'Pérez',
            user_document: '1234567'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Deportista no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este deportista'
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error - Intento de cambiar ID de usuario',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No se puede cambiar el id del usuario'
        }
      }
    })
  );
}

export function ApiDeletePlayer() {
  return applyDecorators(
    ApiOperation({
      summary: 'Eliminar deportista',
      description: 'Elimina un deportista del sistema'
    }),
    ApiParam({ name: 'id', description: 'ID del deportista a eliminar', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Deportista eliminado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Deportista eliminado con exito'
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Deportista no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este deportista'
        }
      }
    })
  );
}
