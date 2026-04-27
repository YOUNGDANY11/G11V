import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiBody, getSchemaPath } from '@nestjs/swagger';

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
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'Success'
          },
          mensaje: {
            type: 'string',
            example: 'Consulta exitosa'
          },
          players: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id_player: {
                  type: 'number',
                  description: 'ID único del jugador',
                  example: 1
                },
                id_user: {
                  type: 'number',
                  description: 'ID del usuario asociado',
                  example: 1
                },
                birth_date: {
                  type: 'string',
                  format: 'date-time',
                  description: 'Fecha de nacimiento del jugador',
                  example: '2005-05-15T00:00:00.000Z'
                },
                nationality: {
                  type: 'string',
                  description: 'Nacionalidad del jugador',
                  example: 'Colombiana'
                },
                foot: {
                  type: 'string',
                  description: 'Pie hábil para jugar',
                  example: 'Derecho'
                },
                hand: {
                  type: 'string',
                  description: 'Mano hábil del jugador',
                  example: 'Derecho'
                },
                main_position: {
                  type: 'string',
                  description: 'Posición principal de juego',
                  example: 'Delantero'
                },
                discipline: {
                  type: 'string',
                  description: 'Disciplina del jugador',
                  example: 'Fútbol'
                },
                status: {
                  type: 'string',
                  description: 'Estado del jugador',
                  example: 'Activo'
                },
                user_name: {
                  type: 'string',
                  description: 'Nombre del usuario',
                  example: 'Juan'
                },
                user_lastname: {
                  type: 'string',
                  description: 'Apellido del usuario',
                  example: 'Pérez'
                },
                user_document: {
                  type: 'string',
                  description: 'Documento del usuario',
                  example: '1234567'
                }
              }
            }
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No hay deportistas registrados',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'Error'
          },
          mensaje: {
            type: 'string',
            example: 'No hay deportistas registrados'
          }
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
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'Success'
          },
          mensaje: {
            type: 'string',
            example: 'Consulta exitosa'
          },
          player: {
            type: 'object',
            properties: {
              id_player: {
                type: 'number',
                example: 1
              },
              id_user: {
                type: 'number',
                example: 1
              },
              birth_date: {
                type: 'string',
                format: 'date-time',
                example: '2005-05-15T00:00:00.000Z'
              },
              nationality: {
                type: 'string',
                example: 'Colombiana'
              },
              foot: {
                type: 'string',
                example: 'Derecho'
              },
              hand: {
                type: 'string',
                example: 'Derecho'
              },
              main_position: {
                type: 'string',
                example: 'Delantero'
              },
              discipline: {
                type: 'string',
                example: 'Fútbol'
              },
              status: {
                type: 'string',
                example: 'Activo'
              },
              user_name: {
                type: 'string',
                example: 'Juan'
              },
              user_lastname: {
                type: 'string',
                example: 'Pérez'
              },
              user_document: {
                type: 'string',
                example: '1234567'
              }
            }
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Deportista no encontrado',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'Error'
          },
          mensaje: {
            type: 'string',
            example: 'No existe este deportista'
          }
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
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'Success'
          },
          mensaje: {
            type: 'string',
            example: 'Consulta exitosa'
          },
          player: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id_player: { type: 'number', example: 1 },
                id_user: { type: 'number', example: 1 },
                birth_date: { type: 'string', format: 'date-time', example: '2005-05-15T00:00:00.000Z' },
                nationality: { type: 'string', example: 'Colombiana' },
                foot: { type: 'string', example: 'Derecho' },
                hand: { type: 'string', example: 'Derecho' },
                main_position: { type: 'string', example: 'Delantero' },
                discipline: { type: 'string', example: 'Fútbol' },
                status: { type: 'string', example: 'Activo' },
                user_name: { type: 'string', example: 'Juan' },
                user_lastname: { type: 'string', example: 'Pérez' },
                user_document: { type: 'string', example: '1234567' }
              }
            }
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe deportista con este nombre',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe este deportista' }
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
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Consulta exitosa' },
          player: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id_player: { type: 'number', example: 1 },
                id_user: { type: 'number', example: 1 },
                birth_date: { type: 'string', format: 'date-time', example: '2005-05-15T00:00:00.000Z' },
                nationality: { type: 'string', example: 'Colombiana' },
                foot: { type: 'string', example: 'Derecho' },
                hand: { type: 'string', example: 'Derecho' },
                main_position: { type: 'string', example: 'Delantero' },
                discipline: { type: 'string', example: 'Fútbol' },
                status: { type: 'string', example: 'Activo' },
                user_name: { type: 'string', example: 'Juan' },
                user_lastname: { type: 'string', example: 'Pérez' },
                user_document: { type: 'string', example: '1234567' }
              }
            }
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe deportista con este apellido',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe este deportista' }
        }
      }
    })
  );
}

export function ApiGetPlayerByDocument() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener deportistas por documento de usuario',
      description: 'Busca deportistas por el documento del usuario asociado'
    }),
    ApiQuery({ name: 'document', description: 'Documento del usuario', example: '1234567890' }),
    ApiResponse({
      status: 200,
      description: 'Deportistas encontrados exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Consulta exitosa' },
          player: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id_player: { type: 'number', example: 1 },
                id_user: { type: 'number', example: 1 },
                birth_date: { type: 'string', format: 'date-time', example: '2005-05-15T00:00:00.000Z' },
                nationality: { type: 'string', example: 'Colombiana' },
                foot: { type: 'string', example: 'Derecho' },
                hand: { type: 'string', example: 'Derecho' },
                main_position: { type: 'string', example: 'Delantero' },
                discipline: { type: 'string', example: 'Fútbol' },
                status: { type: 'string', example: 'Activo' },
                user_name: { type: 'string', example: 'Juan' },
                user_lastname: { type: 'string', example: 'Pérez' },
                user_document: { type: 'string', example: '1234567890' }
              }
            }
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe deportista con este documento',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe este deportista' }
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
      schema: {
        type: 'object',
        required: ['id_user', 'birth_date', 'nationality', 'foot', 'hand', 'main_position', 'discipline', 'status'],
        properties: {
          id_user: {
            type: 'number',
            description: 'ID del usuario jugador',
            example: 1
          },
          birth_date: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha de nacimiento del jugador',
            example: '2005-05-15'
          },
          nationality: {
            type: 'string',
            description: 'Nacionalidad del jugador',
            example: 'Colombiana'
          },
          foot: {
            type: 'string',
            description: 'Pie hábil para jugar (Derecho/Izquierdo)',
            maxLength: 10,
            example: 'Derecho'
          },
          hand: {
            type: 'string',
            description: 'Mano hábil del jugador (Derecho/Izquierdo)',
            maxLength: 10,
            example: 'Derecho'
          },
          main_position: {
            type: 'string',
            description: 'Posición principal de juego',
            example: 'Delantero'
          },
          discipline: {
            type: 'string',
            description: 'Disciplina del jugador',
            example: 'Fútbol'
          },
          status: {
            type: 'string',
            description: 'Estado del jugador',
            example: 'Activo'
          }
        }
      }
    }),
    ApiResponse({
      status: 201,
      description: 'Deportista creado exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Deportista creado con exito' },
          player: {
            type: 'object',
            properties: {
              id_player: { type: 'number', example: 1 },
              id_user: { type: 'number', example: 1 },
              birth_date: { type: 'string', format: 'date-time', example: '2005-05-15T00:00:00.000Z' },
              nationality: { type: 'string', example: 'Colombiana' },
              foot: { type: 'string', example: 'Derecho' },
              hand: { type: 'string', example: 'Derecho' },
              main_position: { type: 'string', example: 'Delantero' },
              discipline: { type: 'string', example: 'Fútbol' },
              status: { type: 'string', example: 'Activo' },
              user_name: { type: 'string', example: 'Juan' },
              user_lastname: { type: 'string', example: 'Pérez' },
              user_document: { type: 'string', example: '1234567' }
            }
          }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error en la creación - Usuario no existe o deportista ya existe',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'Este deportista ya esta registrado' }
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
      schema: {
        type: 'object',
        properties: {
          birth_date: { type: 'string', format: 'date-time', example: '2005-05-15' },
          nationality: { type: 'string', example: 'Colombiana' },
          foot: { type: 'string', example: 'Izquierdo' },
          hand: { type: 'string', example: 'Derecho' },
          main_position: { type: 'string', example: 'Mediocampista' },
          discipline: { type: 'string', example: 'Fútbol' },
          status: { type: 'string', example: 'Activo' }
        }
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Deportista actualizado exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Deportista actualizado con exito' },
          player: {
            type: 'object',
            properties: {
              id_player: { type: 'number', example: 1 },
              id_user: { type: 'number', example: 1 },
              birth_date: { type: 'string', format: 'date-time', example: '2005-05-15T00:00:00.000Z' },
              nationality: { type: 'string', example: 'Colombiana' },
              foot: { type: 'string', example: 'Izquierdo' },
              hand: { type: 'string', example: 'Derecho' },
              main_position: { type: 'string', example: 'Mediocampista' },
              discipline: { type: 'string', example: 'Fútbol' },
              status: { type: 'string', example: 'Activo' },
              user_name: { type: 'string', example: 'Juan' },
              user_lastname: { type: 'string', example: 'Pérez' },
              user_document: { type: 'string', example: '1234567' }
            }
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Deportista no encontrado',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe este deportista' }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error - Intento de cambiar ID de usuario',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No se puede cambiar el id del usuario' }
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
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Deportista eliminado con exito' }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Deportista no encontrado',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe este deportista' }
        }
      }
    })
  );
}
