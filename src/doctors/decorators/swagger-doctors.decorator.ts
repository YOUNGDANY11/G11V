import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiBody } from '@nestjs/swagger';

export function ApiGetAllDoctors() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener todos los asociados al area medica',
      description: 'Retorna una lista de todos los médicos registrados con sus datos completos'
    }),
    ApiResponse({
      status: 200,
      description: 'Lista de médicos obtenida con éxito',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Asociados al area medica obtenidos con exito',
          doctor: [
            {
              id_doctor: 1,
              id_user: 1,
              birth_date: '1990-01-15T00:00:00.000Z',
              nationality: 'Colombiana',
              profession: 'Cardiólogo',
              job_title: 'Especialista',
              description: 'Experto en cardiología',
              status: 'active',
              user_name: 'Juan',
              user_lastname: 'Pérez',
              user_document: '1111111111'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No hay médicos registrados',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No hay doctores registrados'
        }
      }
    })
  );
}

export function ApiGetDoctorById() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener médico por ID',
      description: 'Obtiene los datos de un médico específico utilizando su ID'
    }),
    ApiParam({ name: 'id', description: 'ID del médico', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Médico obtenido exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Medico obtenido con exito',
          doctor: {
            id_doctor: 1,
            id_user: 1,
            birth_date: '1990-01-15T00:00:00.000Z',
            nationality: 'Colombiana',
            profession: 'Cardiólogo',
            job_title: 'Especialista',
            description: 'Experto en cardiología',
            status: 'active',
            user_name: 'Juan',
            user_lastname: 'Pérez',
            user_document: '1111111111'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Médico no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este doctor'
        }
      }
    })
  );
}

export function ApiGetDoctorByName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener médico por nombre de usuario',
      description: 'Busca médicos por el nombre del usuario asociado'
    }),
    ApiQuery({ name: 'name', description: 'Nombre del usuario', example: 'Pepe' }),
    ApiResponse({
      status: 200,
      description: 'Médicos encontrados exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Medico obtenido con exito',
          doctors: [
            {
              id_doctor: 1,
              id_user: 1,
              birth_date: '1990-01-15T00:00:00.000Z',
              nationality: 'Colombiana',
              profession: 'Cardiólogo',
              job_title: 'Especialista',
              description: 'Experto en cardiología',
              status: 'active',
              user_name: 'Pepe',
              user_lastname: 'Pérez',
              user_document: '1111111111'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe médico con este nombre',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe ningun doctor con este nombre'
        }
      }
    })
  );
}

export function ApiGetDoctorByLastName() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener médico por apellido de usuario',
      description: 'Busca médicos por el apellido del usuario asociado'
    }),
    ApiQuery({ name: 'lastname', description: 'Apellido del usuario', example: 'Perez' }),
    ApiResponse({
      status: 200,
      description: 'Médicos encontrados exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Medico obtenido con exito',
          doctors: [
            {
              id_doctor: 1,
              id_user: 1,
              birth_date: '1990-01-15T00:00:00.000Z',
              nationality: 'Colombiana',
              profession: 'Cardiólogo',
              job_title: 'Especialista',
              description: 'Experto en cardiología',
              status: 'active',
              user_name: 'Juan',
              user_lastname: 'Perez',
              user_document: '1111111111'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe médico con este apellido',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe ningun doctor con este apellido'
        }
      }
    })
  );
}

export function ApiGetDoctorByDocument() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obtener médico por documento de usuario',
      description: 'Busca médicos por el número de documento del usuario asociado'
    }),
    ApiQuery({ name: 'document', description: 'Documento del usuario', example: '1111111111' }),
    ApiResponse({
      status: 200,
      description: 'Médicos encontrados exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Medico obtenido con exito',
          doctors: [
            {
              id_doctor: 1,
              id_user: 1,
              birth_date: '1990-01-15T00:00:00.000Z',
              nationality: 'Colombiana',
              profession: 'Cardiólogo',
              job_title: 'Especialista',
              description: 'Experto en cardiología',
              status: 'active',
              user_name: 'Juan',
              user_lastname: 'Pérez',
              user_document: '1111111111'
            }
          ]
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'No existe médico con este documento',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe ningun doctor con este documento'
        }
      }
    })
  );
}

export function ApiCreateDoctor() {
  return applyDecorators(
    ApiOperation({
      summary: 'Crear un nuevo médico',
      description: 'Crea un nuevo registro de médico asociado a un usuario existente'
    }),
    ApiBody({
      description: 'Datos requeridos para crear un nuevo médico',
      examples: {
        example1: {
          value: {
            id_user: 1,
            birth_date: '1990-01-15',
            nationality: 'Colombiana',
            profession: 'Cardiólogo',
            job_title: 'Especialista',
            description: 'Experto en cardiología',
            status: 'active'
          }
        }
      }
    }),
    ApiResponse({
      status: 201,
      description: 'Médico creado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Medico creado con exito',
          doctor: {
            id_doctor: 1,
            id_user: 1,
            birth_date: '1990-01-15T00:00:00.000Z',
            nationality: 'Colombiana',
            profession: 'Cardiólogo',
            job_title: 'Especialista',
            description: 'Experto en cardiología',
            status: 'active'
          }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Error en la creación - Usuario no existe o médico ya existe',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'Ya existe este doctor'
        }
      }
    })
  );
}

export function ApiUpdateDoctor() {
  return applyDecorators(
    ApiOperation({
      summary: 'Actualizar médico',
      description: 'Actualiza los datos de un médico existente. No se puede cambiar el ID del usuario.'
    }),
    ApiParam({ name: 'id', description: 'ID del médico a actualizar', example: 1 }),
    ApiBody({
      description: 'Datos a actualizar del médico',
      examples: {
        example1: {
          value: {
            birth_date: '1990-01-15',
            nationality: 'Colombiana',
            profession: 'Cardiólogo Interventor',
            job_title: 'Especialista Senior',
            description: 'Experto en cardiología intervencionista',
            status: 'active'
          }
        }
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Médico actualizado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Medico actualizado con exito',
          doctor: {
            id_doctor: 1,
            id_user: 1,
            birth_date: '1990-01-15T00:00:00.000Z',
            nationality: 'Colombiana',
            profession: 'Cardiólogo Interventor',
            job_title: 'Especialista Senior',
            description: 'Experto en cardiología intervencionista',
            status: 'active'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Médico no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este doctor'
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

export function ApiDeleteDoctor() {
  return applyDecorators(
    ApiOperation({
      summary: 'Eliminar médico',
      description: 'Elimina un médico del sistema'
    }),
    ApiParam({ name: 'id', description: 'ID del médico a eliminar', example: 1 }),
    ApiResponse({
      status: 200,
      description: 'Médico eliminado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Medico eliminado con exito'
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Médico no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe este doctor'
        }
      }
    })
  );
}
