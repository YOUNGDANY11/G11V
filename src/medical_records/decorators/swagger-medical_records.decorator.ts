import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiBody } from '@nestjs/swagger';

const medicalRecordSchema = {
  type: 'object',
  properties: {
    id_medical_record: {
      type: 'number',
      description: 'ID único del registro médico',
      example: 1
    },
    id_doctor: {
      type: 'number',
      description: 'ID del doctor',
      example: 1
    },
    id_player: {
      type: 'number',
      description: 'ID del deportista',
      example: 1
    },
    date: {
      type: 'string',
      format: 'date-time',
      description: 'Fecha del registro médico',
      example: '2026-04-27T10:30:00.000Z'
    },
    heigth: {
      type: 'number',
      description: 'Estatura del deportista en cm',
      example: 180
    },
    weigth: {
      type: 'number',
      description: 'Peso del deportista en kg',
      example: 75
    },
    fat_percentage: {
      type: 'number',
      format: 'double',
      description: 'Porcentaje de grasa corporal',
      example: 15
    },
    muscle_mass: {
      type: 'number',
      format: 'double',
      description: 'Masa muscular en kg',
      example: 65
    },
    doctor_name: {
      type: 'string',
      description: 'Nombre del doctor',
      example: 'Carlos'
    },
    doctor_lastname: {
      type: 'string',
      description: 'Apellido del doctor',
      example: 'García'
    },
    player_name: {
      type: 'string',
      description: 'Nombre del deportista',
      example: 'Juan'
    },
    player_lastname: {
      type: 'string',
      description: 'Apellido del deportista',
      example: 'Pérez'
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      description: 'Fecha de creación',
      example: '2026-04-20T08:00:00.000Z'
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
      description: 'Fecha de última actualización',
      example: '2026-04-27T10:30:00.000Z'
    }
  }
};

export function ApiGetAllMedicalRecords() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener todos los registros médicos',
      description: 'Retorna una lista de todos los registros médicos registrados con información completa del deportista y doctor'
    }),
    ApiResponse({
      status: 200,
      description: 'Lista de registros médicos obtenida exitosamente',
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
          medical_records: {
            type: 'array',
            items: medicalRecordSchema
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existen registros médicos',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existen registros medicos' }
        }
      }
    })
  );
}

export function ApiGetMedicalRecordById() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener registro médico por ID',
      description: 'Obtiene los datos de un registro médico específico utilizando su ID'
    }),
    ApiParam({ name: 'id', description: 'ID del registro médico', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Registro médico obtenido exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Consulta exitosa' },
          medical_record: medicalRecordSchema
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Registro médico no encontrado',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe este registro medico' }
        }
      }
    })
  );
}

export function ApiGetMedicalRecordByPlayerName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener registros médicos por nombre del deportista',
      description: 'Busca registros médicos por el nombre del usuario (deportista) asociado'
    }),
    ApiQuery({ name: 'name', description: 'Nombre del deportista', example: 'Juan' }),
    ApiResponse({
      status: 200,
      description: 'Registros médicos encontrados exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Consulta exitosa' },
          medical_records: {
            type: 'array',
            items: medicalRecordSchema
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico de este deportista',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe registro medico de este deportista' }
        }
      }
    })
  );
}

export function ApiGetMedicalRecordByPlayerLastName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener registros médicos por apellido del deportista',
      description: 'Busca registros médicos por el apellido del usuario (deportista) asociado'
    }),
    ApiQuery({ name: 'lastname', description: 'Apellido del deportista', example: 'Pérez' }),
    ApiResponse({
      status: 200,
      description: 'Registros médicos encontrados exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Consulta exitosa' },
          medical_records: {
            type: 'array',
            items: medicalRecordSchema
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico de este deportista',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe registro medico de este deportista' }
        }
      }
    })
  );
}

export function ApiGetMedicalRecordByPlayerDocument() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener registros médicos por documento del deportista',
      description: 'Busca registros médicos por el documento del usuario (deportista) asociado'
    }),
    ApiQuery({ name: 'document', description: 'Documento del deportista', example: '1234567890' }),
    ApiResponse({
      status: 200,
      description: 'Registros médicos encontrados exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Consulta exitosa' },
          medical_records: {
            type: 'array',
            items: medicalRecordSchema
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico de este deportista',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe registro medico de este deportista' }
        }
      }
    })
  );
}

export function ApiGetMedicalRecordByDoctorName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener registros médicos por nombre del doctor',
      description: 'Busca registros médicos por el nombre del doctor que los realizó'
    }),
    ApiQuery({ name: 'name', description: 'Nombre del doctor', example: 'Carlos' }),
    ApiResponse({
      status: 200,
      description: 'Registros médicos encontrados exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Consulta exitosa' },
          medical_records: {
            type: 'array',
            items: medicalRecordSchema
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico realizado por este doctor',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe registro medico realizado por este doctor' }
        }
      }
    })
  );
}

export function ApiGetMedicalRecordByDoctorLastName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener registros médicos por apellido del doctor',
      description: 'Busca registros médicos por el apellido del doctor que los realizó'
    }),
    ApiQuery({ name: 'lastname', description: 'Apellido del doctor', example: 'García' }),
    ApiResponse({
      status: 200,
      description: 'Registros médicos encontrados exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Consulta exitosa' },
          medical_records: {
            type: 'array',
            items: medicalRecordSchema
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico realizado por este doctor',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe registro medico realizado por este doctor' }
        }
      }
    })
  );
}

export function ApiGetMedicalRecordByDoctorDocument() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener registros médicos por documento del doctor',
      description: 'Busca registros médicos por el documento del doctor que los realizó'
    }),
    ApiQuery({ name: 'document', description: 'Documento del doctor', example: '9876543210' }),
    ApiResponse({
      status: 200,
      description: 'Registros médicos encontrados exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Consulta exitosa' },
          medical_records: {
            type: 'array',
            items: medicalRecordSchema
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico realizado por este doctor',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe registro medico realizado por este doctor' }
        }
      }
    })
  );
}

export function ApiCreateMedicalRecord() {
  return applyDecorators(
    ApiOperation({
      summary: 'Crear un nuevo registro médico',
      description: 'Crea un nuevo registro médico con las medidas y datos del deportista'
    }),
    ApiBody({
      description: 'Datos requeridos para crear un nuevo registro médico',
      schema: {
        type: 'object',
        required: ['id_player', 'id_doctor', 'date', 'heigth', 'weigth', 'fat_percentage', 'muscle_mass'],
        properties: {
          id_player: {
            type: 'number',
            description: 'ID del deportista (requerido)',
            example: 1
          },
          id_doctor: {
            type: 'number',
            description: 'ID del doctor (requerido)',
            example: 1
          },
          date: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha del registro médico (requerido)',
            example: '2026-04-27T10:30:00.000Z'
          },
          heigth: {
            type: 'number',
            description: 'Estatura del deportista en cm (requerido)',
            example: 180
          },
          weigth: {
            type: 'number',
            description: 'Peso del deportista en kg (requerido)',
            example: 75
          },
          fat_percentage: {
            type: 'number',
            format: 'double',
            description: 'Porcentaje de grasa corporal (requerido, máx 2 decimales)',
            example: 15.5
          },
          muscle_mass: {
            type: 'number',
            format: 'double',
            description: 'Masa muscular en kg (requerido, máx 2 decimales)',
            example: 65.25
          }
        }
      }
    }),
    ApiResponse({
      status: 201,
      description: 'Registro médico creado exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Registro medico creado con exito' },
          medical_record: {
            type: 'object',
            properties: {
              id_medical_record: { type: 'number', example: 1 },
              id_doctor: { type: 'number', example: 1 },
              id_player: { type: 'number', example: 1 },
              date: { type: 'string', format: 'date-time', example: '2026-04-27T10:30:00.000Z' },
              heigth: { type: 'number', example: 180 },
              weigth: { type: 'number', example: 75 },
              fat_percentage: { type: 'number', example: 15.5 },
              muscle_mass: { type: 'number', example: 65.25 }
            }
          }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error en la creación - Deportista o doctor no existe',
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

export function ApiUpdateMedicalRecord() {
  return applyDecorators(
    ApiOperation({
      summary: 'Actualizar registro médico',
      description: 'Actualiza los datos de un registro médico. No se puede cambiar el ID del deportista o doctor.'
    }),
    ApiParam({ name: 'id', description: 'ID del registro médico a actualizar', example: 1 }),
    ApiBody({
      description: 'Datos a actualizar del registro médico',
      schema: {
        type: 'object',
        properties: {
          date: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha del registro médico',
            example: '2026-04-27T10:30:00.000Z'
          },
          heigth: {
            type: 'number',
            description: 'Estatura del deportista en cm',
            example: 182
          },
          weigth: {
            type: 'number',
            description: 'Peso del deportista en kg',
            example: 76
          },
          fat_percentage: {
            type: 'number',
            format: 'double',
            description: 'Porcentaje de grasa corporal (máx 2 decimales)',
            example: 14.2
          },
          muscle_mass: {
            type: 'number',
            format: 'double',
            description: 'Masa muscular en kg (máx 2 decimales)',
            example: 66.5
          }
        }
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Registro médico actualizado exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Registro medico actualizado con exito' },
          medical_record: medicalRecordSchema
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Registro médico no encontrado',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe este registro medico' }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error - Intento de cambiar ID de doctor o deportista',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No se puede cambiar el id del doctor' }
        }
      }
    })
  );
}

export function ApiDeleteMedicalRecord() {
  return applyDecorators(
    ApiOperation({
      summary: 'Eliminar registro médico',
      description: 'Elimina un registro médico del sistema'
    }),
    ApiParam({ name: 'id', description: 'ID del registro médico a eliminar', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Registro médico eliminado exitosamente',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Success' },
          mensaje: { type: 'string', example: 'Registro medico eliminado con exito' }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Registro médico no encontrado',
      schema: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'Error' },
          mensaje: { type: 'string', example: 'No existe este registro medico' }
        }
      }
    })
  );
}
