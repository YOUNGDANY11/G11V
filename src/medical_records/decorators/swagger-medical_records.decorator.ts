import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiBody } from '@nestjs/swagger';

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
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          medical_records: [
            {
              id_medical_record: 1,
              id_doctor: 1,
              id_player: 1,
              date: '2026-04-27T10:30:00.000Z',
              heigth: 180,
              weigth: 75,
              fat_percentage: 15,
              muscle_mass: 65,
              doctor_name: 'Carlos',
              doctor_lastname: 'García',
              player_name: 'Juan',
              player_lastname: 'Pérez',
              created_at: '2026-04-20T08:00:00.000Z',
              updated_at: '2026-04-27T10:30:00.000Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existen registros médicos',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existen registros medicos'
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
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          medical_record: {
            id_medical_record: 1,
            id_doctor: 1,
            id_player: 1,
            date: '2026-04-27T10:30:00.000Z',
            heigth: 180,
            weigth: 75,
            fat_percentage: 15,
            muscle_mass: 65,
            doctor_name: 'Carlos',
            doctor_lastname: 'García',
            player_name: 'Juan',
            player_lastname: 'Pérez',
            created_at: '2026-04-20T08:00:00.000Z',
            updated_at: '2026-04-27T10:30:00.000Z'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Registro médico no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este registro medico'
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
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          medical_records: [
            {
              id_medical_record: 1,
              id_doctor: 1,
              id_player: 1,
              date: '2026-04-27T10:30:00.000Z',
              heigth: 180,
              weigth: 75,
              fat_percentage: 15,
              muscle_mass: 65,
              doctor_name: 'Carlos',
              doctor_lastname: 'García',
              player_name: 'Juan',
              player_lastname: 'Pérez',
              created_at: '2026-04-20T08:00:00.000Z',
              updated_at: '2026-04-27T10:30:00.000Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico de este deportista',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe registro medico de este deportista'
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
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          medical_records: [
            {
              id_medical_record: 1,
              id_doctor: 1,
              id_player: 1,
              date: '2026-04-27T10:30:00.000Z',
              heigth: 180,
              weigth: 75,
              fat_percentage: 15,
              muscle_mass: 65,
              doctor_name: 'Carlos',
              doctor_lastname: 'García',
              player_name: 'Juan',
              player_lastname: 'Pérez',
              created_at: '2026-04-20T08:00:00.000Z',
              updated_at: '2026-04-27T10:30:00.000Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico de este deportista',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe registro medico de este deportista'
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
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          medical_records: [
            {
              id_medical_record: 1,
              id_doctor: 1,
              id_player: 1,
              date: '2026-04-27T10:30:00.000Z',
              heigth: 180,
              weigth: 75,
              fat_percentage: 15,
              muscle_mass: 65,
              doctor_name: 'Carlos',
              doctor_lastname: 'García',
              player_name: 'Juan',
              player_lastname: 'Pérez',
              created_at: '2026-04-20T08:00:00.000Z',
              updated_at: '2026-04-27T10:30:00.000Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico de este deportista',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe registro medico de este deportista'
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
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          medical_records: [
            {
              id_medical_record: 1,
              id_doctor: 1,
              id_player: 1,
              date: '2026-04-27T10:30:00.000Z',
              heigth: 180,
              weigth: 75,
              fat_percentage: 15,
              muscle_mass: 65,
              doctor_name: 'Carlos',
              doctor_lastname: 'García',
              player_name: 'Juan',
              player_lastname: 'Pérez',
              created_at: '2026-04-20T08:00:00.000Z',
              updated_at: '2026-04-27T10:30:00.000Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico realizado por este doctor',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe registro medico realizado por este doctor'
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
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          medical_records: [
            {
              id_medical_record: 1,
              id_doctor: 1,
              id_player: 1,
              date: '2026-04-27T10:30:00.000Z',
              heigth: 180,
              weigth: 75,
              fat_percentage: 15,
              muscle_mass: 65,
              doctor_name: 'Carlos',
              doctor_lastname: 'García',
              player_name: 'Juan',
              player_lastname: 'Pérez',
              created_at: '2026-04-20T08:00:00.000Z',
              updated_at: '2026-04-27T10:30:00.000Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico realizado por este doctor',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe registro medico realizado por este doctor'
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
        example: {
          status: 'Success',
          mensaje: 'Consulta exitosa',
          medical_records: [
            {
              id_medical_record: 1,
              id_doctor: 1,
              id_player: 1,
              date: '2026-04-27T10:30:00.000Z',
              heigth: 180,
              weigth: 75,
              fat_percentage: 15,
              muscle_mass: 65,
              doctor_name: 'Carlos',
              doctor_lastname: 'García',
              player_name: 'Juan',
              player_lastname: 'Pérez',
              created_at: '2026-04-20T08:00:00.000Z',
              updated_at: '2026-04-27T10:30:00.000Z'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe registro médico realizado por este doctor',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe registro medico realizado por este doctor'
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
      examples: {
        example1: {
          value: {
            id_player: 1,
            id_doctor: 1,
            date: '2026-04-27T10:30:00.000Z',
            heigth: 180,
            weigth: 75,
            fat_percentage: 15,
            muscle_mass: 65
          }
        }
      }
    }),
    ApiResponse({
      status: 201,
      description: 'Registro médico creado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Registro medico creado con exito',
          medical_record: {
            id_medical_record: 1,
            id_doctor: 1,
            id_player: 1,
            date: '2026-04-27T10:30:00.000Z',
            heigth: 180,
            weigth: 75,
            fat_percentage: 15,
            muscle_mass: 65
          }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error en la creación - Deportista o doctor no existe',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este deportista'
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
      examples: {
        example1: {
          value: {
            date: '2026-04-27T10:30:00.000Z',
            heigth: 182,
            weigth: 76,
            fat_percentage: 14,
            muscle_mass: 66
          }
        }
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Registro médico actualizado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Registro medico actualizado con exito',
          medical_record: {
            id_medical_record: 1,
            id_doctor: 1,
            id_player: 1,
            date: '2026-04-27T10:30:00.000Z',
            heigth: 182,
            weigth: 76,
            fat_percentage: 14,
            muscle_mass: 66
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Registro médico no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este registro medico'
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error - Intento de cambiar ID de doctor o deportista',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No se puede cambiar el id del doctor'
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
        example: {
          status: 'Success',
          mensaje: 'Registro medico eliminado con exito'
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Registro médico no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este registro medico'
        }
      }
    })
  );
}
